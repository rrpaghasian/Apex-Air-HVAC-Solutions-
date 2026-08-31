import React, { useEffect, useRef } from 'react';

const TOTAL_FRAMES = 72;

interface DynamicBackgroundVideoProps {
  progressRef?: React.MutableRefObject<number>;
}

export const DynamicBackgroundVideo: React.FC<DynamicBackgroundVideoProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(-1);

  const drawFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const clampedIndex = Math.min(TOTAL_FRAMES - 1, Math.max(0, frameIndex));
    if (currentFrameRef.current === clampedIndex) return;

    const img = imagesRef.current[clampedIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    currentFrameRef.current = clampedIndex;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1280;
    const imgHeight = img.naturalHeight || 720;

    // Calculate object-fit: cover sizing and centering
    const hRatio = canvasWidth / imgWidth;
    const vRatio = canvasHeight / imgHeight;
    const ratio = Math.max(hRatio, vRatio);

    const drawWidth = imgWidth * ratio;
    const drawHeight = imgHeight * ratio;
    const shiftX = (canvasWidth - drawWidth) / 2;
    const shiftY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(img, 0, 0, imgWidth, imgHeight, shiftX, shiftY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions to viewport size with Retina pixel ratio
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * dpr);
      canvas.height = Math.round(window.innerHeight * dpr);
      if (currentFrameRef.current >= 0) {
        const lastIdx = currentFrameRef.current;
        currentFrameRef.current = -1;
        drawFrame(lastIdx);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Preload all 72 high-density frames in background
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, '0');
      img.src = `/frames/frame_${numStr}.jpg`;

      if (i === 1) {
        img.onload = () => {
          drawFrame(0);
        };
      }
      images.push(img);
    }
    imagesRef.current = images;

    // Expose direct global draw trigger for 120fps RAF loop
    (window as any).__APEX_DRAW_FRAME__ = (progress: number) => {
      const idx = Math.min(TOTAL_FRAMES - 1, Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1))));
      drawFrame(idx);
    };

    return () => {
      window.removeEventListener('resize', handleResize);
      delete (window as any).__APEX_DRAW_FRAME__;
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-[100dvh] -z-10 overflow-hidden bg-neutral-950 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover transform-gpu"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden'
        }}
      />

      {/* Ambient cinematic gradient overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/75 pointer-events-none" />
    </div>
  );
};

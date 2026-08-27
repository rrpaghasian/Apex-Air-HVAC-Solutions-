import { useEffect, useRef, useState } from 'react';

interface UseVideoScrubberOptions {
  smoothingFactor?: number;
  onProgressUpdate?: (progress: number) => void;
}

export function useVideoScrubber(options: UseVideoScrubberOptions = {}) {
  const { smoothingFactor = 8, onProgressUpdate } = options;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Never call play() - drive strictly by seeking currentTime
    video.pause();

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        video.currentTime = 0;
        setProgress(0);
        onProgressUpdate?.(0);
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    let current = 0;
    let target = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    const handleMetadata = () => {
      video.pause();
      setIsReady(true);
      if (prefersReducedMotion) {
        video.currentTime = 0;
      }
    };

    video.addEventListener('loadedmetadata', handleMetadata);

    const renderLoop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!prefersReducedMotion && video.duration && !isNaN(video.duration)) {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const rawScrollProgress = scrollableHeight > 0 
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1) 
          : 0;

        target = rawScrollProgress * video.duration;

        // Exponential Playhead Smoothing Filter
        current += (target - current) * (1 - Math.exp(-dt * smoothingFactor));

        if (Number.isFinite(current)) {
          const boundedTime = Math.min(Math.max(current, 0), Math.max(video.duration - 0.001, 0));
          
          if (Math.abs(video.currentTime - boundedTime) > 0.001) {
            video.currentTime = boundedTime;
          }

          const normalized = boundedTime / video.duration;
          setProgress(normalized);
          onProgressUpdate?.(normalized);
        }
      } else if (prefersReducedMotion) {
        video.currentTime = 0;
        setProgress(0);
        onProgressUpdate?.(0);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener('change', handleMotionChange);
      video.removeEventListener('loadedmetadata', handleMetadata);
    };
  }, [smoothingFactor]);

  return { videoRef, progress, isReady };
}

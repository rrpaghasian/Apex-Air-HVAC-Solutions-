import { useEffect, useRef, useState } from 'react';

interface UseVideoScrubberOptions {
  smoothingFactor?: number;
  onDirectScrub?: (progress: number) => void;
  onPhaseChange?: (phase: string) => void;
}

export function useVideoScrubber(options: UseVideoScrubberOptions = {}) {
  const { smoothingFactor = 12, onDirectScrub, onPhaseChange } = options;
  const [progressState, setProgressState] = useState(0);
  const [phaseState, setPhaseState] = useState('01');

  const onDirectScrubRef = useRef(onDirectScrub);
  onDirectScrubRef.current = onDirectScrub;

  const onPhaseChangeRef = useRef(onPhaseChange);
  onPhaseChangeRef.current = onPhaseChange;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReducedMotion = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion = e.matches;
      if (prefersReducedMotion) {
        onDirectScrubRef.current?.(0);
        (window as any).__APEX_DRAW_FRAME__?.(0);
      }
    };
    mediaQuery.addEventListener('change', handleMotionChange);

    let current = 0;
    let target = 0;
    let lastTime = performance.now();
    let lastStateUpdateTime = 0;
    let lastPhase = '01';
    let animationFrameId: number;

    const renderLoop = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (!prefersReducedMotion) {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const rawProgress = scrollableHeight > 0 
          ? Math.min(Math.max(window.scrollY / scrollableHeight, 0), 1) 
          : 0;

        target = rawProgress;

        // Exponential Playhead Smoothing Filter
        current += (target - current) * (1 - Math.exp(-dt * smoothingFactor));

        if (Number.isFinite(current)) {
          const normalized = Math.min(Math.max(current, 0), 1);

          // 1. Direct GPU DOM transform for text (butter-smooth 120fps on iPad/iPhone)
          onDirectScrubRef.current?.(normalized);

          // 2. Instantaneous Canvas Frame Draw (0.1ms frame draw, ZERO jumping!)
          (window as any).__APEX_DRAW_FRAME__?.(normalized);

          // 3. Low-overhead state updates for telemetry & phase indicator (60ms throttle)
          if (now - lastStateUpdateTime > 60) {
            lastStateUpdateTime = now;
            setProgressState(normalized);

            let newPhase = '01';
            if (normalized >= 0.65) newPhase = '03';
            else if (normalized >= 0.32) newPhase = '02';

            if (newPhase !== lastPhase) {
              lastPhase = newPhase;
              setPhaseState(newPhase);
              onPhaseChangeRef.current?.(newPhase);
            }
          }
        }
      } else if (prefersReducedMotion) {
        onDirectScrubRef.current?.(0);
        (window as any).__APEX_DRAW_FRAME__?.(0);
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    animationFrameId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      mediaQuery.removeEventListener('change', handleMotionChange);
    };
  }, [smoothingFactor]);

  return { progressState, phaseState };
}

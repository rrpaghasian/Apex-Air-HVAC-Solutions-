import React, { forwardRef } from 'react';

interface DynamicPhaseIndicatorProps {
  phase: string;
}

export const DynamicPhaseIndicator = forwardRef<HTMLDivElement, DynamicPhaseIndicatorProps>(({ phase }, ref) => {
  return (
    <aside className="fixed bottom-4 left-4 sm:bottom-8 sm:left-10 z-30 flex items-center gap-2.5 sm:gap-4 pointer-events-none font-mono text-[10px] sm:text-xs bg-black/40 sm:bg-transparent backdrop-blur-xs sm:backdrop-blur-none px-2.5 py-1 sm:p-0 rounded-full border border-white/10 sm:border-0">
      <span className="text-white font-medium">{phase}</span>
      <div className="w-10 sm:w-16 h-[1px] bg-neutral-700 relative overflow-hidden">
        <div
          ref={ref}
          className="h-full bg-white will-change-transform origin-left transition-none"
          style={{ transform: 'scaleX(0)' }}
        />
      </div>
      <span className="text-neutral-500">03</span>
    </aside>
  );
});

DynamicPhaseIndicator.displayName = 'DynamicPhaseIndicator';

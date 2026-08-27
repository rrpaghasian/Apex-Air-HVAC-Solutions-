import React from 'react';

interface DynamicPhaseIndicatorProps {
  phase: string;
  progress: number;
}

export const DynamicPhaseIndicator: React.FC<DynamicPhaseIndicatorProps> = ({ phase, progress }) => {
  return (
    <aside className="fixed bottom-8 left-6 sm:left-10 z-30 flex items-center gap-4 pointer-events-none font-mono text-xs">
      <span className="text-white font-medium">{phase}</span>
      <div className="w-16 h-[1px] bg-neutral-800 relative overflow-hidden">
        <div
          className="h-full bg-white transition-all duration-75"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
      <span className="text-neutral-600">03</span>
    </aside>
  );
};

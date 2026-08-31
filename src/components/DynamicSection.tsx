import React, { forwardRef } from 'react';
import { SectionContent } from '../types';
import { CheckCircle2, ArrowRight, Phone, Zap, Sparkles } from 'lucide-react';

interface DynamicSectionProps {
  section: SectionContent;
  index: number;
  phoneRaw: string;
  onOpenBooking: (promoCode?: string) => void;
  onOpenTroubleshooter: () => void;
  onOpenSeer: () => void;
  onOpenGHL: () => void;
}

export const DynamicSection = forwardRef<HTMLDivElement, DynamicSectionProps>(({
  section,
  index,
  phoneRaw,
  onOpenBooking,
  onOpenTroubleshooter,
  onOpenSeer,
  onOpenGHL
}, ref) => {
  const handlePrimaryClick = () => {
    if (section.primaryCta?.action === 'open-booking') {
      onOpenBooking(section.primaryCta.promoCode);
    } else if (section.primaryCta?.action === 'open-troubleshooter') {
      onOpenTroubleshooter();
    }
  };

  const handleSecondaryClick = () => {
    if (section.secondaryCta?.action === 'call') {
      window.location.href = `tel:${phoneRaw}`;
    } else if (section.secondaryCta?.action === 'open-seer') {
      onOpenSeer();
    } else if (section.secondaryCta?.action === 'open-ghl') {
      onOpenGHL();
    }
  };

  // Initial SSR/mount styles (Section 0 starts visible, 1 and 2 start hidden)
  const initialOpacity = index === 0 ? 1 : 0;
  const initialVisibility = index === 0 ? 'visible' : 'hidden';
  const initialPointerEvents = index === 0 ? 'auto' : 'none';

  return (
    <div
      ref={ref}
      className="absolute max-w-4xl w-full text-center space-y-3.5 sm:space-y-5 md:space-y-6 will-change-transform px-3 sm:px-6 transition-none"
      style={{
        opacity: initialOpacity,
        transform: 'translate3d(0, 0px, 0) scale(1)',
        visibility: initialVisibility,
        pointerEvents: initialPointerEvents
      }}
    >
      {/* Top Promotional Badge */}
      {section.badge && (
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-lg">
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
          <span>{section.badge}</span>
        </div>
      )}

      {/* Main Title & Subtitle */}
      <div className="space-y-1 sm:space-y-2">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] sm:tracking-[0.4em] text-neutral-300 font-light">
          {section.subtitle}
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white drop-shadow-2xl leading-tight">
          {section.headline}
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-300 font-light tracking-wide max-w-2xl mx-auto pt-1 sm:pt-2 px-2 sm:px-0">
          {section.description}
        </p>
      </div>

      {/* Section 1 & 3 Trust Features Checklist */}
      {section.features && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2.5 max-w-3xl mx-auto pt-1 sm:pt-2 text-left sm:text-center">
          {section.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium text-neutral-200 bg-black/45 backdrop-blur-md px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-neutral-800/80">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Section 2 Service Matrix Cards */}
      {section.servicePills && (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 max-w-3xl mx-auto pt-1 sm:pt-2 text-left">
          {section.servicePills.map((pill, i) => (
            <div
              key={i}
              onClick={() => onOpenBooking(pill.actionCode)}
              className="group p-2.5 sm:p-3.5 rounded-xl bg-black/55 border border-neutral-700/60 hover:border-cyan-400/80 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer shadow-lg block"
            >
              <div className="flex items-center justify-between gap-1 pb-1">
                <span className="text-[11px] sm:text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">{pill.title}</span>
                <span className="text-[9px] sm:text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1 py-0.5 rounded font-mono font-semibold">{pill.badge}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-neutral-400 leading-snug hidden xs:block">{pill.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* High-Converting Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 pt-2 sm:pt-3">
        {section.primaryCta && (
          <button
            onClick={handlePrimaryClick}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl shadow-xl shadow-orange-500/30 transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer group"
          >
            <span>{section.primaryCta.label}</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        )}

        {section.secondaryCta && (
          <button
            onClick={handleSecondaryClick}
            className="bg-neutral-900/80 hover:bg-neutral-800 active:scale-95 text-neutral-200 hover:text-white border border-neutral-700/80 font-bold text-xs sm:text-sm px-4 py-2.5 sm:px-5 sm:py-3.5 rounded-xl backdrop-blur-md transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            {section.secondaryCta.action === 'call' && <Phone className="w-3.5 h-3.5 text-cyan-400" />}
            {section.secondaryCta.action === 'open-seer' && <Zap className="w-3.5 h-3.5 text-amber-400" />}
            {section.secondaryCta.action === 'open-ghl' && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
            <span>{section.secondaryCta.label}</span>
          </button>
        )}
      </div>
    </div>
  );
});

DynamicSection.displayName = 'DynamicSection';

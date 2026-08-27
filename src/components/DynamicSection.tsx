import React from 'react';
import { SectionContent } from '../types';
import { CheckCircle2, ArrowRight, Phone, Wrench, Zap, Sparkles, ShieldCheck } from 'lucide-react';

interface DynamicSectionProps {
  section: SectionContent;
  index: number;
  scrollProgress: number;
  phoneRaw: string;
  onOpenBooking: (promoCode?: string) => void;
  onOpenTroubleshooter: () => void;
  onOpenSeer: () => void;
  onOpenGHL: () => void;
}

export const DynamicSection: React.FC<DynamicSectionProps> = ({
  section,
  index,
  scrollProgress,
  phoneRaw,
  onOpenBooking,
  onOpenTroubleshooter,
  onOpenSeer,
  onOpenGHL
}) => {
  let opacity = 0;
  let y = 0;
  let scale = 1;

  if (index === 0) {
    // Section 1: Peak at 0.0, fade out by 0.32
    opacity = Math.max(0, Math.min(1, 1 - (scrollProgress / 0.28)));
    y = -(scrollProgress * 80);
    scale = 1 - (scrollProgress * 0.05);
  } else if (index === 1) {
    // Section 2: Peak at 0.50, range 0.25 -> 0.75
    const dist = Math.abs(scrollProgress - 0.5);
    opacity = Math.max(0, Math.min(1, 1 - (dist / 0.2)));
    y = (0.5 - scrollProgress) * 70;
    scale = 0.95 + (opacity * 0.05);
  } else if (index === 2) {
    // Section 3: Enter at 0.68, peak at 1.0
    opacity = Math.max(0, Math.min(1, (scrollProgress - 0.68) / 0.24));
    y = (1 - scrollProgress) * 70;
    scale = 0.95 + (opacity * 0.05);
  }

  const isVisible = opacity > 0.01;

  const handlePrimaryClick = () => {
    if (section.primaryCta?.action === 'open-booking') {
      onOpenBooking(section.primaryCta.promoCode || 'REBATE25');
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

  return (
    <div
      className="absolute max-w-4xl w-full text-center space-y-6 transition-all duration-75 will-change-transform px-4"
      style={{
        opacity,
        transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
        visibility: isVisible ? 'visible' : 'hidden',
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
    >
      {/* Top Promotional Badge */}
      {section.badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>{section.badge}</span>
        </div>
      )}

      {/* Main Title & Subtitle */}
      <div className="space-y-2">
        <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-neutral-300 font-light">
          {section.subtitle}
        </p>
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white drop-shadow-2xl">
          {section.headline}
        </h2>
        <p className="text-sm sm:text-lg text-neutral-300 font-light tracking-wide max-w-2xl mx-auto pt-2">
          {section.description}
        </p>
      </div>

      {/* Section 1 & 3 Trust Features Checklist */}
      {section.features && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto pt-2 text-left sm:text-center">
          {section.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2 text-xs font-medium text-neutral-200 bg-black/40 backdrop-blur-md px-3 py-2 rounded-lg border border-neutral-800/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="truncate">{feat}</span>
            </div>
          ))}
        </div>
      )}

      {/* Section 2 Service Matrix Cards */}
      {section.servicePills && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto pt-2 text-left">
          {section.servicePills.map((pill, i) => (
            <a
              key={i}
              href="https://sites.leadconnectorhq.com/preview/zWn9C136Lu8hSN8Y1Vi8?notrack=true"
              className="group p-3.5 rounded-xl bg-black/50 border border-neutral-700/60 hover:border-cyan-400/80 backdrop-blur-md transition-all hover:-translate-y-0.5 cursor-pointer shadow-lg no-underline block"
            >
              <div className="flex items-center justify-between gap-1 pb-1.5">
                <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">{pill.title}</span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-1.5 py-0.5 rounded font-mono font-semibold">{pill.badge}</span>
              </div>
              <p className="text-[11px] text-neutral-400 leading-snug">{pill.desc}</p>
            </a>
          ))}
        </div>
      )}

      {/* High-Converting Action Buttons */}
      <div className="flex flex-wrap justify-center items-center gap-3 pt-3">
        {section.primaryCta && (
          <a
            href="https://sites.leadconnectorhq.com/preview/zWn9C136Lu8hSN8Y1Vi8?notrack=true"
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-xl shadow-orange-500/30 transition-all flex items-center gap-2 cursor-pointer group no-underline"
          >
            <span>{section.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        )}

        {section.secondaryCta && (
          <button
            onClick={handleSecondaryClick}
            className="bg-neutral-900/80 hover:bg-neutral-800 active:scale-95 text-neutral-200 hover:text-white border border-neutral-700/80 font-bold text-xs sm:text-sm px-5 py-3.5 rounded-xl backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer"
          >
            {section.secondaryCta.action === 'call' && <Phone className="w-4 h-4 text-cyan-400" />}
            {section.secondaryCta.action === 'open-seer' && <Zap className="w-4 h-4 text-amber-400" />}
            {section.secondaryCta.action === 'open-ghl' && <Sparkles className="w-4 h-4 text-cyan-400" />}
            <span>{section.secondaryCta.label}</span>
          </button>
        )}
      </div>
    </div>
  );
};

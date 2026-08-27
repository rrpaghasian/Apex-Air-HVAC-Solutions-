import React from 'react';
import { ClimateTelemetryResponse, BrandConfig } from '../types';
import { Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface DynamicHeaderProps {
  brand: BrandConfig;
  telemetry: ClimateTelemetryResponse;
  onGetStarted: () => void;
}

export const DynamicHeader: React.FC<DynamicHeaderProps> = ({ brand, telemetry, onGetStarted }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-30 p-4 sm:p-6 lg:px-10 flex flex-wrap justify-between items-center gap-4 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xs">
      {/* Brand & Live Dispatch Badge */}
      <div className="space-y-1">
        <div className="flex items-center gap-2.5">
          <span className="text-sm sm:text-base font-bold tracking-tight text-white">
            {brand.name}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            24/7 Dispatch
          </span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-mono hidden sm:block">
          {telemetry.state}
        </p>
      </div>

      {/* Center Live Climate Feed */}
      <div className="hidden md:flex items-center gap-6 font-mono text-xs text-neutral-300">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-white font-medium">{telemetry.metrics.temperature}</span>
          <span className="text-neutral-500 text-[10px]">EQUILIBRIUM</span>
        </div>
        <div className="h-3 w-px bg-neutral-700" />
        <div>
          <span className="text-white font-medium">{telemetry.metrics.airPurity}</span>
          <span className="text-neutral-500 text-[10px] ml-1.5">PURITY</span>
        </div>
      </div>

      {/* Header Actions: Phone & Get Started CTA */}
      <div className="flex items-center gap-3">
        <a
          href={`tel:${brand.phoneRaw}`}
          className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white px-3 py-2 rounded-lg border border-neutral-700/60 hover:border-neutral-500 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-cyan-400" />
          <span>{brand.phone}</span>
        </a>

        <button
          onClick={onGetStarted}
          className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg shadow-lg shadow-orange-500/25 transition-all flex items-center gap-2 cursor-pointer group"
        >
          <span>Get Started</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </header>
  );
};

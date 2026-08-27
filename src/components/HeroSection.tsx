import React from 'react';
import { CheckCircle2, ShieldCheck, Clock, Award, Flame, Snowflake, ArrowRight, Zap, Sparkles, Wrench } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface HeroSectionProps {
  onScheduleService: () => void;
  onGetEstimate: () => void;
  onOpenTroubleshooter: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScheduleService,
  onGetEstimate,
  onOpenTroubleshooter
}) => {
  return (
    <section id="hero-banner" className="relative bg-gradient-to-b from-slate-900 via-slate-850 to-slate-900 text-white overflow-hidden">
      {/* Background Graphic & HVAC Tech Visual Layer matching reference image */}
      <div className="absolute inset-0 z-0 opacity-25 lg:opacity-35 pointer-events-none mix-blend-luminosity bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-950/70" />
      </div>

      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top promotional pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Buford &amp; Hall County's #1 Rated HVAC Team</span>
            </div>

            {/* Headline matching image style: "Get $25 off on any service call" */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Get <span className="text-orange-400 underline decoration-cyan-500 decoration-4 underline-offset-8">$25 off</span> <br className="hidden sm:inline" />
                on any service call
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-2xl pt-2">
                Fast, same-day HVAC repair, precision seasonal tune-ups, and high-efficiency system replacements with 100% upfront pricing.
              </p>
            </div>

            {/* Action Buttons matching photo */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-btn-schedule"
                onClick={onScheduleService}
                className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-extrabold px-8 py-4 rounded-lg shadow-lg shadow-orange-500/30 hover:shadow-xl transition-all flex items-center gap-3 text-base cursor-pointer group"
              >
                <span>Book Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-btn-estimate"
                onClick={onGetEstimate}
                className="bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-extrabold px-8 py-4 rounded-lg shadow-lg shadow-cyan-600/30 hover:shadow-xl transition-all flex items-center gap-2 text-base cursor-pointer"
              >
                <span>Get Estimate</span>
              </button>
            </div>

            {/* Features Checklist matching code */}
            <div className="pt-4 border-t border-slate-800">
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-sm font-semibold text-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Same-Day Local Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>100% Upfront Quotes</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>EPA-Certified Techs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>1-Yr Workmanship Warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card with technician highlight and emergency status */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-6 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md">
              
              {/* Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Active On-Duty Techs
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-medium">Avg response: 45m</span>
              </div>

              {/* Technician Profile Card preview matching photo */}
              <div className="py-4 flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=240&q=80"
                  alt="Certified HVAC Specialist"
                  className="w-16 h-16 rounded-xl object-cover border-2 border-cyan-500 shadow-md shrink-0"
                />
                <div>
                  <h3 className="text-base font-bold text-white">Need Quick HVAC Help?</h3>
                  <p className="text-xs text-slate-300">Our emergency trucks carry 95% of universal AC &amp; furnace parts for immediate fixes.</p>
                </div>
              </div>

              {/* Quick interactive shortcut buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={onOpenTroubleshooter}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white p-3 rounded-xl font-bold text-sm flex items-center justify-between transition-all shadow-md group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Wrench className="w-4 h-4" />
                    <span>Diagnose AC/Heating Issue</span>
                  </span>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded group-hover:translate-x-0.5 transition-transform">
                    Start Quiz &rarr;
                  </span>
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-100 p-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Call Emergency Dispatch: {COMPANY_INFO.phone}</span>
                </a>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-around text-center text-xs text-slate-300">
                <div>
                  <p className="text-cyan-400 font-extrabold text-sm">4.9 ★</p>
                  <p className="text-[11px] text-slate-400">380+ Reviews</p>
                </div>
                <div className="h-6 w-px bg-slate-700" />
                <div>
                  <p className="text-cyan-400 font-extrabold text-sm">100%</p>
                  <p className="text-[11px] text-slate-400">Fixed Right Guarantee</p>
                </div>
                <div className="h-6 w-px bg-slate-700" />
                <div>
                  <p className="text-cyan-400 font-extrabold text-sm">NATE</p>
                  <p className="text-[11px] text-slate-400">Certified Techs</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { CheckCircle2, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_TIERS } from '../data/hvacData';

interface TransparentPricingSectionProps {
  onSelectTier: (code: string, serviceVal: string) => void;
}

export const TransparentPricingSection: React.FC<TransparentPricingSectionProps> = ({
  onSelectTier,
}) => {
  return (
    <section id="pricing-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
            No Surprises • Zero Hidden Overtime
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 mb-3">
            100% Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            You approve the exact itemized written cost before any technician turns a wrench.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.featured
                  ? 'bg-white border-2 border-cyan-500 shadow-xl ring-4 ring-cyan-500/10 -translate-y-2'
                  : 'bg-white border border-slate-200 shadow-md hover:shadow-lg'
              }`}
            >
              {/* Featured Tag */}
              {tier.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-cyan-600 text-white text-xs font-black uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                  <div className="mt-4 flex items-baseline justify-center gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
                      {tier.price}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">
                      {tier.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-3 text-sm text-slate-700">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => onSelectTier(tier.code, tier.serviceVal)}
                  className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${
                    tier.featured
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-md shadow-orange-500/20'
                      : 'bg-slate-100 hover:bg-cyan-50 hover:text-cyan-700 text-slate-800 border border-slate-200'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

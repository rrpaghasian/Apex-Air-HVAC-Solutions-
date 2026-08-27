import React from 'react';
import { ShieldCheck, Tag, Sparkles, Clock, CheckCircle2, Phone, Calendar, ArrowRight, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface BottomBookingSectionProps {
  initialPromoCode?: string;
  initialServiceType?: string;
  initialNotes?: string;
  funnelUrl?: string;
  onBookingSuccess?: (data: any) => void;
  onOpenBookingCalendar?: () => void;
}

export const BottomBookingSection: React.FC<BottomBookingSectionProps> = ({
  initialPromoCode = 'REBATE25',
  funnelUrl = 'https://sites.leadconnectorhq.com/preview/DKT8dL32Yg2c9cZ1It20?notrack=true',
  onOpenBookingCalendar
}) => {
  return (
    <section id="bottom-booking-section" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Side-by-Side 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): "Ready for Fast, Reliable Heating & Air Comfort" */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top highlight pill */}
            <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-black uppercase tracking-wider px-4 py-1.5 rounded-full">
              <Tag className="w-3.5 h-3.5" />
              <span>Exclusive Promo: $25 OFF Any Service Call Applied</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Ready for Fast, Reliable <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300">
                Heating &amp; Air Comfort?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Schedule your service or request a free estimate in 60 seconds. Our EPA-certified technicians arrive fully equipped with universal parts to solve 95% of issues on the spot.
            </p>

            {/* Direct Phone / 24-7 Dispatch Callout */}
            <div className="bg-slate-850/80 border border-slate-700/80 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                  Need Immediate Emergency Help?
                </span>
                <span className="text-xs text-slate-300">
                  Live Dispatch desk on call 24 hours / 7 days
                </span>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-orange-400 hover:text-orange-300 font-black px-4 py-2.5 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-all text-sm whitespace-nowrap shadow-md"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            {/* 4 Trust Checkmarks in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2 text-xs sm:text-sm font-bold text-slate-300">
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Upfront Quotes</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Fixed-Right Guarantee</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-900/50 border border-slate-800 p-3 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>EPA Universal Techs</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Embedded LeadConnector Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-850/90 border border-slate-700/90 rounded-3xl p-4 sm:p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
              
              {/* Form Card Top Header */}
              <div className="flex items-center justify-between pb-4 mb-3 border-b border-slate-700/80">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                    📝
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-white">
                      Fast Service Request
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Get a fast diagnostic &amp; estimate
                    </p>
                  </div>
                </div>

                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  $25 OFF Applied
                </span>
              </div>

              {/* LeadConnector Form Embed */}
              <div className="w-full min-h-[584px] rounded-xl overflow-hidden bg-white/5">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/IuF3GzzPgFkaOQzsZzXC"
                  style={{ width: '100%', height: '100%', minHeight: '584px', border: 'none', borderRadius: '8px' }}
                  id="inline-IuF3GzzPgFkaOQzsZzXC" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="HVAC Lead Capture Form for website"
                  data-height="584"
                  data-layout-iframe-id="inline-IuF3GzzPgFkaOQzsZzXC"
                  data-form-id="IuF3GzzPgFkaOQzsZzXC"
                  title="HVAC Lead Capture Form for website"
                />
              </div>

              {/* Security guarantee note */}
              <div className="pt-3 flex items-center justify-center gap-3 text-[11px] text-slate-400 font-medium">
                <div className="flex items-center gap-1">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span>256-Bit Encrypted</span>
                </div>
                <span>•</span>
                <span>No Spam Guarantee</span>
                <span>•</span>
                <span>Instant Dispatch Sync</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

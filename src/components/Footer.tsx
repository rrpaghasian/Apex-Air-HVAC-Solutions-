import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Clock, Code, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface FooterProps {
  onOpenGHLModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGHLModal }) => {
  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      
      {/* Top Footer Section: Balanced 2-Column Layout Filling Full Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12 border-b border-slate-800/80">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Company Location, Contact & License Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-9 h-9 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-black text-lg shadow-md">
                  ❄
                </div>
                <span className="text-2xl font-black tracking-tight text-white">
                  APEX<span className="text-cyan-400">AIR</span>
                </span>
              </div>
              <p className="text-xs text-orange-400 font-extrabold uppercase tracking-wider">
                {COMPANY_INFO.brandSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">{COMPANY_INFO.location}</strong>
                  <span className="text-slate-400">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Direct Dispatch</strong>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-cyan-300 font-bold text-white transition-colors text-base">
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Email Support</strong>
                  <span className="text-slate-400">{COMPANY_INFO.email}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Emergency Coverage</strong>
                  <span className="text-slate-400">24 Hours / 7 Days a Week</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-900/90 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{COMPANY_INFO.license}</span>
              </div>
              <p className="text-[11px] text-slate-400">EPA Universal Section 608 Verified HVAC Contractor • Bonded &amp; Fully Insured</p>
            </div>
          </div>

          {/* Right Column: Quick Navigation & Services spanning across */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <span>Quick Navigation &amp; Services</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2.5">
                <a
                  href="#services-section"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>AC Installation &amp; Replacement</span>
                </a>
                <a
                  href="#services-section"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>AC &amp; Furnace Emergency Repair</span>
                </a>
                <a
                  href="#seer-calculator-widget"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>SEER2 Energy Savings Auditor</span>
                </a>
              </div>

              <div className="space-y-2.5">
                <a
                  href="#maintenance-section"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/30"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Comfort Club Maintenance Agreement</span>
                </a>
                <a
                  href="#bottom-booking-section"
                  className="flex items-center gap-2 text-orange-400 font-bold hover:text-orange-300 transition-colors p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 hover:border-orange-500/50"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                  <span>📅 Schedule Service ($25 OFF Voucher)</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenGHLModal}
                  className="w-full flex items-center justify-center gap-1.5 bg-slate-900 hover:bg-slate-850 text-cyan-400 border border-slate-700 p-2 rounded-lg font-bold transition-all cursor-pointer shadow-sm"
                >
                  <Code className="w-3.5 h-3.5" />
                  <span>Export GoHighLevel HTML</span>
                </button>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed">
              Serving Buford, Flowery Branch, Gainesville, Sugar Hill, Suwanee, Cumming, Braselton, and all surrounding Hall &amp; Gwinnett County communities.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>&copy; 2026 Apex Air Solutions. All rights reserved. Licensed, Bonded &amp; Insured.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

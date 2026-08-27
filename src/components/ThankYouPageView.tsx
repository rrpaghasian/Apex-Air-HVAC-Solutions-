import React from 'react';
import { 
  CheckCircle2, 
  Mail, 
  Truck, 
  Wrench, 
  Phone, 
  ArrowLeft, 
  Sparkles,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface ThankYouPageViewProps {
  onBackToFunnel: () => void;
  onOpenGHLModal: () => void;
}

export const ThankYouPageView: React.FC<ThankYouPageViewProps> = ({
  onBackToFunnel,
  onOpenGHLModal
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* 1. Top Urgent Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-orange-600 text-white font-black text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Live Dispatch
            </span>
            <span className="text-slate-300 font-medium">
              Priority service scheduled for Buford &amp; Hall County.
            </span>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <span className="hidden sm:inline">24/7 Immediate Help:</span>
            <a 
              href={`tel:${COMPANY_INFO.phoneRaw}`} 
              className="text-white font-black hover:text-cyan-400 flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToFunnel}
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-600 hover:text-cyan-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Funnel</span>
            </button>

            {/* Brand Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20">
                <span className="text-xl">❄️</span>
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-slate-900">
                  APEX<span className="text-cyan-600">AIR</span>
                </span>
                <span className="block text-[10px] font-extrabold uppercase tracking-widest text-orange-500 -mt-1">
                  Heating &amp; Air Solutions
                </span>
              </div>
            </div>
          </div>

          {/* Funnel Step Badge */}
          <div className="hidden md:inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-black px-4 py-1.5 rounded-full shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Step 3 of 3: Booking Confirmed</span>
          </div>

          {/* Right Action Group */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Direct Dispatch Desk
              </span>
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="text-sm font-black text-slate-900 hover:text-cyan-600 flex items-center justify-end gap-1"
              >
                <span>{COMPANY_INFO.phone}</span>
              </a>
            </div>

            <button
              onClick={onOpenGHLModal}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-3.5 py-2 rounded-lg transition-colors cursor-pointer hidden sm:inline-flex items-center gap-1.5"
            >
              <span>Get GHL Code</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. Main Single-Screen Content */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl w-full bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 text-center shadow-xl relative z-10 space-y-6">
          
          {/* Animated Success Checkmark in Emerald Badge */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/30 border-3 border-white">
            <CheckCircle2 className="w-10 h-10 sm:w-11 sm:h-11" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Appointment Reserved &amp; Voucher Applied</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
              You're All Set! Booking Confirmed.
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              We've received your service request. Your arrival window details and <strong className="text-cyan-700 font-extrabold">$25 voucher confirmation</strong> have been sent to your email.
            </p>
          </div>

          {/* 3 Crisp Next Steps on Light Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-left pt-2">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all hover:border-cyan-500/50 hover:shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-cyan-100 text-cyan-700 flex items-center justify-center mb-3">
                <Mail className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1">1. Check Your Inbox</h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                Your appointment time and digital voucher details are in your email.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all hover:border-orange-500/50 hover:shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center mb-3">
                <Truck className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1">2. On-The-Way Alert</h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                Your technician will send a notification with GPS ETA 20 min prior to arrival.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 transition-all hover:border-emerald-500/50 hover:shadow-sm">
              <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <Wrench className="w-4 h-4" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-xs sm:text-sm mb-1">3. Upfront Quote &amp; Fix</h4>
              <p className="text-[11px] text-slate-500 leading-snug">
                100% written pricing before work begins, with zero hidden fees.
              </p>
            </div>
          </div>

        </div>
      </main>

      {/* 4. Footer */}
      <footer className="py-4 bg-white border-t border-slate-200 text-center text-xs text-slate-500">
        <p>Apex Air Solutions • GA Master HVAC Lic #HVAC-98231 • 100% Satisfaction Guarantee • 24/7 Dispatch: {COMPANY_INFO.phone}</p>
      </footer>

    </div>
  );
};

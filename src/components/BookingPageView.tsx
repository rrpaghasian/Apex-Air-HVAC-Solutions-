import React from 'react';
import { 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  Phone, 
  Star, 
  Lock, 
  CheckCircle2, 
  ArrowLeft,
  Mail
} from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface BookingPageViewProps {
  onBackToFunnel: () => void;
  onOpenGHLModal: () => void;
  promoCode?: string;
}

export const BookingPageView: React.FC<BookingPageViewProps> = ({
  onBackToFunnel,
  onOpenGHLModal,
  promoCode = 'REBATE25'
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased pb-12">
      
      {/* 1. Top Urgent Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 bg-orange-600 text-white font-black text-[11px] px-2.5 py-0.5 rounded uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
              Live Dispatch
            </span>
            <span className="text-slate-300 font-medium">
              Technicians available in Buford &amp; Hall County today.
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
          <div className="hidden md:inline-flex items-center gap-2 bg-cyan-50 border border-cyan-200 text-cyan-800 text-xs font-black px-4 py-1.5 rounded-full shadow-xs">
            <Calendar className="w-4 h-4 text-cyan-600" />
            <span>Step 2 of 3: Select Date &amp; Service Window</span>
          </div>

          {/* Right Action Group */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex flex-col text-right">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                Need Help? Call Dispatch
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

      {/* 3. Hero / Value Framing */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-850 text-white py-12 px-4 sm:px-6 relative overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/40 text-orange-300 font-extrabold text-xs px-4 py-1.5 rounded-full backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Exclusive Promo Active: $25 OFF Any Service Call Applied</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Schedule Your Service Window Online
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose your preferred date and arrival time below. Our EPA-certified technicians arrive fully equipped in mobile warehouse vans to fix 95% of issues in a single visit.
          </p>

          {/* 3-Step Timeline with Email Confirmation */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-2xl mx-auto pt-6 border-t border-white/10 text-xs font-bold text-slate-400">
            <div className="flex items-center justify-center gap-2 text-cyan-400 font-extrabold">
              <span className="w-6 h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[11px] shadow-sm shadow-cyan-500/50">1</span>
              <span>Select Date &amp; Time</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-slate-300 flex items-center justify-center text-[11px]">2</span>
              <span>Instant Email Confirmation</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-6 h-6 rounded-full bg-white/10 text-slate-300 flex items-center justify-center text-[11px]">3</span>
              <span>Track Arrival</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Main Booking Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center (8 cols): LeadConnector Calendar Embed */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <h3 className="font-extrabold text-base sm:text-lg">Available Arrival Windows</h3>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                Zero Upfront Charge
              </span>
            </div>

            {/* Embedded Calendar Frame */}
            <div className="p-4 sm:p-6 bg-white min-h-[640px]">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/booking/331duRk87cPbrOJ3SYJC" 
                allow="payment" 
                style={{ width: '100%', minHeight: '680px', border: 'none', overflow: 'hidden' }}
                scrolling="no" 
                id="331duRk87cPbrOJ3SYJC_1787475969881"
                title="Apex Air Booking Calendar"
              />
            </div>

            {/* Security Guarantee Bar */}
            <div className="bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-around gap-4 text-xs font-bold text-slate-600">
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span>256-Bit Encrypted Booking</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-600" />
                <span>Free Rescheduling &amp; Cancellation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-orange-600" />
                <span>No Hidden Overtime Fees</span>
              </div>
            </div>
          </div>

          {/* Right Sidebar (4 cols): High-Trust Conversion Cards */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* The Apex Air Guarantee Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="font-black text-slate-900 text-base flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-cyan-600" />
                <span>The Apex Air Promise</span>
              </h3>

              <ul className="space-y-3.5 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-extrabold">100% Upfront Written Quotes</strong>
                    <span>No surprises or hidden fees. You approve the exact cost before work begins.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-extrabold">1-Year Fixed-Right Guarantee</strong>
                    <span>If any repair fails within 12 months, our technicians fix it at zero extra charge.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-extrabold">EPA &amp; NATE Certified Techs</strong>
                    <span>Background-checked, drug-screened, master-licensed HVAC specialists.</span>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-black text-[11px] shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-extrabold">Fully Stocked Service Vans</strong>
                    <span>Carrying universal capacitors, fan motors, and refrigerants for 1-trip fixes.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Active On-Duty Tech Card */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 rounded-2xl p-5 shadow-md space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-extrabold uppercase tracking-wider text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Active Dispatch Team
                </span>
                <span className="text-slate-400 text-[11px]">Buford / Hall Co.</span>
              </div>

              <div className="flex items-center gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=150&q=80" 
                  alt="Apex Air HVAC Specialist" 
                  className="w-13 h-13 rounded-xl object-cover border-2 border-cyan-500 shadow-md"
                />
                <div>
                  <h4 className="font-extrabold text-sm text-white">Mike R. (Lead HVAC Tech)</h4>
                  <div className="flex items-center gap-1 text-amber-400 text-xs mt-0.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span className="font-bold text-white">4.9 ★</span>
                    <span className="text-slate-400 text-[11px]">(380+ reviews)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-0.5">95% same-day repair completion</p>
                </div>
              </div>

              <div className="bg-slate-950/50 border border-slate-700/60 rounded-lg px-3 py-2 text-[11px] text-cyan-300 text-center">
                ⚡ Average local arrival: <strong>45 minutes</strong> from dispatch call
              </div>
            </div>

            {/* Direct Emergency Call Card */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-6 shadow-lg text-center space-y-3">
              <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center mx-auto text-xl">
                📞
              </div>
              <h3 className="font-black text-lg">Need Immediate Emergency Help?</h3>
              <p className="text-xs text-orange-100 leading-relaxed">
                If your system is completely down in extreme heat or freezing cold, call our direct 24/7 emergency dispatch line right now.
              </p>
              <a 
                href={`tel:${COMPANY_INFO.phoneRaw}`} 
                className="w-full bg-slate-950 hover:bg-slate-900 active:scale-98 text-white font-black py-3 px-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-orange-400" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

          </aside>

        </div>
      </main>

      {/* 5. What Happens After You Book (Email Confirmation) */}
      <section className="bg-white border-t border-slate-200 py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
              Seamless Experience
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              What Happens After You Book?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Here is what you can expect from our team from the moment you confirm your time window:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-200">01</span>
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center font-bold text-lg mb-4">
                <Mail className="w-5 h-5 text-cyan-700" />
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1.5">Instant Email Confirmation</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will receive an immediate automated email message with your arrival window, booking details, and digital voucher confirmation.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-200">02</span>
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-lg mb-4">
                🚐
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1.5">Pre-Arrival "On My Way" Alert</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your technician will send a notification with their photo, name, and live GPS tracking when they are 20 minutes away from your home.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 relative">
              <span className="absolute top-4 right-4 text-3xl font-black text-slate-200">03</span>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-lg mb-4">
                🔧
              </div>
              <h4 className="font-extrabold text-slate-900 text-base mb-1.5">Upfront Quote &amp; Fast Fix</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                The tech performs a thorough diagnostic, explains everything clearly with an exact upfront quote, and fixes the issue on the spot.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

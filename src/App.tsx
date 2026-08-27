import React, { useState } from 'react';
import { useVideoScrubber } from './hooks/useVideoScrubber';
import { useServerTelemetry } from './hooks/useServerTelemetry';
import { DynamicBackgroundVideo } from './components/DynamicBackgroundVideo';
import { DynamicHeader } from './components/DynamicHeader';
import { DynamicPhaseIndicator } from './components/DynamicPhaseIndicator';
import { DynamicSection } from './components/DynamicSection';
import { InteractiveTroubleshooter } from './components/InteractiveTroubleshooter';
import { SeerCalculator } from './components/SeerCalculator';
import { GoHighLevelModal } from './components/GoHighLevelModal';
import { Sparkles, ExternalLink, X, Phone } from 'lucide-react';

export const LEAD_CONNECTOR_FUNNEL_URL = "https://sites.leadconnectorhq.com/preview/zWn9C136Lu8hSN8Y1Vi8?notrack=true";

export default function App() {
  // Interactive Modals State
  const [isFunnelModalOpen, setIsFunnelModalOpen] = useState(false);
  const [isGHLModalOpen, setIsGHLModalOpen] = useState(false);
  const [isTroubleshooterOpen, setIsTroubleshooterOpen] = useState(false);
  const [isSeerOpen, setIsSeerOpen] = useState(false);

  // Custom video scrubber engine
  const { videoRef, progress } = useVideoScrubber({ smoothingFactor: 8 });

  // Dynamic server-side content & telemetry
  const { content, telemetry } = useServerTelemetry(progress);

  // Open the connected LeadConnector Funnel
  const handleOpenLeadConnector = () => {
    setIsFunnelModalOpen(true);
  };

  const handleDiagnoseBook = (_promoCode: string, _symptom: string) => {
    setIsTroubleshooterOpen(false);
    setIsFunnelModalOpen(true);
  };

  const handleClaimRebate = (_promoCode: string) => {
    setIsSeerOpen(false);
    setIsFunnelModalOpen(true);
  };

  return (
    <div className="relative min-h-[300vh] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Dynamic Video Layer */}
      <DynamicBackgroundVideo videoRef={videoRef} />

      {/* Dynamic Header with Phone & Get Started CTA */}
      <DynamicHeader
        brand={content.brand}
        telemetry={telemetry}
        onGetStarted={handleOpenLeadConnector}
      />

      {/* Dynamic Phase & Progress Indicator */}
      <DynamicPhaseIndicator phase={telemetry.phase} progress={progress} />

      {/* Synchronized Pinned Sections with Real HVAC Info and CTAs */}
      <main className="fixed inset-0 z-20 flex items-center justify-center pointer-events-none px-4 sm:px-12">
        {content.sections.map((section, index) => (
          <DynamicSection
            key={section.id}
            section={section}
            index={index}
            scrollProgress={progress}
            phoneRaw={content.brand.phoneRaw}
            onOpenBooking={handleOpenLeadConnector}
            onOpenTroubleshooter={() => setIsTroubleshooterOpen(true)}
            onOpenSeer={() => setIsSeerOpen(true)}
            onOpenGHL={() => setIsGHLModalOpen(true)}
          />
        ))}
      </main>

      {/* 🚀 Embedded LeadConnector / GoHighLevel Funnel Modal */}
      {isFunnelModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl h-[94vh] max-h-[920px] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
            {/* Modal Header */}
            <div className="bg-slate-850 px-4 sm:px-6 py-3.5 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 border border-orange-500/30 text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  LeadConnector Funnel
                </span>
                <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                  Apex Air Solutions • Live Dispatch Booking
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={LEAD_CONNECTOR_FUNNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Open In New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsFunnelModalOpen(false)}
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Live LeadConnector Iframe */}
            <div className="flex-1 bg-white relative">
              <iframe
                src={LEAD_CONNECTOR_FUNNEL_URL}
                title="Apex Air LeadConnector Funnel"
                className="w-full h-full border-0"
                allow="geolocation; camera; microphone; payment"
              />
            </div>

            {/* Modal Footer */}
            <div className="bg-slate-900 px-4 py-2.5 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" />
                <span>Need immediate phone dispatch? Call: <strong className="text-white">{content.brand.phone}</strong></span>
              </div>
              <button
                onClick={() => setIsFunnelModalOpen(false)}
                className="text-slate-400 hover:text-white underline cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Troubleshooter Modal */}
      {isTroubleshooterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-700 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-400" />
                <span>HVAC Diagnostic Wizard</span>
              </h3>
              <button
                onClick={() => setIsTroubleshooterOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <InteractiveTroubleshooter onBookWithDiagnostic={handleDiagnoseBook} />
          </div>
        </div>
      )}

      {/* SEER2 Savings Calculator Modal */}
      {isSeerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-slate-700 mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>SEER2 Energy Savings Calculator</span>
              </h3>
              <button
                onClick={() => setIsSeerOpen(false)}
                className="text-slate-400 hover:text-white text-lg font-bold px-2 cursor-pointer"
              >
                ✕
              </button>
            </div>
            <SeerCalculator onClaimRebate={handleClaimRebate} />
          </div>
        </div>
      )}

      {/* GoHighLevel Funnel Modal */}
      <GoHighLevelModal
        isOpen={isGHLModalOpen}
        onClose={() => setIsGHLModalOpen(false)}
      />
    </div>
  );
}

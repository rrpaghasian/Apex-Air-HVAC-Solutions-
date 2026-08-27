import React, { useState } from 'react';
import { useVideoScrubber } from './hooks/useVideoScrubber';
import { useServerTelemetry } from './hooks/useServerTelemetry';
import { DynamicBackgroundVideo } from './components/DynamicBackgroundVideo';
import { DynamicHeader } from './components/DynamicHeader';
import { DynamicPhaseIndicator } from './components/DynamicPhaseIndicator';
import { DynamicSection } from './components/DynamicSection';
import { InteractiveTroubleshooter } from './components/InteractiveTroubleshooter';
import { SeerCalculator } from './components/SeerCalculator';
import { Sparkles } from 'lucide-react';

export const LEAD_CONNECTOR_FUNNEL_URL = "https://sites.leadconnectorhq.com/preview/zWn9C136Lu8hSN8Y1Vi8?notrack=true";

export default function App() {
  // Interactive Modals State
  const [isGHLModalOpen, setIsGHLModalOpen] = useState(false);
  const [isTroubleshooterOpen, setIsTroubleshooterOpen] = useState(false);
  const [isSeerOpen, setIsSeerOpen] = useState(false);

  // Custom video scrubber engine
  const { videoRef, progress } = useVideoScrubber({ smoothingFactor: 8 });

  // Dynamic server-side content & telemetry
  const { content, telemetry } = useServerTelemetry(progress);

  // Directly navigate to the connected LeadConnector / GoHighLevel Funnel
  const handleOpenLeadConnector = () => {
    window.location.href = LEAD_CONNECTOR_FUNNEL_URL;
  };

  const handleDiagnoseBook = (_promoCode: string, _symptom: string) => {
    setIsTroubleshooterOpen(false);
    window.location.href = LEAD_CONNECTOR_FUNNEL_URL;
  };

  const handleClaimRebate = (_promoCode: string) => {
    setIsSeerOpen(false);
    window.location.href = LEAD_CONNECTOR_FUNNEL_URL;
  };

  return (
    <div className="relative min-h-[300vh] text-white selection:bg-cyan-500 selection:text-white font-sans">
      {/* Dynamic Video Layer */}
      <DynamicBackgroundVideo videoRef={videoRef} />

      {/* Dynamic Header with Phone & Direct Get Started CTA */}
      <DynamicHeader
        brand={content.brand}
        telemetry={telemetry}
        onGetStarted={handleOpenLeadConnector}
      />

      {/* Dynamic Phase & Progress Indicator */}
      <DynamicPhaseIndicator phase={telemetry.phase} progress={progress} />

      {/* Synchronized Pinned Sections with Real HVAC Info and Direct CTAs */}
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

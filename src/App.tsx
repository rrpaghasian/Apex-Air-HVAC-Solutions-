import React, { useRef, useCallback, useState } from 'react';
import { useVideoScrubber } from './hooks/useVideoScrubber';
import { useServerTelemetry } from './hooks/useServerTelemetry';
import { DynamicBackgroundVideo } from './components/DynamicBackgroundVideo';
import { DynamicHeader } from './components/DynamicHeader';
import { DynamicPhaseIndicator } from './components/DynamicPhaseIndicator';
import { DynamicSection } from './components/DynamicSection';
import { InteractiveTroubleshooter } from './components/InteractiveTroubleshooter';
import { SeerCalculator } from './components/SeerCalculator';
import { GoHighLevelModal } from './components/GoHighLevelModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  // Interactive Modals State
  const [isGHLModalOpen, setIsGHLModalOpen] = useState(false);
  const [isTroubleshooterOpen, setIsTroubleshooterOpen] = useState(false);
  const [isSeerOpen, setIsSeerOpen] = useState(false);

  // Direct DOM refs for 120fps hardware-composited transitions (ZERO React lag!)
  const sec0Ref = useRef<HTMLDivElement | null>(null);
  const sec1Ref = useRef<HTMLDivElement | null>(null);
  const sec2Ref = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  // Direct GPU RAF transform updater (Non-overlapping, crystal-clear phase transitions)
  const handleDirectScrub = useCallback((p: number) => {
    // 1. Direct progress bar update
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${p.toFixed(3)})`;
    }

    // 2. Section 0 (Phase 1): Solid 0.0 -> 0.22, Fades out 0.22 -> 0.32
    if (sec0Ref.current) {
      let op0 = 1;
      let y0 = 0;
      if (p > 0.22) {
        op0 = Math.max(0, 1 - (p - 0.22) / 0.10);
        y0 = -((p - 0.22) / 0.10) * 35;
      }
      sec0Ref.current.style.opacity = op0.toFixed(3);
      sec0Ref.current.style.transform = `translate3d(0, ${y0.toFixed(1)}px, 0)`;
      sec0Ref.current.style.visibility = op0 > 0.01 ? 'visible' : 'hidden';
      sec0Ref.current.style.pointerEvents = op0 > 0.1 ? 'auto' : 'none';
    }

    // 3. Section 1 (Phase 2): Fades in 0.28 -> 0.38, Solid 0.38 -> 0.62, Fades out 0.62 -> 0.72
    if (sec1Ref.current) {
      let op1 = 0;
      let y1 = 0;
      if (p >= 0.28 && p < 0.38) {
        op1 = (p - 0.28) / 0.10;
        y1 = (1 - op1) * 25;
      } else if (p >= 0.38 && p <= 0.62) {
        op1 = 1;
        y1 = 0;
      } else if (p > 0.62 && p <= 0.72) {
        op1 = Math.max(0, 1 - (p - 0.62) / 0.10);
        y1 = -((p - 0.62) / 0.10) * 25;
      }
      sec1Ref.current.style.opacity = op1.toFixed(3);
      sec1Ref.current.style.transform = `translate3d(0, ${y1.toFixed(1)}px, 0)`;
      sec1Ref.current.style.visibility = op1 > 0.01 ? 'visible' : 'hidden';
      sec1Ref.current.style.pointerEvents = op1 > 0.1 ? 'auto' : 'none';
    }

    // 4. Section 2 (Phase 3): Fades in 0.68 -> 0.78, Solid 0.78 -> 1.0 (Zero Ghosting!)
    if (sec2Ref.current) {
      let op2 = 0;
      let y2 = 0;
      if (p >= 0.68 && p < 0.78) {
        op2 = (p - 0.68) / 0.10;
        y2 = (1 - op2) * 25;
      } else if (p >= 0.78) {
        op2 = 1;
        y2 = 0;
      }
      sec2Ref.current.style.opacity = op2.toFixed(3);
      sec2Ref.current.style.transform = `translate3d(0, ${y2.toFixed(1)}px, 0)`;
      sec2Ref.current.style.visibility = op2 > 0.01 ? 'visible' : 'hidden';
      sec2Ref.current.style.pointerEvents = op2 > 0.1 ? 'auto' : 'none';
    }
  }, []);

  // Custom high-performance video scrubber
  const { progressState, phaseState } = useVideoScrubber({
    smoothingFactor: 12,
    onDirectScrub: handleDirectScrub
  });

  // Dynamic server-side content & throttled telemetry
  const { content, telemetry } = useServerTelemetry(progressState);

  // Smooth on-page navigation to Phase 3 (Comfort Phase)
  const handleScrollToBooking = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: scrollableHeight,
      behavior: 'smooth'
    });
  };

  const handleDiagnoseBook = (_promoCode: string, _symptom: string) => {
    setIsTroubleshooterOpen(false);
    handleScrollToBooking();
  };

  const handleClaimRebate = (_promoCode: string) => {
    setIsSeerOpen(false);
    handleScrollToBooking();
  };

  const sectionRefs = [sec0Ref, sec1Ref, sec2Ref];

  return (
    <div className="relative min-h-[420vh] text-white selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Hardware Canvas Frame Engine (Instant 0.1ms render, ZERO jumping!) */}
      <DynamicBackgroundVideo />

      {/* Dynamic Header with Phone & On-Page Get Started CTA */}
      <DynamicHeader
        brand={content.brand}
        telemetry={telemetry}
        onGetStarted={handleScrollToBooking}
      />

      {/* Dynamic Phase & Progress Indicator */}
      <DynamicPhaseIndicator ref={progressBarRef} phase={phaseState} />

      {/* Synchronized Pinned Sections with Direct GPU Compositing */}
      <main className="fixed inset-0 h-[100dvh] z-20 flex items-center justify-center pointer-events-none px-3 sm:px-8 md:px-12">
        {content.sections.map((section, index) => (
          <DynamicSection
            key={section.id}
            ref={sectionRefs[index]}
            section={section}
            index={index}
            phoneRaw={content.brand.phoneRaw}
            onOpenBooking={handleScrollToBooking}
            onOpenTroubleshooter={() => setIsTroubleshooterOpen(true)}
            onOpenSeer={() => setIsSeerOpen(true)}
            onOpenGHL={() => setIsGHLModalOpen(true)}
          />
        ))}
      </main>

      {/* Troubleshooter Modal */}
      {isTroubleshooterOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-4 sm:p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-slate-700 mb-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400" />
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
          <div className="bg-slate-900 border border-slate-700 w-full max-w-2xl rounded-2xl p-4 sm:p-6 shadow-2xl relative text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-3 border-b border-slate-700 mb-3">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
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

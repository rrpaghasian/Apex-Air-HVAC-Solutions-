import React, { useState } from 'react';
import { X, Copy, Check, Code, CheckCircle2, Sparkles, Download, Eye, Layers, HelpCircle, Calendar, HeartHandshake } from 'lucide-react';
import { GHL_FUNNEL_STEP1_HTML, GHL_FUNNEL_STEP2_HTML, GHL_FUNNEL_STEP3_HTML } from '../data/ghlFunnelData';

interface GoHighLevelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FunnelStep = 'step1' | 'step2' | 'step3';
type ViewMode = 'code' | 'preview' | 'guide';

export const GoHighLevelModal: React.FC<GoHighLevelModalProps> = ({ isOpen, onClose }) => {
  const [selectedStep, setSelectedStep] = useState<FunnelStep>('step1');
  const [viewMode, setViewMode] = useState<ViewMode>('code');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const currentHtmlCode = 
    selectedStep === 'step1' 
      ? GHL_FUNNEL_STEP1_HTML 
      : selectedStep === 'step2' 
        ? GHL_FUNNEL_STEP2_HTML 
        : GHL_FUNNEL_STEP3_HTML;

  const currentFileName = 
    selectedStep === 'step1' 
      ? 'gohighlevel-landing-page.html' 
      : selectedStep === 'step2' 
        ? 'gohighlevel-booking-page.html' 
        : 'gohighlevel-thank-you-page.html';

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(currentHtmlCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([currentHtmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = currentFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-700 w-full max-w-5xl h-[92vh] max-h-[880px] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/25">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-black tracking-tight text-white">GoHighLevel 3-Step Funnel Center</h2>
                <span className="bg-emerald-500/20 text-emerald-400 text-[11px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Ready to Deploy • Complete Funnel
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Copy and paste straight into your GoHighLevel Funnel (Custom JS/HTML Element)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Selector Bar */}
        <div className="px-5 py-2.5 bg-slate-950/70 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          {/* Funnel Step Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedStep('step1')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStep === 'step1'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">1</span>
              <span>Step 1: Homepage / Main Funnel</span>
            </button>

            <button
              onClick={() => setSelectedStep('step2')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStep === 'step2'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">2</span>
              <span>Step 2: Booking Calendar</span>
            </button>

            <button
              onClick={() => setSelectedStep('step3')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedStep === 'step3'
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                  : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700'
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-[10px]">3</span>
              <span>Step 3: Thank You Page</span>
              <span className="text-[10px] bg-emerald-500/80 text-white px-1.5 py-0.2 rounded-full font-bold">New</span>
            </button>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center bg-slate-800 p-1 rounded-lg border border-slate-700 text-xs">
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                viewMode === 'code' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>HTML Code</span>
            </button>

            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                viewMode === 'preview' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Live Preview</span>
            </button>

            <button
              onClick={() => setViewMode('guide')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                viewMode === 'guide' ? 'bg-slate-700 text-white shadow' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
              <span>GHL Setup Guide</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden flex flex-col bg-slate-950">
          
          {/* TAB 1: CODE VIEW */}
          {viewMode === 'code' && (
            <div className="flex-1 flex flex-col overflow-hidden">
              <div className="px-5 py-2.5 bg-slate-900/60 border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-cyan-400 font-bold">{currentFileName}</span>
                  <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-400">
                    Standalone Valid HTML5 + CSS + JS
                  </span>
                </div>
                <span className="text-[11px] text-slate-500">
                  {selectedStep === 'step1' ? 'Step 1: Homepage' : selectedStep === 'step2' ? 'Step 2: Booking Calendar' : 'Step 3: Thank You Confirmation'}
                </span>
              </div>
              <div className="flex-1 overflow-auto p-4 font-mono text-xs text-slate-300 bg-slate-950 select-all leading-relaxed">
                <pre>{currentHtmlCode}</pre>
              </div>
            </div>
          )}

          {/* TAB 2: LIVE PREVIEW VIEW */}
          {viewMode === 'preview' && (
            <div className="flex-1 w-full h-full bg-white relative">
              <iframe
                srcDoc={currentHtmlCode}
                title="GHL Step Preview"
                className="w-full h-full border-0"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>
          )}

          {/* TAB 3: STEP-BY-STEP SETUP GUIDE */}
          {viewMode === 'guide' && (
            <div className="flex-1 overflow-y-auto p-6 space-y-6 text-sm text-slate-300">
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Your 3-Step GoHighLevel Funnel Structure</span>
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Follow this simple layout to paste each step into your GoHighLevel funnel builder:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Step 1 */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-cyan-500 text-white flex items-center justify-center font-bold text-xs">1</span>
                    <h4 className="font-bold text-white text-xs">Step 1: Homepage</h4>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Paste <strong>Step 1</strong> into your Funnel Step 1. All "Book Now" buttons lead to Step 2.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xs">2</span>
                    <h4 className="font-bold text-white text-xs">Step 2: Booking Page</h4>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Paste <strong>Step 2</strong> into your Funnel Step 2. Embeds your LeadConnector live calendar.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xs">3</span>
                    <h4 className="font-bold text-white text-xs">Step 3: Thank You Page</h4>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Paste <strong>Step 3</strong> into your Funnel Step 3. Compact single-screen confirmation with email details.
                  </p>
                </div>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p className="font-bold text-emerald-300">Ready for Live Appointments</p>
                  <p className="text-slate-400">
                    When a lead selects a time slot in Step 2, GoHighLevel will automatically route them to Step 3 (Thank You Page) and send the automated confirmation email.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-5 py-3.5 bg-slate-900 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span>Current Selection:</span>
            <strong className="text-cyan-400">
              {selectedStep === 'step1' ? 'Step 1 (Homepage)' : selectedStep === 'step2' ? 'Step 2 (Booking Calendar)' : 'Step 3 (Thank You Page)'}
            </strong>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .HTML</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold px-5 py-2 rounded-lg text-xs transition-all shadow-md shadow-orange-500/20 active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy {selectedStep === 'step1' ? 'Step 1' : selectedStep === 'step2' ? 'Step 2' : 'Step 3'} Code</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

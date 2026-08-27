import React, { useState } from 'react';
import { Wrench, Snowflake, Flame, AlertCircle, CheckCircle2, ArrowRight, RotateCcw, Calendar, ShieldCheck, Zap } from 'lucide-react';
import { DIAGNOSTIC_DATABASE } from '../data/hvacData';
import { DiagnosticResult } from '../types';

interface InteractiveTroubleshooterProps {
  onBookWithDiagnostic: (promoCode: string, symptom: string) => void;
}

export const InteractiveTroubleshooter: React.FC<InteractiveTroubleshooterProps> = ({
  onBookWithDiagnostic,
}) => {
  const [systemType, setSystemType] = useState<'ac' | 'heating'>('ac');
  const [selectedIssue, setSelectedIssue] = useState<string>('ac_warm_air');
  const [step, setStep] = useState<1 | 2>(1);

  const acIssues = [
    { id: 'ac_warm_air', label: 'Blowing warm / room-temp air', badge: 'Common' },
    { id: 'ac_no_power', label: "Unit won't turn on / completely dead", badge: 'Electrical' },
    { id: 'ac_noises', label: 'Screeching, buzzing, or banging noises', badge: 'Urgent' },
    { id: 'ac_ice', label: 'Ice buildup on pipes / water leaking', badge: 'Coil Frost' },
    { id: 'high_bills', label: 'High energy bills & constant running', badge: 'Efficiency' },
  ];

  const heatIssues = [
    { id: 'heat_no_heat', label: 'Furnace blowing cold air', badge: 'Ignition' },
    { id: 'heat_smell', label: 'Burning smell or unusual odor', badge: 'Safety' },
    { id: 'ac_no_power', label: 'Thermostat clicks but no heat', badge: 'Control' },
    { id: 'high_bills', label: 'Aux heat constantly on / high power bill', badge: 'Heat Pump' },
  ];

  const currentIssues = systemType === 'ac' ? acIssues : heatIssues;
  const diagnostic: DiagnosticResult = DIAGNOSTIC_DATABASE[selectedIssue] || DIAGNOSTIC_DATABASE['ac_warm_air'];

  const handleNext = () => {
    setStep(2);
  };

  const handleReset = () => {
    setStep(1);
  };

  const handleBookNow = () => {
    onBookWithDiagnostic(diagnostic.promoCode, `${systemType.toUpperCase()}: ${diagnostic.title}`);
  };

  return (
    <div
      id="troubleshooting-widget"
      className="bg-gradient-to-br from-orange-600 to-orange-700 text-white rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative background tools motif */}
      <div className="absolute top-3 right-3 opacity-15 pointer-events-none">
        <Wrench className="w-36 h-36 text-white rotate-45" />
      </div>

      <div>
        {/* Header matching image */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-inner">
            <Wrench className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              HVAC Troubleshooting System
            </h3>
            <p className="text-orange-100 text-xs sm:text-sm font-medium">
              Interactive diagnostic tool for fast home comfort resolution
            </p>
          </div>
        </div>

        {step === 1 ? (
          /* Step 1: Questions */
          <div className="mt-5 space-y-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-200 mb-2">
                What type of problem are you having?
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSystemType('ac');
                    setSelectedIssue('ac_warm_air');
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    systemType === 'ac'
                      ? 'bg-white text-orange-700 shadow-md ring-2 ring-white'
                      : 'bg-orange-800/40 text-orange-100 hover:bg-orange-800/60 border border-orange-400/30'
                  }`}
                >
                  <Snowflake className="w-4 h-4 text-cyan-500" />
                  <span>Air Conditioning</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSystemType('heating');
                    setSelectedIssue('heat_no_heat');
                  }}
                  className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm transition-all cursor-pointer ${
                    systemType === 'heating'
                      ? 'bg-white text-orange-700 shadow-md ring-2 ring-white'
                      : 'bg-orange-800/40 text-orange-100 hover:bg-orange-800/60 border border-orange-400/30'
                  }`}
                >
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Heating &amp; Furnace</span>
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-orange-200 mb-2">
                Select your primary symptom:
              </label>
              <div className="space-y-2">
                {currentIssues.map((issue) => (
                  <label
                    key={issue.id}
                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${
                      selectedIssue === issue.id
                        ? 'bg-white/20 border-white text-white font-bold shadow-sm'
                        : 'bg-orange-800/30 border-orange-400/20 text-orange-100 hover:bg-orange-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 text-sm">
                      <input
                        type="radio"
                        name="hvac_issue"
                        value={issue.id}
                        checked={selectedIssue === issue.id}
                        onChange={() => setSelectedIssue(issue.id)}
                        className="accent-cyan-400 w-4 h-4 cursor-pointer"
                      />
                      <span>{issue.label}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-black/20 text-orange-200">
                      {issue.badge}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <button
              id="btn-troubleshooter-next"
              type="button"
              onClick={handleNext}
              className="w-full bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer mt-4"
            >
              <span>Next &amp; View Diagnosis</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          /* Step 2: Instant Diagnosis & Recommended Action */
          <div className="mt-5 space-y-4">
            <div className="bg-slate-900/90 rounded-xl p-5 border border-orange-400/40 text-slate-100 backdrop-blur-md shadow-inner space-y-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 mb-1">
                    System Finding
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {diagnostic.title}
                  </h4>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-700/80">
                <p>
                  <strong className="text-orange-300">Likely Root Cause: </strong>
                  {diagnostic.possibleCause}
                </p>
                <p>
                  <strong className="text-cyan-300">Recommended Action: </strong>
                  {diagnostic.recommendedAction}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between bg-slate-800/80 rounded-lg p-3 border border-slate-700">
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Estimated Repair Estimate</p>
                  <p className="text-sm font-extrabold text-emerald-400">{diagnostic.estimatedCost}</p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Applied Voucher</p>
                  <span className="text-xs font-mono font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/30">
                    {diagnostic.promoCode}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                type="button"
                onClick={handleBookNow}
                className="flex-1 bg-white hover:bg-orange-50 text-orange-700 font-extrabold py-3 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-orange-600" />
                <span>Book Confirmed Dispatch</span>
              </button>
              <button
                type="button"
                onClick={handleReset}
                className="bg-orange-800/50 hover:bg-orange-800 text-orange-100 font-semibold py-3 px-4 rounded-xl text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Test Another Issue</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 pt-3 border-t border-orange-500/40 text-[11px] text-orange-100 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Zero Obligation Phone Estimate</span>
        </span>
        <span className="font-semibold">EPA Lic #98231</span>
      </div>
    </div>
  );
};

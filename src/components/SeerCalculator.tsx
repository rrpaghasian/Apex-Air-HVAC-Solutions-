import React, { useState, useMemo } from 'react';
import { Zap, DollarSign, TrendingDown, Sparkles, ChevronUp, ChevronDown, CheckCircle, Tag } from 'lucide-react';

interface SeerCalculatorProps {
  onClaimRebate: (code: string) => void;
}

export const SeerCalculator: React.FC<SeerCalculatorProps> = ({ onClaimRebate }) => {
  const [centsPerKwh, setCentsPerKwh] = useState<number>(18);
  const [tonnage, setTonnage] = useState<number>(3.5);
  const [currentSeer, setCurrentSeer] = useState<number>(10);
  const [newSeer, setNewSeer] = useState<number>(18);

  // SEER calculation formula:
  // BTU = Tonnage * 12,000
  // Annual hours approx 2,800 hours
  // Watt-hours consumed = (BTU / SEER) * hours
  // kWh = Watt-hours / 1000
  // Annual Cost = kWh * (centsPerKwh / 100)
  const calculation = useMemo(() => {
    const hours = 2800;
    const btu = tonnage * 12000;

    const oldKwh = (btu / Math.max(currentSeer, 6)) * hours / 1000;
    const oldCostAnnual = oldKwh * (centsPerKwh / 100);

    const safeNewSeer = Math.max(newSeer, currentSeer);
    const newKwh = (btu / safeNewSeer) * hours / 1000;
    const newCostAnnual = newKwh * (centsPerKwh / 100);

    const annualSavings = Math.max(0, oldCostAnnual - newCostAnnual);
    const fiveYearSavings = annualSavings * 5;
    const percentage = Math.min(100, Math.max(0, Math.round(((safeNewSeer - currentSeer) / safeNewSeer) * 100)));

    return {
      percentage: isNaN(percentage) ? 0 : percentage,
      annualSavings: Math.round(annualSavings),
      fiveYearSavings: Math.round(fiveYearSavings),
    };
  }, [centsPerKwh, tonnage, currentSeer, newSeer]);

  const handleCurrentSeerChange = (delta: number) => {
    setCurrentSeer((prev) => {
      const next = prev + delta;
      return Math.min(16, Math.max(8, next));
    });
  };

  const handleNewSeerChange = (delta: number) => {
    setNewSeer((prev) => {
      const next = prev + delta;
      return Math.min(24, Math.max(14, next));
    });
  };

  return (
    <div
      id="seer-calculator-widget"
      className="bg-gradient-to-br from-orange-500 to-amber-600 text-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between"
    >
      <div>
        {/* Header matching image: "See How Much You Can Save :)" */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
              <span>See How Much You Can Save :)</span>
            </h3>
            <p className="text-orange-100 text-xs sm:text-sm font-medium">
              High-efficiency SEER2 heat pump &amp; AC energy auditor
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0">
            <Zap className="w-5 h-5 text-amber-200" />
          </div>
        </div>

        {/* Display Banner: Circular Percentage & 5-Year Savings Card matching photo layout */}
        <div className="bg-white text-slate-900 rounded-2xl p-5 shadow-lg flex items-center justify-around gap-4 mb-5">
          {/* Circular Percentage Ring */}
          <div className="flex flex-col items-center">
            <div className="relative w-20 h-20 flex items-center justify-center rounded-full border-4 border-cyan-500 bg-cyan-50/50 shadow-inner">
              <span className="text-2xl font-black text-cyan-600">
                {calculation.percentage}%
              </span>
            </div>
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
              Efficiency Gain
            </span>
          </div>

          {/* 5 Year Savings block */}
          <div className="text-center sm:text-right">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
              You Are Saving
            </span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight">
              ${calculation.fiveYearSavings.toLocaleString('en-US')}.00
            </div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full mt-0.5">
              5 Year Electric Savings
            </span>
          </div>
        </div>

        {/* Interactive Controls Row matching photo: Cents per kWh & Tons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-cyan-900/60 p-3 rounded-xl border border-cyan-400/30">
            <label className="block text-[11px] font-bold uppercase text-cyan-200 mb-1">
              Cents per kWh
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={8}
                max={35}
                value={centsPerKwh}
                onChange={(e) => setCentsPerKwh(Number(e.target.value))}
                className="w-full bg-cyan-950 text-white font-black text-base px-2.5 py-1 rounded border border-cyan-500/50 focus:outline-none"
              />
              <span className="text-xs text-cyan-300 font-bold">¢</span>
            </div>
          </div>

          <div className="bg-cyan-900/60 p-3 rounded-xl border border-cyan-400/30">
            <label className="block text-[11px] font-bold uppercase text-cyan-200 mb-1">
              Select Tons
            </label>
            <select
              value={tonnage}
              onChange={(e) => setTonnage(Number(e.target.value))}
              aria-label="Select AC tonnage"
              className="w-full bg-cyan-950 text-white font-bold text-sm px-2.5 py-1.5 rounded border border-cyan-500/50 focus:outline-none cursor-pointer"
            >
              <option value={2}>2.0 Tons (1,000-1,300 sq ft)</option>
              <option value={2.5}>2.5 Tons (1,300-1,600 sq ft)</option>
              <option value={3}>3.0 Tons (1,600-1,900 sq ft)</option>
              <option value={3.5}>3.5 Tons (1,900-2,300 sq ft)</option>
              <option value={4}>4.0 Tons (2,300-2,700 sq ft)</option>
              <option value={5}>5.0 Tons (2,700-3,300+ sq ft)</option>
            </select>
          </div>
        </div>

        {/* Dual SEER Steppers matching image blue boxes with up/down arrows */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {/* Current SEER */}
          <div className="bg-cyan-600 rounded-xl p-3 text-center shadow-md border border-cyan-400/40">
            <div className="text-[11px] font-bold uppercase text-cyan-100 mb-1">
              My Current SEER
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-white">{currentSeer}</span>
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  aria-label="Increase current SEER"
                  onClick={() => handleCurrentSeerChange(1)}
                  className="w-6 h-6 rounded bg-cyan-700 hover:bg-cyan-800 flex items-center justify-center text-white text-xs cursor-pointer"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Decrease current SEER"
                  onClick={() => handleCurrentSeerChange(-1)}
                  className="w-6 h-6 rounded bg-cyan-700 hover:bg-cyan-800 flex items-center justify-center text-white text-xs cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-[10px] text-cyan-100 font-medium mt-1">Older standard (8-13)</div>
          </div>

          {/* New SEER */}
          <div className="bg-cyan-600 rounded-xl p-3 text-center shadow-md border border-cyan-400/40">
            <div className="text-[11px] font-bold uppercase text-cyan-100 mb-1">
              New High SEER2
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-3xl font-black text-white">{newSeer}</span>
              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  aria-label="Increase new SEER"
                  onClick={() => handleNewSeerChange(2)}
                  className="w-6 h-6 rounded bg-cyan-700 hover:bg-cyan-800 flex items-center justify-center text-white text-xs cursor-pointer"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Decrease new SEER"
                  onClick={() => handleNewSeerChange(-2)}
                  className="w-6 h-6 rounded bg-cyan-700 hover:bg-cyan-800 flex items-center justify-center text-white text-xs cursor-pointer"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="text-[10px] text-cyan-100 font-medium mt-1">High-Efficiency (16-24)</div>
          </div>
        </div>

        {/* Action Button */}
        <button
          id="btn-claim-seer-rebate"
          type="button"
          onClick={() => onClaimRebate('SYSTEM500')}
          className="w-full bg-slate-900 hover:bg-slate-950 text-white font-extrabold py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
        >
          <Tag className="w-4 h-4 text-emerald-400" />
          <span>Claim $500 New System Rebate</span>
        </button>
      </div>

      <div className="mt-4 pt-2 text-[10px] text-orange-100 text-center">
        Costs based on 2,800 annual cooling hours • Local utility energy rebate eligible
      </div>
    </div>
  );
};

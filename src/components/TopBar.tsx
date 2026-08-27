import React, { useState } from 'react';
import { Phone, Clock, MapPin, Award, CheckCircle, Code, Shield } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface TopBarProps {
  onOpenGHLModal: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenGHLModal }) => {
  const [selectedArea, setSelectedArea] = useState(COMPANY_INFO.serviceAreas[0]);

  return (
    <div id="top-bar-container" className="bg-slate-900 text-slate-200 text-xs md:text-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap justify-between items-center gap-3">
        {/* Left Side: Live Dispatch Notice */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-orange-600 text-white font-bold px-2.5 py-0.5 rounded text-xs uppercase tracking-wide animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
            Live Dispatch
          </span>
          <span className="text-slate-300 font-medium hidden sm:inline">
            Technicians available in your area today.
          </span>
          <div className="flex items-center gap-1 text-slate-400 text-xs pl-2 border-l border-slate-700">
            <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0" />
            <span>Serving:</span>
            <select
              aria-label="Select service area"
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="bg-slate-800 text-slate-200 text-xs rounded px-1.5 py-0.5 border border-slate-700 focus:outline-none focus:border-cyan-500 cursor-pointer"
            >
              {COMPANY_INFO.serviceAreas.map((area) => (
                <option key={area} value={area}>
                  {area} &amp; nearby
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Side: Emergency 24/7 line & GHL Exporter */}
        <div className="flex items-center gap-4 flex-wrap ml-auto">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden md:inline">24/7 Emergency Service:</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="font-bold text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              {COMPANY_INFO.phone}
            </a>
          </div>

          <button
            id="btn-ghl-export-header"
            onClick={onOpenGHLModal}
            title="Export GoHighLevel Funnel HTML/CSS (Step 1 & Step 2)"
            className="inline-flex items-center gap-1.5 bg-gradient-to-r from-slate-800 to-slate-850 hover:from-slate-700 hover:to-slate-800 text-cyan-400 border border-cyan-500/30 hover:border-cyan-400 px-3 py-1 rounded-lg text-xs font-bold transition-all shadow-sm hover:shadow-cyan-500/20 cursor-pointer"
          >
            <Code className="w-3.5 h-3.5 text-orange-400" />
            <span>GHL Funnel Hub</span>
            <span className="hidden sm:inline-block bg-orange-500/20 text-orange-400 text-[10px] px-1.5 py-0.2 rounded font-extrabold">
              Pop-Up Ready
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

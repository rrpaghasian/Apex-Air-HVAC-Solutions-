import React from 'react';
import {
  DollarSign,
  Wind,
  ShieldCheck,
  Gauge,
  AlertTriangle,
  RefreshCw,
  Smile,
  Clock,
  Heart,
  Zap,
  Calendar,
  Tag,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { MAINTENANCE_BENEFITS } from '../data/hvacData';

interface MaintenanceSectionProps {
  onJoinMaintenance: () => void;
}

export const MaintenanceSection: React.FC<MaintenanceSectionProps> = ({ onJoinMaintenance }) => {
  // Helper for icon map
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'DollarSign':
        return <DollarSign className="w-4 h-4 text-cyan-300" />;
      case 'Wind':
        return <Wind className="w-4 h-4 text-cyan-300" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-cyan-300" />;
      case 'Gauge':
        return <Gauge className="w-4 h-4 text-cyan-300" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-4 h-4 text-cyan-300" />;
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4 text-cyan-300" />;
      case 'Smile':
        return <Smile className="w-4 h-4 text-cyan-300" />;
      case 'Clock':
        return <Clock className="w-4 h-4 text-cyan-300" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-cyan-300" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-cyan-300" />;
      case 'Calendar':
        return <Calendar className="w-4 h-4 text-cyan-300" />;
      case 'Tag':
        return <Tag className="w-4 h-4 text-cyan-300" />;
      default:
        return <CheckCircle className="w-4 h-4 text-cyan-300" />;
    }
  };

  return (
    <section
      id="maintenance-section"
      className="py-16 sm:py-20 bg-gradient-to-br from-cyan-700 via-cyan-800 to-blue-900 text-white relative overflow-hidden"
    >
      {/* Subtle background ambient details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching image */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">
            Maintenance Plan Benefits
          </h2>
          <p className="text-cyan-100 text-base sm:text-lg font-medium">
            Yearly Maintenance Agreement Includes Two Comprehensive System Visits
          </p>
        </div>

        {/* Benefits Matrix (3 columns on desktop, 2 on tablet, 1 on mobile) matching the bullet points in the photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8 max-w-5xl mx-auto">
          {MAINTENANCE_BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/10 hover:bg-white/15 p-3.5 rounded-xl border border-white/10 backdrop-blur-sm transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-900/60 border border-cyan-400/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                {renderIcon(benefit.icon)}
              </div>
              <span className="text-sm font-semibold text-white leading-snug">
                {benefit.text}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button matching the orange button in the photo */}
        <div className="text-center mt-10">
          <button
            id="btn-maintenance-learn-more"
            type="button"
            onClick={onJoinMaintenance}
            className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-extrabold px-10 py-4 rounded-xl shadow-xl shadow-orange-500/30 hover:shadow-2xl transition-all inline-flex items-center gap-3 text-base cursor-pointer"
          >
            <span>Learn More &amp; Enroll ($19/mo)</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-xs text-cyan-200 mt-2 font-medium">
            Cancel anytime • Zero contract lock-in • Transferable to new homeowner
          </p>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { X, CheckCircle2, Phone, Calendar, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/hvacData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="relative bg-white text-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
            <div>
              <span className="bg-orange-500 text-white text-xs font-black uppercase px-2.5 py-1 rounded-md tracking-wider">
                {service.priceFrom}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {service.title}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1">
              Comprehensive Service Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Key Features &amp; What's Included:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBook(service.id);
              }}
              className="flex-1 bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-black py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book This Service Now</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call: {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

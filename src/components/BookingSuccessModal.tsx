import React from 'react';
import { X, CheckCircle2, Phone, Calendar, Clock, MapPin, Tag, ShieldCheck } from 'lucide-react';
import { BookingFormData } from '../types';
import { COMPANY_INFO } from '../data/hvacData';

interface BookingSuccessModalProps {
  bookingData: BookingFormData | null;
  onClose: () => void;
}

export const BookingSuccessModal: React.FC<BookingSuccessModalProps> = ({ bookingData, onClose }) => {
  if (!bookingData) return null;

  // Generate random mock dispatch order id
  const confirmationNumber = 'APX-' + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
      <div
        className="relative bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close confirmation dialog"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Success Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            Dispatch Request Confirmed
          </span>
          <h3 className="text-2xl font-black text-slate-900">
            You're All Set, {bookingData.fullName.split(' ')[0]}!
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Our automated dispatch coordinator is routing our on-duty technician to your schedule.
          </p>
        </div>

        {/* Details Ticket */}
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs sm:text-sm space-y-2.5">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200 font-mono">
            <span className="text-slate-500 font-bold">Confirmation Ref:</span>
            <span className="font-extrabold text-cyan-700">{confirmationNumber}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Service Category:</span>
            <span className="font-bold text-slate-800 uppercase">{bookingData.serviceType}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Contact Number:</span>
            <span className="font-bold text-slate-800">{bookingData.phone}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-slate-500">Preferred Window:</span>
            <span className="font-bold text-slate-800 capitalize">{bookingData.preferredTime || 'Standard'}</span>
          </div>

          {bookingData.promoCode && (
            <div className="flex justify-between items-center pt-2 border-t border-slate-200 text-emerald-700 font-bold">
              <span>Applied Voucher:</span>
              <span className="bg-emerald-100 px-2 py-0.5 rounded text-xs">
                {bookingData.promoCode} Applied
              </span>
            </div>
          )}
        </div>

        {/* SMS Simulation notice */}
        <div className="mt-4 p-3 bg-cyan-50 rounded-lg border border-cyan-200 text-xs text-cyan-900 flex items-start gap-2">
          <Phone className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
          <span>
            We've queued an SMS dispatch notification to <strong>{bookingData.phone}</strong>. If you have an urgent HVAC emergency, call our direct line anytime at <strong>{COMPANY_INFO.phone}</strong>.
          </span>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-black py-3 px-4 rounded-xl text-sm transition-colors cursor-pointer"
          >
            Close &amp; Return to Home
          </button>
        </div>

      </div>
    </div>
  );
};

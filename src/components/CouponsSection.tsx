import React, { useState } from 'react';
import { Tag, Check, Copy, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { COUPONS_DATA } from '../data/hvacData';
import { CouponItem } from '../types';

interface CouponsSectionProps {
  onApplyCoupon: (code: string, serviceType: string) => void;
}

export const CouponsSection: React.FC<CouponsSectionProps> = ({ onApplyCoupon }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="coupons-section" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Exclusive Seasonal Specials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Seasonal Discounts &amp; Promos
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            Click any coupon below to automatically apply the digital voucher code directly to your booking request.
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COUPONS_DATA.map((coupon) => {
            const isCopied = copiedCode === coupon.code;

            return (
              <div
                key={coupon.id}
                className="relative rounded-2xl border-2 border-dashed border-cyan-500 bg-emerald-50/40 p-6 flex flex-col justify-between hover:shadow-lg hover:border-cyan-600 transition-all group"
              >
                {/* Tag Pill */}
                <span className="absolute -top-3.5 right-4 bg-cyan-600 text-white text-[11px] font-extrabold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  {coupon.tag}
                </span>

                <div className="space-y-3">
                  <h3 className="text-lg font-black text-slate-900 leading-tight pt-1">
                    {coupon.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed min-h-[36px]">
                    {coupon.description}
                  </p>

                  {/* Price */}
                  <div className="my-3 flex items-baseline gap-2">
                    {coupon.originalPrice && (
                      <span className="text-sm line-through text-slate-400 font-semibold">
                        {coupon.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl sm:text-3xl font-black text-slate-900">
                      {coupon.promoPrice}
                    </span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-3">
                  {/* Coupon code box */}
                  <div
                    onClick={() => handleCopy(coupon.code)}
                    title="Click to copy code"
                    className="bg-white border border-slate-300 hover:border-cyan-500 rounded-lg py-2 px-3 flex items-center justify-between text-xs font-mono font-bold text-slate-800 cursor-pointer shadow-2xs group/code transition-colors"
                  >
                    <span>CODE: <strong className="text-cyan-700">{coupon.code}</strong></span>
                    <span className="text-slate-400 group-hover/code:text-cyan-600">
                      {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </span>
                  </div>

                  {/* Apply to booking button */}
                  <button
                    type="button"
                    onClick={() => onApplyCoupon(coupon.code, coupon.serviceType)}
                    className="w-full bg-white hover:bg-cyan-600 text-cyan-700 hover:text-white border border-cyan-600 hover:border-transparent font-extrabold py-2.5 px-3 rounded-lg text-xs transition-all shadow-2xs cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Apply to Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee subtext */}
        <div className="text-center mt-8 text-xs text-slate-500">
          <p>Offers cannot be combined with existing service contracts. Limit one voucher per residential address.</p>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, ArrowRight, Sparkles, Wrench, Shield, Zap } from 'lucide-react';
import { SERVICES_DATA } from '../data/hvacData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookService: (promoCode?: string, serviceType?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookService,
}) => {
  const [startIndex, setStartIndex] = useState(0);

  // We show 3 at a time on desktop, 1 on mobile
  const maxVisible = 3;
  const total = SERVICES_DATA.length;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  // Get cyclical window of items
  const visibleServices = [
    SERVICES_DATA[startIndex],
    SERVICES_DATA[(startIndex + 1) % total],
    SERVICES_DATA[(startIndex + 2) % total],
  ];

  return (
    <section id="services-section" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching reference photo */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-100/70 px-3 py-1 rounded-full">
            Expert Residential &amp; Commercial Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Backed by EPA-certified technicians, transparent flat-rate pricing, and fully equipped mobile dispatch units.
          </p>
        </div>

        {/* Carousel Container with Left/Right blue arrow buttons matching image */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Services"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cyan-600 hover:bg-cyan-700 active:scale-95 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Services"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-cyan-600 hover:bg-cyan-700 active:scale-95 text-white shadow-lg flex items-center justify-center transition-all cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
            {visibleServices.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
              >
                {/* Service Visual Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 text-white font-bold text-xs px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                    {service.priceFrom}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-slate-700">
                    {service.highlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions matching reference: (Read More) + Schedule CTA */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectService(service)}
                      className="text-xs font-bold text-cyan-600 hover:text-cyan-800 transition-colors cursor-pointer hover:underline"
                    >
                      (Read More) &rarr;
                    </button>

                    <button
                      type="button"
                      onClick={() => onBookService('REBATE25', service.id)}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
                    >
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {SERVICES_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setStartIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                startIndex === i ? 'w-8 bg-cyan-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

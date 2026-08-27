import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, ThumbsUp, MessageSquare, CheckCircle } from 'lucide-react';
import { TESTIMONIALS } from '../data/hvacData';

interface ReviewsAndFeedbackSectionProps {
  onOpenReviewModal: () => void;
}

export const ReviewsAndFeedbackSection: React.FC<ReviewsAndFeedbackSectionProps> = ({
  onOpenReviewModal,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const currentReview = TESTIMONIALS[currentIndex];

  return (
    <section id="reviews-section" className="py-16 sm:py-20 bg-slate-100/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split grid matching reference image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: What our clients are saying */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-md flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    What our clients are saying
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-slate-700">4.9 / 5.0 (380+ Reviews)</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <Quote className="w-6 h-6 rotate-180" />
                </div>
              </div>

              {/* Reviewer Details */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-slate-900">
                  {currentReview.name}
                  <span className="text-sm font-normal text-slate-500 ml-2">
                    ({currentReview.location})
                  </span>
                </h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-semibold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded">
                    {currentReview.service}
                  </span>
                  <span className="text-xs text-slate-400">• {currentReview.date}</span>
                </div>
              </div>

              {/* Quote Body with stylized quotes matching photo */}
              <div className="relative my-4">
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic">
                  "{currentReview.comment}"
                </p>
              </div>
            </div>

            {/* Bottom Controls matching `< >` in photo */}
            <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <CheckCircle className="w-4 h-4" />
                <span>Verified Homeowner Review</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous review"
                  className="w-10 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:scale-95 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next review"
                  className="w-10 h-10 rounded-lg bg-orange-500 hover:bg-orange-600 active:scale-95 text-white flex items-center justify-center transition-all shadow-xs cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Right: Rate our tech matching the orange block in the image */}
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-2xl p-8 sm:p-10 shadow-xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white backdrop-blur-sm">
                <ThumbsUp className="w-6 h-6" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Rate our tech
              </h3>

              <p className="text-orange-100 text-base leading-relaxed">
                We care about making your service the best possible. Tell us how your recent heating or cooling experience with us was!
              </p>
            </div>

            <div className="space-y-4 pt-6">
              <button
                id="btn-submit-review"
                type="button"
                onClick={onOpenReviewModal}
                className="w-full bg-cyan-700 hover:bg-cyan-800 active:scale-95 text-white font-black py-4 px-6 rounded-xl shadow-lg transition-all text-sm uppercase tracking-wider cursor-pointer"
              >
                SUBMIT REVIEW
              </button>

              {/* Google & Facebook review social icons matching image */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <a
                  href="#review"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenReviewModal();
                  }}
                  className="w-10 h-10 rounded-lg bg-white text-slate-800 font-black text-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  title="Review us on Google"
                >
                  <span className="text-red-500 font-extrabold">G+</span>
                </a>
                <a
                  href="#review"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenReviewModal();
                  }}
                  className="w-10 h-10 rounded-lg bg-white text-blue-600 font-black text-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer"
                  title="Review us on Facebook"
                >
                  <span className="text-blue-600 font-extrabold">f</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

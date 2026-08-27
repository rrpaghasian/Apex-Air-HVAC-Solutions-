import React, { useState } from 'react';
import { X, Star, ThumbsUp, CheckCircle2, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleRate = (star: number) => {
    setRating(star);
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });
    } catch (err) {
      // fallback
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setRating(5);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
      <div
        className="relative bg-white text-slate-900 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close review modal"
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <div>
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto mb-4">
              <ThumbsUp className="w-6 h-6" />
            </div>
            
            <h3 className="text-xl font-black text-slate-900 mb-1">Rate Your Technician</h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto mb-6">
              Tap a star below to rate your recent heating or cooling service experience with Apex Air.
            </p>

            <div className="flex items-center justify-center gap-2 py-3 bg-slate-50 rounded-xl border border-slate-200 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRate(star)}
                  className="p-1 text-amber-400 hover:scale-125 transition-transform cursor-pointer"
                  title={`Rate ${star} Stars`}
                >
                  <Star
                    className={`w-9 h-9 ${
                      rating >= star ? 'fill-amber-400 text-amber-400' : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="https://google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <span>Leave a Review on Google</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">Thank You!</h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Your {rating}-star feedback has been recorded. Our team and field technicians deeply appreciate your support.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

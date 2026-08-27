import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Star, Sparkles } from 'lucide-react';

export const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'BBB Accredited',
      subtitle: 'A+ Rating',
      badge: 'BBB',
      color: 'from-blue-700 to-blue-900',
    },
    {
      title: 'NATE Certified',
      subtitle: 'Technicians',
      badge: 'NATE',
      color: 'from-slate-800 to-slate-900',
    },
    {
      title: 'EPA Universal',
      subtitle: 'Section 608 Certified',
      badge: 'EPA',
      color: 'from-emerald-700 to-emerald-900',
    },
    {
      title: 'Greater Hall',
      subtitle: 'Chamber of Commerce',
      badge: 'HALL',
      color: 'from-cyan-800 to-blue-950',
    },
    {
      title: 'Energy Star',
      subtitle: 'Efficiency Partner',
      badge: 'STAR',
      color: 'from-cyan-600 to-blue-700',
    },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Certifications and Associations
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Fully licensed, insured, and verified by industry standards organizations
          </p>
        </div>

        {/* Association Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-slate-50 border border-slate-200 hover:border-cyan-500/50 hover:bg-cyan-50/30 px-4 py-3 rounded-xl shadow-xs transition-all"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} text-white font-black text-xs flex items-center justify-center shadow-xs tracking-wider`}>
                {item.badge}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-900 leading-tight">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

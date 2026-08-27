import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Flame, Snowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/hvacData';

interface NavbarProps {
  onBookClick: (promoCode?: string, serviceType?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 bg-white transition-shadow duration-200 ${
        isScrolled ? 'shadow-md border-b border-slate-200' : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-decoration-none group shrink-0"
            id="brand-logo-link"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="relative">
                <Snowflake className="w-6 h-6 text-white" />
                <Flame className="w-3.5 h-3.5 text-amber-300 absolute -bottom-1 -right-1 fill-amber-400" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline">
                <span className="text-2xl font-black tracking-tight text-slate-900">
                  APEX<span className="text-cyan-600">AIR</span>
                </span>
              </div>
              <p className="text-[10px] uppercase font-bold tracking-wider text-orange-600 -mt-1">
                Heating &amp; Air Solutions
              </p>
            </div>
          </a>

          {/* Desktop Nav Links - Clean, spacious & evenly distributed */}
          <div className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-sm font-bold text-slate-700">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1 text-slate-800"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1 text-slate-800"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('seer-calculator-widget')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1 flex items-center gap-1.5 text-slate-800"
            >
              <span>SEER Savings</span>
              <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-emerald-300/60">
                ROI
              </span>
            </button>
            <button
              onClick={() => scrollToSection('maintenance-section')}
              className="hover:text-cyan-600 transition-colors cursor-pointer py-1 text-slate-800"
            >
              Maintenance
            </button>
          </div>

          {/* Right CTAs: Phone number (nowrap) + Book button */}
          <div className="hidden sm:flex items-center gap-5 shrink-0">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              id="header-phone-cta"
              className="flex flex-col text-right group whitespace-nowrap"
            >
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                Speak to a Technician
              </span>
              <span className="text-base sm:text-lg font-black text-slate-900 group-hover:text-cyan-600 transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <Phone className="w-4 h-4 text-orange-500 fill-orange-500/20 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </span>
            </a>

            <button
              id="header-book-btn"
              onClick={() => onBookClick('REBATE25', 'repair')}
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white font-extrabold px-5 py-2.5 rounded-lg shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer text-sm whitespace-nowrap"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center sm:hidden gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="p-2 text-orange-600 bg-orange-50 rounded-lg"
              title="Call Us Now"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu-drawer" className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="p-3 text-center rounded-lg bg-slate-50 hover:bg-slate-100 font-bold"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services-section')}
              className="p-3 text-center rounded-lg bg-slate-50 hover:bg-slate-100 font-bold"
            >
              Our Services
            </button>
            <button
              onClick={() => scrollToSection('seer-calculator-widget')}
              className="p-3 text-center rounded-lg bg-slate-50 hover:bg-slate-100 text-emerald-700 font-bold"
            >
              SEER Calculator
            </button>
            <button
              onClick={() => scrollToSection('maintenance-section')}
              className="p-3 text-center rounded-lg bg-slate-50 hover:bg-slate-100 font-bold"
            >
              Maintenance Plan
            </button>
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="w-full py-3 bg-slate-900 text-white rounded-lg text-center font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              Call Now: {COMPANY_INFO.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick('REBATE25', 'repair');
              }}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-center font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
            >
              <Calendar className="w-4 h-4" />
              Book Service Window Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

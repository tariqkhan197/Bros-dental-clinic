import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X, Shield, Clock, Sparkles } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenAI: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner Announcement */}
      <div className="bg-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-blue-400 font-semibold">
              <Shield className="w-3.5 h-3.5" /> Painless Dental Care Guaranteed
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5" /> Sat - Thu: 9:00 AM - 9:00 PM
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto text-xs">
            <button
              onClick={onOpenAI}
              className="flex items-center gap-1.5 text-blue-300 hover:text-white transition-colors bg-blue-950/70 px-3 py-1 rounded-full border border-blue-800/60 font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Ask AI Dental Advisor
            </button>
            <a
              href={`tel:${CLINIC_INFO.phoneDirect}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-blue-300 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        id="navbar"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold text-lg sm:text-xl text-blue-900 tracking-tight leading-tight underline decoration-blue-500/30 underline-offset-4 group-hover:text-blue-600 transition-colors">
                BROS DENTAL CLINIC
              </span>
              <span className="text-[10px] tracking-widest uppercase font-bold text-blue-600">
                OLAYA ST • RIYADH, SAUDI ARABIA
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-blue-600 transition-colors relative py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm shadow-lg shadow-blue-200 transition-all flex items-center gap-2 group"
            >
              <Calendar className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden inline-flex items-center gap-1.5 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-full shadow-md shadow-blue-200"
            >
              <Calendar className="w-3.5 h-3.5" /> Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col gap-3 py-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-slate-800 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-full shadow-lg shadow-blue-200"
                >
                  <Calendar className="w-4 h-4" /> Schedule Consultation
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAI();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-slate-100 text-slate-800 font-semibold py-2.5 rounded-xl text-sm"
                >
                  <Sparkles className="w-4 h-4 text-blue-600" /> AI Dental Concierge
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

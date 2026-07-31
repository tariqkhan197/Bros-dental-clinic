import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Shield } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-900 p-1 flex items-center justify-center border border-slate-800 shadow-md">
                <img
                  src={CLINIC_IMAGES.logo}
                  alt={CLINIC_INFO.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="font-sans font-bold text-xl text-white tracking-tight block">
                  BROS DENTAL
                </span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-sky-400 block">
                  CLINIC • RIYADH, SAUDI ARABIA
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Premier dental practice in Riyadh providing general dentistry, cosmetic smile makeovers, orthodontics, dental implants, periodontal care, and restorative procedures.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center text-slate-400 transition-all"
                title={CLINIC_INFO.social.instagram}
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center text-slate-400 transition-all"
                title={CLINIC_INFO.social.facebook}
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500 hover:text-sky-400 flex items-center justify-center text-slate-400 transition-all"
                title={CLINIC_INFO.social.twitter}
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-white font-bold text-base mb-4 border-l-2 border-sky-500 pl-3">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['About', 'Services', 'Why Choose Us', 'Gallery', 'Testimonials', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    className="hover:text-sky-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-sky-500">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-sans text-white font-bold text-base mb-4 border-l-2 border-sky-500 pl-3">
              Clinical Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>General dentistry & preventive care</li>
              <li>Cosmetic dentistry & smile makeovers</li>
              <li>Orthodontics (braces & aligners)</li>
              <li>Dental implants</li>
              <li>Periodontal (gum) treatments</li>
              <li>Restorative procedures & crowns</li>
            </ul>
          </div>

          {/* Emergency & Direct Desk */}
          <div>
            <h4 className="font-sans text-white font-bold text-base mb-4 border-l-2 border-sky-500 pl-3">
              Contact & Reception
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-slate-400">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5 text-rose-400 font-semibold">
                <Shield className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Priority Desk: {CLINIC_INFO.emergencyPhone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-400">{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

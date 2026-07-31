import React from 'react';
import { Shield, Sparkles, Award, HeartHandshake, CheckCircle, ArrowRight } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO } from '../data/clinicData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Real Building Image & Badges */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
              <img
                src={CLINIC_IMAGES.building}
                alt="BROS Dental Clinic Building Facade in Riyadh"
                className="w-full h-[400px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <div className="bg-slate-900/90 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wider block">Real Building Facade</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-200 mt-1">
                    BROS Dental Clinic (مجمع عيادات بروز لطب الأسنان) - Olaya St, Al Wurud, Riyadh.
                  </p>
                </div>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-5 -right-2 sm:right-4 bg-blue-600 text-white p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center font-serif text-2xl font-bold">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-bold font-sans block leading-none">Premier</span>
                <span className="text-xs text-blue-100 font-medium">Riyadh Clinical Excellence</span>
              </div>
            </div>
          </div>

          {/* Right Side: Mission & Pillars */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            <div>
              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3">
                About BROS Dental Clinics
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Where World-Class Artistry Meets <span className="text-blue-600">Compassionate Care</span>
              </h2>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              At <strong className="text-slate-900 font-semibold">{CLINIC_INFO.name} ({CLINIC_INFO.arabicName})</strong>, we combine decades of clinical expertise with advanced 3D intraoral digital scanners, operating microscopes, and gentle painless care protocols. Our team features seasoned consultants with up to 25+ years of specialized experience in dental implants, endodontics, orthodontics, prosthodontics, and cosmetic smile restorations.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Painless Anesthesia</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Computer-controlled micro-delivery with zero sharp sensation.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">3D Digital Scans</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Instant optical 3D scanners instead of physical impression molds.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Gentle Family Care</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Specialized pediatric and adult comfort protocols for all ages.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs sm:text-sm">10-Year Guarantee</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Clinical warranties on ceramic crowns & implants.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-200 transition-all text-sm flex items-center gap-2 group"
              >
                <span>Experience Royal Care</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

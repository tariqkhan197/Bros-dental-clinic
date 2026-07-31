import React, { useState } from 'react';
import { Calendar, ShieldCheck, Star, Sparkles, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { CLINIC_IMAGES, CLINIC_INFO, SERVICES } from '../data/clinicData';

interface HeroProps {
  onOpenBooking: (initialService?: string) => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAI }) => {
  const [selectedService, setSelectedService] = useState(SERVICES[0].id);
  const [quickDate, setQuickDate] = useState('');

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(selectedService);
  };

  return (
    <section className="relative bg-[#F8FAFC] overflow-hidden pt-6 pb-16 lg:py-16">
      {/* Soft background ambient shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 -ml-20 w-80 h-80 rounded-full bg-blue-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Main Grid: Left Banner & Right Media Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5" /> Premier Dental Care
              </span>
              <span className="bg-blue-50 text-blue-700 border border-blue-100 px-3 py-1 rounded-full text-xs font-bold">
                Riyadh, Saudi Arabia
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]">
              Crafting Your Most <br className="hidden sm:inline" />
              <span className="text-blue-600 italic font-serif">Confident Smile</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Experience modern dental excellence at BROS Dental Clinic. Combining advanced 3D intraoral digital precision, gentle painless procedures, and premier patient care.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => onOpenBooking()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3.5 rounded-full shadow-lg shadow-blue-200 transition-all text-base flex items-center gap-2 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAI}
                className="bg-white hover:bg-slate-50 text-slate-800 font-semibold px-5 py-3.5 rounded-full border border-slate-200 shadow-sm hover:border-blue-300 transition-all text-base flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-blue-600" />
                <span>AI Dental Advisor</span>
              </button>
            </div>

            {/* High Density Trust Stats */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                  100%
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xs sm:text-sm">Comprehensive</p>
                  <p className="text-slate-500 text-[11px]">Oral Care</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg shrink-0">
                  12k
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xs sm:text-sm">Happy Patients</p>
                  <p className="text-slate-500 text-[11px]">Painless Care</p>
                </div>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center font-bold text-sm shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <p className="text-slate-900 font-bold text-xs sm:text-sm">5.0 ★ Top-Rated</p>
                  <p className="text-slate-500 text-[11px]">Verified Reviews</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 group">
                <img
                  src={CLINIC_IMAGES.heroRoom}
                  alt="BROS Dental Clinic Modern Treatment Suite"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">Official Treatment Suite</span>
                      <h4 className="font-sans font-bold text-sm sm:text-base text-slate-900">BROS Dental Clinic Room</h4>
                    </div>
                    <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 text-xs font-bold px-2.5 py-1 rounded-full border border-blue-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Sterilized Unit
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Shield Badge */}
              <div className="absolute -top-4 -left-4 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-200 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Gentle & Painless</span>
                  <span className="text-[11px] text-slate-500">Modern Care Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* High Density Triple Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Card 1: The Clinic */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">The Clinic</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Located on Olaya St, Al Wurud, Riyadh, our clinic offers comprehensive dental solutions in a peaceful, modern atmosphere.
              </p>
            </div>
            <div className="mt-4 flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-slate-500 font-medium">Modern Technology</span>
              <span className="text-xs font-bold text-blue-600">Premier Care →</span>
            </div>
          </div>

          {/* Card 2: Working Hours */}
          <div className="bg-blue-50 p-5 rounded-3xl border border-blue-100 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">Working Hours</h3>
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">Saturday - Thursday</span>
                  <span className="font-semibold text-slate-800">09:00 - 21:00</span>
                </div>
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-slate-500">Friday</span>
                  <span className="font-semibold text-slate-800">Emergency & Priority</span>
                </div>
              </div>
            </div>
            <div className="pt-3 border-t border-blue-200">
              <p className="text-[11px] text-blue-700 uppercase font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Phone & Direct Desk: {CLINIC_INFO.phone}
              </p>
            </div>
          </div>

          {/* Card 3: Find Us */}
          <div className="bg-slate-900 p-5 rounded-3xl text-white relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2">Find Us</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {CLINIC_INFO.address}
              </p>
            </div>
            <div className="relative z-10 pt-4">
              <a
                href="#contact"
                className="text-xs font-bold text-blue-400 flex items-center gap-1 group hover:text-blue-300 transition-colors"
              >
                <span>OPEN MAP & DIRECTIONS</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
          </div>
        </div>

        {/* Quick Booking Scheduler Bar */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-5 h-5 text-blue-600" />
            <h3 className="font-sans text-base sm:text-lg font-bold text-slate-900">Direct Consultation & Slot Scheduler</h3>
            <span className="text-xs text-slate-500 ml-auto hidden sm:inline">Instant Confirmation</span>
          </div>

          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wide">Select Treatment</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 font-medium truncate"
              >
                {SERVICES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-bold text-slate-700 mb-1 uppercase tracking-wide">Preferred Date</label>
              <input
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-blue-500 font-medium"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Preferred Slot</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

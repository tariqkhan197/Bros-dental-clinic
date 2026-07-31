import React, { useState } from 'react';
import { Calendar, Award, CheckCircle2, ShieldCheck, UserCheck } from 'lucide-react';
import { DOCTORS } from '../data/clinicData';
import { Doctor } from '../types';

interface DoctorsProps {
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="bg-blue-600/90 text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 shadow-sm mb-3">
            <UserCheck className="w-3.5 h-3.5" /> Clinical Leadership
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Specialist <span className="text-blue-400">Doctors & Consultants</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
            Meet our team of experienced dental consultants and specialists at BROS Dental Clinic, bringing decades of clinical excellence to Riyadh.
          </p>
        </div>

        {/* Doctors Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => (
            <div
              key={doc.id}
              className="bg-slate-800/90 rounded-3xl overflow-hidden border border-slate-700/80 shadow-xl flex flex-col justify-between hover:border-blue-500/80 hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300 group"
            >
              {/* Doctor Header & Portrait */}
              <div>
                <div className="relative h-72 overflow-hidden bg-slate-950 flex items-center justify-center p-2">
                  <img
                    src={doc.image}
                    alt={doc.name}
                    className="w-full h-full object-cover object-top rounded-2xl group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  
                  {/* Experience Tag */}
                  <span className="absolute top-4 right-4 bg-blue-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" /> {doc.experienceYears}
                  </span>
                </div>

                {/* Doctor Text Information */}
                <div className="p-6 space-y-4">
                  {/* Arabic Name & Title Banner */}
                  <div className="bg-slate-900/80 p-3.5 rounded-2xl border border-slate-700/60 text-right space-y-1">
                    <div className="text-sky-400 font-bold text-base sm:text-lg font-sans" dir="rtl">
                      {doc.arabicName}
                    </div>
                    <div className="text-slate-300 text-xs font-medium" dir="rtl">
                      {doc.arabicTitle}
                    </div>
                  </div>

                  {/* English Name & Title */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-bold text-blue-400 uppercase tracking-wide mt-0.5">
                      {doc.title}
                    </p>
                  </div>

                  {/* Qualifications List */}
                  <div className="space-y-2 pt-1">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">
                      Key Qualifications & Expertise
                    </span>
                    <ul className="space-y-2">
                      {doc.qualifications.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onOpenBooking(undefined, doc.id)}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-2xl text-xs sm:text-sm shadow-lg shadow-blue-900/40 transition-all flex items-center justify-center gap-2 group-hover:bg-blue-500"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation with {doc.name.split(' ')[1] || doc.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Excellence Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-900/80 via-slate-800 to-blue-950 p-6 sm:p-8 rounded-3xl border border-blue-500/30 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/30 border border-blue-400/40 text-blue-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-lg sm:text-xl text-white">
                Personalized Care by Board-Certified Specialists
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Each treatment plan at BROS Dental Clinic is personally overseen by experienced consultants using advanced 3D digital intraoral diagnostics.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenBooking()}
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-6 py-3 rounded-full text-xs sm:text-sm shrink-0 shadow-lg"
          >
            Schedule Specialist Checkup
          </button>
        </div>
      </div>
    </section>
  );
};

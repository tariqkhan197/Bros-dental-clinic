import React, { useState } from 'react';
import { Cpu, ShieldAlert, Sparkles, Award, CreditCard, Sofa, CheckCircle, ArrowRight } from 'lucide-react';
import { CLINIC_IMAGES } from '../data/clinicData';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      icon: Cpu,
      title: '3D Intraoral Digital Scanners',
      desc: 'No more gagging on gooey traditional mouth trays. Our HD 3D scanners map your entire jaw structure in 60 seconds with 100% digital precision.',
    },
    {
      icon: ShieldAlert,
      title: 'Zero-Pain Computerized Anesthesia',
      desc: 'Our single-tooth Wand anesthesia monitors tissue pressure in real time, delivering gentle, painless numbing without heavy face numbness after.',
    },
    {
      icon: Award,
      title: 'Experienced Dental Specialists',
      desc: 'Our team combines decades of clinical leadership with artistic precision to deliver gentle, comprehensive smile care.',
    },
    {
      icon: Sofa,
      title: 'VIP Executive Comfort Suites',
      desc: 'Relax in noise-canceling headphones, stream Netflix on ceiling displays, and enjoy aromatherapy while our experts refine your smile.',
    },
    {
      icon: Sparkles,
      title: 'Sterile Hospital-Grade Protocol',
      desc: 'Every treatment room undergoes medical UV-C air filtration and Class-B autoclave sterilization between every single patient visit.',
    },
    {
      icon: CreditCard,
      title: 'Flexible 0% APR Financing',
      desc: 'Transparent pricing with zero hidden fees. We work with CareCredit and all PPO insurance providers to make royal care affordable.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">The BROS Distinction</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Why Patients Choose BROS Dental Clinic
          </h2>
          <p className="text-slate-600 text-base mt-3">
            We combine high-tech medical innovation with five-star luxury hospitality so you look forward to every appointment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive 6 Pillars List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === index;
              return (
                <div
                  key={index}
                  onClick={() => setActivePillar(index)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-sky-50/80 border-sky-400 shadow-md ring-2 ring-sky-400/20'
                      : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isSelected ? 'bg-sky-600 text-white' : 'bg-white text-sky-600 border border-slate-200'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif font-bold text-slate-900 text-base">{pillar.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-13">{pillar.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Uploaded Dental Equipment Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-900 group">
              <img
                src={CLINIC_IMAGES.equipment}
                alt="State-of-the-Art Dental Equipment"
                className="w-full h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs uppercase tracking-wider mb-1">
                    <CheckCircle className="w-4 h-4 text-sky-400" />
                    <span>Official Clinic Equipment</span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    {pillars[activePillar].title}
                  </h4>
                  <p className="text-xs text-slate-200 mt-1">
                    {pillars[activePillar].desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-wrap items-center justify-between gap-6 shadow-xl">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Ready for a Pain-Free Dental Experience?</h3>
            <p className="text-slate-300 text-sm mt-2">
              Book your comprehensive 3D smile examination and consultation today.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center gap-2"
          >
            <span>Book Your VIP Visit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

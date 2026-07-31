import React from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp } from 'lucide-react';
import { TESTIMONIALS, CLINIC_IMAGES } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">Patient Feedback</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Real Patient Smiles & Experiences
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Read authentic stories from patients who experienced our zero-pain commitment and royal care atmosphere.
          </p>

          {/* Overall Google Rating Badge */}
          <div className="mt-6 inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-left text-xs font-semibold text-slate-800">
              <span className="text-slate-900 font-bold text-sm block">4.9 / 5.0 Rating</span>
              <span className="text-slate-500 font-normal">Based on 850+ Verified Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-7 shadow-lg border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group"
            >
              <Quote className="w-10 h-10 text-sky-100 absolute top-6 right-6 group-hover:text-sky-200 transition-colors" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm italic leading-relaxed mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-sky-300"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-semibold text-slate-900 text-sm">{t.name}</h4>
                    {t.verified && (
                      <CheckCircle2 className="w-4 h-4 text-sky-600" title="Verified Patient" />
                    )}
                  </div>
                  <span className="text-xs text-sky-700 font-medium block">{t.treatment}</span>
                  <span className="text-[10px] text-slate-400">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Maximize2, Sparkles, CheckCircle } from 'lucide-react';
import { GALLERY_ITEMS, CLINIC_IMAGES } from '../data/clinicData';
import { GalleryItem } from '../types';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filterTabs = [
    { label: 'All Photos', value: 'all' },
    { label: 'Clinic Interior', value: 'interior' },
    { label: 'Treatment Rooms', value: 'treatment' },
    { label: '3D Equipment', value: 'equipment' },
    { label: 'Smile Makeovers', value: 'results' },
  ];

  const filteredGallery =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">Clinic Showcase</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Explore BROS Dental Clinic Environment
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Step inside our Beverly Hills facility featuring pristine surgical suites, marble reception, and real patient smile aesthetic transformations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === tab.value
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative h-64 sm:h-72 rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-900 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-1 opacity-90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Before & After Smile Slider Feature */}
        <div className="mt-16 bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="inline-flex items-center gap-1 text-sky-400 text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4" /> Interactive Smile Transformation
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                Drag Slider to View Laser Whitening Result
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                See the contrast achieved after a single 45-minute painless laser teeth whitening session at BROS Dental Clinic.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>Up to 8 Shades Brighter in 45 Minutes</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle className="w-4 h-4 text-sky-400" />
                  <span>Zero Post-Treatment Thermal Sensitivity</span>
                </div>
              </div>
            </div>

            {/* Drag Slider Box */}
            <div className="lg:col-span-7">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden select-none border-2 border-slate-700">
                {/* Background Image (AFTER) */}
                <img
                  src={CLINIC_IMAGES.smileTransformation}
                  alt="After Laser Whitening Result"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-4 right-4 bg-sky-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                  AFTER (Bright Whitening)
                </span>

                {/* Foreground Image (BEFORE - Clipped) */}
                <div
                  className="absolute top-0 left-0 bottom-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={CLINIC_IMAGES.patientSmiling}
                    alt="Before Laser Whitening"
                    className="absolute top-0 left-0 h-full max-w-none filter brightness-90 saturate-50"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-4 left-4 bg-slate-800/90 text-slate-200 text-xs font-bold px-3 py-1 rounded-full shadow-md z-10">
                    BEFORE
                  </span>
                </div>

                {/* Slider Handle Divider */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-lg"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 bg-white text-slate-900 rounded-full flex items-center justify-center font-bold text-xs shadow-xl border-2 border-sky-600">
                    ↔
                  </div>
                </div>

                {/* Range Input overlay */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

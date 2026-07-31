import React, { useState } from 'react';
import { Clock, CheckCircle2, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { SERVICES } from '../data/clinicData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedModalService, setSelectedModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-3 shadow-sm">
            Our Clinical Services
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Comprehensive Dental Services <span className="text-blue-600">at BROS Dental Clinic</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            The clinic provides comprehensive dental care, including general dentistry, cosmetic dentistry, orthodontics, dental implants, periodontal gum care, and restorative procedures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/80 flex flex-col hover:shadow-xl hover:border-blue-200 transition-all duration-300 group"
            >
              {/* Service Image */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {service.category}
                </span>

                <span className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> {service.duration}
                </span>
              </div>

              {/* Service Content */}
              <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <h3 className="font-sans text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mt-2">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <ul className="mt-3.5 space-y-1.5">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedModalService(service)}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-600"
                  >
                    <Info className="w-4 h-4 text-blue-600" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full text-xs shadow-md shadow-blue-200 transition-all flex items-center gap-1.5"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedModalService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold"
            >
              ✕
            </button>

            <div className="rounded-2xl overflow-hidden h-52 mb-5">
              <img
                src={selectedModalService.image}
                alt={selectedModalService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
              {selectedModalService.category} Service
            </span>
            <h3 className="font-sans text-xl font-bold text-slate-900 mb-2">{selectedModalService.title}</h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">{selectedModalService.fullDesc}</p>

            <div className="bg-blue-50 p-4 rounded-2xl mb-5 border border-blue-100">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">Key Service Benefits</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedModalService.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-800">
                    <ShieldCheck className="w-4 h-4 text-blue-600" /> {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <span className="text-xs text-slate-500 font-medium">Approx. Duration: {selectedModalService.duration}</span>
              <button
                onClick={() => {
                  const id = selectedModalService.id;
                  setSelectedModalService(null);
                  onOpenBooking(id);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg shadow-blue-200 text-sm"
              >
                Book This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

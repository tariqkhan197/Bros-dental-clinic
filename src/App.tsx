import React, { useState } from 'react';
import { Sparkles, Calendar, Phone } from 'lucide-react';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Doctors } from './components/Doctors';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { AppointmentForm } from './components/AppointmentForm';
import { ContactMap } from './components/ContactMap';
import { Footer } from './components/Footer';
import { AIAssistantModal } from './components/AIAssistantModal';
import { LightboxModal } from './components/LightboxModal';

import { GalleryItem } from './types';
import { CLINIC_INFO } from './data/clinicData';

export default function App() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);

  const scrollToAppointment = (serviceId?: string, doctorId?: string) => {
    if (serviceId) setSelectedServiceId(serviceId);
    if (doctorId) setSelectedDoctorId(doctorId);

    const elem = document.getElementById('appointment');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-sky-200 selection:text-sky-900">
      {/* Sticky Top Navbar */}
      <Navbar
        onOpenBooking={() => scrollToAppointment()}
        onOpenAI={() => setIsAIOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={(serviceId) => scrollToAppointment(serviceId)}
          onOpenAI={() => setIsAIOpen(true)}
        />

        {/* 2. About Section */}
        <About onOpenBooking={() => scrollToAppointment()} />

        {/* 3. Services Section */}
        <Services onOpenBooking={(serviceId) => scrollToAppointment(serviceId)} />

        {/* 4. Specialist Doctors Section */}
        <Doctors onOpenBooking={(serviceId, doctorId) => scrollToAppointment(serviceId, doctorId)} />

        {/* 5. Why Choose Us Section */}
        <WhyChooseUs onOpenBooking={() => scrollToAppointment()} />

        {/* 6. Gallery Section */}
        <Gallery onOpenLightbox={(item) => setLightboxItem(item)} />

        {/* 7. Testimonials Section */}
        <Testimonials />

        {/* 8. FAQ Section */}
        <FAQ />

        {/* 9. Appointment Form Section */}
        <AppointmentForm
          initialServiceId={selectedServiceId}
          initialDoctorId={selectedDoctorId}
        />

        {/* 9. Contact & Google Maps Section */}
        <ContactMap />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Dental Concierge Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        <button
          onClick={() => setIsAIOpen(true)}
          className="group relative bg-slate-900 hover:bg-slate-800 text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border-2 border-sky-400 flex items-center gap-2.5 transition-all duration-300 hover:scale-105"
          aria-label="Ask Dr. Bros AI Concierge"
        >
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-4 ring-white animate-ping" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400" />
          
          <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          </div>
          
          <span className="hidden sm:inline font-serif font-bold text-xs sm:text-sm text-sky-200 group-hover:text-white transition-colors">
            Dr. Bros AI Concierge
          </span>
        </button>

        <a
          href={`tel:${CLINIC_INFO.phoneDirect}`}
          className="sm:hidden bg-rose-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          title="Emergency Hotline"
        >
          <Phone className="w-5 h-5" />
        </a>
      </div>

      {/* Modals */}
      <AIAssistantModal
        isOpen={isAIOpen}
        onClose={() => setIsAIOpen(false)}
        onOpenBooking={() => scrollToAppointment()}
      />

      <LightboxModal
        item={lightboxItem}
        onClose={() => setLightboxItem(null)}
        onOpenBooking={() => scrollToAppointment()}
      />
    </div>
  );
}

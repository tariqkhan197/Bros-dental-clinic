import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Instagram, Facebook, Twitter, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const ContactMap: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">Location & Connect</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Visit BROS Dental Clinic
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Conveniently located at Olaya St, Al Wurud, Riyadh with parking and priority walk-in availability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Side: Contact Information Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80 space-y-6">
              <h3 className="font-sans text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Clinic Location & Hours
              </h3>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Riyadh Clinic Address</h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">{CLINIC_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Direct Phone & Desk</h4>
                  <p className="text-xs text-slate-600 mt-1">
                    Phone: <a href={`tel:${CLINIC_INFO.phoneDirect}`} className="text-sky-700 font-semibold">{CLINIC_INFO.phone}</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Email Inquiry</h4>
                  <p className="text-xs text-slate-600 mt-1">{CLINIC_INFO.email}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide mb-2">Operating Hours</h4>
                <div className="space-y-1.5 text-xs text-slate-600">
                  {CLINIC_INFO.workingHours.map((wh, i) => (
                    <div key={i} className="flex justify-between">
                      <span>{wh.days}</span>
                      <span className="font-medium text-slate-800">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Social Channels Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-lg border border-slate-800">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">Official Social Media</span>
              <h4 className="font-sans text-lg font-bold mb-4">Follow BROS Dental Clinic</h4>
              
              <div className="space-y-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs transition-colors"
                >
                  <Instagram className="w-5 h-5 text-pink-400" />
                  <div>
                    <span className="font-semibold text-white block">Instagram</span>
                    <span className="text-slate-400">{CLINIC_INFO.social.instagram}</span>
                  </div>
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs transition-colors"
                >
                  <Facebook className="w-5 h-5 text-blue-400" />
                  <div>
                    <span className="font-semibold text-white block">Facebook</span>
                    <span className="text-slate-400">{CLINIC_INFO.social.facebook}</span>
                  </div>
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs transition-colors"
                >
                  <Twitter className="w-5 h-5 text-sky-400" />
                  <div>
                    <span className="font-semibold text-white block">Twitter</span>
                    <span className="text-slate-400">{CLINIC_INFO.social.twitter}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Google Maps Interactive & Inquiry Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Map Container */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col">
              <div className="relative h-72 sm:h-80 bg-slate-100 overflow-hidden">
                <iframe
                  title="BROS Dental Clinic Location Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=46.6600%2C24.7000%2C46.6800%2C24.7200&amp;layer=mapnik&amp;marker=24.7136%2C46.6753"
                  className="w-full h-full border-0 filter contrast-[1.05] brightness-95"
                  loading="lazy"
                />

                {/* Map Overlay Card */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 text-xs">
                  <div className="flex items-center gap-2 font-bold font-sans text-sm text-sky-400">
                    <MapPin className="w-4 h-4 text-sky-400" />
                    <span>BROS Dental Clinic</span>
                  </div>
                  <p className="text-slate-300 text-[11px] mt-0.5">Olaya St, Al Wurud, Riyadh 12251</p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Olaya+St,+Al+Wurud,+Riyadh+12251,+Saudi+Arabia"
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg transition-colors flex items-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5" /> Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick Contact Message Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80">
              <h3 className="font-sans text-xl font-bold text-slate-900 mb-2">Send Us a Quick Note</h3>
              <p className="text-xs text-slate-500 mb-6">
                Have a question or inquiry? Complete the form below and our team will reply promptly.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Write your message or inquiry here..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-sky-400" />
                    <span>Send Message</span>
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="font-sans font-bold text-slate-900 text-lg">Message Sent!</h4>
                  <p className="text-xs text-slate-600">
                    Thank you, {contactForm.name}. Our reception team will get back to you shortly at {contactForm.email}.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-2 text-xs text-sky-700 font-semibold underline"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

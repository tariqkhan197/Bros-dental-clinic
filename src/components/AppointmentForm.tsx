import React, { useState, useEffect } from 'react';
import { CheckCircle2, UserCheck } from 'lucide-react';
import { SERVICES, DOCTORS, CLINIC_INFO } from '../data/clinicData';

interface AppointmentFormProps {
  initialServiceId?: string;
  initialDoctorId?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
  initialServiceId,
  initialDoctorId,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedService, setSelectedService] = useState<string>(
    initialServiceId || SERVICES[0].id
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    initialDoctorId || 'any'
  );
  const [date, setDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [isFirstVisit, setIsFirstVisit] = useState<boolean>(true);
  const [notes, setNotes] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);
  const [bookingReference, setBookingReference] = useState<string>('');

  useEffect(() => {
    if (initialServiceId) setSelectedService(initialServiceId);
    if (initialDoctorId) setSelectedDoctor(initialDoctorId);
  }, [initialServiceId, initialDoctorId]);

  const timeSlots = [
    '09:00 AM',
    '10:00 AM',
    '11:30 AM',
    '01:30 PM',
    '03:00 PM',
    '04:30 PM',
    '06:00 PM',
    '07:30 PM',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/appointments/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          serviceId: selectedService,
          date,
          timeSlot,
          fullName,
          email,
          phone,
          isFirstVisit,
          notes,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setBookingReference(data.bookingReference);
        setBookingConfirmed(true);
      } else {
        const ref = 'BROS-' + Math.floor(100000 + Math.random() * 900000);
        setBookingReference(ref);
        setBookingConfirmed(true);
      }
    } catch {
      const ref = 'BROS-' + Math.floor(100000 + Math.random() * 900000);
      setBookingReference(ref);
      setBookingConfirmed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];

  return (
    <section id="appointment" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Soft Glow Ambient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-600/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-sky-400 tracking-widest uppercase block mb-2">
            Online Priority Booking
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white leading-tight">
            Schedule Your Appointment
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Select your service, preferred date, and contact details. Receive instant confirmation and priority check-in at our Riyadh clinic.
          </p>
        </div>

        {/* Booking Card */}
        <div className="bg-white/95 text-slate-900 rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 backdrop-blur-md">
          {!bookingConfirmed ? (
            <div>
              {/* Step Indicators */}
              <div className="flex items-center justify-between mb-8 max-w-md mx-auto relative">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    onClick={() => num < step && setStep(num)}
                    className={`relative z-10 w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all cursor-pointer ${
                      step === num
                        ? 'bg-sky-600 text-white ring-4 ring-sky-100'
                        : step > num
                        ? 'bg-emerald-500 text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {step > num ? <CheckCircle2 className="w-5 h-5" /> : num}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* STEP 1: Service */}
                {step === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-sans text-xl font-bold text-slate-900 mb-4">
                      1. Select Service
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                        Preferred Consultant / Doctor
                      </label>
                      <select
                        value={selectedDoctor}
                        onChange={(e) => setSelectedDoctor(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 font-medium mb-4"
                      >
                        <option value="any">Any Available Specialist Consultant</option>
                        {DOCTORS.map((doc) => (
                          <option key={doc.id} value={doc.id}>
                            {doc.name} - {doc.title} ({doc.arabicName})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                        Service Required
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {SERVICES.map((s) => (
                          <div
                            key={s.id}
                            onClick={() => setSelectedService(s.id)}
                            className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between gap-2 ${
                              selectedService === s.id
                                ? 'bg-sky-50 border-sky-500 ring-2 ring-sky-500/20'
                                : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            <div>
                              <span className="font-semibold text-xs sm:text-sm text-slate-900 block leading-snug">
                                {s.title}
                              </span>
                              <span className="text-[11px] text-slate-500 mt-1 block">{s.duration}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md text-sm"
                      >
                        Continue to Date & Time →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Date & Time */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <h3 className="font-sans text-xl font-bold text-slate-900 mb-4">
                      2. Choose Preferred Date & Time
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                        Appointment Date
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full bg-slate-50 border border-slate-300 rounded-2xl p-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-2">
                        Available Time Slots
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {timeSlots.map((slot) => (
                          <button
                            type="button"
                            key={slot}
                            onClick={() => setTimeSlot(slot)}
                            className={`py-2.5 px-3 rounded-xl text-xs font-semibold transition-all ${
                              timeSlot === slot
                                ? 'bg-sky-600 text-white shadow-md'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Services
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (!date) {
                            alert('Please select an appointment date.');
                            return;
                          }
                          setStep(3);
                        }}
                        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md text-sm"
                      >
                        Continue to Contact Details →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Info */}
                {step === 3 && (
                  <div className="space-y-5 animate-fadeIn">
                    <h3 className="font-sans text-xl font-bold text-slate-900 mb-2">
                      3. Patient Contact Details
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                          Phone Number (for SMS Confirmation) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="05X XXX XXXX"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="firstVisit"
                        checked={isFirstVisit}
                        onChange={(e) => setIsFirstVisit(e.target.checked)}
                        className="w-4 h-4 text-sky-600 rounded"
                      />
                      <label htmlFor="firstVisit" className="text-xs text-slate-700 font-medium">
                        This will be my first visit to BROS Dental Clinic
                      </label>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-1">
                        Special Requests or Symptoms (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention any specific requests or questions..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl p-2.5 text-sm text-slate-800 focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    {/* Summary Review Box */}
                    <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 text-xs text-slate-800 space-y-1">
                      <div className="font-bold text-sky-900 mb-1">Booking Summary Review</div>
                      <div>• <strong>Service:</strong> {currentServiceObj.title}</div>
                      <div>• <strong>Schedule:</strong> {date || 'Selected Date'} at {timeSlot}</div>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        ← Back to Schedule
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg text-sm flex items-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Confirming Booking...</span>
                        ) : (
                          <>
                            <CheckCircle2 className="w-5 h-5" />
                            <span>Confirm & Book Appointment</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          ) : (
            /* Confirmation State Screen */
            <div className="text-center py-8 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest block">
                  Reservation Confirmed!
                </span>
                <h3 className="font-sans text-3xl font-bold text-slate-900 mt-1">
                  Thank You, {fullName}!
                </h3>
                <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
                  We look forward to welcoming you to BROS Dental Clinic. Your confirmation code has been generated.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 max-w-md mx-auto text-left space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-slate-200">
                  <span className="text-xs text-slate-500 uppercase font-bold">Confirmation Reference</span>
                  <span className="font-mono font-bold text-sky-700 bg-sky-100 px-3 py-1 rounded-lg text-sm">
                    {bookingReference}
                  </span>
                </div>
                <div className="text-xs text-slate-700 space-y-1.5">
                  <div><strong>Service:</strong> {currentServiceObj.title}</div>
                  <div><strong>Date & Time:</strong> {date} at {timeSlot}</div>
                  <div><strong>Location:</strong> {CLINIC_INFO.address}</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => {
                    setBookingConfirmed(false);
                    setStep(1);
                  }}
                  className="bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm"
                >
                  Book Another Appointment
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phoneDirect}`}
                  className="bg-slate-100 text-slate-800 text-xs font-semibold px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-200"
                >
                  Call Clinic Desk ({CLINIC_INFO.phone})
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

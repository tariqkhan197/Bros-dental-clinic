import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS, CLINIC_INFO } from '../data/clinicData';

export const FAQ: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQS[0].id);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-sky-600 tracking-widest uppercase block mb-2">Patient Help Center</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base mt-3">
            Got questions about pain-free anesthesia, appointments, or insurance coverage? We have answers.
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search dental questions (e.g. pain, insurance, whitening)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                    isOpen ? 'bg-sky-50/50 border-sky-300 shadow-sm' : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-slate-900 text-base focus:outline-none"
                  >
                    <span className="font-serif">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-600 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-sky-100/60 mt-1">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              No matching questions found. Feel free to call us directly!
            </div>
          )}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 text-sm">Have a custom clinical question?</h4>
              <p className="text-xs text-slate-500">Our medical receptionist is ready to assist you live.</p>
            </div>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phoneDirect}`}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-sky-700 font-semibold px-4 py-2.5 rounded-xl border border-sky-300 text-xs sm:text-sm shadow-sm transition-colors"
          >
            <PhoneCall className="w-4 h-4" /> Call {CLINIC_INFO.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

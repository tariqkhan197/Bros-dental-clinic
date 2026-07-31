import React from 'react';
import { X, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose, onOpenBooking }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-slate-800 relative flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white flex items-center justify-center font-bold"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Display */}
        <div className="md:w-3/5 h-72 md:h-auto bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Detail Sidebar */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-1">
              {item.category} Category
            </span>
            <h3 className="font-serif text-2xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{item.description}</p>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full bg-sky-600 hover:bg-sky-500 text-white font-semibold py-3 rounded-xl shadow-md text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Book Consultation
            </button>
            <button
              onClick={onClose}
              className="w-full bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2.5 rounded-xl text-xs"
            >
              Close Lightbox
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

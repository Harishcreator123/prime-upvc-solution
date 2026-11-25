import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-navy-900/90 text-gold-400 hover:text-white hover:bg-navy-950 border border-slate-700 shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 backdrop-blur-md"
          aria-label="Scroll to top"
          title="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phones[0].raw}`}
        className="pointer-events-auto w-12 h-12 rounded-full bg-navy-900 text-gold-400 hover:text-navy-950 hover:bg-gold-500 border border-gold-500/40 shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 group"
        aria-label="Call Prime uPVC Solution"
        title="Call +91 96553 22424"
      >
        <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </a>

      {/* Floating WhatsApp Action */}
      <a
        href={COMPANY_INFO.whatsappUrls.primary}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:-translate-y-1 hover:shadow-emerald-900/40 group border border-emerald-400/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Chat on WhatsApp
        </span>
      </a>

    </div>
  );
}

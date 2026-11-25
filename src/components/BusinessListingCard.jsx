import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Navigation, 
  ShieldCheck, 
  Clock, 
  Building2, 
  CheckCircle2, 
  Share2 
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function BusinessListingCard() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'PRIME UPVC SOLUTION',
        text: 'PRIME UPVC SOLUTION - Premium uPVC Doors & Windows in Karanampettai, Coimbatore',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(COMPANY_INFO.googleMapsLink);
      alert('Google Maps link copied to clipboard!');
    }
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Top Business Product Photo Frame */}
      <div className="relative h-56 sm:h-64 w-full bg-navy-950 overflow-hidden group">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
          alt="PRIME UPVC SOLUTION - uPVC Doors and Windows"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

        {/* Business Badge Overlay */}
        <div className="absolute top-4 left-4 bg-navy-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-gold-500/30 flex items-center gap-1.5 shadow-md">
          <ShieldCheck className="w-4 h-4 text-gold-400" />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Official Business Listing
          </span>
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="absolute top-4 right-4 p-2 rounded-lg bg-navy-950/80 backdrop-blur-md text-slate-200 hover:text-white hover:bg-navy-900 border border-slate-700 transition-colors shadow-md"
          title="Share Business Details"
          aria-label="Share Business Details"
        >
          <Share2 className="w-4 h-4" />
        </button>

        {/* Photo Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gold-400">
            Doors & Windows Fenestration
          </div>
          <div className="text-lg font-bold text-white">
            PRIME UPVC SOLUTION
          </div>
        </div>
      </div>

      {/* Business Details Body */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        
        {/* Entity Title & Proprietor */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
            <h3 className="text-2xl font-black text-navy-900 tracking-tight">
              PRIME UPVC SOLUTION
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-gold-50 text-gold-700 border border-gold-300 text-xs font-bold">
              Karanampettai
            </span>
          </div>

          <p className="text-xs text-slate-500 font-medium">
            uPVC Doors & Windows Supplier • Coimbatore Region
          </p>

          <div className="mt-2.5 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold">
            <span>Proprietor:</span>
            <span className="text-navy-950 font-bold">{COMPANY_INFO.proprietor}</span>
          </div>
        </div>

        {/* Address Block */}
        <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-navy-900 block text-xs uppercase tracking-wider mb-0.5">
                Business Address
              </span>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                {COMPANY_INFO.address.full}
              </p>
            </div>
          </div>

          {/* Contact Numbers with Click-to-Call */}
          <div className="flex items-start gap-3 pt-2">
            <div className="w-8 h-8 rounded-lg bg-navy-50 text-gold-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-navy-900 block text-xs uppercase tracking-wider mb-1">
                Phone Contacts (Click to Call)
              </span>
              <div className="flex flex-col sm:flex-row gap-2 pt-0.5">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  title="Call primary contact"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950" />
                  <span>{COMPANY_INFO.phones[0].display}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[1].raw}`}
                  className="bg-navy-950 hover:bg-gold-500 hover:text-navy-950 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                  title="Call alternative contact"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-400 group-hover:text-navy-950" />
                  <span>{COMPANY_INFO.phones[1].display}</span>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Enquiry Options */}
          <div className="flex items-start gap-3 pt-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <span className="font-bold text-navy-900 block text-xs uppercase tracking-wider mb-1">
                WhatsApp Enquiries
              </span>
              <div className="flex flex-col sm:flex-row gap-2 pt-0.5">
                <a
                  href={COMPANY_INFO.whatsappUrls.primary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp 1</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappUrls.secondary}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp 2</span>
                </a>
              </div>
            </div>
          </div>

          {/* Timings */}
          <div className="flex items-center gap-3 pt-2 text-xs text-slate-500">
            <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="font-semibold text-slate-700">Opening Hours:</span> Monday – Saturday: 9:00 AM – 7:30 PM
            </div>
          </div>
        </div>

        {/* Quick Action Navigation Bar */}
        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
          <a
            href={COMPANY_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-navy-900 hover:bg-navy-800 text-white py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
            <span>Open in Google Maps</span>
          </a>
          <a
            href={COMPANY_INFO.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gold-500 hover:bg-gold-400 text-navy-950 py-2.5 px-3 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Get Directions</span>
          </a>
        </div>

      </div>
    </div>
  );
}

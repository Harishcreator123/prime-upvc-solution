import React from 'react';
import { X, Check, MessageCircle, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function ProductDetailModal({ product, onClose, onEnquire }) {
  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello PRIME UPVC SOLUTION,\n\nI am interested in *${product.title}* for my project in Coimbatore / Tamil Nadu.\nPlease share more details and a quote.\n\nThank you!`
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 z-10 my-8">
        {/* Header Bar */}
        <div className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-xs uppercase tracking-wider text-gold-400 font-bold">
              {product.category} • PRIME UPVC SOLUTION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
              {product.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-navy-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {/* Main Image with Badge */}
          <div className="relative rounded-xl overflow-hidden mb-6 h-64 sm:h-80 bg-slate-900">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-gold-400 border border-gold-400/30">
              Karanampettai, Coimbatore
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-2">
              System Overview
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {product.fullDesc}
            </p>
          </div>

          {/* Key Engineering Features */}
          <div className="mb-6">
            <h4 className="text-sm font-bold text-navy-900 uppercase tracking-wider mb-3">
              Key Engineering Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ideal Architectural Spaces */}
          <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 mb-6">
            <h4 className="text-xs font-bold text-navy-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-gold-600" />
              <span>Recommended Applications</span>
            </h4>
            <p className="text-xs sm:text-sm text-slate-700">
              {product.idealFor}
            </p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            PRIME UPVC SOLUTION • Karanampettai, Coimbatore
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/919655322424?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enquiry</span>
            </a>

            <button
              onClick={() => {
                onClose();
                if (onEnquire) onEnquire(product.title);
              }}
              className="flex-1 sm:flex-none bg-navy-900 hover:bg-navy-800 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Custom Quote</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

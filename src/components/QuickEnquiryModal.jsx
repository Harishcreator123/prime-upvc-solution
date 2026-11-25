import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { PRODUCTS } from '../data/products';

export default function QuickEnquiryModal({ isOpen, onClose, initialProduct = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: initialProduct || 'uPVC Sliding Windows',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `*Quick Enquiry - PRIME UPVC SOLUTION*`,
      `---------------------------------`,
      `👤 *Name:* ${formData.name}`,
      `📞 *Phone:* ${formData.phone}`,
      `🪟 *Product:* ${formData.product}`,
      formData.message ? `💬 *Requirement:* ${formData.message}` : `💬 *Requirement:* Please contact me with quotation.`
    ];
    const encoded = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/919655322424?text=${encoded}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 z-10 animate-fadeIn">
        {/* Header */}
        <div className="bg-navy-950 text-white px-6 py-4 flex items-center justify-between border-b border-navy-800">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
              PRIME UPVC SOLUTION • Karanampettai
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              Request a Project Quote
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-navy-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center text-emerald-700">
              <CheckCircle className="w-12 h-12 mx-auto text-emerald-600 mb-2" />
              <p className="font-bold text-lg">WhatsApp Opened!</p>
              <p className="text-xs text-slate-600 mt-1">
                Your message has been transferred to WhatsApp chat.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 text-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 96553 22424"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 text-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                  Product System
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 text-navy-900 bg-white"
                >
                  {PRODUCTS.map(p => (
                    <option key={p.id} value={p.title}>{p.title}</option>
                  ))}
                  <option value="Complete Home / Villa Package">Complete Home / Villa Package</option>
                  <option value="Other Architectural Enquiries">Other Architectural Enquiries</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1">
                  Message / Dimensions (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your project location or size"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 text-navy-900"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Submit via WhatsApp</span>
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Direct consultation with PRIME UPVC SOLUTION • Karanampettai
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

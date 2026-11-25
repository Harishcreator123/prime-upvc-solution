import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Send, 
  Clock, 
  ExternalLink, 
  CheckCircle, 
  ShieldCheck, 
  Sparkles,
  Building
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';
import { PRODUCTS } from '../data/products';
import BusinessMap from './BusinessMap';
import BusinessListingCard from './BusinessListingCard';

export default function Contact({ preselectedProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    product: 'uPVC Sliding Windows',
    message: '',
    recipientNumber: '919655322424' // Default to first number
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct) {
      setFormData(prev => ({ ...prev, product: preselectedProduct }));
    }
  }, [preselectedProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct formatted WhatsApp message
    const lines = [
      `*New Website Project Enquiry - PRIME UPVC SOLUTION*`,
      `---------------------------------------`,
      `👤 *Customer Name:* ${formData.name}`,
      `📞 *Phone Number:* ${formData.phone}`,
      `🪟 *Interested Product:* ${formData.product}`,
      `📍 *Target Location:* Coimbatore / Tamil Nadu region`,
      formData.message ? `💬 *Project Details:* ${formData.message}` : `💬 *Project Details:* Please share catalog and quotation.`
    ];

    const encodedMessage = encodeURIComponent(lines.join('\n'));
    const targetWhatsAppUrl = `https://wa.me/${formData.recipientNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(targetWhatsAppUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Building className="w-3.5 h-3.5 text-gold-600" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Contact PRIME UPVC SOLUTION
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Reach out directly for quotations, site measurements, or architectural inquiries. Conveniently located in Karanampettai, Coimbatore.
          </p>
        </div>

        {/* Main Grid: Details & Map vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Google-Style Business Information Card & Clean Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Google-Style Business Information Card */}
            <BusinessListingCard />

            {/* Verified Clean Business Map */}
            <BusinessMap />

          </div>

          {/* Right Column: Working WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-600">
                  Instant Response
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-navy-900 mt-1">
                  Send a Project Enquiry
                </h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  Fill in your details below to instantly generate and submit your enquiry directly via WhatsApp to our team.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">WhatsApp Chat Launched!</p>
                    <p className="text-emerald-700 mt-0.5">
                      Your enquiry details have been pre-filled into WhatsApp. Simply click <strong>Send</strong> in WhatsApp to dispatch your message.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 text-sm text-navy-900 placeholder-slate-400"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 text-sm text-navy-900 placeholder-slate-400"
                  />
                </div>

                {/* Interested Product */}
                <div>
                  <label htmlFor="product" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Interested Product <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 text-sm text-navy-900 bg-white"
                  >
                    {PRODUCTS.map(p => (
                      <option key={p.id} value={p.title}>
                        {p.title}
                      </option>
                    ))}
                    <option value="Complete Home uPVC Package">Complete Villa / Home Package</option>
                    <option value="Custom Architectural Consultation">Custom Architectural Consultation</option>
                  </select>
                </div>

                {/* Select WhatsApp Contact Recipient */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Send Enquiry To
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-semibold ${
                      formData.recipientNumber === '919655322424'
                        ? 'border-gold-500 bg-gold-50/20 text-navy-900'
                        : 'border-slate-200 text-slate-600'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="recipientNumber"
                          value="919655322424"
                          checked={formData.recipientNumber === '919655322424'}
                          onChange={handleChange}
                          className="text-gold-600 focus:ring-gold-500"
                        />
                        <span>{COMPANY_INFO.phones[0].display}</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold">Primary</span>
                    </label>

                    <label className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between text-xs font-semibold ${
                      formData.recipientNumber === '918144489998'
                        ? 'border-gold-500 bg-gold-50/20 text-navy-900'
                        : 'border-slate-200 text-slate-600'
                    }`}>
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="recipientNumber"
                          value="918144489998"
                          checked={formData.recipientNumber === '918144489998'}
                          onChange={handleChange}
                          className="text-gold-600 focus:ring-gold-500"
                        />
                        <span>{COMPANY_INFO.phones[1].display}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Secondary</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy-900 mb-1.5">
                    Project Message or Dimensions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="e.g. Need sliding windows for 3 bedrooms in Sulur, Coimbatore. Approx dimensions 5x4 ft."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-gold-500/40 focus:border-gold-500 text-sm text-navy-900 placeholder-slate-400"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold py-4 rounded-xl text-sm sm:text-base shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Submitting directly opens WhatsApp with your pre-filled inquiry. No automated bots.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

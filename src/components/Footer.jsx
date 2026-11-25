import React from 'react';
import { MapPin, Phone, MessageCircle, ArrowUp, ChevronRight, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';
import { PRODUCTS } from '../data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products Range', href: '#products' },
    { name: 'Colours & Finishes', href: '#finishes' },
    { name: 'Applications', href: '#applications' },
    { name: 'Features & Benefits', href: '#features' },
    { name: 'Design Gallery', href: '#gallery' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact & Location', href: '#contact' },
  ];

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-navy-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-navy-800">
          
          {/* Column 1: Brand Info & Description (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              <strong>PRIME UPVC SOLUTION</strong> delivers precision-crafted architectural uPVC doors and windows for residences, villas, apartments, and commercial projects across Karanampettai, Palladam, Sulur, and Coimbatore.
            </p>

            <div className="pt-2 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">Proprietor:</span> {COMPANY_INFO.proprietor}
            </div>

            <div className="pt-3 flex flex-wrap gap-2 text-xs">
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-gold-400 font-semibold">
                Karanampettai
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-slate-300 font-medium">
                Sulur
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-slate-300 font-medium">
                Palladam
              </span>
              <span className="px-2.5 py-1 rounded bg-navy-900 border border-navy-800 text-slate-300 font-medium">
                Coimbatore – 641401
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (Col 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              uPVC Products
            </h4>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.slice(0, 6).map((prod) => (
                <li key={prod.id}>
                  <a
                    href="#products"
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-gold-500" />
                    <span className="truncate">{prod.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Address (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gold-400 mb-4">
              Registered Office
            </h4>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
              <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
              <span>
                {COMPANY_INFO.address.doorNo}, {COMPANY_INFO.address.street},<br />
                {COMPANY_INFO.address.locality},<br />
                {COMPANY_INFO.address.district}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}
              </span>
            </div>

            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[0].raw}`} className="hover:text-gold-400 transition-colors">
                  {COMPANY_INFO.phones[0].display}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phones[1].raw}`} className="hover:text-gold-400 transition-colors">
                  {COMPANY_INFO.phones[1].display}
                </a>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                <a href={COMPANY_INFO.whatsappUrls.primary} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                  WhatsApp: +91 9655322424
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong>PRIME UPVC SOLUTION</strong>. All rights reserved. Proprietor: MAHENDRAN V.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-gold-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

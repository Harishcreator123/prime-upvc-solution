import React, { useState, useEffect } from 'react';
import { Phone, MapPin, MessageCircle, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Header({ onOpenEnquiry }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Finishes', href: '#finishes' },
    { name: 'Applications', href: '#applications' },
    { name: 'Features', href: '#features' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      {/* Top Bar - Important Contact Details & Location */}
      <div className={`bg-navy-950 text-slate-300 text-xs border-b border-navy-800/80 transition-all duration-300 ${isScrolled ? 'hidden md:block py-1.5' : 'py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          {/* Location Badge */}
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
            <span className="font-medium text-slate-200">
              Karanampettai, Sulur, Coimbatore – 641401
            </span>
          </div>

          {/* Quick Phone & WhatsApp links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3">
              <span className="text-slate-400 hidden lg:inline">Call:</span>
              <a 
                href={`tel:${COMPANY_INFO.phones[0].raw}`} 
                className="hover:text-gold-400 flex items-center gap-1 font-medium transition-colors"
                title="Call Prime uPVC Solution"
              >
                <Phone className="w-3 h-3 text-gold-500" />
                <span>{COMPANY_INFO.phones[0].display}</span>
              </a>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <a 
                href={`tel:${COMPANY_INFO.phones[1].raw}`} 
                className="hover:text-gold-400 hidden sm:flex items-center gap-1 font-medium transition-colors"
                title="Call Prime uPVC Solution"
              >
                <span>{COMPANY_INFO.phones[1].display}</span>
              </a>
            </div>

            <a 
              href={COMPANY_INFO.whatsappUrls.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600/90 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3 h-3 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-800' 
          : 'bg-navy-900/90 backdrop-blur-sm py-4 border-b border-navy-800/40'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center group">
            <Logo variant="light" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-gold-400 hover:bg-white/5 rounded-md transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Contact Us CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry() : window.location.assign('#contact')}
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:shadow-gold-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry() : window.location.assign('#contact')}
              className="md:hidden bg-gold-500 text-navy-950 px-3 py-1.5 rounded-md text-xs font-bold"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[100px] z-40 bg-navy-950/95 backdrop-blur-xl border-t border-navy-800 flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-2">
            <div className="pb-3 border-b border-navy-800 mb-3">
              <span className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                PRIME UPVC SOLUTION • Karanampettai
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2.5 text-base font-semibold text-slate-200 hover:text-gold-400 hover:bg-navy-900 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-navy-800 space-y-3">
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${COMPANY_INFO.phones[0].raw}`}
                className="bg-navy-900 border border-navy-700 text-slate-200 py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 font-medium"
              >
                <Phone className="w-4 h-4 text-gold-500" />
                <span>Call 1</span>
              </a>
              <a
                href={COMPANY_INFO.whatsappUrls.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 text-white py-2.5 px-3 rounded-lg flex items-center justify-center gap-2 font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
                else window.location.assign('#contact');
              }}
              className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-navy-950 py-3 rounded-lg font-bold text-center block shadow-lg"
            >
              Get Custom Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

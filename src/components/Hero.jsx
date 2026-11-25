import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, VolumeX, Phone, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function Hero({ onOpenEnquiry }) {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-navy-950">
      {/* Background Architectural Image with Refined Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern villa with premium uPVC sliding glass doors and windows"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Layered German-style architectural dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Location & Brand Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>PRIME UPVC SOLUTION • Karanampettai, Coimbatore</span>
          </div>

          {/* Main Heading as strictly instructed */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            Upgrade Your Spaces with <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">Premium uPVC</span> Doors & Windows
          </h1>

          {/* Supporting Text as strictly instructed */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl font-normal">
            Discover modern doors and windows designed to complement contemporary architecture. Precision engineering, thermal comfort, sound insulation, and weather endurance built for discerning residences and commercial spaces.
          </p>

          {/* Action Buttons as requested */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="#products"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 px-8 py-4 rounded-xl text-base font-bold shadow-xl shadow-gold-950/30 flex items-center justify-center gap-2.5 transition-all transform hover:-translate-y-0.5"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => onOpenEnquiry ? onOpenEnquiry() : window.location.assign('#contact')}
              className="bg-navy-900/80 hover:bg-navy-800 text-white border border-slate-600/70 hover:border-gold-400/60 px-8 py-4 rounded-xl text-base font-semibold backdrop-blur-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Contact Us</span>
            </button>

            <a
              href={COMPANY_INFO.whatsappUrls.primary}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden bg-emerald-600 text-white px-6 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Feature Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-700/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/90 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold">German Aesthetics</h2>
                <p className="text-slate-400 text-xs">Precision uPVC profiles</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/90 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                <VolumeX className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold">Sound Dampening</h2>
                <p className="text-slate-400 text-xs">Acoustic insulation seals</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800/90 border border-gold-500/20 flex items-center justify-center flex-shrink-0 text-gold-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-white text-sm font-semibold">Tropical Resilience</h2>
                <p className="text-slate-400 text-xs">Zero rot, rust, or fading</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

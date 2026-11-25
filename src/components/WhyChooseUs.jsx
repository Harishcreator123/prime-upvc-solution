import React from 'react';
import { Target, Compass, Users, Layers, Headset, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function WhyChooseUs({ onOpenEnquiry }) {
  const pillars = [
    {
      icon: Target,
      title: "Product-Focused Approach",
      desc: "We prioritize profile integrity, hardware reliability, and structural resilience so each door and window performs consistently over the years."
    },
    {
      icon: Compass,
      title: "Modern German-Inspired Aesthetics",
      desc: "Profiles with bevelled contours, clean lines, and architectural proportions that elevate the exterior facade and interior living ambience."
    },
    {
      icon: Users,
      title: "Customer-Oriented Service",
      desc: "Direct, personal consultation to review your floor plans, opening requirements, and glass choices, ensuring clear communication from start to finish."
    },
    {
      icon: Layers,
      title: "Solutions for Diverse Spaces",
      desc: "Tailored configurations for independent houses, luxury villas, apartments, office cabins, and contemporary commercial buildings."
    },
    {
      icon: Headset,
      title: "Dedicated Contact & Enquiry Support",
      desc: "Prompt WhatsApp and phone consultation directly with our Karanampettai team to answer your questions and arrange site discussions."
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-600" />
            <span>Why PRIME UPVC SOLUTION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Built on Quality & Clear Guidance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Our business in Karanampettai, Coimbatore is grounded in delivering genuine product performance, architectural elegance, and reliable customer service.
          </p>
        </div>

        {/* 5 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-950 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-950 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-xl font-bold text-navy-900 group-hover:text-navy-950 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-gold-600">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span>Quality Assurance</span>
                </div>
              </div>
            );
          })}

          {/* Interactive Consultation Card */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-7 text-white shadow-xl flex flex-col justify-between border border-navy-800">
            <div>
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mb-5 border border-gold-400/30">
                <Sparkles className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Plan Your Fenestration Project
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Consult with our team at Karanampettai, Coimbatore to choose the ideal uPVC doors and windows for your floor plan.
              </p>
            </div>

            <div className="space-y-2">
              <button
                onClick={() => onOpenEnquiry ? onOpenEnquiry() : window.location.assign('#contact')}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 py-3 rounded-xl font-bold text-sm text-center shadow-md transition-all"
              >
                Send Project Enquiry
              </button>
              <a
                href={COMPANY_INFO.whatsappUrls.primary}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-navy-800 hover:bg-navy-700 text-slate-200 py-2.5 rounded-xl font-semibold text-xs text-center block transition-colors border border-navy-700"
              >
                Direct WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

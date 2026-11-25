import React from 'react';
import { MapPin, Phone, CheckCircle2, ShieldCheck, Layers, Award, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function About() {
  const highlights = [
    {
      title: "Engineered uPVC Fenestration",
      desc: "Specialized uPVC window and door systems designed with multi-chambered internal profiles to enhance structural strength and insulation."
    },
    {
      title: "Based in Karanampettai, Coimbatore",
      desc: "Conveniently located at Kodangipalayam, Karanampettai to serve homeowners, builders, and architects across Palladam, Sulur, and Coimbatore."
    },
    {
      title: "Comprehensive Style Range",
      desc: "From smooth multi-track sliding systems to airtight casement windows and European French doors in classic white, anthracite grey, and natural woodgrains."
    },
    {
      title: "Customer-Centric Consultation",
      desc: "Direct guidance on product selection, dimension considerations, acoustic needs, and weatherproofing tailored to your architectural plans."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Architectural Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100 relative group">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern interior showcasing uPVC architectural doors and windows"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                
                {/* Floating Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-900/90 backdrop-blur-md border border-navy-700 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 flex-shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold">
                        PRIME UPVC SOLUTION
                      </p>
                      <p className="text-sm font-medium text-slate-200">
                        Modern Fenestration Systems
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Frame */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-gold-500/40 rounded-tl-2xl pointer-events-none -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-navy-800/20 rounded-br-2xl pointer-events-none -z-10" />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>About Our Enterprise</span>
            </div>

            {/* Exact Required Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight leading-tight mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 via-navy-800 to-gold-600">PRIME UPVC SOLUTION</span>
            </h2>

            {/* Introduction Paragraphs */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
              <p>
                <strong>PRIME UPVC SOLUTION</strong> is a dedicated uPVC doors and windows business based in <strong>Karanampettai</strong>, Coimbatore district, Tamil Nadu. We specialize in bringing contemporary, high-performance architectural fenestration solutions to modern residential homes, luxury villas, apartments, and commercial developments.
              </p>
              <p>
                Under the proprietorship of <strong>MAHENDRAN V.</strong>, our enterprise is committed to offering precision-crafted uPVC systems engineered to satisfy the demands of modern architecture and tropical climate conditions. Our door and window systems combine refined German-inspired aesthetics, superior thermal insulation, sound dampening, and long-lasting durability.
              </p>
            </div>

            {/* Key Value Points Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-gold-500/50 hover:bg-gold-50/20 transition-all">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-navy-900 text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Contact Summary Box */}
            <div className="p-5 rounded-xl bg-navy-950 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider text-gold-400 font-semibold">Registered Business Address</p>
                  <p className="text-xs text-slate-300 leading-snug max-w-md">
                    {COMPANY_INFO.address.full}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-stretch sm:self-auto">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].raw}`}
                  className="w-full sm:w-auto bg-gold-500 hover:bg-gold-400 text-navy-950 px-4 py-2 rounded-lg text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

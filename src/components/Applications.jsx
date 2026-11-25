import React from 'react';
import { Building2, Home, Landmark, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { APPLICATIONS } from '../data/applications';

export default function Applications() {
  return (
    <section id="applications" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-50 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-gold-600" />
            <span>Versatile Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Tailored for Every Space
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether for serene suburban villas in Sulur or high-rise residential apartments in Coimbatore, our uPVC fenestration systems are engineered to fulfill architectural demands.
          </p>
        </div>

        {/* Applications Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {APPLICATIONS.map((app) => (
            <div
              key={app.id}
              className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Frame with Overlay */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                
                {/* Title on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gold-400">
                    {app.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">
                    {app.title}
                  </h3>
                </div>
              </div>

              {/* Description & Key Points */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {app.description}
                </p>

                <div className="space-y-2 pt-3 border-t border-slate-200/60">
                  {app.features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

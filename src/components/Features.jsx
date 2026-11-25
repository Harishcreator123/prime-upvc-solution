import React from 'react';
import { 
  ThermometerSnowflake, 
  VolumeX, 
  CloudRain, 
  Sparkles, 
  LayoutGrid, 
  ShieldCheck, 
  Zap, 
  Palette,
  CheckCircle
} from 'lucide-react';
import { FEATURES } from '../data/features';

export default function Features() {
  const iconMap = {
    ThermometerSnowflake,
    VolumeX,
    CloudRain,
    Sparkles,
    LayoutGrid,
    ShieldCheck,
    Zap,
    Palette
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engineering Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Features & Proven Benefits
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            uPVC delivers long-lasting structural, thermal, and acoustic performance compared to traditional timber or untreated aluminium frames.
          </p>
        </div>

        {/* Features 8-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((item) => {
            const IconComponent = iconMap[item.iconName] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="bg-navy-950/70 rounded-2xl p-6 border border-slate-800 hover:border-gold-500/50 hover:bg-navy-950 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  {/* Custom Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-white group-hover:text-gold-300 transition-colors mb-1">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-gold-500/90 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-semibold text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                  <span>{item.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

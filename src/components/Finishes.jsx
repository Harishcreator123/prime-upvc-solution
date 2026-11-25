import React, { useState } from 'react';
import { Palette, Check, Sparkles, Info, ArrowRight } from 'lucide-react';
import { FINISHES } from '../data/finishes';

export default function Finishes({ onOpenEnquiry }) {
  const [selectedFinish, setSelectedFinish] = useState(FINISHES[0]);

  return (
    <section id="finishes" className="py-20 md:py-28 bg-navy-950 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Palette className="w-3.5 h-3.5" />
            <span>Aesthetic Surfaces</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Colours & Surface Finishes
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From modern monochrome architecture to the warm, natural allure of timber textures. Explore illustrative profile finishes engineered to resist tropical sunlight, humidity, and fading.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400 bg-navy-900/80 px-4 py-1.5 rounded-full border border-navy-800">
            <Info className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
            <span>Illustrative finish options. Project availability confirmed upon architectural consultation.</span>
          </div>
        </div>

        {/* Interactive Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Swatches Selection Grid */}
          <div className="lg:col-span-5 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gold-400 mb-4">
              Select Finish Sample
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {FINISHES.map((finish) => {
                const isSelected = selectedFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    onClick={() => setSelectedFinish(finish)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-navy-900 border-gold-500 shadow-lg shadow-gold-500/10 ring-1 ring-gold-500'
                        : 'bg-navy-900/50 border-navy-800 hover:border-slate-700 hover:bg-navy-900'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Swatch Circle / Textured Square */}
                      <div
                        className="w-10 h-10 rounded-lg flex-shrink-0 shadow-inner border border-white/20 transition-transform group-hover:scale-105"
                        style={{
                          backgroundColor: finish.hex,
                          backgroundImage: finish.texturePattern || 'none',
                        }}
                      />
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                          {finish.name}
                        </div>
                        <div className="text-xs text-slate-400 font-normal">
                          {finish.type}
                        </div>
                      </div>
                    </div>

                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                      {isSelected ? (
                        <div className="w-5 h-5 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-slate-500" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Preview Display */}
          <div className="lg:col-span-7">
            <div className="bg-navy-900 rounded-2xl overflow-hidden border border-navy-800 shadow-2xl relative">
              {/* Product render/photo with selected finish */}
              <div className="relative h-72 sm:h-96 w-full overflow-hidden">
                <img
                  src={selectedFinish.image}
                  alt={selectedFinish.name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />

                {/* Floating Swatch Inset */}
                <div className="absolute top-4 right-4 bg-navy-950/90 backdrop-blur-md p-3 rounded-xl border border-navy-700 flex items-center gap-3 shadow-lg">
                  <div
                    className="w-8 h-8 rounded-md border border-white/30 shadow-inner"
                    style={{
                      backgroundColor: selectedFinish.hex,
                      backgroundImage: selectedFinish.texturePattern || 'none',
                    }}
                  />
                  <div>
                    <div className="text-xs font-bold text-white">{selectedFinish.name}</div>
                    <div className="text-[10px] text-gold-400">{selectedFinish.type}</div>
                  </div>
                </div>
              </div>

              {/* Finish Details Description */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                      Selected Profile Finish
                    </span>
                    <h4 className="text-2xl font-bold text-white mt-1">
                      {selectedFinish.name}
                    </h4>
                  </div>
                  
                  <button
                    onClick={() => onOpenEnquiry ? onOpenEnquiry(`Finish Option: ${selectedFinish.name}`) : window.location.assign('#contact')}
                    className="self-start sm:self-auto bg-gold-500 hover:bg-gold-400 text-navy-950 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Enquire This Finish</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {selectedFinish.description}
                </p>

                <div className="pt-4 border-t border-navy-800 flex items-center gap-2 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Recommended for:</span>
                  <span>{selectedFinish.popularFor}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import React from 'react';

export default function Logo({ variant = 'dark', className = '', showTagline = true, iconOnly = false }) {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Architectural Window/Door Geometric Emblem */}
      <div className="relative w-10 h-10 md:w-11 md:h-11 flex-shrink-0">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Outer Frame - German uPVC profile representation */}
          <rect x="6" y="6" width="88" height="88" rx="8" stroke={isLight ? "#FFFFFF" : "#0B192C"} strokeWidth="6" fill={isLight ? "rgba(255,255,255,0.06)" : "#F8F9FA"} />
          
          {/* Left Large Casement Window Pane */}
          <rect x="15" y="15" width="32" height="70" rx="3" fill={isLight ? "rgba(255,255,255,0.12)" : "#E2E8F0"} stroke={isLight ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="2" />
          
          {/* Right Top Fixed Transom Window Pane */}
          <rect x="53" y="15" width="32" height="30" rx="3" fill="#C5A059" fillOpacity="0.25" stroke="#C5A059" strokeWidth="2" />
          
          {/* Right Bottom Vent Window Pane */}
          <rect x="53" y="51" width="32" height="34" rx="3" fill={isLight ? "rgba(255,255,255,0.12)" : "#E2E8F0"} stroke={isLight ? "rgba(255,255,255,0.4)" : "#CBD5E1"} strokeWidth="2" />
          
          {/* Gold Precision Structural Divider */}
          <line x1="50" y1="12" x2="50" y2="88" stroke="#C5A059" strokeWidth="4" strokeLinecap="round" />
          <line x1="53" y1="48" x2="85" y2="48" stroke="#C5A059" strokeWidth="3" strokeLinecap="round" />
          
          {/* Architectural Glass Reflection Accent */}
          <path d="M20 25L38 75" stroke={isLight ? "rgba(255,255,255,0.4)" : "rgba(11,25,44,0.2)"} strokeWidth="2" strokeLinecap="round" />
          <circle cx="78" cy="68" r="2.5" fill="#C5A059" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`text-xl md:text-2xl font-black tracking-tight uppercase ${isLight ? 'text-white' : 'text-navy-900'}`}>
              PRIME
            </span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-gold-600 uppercase bg-gold-500/10 px-1.5 py-0.5 rounded border border-gold-500/30">
              uPVC
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className={`text-[10px] md:text-xs font-semibold tracking-[0.22em] uppercase ${isLight ? 'text-slate-300' : 'text-slate-600'}`}>
              SOLUTION
            </span>
            {showTagline && (
              <>
                <span className="text-gold-500 text-[10px]">•</span>
                <span className={`text-[9px] font-medium tracking-wide ${isLight ? 'text-slate-400' : 'text-slate-500'}`}>
                  Karanampettai
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

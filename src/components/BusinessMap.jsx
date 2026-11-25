import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Navigation, ExternalLink, Layers, ShieldCheck, Info } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyInfo';

export default function BusinessMap() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [mapMode, setMapMode] = useState('clean'); // 'clean' (Leaflet CartoDB without POIs) or 'google' (Google Maps Embed)

  const position = [COMPANY_INFO.coordinates.lat, COMPANY_INFO.coordinates.lng];

  useEffect(() => {
    if (mapMode !== 'clean' || !mapContainerRef.current) return;

    // Clean up existing map instance if any
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove();
      mapInstanceRef.current = null;
    }

    // Initialize Leaflet map with clean zoom and center
    const map = L.map(mapContainerRef.current, {
      center: position,
      zoom: 15,
      zoomControl: true,
      scrollWheelZoom: false,
    });
    mapInstanceRef.current = map;

    // CartoDB Voyager tiles: High-end, clean architectural style without commercial POIs (no bars, no dairy, no retail noise)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    // Custom branded HTML marker for PRIME UPVC SOLUTION
    const customIcon = L.divIcon({
      className: 'custom-business-marker',
      html: `
        <div style="
          position: relative;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <div style="
            position: absolute;
            width: 44px;
            height: 44px;
            border-radius: 50%;
            background: rgba(197, 160, 89, 0.25);
            animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
          "></div>
          <div style="
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background: #0B192C;
            border: 3px solid #C5A059;
            box-shadow: 0 4px 12px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #C5A059;
          ">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -22],
    });

    const marker = L.marker(position, { icon: customIcon }).addTo(map);

    // Marker Popup
    const popupContent = `
      <div style="font-family: inherit; padding: 4px 2px; min-width: 220px;">
        <div style="font-size: 10px; font-weight: 700; color: #C5A059; letter-spacing: 0.08em; text-transform: uppercase;">
          PRIME UPVC SOLUTION
        </div>
        <div style="font-size: 13px; font-weight: 700; color: #0B192C; margin-top: 2px;">
          Doors & Windows
        </div>
        <div style="font-size: 11px; color: #475569; margin-top: 4px; line-height: 1.4;">
          Door No. 3/516, Kodangipalayam,<br />
          Karanampettai, Palladam, Sulur,<br />
          Coimbatore – 641401
        </div>
        <a href="${COMPANY_INFO.googleMapsLink}" target="_blank" rel="noopener noreferrer" style="
          display: inline-block;
          margin-top: 8px;
          background: #0B192C;
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 600;
          padding: 5px 10px;
          border-radius: 6px;
          text-decoration: none;
        ">
          Open in Google Maps &rarr;
        </a>
      </div>
    `;

    marker.bindPopup(popupContent).openPopup();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mapMode]);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
      {/* Map Header Bar */}
      <div className="p-4 bg-navy-950 text-white flex flex-wrap items-center justify-between gap-3 border-b border-navy-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold block text-slate-100">
              PRIME UPVC SOLUTION • Karanampettai
            </span>
            <span className="text-[10px] text-slate-400 block">
              Door No. 3/516, Kodangipalayam, Sulur, Coimbatore – 641401
            </span>
          </div>
        </div>

        {/* View Switcher / Direct Google Maps Link */}
        <div className="flex items-center gap-2">
          <div className="flex bg-navy-900 p-0.5 rounded-lg border border-navy-800 text-[11px]">
            <button
              type="button"
              onClick={() => setMapMode('clean')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                mapMode === 'clean' ? 'bg-gold-500 text-navy-950' : 'text-slate-300 hover:text-white'
              }`}
              title="Clean map without commercial POI clutter"
            >
              Architectural View
            </button>
            <button
              type="button"
              onClick={() => setMapMode('google')}
              className={`px-2.5 py-1 rounded-md font-semibold transition-colors ${
                mapMode === 'google' ? 'bg-gold-500 text-navy-950' : 'text-slate-300 hover:text-white'
              }`}
              title="Google Maps exact address query view"
            >
              Google Maps
            </button>
          </div>

          <a
            href={COMPANY_INFO.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-400 px-2.5 py-1.5 rounded-lg flex items-center gap-1 font-semibold transition-all"
            title="Open exact location in Google Maps app or site"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Map Content Viewport */}
      <div className="relative h-72 sm:h-80 w-full bg-slate-100">
        {mapMode === 'clean' ? (
          <div ref={mapContainerRef} className="h-full w-full z-0" />
        ) : (
          <iframe
            title="PRIME UPVC SOLUTION Google Maps Location"
            src={COMPANY_INFO.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}

        {/* Floating Quick Action Overlay */}
        <div className="absolute bottom-3 right-3 z-[400] flex items-center gap-2">
          <a
            href={COMPANY_INFO.directionsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-950/90 hover:bg-navy-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-navy-700/80 shadow-md backdrop-blur-md flex items-center gap-1.5 transition-all"
          >
            <Navigation className="w-3 h-3 text-gold-400" />
            <span>Get Directions</span>
          </a>
        </div>
      </div>

      {/* Verification & Address Note Footer */}
      <div className="p-3 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-600 flex items-start gap-2">
        <Info className="w-3.5 h-3.5 text-gold-600 flex-shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <span className="font-semibold text-slate-800">Business Location:</span> Door No. 3/516, Kodangipalayam, Karanampettai, Palladam/Sulur, Coimbatore – 641401 (Near Trichy Road NH 81).
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Eye, Sparkles, Check, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/companyInfo';
import ProductDetailModal from './ProductDetailModal';

export default function Products({ onOpenEnquiry }) {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeTab === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => activeTab === 'windows' ? p.category.includes('Window') : p.category.includes('Door'));

  const handleEnquire = (productTitle) => {
    if (onOpenEnquiry) {
      onOpenEnquiry(productTitle);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-100 border border-navy-200 text-navy-800 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Architectural Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-navy-900 tracking-tight mb-4">
            Our Premium uPVC Range
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Engineered with multi-chamber profiles, galvanized steel reinforcements, and weather-sealing gaskets. Explore versatile window and door systems designed for contemporary architectural elegance.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200'
              }`}
            >
              All Systems ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setActiveTab('windows')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'windows'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200'
              }`}
            >
              uPVC Windows (4)
            </button>
            <button
              onClick={() => setActiveTab('doors')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'doors'
                  ? 'bg-navy-950 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:text-navy-900 border border-slate-200'
              }`}
            >
              uPVC Doors (4)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-gold-500/40 transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Frame */}
              <div className="relative h-56 sm:h-52 overflow-hidden bg-slate-900">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-bold text-gold-400 border border-gold-400/20 uppercase tracking-wider">
                  {product.category}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                    {product.shortDesc}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 border-t border-slate-100 pt-3">
                    {product.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <Check className="w-3.5 h-3.5 text-gold-600 flex-shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 bg-slate-100 hover:bg-slate-200 text-navy-900 text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => handleEnquire(product.title)}
                    className="flex-1 bg-navy-900 hover:bg-gold-500 hover:text-navy-950 text-white text-xs font-bold py-2.5 px-3 rounded-lg flex items-center justify-center gap-1 transition-all"
                  >
                    <span>Enquire</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Notice */}
        <div className="mt-12 text-center p-4 rounded-xl bg-white border border-slate-200 max-w-2xl mx-auto text-xs text-slate-500">
          <p>
            Custom dimensions, double glazing, tinted glass, and insect screens available upon consultation for projects in Karanampettai, Palladam, Sulur, and Coimbatore.
          </p>
        </div>

      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onEnquire={handleEnquire}
        />
      )}
    </section>
  );
}

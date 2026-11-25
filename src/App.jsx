import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Finishes from './components/Finishes';
import Applications from './components/Applications';
import Features from './components/Features';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Faqs from './components/Faqs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import QuickEnquiryModal from './components/QuickEnquiryModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState('');

  const handleOpenEnquiry = (productName = '') => {
    setSelectedProductForModal(productName);
    setIsModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsModalOpen(false);
    setSelectedProductForModal('');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-gold-500 selection:text-navy-950 flex flex-col font-sans">
      {/* Sticky Header Navigation */}
      <Header onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* About Section */}
        <About />

        {/* Products Section */}
        <Products onOpenEnquiry={(productTitle) => handleOpenEnquiry(productTitle)} />

        {/* Colours & Finishes Section */}
        <Finishes onOpenEnquiry={(finishTitle) => handleOpenEnquiry(finishTitle)} />

        {/* Architectural Applications Section */}
        <Applications />

        {/* Features & Benefits Section */}
        <Features />

        {/* Gallery Section */}
        <Gallery />

        {/* Why Choose Us Section */}
        <WhyChooseUs onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* FAQs Accordion Section */}
        <Faqs />

        {/* Contact Section & Working Enquiry Form */}
        <Contact preselectedProduct={selectedProductForModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Speed Dials (Call, WhatsApp, Back to top) */}
      <FloatingActions />

      {/* Quick Enquiry Modal */}
      <QuickEnquiryModal
        isOpen={isModalOpen}
        onClose={handleCloseEnquiry}
        initialProduct={selectedProductForModal}
      />
    </div>
  );
}

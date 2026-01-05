import React from 'react';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Comparison from './components/Comparison';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { WHATSAPP_LINK } from './constants';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-terracotta selection:text-white">
      
      {/* Simple Header - Updated text color for Teal background */}
      <nav className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-8 flex justify-between items-center max-w-7xl mx-auto right-0">
        <div className="text-2xl font-bold tracking-tighter text-brand-sandLight">
          BELG<span className="text-brand-terracotta">.</span>
        </div>
        <a 
          href={WHATSAPP_LINK} 
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-block px-5 py-2 rounded-full border border-brand-sandLight text-brand-sandLight hover:bg-brand-sandLight hover:text-brand-teal transition-colors text-sm font-medium"
        >
          Falar no WhatsApp
        </a>
      </nav>

      <main>
        <Hero />
        <PainPoints />
        <Comparison />
        <Process />
        <About />
        <Testimonials />
        <FAQ />
      </main>

      <Footer />

      {/* Mobile Sticky Action Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 flex items-center justify-center md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
};

export default App;
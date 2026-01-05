import React from 'react';
import { STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="como-funciona">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-teal uppercase mb-3">
            Passo a Passo
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Como funciona a Belg Render
          </h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-sandLight -z-0"></div>

          {STEPS.map((step, index) => (
            <div key={index} className="relative z-10 bg-white p-4 md:pt-0">
              <div className="w-24 h-24 bg-brand-light border-4 border-brand-sand rounded-full flex items-center justify-center text-3xl font-bold text-brand-terracotta mx-auto mb-6 shadow-sm">
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-center text-brand-dark mb-3">
                {step.title}
              </h4>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <p className="text-brand-teal font-medium flex items-center justify-center gap-2">
                👉 Simples, rápido e 100% Online via WhatsApp
            </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
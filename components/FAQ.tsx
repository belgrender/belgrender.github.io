import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-brand-dark text-center mb-12">
          Perguntas Frequentes
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-brand-dark pr-4">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-terracotta shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-teal shrink-0" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
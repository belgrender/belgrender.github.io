import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-teal border-t border-brand-sandLight/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-sandLight">
            Provas de quem já transformou seu espaço
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-brand-sandLight p-8 rounded-xl shadow-lg border border-brand-sandLight/30 flex flex-col md:flex-row gap-6 items-start transform hover:-translate-y-1 transition-transform duration-300">
               <div className="shrink-0">
                 <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full object-cover border-2 border-brand-terracotta" />
               </div>
               <div>
                 <div className="flex gap-1 mb-3 text-brand-terracotta">
                   {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                 </div>
                 <p className="text-brand-dark italic mb-4 text-lg leading-relaxed">"{t.text}"</p>
                 <p className="font-bold text-brand-teal">— {t.author}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
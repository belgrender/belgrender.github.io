import React from 'react';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-brand-teal overflow-hidden pt-32 pb-12">
      <div className="container mx-auto px-4 md:px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Content */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block bg-brand-sandLight/10 text-brand-sandLight px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide uppercase border border-brand-sandLight/20">
            Design de Interiores Inteligente
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-sandLight leading-tight">
            Veja seu apartamento <span className="text-black font-extrabold font-serif-custom italic">antes de comprar</span> um único móvel.
          </h1>
          
          <p className="text-lg text-gray-100 max-w-lg leading-relaxed">
            Renderização 3D em 4K que mostra exatamente como seu lar vai ficar. 
            Sem surpresas, sem arrependimentos e sem o custo de um projeto executivo completo.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-3 text-brand-sandLight">
              <CheckCircle2 className="w-5 h-5 text-brand-terracotta" />
              <span className="font-medium">Para quem quer acertar nas escolhas</span>
            </div>
            <div className="flex items-center gap-3 text-brand-sandLight">
              <CheckCircle2 className="w-5 h-5 text-brand-terracotta" />
              <span className="font-medium">Sem investir em arquitetura complexa</span>
            </div>
          </div>

          <div className="pt-4">
            <Button className="w-full md:w-auto text-lg shadow-xl shadow-black/10">
              Quero minha Render 3D Agora
            </Button>
            <p className="mt-4 text-xs text-brand-sandLight/60">
              Orçamento rápido via WhatsApp. Sem compromisso.
            </p>
          </div>
        </div>

        {/* Image - Vertical Frame */}
        <div className="relative w-full md:max-w-md mx-auto h-[500px] md:h-[650px] rounded-2xl overflow-hidden shadow-2xl group border-4 border-brand-sandLight/10 bg-brand-sandLight/20">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-teal/60 to-transparent z-10"></div>
          {/* User provided Pinterest Image */}
          <img 
            src="https://i.pinimg.com/736x/5a/47/53/5a475344d3d119b396b8874144f9e876.jpg" 
            alt="Render 3D Quarto Casal Moderno" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating UI Element */}
          <div className="absolute bottom-6 left-6 right-6 z-20 bg-brand-sandLight/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border-l-4 border-brand-terracotta">
            <p className="text-sm font-semibold text-brand-tealDark">Resultado Final</p>
            <p className="text-xs text-brand-teal">Renderização 4K - Quarto Casal</p>
          </div>
        </div>

      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -z-0 skew-x-12 origin-top"></div>
    </section>
  );
};

export default Hero;
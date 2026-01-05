import React from 'react';
import { X, Check } from 'lucide-react';
import Button from './Button';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-teal" id="comparativo">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-sandLight mb-4">
            Por que escolher a Belg Render?
          </h2>
          <p className="text-brand-sandLight/80 max-w-2xl mx-auto">
            Planejar o seu novo apartamento não precisa custar uma fortuna em honorários ou em erros de obra.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* The "Old Way" - Pain */}
          <div className="bg-white/95 p-8 rounded-2xl border border-brand-tealDark/20 shadow-lg relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 w-full h-2 bg-gray-400"></div>
            <h3 className="text-xl font-bold text-gray-600 mb-2">Sem Planejamento Visual</h3>
            <div className="text-sm font-semibold text-red-500 uppercase tracking-wide mb-6">O Custo do Erro</div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <span className="text-gray-600">Comprar móveis que não cabem ou bloqueiam passagem.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <span className="text-gray-600">Mistura de estilos que deixa o ambiente confuso.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <span className="text-gray-600">Dificuldade em explicar para o marceneiro o que você quer.</span>
              </li>
              <li className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-400 mt-1 shrink-0" />
                <span className="text-gray-600">Gastos imprevistos com trocas e devoluções.</span>
              </li>
            </ul>
            
            <div className="mt-auto pt-6 border-t border-gray-100">
               <p className="text-center text-gray-400 font-medium">Resultado: Estresse & Custo Alto</p>
            </div>
          </div>

          {/* The "Belg Way" - Solution */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl relative transform md:-translate-y-4 md:scale-105 z-10 border border-brand-sandLight overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-terracotta"></div>
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Com Belg Render</h3>
            <div className="text-sm font-semibold text-brand-terracotta uppercase tracking-wide mb-6">Investimento Inteligente</div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="bg-brand-teal rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-dark font-medium">Visualize exatamente o resultado antes de gastar.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-teal rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-dark font-medium">Lista de compras visual: saiba cores e modelos certos.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-teal rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-dark font-medium">Guia fiel para execução de marcenaria e pintura.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-brand-teal rounded-full p-0.5 mt-1 shrink-0">
                    <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-brand-dark font-medium">Preço fixo e acessível, sem surpresas.</span>
              </li>
            </ul>

            <div className="mt-8">
              <Button fullWidth className="shadow-lg bg-brand-teal hover:bg-brand-tealDark text-white border-none">
                Quero Economizar na Decoração
              </Button>
              <p className="text-center text-brand-tealDark text-sm mt-3 font-medium">
                Parcelamento disponível. Consulte condições.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Comparison;
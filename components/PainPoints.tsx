import React from 'react';
import { AlertCircle, HelpCircle, DollarSign } from 'lucide-react';

const PainPoints: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-brand-terracotta uppercase mb-3">
            Você não está sozinho(a)
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
            Recebeu as chaves e se sente perdido?
          </h3>
          <p className="text-gray-600">
            É comum sentir medo de errar na hora de mobiliar. O resultado? Ambientes que não conversam entre si e dinheiro desperdiçado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-brand-gray p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Dúvida Espacial</h4>
            <p className="text-gray-600">
              "Será que esse sofá vai caber?" O medo de comprar móveis grandes demais que deixam a sala apertada.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-brand-gray p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <DollarSign className="w-6 h-6 text-orange-600" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Medo do Prejuízo</h4>
            <p className="text-gray-600">
              Gastar com decoração e se arrepender depois. Comprar itens caros que não combinam com o piso ou paredes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-brand-gray p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <HelpCircle className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-3">Excesso de Opções</h4>
            <p className="text-gray-600">
              Pinterest tem ideias demais. Você quer algo bonito, mas não sabe como aplicar isso na sua planta real.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center italic text-gray-500 font-serif-custom text-lg">
          “A gente queria algo com cara de Pinterest, mas sem gastar uma fortuna em projeto.”
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
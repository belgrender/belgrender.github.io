import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-brand-teal text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-sandLight">
              Sobre a <span className="text-white">Belg Render Co.</span>
            </h2>
            <div className="space-y-6 text-brand-sandLight/90">
              <p>
                A Belg Render nasceu para ajudar pessoas práticas a realizarem o sonho da casa própria sem estresse. Entendemos que contratar um arquiteto pode ser um investimento alto para quem só precisa visualizar as escolhas.
              </p>
              <p>
                Somos especialistas em transformar medidas frias em imagens 3D de altíssima qualidade que trazem calor e vida para sua ideia.
              </p>
              
              <div className="border-l-4 border-brand-terracotta pl-6 py-2 my-8">
                <p className="text-lg italic font-serif-custom text-white">
                  "Quero que meus clientes se sintam confiantes antes de qualquer compra. O render é a ponte entre o medo e a certeza."
                </p>
                <p className="text-brand-sandLight mt-2 font-semibold">— Bruna Letícia, Fundadora</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">Especialidades:</h4>
                <ul className="grid grid-cols-2 gap-2 text-sm text-brand-sandLight">
                  <li>• Interiores Residenciais</li>
                  <li>• Espaços Comerciais</li>
                  <li>• Visualização de Marcenaria</li>
                  <li>• Consultoria de Cores</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-brand-terracotta rounded-lg transform rotate-3 opacity-20"></div>
            <img 
              src="https://i.pinimg.com/736x/22/c6/e9/22c6e98d2c4cb4a6659f522d6427ccc1.jpg" 
              alt="Bruna Letícia working" 
              className="relative rounded-lg shadow-2xl w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-500 border border-brand-sandLight/20"
            />
            <div className="absolute bottom-4 right-4 bg-brand-sandLight text-brand-teal px-4 py-2 rounded text-xs font-bold tracking-wider">
              5 ANOS DE EXPERIÊNCIA
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
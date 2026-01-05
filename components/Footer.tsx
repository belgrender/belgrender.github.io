import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { Instagram, Mail, Phone } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-teal text-white pt-20 pb-8 border-t-4 border-brand-sandLight">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Main Footer CTA */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif-custom text-brand-sandLight">
            Pronto(a) para ver seu lar antes mesmo de decorar?
          </h2>
          <p className="text-brand-sandLight/80 mb-8">
            Quanto antes começarmos, mais rápido você evita erros e vê seu espaço com clareza.
          </p>
          <Button className="text-lg px-8 py-4 shadow-xl shadow-brand-terracotta/20 animate-pulse">
            Solicitar Orçamento no WhatsApp
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-brand-sandLight/20 pt-12 text-center md:text-left">
          
          <div>
            <h3 className="text-xl font-bold text-brand-sandLight mb-4">Belg Render Co.</h3>
            <p className="text-brand-sandLight/70 text-sm">
              Design de interiores com renderização 3D em 4K. 
              Transformando espaços e economizando obras.
            </p>
          </div>

          <div>
             <h4 className="font-bold text-white mb-4">Contato</h4>
             <ul className="space-y-3 text-brand-sandLight/80 text-sm">
               <li className="flex items-center justify-center md:justify-start gap-2">
                 <Phone size={16} className="text-brand-terracotta"/> 
                 <span>(11) 99391‑5411</span>
               </li>
               <li className="flex items-center justify-center md:justify-start gap-2">
                 <Mail size={16} className="text-brand-terracotta"/> 
                 <span>belgrender@gmail.com</span>
               </li>
               <li className="flex items-center justify-center md:justify-start gap-2">
                 <Instagram size={16} className="text-brand-terracotta"/> 
                 <a href="https://instagram.com/belgrender" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@belgrender</a>
               </li>
             </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-brand-sandLight/80 text-sm">
              <li><a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="hover:text-brand-sandLight transition-colors">Fale Conosco</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center text-xs text-brand-sandLight/40 pt-8 border-t border-brand-sandLight/10">
          © {new Date().getFullYear()} Belg Render Co. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
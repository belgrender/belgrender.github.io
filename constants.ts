import { 
  Eye, 
  Lightbulb, 
  PiggyBank, 
  MonitorSmartphone, 
  Ruler, 
  CheckCircle2, 
  AlertTriangle 
} from 'lucide-react';
import { Benefit, FaqItem, Step, Testimonial } from './types';

export const WHATSAPP_LINK = "https://wa.me/5511993915411";

export const BENEFITS: Benefit[] = [
  {
    title: "Visualização Realista",
    description: "Veja como cada móvel se encaixa e combina com o ambiente com texturas e iluminação reais.",
    icon: Eye
  },
  {
    title: "Decisões com Confiança",
    description: "Evite arrependimentos caros. Tenha certeza da paleta de cores e disposição antes de comprar.",
    icon: Lightbulb
  },
  {
    title: "Economia Inteligente",
    description: "Compre apenas o que realmente faz sentido. O 3D funciona como sua lista de compras visual.",
    icon: PiggyBank
  },
  {
    title: "Estética Profissional",
    description: "Ambientes com estética de 'casa de arquiteto' sem os custos de um projeto executivo completo.",
    icon: MonitorSmartphone
  }
];

export const STEPS: Step[] = [
  {
    number: "01",
    title: "Envio de Dados",
    description: "Você envia as medidas ou a planta do seu espaço e fotos atuais (se houver)."
  },
  {
    number: "02",
    title: "Alinhamento",
    description: "Conversamos sobre seu estilo, referências (Pinterest) e necessidades funcionais."
  },
  {
    number: "03",
    title: "Criação 3D",
    description: "Desenvolvemos os renders realistas em 4K focados na melhor disposição e estética."
  },
  {
    number: "04",
    title: "Entrega e Manual",
    description: "Você recebe as imagens aprovadas para usar como guia visual nas suas compras."
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Vocês fazem projeto de arquitetura completo?",
    answer: "Não. Focamos no visual final em 3D. É a solução ideal para quem quer visualizar o resultado e ter um guia estético antes de executar, sem gastar com todo o detalhamento técnico de um projeto executivo de arquitetura."
  },
  {
    question: "Em quanto tempo recebo minhas imagens?",
    answer: "O prazo médio varia entre 5 a 10 dias úteis, dependendo do tamanho e da complexidade do ambiente solicitado."
  },
  {
    question: "Posso pedir alterações depois?",
    answer: "Sim! Trabalhamos com rodadas de ajustes incluídas no pacote para garantir que o resultado final fique alinhado com sua expectativa e orçamento."
  },
  {
    question: "Preciso ter as medidas exatas?",
    answer: "Sim, para que o render seja funcional e os móveis caibam na realidade, precisamos de uma planta baixa ou um esboço com as medidas das paredes."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Foi a melhor decisão! Consegui ver meu apê pronto antes de comprar qualquer coisa. Mudei a cor do sofá no 3D e me salvou de um erro enorme.",
    author: "Mariana S.",
    image: "https://picsum.photos/id/64/100/100"
  },
  {
    text: "Economizei dinheiro e acertei em tudo com a ajuda do render. Valeu cada centavo. O marceneiro seguiu a imagem certinho.",
    author: "Carlos E.",
    image: "https://picsum.photos/id/91/100/100"
  }
];
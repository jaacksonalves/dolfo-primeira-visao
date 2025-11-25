import React from 'react';
import { Compass, Layout, MessageCircle, CalendarClock, Rocket } from 'lucide-react';
import { MethodStep } from '../types';

const steps: MethodStep[] = [
  {
    letter: "D",
    title: "Direcionamento",
    description: "Defina onde quer chegar e com quem quer falar. O LinkedIn não é para vender cota: é para posicionar-se como especialista no ecossistema certo.",
    color: "bg-sky-400",
    icon: Compass
  },
  {
    letter: "O",
    title: "Organização",
    description: "Seu perfil é sua vitrine. Capa, Head, Sobre e Foto devem trabalhar por você 24 horas por dia, gerando valor imediato para quem visita.",
    color: "bg-blue-600",
    icon: Layout
  },
  {
    letter: "L",
    title: "Linguagem",
    description: "Humanize sua marca. Evite jargões engessados. Fale de propósito, mostre bastidores e conecte-se com pessoas, não apenas CNPJs.",
    color: "bg-blue-700",
    icon: MessageCircle
  },
  {
    letter: "F",
    title: "Frequência",
    description: "Aparecer sempre é estratégia. Crie uma rotina possível. Interagir e comentar vale tanto quanto postar. Constância vence estética.",
    color: "bg-red-500",
    icon: CalendarClock
  },
  {
    letter: "O",
    title: "Oportunidade",
    description: "Transforme visibilidade em negócio. Observe o que gera engajamento, mantenha contato e use o LinkedIn para educar o mercado.",
    color: "bg-red-600",
    icon: Rocket
  }
];

export const Methodology: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Metodologia Autoral <span className="text-dolfoBlue">D</span><span className="text-blue-600">O</span><span className="text-blue-800">L</span><span className="text-dolfoRed">F</span><span className="text-red-700">O</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Um passo a passo validado para construir autoridade real, sem depender de viralização ou métricas de vaidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className={`h-2 ${step.color} w-full`} />
              <div className="p-6 bg-cream h-full flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full ${step.color} text-white flex items-center justify-center text-3xl font-bold mb-4 shadow-md`}>
                  {step.letter}
                </div>
                <h3 className="text-xl font-bold mb-3 text-dolfoDark">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <div className="mt-auto pt-6 opacity-20 group-hover:opacity-100 transition-opacity duration-300">
                  <step.icon size={32} className={step.color.replace('bg-', 'text-')} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
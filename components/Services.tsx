import React from 'react';
import { Button } from './Button';
import { Users, Briefcase, Presentation, Mic2, PenTool } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: "Mentoria Individual",
    desc: "Construção de marca pessoal e estratégia de autoridade sob medida para você."
  },
  {
    icon: Briefcase,
    title: "Consultoria para Empresas",
    desc: "Employer branding e posicionamento institucional para fortalecer sua marca no mercado."
  },
  {
    icon: Presentation,
    title: "Workshops e Treinamentos",
    desc: "Capacitação para equipes comerciais e lideranças dominarem o LinkedIn."
  },
  {
    icon: Mic2,
    title: "Palestras",
    desc: "Thought leadership, comunicação estratégica e storytelling corporativo."
  },
  {
    icon: PenTool,
    title: "Ghostwriting Executivo",
    desc: "Criação de conteúdo estratégico para C-levels no LinkedIn."
  }
];

export const Services: React.FC = () => {
  const handleCTA = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-dolfoDark text-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            Serviços Disponíveis
          </h2>
          <p className="text-blue-200 text-lg">
            Soluções completas para transformar sua presença digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
              <div className="bg-dolfoBlue w-14 h-14 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-blue-900/50">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
            <div className="inline-block p-1 bg-white/10 rounded-full backdrop-blur-md">
                <Button onClick={handleCTA} variant="primary" className="text-lg px-12">
                    Solicitar Orçamento
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};
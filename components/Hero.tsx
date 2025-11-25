import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="inline-block px-4 py-1 bg-blue-100 text-dolfoBlue rounded-full text-sm font-semibold tracking-wide uppercase mb-2">
              Metodologia Autoral DOLFO
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
              Framework <br/>
              <span className="text-dolfoBlue">LinkedIn Estratégico</span> <br/>
              <span className="font-script text-dolfoRed text-5xl md:text-7xl block mt-2">+ Perfil Memorável</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0">
              Transforme seu LinkedIn em uma ferramenta de <strong className="text-dolfoBlue">autoridade</strong>, <strong className="text-dolfoBlue">confiança</strong> e <strong className="text-dolfoBlue">educação de mercado</strong> no setor de turismo compartilhado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button onClick={scrollToContact} className="flex items-center justify-center gap-2">
                Quero meu Plano de Ação <ArrowRight size={20} />
              </Button>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold border-2 border-dolfoBlue text-dolfoBlue hover:bg-blue-50 transition-colors gap-2"
              >
                <Linkedin size={20} />
                Ver Perfil do Zé
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative z-10 w-full max-w-md bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl p-1 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
               <div className="bg-white rounded-xl overflow-hidden relative">
                  {/* 
                    TODO: Para usar a imagem enviada:
                    1. Salve a imagem do Zé Elias como 'ze-elias.png' na pasta public ou assets.
                    2. Altere o src abaixo para: src="/ze-elias.png" (ou o caminho correto).
                    3. Se a imagem for um recorte (sem fundo), você pode remover a div 'bg-white' acima para um efeito mais legal.
                  */}
                  <img 
                    src="/images/ze-elias.png" 
                    alt="Zé Elias Rodolfo - Especialista em LinkedIn" 
                    className="w-full h-auto object-contain aspect-[4/5]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20">
                    <p className="text-white font-serif text-2xl">José Elias Mendes (Dolfo)</p>
                    <p className="text-blue-200 text-sm uppercase tracking-wider">Especialista em Comunicação & LinkedIn</p>
                  </div>
               </div>
            </div>
            {/* Background blobs */}
            <div className="absolute top-10 right-0 w-64 h-64 bg-dolfoRed/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 left-10 w-64 h-64 bg-dolfoBlue/20 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};
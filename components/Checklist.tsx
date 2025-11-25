import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const checkItems = [
  "Perfil completo e coerente com seu posicionamento",
  "Foto e capa profissionais e atualizadas",
  "'Sobre' escrito em primeira pessoa, com autenticidade",
  "Destaques e publicações que provam experiência",
  "Interações frequentes com o ecossistema do setor",
  "Objetivos claros de marca pessoal e corporativa",
  "Comunicação constante, sem fórmulas prontas"
];

export const Checklist: React.FC = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Pain Points */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-3xl font-serif font-bold mb-8 text-red-600">
              O que está te impedindo de crescer?
            </h3>
            <ul className="space-y-6">
              {[
                "Você sente que seu perfil é invisível para investidores?",
                "Sua empresa tem dificuldade em educar o mercado sobre turismo compartilhado?",
                "Você posta mas não gera conversas reais ou leads?",
                "Falta de tempo para criar conteúdo relevante todos os dias?",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border-l-4 border-red-400">
                  <XCircle className="text-red-500 shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution Checklist */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-dolfoBlue to-cyan-400"></div>
            
            <h3 className="text-3xl font-serif font-bold mb-2 text-dolfoBlue">
              Checklist de Autoridade
            </h3>
            <p className="mb-8 text-gray-500 text-sm uppercase tracking-wider">
              O que você vai conquistar com o método Dolfo
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-dolfoBlue shrink-0 fill-blue-100" size={24} />
                  <span className="text-dolfoDark font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100">
               <p className="text-center font-script text-2xl text-dolfoRed">
                 Esqueça viralizar. Foque em autoridade.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
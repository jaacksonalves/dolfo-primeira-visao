import React from 'react';
import { Linkedin, Instagram, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Logo className="h-12 w-auto mb-3" />
            <p className="text-gray-500 font-medium">Metodologia Autoral</p>
            <p className="text-sm text-gray-400 mt-4 max-w-xs">
              Transformando profissionais do turismo compartilhado em autoridades digitais.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <h3 className="text-2xl font-bold text-dolfoDark">Vamos conversar?</h3>
            
            <a 
              href="https://wa.me/5534991477560" 
              className="flex items-center gap-3 text-lg font-medium hover:text-green-600 transition-colors"
            >
              <Phone size={24} className="text-green-500" />
              (34) 99147-7560
            </a>

            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-dolfoBlue hover:bg-dolfoBlue hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="mailto:contato@dolfo.com" 
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-700 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="text-right mt-4">
               <p className="text-sm font-semibold text-dolfoDark">Jose Elias Rodolfo</p>
               <p className="text-xs text-gray-500">@meunomenaoedolfo</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-100 mt-16 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dolfo Consultoria. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
import React from 'react';
import { ArrowRight, Database, HeartPulse } from 'lucide-react';
import { ActiveView } from '../types/mauco';

interface HeroProps {
  setActiveView: (view: ActiveView) => void;
}

export const Hero: React.FC<HeroProps> = ({ setActiveView }) => {
  return (
    <section className="relative bg-[#006380] text-white py-16 lg:py-24 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url('/S-mauco4.jpg')` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#006380] via-[#006380]/90 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#08b3e7]/20 border border-[#08b3e7]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#08b3e7] mb-6">
            <span>Estudio de Cohorte de Base Poblacional</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-6">
            Salud pública y ciencia de datos para el futuro de Chile.
          </h1>

          <p className="text-base sm:text-xl text-gray-200 mb-8 leading-relaxed">
            MAUCO evalúa a más de 10.000 adultos en Molina para comprender los factores ambientales, genéticos y de estilo de vida en el desarrollo de enfermedades crónicas.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button 
              onClick={() => setActiveView('participantes')}
              className="bg-[#f08700] hover:bg-[#d67800] text-white px-6 py-4 rounded-sm font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
            >
              <HeartPulse className="w-5 h-5" /> Descubrir cómo participar
            </button>
            <button 
              onClick={() => setActiveView('investigadores')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-4 rounded-sm font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
            >
              <Database className="w-5 h-5 text-[#08b3e7]" /> Explorar catálogo de datos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
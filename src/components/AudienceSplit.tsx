import React from 'react';
import { ShieldCheck, Database, FileText, ArrowUpRight } from 'lucide-react';
import { ActiveView } from '../types/mauco';

interface AudienceSplitProps {
  setActiveView: (view: ActiveView) => void;
}

export const AudienceSplit: React.FC<AudienceSplitProps> = ({ setActiveView }) => {
  return (
    <section className="py-12 bg-white border-y border-[#e5e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Participantes */}
          <div className="bg-[#f4efde] border border-[#e5e1d8] p-8 rounded-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#f08700] text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4">
                Para la Comunidad
              </div>
              <h3 className="text-2xl font-bold text-[#1e1f26] mb-3">
                ¿Eres participante del estudio MAUCO?
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                Tu contribución durante más de 10 años ha permitido avanzar en la prevención del cáncer y enfermedades cardiovasculares en Chile. Revisa tus derechos, preguntas frecuentes y consentimientos.
              </p>
            </div>
            <div>
              <button 
                onClick={() => setActiveView('participantes')}
                className="bg-[#1e1f26] hover:bg-black text-white px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                Información para participantes <ArrowUpRight className="w-4 h-4 text-[#f08700]" />
              </button>
            </div>
          </div>

          {/* Card Investigadores */}
          <div className="bg-[#006380] text-white p-8 rounded-sm relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#08b3e7] text-[#006380] text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider mb-4">
                Comunidad Científica
              </div>
              <h3 className="text-2xl font-bold mb-3">
                Solicitud de Muestras & Acceso a Datos
              </h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6">
                Acceda a más de 430.000 alícuotas biológicas (suero, ADN) y variables fenotípicas longitudinales mediante el proceso estandarizado de solicitud institucional en REDCap.
              </p>
            </div>
            <div>
              <a 
                href="https://mauco-redcap.facultadmedicina.uc.cl/surveys/?s=FPR4YDLDJL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#08b3e7] hover:bg-[#079bc8] text-[#006380] px-5 py-3 rounded-sm text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                Iniciar Solicitud en REDCap <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSplit;
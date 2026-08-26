import { useState } from 'react';
import { Database, Boxes, Handshake, Beaker, ArrowRight, Check } from 'lucide-react';
import type { AccessStep } from '@/types/mauco';

const requestOptions = [
  { id: 'datos', icon: Database, label: 'Datos', description: 'Variables de la cohorte para análisis' },
  { id: 'muestras', icon: Boxes, label: 'Muestras biológicas', description: 'Alícuotas de suero, plasma, sangre o ADN' },
  { id: 'colaboraciones', icon: Handshake, label: 'Colaboraciones', description: 'Proyectos conjuntos con el equipo MAUCO' },
  { id: 'anidados', icon: Beaker, label: 'Estudios anidados', description: 'Sub-estudios dentro de la cohorte' },
];

const accessSteps: AccessStep[] = [
  { stepNumber: '01', title: 'Explore', description: 'Revise la documentación de datos y muestras disponibles.' },
  { stepNumber: '02', title: 'Envíe solicitud', description: 'Presente su propuesta de investigación en el formulario.' },
  { stepNumber: '03', title: 'Evaluación preliminar', description: 'Revisión inicial de viabilidad y pertinencia científica.' },
  { stepNumber: '04', title: 'Evaluación CEAM', description: 'Revisión por la Comisión de Ética y medio ambiente.' },
  { stepNumber: '05', title: 'Ética y acuerdos', description: 'Firma de acuerdos de uso y confidencialidad.' },
  { stepNumber: '06', title: 'Acceso controlado', description: 'Entrega de datos o muestras bajo condiciones controladas.' },
  { stepNumber: '07', title: 'Investigación', description: 'Desarrollo del proyecto y divulgación de resultados.' },
];

export default function CollaborationSection() {
  const [active, setActive] = useState('datos');

  return (
    <section className="bg-white py-20 md:py-28" id="colaborar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#f08700] uppercase">Colaboración</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
            Trabaje con MAUCO
          </h2>
          <p className="mt-3 text-[#5a5f6b] leading-relaxed">
            Formas de colaborar con la cohorte, desde el acceso a datos y muestras hasta proyectos conjuntos.
          </p>
        </div>

        {/* Request options */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {requestOptions.map(({ id, icon: Icon, label, description }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`group text-left rounded-sm border p-6 transition-all duration-200 ${
                active === id
                  ? 'border-[#006380] bg-[#f4efde] shadow-md'
                  : 'border-[#e5e1d8] bg-white hover:border-[#006380] hover:shadow-sm'
              }`}
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ backgroundColor: active === id ? '#006380' : `${'#006380'}14`, color: active === id ? '#fff' : '#006380' }}
              >
                <Icon size={20} />
              </div>
              <h3 className="font-bold text-[#1e1f26] mb-1">{label}</h3>
              <p className={`text-xs leading-relaxed ${active === id ? 'text-[#5a5f6b]' : 'text-[#5a5f6b]'}`}>{description}</p>
              <a href="#" className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#006380]">
                Solicitar
                <ArrowRight size={13} />
              </a>
            </button>
          ))}
        </div>

        {/* Access process */}
        <div className="bg-[#f4efde] border border-[#e5e1d8] rounded-sm p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
                <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Proceso de acceso</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1e1f26] tracking-tight">Un proceso transparente y controlado</h3>
            </div>
            <a
              href="#"
              className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#006380] hover:bg-[#004c5f] text-white font-semibold text-sm rounded-sm transition-colors"
            >
              Conocer el proceso completo
              <ArrowRight size={15} />
            </a>
          </div>

          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-x-6">
            {accessSteps.map(({ stepNumber, title, description }) => (
              <li key={stepNumber} className="relative flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-9 h-9 bg-[#006380] text-white rounded-sm flex items-center justify-center text-xs font-bold shrink-0">{stepNumber}</div>
                  {stepNumber !== '07' && <div className="flex-1 w-px bg-[#e5e1d8] my-1 hidden sm:block" />}
                </div>
                <div className="pb-6">
                  <h4 className="font-bold text-[#1e1f26] text-sm mb-1 flex items-center gap-1.5">
                    <Check size={14} className="text-[#08b3e7]" />
                    {title}
                  </h4>
                  <p className="text-xs text-[#5a5f6b] leading-relaxed">{description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
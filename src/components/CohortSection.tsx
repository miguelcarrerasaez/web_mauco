import { Users, ClipboardList, RefreshCcw, LineChart, Boxes } from 'lucide-react';

const steps = [
  {
    id: 'poblacion',
    icon: Users,
    step: '01',
    title: 'Población',
    detail: '9.462 habitantes · 38-74 años',
    description:
      'Cohorte de base poblacional reclutada en la comuna de Molina, representativa de la población adulta rural y urbana de la región.',
  },
  {
    id: 'basal',
    icon: ClipboardList,
    step: '02',
    title: 'Evaluación basal',
    detail: '2014-2020',
    description: 'Cuestionarios, exámenes clínicos y evaluación de laboratorio aplicados a toda la cohorte al ingreso.',
  },
  {
    id: 'seguimiento',
    icon: RefreshCcw,
    step: '03',
    title: 'Seguimiento longitudinal',
    detail: 'Visitas y cuestionarios',
    description: 'Contacto periódico y evaluación repetida para capturar cambios en la salud y el estilo de vida a lo largo del tiempo.',
  },
  {
    id: 'pasivo',
    icon: LineChart,
    step: '04',
    title: 'Seguimiento pasivo',
    detail: 'Hospitalizaciones · diagnósticos · cáncer · mortalidad',
    description: 'Vinculación con registros de salud para identificar eventos de morbilidad y mortalidad sin depender solo del reporte del participante.',
  },
  {
    id: 'biobanco',
    icon: Boxes,
    step: '05',
    title: 'Biobanco',
    detail: 'Suero · plasma · sangre · ADN',
    description: 'Almacenamiento y gestión de muestras biológicas para su uso en investigación presente y futura.',
  },
];

export default function CohortSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="cohorte">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">La cohorte</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
            Más de una década estudiando la salud de una población
          </h2>
        </div>

        {/* Vertical stepped flow */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-[19px] md:left-1/2 top-2 bottom-2 w-px bg-[#e5e1d8] md:-translate-x-1/2" />

          <div className="space-y-8">
            {steps.map(({ id, icon: Icon, step, title, detail, description }, index) => {
              const reverse = index % 2 === 1;
              return (
                <div key={id} className={`relative flex flex-col md:flex-row md:items-center gap-5 md:gap-0 ${reverse ? 'md:flex-row-reverse' : ''}`}>
                  {/* Timeline node */}
                  <div className="absolute left-0 md:left-1/2 top-2 md:-translate-x-1/2 z-10 w-10 h-10 bg-[#006380] rounded-sm flex items-center justify-center shadow-md">
                    <Icon size={18} className="text-white" strokeWidth={2} />
                  </div>

                  {/* Card */}
                  <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                    <div className="bg-[#f4efde] border border-[#e5e1d8] rounded-sm p-6 hover:shadow-lg hover:border-[#006380] transition-all">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Paso {step}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1e1f26] mb-1">{title}</h3>
                      <p className="text-xs font-semibold text-[#f08700] uppercase tracking-wide mb-2">{detail}</p>
                      <p className="text-sm text-[#5a5f6b] leading-relaxed">{description}</p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden md:block md:w-1/2 ${reverse ? 'md:order-first' : ''}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
import { FileSpreadsheet, BookOpen, FileQuestion, Dna, Download, type LucideIcon } from 'lucide-react';

const researchAreas = [
  'Demografía', 'Determinantes sociales', 'Estilos de vida', 'Alimentación',
  'Cardiovascular', 'Salud respiratoria', 'Cáncer', 'Salud mental', 'Envejecimiento',
];

type Resource = {
  icon: LucideIcon;
  badge: string;
  title: string;
  description: string;
  action: string;
  accent: string;
};

const resources: Resource[] = [
  {
    icon: FileSpreadsheet,
    badge: 'Datos',
    title: 'Diccionario de datos',
    description: 'Documentación de las variables disponibles de la cohorte y sus definiciones para planificar análisis.',
    action: 'Descargar diccionario',
    accent: '#006380',
  },
  {
    icon: BookOpen,
    badge: 'Diseño',
    title: 'Perfil de la cohorte',
    description: 'Descripción del diseño del estudio, población, métodos de reclutamiento y seguimiento.',
    action: 'Conocer el diseño',
    accent: '#08b3e7',
  },
  {
    icon: FileQuestion,
    badge: 'Documentación',
    title: 'Cuestionarios',
    description: 'Acceso a los instrumentos y cuestionarios utilizados en las diferentes evaluaciones.',
    action: 'Explorar documentación',
    accent: '#f08700',
  },
  {
    icon: Dna,
    badge: 'Biobanco',
    title: 'Recursos biológicos',
    description: 'Catálogo de muestras biológicas y especificaciones para su solicitud.',
    action: 'Conocer el biobanco',
    accent: '#006380',
  },
];

export default function ResearchersSection() {
  return (
    <section className="bg-white py-20 md:py-28" id="recursos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Recursos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
              Explore los datos de MAUCO
            </h2>
            <p className="mt-3 text-[#5a5f6b] leading-relaxed">
              Acceda a la documentación y recursos de datos y muestras de la cohorte para su investigación.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#f08700] uppercase tracking-widest">Para investigadores</span>
        </div>

        {/* Research areas (tags/badges) */}
        <div className="flex flex-wrap gap-2 mb-12">
          {researchAreas.map(area => (
            <span
              key={area}
              className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-sm border border-[#e5e1d8] text-[#5a5f6b] hover:border-[#006380] hover:text-[#006380] transition-colors cursor-default"
            >
              {area}
            </span>
          ))}
        </div>

        {/* Download cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map(({ icon: Icon, badge, title, description, action, accent }) => (
            <article
              key={title}
              className="group relative bg-[#f7f4ed] border border-[#e5e1d8] hover:border-[#08b3e7] rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute top-0 inset-x-0 h-0.5 bg-[#08b3e7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <div className="flex items-start justify-between">
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${accent}14`, color: accent }}
                >
                  <Icon size={21} strokeWidth={1.9} />
                </div>
                <span
                  className="text-[11px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                  style={{ color: accent, backgroundColor: `${accent}12` }}
                >
                  {badge}
                </span>
              </div>
              <h3 className="font-bold text-[#1e1f26] text-base leading-snug group-hover:text-[#006380] transition-colors">{title}</h3>
              <p className="text-sm text-[#5a5f6b] leading-relaxed flex-1">{description}</p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 mt-1 text-xs font-semibold text-white rounded-sm transition-colors"
                style={{ backgroundColor: accent }}
              >
                <Download size={14} />
                {action}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
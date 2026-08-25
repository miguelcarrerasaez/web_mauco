import { Microscope, BookMarked, Database, ArrowRight } from 'lucide-react';

const resources = [
  {
    icon: Microscope,
    badge: 'Investigación',
    title: 'Líneas de Investigación',
    description:
      'Cardiovascular, metabólica, renal, respiratoria, salud mental y envejecimiento. Explora nuestras áreas activas y los grupos de trabajo colaborativo.',
    action: 'Ver líneas activas',
    accent: '#006380',
  },
  {
    icon: BookMarked,
    badge: 'Publicaciones',
    title: 'Repositorio de Publicaciones',
    description:
      'Acceso completo a papers revisados por pares, preprints y reportes técnicos con DOI. Más de 50 publicaciones indexadas en PubMed y Scopus.',
    action: 'Explorar bibliografía',
    accent: '#08b3e7',
  },
  {
    icon: Database,
    badge: 'Acceso a Datos',
    title: 'Solicitud de Datos y Muestras',
    description:
      'Proceso formal de acceso a datos anonimizados, biomuestras y variables clínicas. Requiere protocolo aprobado y firma de acuerdo de uso.',
    action: 'Iniciar solicitud',
    accent: '#006380',
  },
];

export default function ResearchersSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Comunidad Científica</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
              Recursos para la<br />Comunidad Científica
            </h2>
            <p className="mt-3 text-[#5a5f6b] max-w-lg leading-relaxed">
              Infraestructura de datos y muestras biológicas disponibles para investigación colaborativa de alto impacto.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#08b3e7] hover:text-[#006380] transition-colors group"
          >
            Portal completo para investigadores
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map(({ icon: Icon, badge, title, description, action, accent }) => (
            <article
              key={title}
              className="group relative bg-white border border-[#e5e1d8] hover:border-[#08b3e7] rounded-sm p-8 flex flex-col gap-5 cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-[#08b3e7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-sm origin-left" />

              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center transition-transform group-hover:scale-105"
                  style={{ backgroundColor: `${accent}14`, color: accent }}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>
                <span
                  className="text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                  style={{ color: accent, backgroundColor: `${accent}12` }}
                >
                  {badge}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#1e1f26] mb-2 group-hover:text-[#006380] transition-colors">{title}</h3>
                <p className="text-sm text-[#5a5f6b] leading-relaxed">{description}</p>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-semibold text-[#08b3e7] group-hover:gap-2.5 transition-all">
                {action}
                <ArrowRight size={14} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

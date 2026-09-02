import { useState } from 'react';
import { ArrowRight, Calendar, Newspaper, CalendarDays } from 'lucide-react';
import { newsEvents } from '@/data/maucoData';
import type { NewsEvent } from '@/types/mauco';

type Filter = 'todas' | NewsEvent['type'];

const filters: { id: Filter; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'news', label: 'Noticias' },
  { id: 'event', label: 'Eventos' },
];

const typeMeta: Record<NewsEvent['type'], { label: string; accent: string }> = {
  news: { label: 'Noticia', accent: '#08b3e7' },
  event: { label: 'Evento', accent: '#f08700' },
};

export default function NewsSection() {
  const [filter, setFilter] = useState<Filter>('todas');

  const visible =
    filter === 'todas' ? newsEvents : newsEvents.filter(item => item.type === filter);

  return (
    <section className="bg-[#f4efde] py-20 md:py-28" id="noticias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#f08700] uppercase">Noticias y Comunidad</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
              Nuevas publicaciones, proyectos y financiamiento
            </h2>
            <p className="mt-3 text-[#5a5f6b] leading-relaxed">
              Noticias y eventos que marcan el avance de MAUCO y su impacto en salud pública.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#f08700] hover:text-[#006380] transition-colors group"
          >
            Ver el archivo completo
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filtrar por tipo">
          {filters.map(({ id, label }) => {
            const active = filter === id;
            return (
              <button
                key={id}
                onClick={() => setFilter(id)}
                aria-pressed={active}
                className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                  active
                    ? 'bg-[#006380] border-[#006380] text-white shadow-sm'
                    : 'bg-white border-[#e5e1d8] text-[#5a5f6b] hover:border-[#006380] hover:text-[#006380]'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* News/Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visible.map(({ id, type, title, excerpt, date, link }) => {
            const meta = typeMeta[type];
            return (
              <article
                key={id}
                className="group bg-white rounded-sm overflow-hidden border border-[#e5e1d8] hover:border-[#006380] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Visual header */}
                <div
                  className="relative h-40 overflow-hidden text-white flex items-center justify-center"
                  style={{ backgroundColor: meta.accent }}
                >
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    {type === 'news' ? (
                      <Newspaper size={42} strokeWidth={1.3} className="text-white" />
                    ) : (
                      <CalendarDays size={42} strokeWidth={1.3} className="text-white" />
                    )}
                  </div>
                  <span className="absolute bottom-3 left-3 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm text-white bg-black/25">
                    {meta.label}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#5a5f6b]">
                    <Calendar size={12} />
                    <span>{date}</span>
                  </div>
                  <h3 className="font-bold text-[#1e1f26] leading-snug text-base group-hover:text-[#006380] transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5a5f6b] leading-relaxed line-clamp-3">{excerpt}</p>
                  <a
                    href={link ?? '#'}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 group-hover:gap-2.5 transition-all"
                    style={{ color: meta.accent }}
                  >
                    Leer más
                    <ArrowRight size={13} />
                  </a>
                </div>
              </article>
            );
          })}
          {visible.length === 0 && (
            <div className="col-span-full bg-white border border-[#e5e1d8] rounded-sm p-8 text-center text-sm text-[#5a5f6b]">
              No hay publicaciones para este filtro.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
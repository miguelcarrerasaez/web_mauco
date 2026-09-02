import { useState } from 'react';
import { User, CalendarDays, ChevronDown, Clock, CheckCircle2, FlaskConical, type LucideIcon } from 'lucide-react';
import { substudies } from '@/data/maucoData';
import type { SubstudyStatus } from '@/types/mauco';

type StatusFilter = 'Todos' | SubstudyStatus;

const statusFilters: StatusFilter[] = ['Todos', 'En curso', 'Completado'];

const statusMeta: Record<SubstudyStatus, { color: string; bg: string; icon: LucideIcon }> = {
  'En curso': { color: '#f08700', bg: '#f0870012', icon: Clock },
  'Completado': { color: '#006380', bg: '#00638012', icon: CheckCircle2 },
};

export default function SubstudiesSection() {
  const [status, setStatus] = useState<StatusFilter>('Todos');

  const visible =
    status === 'Todos' ? substudies : substudies.filter(item => item.status === status);

  return (
    <section className="bg-[#f7f4ed] py-20 md:py-28" id="subestudios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Sub-estudios</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
              Proyectos de investigación anidados
            </h2>
            <p className="mt-3 text-[#5a5f6b] leading-relaxed">
              Sub-estudios que aprovechan la infraestructura de la cohorte para profundizar en temas específicos de salud.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0" role="group" aria-label="Filtrar por estado">
            {statusFilters.map(filterLabel => {
              const active = status === filterLabel;
              return (
                <button
                  key={filterLabel}
                  onClick={() => setStatus(filterLabel)}
                  aria-pressed={active}
                  className={`px-4 py-2 text-xs font-semibold rounded-sm border transition-colors ${
                    active
                      ? 'bg-[#006380] border-[#006380] text-white shadow-sm'
                      : 'bg-white border-[#e5e1d8] text-[#5a5f6b] hover:border-[#006380] hover:text-[#006380]'
                  }`}
                >
                  {filterLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sub-studies grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(({ id, title, principalInvestigator, objective, date, status: st }) => {
            const meta = statusMeta[st];
            const StatusIcon = meta.icon;
            return (
              <article
                key={id}
                className="group bg-white border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                    style={{ backgroundColor: meta.bg, color: meta.color }}
                  >
                    <FlaskConical size={20} strokeWidth={1.9} />
                  </div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm"
                    style={{ color: meta.color, backgroundColor: meta.bg }}
                  >
                    <StatusIcon size={12} />
                    {st}
                  </span>
                </div>

                <h3 className="font-bold text-[#1e1f26] leading-snug group-hover:text-[#006380] transition-colors">
                  {title}
                </h3>

                <div className="space-y-2 text-xs text-[#5a5f6b]">
                  <p className="flex items-start gap-2">
                    <User size={13} className="mt-0.5 shrink-0 text-[#08b3e7]" />
                    <span><strong className="text-[#1e1f26] font-semibold">IP:</strong> {principalInvestigator}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CalendarDays size={13} className="mt-0.5 shrink-0 text-[#08b3e7]" />
                    <span>{date}</span>
                  </p>
                </div>

                {/* Disclosure */}
                <details className="group mt-auto border-t border-[#e5e1d8] pt-3">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-xs font-semibold text-[#006380] hover:text-[#004c5f] transition-colors">
                    <span>Ver objetivo</span>
                    <ChevronDown size={14} className="transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm text-[#5a5f6b] leading-relaxed">{objective}</p>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
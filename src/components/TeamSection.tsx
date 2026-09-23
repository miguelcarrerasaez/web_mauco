import { Globe, GraduationCap, Building2, ExternalLink, Crown, Microscope, ClipboardList, Database, Users, Handshake, type LucideIcon } from 'lucide-react';
import { teamMembers } from '@/data/maucoData';
import type { TeamCategory } from '@/types/mauco';

const categoryOrder: TeamCategory[] = [
  'Dirección y liderazgo científico',
  'Investigadores',
  'Coordinación y equipo profesional',
  'Data management',
  'Equipo de terreno',
  'Colaboradores',
];

const categoryMeta: Record<TeamCategory, { accent: string; icon: LucideIcon }> = {
  'Dirección y liderazgo científico': { accent: '#006380', icon: Crown },
  'Investigadores': { accent: '#08b3e7', icon: Microscope },
  'Coordinación y equipo profesional': { accent: '#f08700', icon: ClipboardList },
  'Data management': { accent: '#0d8bb0', icon: Database },
  'Equipo de terreno': { accent: '#5a5f6b', icon: Users },
  'Colaboradores': { accent: '#004c5f', icon: Handshake },
};

const grouped = categoryOrder
  .map(cat => ({ cat, members: teamMembers.filter(m => m.category === cat) }))
  .filter(group => group.members.length > 0);

export default function TeamSection() {
  return (
    <section className="bg-white py-10 md:py-12" id="equipo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Equipo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
            Las personas detrás de MAUCO
          </h2>
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-[#5a5f6b]">
            <p className="leading-relaxed">
              Una red nacional e internacional de investigación y salud pública que impulsa la cohorte.
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006380] shrink-0">
              <Globe size={14} /> Red de colaboración
            </span>
          </div>
        </div>

        {/* Team by category */}
        {grouped.map(({ cat, members }) => {
          const { accent, icon: CatIcon } = categoryMeta[cat];
          return (
            <div key={cat} className="mb-8 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: `${accent}14`, color: accent }}>
                  <CatIcon size={17} strokeWidth={1.9} />
                </div>
                <h3 className="text-sm font-bold tracking-widest uppercase" style={{ color: accent }}>{cat}</h3>
                <span className="text-xs text-[#5a5f6b]">({members.length})</span>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {members.map(m => (
                  <article
                    key={m.id}
                    className="group bg-[#f7f4ed] border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-4 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-11 h-11 rounded-sm flex items-center justify-center text-lg font-bold text-white shrink-0"
                        style={{ backgroundColor: accent }}
                        aria-hidden="true"
                      >
                        {m.name.replace(/^Dr(a)?\.?\s*/i, '').trim().split(/\s+/).map(word => word[0]).slice(0, 2).join('')}
                      </div>
                      {m.orcid && (
                        <a
                          href={`https://orcid.org/${m.orcid}`}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#5a5f6b] hover:text-[#006380]"
                          aria-label={`ORCID de ${m.name}`}
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <h4 className="font-bold text-[#1e1f26] leading-snug mb-1 group-hover:text-[#006380] transition-colors">{m.name}</h4>
                    <p className="text-xs font-semibold mb-2" style={{ color: accent }}>{m.role}</p>
                    <p className="text-xs text-[#5a5f6b] leading-relaxed mb-3 flex items-start gap-1.5">
                      <Building2 size={13} className="mt-0.5 shrink-0" />
                      {m.institution}
                    </p>
                    {m.researchArea && (
                      <p className="text-[11px] text-[#5a5f6b] leading-relaxed flex items-start gap-1.5">
                        <GraduationCap size={13} className="mt-0.5 shrink-0" />
                        {m.researchArea}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
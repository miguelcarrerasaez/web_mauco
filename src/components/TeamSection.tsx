import { Globe, GraduationCap, Building2, ExternalLink } from 'lucide-react';
import type { TeamMember, TeamCategory } from '@/types/mauco';

const team: TeamMember[] = [
  {
    id: 't-1',
    name: 'Dra. Catterina Ferreccio',
    role: 'Investigadora Principal',
    category: 'Dirección y liderazgo científico',
    institution: 'Pontificia Universidad Católica de Chile',
    researchArea: 'Epidemiología del cáncer y enfermedades crónicas',
  },
  {
    id: 't-2',
    name: 'Dr. Juan Carlos Roa',
    role: 'Jefe de Biobanco',
    category: 'Coordinación y equipo profesional',
    institution: 'Pontificia Universidad Católica de Chile',
    researchArea: 'Anatomía patológica y biobancos',
  },
  {
    id: 't-3',
    name: 'Dra. Sandra Cortés',
    role: 'Investigadora Asociada',
    category: 'Investigadores',
    institution: 'Pontificia Universidad Católica de Chile',
    researchArea: 'Salud ambiental y exposición a plaguicidas',
  },
  {
    id: 't-4',
    name: 'Dra. Claudia Bambs',
    role: 'Investigadora y Directora',
    category: 'Investigadores',
    institution: 'Universidad de Chile',
    researchArea: 'Salud cardiovascular',
  },
];

const categoryOrder: TeamCategory[] = [
  'Dirección y liderazgo científico',
  'Investigadores',
  'Coordinación y equipo profesional',
  'Colaboradores',
];

const categoryAccents: Record<TeamCategory, string> = {
  'Dirección y liderazgo científico': '#006380',
  'Investigadores': '#08b3e7',
  'Coordinación y equipo profesional': '#f08700',
  'Colaboradores': '#5a5f6b',
};

const grouped = categoryOrder
  .map(cat => ({ cat, members: team.filter(m => m.category === cat) }))
  .filter(group => group.members.length > 0);

export default function TeamSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-14">
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
          const accent = categoryAccents[cat];
          return (
            <div key={cat} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full" style={{ backgroundColor: accent }} />
                <h3 className="text-sm font-bold tracking-widest uppercase" style={{ color: accent }}>{cat}</h3>
                <span className="text-xs text-[#5a5f6b]">({members.length})</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {members.map(m => (
                  <article
                    key={m.id}
                    className="group bg-[#f7f4ed] border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-5 transition-all hover:shadow-md"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className="w-11 h-11 rounded-sm flex items-center justify-center text-lg font-bold text-white shrink-0"
                        style={{ backgroundColor: accent }}
                      >
                        {m.name.replace(/^Dr(a)?\.?\s*/i, '').trim().split(' ').map(w => w[0]).slice(0, 2).join('')}
                      </div>
                      {m.orcid && (
                        <a href={`https://orcid.org/${m.orcid}`} target="_blank" rel="noreferrer" className="text-[#5a5f6b] hover:text-[#006380]" aria-label={`ORCID de ${m.name}`}>
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
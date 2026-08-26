import { useMemo, useState } from 'react';
import { Search, BookOpen, FlaskConical, Dna, HeartPulse, Users, Wind, Brain, ArrowUpRight } from 'lucide-react';
import type { Publication } from '@/types/mauco';

const researchAreas = [
  { icon: HeartPulse, label: 'Cardiovascular', description: 'Factores de riesgo cardiometabólico y enfermedad cardiovascular.' },
  { icon: Dna, label: 'Genómica', description: 'Determinantes genéticos de enfermedades crónicas.' },
  { icon: Wind, label: 'Salud respiratoria', description: 'Función pulmonar y enfermedades respiratorias.' },
  { icon: Brain, label: 'Cáncer', description: 'Epidemiología y factores de riesgo oncológicos.' },
  { icon: Users, label: 'Salud mental', description: 'Bienestar mental y su relación con salud física.' },
  { icon: FlaskConical, label: 'Ambiente y exposición', description: 'Exposición ambiental y su impacto en salud.' },
];

const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'Study protocol for the Maule Cohort (MAUCO) of chronic diseases, Chile 2014-2024',
    authors: ['Ferreccio, C.', 'Roa, J.C.', 'Bambs, C.', 'Vives, A.', 'Corvalán, A.H.'],
    journal: 'BMC Public Health',
    year: 2016,
    doi: '10.1186/s12889-016-3047-8',
    researchAreas: ['Cardiovascular', 'Cáncer', 'Metabólico'],
  },
  {
    id: 'pub-2',
    title: 'Inflammatory profiles in women with gallstones at risk of developing gallbladder cancer',
    authors: ['Jackson, S.S.', 'Van De Wyngard, V.', 'Ferreccio, C.', 'Koshiol, J.'],
    journal: 'Scientific Reports',
    year: 2021,
    doi: '10.1038/s41598-021-83300-2',
    researchAreas: ['Cáncer'],
  },
  {
    id: 'pub-3',
    title: 'The association between walking pace and grip strength and all-cause mortality: MAUCO cohort',
    authors: ['Petermann-Rocha, F.', 'Parra-Soto, S.', 'Ferreccio, C.', 'Celis-Morales, C.'],
    journal: 'Maturitas',
    year: 2021,
    researchAreas: ['Cardiovascular', 'Envejecimiento'],
  },
  {
    id: 'pub-4',
    title: 'Processed meat consumption and associated factors in Chile: a cross-sectional study nested in the MAUCO cohort',
    authors: ['Ruedlinger, J.', 'Cid-Ossandón, V.', 'Ferreccio, C.'],
    journal: 'Frontiers in Public Health',
    year: 2020,
    researchAreas: ['Alimentación', 'Metabólico'],
  },
];

const years = Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a);
const areas = Array.from(new Set(publications.flatMap(p => p.researchAreas)));
export default function ResearchSection() {
  const [query, setQuery] = useState('');
  const [year, setYear] = useState('all');
  const [area, setArea] = useState('all');

  const filtered = useMemo(() => {
    return publications.filter(p => {
      const matchesQuery =
        query === '' ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.authors.some(a => a.toLowerCase().includes(query.toLowerCase())) ||
        p.journal.toLowerCase().includes(query.toLowerCase());
      const matchesYear = year === 'all' || p.year === Number(year);
      const matchesArea = area === 'all' || p.researchAreas.includes(area);
      return matchesQuery && matchesYear && matchesArea;
    });
  }, [query, year, area]);

  return (
    <section className="bg-[#f4efde] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Research areas */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Investigación</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">Áreas de investigación</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map(({ icon: Icon, label, description }) => (
              <div key={label} className="group bg-white border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-5 transition-all hover:shadow-md">
                <div className="w-10 h-10 bg-[#006380]/[0.08] text-[#006380] rounded-sm flex items-center justify-center mb-3 group-hover:bg-[#006380] group-hover:text-white transition-colors">
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-[#1e1f26] mb-1">{label}</h3>
                <p className="text-xs text-[#5a5f6b] leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
{/* Publications search */}
        <div>
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Publicaciones</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">Buscador de publicaciones</h2>
            <p className="mt-3 text-[#5a5f6b] leading-relaxed">Encuentre papers de la cohorte filtrando por año, área, autor o revista.</p>
          </div>

          {/* Filters */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            <div className="relative lg:col-span-2">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#5a5f6b]" />
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Buscar por título, autor o revista"
                className="w-full bg-white border border-[#e5e1d8] focus:border-[#006380] outline-none rounded-sm pl-10 pr-4 py-2.5 text-sm"
              />
            </div>
            <select
              value={year}
              onChange={e => setYear(e.target.value)}
              className="bg-white border border-[#e5e1d8] focus:border-[#006380] outline-none rounded-sm px-3 py-2.5 text-sm text-[#1e1f26]"
            >
              <option value="all">Año: Todos</option>
              {years.map(y => <option key={y} value={y}>Año: {y}</option>)}
            </select>
            <select
              value={area}
              onChange={e => setArea(e.target.value)}
              className="bg-white border border-[#e5e1d8] focus:border-[#006380] outline-none rounded-sm px-3 py-2.5 text-sm text-[#1e1f26]"
            >
              <option value="all">Área: Todas</option>
              {areas.map(a => <option key={a} value={a}>Área: {a}</option>)}
            </select>
          </div>
{/* Results */}
          <div className="space-y-4">
            {filtered.length === 0 && (
              <div className="bg-white border border-[#e5e1d8] rounded-sm p-8 text-center text-sm text-[#5a5f6b]">
                No se encontraron publicaciones con los criterios seleccionados.
              </div>
            )}
            {filtered.map(({ id, title, authors, journal, year: py, doi, researchAreas: ra }) => (
              <article key={id} className="group bg-white border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-6 transition-all hover:shadow-md">
                <h3 className="font-bold text-[#1e1f26] leading-snug mb-2 group-hover:text-[#006380] transition-colors">{title}</h3>
                <p className="text-sm text-[#5a5f6b] mb-2">{authors.join(', ')}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#5a5f6b]">
                  <span className="inline-flex items-center gap-1.5"><BookOpen size={13} /> {journal}</span>
                  <span>{py}</span>
                  {doi && (
                    <a href={`https://doi.org/${doi}`} target="_blank" rel="noreferrer" className="text-[#08b3e7] hover:underline inline-flex items-center gap-1">
                      DOI <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {ra.map(item => (
                    <span key={item} className="text-[11px] font-medium px-2 py-0.5 rounded-sm bg-[#006380]/[0.08] text-[#006380]">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
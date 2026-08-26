import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    category: 'Resultados',
    date: '18 agosto 2026',
    title: 'MAUCO publica resultados sobre prevalencia de diabetes tipo 2 en la Región del Maule',
    excerpt:
      'El equipo investigador presenta los primeros datos de seguimiento a diez años sobre enfermedades metabólicas en la cohorte rural-urbana del estudio.',
    image: 'https://images.pexels.com/photos/15831822/pexels-photo-15831822.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    alt: 'Scientist in laboratory',
  },
  {
    category: 'Comunidad',
    date: '5 agosto 2026',
    title: 'Más de 500 nuevos participantes se incorporan al estudio en la provincia de Linares',
    excerpt:
      'La campaña de reclutamiento en comunidades rurales de Linares supera las expectativas, sumando nuevas familias al seguimiento longitudinal de MAUCO.',
    image: 'https://images.pexels.com/photos/8248293/pexels-photo-8248293.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    alt: 'Healthcare worker with community member',
  },
  {
    category: 'Investigación',
    date: '21 julio 2026',
    title: 'Nuevo acuerdo de colaboración con la Universidad de Chile potencia las capacidades del biobanco',
    excerpt:
      'El convenio permite el procesamiento de biomuestras adicionales y amplía el análisis genómico de la cohorte a nivel nacional e internacional.',
    image: 'https://images.pexels.com/photos/8533040/pexels-photo-8533040.jpeg?auto=compress&cs=tinysrgb&h=400&w=700',
    alt: 'Medical research collaboration',
  },
];

const categoryColors: Record<string, string> = {
  Resultados: '#006380',
  Comunidad: '#f08700',
  Investigación: '#08b3e7',
};

export default function NewsSection() {
  return (
    <section className="bg-[#f4efde] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#f08700] uppercase">Noticias y Comunidad</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight">
              Últimos Avances e Impacto
            </h2>
            <p className="mt-3 text-[#5a5f6b] max-w-lg leading-relaxed">
              Resultados, hitos comunitarios y colaboraciones que marcan el avance de MAUCO y su impacto en salud pública.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-[#f08700] hover:text-[#006380] transition-colors group"
          >
            Ver todas las noticias
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* News grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {news.map(({ category, date, title, excerpt, image, alt }) => {
            const accentColor = categoryColors[category] ?? '#006380';
            return (
              <article
                key={title}
                className="group bg-white rounded-sm overflow-hidden border border-[#e5e1d8] hover:border-transparent hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#e5e1d8]">
                  <img
                    src={image}
                    alt={alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span
                    className="absolute bottom-3 left-3 text-[11px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-sm text-white"
                    style={{ backgroundColor: accentColor }}
                  >
                    {category}
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

                  <p className="text-sm text-[#5a5f6b] leading-relaxed flex-1">{excerpt}</p>

                  <div
                    className="inline-flex items-center gap-1.5 text-sm font-semibold mt-2 group-hover:gap-2.5 transition-all"
                    style={{ color: accentColor }}
                  >
                    Leer más
                    <ArrowRight size={13} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

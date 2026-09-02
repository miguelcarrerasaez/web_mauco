import { ArrowRight } from 'lucide-react';
import { aboutStory } from '@/data/maucoData';

export default function AboutSection() {
  return (
    <section className="bg-white border-b border-[#e5e1d8] py-16 md:py-24" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: story + milestones */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">{aboutStory.eyebrow}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight mb-5">
              {aboutStory.title}
            </h2>
            {aboutStory.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-[#5a5f6b] leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}

            {/* Milestones timeline */}
            <div className="relative pl-6 mt-8">
              <div className="absolute left-[7px] top-1 bottom-1 w-px bg-[#e5e1d8]" />
              <div className="space-y-5">
                {aboutStory.milestones.map(({ year, title, description }) => (
                  <div key={`${year}-${title}`} className="relative">
                    <span className="absolute -left-6 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[#006380] bg-white" />
                    <p className="text-xs font-bold tracking-widest text-[#f08700] uppercase mb-0.5">{year}</p>
                    <h3 className="font-bold text-[#1e1f26] text-sm mb-0.5">{title}</h3>
                    <p className="text-sm text-[#5a5f6b] leading-relaxed">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#cohorte"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#006380] hover:text-[#004c5f] transition-colors mt-8"
            >
              Conocer la metodología completa
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: institutional stats */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs font-bold tracking-widest text-[#5a5f6b] uppercase mb-4">
              La cohorte en números
            </p>
            <div className="grid grid-cols-2 gap-4">
              {aboutStory.stats.map(stat => (
                <div
                  key={stat.id}
                  className="bg-[#f4efde] border border-[#e5e1d8] rounded-sm p-6 text-center hover:border-[#006380] transition-colors"
                >
                  <div className="text-3xl md:text-4xl font-extrabold text-[#006380] tracking-tight">{stat.value}</div>
                  <div className="mt-1 text-xs font-medium text-[#5a5f6b] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#006380] rounded-sm p-6 text-white">
              <p className="text-sm font-semibold text-[#08b3e7] uppercase tracking-widest mb-2">Proyecto central</p>
              <p className="text-white/85 leading-relaxed text-sm">
                MAUCO es el proyecto central del Centro Avanzado de Enfermedades Crónicas (ACCDiS), con la
                participación de la Pontificia Universidad Católica de Chile, la Universidad de Chile y la
                Universidad Católica del Maule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
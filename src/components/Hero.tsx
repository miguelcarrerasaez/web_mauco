import { ArrowRight, ChevronsDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#006380]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 50%, #ffffff 1px, transparent 1px),
                            radial-gradient(circle at 75% 20%, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px, 60px 60px',
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#004c5f] via-[#006380] to-[#005570]" />

      {/* Decorative shapes */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#08b3e7] opacity-5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute right-20 bottom-0 w-64 h-64 bg-[#f08700] opacity-5 rounded-full translate-y-1/3" />
      <div className="absolute left-1/2 top-1/2 w-[800px] h-[800px] border border-white opacity-[0.04] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-white/10 border border-white/20 rounded-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#f08700] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Estudio de cohorte en curso · Molina, Región del Maule</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            MAUCO: Estudio de<br />
            <span className="text-[#08b3e7]">Cohorte del Maule</span>
          </h1>

          {/* Subtitle (bajada) */}
          <p className="text-lg md:text-xl text-white/85 leading-relaxed font-medium mb-5">
            Una cohorte poblacional para el estudio de las enfermedades crónicas y sus determinantes en Chile.
          </p>

          {/* Description */}
          <p className="text-white/70 leading-relaxed max-w-2xl mb-10">
            MAUCO es una cohorte poblacional prospectiva establecida en Molina, Región del Maule, Chile. Desde 2014,
            el estudio ha seguido a cerca de 10.000 personas, integrando información longitudinal de salud, mediciones
            clínicas, muestras biológicas y vinculación con registros de salud.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#cohorte"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#f08700] hover:bg-[#d97700] text-white font-semibold text-sm rounded-sm transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
            >
              Conocer la cohorte
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Hero footer metrics */}
          <div className="mt-14 pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <span className="text-xs tracking-widest uppercase text-white/40 font-medium">La cohorte</span>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <span className="text-sm text-white/80">
                <strong className="text-white font-bold">9.462</strong> participantes
              </span>
              <span className="text-sm text-white/80">
                <strong className="text-white font-bold">+10 años</strong> de seguimiento
              </span>
              <span className="text-sm text-white/80">
                <strong className="text-white font-bold">+430.000</strong> alícuotas almacenadas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-2 text-white/40">
        <ChevronsDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}

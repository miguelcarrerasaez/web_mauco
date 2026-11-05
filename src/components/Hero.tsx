import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#006380] py-16 md:py-20">
      {/* Immersive background image (real asset from public/) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/S-mauco4.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {/* Degradado overlay para garantizar legibilidad del texto blanco sobre la foto */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#006380]/95 via-[#006380]/80 to-transparent" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-white/10 border border-white/20 rounded-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#f08700] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Estudio de cohorte en curso · Molina, Región del Maule</span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
            MAUCO: Estudio de<br />
            <span className="text-[#08b3e7]">Cohorte del Maule</span>
          </h1>

          {/* Subtitle (bajada) */}
          <p className="text-base md:text-lg text-white/85 leading-relaxed font-medium mb-4">
            Una cohorte poblacional para el estudio de las enfermedades crónicas y sus determinantes en Chile.
          </p>

          {/* Description */}
          <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
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
          <div className="mt-8 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
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

    </section>
  );
}

import { ArrowRight, FlaskConical, BarChart3 } from 'lucide-react';

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-white/10 border border-white/20 rounded-sm backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#f08700] animate-pulse" />
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Estudio en curso · Región del Maule</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Datos de salud pública<br />
            <span className="text-[#08b3e7]">para el futuro</span><br />
            <span className="text-white/90">de Chile</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
            MAUCO es el mayor estudio de cohorte poblacional de Chile, siguiendo a más de 10.000 adultos 
            en la Región del Maule para comprender y prevenir las enfermedades crónicas no transmisibles 
            que más afectan a nuestra población.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#f08700] hover:bg-[#d97700] text-white font-semibold text-sm rounded-sm transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-0.5"
            >
              <FlaskConical size={16} />
              Descubrir cómo participar
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 text-white font-semibold text-sm rounded-sm transition-all duration-200 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <BarChart3 size={16} />
              Explorar catálogo de datos
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="mt-20 flex items-center gap-3">
            <div className="w-8 h-px bg-white/30" />
            <span className="text-white/40 text-xs tracking-widest uppercase font-medium">Scroll para explorar</span>
          </div>
        </div>
      </div>
    </section>
  );
}

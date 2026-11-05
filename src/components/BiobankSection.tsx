import { Boxes, ArrowRight, Dna, FlaskConical, Snowflake, ShieldCheck } from 'lucide-react';

const highlights = [
  { icon: FlaskConical, label: 'Suero y plasma' },
  { icon: Dna, label: 'ADN' },
  { icon: Snowflake, label: 'Almacenamiento -80°C' },
  { icon: ShieldCheck, label: 'Gestión ética y segura' },
];

export default function BiobankSection() {
  return (
    <section className="bg-[#006380] py-10 md:py-14 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#f08700] uppercase">Biobanco MAUCO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-5">
              Más de 430.000 alícuotas<br />a disposición de la ciencia
            </h2>
            <p className="text-white/70 leading-relaxed mb-6 max-w-xl">
              El biobanco de la cohorte almacena y gestiona muestras biológicas — suero, plasma, sangre y ADN — con
              estrictos estándares de calidad y trazabilidad, disponibles para investigación colaborativa bajo
              protocolos éticos.
            </p>
            <a
              href="#colaborar"
              className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#f08700] hover:bg-[#d97700] text-white font-semibold text-sm rounded-sm transition-all duration-200 shadow-lg shadow-black/20 hover:-translate-y-0.5"
            >
              <Boxes size={16} />
              Solicitar muestras biológicas
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: imagen real acompañante del biobanco */}
          <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 aspect-[4/5] group">
            <img
              src="/biobanco2.jpeg"
              alt="Biobanco MAUCO: laboratorio y muestras biológicas"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#006380]/90 via-[#006380]/40 to-transparent" />
            {/* Highlights como chips sobre la imagen */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {highlights.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-sm text-[11px] font-medium text-white">
                  <Icon size={12} className="text-[#08b3e7]" />
                  {label}
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-extrabold text-[#f08700] tracking-tight">430.000+</div>
              <div className="text-white text-sm font-medium mt-1 leading-tight">
                Alícuotas almacenadas bajo custodia ética
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
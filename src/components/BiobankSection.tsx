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

          {/* Right: highlights */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-white/[0.07] border border-white/15 rounded-sm p-5 text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-[#f08700] tracking-tight">430.000+</div>
              <div className="text-white/70 text-sm mt-1">Alícuotas almacenadas</div>
            </div>
            {highlights.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-sm p-4">
                <div className="w-9 h-9 bg-white/10 rounded-sm flex items-center justify-center text-[#08b3e7] shrink-0">
                  <Icon size={17} />
                </div>
                <span className="text-white/85 text-sm font-medium leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
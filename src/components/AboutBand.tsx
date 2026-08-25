import { Heart, Users, Stethoscope, Dna, ArrowRight } from 'lucide-react';

const areas = [
  { icon: Heart, label: 'Cardiovascular', color: '#006380' },
  { icon: Stethoscope, label: 'Metabólica', color: '#006380' },
  { icon: Dna, label: 'Genómica', color: '#006380' },
  { icon: Users, label: 'Salud Mental', color: '#006380' },
];

export default function AboutBand() {
  return (
    <section className="bg-white border-b border-[#e5e1d8] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Sobre el Estudio</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight mb-4">
              Una cohorte única<br />en América Latina
            </h2>
            <p className="text-[#5a5f6b] leading-relaxed mb-4">
              Desde 2010, MAUCO sigue a más de 10.000 adultos de la Región del Maule. Nuestros datos longitudinales 
              permiten estudiar la incidencia, evolución y factores de riesgo de las principales enfermedades crónicas 
              no transmisibles en una población real.
            </p>
            <p className="text-[#5a5f6b] leading-relaxed mb-8">
              El biobanco asociado almacena muestras biológicas — sangre, orina y tejidos — disponibles para 
              investigación colaborativa con estrictos protocolos éticos.
            </p>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#006380] hover:text-[#004c5f] transition-colors"
            >
              Conocer la metodología completa
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: research areas grid */}
          <div>
            <p className="text-xs font-bold tracking-widest text-[#5a5f6b] uppercase mb-4">Principales áreas de investigación</p>
            <div className="grid grid-cols-2 gap-4">
              {areas.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="group flex items-center gap-3 p-4 border border-[#e5e1d8] hover:border-[#006380] rounded-sm cursor-pointer transition-all hover:shadow-md"
                >
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${color}14`, color }}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <span className="font-semibold text-sm text-[#1e1f26] group-hover:text-[#006380] transition-colors">{label}</span>
                </div>
              ))}
              <div className="col-span-2 p-4 border border-dashed border-[#e5e1d8] rounded-sm flex items-center justify-between">
                <span className="text-sm text-[#5a5f6b]">+6 líneas adicionales</span>
                <a href="#" className="text-xs font-semibold text-[#08b3e7] hover:underline">Ver todas</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

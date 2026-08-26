import { ArrowRight, Landmark, Building2, ShieldCheck } from 'lucide-react';

const pillars = [
  { icon: Landmark, title: 'Infraestructura científica', description: 'Una plataforma longitudinal que integra datos, muestras y registros.' },
  { icon: Building2, title: 'Colaboración', description: 'Red nacional e internacional de investigación en salud pública.' },
  { icon: ShieldCheck, title: 'Gobernanza ética', description: 'Acceso regulado, confidencialidad y uso responsable de los datos.' },
];

export default function AboutBand() {
  return (
    <section className="bg-white border-b border-[#e5e1d8] py-16 md:py-20" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Sobre MAUCO</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight mb-4">
              De una cohorte poblacional a una infraestructura científica
            </h2>
            <p className="text-[#5a5f6b] leading-relaxed mb-4">
              MAUCO nació como un estudio de cohorte para comprender las enfermedades crónicas en la población chilena
              y se consolidó como una infraestructura científica de largo plazo al servicio de la investigación en salud.
            </p>
            <p className="text-[#5a5f6b] leading-relaxed mb-8">
              Sus datos longitudinales, muestras biológicas y vinculación con registros de salud permiten abordar
              preguntas de salud pública que van desde la exposición ambiental hasta los determinantes del envejecimiento.
            </p>
            <a
              href="#cohorte"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-[#006380] hover:text-[#004c5f] transition-colors"
            >
              Conocer la metodología completa
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Right: pillars */}
          <div className="space-y-4">
            {pillars.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex items-start gap-4 p-5 border border-[#e5e1d8] hover:border-[#006380] rounded-sm transition-all hover:shadow-md cursor-default"
              >
                <div className="w-11 h-11 rounded-sm flex items-center justify-center bg-[#006380]/[0.08] text-[#006380] shrink-0 group-hover:bg-[#006380] group-hover:text-white transition-colors">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1e1f26] mb-1">{title}</h3>
                  <p className="text-sm text-[#5a5f6b] leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

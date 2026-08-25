import { ArrowRight, ClipboardList, Calendar, CheckCircle2 } from 'lucide-react';

const steps = [
  { icon: ClipboardList, step: '01', title: 'Regístrate', desc: 'Completa el formulario de interés en línea o llámanos.' },
  { icon: Calendar, step: '02', title: 'Agenda tu visita', desc: 'Coordinamos una cita en el centro de salud más cercano a ti.' },
  { icon: CheckCircle2, step: '03', title: 'Participa', desc: 'Realizamos exámenes clínicos y una encuesta sobre tu salud y estilo de vida.' },
];

export default function ParticipantsSection() {
  return (
    <section className="bg-[#006380] py-20 md:py-28 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#f08700] uppercase">Para Participantes</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tu participación salva vidas
          </h2>
          <p className="text-white/70 max-w-xl mx-auto leading-relaxed">
            Unirte a MAUCO es un acto de generosidad que beneficia a millones de chilenos. En tres pasos sencillos puedes contribuir a la ciencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {steps.map(({ icon: Icon, step, title, desc }) => (
            <div key={step} className="group bg-white/10 backdrop-blur-sm border border-white/15 hover:bg-white/15 rounded-sm p-7 transition-all duration-300 hover:shadow-xl cursor-pointer">
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 bg-[#f08700]/20 rounded-sm flex items-center justify-center text-[#f08700]">
                  <Icon size={20} strokeWidth={1.8} />
                </div>
                <span className="text-4xl font-black text-white/10 leading-none">{step}</span>
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#f08700] hover:bg-[#d97700] text-white font-bold text-sm rounded-sm transition-all duration-200 shadow-lg shadow-black/20 hover:shadow-xl hover:-translate-y-0.5"
          >
            Quiero participar en MAUCO
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

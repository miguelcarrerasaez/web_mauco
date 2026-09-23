import { ListChecks, Users, Target, ClipboardList, HeartPulse, TestTube, RefreshCcw, type LucideIcon } from 'lucide-react';
import { studyInfo } from '@/data/maucoData';
import type { StudySection } from '@/types/mauco';

type PanelKey = keyof typeof studyInfo;

const panels: { key: PanelKey; title: string; icon: LucideIcon; accent: string; description: string }[] = [
  {
    key: 'metodologia',
    title: 'Metodología',
    icon: ListChecks,
    accent: '#006380',
    description: 'Cómo se realizan las evaluaciones y el seguimiento de la cohorte.',
  },
  {
    key: 'poblacion',
    title: 'Población objetivo',
    icon: Users,
    accent: '#f08700',
    description: 'Quiénes participan y cómo se conformó la cohorte.',
  },
  {
    key: 'objetivos',
    title: 'Objetivos del estudio',
    icon: Target,
    accent: '#08b3e7',
    description: 'Qué preguntas de salud pública busca responder MAUCO.',
  },
];

const methodologyIcons = [ClipboardList, HeartPulse, TestTube, RefreshCcw];

export default function StudyInfoSection() {
  return (
    <section className="bg-[#f4efde] py-10 md:py-12" id="info-estudio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">Información general del estudio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
            Metodología, población y objetivos
          </h2>
          <p className="mt-3 text-[#5a5f6b] leading-relaxed">
            Detalle del diseño de la cohorte y de lo que implica la participación en cada evaluación.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-start">
          {panels.map(({ key, title, icon: PanelIcon, accent, description }) => (
            <div
              key={key}
              className="bg-white border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-5 transition-all hover:shadow-md"
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-3"
                style={{ backgroundColor: `${accent}14`, color: accent }}
              >
                <PanelIcon size={20} strokeWidth={1.9} />
              </div>
              <h3 className="font-bold text-[#1e1f26] text-lg mb-1">{title}</h3>
              <p className="text-xs text-[#5a5f6b] leading-relaxed mb-5">{description}</p>

              <div className="space-y-4">
                {studyInfo[key].map((section: StudySection, index: number) => (
                  <div key={section.id}>
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className="w-6 h-6 rounded-sm flex items-center justify-center text-[11px] font-bold text-white shrink-0"
                        style={{ backgroundColor: accent }}
                      >
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h4 className="font-bold text-sm text-[#1e1f26]">
                        {section.title}
                      </h4>
                    </div>
                    <ul className="space-y-1.5 pl-8">
                      {section.content.map((item, i) => (
                        <li key={i} className="text-sm text-[#5a5f6b] leading-relaxed flex items-start gap-2">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Solo en el panel de metodología se muestran los iconos de pasos */}
              {key === 'metodologia' && (
                <div className="mt-5 flex items-center gap-2 pt-4 border-t border-[#e5e1d8]">
                  {methodologyIcons.map((StepIcon, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-sm flex items-center justify-center"
                      style={{ backgroundColor: `${accent}10`, color: accent }}
                    >
                      <StepIcon size={15} strokeWidth={1.9} />
                    </div>
                  ))}
                  <span className="ml-1 text-[11px] text-[#5a5f6b]">Cuestionario → Examen → Laboratorio → Seguimiento</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
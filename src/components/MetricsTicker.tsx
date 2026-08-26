import {
  Users, CalendarDays, Clock, FlaskConical, Activity, Wind, HeartPulse,
  Database, Dna, Stethoscope, Building2, type LucideIcon,
} from 'lucide-react';
import type { Metric } from '@/types/mauco';

type MetricWithIcon = Omit<Metric, 'icon' | 'note'> & { icon: LucideIcon; accent?: string };

const metrics: MetricWithIcon[] = [
  { id: 'participants', value: '9.462', label: 'Participantes incorporados', accent: '#006380', icon: Users },
  { id: 'start', value: '2014', label: 'Inicio del estudio', accent: '#f08700', icon: CalendarDays },
  { id: 'followup-years', value: '12 años', label: 'De seguimiento longitudinal', accent: '#08b3e7', icon: Clock },
  { id: 'lab-basal', value: '9.206', label: 'Participantes con evaluación de laboratorio basal', accent: '#006380', icon: FlaskConical },
  { id: 'ultrasounds', value: '9.213', label: 'Ecografías realizadas (basal)', accent: '#08b3e7', icon: Activity },
  { id: 'spirometry', value: '9.379', label: 'Espirometrías (basal)', accent: '#f08700', icon: Wind },
  { id: 'ecg', value: '6.426', label: 'Electrocardiogramas (basal)', accent: '#006380', icon: HeartPulse },
  { id: 'aliquots', value: '430.000+', label: 'Alícuotas almacenadas', icon: Stethoscope },
  { id: 'dna-aliquots', value: '11.800+', label: 'Alícuotas de ADN', icon: Dna },
  { id: 'dna-participants', value: '3.900+', label: 'Participantes con ADN', accent: '#f08700', icon: Building2 },
  { id: 'hospitalizations', value: '3.600+', label: 'Hospitalizaciones identificadas*', accent: '#08b3e7', icon: Database },
  { id: 'deaths', value: '400+', label: 'Defunciones identificadas*', accent: '#006380', icon: Activity },
];

export default function MetricsTicker() {
  return (
    <section className="bg-[#f4efde] border-y border-[#e5e1d8]" id="cifras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Section header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#006380] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">MAUCO en cifras</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight mb-4">
            Una plataforma longitudinal para la investigación en salud poblacional
          </h2>
          <p className="text-[#5a5f6b] leading-relaxed">
            MAUCO fue creado para estudiar la historia natural y los determinantes de las enfermedades crónicas en la
            población chilena. Los participantes fueron reclutados en la comuna de Molina (2014-2020).
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {metrics.map(({ id, icon: Icon, value, label, accent = '#006380' }) => (
            <div key={id} className="flex flex-col bg-white rounded-sm border border-[#e5e1d8] p-5 md:p-6 gap-3 group hover:border-[#006380] hover:shadow-md transition-all">
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${accent}14`, color: accent }}
              >
                <Icon size={19} strokeWidth={2} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#1e1f26] tracking-tight">{value}</div>
                <div className="text-xs font-medium text-[#5a5f6b] mt-1 leading-snug">{label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-xs text-ink-muted leading-relaxed max-w-3xl">
          * Las cifras dinámicas deberán indicar siempre la fecha de la última actualización.
        </p>
      </div>
    </section>
  );
}

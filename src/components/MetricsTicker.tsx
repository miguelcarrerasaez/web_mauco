import { Users, Activity, BookOpen, Microscope, TrendingUp } from 'lucide-react';

const metrics = [
  { icon: Users, value: '10.000+', label: 'Participantes Enrolados', color: '#006380' },
  { icon: Activity, value: '4.000+', label: 'Seguimientos Completados', color: '#f08700' },
  { icon: BookOpen, value: '50+', label: 'Publicaciones Científicas', color: '#08b3e7' },
  { icon: Microscope, value: '15', label: 'Años de Seguimiento', color: '#006380' },
  { icon: TrendingUp, value: '12+', label: 'Instituciones Colaboradoras', color: '#f08700' },
];

export default function MetricsTicker() {
  return (
    <section className="bg-[#f4efde] border-y border-[#e5e1d8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {metrics.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2.5 group">
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${color}18`, color }}
              >
                <Icon size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[#1e1f26] tracking-tight">{value}</div>
                <div className="text-xs font-medium text-[#5a5f6b] mt-0.5 leading-tight">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

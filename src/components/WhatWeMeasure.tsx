import { Activity, Apple, Ruler, HeartPulse, Wind, TestTube, ClipboardList, HeartHandshake, Boxes, type LucideIcon } from 'lucide-react';
import type { MeasurementCategory } from '@/types/mauco';

type CategoryWithIcon = MeasurementCategory & { icon: LucideIcon; accent: string };

const categories: CategoryWithIcon[] = [
  {
    id: 'demograficas',
    title: 'Características demográficas',
    description: 'Sexo, edad, educación, ocupación y composición del hogar.',
    tags: ['Edad', 'Sexo', 'Nivel educacional', 'Ocupación'],
    icon: Activity,
    accent: '#006380',
  },
  {
    id: 'estilos-vida',
    title: 'Estilos de vida',
    description: 'Hábitos que influyen en el riesgo de enfermedades crónicas.',
    tags: ['Tabaco', 'Alcohol', 'Sueño', 'Sedentarismo'],
    icon: Apple,
    accent: '#f08700',
  },
  {
    id: 'antropometria',
    title: 'Antropometría',
    description: 'Mediciones corporales para evaluar composición y estado nutricional.',
    tags: ['Peso', 'Talla', 'IMC', 'Cintura'],
    icon: Ruler,
    accent: '#08b3e7',
  },
  {
    id: 'cardiovascular',
    title: 'Salud cardiovascular',
    description: 'Indicadores de función y riesgo cardiovascular.',
    tags: ['Presión arterial', 'ECG', 'Perfil lipídico'],
    icon: HeartPulse,
    accent: '#006380',
  },
  {
    id: 'respiratoria',
    title: 'Salud respiratoria',
    description: 'Función pulmonar y síntomas respiratorios.',
    tags: ['Espirometría', 'Síntomas', 'Fumadores'],
    icon: Wind,
    accent: '#08b3e7',
  },
  {
    id: 'imagenes',
    title: 'Imágenes',
    description: 'Métodos de imagen que complementan la caracterización clínica.',
    tags: ['Ecografía', 'Imágenes basales'],
    icon: Activity,
    accent: '#f08700',
  },
  {
    id: 'biomarcadores',
    title: 'Biomarcadores',
    description: 'Mediciones de laboratorio de marcadores metabólicos y genéticos.',
    tags: ['Glicemia', 'ADN', 'Perfil lipídico'],
    icon: TestTube,
    accent: '#006380',
  },
  {
    id: 'antecedentes',
    title: 'Antecedentes',
    description: 'Historia médica personal y familiar relevante.',
    tags: ['Enfermedades', 'Medicamentos', 'Antecedentes familiares'],
    icon: ClipboardList,
    accent: '#08b3e7',
  },
  {
    id: 'eventos-salud',
    title: 'Eventos de salud',
    description: 'Hospitalizaciones, diagnósticos y mortalidad identificados en el seguimiento.',
    tags: ['Hospitalización', 'Cáncer', 'Mortalidad'],
    icon: HeartHandshake,
    accent: '#f08700',
  },
  {
    id: 'muestras',
    title: 'Muestras biológicas',
    description: 'Material biológico almacenado en el biobanco para investigación.',
    tags: ['Suero', 'Plasma', 'Sangre', 'ADN'],
    icon: Boxes,
    accent: '#006380',
  },
];

export default function WhatWeMeasure() {
  return (
    <section className="bg-[#f4efde] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-[#08b3e7] rounded-full" />
            <span className="text-xs font-bold tracking-widest text-[#08b3e7] uppercase">¿Qué medimos?</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e1f26] tracking-tight leading-tight">
            Una cohorte profundamente caracterizada
          </h2>
          <p className="mt-3 text-[#5a5f6b] leading-relaxed">
            La cohorte integra múltiples dominios de medición para responder preguntas complejas sobre enfermedades crónicas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ id, icon: Icon, title, description, tags, accent }) => (
            <article
              key={id}
              className="group bg-white border border-[#e5e1d8] hover:border-[#006380] rounded-sm p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${accent}14`, color: accent }}
              >
                <Icon size={20} strokeWidth={1.9} />
              </div>
              <div>
                <h3 className="font-bold text-[#1e1f26] text-base mb-2">{title}</h3>
                <p className="text-sm text-[#5a5f6b] leading-relaxed">{description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {tags.map(tag => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-sm"
                    style={{ color: accent, backgroundColor: `${accent}12` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
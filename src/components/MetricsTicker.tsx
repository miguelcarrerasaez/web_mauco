import { Users, Clock } from 'lucide-react';

export default function MetricsTicker() {
  return (
    <section className="bg-[#f4efde] border-y border-[#e5e1d8]" id="cifras">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* Section header */}
        <div className="max-w-3xl mb-10">
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

        {/* Bento Grid de métricas (tarjetas asimétricas con imágenes reales) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          {/* 1. Tarjeta destacada: 94,6% de enrolados */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 bg-[#f4efde] border border-[#e5e1d8] rounded-sm p-6 md:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-5 bg-[#f08700] rounded-full" />
              <span className="text-xs font-bold tracking-widest text-[#006380] uppercase">Enrolamiento de la cohorte</span>
            </div>
            <div className="text-5xl md:text-6xl font-extrabold text-[#1e1f26] tracking-tight mb-1">94,6%</div>
            <p className="text-[#5a5f6b] text-sm font-medium leading-relaxed mb-6 flex-1">
              de la meta de 10.000 participantes incorporados a la cohorte poblacional de Molina, Región del Maule.
            </p>
            <div className="flex w-full items-end gap-3">
              <div className="flex-1 h-2 bg-[#e7e0cf] rounded-full overflow-hidden border border-[#d8d0bd]/60">
                <div className="h-full w-[94.6%] bg-[#f08700]" />
              </div>
              <span className="text-xs font-bold text-[#006380] shrink-0">94,6%</span>
            </div>
          </div>

          {/* 2. Tarjeta biobanco (imagen real) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-sm bg-[#1e1f26]">
            <img
              src="/biobanco1.jpg"
              alt="Biobanco MAUCO: laboratorio y muestras biológicas"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f26]/95 via-[#1e1f26]/50 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#f08700]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Biobanco</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
              <div className="text-4xl md:text-5xl font-extrabold text-[#f08700] tracking-tight">430.000+</div>
              <div className="text-white text-sm font-medium mt-1 leading-tight">
                Alícuotas biológicas almacenadas bajo custodia ética
              </div>
            </div>
          </div>
          {/* 3. Tarjeta equipo en terreno (imagen real) */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1 relative overflow-hidden rounded-sm bg-[#1e1f26]">
            <img
              src="/equipo3.jpeg"
              alt="Equipo de terreno MAUCO: profesionales en campo"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1e1f26]/90 via-[#1e1f26]/40 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#006380]/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">Equipo de terreno</span>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-extrabold text-white tracking-tight">
                Comunidad y profesionales en terreno
              </h3>
              <div className="text-white/80 text-sm mt-1">Molina, Región del Maule</div>
            </div>
          </div>

          {/* 4. Tarjeta secundaria: desglose de género */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 lg:row-span-1 bg-white border border-[#e5e1d8] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-4">
              <Users size={16} className="text-[#006380]" />
              <h3 className="text-sm font-bold text-[#1e1f26]">Distribución por género</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f4efde] rounded-sm p-3 text-center">
                <div className="text-xl font-extrabold text-[#006380] tracking-tight">54,5%</div>
                <div className="text-[10px] font-medium text-[#5a5f6b] uppercase tracking-widest">Mujeres</div>
              </div>
              <div className="bg-[#f4efde] rounded-sm p-3 text-center">
                <div className="text-xl font-extrabold text-[#006380] tracking-tight">45,5%</div>
                <div className="text-[10px] font-medium text-[#5a5f6b] uppercase tracking-widest">Hombres</div>
              </div>
            </div>
          </div>

          {/* 5. Tarjeta secundaria: seguimiento a 10 años */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-1 lg:row-span-1 bg-white border border-[#e5e1d8] rounded-sm p-5">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="text-[#006380]" />
              <h3 className="text-sm font-bold text-[#1e1f26]">Seguimiento a 10 años</h3>
            </div>
            <div className="text-4xl font-extrabold text-[#1e1f26] tracking-tight">+10 años</div>
            <p className="text-[#5a5f6b] text-sm mt-2 leading-relaxed">
              Seguimiento longitudinal de la salud de los participantes.
            </p>
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs text-[#5a5f6b] leading-relaxed max-w-3xl">
          * Las cifras dinámicas deberán indicar siempre la fecha de la última actualización.
        </p>
      </div>
    </section>
  );
}

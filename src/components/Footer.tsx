import { Phone, Mail, MapPin, ExternalLink, Shield, FileText, Lock, ChevronRight } from 'lucide-react';

const participantLinks = [
  { label: 'Cómo unirme al estudio', href: '#' },
  { label: 'Mi salud y mis datos', href: '#' },
  { label: 'Preguntas frecuentes', href: '#' },
  { label: 'Retirar mi participación', href: '#' },
];

const researcherLinks = [
  { label: 'Portal de datos MAUCO', href: '#', external: true },
  { label: 'Solicitar acceso a muestras', href: '#' },
  { label: 'Publicaciones y reportes', href: '#' },
  { label: 'Convenios de colaboración', href: '#' },
];

const policyLinks = [
  { icon: Shield, label: 'Política de Privacidad', href: '#' },
  { icon: FileText, label: 'Términos de Uso', href: '#' },
  { icon: Lock, label: 'Protección de Datos', href: '#' },
  { icon: FileText, label: 'Comité de Ética', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e1f26] text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-[#006380] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-base">M</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg tracking-tight">MAUCO</div>
                <div className="text-[10px] text-white/50 tracking-widest uppercase font-medium">Maule Cohort Study</div>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-6">
              Estudio poblacional de largo plazo en la Región del Maule, Chile. Generando evidencia para políticas de salud pública desde 2010.
            </p>

            {/* Contact info */}
            <div className="space-y-2.5">
              <a href="tel:+56712345678" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Phone size={14} className="mt-0.5 shrink-0 text-[#f08700] group-hover:text-[#f08700]" />
                <span>+56 71 234 5678</span>
              </a>
              <a href="mailto:contacto@mauco.cl" className="flex items-start gap-2.5 text-sm text-white/60 hover:text-white transition-colors group">
                <Mail size={14} className="mt-0.5 shrink-0 text-[#f08700] group-hover:text-[#f08700]" />
                <span>contacto@mauco.cl</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/60">
                <MapPin size={14} className="mt-0.5 shrink-0 text-[#f08700]" />
                <span>Universidad de Talca, Región del Maule, Chile</span>
              </div>
            </div>
          </div>

          {/* Participants column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#f08700]" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#f08700]">Para Participantes</h3>
            </div>
            <ul className="space-y-2.5">
              {participantLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group">
                    <ChevronRight size={12} className="text-[#f08700] transition-transform group-hover:translate-x-0.5" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-[#f08700]/10 border border-[#f08700]/20 rounded-sm">
              <p className="text-xs text-white/60 leading-relaxed">
                <span className="text-[#f08700] font-semibold block mb-1">Línea de atención participantes</span>
                Lunes a viernes 9:00–17:00 hrs<br />
                +56 71 234 5679
              </p>
            </div>
          </div>

          {/* Researchers column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-[#08b3e7]" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#08b3e7]">Para Investigadores</h3>
            </div>
            <ul className="space-y-2.5">
              {researcherLinks.map(({ label, href, external }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-1.5 text-sm text-white/60 hover:text-white transition-colors group">
                    <ChevronRight size={12} className="text-[#08b3e7] transition-transform group-hover:translate-x-0.5" />
                    {label}
                    {external && <ExternalLink size={10} className="text-white/30 ml-0.5" />}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#08b3e7] hover:bg-[#07a2d3] text-white text-xs font-semibold rounded-sm transition-colors"
              >
                Acceder al Portal de Datos
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Policies column */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <h3 className="text-xs font-bold tracking-widest uppercase text-white/50">Políticas y Privacidad</h3>
            </div>
            <ul className="space-y-2.5">
              {policyLinks.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a href={href} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group">
                    <Icon size={13} className="text-white/30 group-hover:text-white/60 transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-sm">
              <p className="text-xs text-white/50 leading-relaxed">
                Este estudio cuenta con aprobación del Comité Ético Científico de la Universidad de Talca. 
                Todos los datos se procesan conforme a la Ley 19.628 y el RGPD.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © 2026 MAUCO — Maule Cohort Study. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-xs">Financiado por ANID · FONDECYT</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <span className="text-white/40 text-xs">Estudio activo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

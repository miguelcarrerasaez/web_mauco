import { useState, useEffect } from 'react';
import { Search, MessageSquare, Database, Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      {/* Top utility bar */}
      <div className="bg-[#f4efde] border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-9 text-sm">
          <span className="text-[#5a5f6b] font-medium tracking-wide text-xs">MAUCO — Estudio Maule Cohort · Talca, Chile</span>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-[#5a5f6b] hover:text-[#006380] transition-colors">
              <Search size={13} />
              <span className="hidden sm:inline">Buscar</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[#5a5f6b] hover:text-[#006380] transition-colors">
              <MessageSquare size={13} />
              <span className="hidden sm:inline">Contacto</span>
            </a>
            <a href="#" className="flex items-center gap-1.5 text-[#5a5f6b] hover:text-[#006380] transition-colors font-medium">
              <Database size={13} />
              <span>Portal de Datos</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white border-b border-[#e5e1d8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 bg-[#006380] rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-base tracking-tight">M</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[#006380] text-lg tracking-tight">MAUCO</div>
              <div className="text-[10px] text-[#5a5f6b] tracking-widest uppercase font-medium -mt-0.5 hidden sm:block">Maule Cohort Study</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#1e1f26] hover:text-[#006380] transition-colors rounded"
                onClick={() => setStudyOpen(v => !v)}
              >
                Sobre el Estudio
                <ChevronDown size={14} className="text-[#5a5f6b] group-hover:text-[#006380] transition-transform group-hover:rotate-180" />
              </button>
              <div className={`absolute top-full left-0 mt-1 w-56 bg-white shadow-xl border border-[#e5e1d8] rounded-sm py-1 transition-all duration-150 ${studyOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'}`}>
                {['Objetivos y metodología', 'Equipo investigador', 'Historia del estudio', 'Comité ético'].map(item => (
                  <a key={item} href="#" className="block px-4 py-2.5 text-sm text-[#1e1f26] hover:bg-[#f4efde] hover:text-[#006380] transition-colors">{item}</a>
                ))}
              </div>
            </div>
            <a href="#" className="px-4 py-2 text-sm font-medium text-[#1e1f26] hover:text-[#006380] transition-colors rounded">Noticias</a>
          </nav>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#f08700] hover:bg-[#d97700] transition-colors rounded-sm shadow-sm"
            >
              Soy Participante
            </a>
            <a
              href="#"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#08b3e7] hover:bg-[#07a2d3] transition-colors rounded-sm shadow-sm"
            >
              Soy Investigador
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1e1f26] hover:text-[#006380] transition-colors"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Menú"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-[#e5e1d8] shadow-lg">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block py-2.5 text-sm font-medium text-[#1e1f26] border-b border-[#e5e1d8]">Sobre el Estudio</a>
            <a href="#" className="block py-2.5 text-sm font-medium text-[#1e1f26] border-b border-[#e5e1d8]">Noticias</a>
            <div className="flex flex-col gap-2 pt-2">
              <a href="#" className="w-full text-center py-3 text-sm font-semibold text-white bg-[#f08700] rounded-sm">Soy Participante</a>
              <a href="#" className="w-full text-center py-3 text-sm font-semibold text-white bg-[#08b3e7] rounded-sm">Soy Investigador</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from 'react';
import { Search, MessageSquare, Database, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Conocer la cohorte', href: '#cohorte' },
  { label: 'Recursos para investigadores', href: '#recursos' },
  { label: 'Colaborar con MAUCO', href: '#colaborar' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          <span className="text-[#5a5f6b] font-medium tracking-wide text-xs">MAUCO — Estudio Maule Cohort · Región del Maule, Chile</span>
          <div className="flex items-center gap-5">
            <a href="#" className="flex items-center gap-1.5 text-[#5a5f6b] hover:text-[#006380] transition-colors">
              <Search size={13} />
              <span className="hidden sm:inline">Buscar</span>
            </a>
            <a href="#contacto" className="flex items-center gap-1.5 text-[#5a5f6b] hover:text-[#006380] transition-colors">
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
            <img
              src="/mauco-logo.jpeg"
              alt="MAUCO — Estudio de Cohorte del Maule"
              className="h-10 w-auto object-contain"
            />
            <div className="leading-tight">
              <div className="font-bold text-[#006380] text-lg tracking-tight">MAUCO</div>
              <div className="text-[10px] text-[#5a5f6b] tracking-widest uppercase font-medium -mt-0.5 hidden sm:block">Maule Cohort Study</div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#1e1f26] hover:text-[#006380] transition-colors rounded"
              >
                {link.label}
              </a>
            ))}
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
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="block py-2.5 text-sm font-medium text-[#1e1f26] border-b border-[#e5e1d8]">
                {link.label}
              </a>
            ))}
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
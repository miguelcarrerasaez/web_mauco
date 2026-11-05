import React, { useState } from 'react';
import { Search, Menu, X, ChevronDown, Database, Users, BookOpen, ShieldCheck, Phone } from 'lucide-react';
import { ActiveView } from '../types/mauco';

interface HeaderProps {
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeView, setActiveView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e5e1d8] shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-[#1e1f26] text-white text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="text-gray-300">Estudio de Cohorte del Maule · UC Chile</span>
            <span className="hidden md:inline-block text-[#08b3e7]">● Biobanco Activo</span>
          </div>
          <div className="flex items-center space-x-4">
            <a 
              href="https://mauco-redcap.facultadmedicina.uc.cl/surveys/?s=FPR4YDLDJL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#08b3e7] transition-colors flex items-center gap-1"
            >
              <Database className="w-3 h-3" /> Portal REDCap
            </a>
            <button onClick={() => setActiveView('participantes')} className="hover:text-[#f08700] transition-colors">
              Contacto
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => { setActiveView('home'); setMobileMenuOpen(false); }}
          className="flex items-center space-x-3 text-left focus:outline-none"
        >
          <img src="/mauco-logo.jpeg" alt="MAUCO Logo" className="h-12 w-auto object-contain" />
          <div className="hidden sm:block">
            <span className="block font-bold text-[#006380] text-lg leading-none tracking-tight">MAUCO</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Maule Cohort Study</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <button 
            onClick={() => setActiveView('home')} 
            className={`hover:text-[#006380] transition-colors ${activeView === 'home' ? 'text-[#006380] font-bold border-b-2 border-[#006380] py-6' : ''}`}
          >
            Inicio
          </button>

          {/* Mega Dropdown Investigadores */}
          <div className="relative group">
            <button 
              onClick={() => setActiveView('investigadores')}
              className={`flex items-center gap-1 hover:text-[#006380] py-6 ${activeView === 'investigadores' || activeView === 'publicaciones' ? 'text-[#006380] font-bold border-b-2 border-[#006380]' : ''}`}
            >
              Investigadores <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 w-64 bg-white border border-[#e5e1d8] shadow-lg rounded-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
              <button 
                onClick={() => setActiveView('investigadores')}
                className="w-full text-left px-3 py-2 text-xs hover:bg-[#f4efde] rounded-sm flex items-center gap-2"
              >
                <Database className="w-4 h-4 text-[#08b3e7]" /> Catálogo de Datos & Muestras
              </button>
              <button 
                onClick={() => setActiveView('publicaciones')}
                className="w-full text-left px-3 py-2 text-xs hover:bg-[#f4efde] rounded-sm flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-[#006380]" /> Repositorio de Publicaciones
              </button>
              <button 
                onClick={() => setActiveView('subestudios')}
                className="w-full text-left px-3 py-2 text-xs hover:bg-[#f4efde] rounded-sm flex items-center gap-2"
              >
                <Users className="w-4 h-4 text-[#006380]" /> Sub-estudios Anidados
              </button>
            </div>
          </div>

          {/* Dropdown Participantes */}
          <button 
            onClick={() => setActiveView('participantes')}
            className={`hover:text-[#006380] transition-colors ${activeView === 'participantes' ? 'text-[#006380] font-bold border-b-2 border-[#006380] py-6' : ''}`}
          >
            Participantes & Comunidad
          </button>
        </nav>

        {/* Dual CTAs (Desktop) */}
        <div className="hidden lg:flex items-center space-x-3">
          <button 
            onClick={() => setActiveView('participantes')}
            className="bg-[#f08700] hover:bg-[#d67800] text-white px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Soy Participante
          </button>
          <button 
            onClick={() => setActiveView('investigadores')}
            className="bg-[#006380] hover:bg-[#004c5f] text-white border border-[#08b3e7] px-4 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
          >
            Soy Investigador/a
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#006380]"
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e5e1d8] px-4 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-2">
            <button 
              onClick={() => { setActiveView('home'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium border-b border-gray-100"
            >
              Inicio
            </button>
            <button 
              onClick={() => { setActiveView('investigadores'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium border-b border-gray-100 text-[#006380]"
            >
              Portal Investigadores (Datos & Muestras)
            </button>
            <button 
              onClick={() => { setActiveView('publicaciones'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium border-b border-gray-100 pl-4 text-sm text-gray-600"
            >
              └ Publicaciones Científicas
            </button>
            <button 
              onClick={() => { setActiveView('participantes'); setMobileMenuOpen(false); }}
              className="text-left py-2 font-medium border-b border-gray-100 text-[#f08700]"
            >
              Sección Participantes & FAQ
            </button>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <button 
              onClick={() => { setActiveView('participantes'); setMobileMenuOpen(false); }}
              className="w-full bg-[#f08700] text-white py-3 font-bold rounded-sm text-xs uppercase"
            >
              Soy Participante
            </button>
            <button 
              onClick={() => { setActiveView('investigadores'); setMobileMenuOpen(false); }}
              className="w-full bg-[#006380] text-white py-3 font-bold rounded-sm text-xs uppercase"
            >
              Soy Investigador/a
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
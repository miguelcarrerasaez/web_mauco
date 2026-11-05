import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AudienceSplit  from './components/AudienceSplit';
import MetricsTicker from './components/MetricsTicker';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import ResearchSection from './components/ResearchSection';
import SubstudiesSection from './components/SubstudiesSection';
import StudyInfoSection from './components/StudyInfoSection';
import WhatWeMeasure from './components/WhatWeMeasure';
import BiobankSection from './components/BiobankSection';
import CollaborationSection from './components/CollaborationSection';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';
import ActiveView from './types/mauco';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');

  return (
    <div className="min-h-screen bg-white text-[#1e1f26] flex flex-col justify-between">
      <Header activeView={activeView} setActiveView={setActiveView} />

      {/* VISTA HOME (HUB EJECUTIVO) */}
      {activeView === 'home' && (
        <main>
          <Hero setActiveView={setActiveView} />
          <AudienceSplit setActiveView={setActiveView} />
          <MetricsTicker />
          <AboutSection />
          <NewsSection />
          <ResearchSection />
          <CollaborationSection />
        </main>
      )}

      {/* VISTA PARA INVESTIGADORES */}
      {activeView === 'investigadores' && (
        <main className="pt-6">
          <BiobankSection />
          <CollaborationSection />
          <ResearchSection />
        </main>
      )}

      {/* VISTA PARA PARTICIPANTES Y COMUNIDAD */}
      {activeView === 'participantes' && (
        <main className="pt-6">
          <StudyInfoSection />
          <WhatWeMeasure />
          <CollaborationSection />
        </main>
      )}

      {/* VISTA REPOSOTORIO DE PUBLICACIONES */}
      {activeView === 'publicaciones' && (
        <main className="pt-6">
          <ResearchSection />
        </main>
      )}

      {/* VISTA SUB-ESTUDIOS ANIDADOS */}
      {activeView === 'subestudios' && (
        <main className="pt-6">
          <SubstudiesSection />
        </main>
      )}

      {/* VISTA CONTACTO Y EQUIPO */}
      {activeView === 'contacto' && (
        <main className="pt-6">
          <CollaborationSection />
          <TeamSection />
        </main>
      )}

      <Footer />
    </div>
  );
}
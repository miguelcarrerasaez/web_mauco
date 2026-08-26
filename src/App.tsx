import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MetricsTicker from '@/components/MetricsTicker';
import CohortSection from '@/components/CohortSection';
import WhatWeMeasure from '@/components/WhatWeMeasure';
import ResearchersSection from '@/components/ResearchersSection';
import BiobankSection from '@/components/BiobankSection';
import CollaborationSection from '@/components/CollaborationSection';
import ResearchSection from '@/components/ResearchSection';
import TeamSection from '@/components/TeamSection';
import AboutBand from '@/components/AboutBand';
import NewsSection from '@/components/NewsSection';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      {/* Offset for fixed header (top bar ~36px + main header 64px = 100px) */}
      <div className="h-[100px]" />
      <main>
        <Hero />
        <MetricsTicker />
        <CohortSection />
        <WhatWeMeasure />
        <ResearchersSection />
        <BiobankSection />
        <CollaborationSection />
        <ResearchSection />
        <TeamSection />
        <AboutBand />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MetricsTicker from '@/components/MetricsTicker';
import AboutBand from '@/components/AboutBand';
import ResearchersSection from '@/components/ResearchersSection';
import ParticipantsSection from '@/components/ParticipantsSection';
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
        <AboutBand />
        <ResearchersSection />
        <ParticipantsSection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}

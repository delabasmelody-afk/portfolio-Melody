import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsAndTools } from './components/SkillsAndTools';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PrintableCVModal } from './components/PrintableCVModal';

export default function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1A1A1A] flex flex-col font-sans selection:bg-[#111111] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

        {/* Expériences Professionnelles (Timeline + Filters) */}
        <ExperienceTimeline />

        {/* Portfolio & Réalisations (Feed & Reels visual showcase) */}
        <PortfolioShowcase />

        {/* Compétences, Outils & Centres d'intérêt */}
        <SkillsAndTools />

        {/* Formation & Diplômes */}
        <EducationSection />

        {/* Contact direct & Proposition d'alternance */}
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* Modal Format CV Original (imprimable & exportable en PDF) */}
      <PrintableCVModal 
        isOpen={isCVModalOpen} 
        onClose={() => setIsCVModalOpen(false)} 
      />
    </div>
  );
}

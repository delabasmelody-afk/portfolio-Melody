import { useState } from 'react';
import { FileText, Mail, Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onOpenCVModal: () => void;
}

export function Header({ onOpenCVModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Expériences', href: '#experiences' },
    { label: 'Compétences & Outils', href: '#competences' },
    { label: 'Portfolio Réseaux', href: '#portfolio' },
    { label: 'Formation', href: '#formation' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#EAE9E5] transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single text element wordmark */}
        <a 
          href="#" 
          className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] hover:text-[#555555] transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          MELODY DELABAS
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525252]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#111111] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#111111] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCVModal}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#111111] bg-white border border-[#DCDAD5] rounded-lg hover:border-[#111111] hover:bg-[#F5F4F0] transition-colors shadow-xs whitespace-nowrap cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#555555]" />
            <span>Format CV Original</span>
          </button>
          
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#2A2A2A] transition-colors whitespace-nowrap cursor-pointer shadow-xs"
          >
            <span>Me Contacter</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCVModal}
            className="p-2 text-xs font-medium text-[#111111] bg-white border border-[#DCDAD5] rounded-md"
            title="Voir le CV"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222222] hover:text-black focus:outline-none"
            aria-label="Menu de navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE9E5] bg-[#FBFBFA] px-4 pt-3 pb-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#333333] hover:text-[#111111] border-b border-[#F0EFEA]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCVModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium border border-[#DCDAD5] rounded-lg bg-white text-[#111111]"
            >
              <FileText className="w-4 h-4" />
              <span>Consulter & Imprimer le CV</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium bg-[#111111] text-white rounded-lg"
            >
              <Mail className="w-4 h-4" />
              <span>Contacter Melody</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

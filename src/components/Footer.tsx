import { ArrowUp, Heart } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface FooterProps {
  onOpenCVModal: () => void;
}

export function Footer({ onOpenCVModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#EAE9E5] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#F0EFEA]">
          <div>
            <div 
              className="text-lg font-bold text-[#111111]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              MELODY DELABAS
            </div>
            <div className="text-xs text-[#666666] mt-0.5">
              Community Manager & Cheffe de Projet Digital · Paris & Île-de-France
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={onOpenCVModal}
              className="text-[#444444] hover:text-[#111111] transition-colors cursor-pointer"
            >
              Format CV Original
            </button>
            <span aria-hidden="true" className="text-[#DDDDDD]">·</span>
            <a
              href={`mailto:${CV_DATA.profile.email}`}
              className="text-[#444444] hover:text-[#111111] transition-colors"
            >
              {CV_DATA.profile.email}
            </a>
            <span aria-hidden="true" className="text-[#DDDDDD]">·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#111111] font-semibold hover:text-[#555555] transition-colors cursor-pointer"
            >
              <span>Haut de page</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#888888]">
          <div>
            © {new Date().getFullYear()} Melody Delabas. Tous droits réservés.
          </div>
          <div className="flex items-center gap-2">
            <span>Alternance Master Brand Content · Rentrée 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

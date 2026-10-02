import { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Download, ArrowDown, Sparkles } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface HeroProps {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: HeroProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EAE9E5] bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Availability kicker */}
        <div className="flex items-center gap-2 text-xs font-medium text-[#666666] mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-[#111111] font-semibold">En recherche d'alternance</span>
          <span aria-hidden="true" className="text-[#BBBBBB]">·</span>
          <span>4 jours entreprise / 1 jour formation</span>
          <span aria-hidden="true" className="text-[#BBBBBB]">·</span>
          <span>Paris & Île-de-France</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Profile Info */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111111] leading-[1.08] text-balance"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                MELODY DELABAS
              </h1>
              
              <div className="mt-3 text-xl sm:text-2xl font-normal text-[#444444] flex flex-wrap items-baseline gap-2">
                <span className="font-semibold text-[#111111]">Community Manager</span>
                <span className="text-[#888888]">/</span>
                <span className="italic font-editorial text-2xl sm:text-3xl text-[#222222]">Cheffe de projet</span>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#4A4A4A] leading-relaxed max-w-2xl font-normal text-balance">
              {CV_DATA.profile.about}
            </p>

            {/* Quick Contact & Info Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-sm text-[#444444]">
              {/* Phone */}
              <button
                onClick={() => copyToClipboard(CV_DATA.profile.phone, 'phone')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E0DED9] hover:border-[#111111] transition-all cursor-pointer shadow-2xs"
                title="Cliquer pour copier le numéro"
              >
                <Phone className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#111111]" />
                <span className="font-mono text-xs text-[#222222] tabular-nums">{CV_DATA.profile.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3 h-3 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-[#999999] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                )}
              </button>

              {/* Email */}
              <button
                onClick={() => copyToClipboard(CV_DATA.profile.email, 'email')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#E0DED9] hover:border-[#111111] transition-all cursor-pointer shadow-2xs"
                title="Cliquer pour copier l'email"
              >
                <Mail className="w-3.5 h-3.5 text-[#666666] group-hover:text-[#111111]" />
                <span className="text-xs text-[#222222]">{CV_DATA.profile.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3 h-3 text-emerald-600 ml-1" />
                ) : (
                  <Copy className="w-3 h-3 text-[#999999] opacity-0 group-hover:opacity-100 transition-opacity ml-1" />
                )}
              </button>

              {/* Location */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-transparent text-xs text-[#666666]">
                <MapPin className="w-3.5 h-3.5 text-[#666666]" />
                <span>Paris (75)</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="px-5 py-3 text-sm font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#2C2C2C] active:scale-[0.99] transition-all cursor-pointer shadow-xs"
              >
                Proposer une opportunité
              </a>

              <a
                href="#portfolio"
                className="px-4 py-3 text-sm font-medium text-[#222222] bg-white border border-[#DCDAD5] rounded-lg hover:border-[#111111] hover:bg-[#F8F7F4] active:scale-[0.99] transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
              >
                <span>Voir mes réalisations</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#666666]" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="px-4 py-3 text-sm font-medium text-[#444444] hover:text-[#111111] transition-colors flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-0"
              >
                <Download className="w-4 h-4" />
                <span>Format CV PDF</span>
              </button>
            </div>

            {/* Credibility proof metrics - strictly unboxed text without pills */}
            <div className="pt-6 border-t border-[#EAE9E5] grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] tabular-nums">10+</div>
                <div className="text-xs text-[#666666] mt-0.5">Comptes gérés en agence & freelance</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] tabular-nums">4j / 1j</div>
                <div className="text-xs text-[#666666] mt-0.5">Rythme alternance recherché</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] tabular-nums">2026-28</div>
                <div className="text-xs text-[#666666] mt-0.5">Master EMCD Paris (Brand Content)</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-[#111111] tabular-nums">360°</div>
                <div className="text-xs text-[#666666] mt-0.5">Photo, Vidéo, Stratégie & Merchandising</div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Portrait Frame */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              
              {/* Image Frame */}
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#ECEAE5] border border-[#E0DED9] shadow-sm relative group">
                <img
                  src="/src/assets/images/portrait_melody_avatar_1790926461123.jpg"
                  alt="Melody Delabas - Community Manager & Cheffe de Projet"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Subtle scrim for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90"></div>

                {/* Overlay card info */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#EAEAEA] mb-1 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                    <span>Créatrice de contenu & CM</span>
                  </div>
                  <div className="text-base font-semibold tracking-tight text-white">
                    Melody Delabas
                  </div>
                  <div className="text-xs text-stone-200 mt-0.5">
                    Mode · Beauté · Musique & Concerts · Sport
                  </div>
                </div>
              </div>

              {/* Status footer under photo */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-[#666666] px-1">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                  Paris & Île-de-France
                </span>
                <span className="font-mono text-[#888888]">Bachelor Com 2024</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

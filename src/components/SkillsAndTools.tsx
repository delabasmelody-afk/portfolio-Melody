import { 
  Camera, 
  Video, 
  Palette, 
  Layers, 
  Share2, 
  TrendingUp, 
  CheckCircle2, 
  Music, 
  Shirt, 
  Smartphone 
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export function SkillsAndTools() {
  return (
    <section id="competences" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-[#EAE9E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EAE9E5]">
          <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-2">
            Expertise & Logiciels
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Compétences & Outils Maîtrisés
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-xl">
            Une combinaison de rigueur stratégique, de créativité visuelle et de maîtrise des outils de publication et de retouche.
          </p>
        </div>

        {/* 2-Column Grid: Compétences métiers & Outils */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Compétences Métiers */}
          <div className="lg:col-span-6 space-y-6">
            <h3 
              className="text-xl font-bold text-[#111111] flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Palette className="w-5 h-5 text-[#333333]" />
              <span>Compétences Clés</span>
            </h3>

            <div className="space-y-4">
              {CV_DATA.skills.map((cat, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-[#E5E3DC] p-6 shadow-2xs"
                >
                  <h4 className="text-sm uppercase tracking-wider font-bold text-[#111111] mb-4 pb-2 border-b border-[#F0EFEA]">
                    {cat.title}
                  </h4>

                  <div className="space-y-3.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#111111] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-[#111111]">
                            {skill.name}
                          </div>
                          {skill.description && (
                            <div className="text-xs text-[#666666] mt-0.5 leading-relaxed">
                              {skill.description}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Centres d'intérêt & Sensibilité créative */}
            <div className="bg-white rounded-2xl border border-[#E5E3DC] p-6 shadow-2xs">
              <h4 className="text-sm uppercase tracking-wider font-bold text-[#111111] mb-4 pb-2 border-b border-[#F0EFEA] flex items-center justify-between">
                <span>Centres d'Intérêt & Sensibilités</span>
                <span className="text-xs font-normal text-[#777777]">Sources d'inspiration</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#EFECE6]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <Camera className="w-4 h-4 text-[#333333]" />
                    <span>Photographie</span>
                  </div>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    Prise de vue, composition, cadrage et lumière naturelle.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#EFECE6]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <Music className="w-4 h-4 text-[#333333]" />
                    <span>Musique & Concerts</span>
                  </div>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    Captation live, festivals, culture musicale et sound design.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF9F5] border border-[#EFECE6]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#111111]">
                    <Shirt className="w-4 h-4 text-[#333333]" />
                    <span>Mode</span>
                  </div>
                  <p className="text-xs text-[#666666] mt-1.5 leading-relaxed">
                    Tendances visuelles, stylisme et merchandising retail.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Outils & Logiciels */}
          <div className="lg:col-span-6 space-y-6">
            <h3 
              className="text-xl font-bold text-[#111111] flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <Smartphone className="w-5 h-5 text-[#333333]" />
              <span>Outils & Suite Logicielle</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CV_DATA.tools.map((tool, tIdx) => (
                <div
                  key={tIdx}
                  className="bg-white rounded-2xl border border-[#E5E3DC] p-5 hover:border-[#111111]/30 transition-all shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[11px] font-medium text-[#777777] mb-1">
                      {tool.category}
                    </div>
                    <div className="text-base font-bold text-[#111111]">
                      {tool.name}
                    </div>
                    <p className="mt-2 text-xs text-[#555555] leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F5F4F0] flex items-center justify-between text-[11px] text-[#888888]">
                    <span>Pratique professionnelle</span>
                    <span className="font-mono text-[#111111] font-semibold">Maîtrisé</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternance Callout Box */}
            <div className="bg-[#111111] text-white rounded-2xl p-6 sm:p-7 shadow-xs">
              <div className="text-xs uppercase tracking-widest text-[#A0A0A0] font-semibold mb-2">
                Rythme & Disponibilité
              </div>
              <h4 
                className="text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                4 Jours Entreprise / 1 Jour Formation
              </h4>
              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                Opérationnelle immédiatement pour intégrer votre équipe communication & marketing à Paris. Autonome, dynamique et force de proposition pour faire rayonner votre marque.
              </p>
              <div className="mt-4 pt-4 border-t border-[#2A2A2A] flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-emerald-400 font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Rentrée 2026 · Paris & Île-de-France
                </span>
                <a
                  href="#contact"
                  className="px-3.5 py-1.5 bg-white text-[#111111] font-semibold rounded-lg hover:bg-[#EFEFEF] transition-colors"
                >
                  Prendre contact
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

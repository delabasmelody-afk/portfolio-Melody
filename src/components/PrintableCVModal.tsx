import { useState } from 'react';
import { Printer, Download, X, Copy, Check, Phone, Mail, MapPin } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface PrintableCVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrintableCVModal({ isOpen, onClose }: PrintableCVModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyFullCVText = () => {
    const text = `MELODY DELABAS
Community Manager / Cheffe de projet - En alternance (4j entreprise / 1j formation)

CONTACT:
Téléphone : ${CV_DATA.profile.phone}
Email : ${CV_DATA.profile.email}
Localisation : ${CV_DATA.profile.location}

PROFIL:
${CV_DATA.profile.about}

EXPÉRIENCES PROFESSIONNELLES:
1. Assistante Manager — Tamaris (Paris - 2026)
${CV_DATA.experiences[0].missions.map(m => `• ${m}`).join('\n')}

2. Community Manager / Photographe — Freelance (Montpellier - 2026)
${CV_DATA.experiences[1].missions.map(m => `• ${m}`).join('\n')}

3. Community Manager — Handy Communication (Montpellier - 2025)
${CV_DATA.experiences[2].missions.map(m => `• ${m}`).join('\n')}

4. Chargée de communication / Commerciale — Majestee (Alternance 2023-2024)
${CV_DATA.experiences[3].missions.map(m => `• ${m}`).join('\n')}

5. Stagiaire Communication / Création Visuelle — Macron Store (2023)
${CV_DATA.experiences[4].missions.map(m => `• ${m}`).join('\n')}

FORMATION:
• Master Manager de la Stratégie Marketing - Brand Content (EMCD Paris 2026-2028)
• Bachelor Communication & Marketing Digital (ESG Montpellier 2024)
• BTS NDRC (Montpellier 2022)
• Bac STMG Marketing (2020)

COMPÉTENCES & OUTILS:
Création de contenu, Photographie, Vidéo, Montage, Meta Suite, TikTok Business, Photoshop, Lightroom, CapCut, Canva.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] flex flex-col shadow-2xl overflow-hidden border border-[#E5E3DC]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE9E5] bg-[#FAF9F6]">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-[#111111]">Format CV Original</span>
            <span className="text-xs text-[#777777] hidden sm:inline">· Prêt à imprimer ou exporter en PDF</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyFullCVText}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#444444] bg-white border border-[#DCDAD5] rounded-lg hover:border-[#111111] hover:text-[#111111] transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Texte copié !' : 'Copier texte'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#2A2A2A] transition-colors cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimer / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#666666] hover:bg-[#EFECE6] hover:text-[#111111] transition-colors ml-1"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Container */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#F5F4F0]">
          <div className="max-w-[780px] mx-auto bg-white border border-[#D0CECA] shadow-md p-6 sm:p-10 font-sans text-[#1A1A1A]">
            
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8">
              
              {/* Left Column (matching PDF layout) */}
              <div className="sm:col-span-4 border-r-0 sm:border-r border-[#E0DED9] sm:pr-6 space-y-6">
                
                {/* Photo */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-[#111111] mx-auto sm:mx-0 shadow-xs">
                  <img
                    src="/src/assets/images/portrait_melody_avatar_1790926461123.jpg"
                    alt="Melody Delabas"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* CONTACT */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-2.5">
                    C O N T A C T
                  </h4>
                  <div className="space-y-1.5 text-[11px] text-[#333333]">
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-3 h-3 text-[#111111] shrink-0" />
                      <span className="font-mono">{CV_DATA.profile.phone}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail className="w-3 h-3 text-[#111111] shrink-0" />
                      <span className="break-all">{CV_DATA.profile.email}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#111111] shrink-0" />
                      <span>{CV_DATA.profile.location}</span>
                    </div>
                  </div>
                </div>

                {/* COMPÉTENCES */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-2.5">
                    C O M P É T E N C E S
                  </h4>
                  <ul className="space-y-1 text-[11px] text-[#333333]">
                    <li>• Création de contenu</li>
                    <li>• Création de visuels</li>
                    <li>• Photographie - vidéo</li>
                    <li>• Montage vidéo - retouche photo</li>
                    <li>• Veille digitale</li>
                    <li>• Gestion de projets - planification</li>
                  </ul>
                </div>

                {/* OUTILS */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-2.5">
                    O U T I L S
                  </h4>
                  <ul className="space-y-1 text-[11px] text-[#333333]">
                    <li>• Adobe Photoshop</li>
                    <li>• Lightroom</li>
                    <li>• Canva</li>
                    <li>• CapCut</li>
                    <li>• Meta Business Suite</li>
                    <li>• TikTok Business</li>
                  </ul>
                </div>

                {/* EDUCATION */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-2.5">
                    E D U C A T I O N
                  </h4>
                  <div className="space-y-3 text-[11px] text-[#333333]">
                    <div>
                      <div className="font-bold text-[#111111]">EMCD PARIS</div>
                      <div className="font-semibold text-[10px] leading-tight text-[#222222]">
                        MASTER MANAGER DE LA STRATÉGIE MARKETING - BRAND CONTENT
                      </div>
                      <div className="text-[#666666] text-[10px]">2026 - 2028</div>
                    </div>

                    <div>
                      <div className="font-bold text-[#111111]">ESG Montpellier</div>
                      <div className="font-semibold text-[10px] leading-tight text-[#222222]">
                        BACHELOR COMMUNICATION & MARKETING DIGITAL
                      </div>
                      <div className="text-[#666666] text-[10px]">2024 · Montpellier</div>
                    </div>

                    <div>
                      <div className="font-bold text-[#111111]">BTS NDRC</div>
                      <div className="text-[10px] leading-tight text-[#555555]">
                        Négociation et Digitalisation de la Relation Client
                      </div>
                      <div className="text-[#666666] text-[10px]">2022 · Montpellier</div>
                    </div>

                    <div>
                      <div className="font-bold text-[#111111]">BAC STMG - MARKETING</div>
                      <div className="text-[10px] text-[#555555]">Lycée Alain Borne · 2020</div>
                    </div>
                  </div>
                </div>

                {/* CENTRES D'INTÉRÊT */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-2.5">
                    C E N T R E S   D ' I N T É R Ê T
                  </h4>
                  <ul className="space-y-1 text-[11px] text-[#333333]">
                    <li>• Photographie</li>
                    <li>• Musique / Concerts</li>
                    <li>• Mode</li>
                  </ul>
                </div>

              </div>

              {/* Right Column (Header & Experiences) */}
              <div className="sm:col-span-8 space-y-6">
                
                {/* Header */}
                <div className="border-b border-[#111111] pb-4">
                  <h1 className="text-2xl sm:text-3xl font-bold tracking-wider text-[#111111]">
                    MELODY DELABAS
                  </h1>
                  <div className="text-sm font-semibold text-[#333333] mt-1">
                    Community Manager / Chef de projet
                  </div>
                  <div className="text-xs text-[#555555] font-medium">
                    En alternance (4 jours entreprise / 1 jour en formation)
                  </div>

                  <p className="mt-3 text-xs text-[#444444] leading-relaxed">
                    Titulaire d’un Bachelor Communication & Marketing Digital, je suis passionnée par la communication digitale et la création de contenu. Créative et polyvalente, je recherche une alternance en tant que Community Manager ou Cheffe de Projet, au rythme de 4 jours en entreprise et 1 jour en formation.
                  </p>
                </div>

                {/* EXPERIENCES PROFESSIONNELLES */}
                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold text-[#111111] border-b border-[#111111] pb-1 mb-4">
                    E X P É R I E N C E S   P R O F E S S I O N N E L L E S
                  </h3>

                  <div className="space-y-5 text-xs text-[#333333]">
                    
                    {/* Tamaris */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-[#111111]">
                        <span>Assistante Manager — Tamaris</span>
                        <span className="font-normal text-[#666666] text-[11px]">Paris - 2026</span>
                      </div>
                      <div className="italic text-[#555555] text-[11px] mt-0.5">
                        Communication visuelle et merchandising :
                      </div>
                      <ul className="mt-1 space-y-1 text-[11px] text-[#444444] list-disc list-inside">
                        <li>Participation à la mise en place et au renouvellement du merchandising</li>
                        <li>Mise en valeur des collections et création d’une présentation visuelle cohérente</li>
                      </ul>
                    </div>

                    {/* Freelance */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-[#111111]">
                        <span>Community Manager / Photographe — Freelance</span>
                        <span className="font-normal text-[#666666] text-[11px]">Montpellier - 2026</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-[11px] text-[#444444] list-disc list-inside">
                        <li>Gestion et animation de comptes sur les réseaux sociaux</li>
                        <li>Création de contenus photo et vidéo</li>
                        <li>Création de publications, stories et contenus promotionnels</li>
                        <li>Clients issus des secteurs : mode, événement musique, beauté et sport</li>
                      </ul>
                    </div>

                    {/* Handy */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-[#111111]">
                        <span>Community Manager - Handy Communication</span>
                        <span className="font-normal text-[#666666] text-[11px]">Montpellier - 2025</span>
                      </div>
                      <div className="italic text-[#666666] text-[11px]">(Agence de communication)</div>
                      <ul className="mt-1 space-y-1 text-[11px] text-[#444444] list-disc list-inside">
                        <li>Gestion d’une dizaine de comptes Instagram et TikTok</li>
                        <li>Création et publication quotidienne de stories et contenus</li>
                        <li>Participation aux shootings et conception de concepts vidéo</li>
                        <li>Réalisation de prises de vue, retouches photo et montages vidéo</li>
                        <li>Création de visuels et veille des tendances sur les réseaux sociaux</li>
                      </ul>
                    </div>

                    {/* Majestee */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-[#111111]">
                        <span>Chargée de communication / Commerciale - Majestee</span>
                        <span className="font-normal text-[#666666] text-[11px]">Alternance 2023-2024</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-[11px] text-[#444444] list-disc list-inside">
                        <li>Gestion et animation des réseaux sociaux</li>
                        <li>Création de visuels et de contenus vidéo</li>
                        <li>Création et envoi de campagnes e-mailing promotionnelles</li>
                        <li>Prospection et gestion de la relation avec les clients professionnels</li>
                      </ul>
                    </div>

                    {/* Macron Store */}
                    <div>
                      <div className="flex justify-between items-baseline font-bold text-[#111111]">
                        <span>Stagiaire Communication / Création Visuelle – Macron Store</span>
                        <span className="font-normal text-[#666666] text-[11px]">Stage 2023</span>
                      </div>
                      <ul className="mt-1 space-y-1 text-[11px] text-[#444444] list-disc list-inside">
                        <li>Création de visuels pour la communication du magasin</li>
                        <li>Conception de supports promotionnels</li>
                        <li>Participation à la mise en valeur des produits et de l’offre</li>
                      </ul>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

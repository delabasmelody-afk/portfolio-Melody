import { useState } from 'react';
import { Eye, Heart, MessageCircle, Bookmark, Share2, Sparkles, X, Layers, Instagram, Video } from 'lucide-react';
import { CV_DATA, PortfolioItem } from '../data/cvData';

export function PortfolioShowcase() {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeTab, setActiveTab] = useState<'grid' | 'reels'>('grid');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = CV_DATA.portfolioItems.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const categories = [
    { id: 'all', label: 'Tout voir' },
    { id: 'Mode & Retail', label: 'Mode & Retail' },
    { id: 'Beauté & Cosmétiques', label: 'Beauté & Skincare' },
    { id: 'Musique & Live', label: 'Musique & Live' },
    { id: 'Sport & Événement', label: 'Sport & Événement' },
  ];

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-white border-b border-[#EAE9E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title & context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#EAE9E5] gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Direction artistique & Social Media</span>
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Portfolio & Créations
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-xl">
              Aperçu des univers visuels, campagnes de contenu, shootings photo et scénographies retail conçus pour les clients.
            </p>
          </div>

          {/* Tab selector */}
          <div className="flex items-center gap-1.5 p-1 bg-[#F5F4F0] rounded-xl self-start md:self-auto">
            <button
              onClick={() => setActiveTab('grid')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'grid'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Grille Feed & Projets</span>
            </button>
            <button
              onClick={() => setActiveTab('reels')}
              className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                activeTab === 'reels'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>Formats Vidéo & Reels</span>
            </button>
          </div>
        </div>

        {/* Category filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#111111] text-white shadow-2xs'
                  : 'bg-[#F7F6F2] text-[#555555] hover:bg-[#EFECE6] hover:text-[#111111]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento / Feed Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl border border-[#E5E3DC] bg-[#FAF9F6] overflow-hidden hover:border-[#111111]/40 transition-all duration-300 shadow-2xs flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#ECEAE5]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                
                {/* Format tag overlay */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {item.format}
                </div>

                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-[#111111] text-[11px] font-semibold px-2.5 py-1 rounded-md flex items-center gap-1 shadow-2xs">
                  <Eye className="w-3 h-3 text-[#555555]" />
                  <span>Détails</span>
                </div>

                {/* Scrim on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 bg-white text-[#111111] text-xs font-semibold rounded-lg shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    Ouvrir l'étude de cas
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#666666] mb-1.5">
                    <span className="font-semibold text-[#111111]">{item.company}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] group-hover:text-[#222222] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#555555] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFECE6] flex items-center justify-between text-xs text-[#777777]">
                  <div className="flex items-center gap-2">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[#555555]">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  {item.stats && (
                    <span className="font-medium text-[#111111] font-mono text-[11px] bg-[#EFECE6] px-2 py-0.5 rounded">
                      {item.stats}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Modal for Item detail */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#EAE9E5] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
                aria-label="Fermer la vue"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                
                {/* Media Column */}
                <div className="bg-[#111111] flex items-center justify-center p-4">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                  />
                </div>

                {/* Details Column */}
                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-[#777777]">
                      <span className="font-semibold text-[#111111]">{selectedItem.company}</span>
                      <span>·</span>
                      <span>{selectedItem.category}</span>
                      <span>·</span>
                      <span className="font-medium text-[#222222]">{selectedItem.format}</span>
                    </div>

                    <h3 
                      className="text-2xl font-bold text-[#111111]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {selectedItem.title}
                    </h3>

                    <p className="text-sm text-[#444444] leading-relaxed">
                      {selectedItem.description}
                    </p>

                    <div className="bg-[#FAF9F5] p-4 rounded-xl border border-[#EBE8E1] space-y-2">
                      <div className="text-xs uppercase tracking-wider font-semibold text-[#888888]">
                        Approche & Réalisation
                      </div>
                      <p className="text-xs text-[#555555] leading-relaxed">
                        Conception et direction visuelle orientée conversion et engagement communautaire. Adapté aux formats verticaux et aux algorithmes actuels.
                      </p>
                      {selectedItem.stats && (
                        <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#111111]">
                          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                          <span>Impact : {selectedItem.stats}</span>
                        </div>
                      )}
                    </div>

                    {/* Social mock interactions */}
                    <div className="pt-2 flex items-center justify-between text-xs text-[#777777] border-t border-[#F0EFEA]">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 hover:text-red-500 transition-colors">
                          <Heart className="w-4 h-4" /> 1 480
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" /> 84
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-4 h-4" /> 210
                        </span>
                      </div>
                      <Bookmark className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#F0EFEA] flex justify-end">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#2C2C2C] transition-colors cursor-pointer"
                    >
                      Fermer la vue
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

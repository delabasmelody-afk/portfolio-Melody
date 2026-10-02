import { useState } from 'react';
import { Briefcase, Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { CV_DATA, Experience } from '../data/cvData';

export function ExperienceTimeline() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'agency' | 'freelance' | 'retail'>('all');

  const filteredExperiences = CV_DATA.experiences.filter((exp) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'agency') return exp.type === 'Agence' || exp.type === 'Alternance';
    if (activeFilter === 'freelance') return exp.type === 'Freelance';
    if (activeFilter === 'retail') return exp.type === 'Poste' || exp.type === 'Stage';
    return true;
  });

  return (
    <section id="experiences" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-[#EAE9E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#EAE9E5] gap-4">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-2">
              Parcours professionnel
            </div>
            <h2 
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Expériences Professionnelles
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-xl">
              De l'agence de communication à la gestion freelance en passant par le visual merchandising de mode à Paris.
            </p>
          </div>

          {/* Interactive filter controls - styled as clean functional buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFECE6] rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Toutes ({CV_DATA.experiences.length})
            </button>
            <button
              onClick={() => setActiveFilter('agency')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'agency'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Agence & Alternance
            </button>
            <button
              onClick={() => setActiveFilter('freelance')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'freelance'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Freelance & Photo
            </button>
            <button
              onClick={() => setActiveFilter('retail')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeFilter === 'retail'
                  ? 'bg-white text-[#111111] shadow-2xs font-semibold'
                  : 'text-[#666666] hover:text-[#111111]'
              }`}
            >
              Mode & Retail
            </button>
          </div>
        </div>

        {/* Timeline list */}
        <div className="space-y-6">
          {filteredExperiences.map((exp: Experience, index: number) => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl border border-[#E5E3DC] p-6 sm:p-8 hover:border-[#111111]/30 transition-all duration-300 shadow-2xs"
            >
              {/* Top row: Role, company, metadata */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-5 border-b border-[#F0EFEA]">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#666666] mb-1.5 font-medium">
                    <span className="text-[#111111] font-semibold">{exp.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 text-[#666666]">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#444444] font-medium">{exp.type}</span>
                    {exp.sector && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="text-[#666666]">{exp.sector}</span>
                      </>
                    )}
                  </div>
                  
                  <h3 
                    className="text-xl sm:text-2xl font-bold text-[#111111]"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {exp.role}
                  </h3>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center font-mono text-xs font-semibold text-[#111111] bg-[#F5F4F0] px-3 py-1.5 rounded-lg border border-[#EAE8E2] shrink-0">
                  <Calendar className="w-3.5 h-3.5 text-[#666666]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Context Summary */}
              {exp.summary && (
                <p className="mt-4 text-sm font-medium text-[#333333]">
                  {exp.summary}
                </p>
              )}

              {/* Detailed missions bullet points from CV */}
              <div className="mt-4">
                <div className="text-xs uppercase tracking-wider text-[#888888] font-semibold mb-2.5">
                  Missions & Réalisations
                </div>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  {exp.missions.map((mission, mIdx) => (
                    <li key={mIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-2 shrink-0"></span>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills applied unboxed footer */}
              <div className="mt-6 pt-4 border-t border-[#F5F4F0] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#666666]">
                <span className="font-semibold text-[#222222]">Compétences clés :</span>
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-2">
                    {sIdx > 0 && <span aria-hidden="true" className="text-[#CCCCCC]">/</span>}
                    <span className="text-[#333333]">{skill}</span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

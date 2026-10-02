import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { CV_DATA, Education } from '../data/cvData';

export function EducationSection() {
  return (
    <section id="formation" className="py-16 md:py-24 bg-white border-b border-[#EAE9E5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EAE9E5]">
          <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-2">
            Diplômes & Cursus
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Formation & Diplômes
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-xl">
            Un socle solide combinant stratégie de marque, marketing digital, négociation et relation client.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CV_DATA.education.map((edu: Education, index: number) => {
            const isCurrentMaster = edu.period.includes('2026');
            return (
              <div
                key={index}
                className={`rounded-2xl border p-6 sm:p-7 transition-all flex flex-col justify-between ${
                  isCurrentMaster
                    ? 'border-[#111111] bg-[#FAF9F5] shadow-xs'
                    : 'border-[#E5E3DC] bg-white hover:border-[#111111]/30 shadow-2xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-xs font-semibold text-[#111111] bg-white px-2.5 py-1 rounded-md border border-[#E0DED9] flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#666666]" />
                      <span>{edu.period}</span>
                    </span>

                    {isCurrentMaster ? (
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                        En cours · Master
                      </span>
                    ) : (
                      <span className="text-xs text-[#666666] flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-[#888888]" />
                        <span>Diplôme Validé</span>
                      </span>
                    )}
                  </div>

                  <h3 
                    className="text-lg sm:text-xl font-bold text-[#111111] leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {edu.degree}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-xs text-[#555555]">
                    <span className="font-semibold text-[#111111]">{edu.school}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#777777]" />
                      {edu.location}
                    </span>
                  </div>

                  {edu.details && (
                    <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed">
                      {edu.details}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0EFEA] flex items-center justify-between text-xs text-[#777777]">
                  <span className="flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#444444]" />
                    <span>Niveau certifié</span>
                  </span>
                  <span className="font-mono font-medium text-[#222222]">
                    {index === 0 ? 'Bac +5' : index === 1 ? 'Bac +3' : index === 2 ? 'Bac +2' : 'Bac'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

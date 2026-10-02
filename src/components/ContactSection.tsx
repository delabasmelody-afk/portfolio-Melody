import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, Calendar, Sparkles } from 'lucide-react';
import { CV_DATA } from '../data/cvData';

export function ContactSection() {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subjectType, setSubjectType] = useState('Offre d\'alternance Community Manager');
  const [messageText, setMessageText] = useState('');

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link as direct action
    const mailSubject = encodeURIComponent(`[Contact Portfolio] ${subjectType} - ${senderName}`);
    const mailBody = encodeURIComponent(`Bonjour Melody,\n\n${messageText}\n\nCordialement,\n${senderName}\n${senderEmail}`);
    
    // Open email client
    window.location.href = `mailto:${CV_DATA.profile.email}?subject=${mailSubject}&body=${mailBody}`;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FBFBFA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 pb-6 border-b border-[#EAE9E5]">
          <div className="text-xs uppercase tracking-widest text-[#777777] font-semibold mb-2">
            Discutons de votre projet
          </div>
          <h2 
            className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prendre Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#555555] max-w-xl">
            Vous recherchez une Community Manager ou Cheffe de Projet créative pour booster votre présence digitale en alternance à Paris ? Échangeons dès aujourd'hui.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct coordinates & Alternance details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Phone Card */}
            <div className="bg-white rounded-2xl border border-[#E5E3DC] p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#EFECE6] flex items-center justify-center text-[#111111]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#777777]">Téléphone mobile</div>
                    <a 
                      href={`tel:${CV_DATA.profile.phoneRaw}`}
                      className="text-base font-semibold font-mono text-[#111111] hover:underline"
                    >
                      {CV_DATA.profile.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CV_DATA.profile.phone, 'phone-card')}
                  className="p-2 rounded-lg text-[#666666] hover:bg-[#F5F4F0] hover:text-[#111111] transition-colors cursor-pointer"
                  title="Copier le numéro"
                >
                  {copiedField === 'phone-card' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl border border-[#E5E3DC] p-5 shadow-2xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#EFECE6] flex items-center justify-center text-[#111111]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#777777]">Adresse e-mail</div>
                    <a 
                      href={`mailto:${CV_DATA.profile.email}`}
                      className="text-sm font-semibold text-[#111111] hover:underline break-all"
                    >
                      {CV_DATA.profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(CV_DATA.profile.email, 'email-card')}
                  className="p-2 rounded-lg text-[#666666] hover:bg-[#F5F4F0] hover:text-[#111111] transition-colors cursor-pointer"
                  title="Copier l'email"
                >
                  {copiedField === 'email-card' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Alternance Info Card */}
            <div className="bg-[#FAF9F5] rounded-2xl border border-[#E5E3DC] p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#111111]">
                <Calendar className="w-4 h-4" />
                <span>Modalités de l'alternance</span>
              </div>

              <div className="space-y-2 text-xs text-[#444444]">
                <div className="flex justify-between py-1 border-b border-[#EAE8E2]">
                  <span className="text-[#666666]">Rythme :</span>
                  <span className="font-semibold text-[#111111]">4 jours entreprise / 1 jour école</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE8E2]">
                  <span className="text-[#666666]">Localisation :</span>
                  <span className="font-semibold text-[#111111]">Paris & Région Île-de-France</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EAE8E2]">
                  <span className="text-[#666666]">École :</span>
                  <span className="font-semibold text-[#111111]">EMCD Paris (Master)</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#666666]">Durée :</span>
                  <span className="font-semibold text-[#111111]">24 mois (2026 - 2028)</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5E3DC] p-6 sm:p-8 shadow-2xs">
            
            <div className="mb-6">
              <h3 
                className="text-xl font-bold text-[#111111]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Envoyer un message direct
              </h3>
              <p className="text-xs sm:text-sm text-[#666666] mt-1">
                Remplissez ce formulaire pour initier l'échange ou planifier un entretien.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <div className="font-bold text-emerald-950 text-base">
                  Message préparé avec succès !
                </div>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Votre client de messagerie s'est ouvert pour envoyer l'email à Melody. Vous pouvez également la joindre directement au <strong className="font-mono">{CV_DATA.profile.phone}</strong>.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-2 text-xs font-semibold text-emerald-900 underline hover:text-emerald-700 cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Object selector */}
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    Objet de votre demande
                  </label>
                  <select
                    value={subjectType}
                    onChange={(e) => setSubjectType(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#DCDAD5] bg-white text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                  >
                    <option value="Offre d'alternance Community Manager">Offre d'alternance — Community Manager</option>
                    <option value="Offre d'alternance Cheffe de projet">Offre d'alternance — Cheffe de projet digital</option>
                    <option value="Mission Freelance / Shooting">Mission Freelance / Shooting Photo & Vidéo</option>
                    <option value="Échange informel / Entretien">Proposition d'échange ou entretien</option>
                  </select>
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      Votre nom ou entreprise *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Agence / Marque"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#DCDAD5] bg-white text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                      Votre adresse email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="contact@entreprise.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#DCDAD5] bg-white text-[#111111] focus:outline-none focus:border-[#111111] transition-colors"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div>
                  <label className="block text-xs font-semibold text-[#333333] mb-1.5">
                    Votre message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Bonjour Melody, votre profil correspond à notre recherche d'alternance..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-[#DCDAD5] bg-white text-[#111111] focus:outline-none focus:border-[#111111] transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-[#111111] rounded-lg hover:bg-[#2C2C2C] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre ma proposition</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

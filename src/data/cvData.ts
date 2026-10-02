export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Alternance' | 'Freelance' | 'Agence' | 'Stage' | 'Poste';
  summary?: string;
  missions: string[];
  skills: string[];
  sector?: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Mode & Retail' | 'Beauté & Cosmétiques' | 'Musique & Live' | 'Sport & Événement' | 'Social Media';
  company: string;
  image: string;
  aspectRatio?: string;
  description: string;
  format: 'Instagram Post' | 'TikTok / Reel' | 'Shooting Photo' | 'Visuel Merchandising' | 'Campagne E-mail';
  stats?: string;
  tags: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; description?: string }[];
}

export interface ToolItem {
  name: string;
  category: string;
  description: string;
  highlight?: boolean;
}

export const CV_DATA = {
  profile: {
    fullName: "Melody Delabas",
    title: "Community Manager / Cheffe de Projet",
    contractTarget: "En alternance (4 jours entreprise / 1 jour en formation)",
    headline: "Créative & Polyvalente — Passionnée par la communication digitale et le brand content",
    about: "Titulaire d’un Bachelor Communication & Marketing Digital, je suis passionnée par la communication digitale et la création de contenu. Créative et polyvalente, je recherche une alternance en tant que Community Manager ou Cheffe de Projet, au rythme de 4 jours en entreprise et 1 jour en formation à Paris.",
    phone: "06 05 84 95 06",
    phoneRaw: "+33605849506",
    email: "delabasmelody@gmail.com",
    location: "Paris, France",
    availability: "Rentrée 2026 (Rythme 4j / 1j)",
    schoolMaster: "EMCD Paris — Master Manager de la Stratégie Marketing & Brand Content",
    stats: [
      { label: "Comptes réseaux sociaux gérés", value: "10+" },
      { label: "Bachelor Communication obtenu", value: "2024" },
      { label: "Rythme alternance recherché", value: "4j / 1j" },
      { label: "Secteurs de prédilection", value: "Mode · Beauté · Musique · Sport" },
    ],
    socialInterests: [
      { name: "Photographie", desc: "Prise de vue, composition, retouche Lightroom & Photoshop" },
      { name: "Musique & Concerts", desc: "Captation live, ambiance festival, culture musicale" },
      { name: "Mode & Merchandising", desc: "Tendances esthétiques, stylisme, scénographie vitrine & retail" },
    ]
  },

  experiences: [
    {
      id: "tamaris-2026",
      role: "Assistante Manager",
      company: "Tamaris",
      location: "Paris",
      period: "2026",
      type: "Poste",
      sector: "Mode & Chaussures",
      summary: "Communication visuelle et merchandising en boutique parisienne.",
      missions: [
        "Participation à la mise en place et au renouvellement du merchandising visuel",
        "Mise en valeur des collections de chaussures et accessoires",
        "Création d'une présentation visuelle cohérente et attrayante pour la clientèle parisienne",
        "Harmonisation de l'identité visuelle de la marque sur le point de vente"
      ],
      skills: ["Visual Merchandising", "Communication visuelle", "Scénographie retail", "Gestion des collections"]
    },
    {
      id: "freelance-2026",
      role: "Community Manager / Photographe",
      company: "Freelance",
      location: "Montpellier",
      period: "2026",
      type: "Freelance",
      sector: "Mode, Musique, Beauté & Sport",
      summary: "Accompagnement de marques et créateurs sur leur stratégie social media et production de contenus audiovisuels.",
      missions: [
        "Gestion et animation de comptes sur les réseaux sociaux (Instagram, TikTok)",
        "Création de contenus photo et vidéo sur-mesure",
        "Création de publications, stories et contenus promotionnels à forte valeur d'engagement",
        "Accompagnement de clients issus de secteurs variés : mode, événement musique, beauté et sport"
      ],
      skills: ["Stratégie Social Media", "Photographie", "Montage vidéo", "Content Curation", "Storytelling"]
    },
    {
      id: "handy-2025",
      role: "Community Manager",
      company: "Handy Communication",
      location: "Montpellier",
      period: "2025",
      type: "Agence",
      sector: "Agence de communication digitale",
      summary: "Pilotage opérationnel du pôle social media pour plus d'une dizaine de comptes clients.",
      missions: [
        "Gestion d'une dizaine de comptes Instagram et TikTok en simultané",
        "Création et publication quotidienne de stories engageantes et de contenus éditoriaux",
        "Participation active aux shootings et conception de concepts vidéo viraux",
        "Réalisation de prises de vue, retouches photo avancées et montages vidéo dynamiques",
        "Création de visuels percutants et veille quotidienne des tendances sur les réseaux sociaux"
      ],
      skills: ["Multi-comptes Meta & TikTok", "Shootings vidéo/photo", "Veille tendances", "Retouche & Montage", "Planning éditorial"]
    },
    {
      id: "majestee-2023-2024",
      role: "Chargée de communication / Commerciale",
      company: "Majestee",
      location: "Montpellier",
      period: "2023 - 2024",
      type: "Alternance",
      sector: "Communication & Commerce",
      summary: "Alternance combinant community management, création graphique et développement commercial.",
      missions: [
        "Gestion et animation active des réseaux sociaux de l'entreprise",
        "Création graphique de visuels et production de formats vidéo",
        "Création, ciblage et envoi de campagnes e-mailing promotionnelles",
        "Prospection commerciale et suivi rigoureux de la relation avec les clients professionnels"
      ],
      skills: ["Campagnes E-mailing", "Gestion commerciale", "Création graphique", "Animation réseaux", "CRM & Prospection"]
    },
    {
      id: "macron-2023",
      role: "Stagiaire Communication / Création Visuelle",
      company: "Macron Store",
      location: "Montpellier",
      period: "2023",
      type: "Stage",
      sector: "Sportswear & Équipement sportif",
      summary: "Immersion dans la communication visuelle et promotionnelle d'une marque de sport internationale.",
      missions: [
        "Création de visuels attractifs pour la communication globale du magasin",
        "Conception de supports promotionnels print et digitaux (flyers, affiches, bannières)",
        "Participation active à la mise en valeur des produits et dynamisation de l'offre commerciale"
      ],
      skills: ["Supports promotionnels", "Mise en avant produit", "Design graphique", "Communication locale"]
    }
  ] as Experience[],

  education: [
    {
      degree: "Master Manager de la Stratégie Marketing - Brand Content",
      school: "EMCD PARIS",
      location: "Paris",
      period: "2026 - 2028",
      details: "Formation en alternance axée sur la stratégie de marque, le brand content, la direction artistique digitale et le marketing d'influence."
    },
    {
      degree: "Bachelor Communication & Marketing Digital",
      school: "ESG Montpellier",
      location: "Montpellier",
      period: "2024",
      details: "Diplôme validé. Maîtrise des leviers de communication 360°, du marketing d'influence, du social listening et de la gestion de projet événementiel."
    },
    {
      degree: "BTS NDRC — Négociation et Digitalisation de la Relation Client",
      school: "Montpellier",
      location: "Montpellier",
      period: "2022",
      details: "Stratégies omnicanales, relation client digitale, prospection et négociation commerciale."
    },
    {
      degree: "BAC STMG — Option Marketing",
      school: "Lycée Alain Borne",
      location: "France",
      period: "2020",
      details: "Fondamentaux du marketing, analyse de marché, comportement des consommateurs et communication d'entreprise."
    }
  ] as Education[],

  skills: [
    {
      title: "Social Media & Stratégie",
      skills: [
        { name: "Création de contenu", description: "Reels, TikToks, Carrousels, Stories immersives et engageantes" },
        { name: "Gestion de communauté", description: "Modération, engagement d'audience, tonalité de marque et fidélisation" },
        { name: "Veille digitale & Trends", description: "Détection des formats émergents, audio viraux et algorithmes TikTok / Instagram" },
        { name: "Gestion de projets & Planning", description: "Calendriers éditoriaux, rétroplannings et coordination d'équipes" },
      ]
    },
    {
      title: "Création Audiovisuelle",
      skills: [
        { name: "Photographie & Vidéo", description: "Prise de vue produit, lifestyle, portraits, concerts et shootings mode" },
        { name: "Montage vidéo & Retouche", description: "Montage rythmé vertical (9:16), colorimétrie et étalonnage photo" },
        { name: "Direction artistique & Visuels", description: "Harmonie de feed Instagram, chartes graphiques et templates Canva" },
        { name: "Merchandising visuel", description: "Mise en scène physique des collections et cohérence omnicanale" },
      ]
    }
  ] as SkillCategory[],

  tools: [
    {
      name: "Adobe Photoshop",
      category: "Graphisme & Retouche",
      description: "Détourage précis, photomontages publicitaires, retouches photo et création de visuels pour les réseaux.",
      highlight: true
    },
    {
      name: "Adobe Lightroom",
      category: "Photographie & Colorimétrie",
      description: "Traitement par lot, création de presets personnalisés et harmonisation des teintes pour feeds soignés.",
      highlight: true
    },
    {
      name: "CapCut",
      category: "Montage Vidéo",
      description: "Montage dynamique de Reels & TikToks, transitions millimétrées, sous-titrage animé et sound design.",
      highlight: true
    },
    {
      name: "Meta Business Suite",
      category: "Social Media Management",
      description: "Programmation des publications Instagram & Facebook, gestion des messages et analyse des métriques.",
      highlight: true
    },
    {
      name: "TikTok Business",
      category: "Tendances & Ads",
      description: "Veille des sons tendances, Creative Center, formats publicitaires Spark Ads et analyse d'audience.",
      highlight: true
    },
    {
      name: "Canva",
      category: "Design Rapide",
      description: "Création rapide de templates de stories réutilisables, présentations de concepts et infographies.",
      highlight: false
    }
  ] as ToolItem[],

  portfolioItems: [
    {
      id: "p1",
      title: "Scénographie & Merchandising Retail",
      category: "Mode & Retail",
      company: "Tamaris Paris",
      image: "/src/assets/images/project_fashion_tamaris_1790926472090.jpg",
      format: "Visuel Merchandising",
      description: "Mise en valeur de la collection de chaussures en boutique parisienne avec une mise en scène architecturée et un parcours visuel attrayant.",
      stats: "Présentation vitrine & boutique",
      tags: ["Merchandising", "Mode", "Agencement", "Paris"]
    },
    {
      id: "p2",
      title: "Campagne Produits Clean Beauty & Skincare",
      category: "Beauté & Cosmétiques",
      company: "Client Freelance",
      image: "/src/assets/images/project_social_beauty_1790926484972.jpg",
      format: "Instagram Post",
      description: "Direction artistique, shooting flatlay lumière naturelle et conception de carrousels éducatifs sur les routines skincare.",
      stats: "+34% d'enregistrements",
      tags: ["Flatlay", "Skincare", "Carrousel", "Feed Design"]
    },
    {
      id: "p3",
      title: "Captation Live & Ambiance Festival",
      category: "Musique & Live",
      company: "Handy Communication",
      image: "/src/assets/images/project_music_concert_1790926495629.jpg",
      format: "Shooting Photo",
      description: "Couverture photographique en direct lors d'un concert live : captation de l'énergie scénique, retouche rapide pour publication en story en temps réel.",
      stats: "Couverture live événement",
      tags: ["Concert", "Photo Live", "Storytelling", "Lightroom"]
    },
    {
      id: "p4",
      title: "Campagne Sportswear & Running Dynamique",
      category: "Sport & Événement",
      company: "Macron Store & Projets",
      image: "/src/assets/images/project_sport_athletic_1790926505947.jpg",
      format: "TikTok / Reel",
      description: "Shooting en mouvement au coucher de soleil à Paris avec concept vidéo court axé sur le dépassement de soi et l'équipement running.",
      stats: "Format 9:16 dynamique",
      tags: ["Sport", "Reels", "CapCut", "Outdoor"]
    }
  ] as PortfolioItem[]
};

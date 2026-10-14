/**
 * Contenu central du site — FR et EN.
 * Photos d’équipe : renseignez `photo` (ex. "/team/lea.jpg") quand vous les aurez.
 */

const members = [
  { firstName: "Léa", role: { fr: "Marketing & marque", en: "Marketing & brand" }, photo: null },
  { firstName: "Noah", role: { fr: "Finance & analyse", en: "Finance & analysis" }, photo: null },
  { firstName: "Camille", role: { fr: "Communication", en: "Communications" }, photo: null },
  { firstName: "Matteo", role: { fr: "Stratégie", en: "Strategy" }, photo: null },
  { firstName: "Sofia", role: { fr: "Événementiel", en: "Events" }, photo: null },
  { firstName: "Julien", role: { fr: "Études de marché", en: "Market research" }, photo: null },
  { firstName: "Emma", role: { fr: "Contenu & digital", en: "Content & digital" }, photo: null },
  { firstName: "Théo", role: { fr: "Développement commercial", en: "Business development" }, photo: null },
  { firstName: "Chloé", role: { fr: "Gestion de projet", en: "Project management" }, photo: null },
  { firstName: "Lucas", role: { fr: "Opérations", en: "Operations" }, photo: null },
];

const shared = {
  name: "VA",
  year: 2027,
  program: "Team Academy",
  school: "HES-SO Valais",
  schoolLong: "HES-SO Valais-Wallis · HEG Sierre",
  mainSiteUrl: "https://www.sedniner.ch",
  mainSiteLabel: "sedniner.ch",
  canonicalUrl: "https://ta-valais-mission.vercel.app",
  social: {
    linkedin: "https://www.linkedin.com/school/hes-so-valais-wallis/",
    instagram: "",
  },
  calendly: "",
  contact: {
    name: "Noa Macgeorge",
    email: "noa.macgeorge@students.hevs.ch",
    phone: "",
  },
};

function localeMembers(lang) {
  return members.map((m) => ({
    firstName: m.firstName,
    photo: m.photo,
    role: m.role[lang],
  }));
}

export const content = {
  fr: {
    site: {
      ...shared,
      nameFull: "VA · Voyage apprenant",
      tagline: "Voyage apprenant · Malaisie & Singapour 2027",
      contact: {
        ...shared.contact,
        role: "Référent voyage apprenant",
      },
      seo: {
        title: "VA · Voyage apprenant — Malaisie & Singapour 2027",
        description:
          "VA est le voyage apprenant de dix consultants juniors de la HES-SO Valais, à Kuala Lumpur et Singapour. Confiez-nous un mandat de conseil ou accueillez-nous pour une visite d’entreprise.",
      },
    },
    ui: {
      skip: "Aller au contenu",
      openMenu: "Ouvrir le menu",
      closeMenu: "Fermer le menu",
      navAria: "Navigation principale",
      langAria: "Langue",
      chapter: "Chapitre",
      mainSite: "Site principal",
    },
    nav: {
      links: [
        { href: "#qui-nous-sommes", label: "L’équipe" },
        { href: "#mission", label: "Le voyage" },
        { href: "#offres", label: "Nos offres" },
        { href: "#deroule", label: "Le déroulé" },
      ],
      cta: { href: "#contact", label: "Nous contacter" },
    },
    hero: {
      label: "VA · Voyage apprenant · Team Academy · HES-SO Valais",
      titleLines: [
        "Un regard neuf venu de Suisse",
        "pour vos défis en Asie du Sud-Est.",
      ],
      subtitle:
        "Nous sommes dix consultants juniors de la HES-SO Valais, organisés en coopérative. VA est notre voyage apprenant : en février 2027, nous travaillons à Kuala Lumpur puis à Singapour — pour des entreprises qui veulent un regard extérieur, précis et engagé.",
      primaryCta: { href: "#mandat", label: "Nous confier un mandat" },
      secondaryCta: { href: "#visite", label: "Nous accueillir en visite" },
      scrollHint: "Faire défiler",
    },
    team: {
      id: "qui-nous-sommes",
      number: "01",
      title: "Qui nous sommes",
      lead: "Une coopérative étudiante. De vrais mandats. Un regard neuf.",
      body: [
        "Team Academy n’est pas un cursus magistral. C’est un modèle finlandais — Tiimiakatemia — implanté à la HEG Sierre : on apprend en faisant, au sein d’une coopérative étudiante, sur des projets réels pour de vrais clients.",
        "Nous préparons un Bachelor en économie d’entreprise. Nos profils se complètent : marketing, communication, finance, stratégie, événementiel, analyse. Nous travaillons en français, en anglais et en allemand.",
        "Ce que vous gagnez : une équipe déjà rodée à livrer, un regard extérieur sans parti pris, et l’énergie de dix personnes qui ont choisi d’apprendre sur le terrain.",
      ],
      stats: [
        { value: 10, suffix: "", label: "membres" },
        { value: 1, suffix: "", label: "coopérative" },
        { value: 3, suffix: "", label: "langues parlées" },
        { value: 27, suffix: "", label: "jours sur place" },
      ],
      members: localeMembers("fr"),
      projectsNote: "Curieux de nos réalisations ?",
      projectsLinkLabel: "Découvrez-les sur notre site principal",
      transition:
        "Cette année, nous emmenons cette approche de l’autre côté du monde.",
    },
    mission: {
      id: "mission",
      number: "02",
      title: "Le voyage apprenant",
      lead: "Comprendre autrement. Apporter quelque chose. Relier deux écosystèmes.",
      learningJourney: {
        kicker: "VA, c’est un voyage apprenant",
        title: "Pas un séjour. Un dispositif de travail.",
        body: [
          "Un voyage apprenant n’est pas un voyage d’études, ni des vacances. C’est un module à part entière de Team Academy : on quitte le campus pour aller apprendre — et produire — dans un autre écosystème économique.",
          "On prépare le terrain en Suisse. Sur place, on visite des entreprises, on mène des mandats réels, on observe d’autres façons d’entreprendre. On en revient avec des livrables, des contacts, et une lecture plus juste du marché.",
          "Pour vous, cela veut dire une équipe encadrée, déjà habituée à livrer pour de vrais clients, qui arrive avec un cadre clair : comprendre votre contexte, contribuer concrètement, et ne pas vous faire perdre votre temps.",
        ],
      },
      whyTitle: "Pourquoi la Malaisie",
      why: [
        "Kuala Lumpur est l’un des hubs économiques les plus dynamiques d’Asie du Sud-Est : finance, tech, industrie, hospitalité, une scène entrepreneuriale dense et une diversité culturelle rare.",
        "La Malaisie est aussi une porte d’entrée vers l’ASEAN. Y travailler, c’est lire un marché de plus de 600 millions de personnes — et comprendre comment s’y prendre, concrètement.",
      ],
      visionTitle: "Notre vision du voyage",
      vision: [
        "Nous ne venons pas en touristes. Nous venons observer d’autres façons d’entreprendre, tester notre regard sur des problèmes réels, et laisser quelque chose d’utile derrière nous.",
        "Créer des ponts entre la Suisse et la Malaisie — puis Singapour — n’est pas un slogan. C’est le fil de la mission : des échanges francs, des livrables clairs, des relations qui peuvent durer.",
      ],
      map: {
        malaysia: "MALAISIE",
        thailand: "THAÏLANDE",
        klDates: "8 – 26 février 2027",
        sgDates: "27 fév. – 6 mars 2027",
        sgName: "Singapour",
        caption:
          "Carte de la péninsule malaise et de Singapour, avec Kuala Lumpur et Singapour indiqués.",
      },
      timeline: [
        {
          kicker: "Avant le départ",
          place: "Sierre, Suisse",
          dates: "Jusqu’en février 2027",
          detail: "Cadrage des mandats, recherche, préparation des visites.",
        },
        {
          kicker: "Chapitre 1",
          place: "Kuala Lumpur",
          dates: "8 – 26 février 2027",
          detail:
            "Mandats sur place, visites d’entreprises, immersion dans l’écosystème malaisien.",
        },
        {
          kicker: "Chapitre 2",
          place: "Singapour",
          dates: "27 février – 6 mars 2027",
          detail:
            "Second hub : regard sur un écosystème mondial, suites de mandats et rencontres.",
        },
      ],
      transition: "Et c’est là que vous entrez en jeu.",
    },
    offers: {
      id: "offres",
      number: "03",
      title: "Ce que nous offrons",
      lead: "Deux manières de travailler ensemble. À vous de choisir celle qui crée le plus de valeur.",
      cards: [
        {
          id: "mandat",
          kicker: "Offre A",
          title: "Mandat de conseil",
          cta: "Proposer un mandat",
          mailtoSubject: "Mandat – VA voyage apprenant",
          mailtoBody:
            "Bonjour,\n\nNous souhaiterions explorer un mandat de conseil avec VA (voyage apprenant, Team Academy HES-SO Valais) dans le cadre de la mission Malaisie 2027.\n\nContexte de l’entreprise :\nDéfi ou besoin :\nÉchéance souhaitée :\n\nCordialement,\n",
          forWho:
            "Entreprises qui ont un défi concret : étude de marché, stratégie marketing ou communication, analyse, création de contenu, organisation d’événement, regard extérieur sur un projet en cours.",
          implies:
            "Vous nous confiez un périmètre clair. Nous constituons une équipe dédiée, cadrons le besoin avec vous, puis avançons — à distance d’abord, sur place ensuite. Vous restez le décideur ; nous livrons.",
          youGain:
            "Une équipe motivée, déjà habituée à produire pour des clients réels. Un regard frais, sans habitudes locales. Un livrable concret, utilisable : diagnostic, recommandations, supports, plan d’action.",
          format:
            "4 à 8 semaines au total. Cadrage et travail à distance depuis la Suisse (janvier – début février), puis ateliers et avancement sur place à Kuala Lumpur et/ou Singapour. Équipe projet : 3 à 6 personnes selon l’ampleur. Langues : anglais, français, allemand.",
        },
        {
          id: "visite",
          kicker: "Offre B",
          title: "Visite d’entreprise",
          cta: "Nous accueillir",
          mailtoSubject: "Visite – VA voyage apprenant",
          mailtoBody:
            "Bonjour,\n\nNous serions ouverts à accueillir VA (voyage apprenant, Team Academy HES-SO Valais) pour une visite d’entreprise dans le cadre de la mission Malaisie 2027.\n\nEntreprise / site :\nVille :\nCréneaux possibles :\n\nCordialement,\n",
          forWho:
            "Entreprises prêtes à nous ouvrir leurs portes — à Kuala Lumpur, à Singapour, ou dans les alentours. Toute taille, tout secteur : ce qui compte, c’est l’échange.",
          implies:
            "Nous venons découvrir votre activité, échanger avec vos équipes et comprendre votre marché. Pas de posture de jugement : de la curiosité professionnelle, des questions préparées, du respect du temps que vous nous offrez.",
          youGain:
            "Visibilité auprès d’une haute école suisse et d’une promotion de futurs cadres. Un échange interculturel sincère. Sur demande, un retour d’observation écrit — le regard de l’extérieur, condensé.",
          format:
            "1 h 30 à 3 h, selon ce que vous pouvez offrir. Délégation de 4 à 10 personnes, adaptée à votre capacité d’accueil. Programme type : présentation, visite des lieux, échange avec des responsables. Langue principale : anglais.",
        },
      ],
      structure: [
        { key: "forWho", label: "Pour qui" },
        { key: "implies", label: "Ce que ça implique" },
        { key: "youGain", label: "Ce que vous y gagnez" },
        { key: "format", label: "Format" },
      ],
      transition: "Un cadre simple. Ensuite, on se met au travail.",
    },
    process: {
      id: "deroule",
      number: "04",
      title: "Comment ça se passe",
      lead: "Un processus court. Peu de friction. Des engagements clairs de part et d’autre.",
      steps: [
        {
          number: "01",
          title: "Premier échange",
          text: "Un appel ou un e-mail suffit. Vous nous dites où vous en êtes. Nous vous disons ce que nous pouvons porter — et ce que nous ne pourrons pas.",
        },
        {
          number: "02",
          title: "Cadrage ensemble",
          text: "Mandat : nous définissons le besoin, le livrable et le calendrier. Visite : nous construisons un programme qui respecte votre rythme et nos questions.",
        },
        {
          number: "03",
          title: "Préparation avant le départ",
          text: "Depuis la Suisse, nous documentons, nous recherchons, nous préparons. Vous n’êtes pas notre terrain d’entraînement : vous nous trouvez prêts.",
        },
        {
          number: "04",
          title: "Sur place, puis après",
          text: "Réalisation à Kuala Lumpur et/ou Singapour. Livrable pour un mandat. Retour d’observation pour une visite. Nous fermons la boucle.",
        },
      ],
    },
    cta: {
      id: "contact",
      number: "05",
      title: "Écrivons ensemble un chapitre de cette histoire.",
      text: "Un mandat ciblé, ou une porte ouverte. Les deux font avancer la mission — et, nous le pensons, votre entreprise aussi.",
      options: [
        {
          id: "mandat",
          label: "Confier un mandat",
          hint: "Un défi concret, un livrable, une équipe dédiée.",
        },
        {
          id: "visite",
          label: "Proposer une visite",
          hint: "Un créneau, une conversation, un regard extérieur.",
        },
      ],
      calendlyLabel: "Choisir un créneau",
    },
    footer: {
      blurb:
        "Voyage apprenant · Coopérative étudiante · Business Team Academy · Bachelor en économie d’entreprise",
      legal: "VA · Voyage apprenant · Team Academy · HES-SO Valais",
    },
  },

  en: {
    site: {
      ...shared,
      nameFull: "VA · Learning journey",
      tagline: "Learning journey · Malaysia & Singapore 2027",
      contact: {
        ...shared.contact,
        role: "Learning journey contact",
      },
      seo: {
        title: "VA · Learning journey — Malaysia & Singapore 2027",
        description:
          "VA is the learning journey of ten junior consultants from HES-SO Valais, in Kuala Lumpur and Singapore. Brief us on a consulting assignment, or host us for a company visit.",
      },
    },
    ui: {
      skip: "Skip to content",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      navAria: "Main navigation",
      langAria: "Language",
      chapter: "Chapter",
      mainSite: "Main website",
    },
    nav: {
      links: [
        { href: "#qui-nous-sommes", label: "The team" },
        { href: "#mission", label: "The journey" },
        { href: "#offres", label: "What we offer" },
        { href: "#deroule", label: "How it works" },
      ],
      cta: { href: "#contact", label: "Contact us" },
    },
    hero: {
      label: "VA · Learning journey · Team Academy · HES-SO Valais",
      titleLines: [
        "A fresh look from Switzerland",
        "for your challenges in Southeast Asia.",
      ],
      subtitle:
        "We are ten junior consultants from HES-SO Valais, organised as a student cooperative. VA is our learning journey: in February 2027 we work in Kuala Lumpur, then Singapore — for companies that want an outside view that is sharp, and committed.",
      primaryCta: { href: "#mandat", label: "Brief us on a mandate" },
      secondaryCta: { href: "#visite", label: "Host a company visit" },
      scrollHint: "Scroll",
    },
    team: {
      id: "qui-nous-sommes",
      number: "01",
      title: "Who we are",
      lead: "A student cooperative. Real assignments. A fresh perspective.",
      body: [
        "Team Academy is not a lecture-based programme. It is a Finnish model — Tiimiakatemia — based at HEG Sierre: we learn by doing, as a student cooperative, on real projects for real clients.",
        "We are completing a Bachelor’s in Business Administration. Our profiles complement each other: marketing, communications, finance, strategy, events, analysis. We work in French, English and German.",
        "What you get: a team already used to delivering, an unbiased outside view, and the energy of ten people who chose to learn in the field.",
      ],
      stats: [
        { value: 10, suffix: "", label: "members" },
        { value: 1, suffix: "", label: "cooperative" },
        { value: 3, suffix: "", label: "languages" },
        { value: 27, suffix: "", label: "days on the ground" },
      ],
      members: localeMembers("en"),
      projectsNote: "Curious about our work?",
      projectsLinkLabel: "See it on our main website",
      transition: "This year, we take that approach to the other side of the world.",
    },
    mission: {
      id: "mission",
      number: "02",
      title: "The learning journey",
      lead: "Understand differently. Contribute something. Connect two ecosystems.",
      learningJourney: {
        kicker: "VA is a learning journey",
        title: "Not a trip. A working format.",
        body: [
          "A learning journey is not a study tour, and it is not a holiday. It is a full module of Team Academy: we leave campus to learn — and to produce — in another economic ecosystem.",
          "We prepare in Switzerland. On the ground, we visit companies, we run real assignments, we observe other ways of doing business. We come back with deliverables, contacts, and a clearer reading of the market.",
          "For you, that means a supervised team, already used to delivering for real clients, arriving with a clear brief: understand your context, contribute in concrete terms, and not waste your time.",
        ],
      },
      whyTitle: "Why Malaysia",
      why: [
        "Kuala Lumpur is one of the most dynamic economic hubs in Southeast Asia: finance, tech, industry, hospitality, a dense entrepreneurial scene and rare cultural diversity.",
        "Malaysia is also a gateway to ASEAN. Working there means reading a market of more than 600 million people — and understanding, in practice, how to operate in it.",
      ],
      visionTitle: "How we see the journey",
      vision: [
        "We are not coming as tourists. We come to observe other ways of building companies, to test our judgement on real problems, and to leave something useful behind.",
        "Building bridges between Switzerland and Malaysia — then Singapore — is not a slogan. It is the thread of the mission: frank conversations, clear deliverables, relationships that can last.",
      ],
      map: {
        malaysia: "MALAYSIA",
        thailand: "THAILAND",
        klDates: "8 – 26 February 2027",
        sgDates: "27 Feb – 6 March 2027",
        sgName: "Singapore",
        caption:
          "Map of Peninsular Malaysia and Singapore, with Kuala Lumpur and Singapore marked.",
      },
      timeline: [
        {
          kicker: "Before departure",
          place: "Sierre, Switzerland",
          dates: "Until February 2027",
          detail: "Scoping assignments, research, preparing company visits.",
        },
        {
          kicker: "Chapter 1",
          place: "Kuala Lumpur",
          dates: "8 – 26 February 2027",
          detail:
            "On-site assignments, company visits, immersion in the Malaysian ecosystem.",
        },
        {
          kicker: "Chapter 2",
          place: "Singapore",
          dates: "27 February – 6 March 2027",
          detail:
            "Second hub: a view on a global ecosystem, follow-up on assignments and meetings.",
        },
      ],
      transition: "This is where you come in.",
    },
    offers: {
      id: "offres",
      number: "03",
      title: "What we offer",
      lead: "Two ways to work together. Choose the one that creates the most value for you.",
      cards: [
        {
          id: "mandat",
          kicker: "Offer A",
          title: "Consulting mandate",
          cta: "Propose a mandate",
          mailtoSubject: "Mandate – VA learning journey",
          mailtoBody:
            "Hello,\n\nWe would like to explore a consulting mandate with VA (learning journey, Team Academy HES-SO Valais) as part of the Malaysia 2027 mission.\n\nCompany context:\nChallenge or need:\nPreferred timing:\n\nKind regards,\n",
          forWho:
            "Companies with a concrete challenge: market research, marketing or communications strategy, analysis, content, event organisation, an outside view on a live project.",
          implies:
            "You give us a clear scope. We assemble a dedicated team, frame the need with you, then we work — remotely first, on site afterwards. You remain the decision-maker; we deliver.",
          youGain:
            "A motivated team, already used to producing for real clients. A fresh view, without local habits. A concrete, usable deliverable: diagnosis, recommendations, materials, action plan.",
          format:
            "4 to 8 weeks in total. Scoping and remote work from Switzerland (January – early February), then workshops and progress on site in Kuala Lumpur and/or Singapore. Project team: 3 to 6 people depending on scope. Languages: English, French, German.",
        },
        {
          id: "visite",
          kicker: "Offer B",
          title: "Company visit",
          cta: "Host us",
          mailtoSubject: "Visit – VA learning journey",
          mailtoBody:
            "Hello,\n\nWe would be open to hosting VA (learning journey, Team Academy HES-SO Valais) for a company visit as part of the Malaysia 2027 mission.\n\nCompany / site:\nCity:\nPossible time slots:\n\nKind regards,\n",
          forWho:
            "Companies willing to open their doors — in Kuala Lumpur, Singapore, or nearby. Any size, any sector: what matters is the exchange.",
          implies:
            "We come to understand your activity, speak with your teams and grasp your market. No posture of judgement: professional curiosity, prepared questions, respect for the time you give us.",
          youGain:
            "Visibility with a Swiss university of applied sciences and a cohort of future managers. A genuine intercultural exchange. On request, a short written observation — the outside view, condensed.",
          format:
            "1.5 to 3 hours, depending on what you can offer. A delegation of 4 to 10 people, sized to your capacity. Typical programme: presentation, site visit, discussion with leaders. Main language: English.",
        },
      ],
      structure: [
        { key: "forWho", label: "Who it is for" },
        { key: "implies", label: "What it involves" },
        { key: "youGain", label: "What you gain" },
        { key: "format", label: "Format" },
      ],
      transition: "A simple frame. Then we get to work.",
    },
    process: {
      id: "deroule",
      number: "04",
      title: "How it works",
      lead: "A short process. Little friction. Clear commitments on both sides.",
      steps: [
        {
          number: "01",
          title: "First conversation",
          text: "A call or an email is enough. You tell us where you stand. We tell you what we can take on — and what we cannot.",
        },
        {
          number: "02",
          title: "Scoping together",
          text: "Mandate: we define the need, the deliverable and the timeline. Visit: we build a programme that respects your pace and our questions.",
        },
        {
          number: "03",
          title: "Preparation before we leave",
          text: "From Switzerland we research, document and prepare. You are not our training ground: you meet us ready.",
        },
        {
          number: "04",
          title: "On site, then after",
          text: "Delivery in Kuala Lumpur and/or Singapore. A deliverable for a mandate. An observation note for a visit. We close the loop.",
        },
      ],
    },
    cta: {
      id: "contact",
      number: "05",
      title: "Let’s write a chapter of this story together.",
      text: "A focused mandate, or an open door. Both move the journey forward — and, we believe, your company as well.",
      options: [
        {
          id: "mandat",
          label: "Brief a mandate",
          hint: "A concrete challenge, a deliverable, a dedicated team.",
        },
        {
          id: "visite",
          label: "Propose a visit",
          hint: "A time slot, a conversation, an outside view.",
        },
      ],
      calendlyLabel: "Pick a time",
    },
    footer: {
      blurb:
        "Learning journey · Student cooperative · Business Team Academy · Bachelor in Business Administration",
      legal: "VA · Learning journey · Team Academy · HES-SO Valais",
    },
  },
};

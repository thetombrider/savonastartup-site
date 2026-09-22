export const siteUrl = "https://savonastartup.it";

export const siteName = "Savona Startup";

export const defaultDescription =
  "Savona Startup: una community di innovatori e imprenditori per condividere idee, esperienze e risorse. Entra anche tu nel mondo Startup!";

export const links = {
  join: "https://tally.so/r/meAeG0",
  applyEvent: "https://tally.so/r/81eKrY",
  donate: "https://pay.sumup.com/b2c/QKZOGUQF",
  events: "https://www.eventbrite.it/o/savona-startup-112910331171#events",
  startupWeekend: "https://startupweekendsavona.com",
  newsletter:
    "https://7c5039af.sibforms.com/serve/MUIFACL7QL27Y5-uKcc-EaTQ9QMz3tvdNkwpTaAv8zVFTy0eEQCjgW77PPsyp30c18okzW3u9MqX16eZt-tpzV1a-NDE0ar8aZfTGoFXVe6pcPN3DpF9ep-m98q9gbq-HudhDKFH0VzlFoLTVsamJRPGsNHmUQxtCAoUTXOY09y72RHx8-H_O6voL6NUmTmMm5YO_AIPdZ9-wUzx",
  instagram: "https://www.instagram.com/savonastartup/",
  linkedin: "https://www.linkedin.com/company/savona-startup/",
  privacy: "https://www.iubenda.com/privacy-policy/59536795",
  cookies: "https://www.iubenda.com/privacy-policy/59536795/cookie-policy",
  email: "info@savonastartup.it",
  emailAlt: "savonastartup@gmail.com",
  statuto: "https://www.papermark.io/view/cm7yx87kw000mi803r818962l",
  atto: "https://www.papermark.io/view/cm0l2pehf000iapaoiv7g7n62",
  bilanci: "https://www.papermark.com/view/cmcvzvens000gkw04l2k2y1mn",
} as const;

export type NavChild = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  external?: boolean;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/vantaggi-socio", label: "Diventa Socio!" },
  {
    href: "/sei-unazienda-diventa-partner",
    label: "Sei un'azienda? Diventa Partner!",
  },
  { href: links.donate, label: "Dona Ora", external: true },
  {
    href: "/associazione",
    label: "Chi Siamo",
    children: [
      { href: "/vision", label: "Vision & Mission" },
      { href: "/organigramma", label: "Organigramma" },
    ],
  },
  { href: links.events, label: "Eventi", external: true },
];

export const pillars = [
  {
    title: "Community",
    text: "Unisciti alla nostra vibrante comunità di innovatori e imprenditori per condividere idee, esperienze e risorse.",
  },
  {
    title: "Networking",
    text: "Promuoviamo innovazione e impresa unendo startupper, studenti, designer, professionisti e imprenditori.",
  },
  {
    title: "Conferenze",
    text: "Partecipa a conferenze con esperti del settore per scoprire tendenze innovative e approfondimenti preziosi.",
  },
  {
    title: "Workshops",
    text: "Prendi parte a workshop pratici per sviluppare nuove competenze e migliorare le tue capacità imprenditoriali.",
  },
] as const;

export const recurringEvents = [
  {
    cadence: "4–6 dicembre 2026",
    title: "Startup Weekend Savona",
    text: "54 ore alla Fortezza del Priamar per trasformare un'idea in startup.",
    href: links.startupWeekend,
    image: "/images/events/startup-weekend.png",
    cta: "Vai al sito",
  },
  {
    cadence: "Ogni mese",
    title: "AperiFounder",
    text: "L'incontro mensile con founder, startup e innovatori del territorio.",
    href: links.events,
    image: "/images/events/aperifounder.jpg",
    cta: "Vedi su Eventbrite",
  },
  {
    cadence: "Ogni tre mesi",
    title: "Savona Startup Incontra…",
    text: "Appuntamenti periodici per entrare in contatto con l'ecosistema.",
    href: links.events,
    image: "/images/events/incontra.jpg",
    cta: "Vedi su Eventbrite",
  },
] as const;

export const partners = [
  {
    name: "Camera di Commercio Milano Monza Brianza Lodi",
    src: "/images/partners/camera-di-commercio.png",
  },
  {
    name: "Comune di Savona",
    src: "/images/partners/comune-di-savona.png",
  },
  {
    name: "FILSE",
    src: "/images/partners/filse.png",
  },
  {
    name: "Università di Genova",
    src: "/images/partners/universita-di-genova.png",
  },
] as const;

export const documents = [
  {
    title: "Statuto",
    text: "Le regole con cui l'associazione si dà forma e persegue i propri scopi.",
    href: links.statuto,
  },
  {
    title: "Atto costitutivo",
    text: "L'atto con cui Savona Startup APS è stata costituita a giugno 2024.",
    href: links.atto,
  },
  {
    title: "Bilanci",
    text: "I documenti contabili dell'associazione, consultabili online.",
    href: links.bilanci,
  },
] as const;

export const timeline = [
  {
    date: "Giugno 2024",
    title: "Nasce Savona Startup!",
    text: "Dall'incontro e confronto di nove giovani, vengono messi a fattore comune obiettivi, idee e progetti per il tessuto sociale e imprenditoriale di Savona.",
  },
  {
    date: "Luglio 2024",
    title: "Lancio “AperiFounder”",
    text: "Un ciclo di incontri per avvicinarsi al mondo delle startup, invitando gli stessi founder a raccontare in prima persona cosa significa mettersi in gioco come imprenditori.",
  },
  {
    date: "Dicembre 2024",
    title: "Startup Weekend Savona",
    text: "La prima edizione savonese di Techstars Startup Weekend, un hackathon basato su un format internazionale e concentrato sullo sviluppo di idee imprenditoriali.",
  },
  {
    date: "Q1 2025",
    title: "Lancio eventi",
    text: "Consolidamento della community tramite incontri mensili con associati e imprenditori del territorio e non, per condividere esperienze e idee.",
  },
  {
    date: "Q4 2025",
    title: "Startup Weekend Savona",
    text: "La seconda edizione savonese di Techstars Startup Weekend, un hackathon basato su un format internazionale e concentrato sullo sviluppo di idee imprenditoriali.",
  },
  {
    date: "Q2 2026",
    title: "Coworking",
    text: "Abbiamo aperto il coworking di via Paleocapa, in collaborazione con Filse: uno spazio per i soci, per lavorare insieme e far nascere collaborazioni.",
  },
] as const;

export type Person = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
};

export const board: Person[] = [
  {
    name: "Tommaso Minuto",
    role: "Presidente",
    bio: "Tommaso supervisiona le attività dell'associazione, gestisce gli adempimenti burocratici e costruisce partnership con le realtà del territorio.",
    image: "/images/team/tommaso-minuto.jpg",
    linkedin: "https://www.linkedin.com/in/tommaso-minuto/",
  },
  {
    name: "Eleonora Servodio",
    role: "Vice Presidente",
    bio: "Eleonora contribuisce al coordinamento dell'associazione e costruisce partnership con le realtà del territorio.",
    image: "/images/team/eleonora-servodio.jpg",
    linkedin: "https://www.linkedin.com/in/eleonora-servodio-b8bb91115/",
  },
  {
    name: "Giorgio Rossi",
    role: "Segretario",
    bio: "Giorgio supporta il Direttivo nel coordinamento delle attività dell'associazione.",
    image: "/images/team/giorgio-rossi.jpg",
    linkedin: "https://www.linkedin.com/in/giorgio-w-rossi/",
  },
];

export const coreTeam: Person[] = [
  {
    name: "Martina Bella",
    role: "Tesoriere",
    bio: "Martina è parte del team di Comunicazione e gestisce la tesoreria dell'associazione. Contribuisce anche all'organizzazione dello Startup Weekend Savona.",
  },
  {
    name: "Andrea Laiolo",
    role: "Startup Weekend Savona",
    bio: "Andrea è il primo punto di contatto per i nuovi soci. Contribuisce attivamente all'organizzazione di Startup Weekend Savona.",
  },
  {
    name: "Diletta Servodio",
    role: "Comunicazione",
    bio: "Diletta è parte del team di Comunicazione e contribuisce all'organizzazione dello Startup Weekend Savona.",
  },
  {
    name: "Aurora Freccero",
    role: "Startup Weekend Savona",
    bio: "Aurora contribuisce all'organizzazione di Startup Weekend Savona.",
  },
  {
    name: "Cecilia Padula",
    role: "Centro Studi",
    bio: "Cecilia contribuisce alla stesura di grant e domande di partecipazione a bandi.",
  },
  {
    name: "Andrea Ferraris",
    role: "Legal",
    bio: "Andrea si assicura che le attività di Savona Startup siano a norma di legge e revisiona la documentazione.",
  },
  {
    name: "Massimiliano Carpano",
    role: "Relazioni con la PA",
    bio: "Massimiliano gestisce i rapporti con le istituzioni, in particolare con il Comune di Savona.",
  },
  {
    name: "Elisabetta Minuto",
    role: "Comunicazione",
    bio: "Elisabetta è parte del team di Comunicazione e contribuisce all'organizzazione dello Startup Weekend Savona.",
  },
  {
    name: "Emma Vitiello",
    role: "Comunicazione",
    bio: "Emma supporta il team di Comunicazione con competenze di growth e digital marketing.",
  },
  {
    name: "Gabriele Dorati",
    role: "Stampa",
    bio: "Gabriele cura le relazioni con le testate locali.",
  },
  {
    name: "Fabrizio Core",
    role: "Centro Studi",
    bio: "Fabrizio contribuisce alla stesura di grant e domande di partecipazione a bandi.",
  },
  {
    name: "Gianluca Barberis",
    role: "Startup Weekend Savona",
    bio: "Gianluca contribuisce alla gestione di Startup Weekend Savona.",
  },
];

export const memberBenefits = [
  {
    title: "Networking",
    text: "Partecipa a eventi di networking, convegni e meeting per connetterti con imprenditori, esperti e appassionati di innovazione.",
  },
  {
    title: "Formazione",
    text: "Accedi ad attività di educazione, formazione professionale e re-skilling su competenze digitali, ICT e STEM.",
  },
  {
    title: "Progetti",
    text: "Collabora con persone preparate e intraprendenti. Potresti anche trovare il tuo prossimo cofounder.",
  },
  {
    title: "Eventi",
    text: "Partecipa o contribuisci a organizzare eventi come AperiFounder e Startup Weekend Savona.",
  },
  {
    title: "Coworking",
    text: "I soci possono accedere al coworking di via Paleocapa, uno spazio di lavoro condiviso aperto in collaborazione con Filse.",
  },
  {
    title: "Partecipazione",
    text: "Ogni socio può partecipare alla governance dell'associazione, portando il proprio punto di vista sul futuro del territorio.",
  },
] as const;

export const partnerWays = [
  {
    title: "Sponsorizzazione",
    text: "Contribuisci alle spese dei nostri eventi ottenendo visibilità e posizionamento per il tuo brand.",
    names: [
      "Unione Industriali di Savona",
      "Fondazione De Mari",
      "Comune di Savona",
      "Azimut Wealth Management",
      "Fideuram",
      "Mesa",
    ],
  },
  {
    title: "Mentorship",
    text: "Metti a disposizione le competenze dei tuoi professionisti per aiutare i team a sviluppare progetti innovativi.",
    names: [
      "Plino",
      "Menumal",
      "JustSolve",
      "Hodlie",
      "Ziflo",
      "IIT",
      "Blue Factory",
      "B4I",
      "Techstars",
    ],
  },
  {
    title: "Supporto tecnico e logistico",
    text: "Supporta i momenti ricreativi o fornisci gadget per far conoscere i prodotti del territorio ai partecipanti.",
    names: ["Antico Forno Besio", "Cooperativa Calcagno", "Cellini Caffè"],
  },
  {
    title: "Promozione",
    text: "Aiuta a diffondere le iniziative dell'associazione attraverso i canali social e le newsletter aziendali.",
    names: [],
  },
] as const;

export const partnerOpportunities = [
  {
    title: "Talent acquisition",
    text: "Incontra talenti appassionati di tecnologia e imprenditorialità in un contesto informale e produttivo.",
  },
  {
    title: "Networking",
    text: "Accedi a occasioni di confronto tra partecipanti, mentor, giudici e altri imprenditori presenti agli eventi.",
  },
  {
    title: "Open innovation",
    text: "Esplora nuovi trend e accedi a idee innovative in ambito digital che possono ispirare l'evoluzione della tua azienda.",
  },
] as const;

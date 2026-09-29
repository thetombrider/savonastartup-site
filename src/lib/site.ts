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
  { href: "/dicono-di-noi", label: "Dicono di noi" },
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
    name: "Camera di Commercio Riviere di Liguria – Imperia La Spezia Savona",
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

export type PressArticle = {
  date: string;
  outlet: string;
  title: string;
  summary: string;
  href: string;
};

export const pressQuotes = [
  {
    quote:
      "Quello che è avvenuto qua oggi per noi è davvero una grande boccata di ossigeno.",
    attribution: "Marco Russo, sindaco di Savona",
    source: "IVG.it",
  },
  {
    quote:
      "Questa associazione è già molto attiva sul territorio e adesso sarà proprio fisicamente nel cuore di Savona.",
    attribution: "Elisa Di Padova, vicesindaco di Savona",
    source: "IVG.it",
  },
  {
    quote:
      "Crediamo che l'imprenditoria possa nascere ovunque, anche lontano dai grandi poli innovativi.",
    attribution: "Tommaso Minuto, presidente di Savona Startup",
    source: "Savonanews.it",
  },
] as const;

export const pressArticles: PressArticle[] = [
  {
    date: "2026-09-09",
    outlet: "IVG.it",
    title:
      "Smartcup Academy Liguria 2026 fa tappa a Savona: confronto tra innovazione, impresa e trasferimento tecnologico",
    summary:
      "Alla sede Filse di via Paleocapa, Savona Startup presenta attività e strumenti per chi vuole avviare una startup sul territorio, durante la tappa savonese dell'Academy regionale.",
    href: "https://www.ivg.it/2026/09/smartcup-academy-liguria-2026-fa-tappa-a-savona-confronto-tra-innovazione-impresa-e-trasferimento-tecnologico/",
  },
  {
    date: "2026-09-09",
    outlet: "Savonanews.it",
    title:
      "SMARTcup Academy Liguria 2026 fa tappa a Savona: confronto tra innovazione, impresa e trasferimento tecnologico",
    summary:
      "La rassegna locale racconta il confronto tra aspiranti imprenditori, ricercatori e istituzioni, con Savona Startup tra i soggetti che accompagnano le idee del territorio.",
    href: "https://www.savonanews.it/2026/09/09/leggi-notizia/argomenti/attualit/articolo/smartcup-academy-liguria-2026-fa-tappa-a-savona-confronto-tra-innovazione-impresa-e-trasferimento.html",
  },
  {
    date: "2026-02-23",
    outlet: "IVG.it",
    title:
      "Savona, inaugurata la nuova sede Filse: punto di riferimento per imprese e startup del territorio",
    summary:
      "Sindaco e vicesindaco indicano Savona Startup come partner della nuova sede Filse BIC in via Paleocapa, spazio di coworking e innovazione nel centro città.",
    href: "https://www.ivg.it/2026/02/savona-inaugurata-la-nuova-sede-filse-punto-di-riferimento-per-imprese-e-startup-del-territorio/",
  },
  {
    date: "2026-02-23",
    outlet: "Savonanews.it",
    title:
      "Inaugurata a Savona la nuova sede di Filse: punto di riferimento per imprese e start up del territorio",
    summary:
      "L'apertura dello spazio Filse in via Paleocapa viene presentata anche come sede di riferimento per l'associazione, insieme a Regione Liguria e Università di Genova.",
    href: "https://www.savonanews.it/2026/02/23/leggi-notizia/argomenti/attualit/articolo/inaugurata-a-savona-le-nuova-sede-di-filse-punto-di-riferimento-per-imprese-e-start-up-del-territor.html",
  },
  {
    date: "2025-12-01",
    outlet: "IVG.it",
    title:
      "Torna OrientaRagazzi Savona, al via il 2 dicembre al Priamar: 380 posizioni aperte",
    summary:
      "Il Comune annuncia la seconda edizione di Startup Weekend Savona, dal 5 al 7 dicembre alla Sala Sibilla, come chiusura di OrientaRagazzi Lavoro.",
    href: "https://www.ivg.it/2025/12/torna-orientaragazzi-savona-al-via-il-2-dicembre-al-priamar-380-posizioni-aperte/",
  },
  {
    date: "2025-10-14",
    outlet: "Savonanews.it",
    title:
      "Startup Weekend Savona 2025: torna al Priamar l'evento che accende le idee e crea impresa",
    summary:
      "Dopo 40 partecipanti alla prima edizione, il format internazionale torna dal 5 al 7 dicembre. Il presidente Minuto: l'imprenditoria può nascere anche lontano dai grandi poli.",
    href: "https://www.savonanews.it/2025/10/14/leggi-notizia/argomenti/eventi-spettacoli/articolo/startup-weekend-savona-2025-torna-al-priamar-levento-che-accende-le-idee-e-crea-impresa.html",
  },
  {
    date: "2025-10-13",
    outlet: "IVG.it",
    title:
      "Startup Weekend Savona 2025: torna al Priamar l'evento che accende le idee e crea impresa",
    summary:
      "IVG racconta la seconda edizione al Priamar, gli Aperifounder mensili e il workshop di preparazione all'hackathon di 54 ore.",
    href: "https://www.ivg.it/2025/10/startup-weekend-savona-2025-torna-al-priamar-levento-che-accende-le-idee-e-crea-impresa/",
  },
  {
    date: "2025-07-07",
    outlet: "La Nuova Savona",
    title: "Economia in anteprima",
    summary:
      "Nella rassegna di piazza Pertini, Savona Startup incontra Gaetano De Maio: l'associazione è presentata come rete per far crescere l'ecosistema dell'innovazione savonese.",
    href: "https://www.lanuovasavona.it/2025/07/07/leggi-notizia/argomenti/news-1/articolo/economia-in-anteprima.html",
  },
  {
    date: "2025-06-05",
    outlet: "Trucioli.it",
    title: "Savona e il primo hackathon della sua storia",
    summary:
      "Il sito racconta Savona Hack, organizzato per il primo compleanno dell'associazione: 12 ore al Liceo Martini su sfide lanciate da aziende del territorio.",
    href: "https://trucioli.it/2025/06/05/savona-e-il-primo-hackathon-della-sua-storia-2-la-parlata-ligure-che-successo/",
  },
  {
    date: "2025-06-03",
    outlet: "IVG.it",
    title:
      'Il 14 giugno a Savona arriva "Savona Hack", il primo hackathon per chi vuole fare, imparare e innovare',
    summary:
      "Eleonora Servodio presenta il primo hackathon cittadino, con patrocinio del Comune e sfide proposte da aziende come Noveo, Gruppo Mesa e PYO.",
    href: "https://www.ivg.it/2025/06/il-14-giugno-il-savona-hack-il-primo-hackatlon-per-chi-vuole-fare-imparare-e-innovare/",
  },
  {
    date: "2025-06-03",
    outlet: "La Nuova Savona",
    title: "Savona Hack: 12 ore di 'maratona creativa'",
    summary:
      "La testata locale descrive l'hackathon all'Aula Magna del Liceo Arturo Martini, dopo i 40 partecipanti e le 8 idee nate allo Startup Weekend di dicembre.",
    href: "https://www.lanuovasavona.it/2025/06/03/leggi-notizia/argomenti/news-1/articolo/savona-hack-12-ore-di-maratona-creativa.html",
  },
  {
    date: "2025-04-18",
    outlet: "Savonanews.it",
    title:
      '"Capolavori d\'Impresa": Monica Brondi con Eleonora Servodio (Savona StartUp) e l\'ingegner Luca Bucchianica',
    summary:
      "Intervista alla vicepresidente: in un anno l'associazione cresce, tre progetti nati allo Startup Weekend restano attivi e si annuncia il primo hackathon.",
    href: "https://www.savonanews.it/2025/04/18/leggi-notizia/argomenti/eventi-spettacoli/articolo/capolavori-dimpresa-a-savona.html",
  },
  {
    date: "2024-12-10",
    outlet: "IVG.it",
    title:
      "Startup Weekend Savona, ottimo riscontro per la prima edizione dell'evento. Il sindaco Russo: «una grande boccata di ossigeno»",
    summary:
      "Gabriele Dorati racconta i sei team, la vittoria di Skillplay e le parole di Minuto, Rossi, Servodio, del sindaco Russo e della vicesindaca Di Padova.",
    href: "https://www.ivg.it/2024/12/startup-weekend-savona-ottimo-riscontro-per-la-prima-edizione-dellevento-il-sindaco-russo-quello-che-e-avvenuto-qua-oggi-per-noi-e-davvero-una-grande-boccata-di-ossigeno/",
  },
  {
    date: "2024-12-07",
    outlet: "IVG.it",
    title:
      "Priamar, all'OrientaRagazzi una grande novità: la prima edizione di Startup Weekend Savona",
    summary:
      "Giorgio Rossi, ai microfoni di IVG, spiega il format da 54 ore: 35 partecipanti, una decina di mentor e il supporto del Comune di Savona.",
    href: "https://www.ivg.it/2024/12/priamar-allorientaragazzi-una-grande-novita-la-prima-edizione-della-startup-weekend-savona/",
  },
  {
    date: "2024-12-02",
    outlet: "La Nuova Savona",
    title:
      "Orientaragazzi Savona: a dicembre l'appuntamento col mondo del lavoro",
    summary:
      "L'assessora Di Padova presenta il weekend dedicato alle startup innovative, con già 35 giovani iscritti alla prima edizione al Priamar.",
    href: "https://www.lanuovasavona.it/2024/12/02/leggi-notizia/argomenti/news-1/articolo/orientaragazzi-savona-a-dicembre-lappuntamento-col-mondo-del-lavoro.html",
  },
  {
    date: "2024-11-28",
    outlet: "Trucioli.it",
    title:
      "Nasce 'Savona Startup'. I giovani tra imprenditorialità e innovazione del territorio",
    summary:
      "Il periodico riprende la nascita dell'APS e l'annuncio dello Startup Weekend alla Sala della Sibilla, con le parole del presidente Minuto.",
    href: "https://trucioli.it/2024/11/28/nasce-savona-startup-i-giovani-tra-imprenditorialita-e-innovazione-del-territorio-2-villapiana-la-rusca-patto-di-collaborazione-con-il-comune-3-moi-la-violenza-del-rifiuto/",
  },
  {
    date: "2024-11-20",
    outlet: "La Stampa",
    title: "A Savona nasce la prima associazione delle start up",
    summary:
      "Denise Giusto racconta l'APS fondata da under 35 e il primo Startup Weekend al Priamar: «diventare il punto di riferimento per l'innovazione sul territorio».",
    href: "https://www.lastampa.it/savona/2024/11/20/news/savona_nasce_prima_associazione_start_up-14821029/",
  },
  {
    date: "2024-11-15",
    outlet: "IVG.it",
    title:
      "Nasce «Savona Startup»: un'associazione di giovani accomunati dall'obiettivo di sostenere l'imprenditorialità e l'innovazione nel territorio",
    summary:
      "Il pezzo di lancio dell'associazione: Aperifounder, community e primo Startup Weekend in Fortezza, con l'intervista a Tommaso Minuto.",
    href: "https://www.ivg.it/2024/11/nasce-savona-startup-unassociazione-di-giovani-accomunati-dallobiettivo-di-sostenere-limprenditorialita-e-linnovazione-nel-territorio/",
  },
  {
    date: "2024-11-15",
    outlet: "Savonanews.it",
    title:
      "Nasce «Savona Startup»: giovani talenti insieme per innovare e promuovere l'imprenditorialità locale",
    summary:
      "La testata locale pubblica il comunicato sulla nascita dell'APS e sul workshop di preparazione allo Startup Weekend da Futura Cantiere Plurale.",
    href: "https://www.savonanews.it/2024/11/15/leggi-notizia/argomenti/attualit/articolo/nasce-savona-startup-giovani-talenti-insieme-per-innovare-e-promuovere-limprenditorialita.html",
  },
  {
    date: "2024-11-01",
    outlet: "IVG.it",
    title:
      "Torna OrientaRagazzi Savona: il Priamar diventa un mega contenitore di opportunità",
    summary:
      "L'assessora Di Padova annuncia per dicembre la prima Startup Weekend Savona, accanto a Career Day e Speed Date al Priamar.",
    href: "https://www.ivg.it/2024/11/torna-orientaragazzi-savona-il-priamar-diventa-un-mega-contenitore-di-opportunita/",
  },
];

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

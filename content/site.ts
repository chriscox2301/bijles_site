/**
 * Alle teksten en gegevens van de site staan in dit bestand.
 *
 * Tekst tussen [vierkante haken] is voorbeeldtekst die je nog moet invullen.
 * Op de site wordt die gemarkeerd weergegeven, zodat je ziet wat er nog open
 * staat. Zoek in dit bestand op "[" om alles te vinden.
 *
 * Laat een veld leeg ("") als je het (nog) niet wilt tonen, bijvoorbeeld
 * `location` of `phone`.
 */

export const site = {
  /** Naam van de site in header, titels en footer. Mag je eigen naam zijn. */
  brand: "Bijles Wiskunde",
  /** Plaats of regio, bijv. "Utrecht". Leeg = niet tonen. Belangrijk voor lokale vindbaarheid. */
  location: "",
  /** Volledige URL van de live site, zonder slash aan het eind. Kan ook via NEXT_PUBLIC_SITE_URL. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.nl",
  email: "[jouw e-mailadres]",
  phone: "[jouw telefoonnummer]",
  /** Hoe snel je reageert op een aanvraag, gebruikt in bevestiging en FAQ. */
  responseTime: "[binnen 2 werkdagen]",
  description:
    "Persoonlijke bijles wiskunde voor de middelbare school en het hbo. Wiskunde A, B, C en D voor havo en vwo, en wiskundevakken in je hbo-opleiding.",
};

export const nav = [
  { href: "/aanbod", label: "Aanbod" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/veelgestelde-vragen", label: "Vragen" },
] as const;

export const cta = {
  label: "Les aanvragen",
  href: "/aanvragen",
  /** Korte zin onder knoppen, om de drempel te verlagen. */
  reassurance: "Invullen duurt 2 minuten. Je zit nergens aan vast.",
};

export const home = {
  title: "Bijles wiskunde, van brugklas tot hbo",
  lead: "Persoonlijke bijles in wiskunde A, B, C en D voor havo en vwo, en hulp bij wiskunde en statistiek in het hbo. Voor wie vastloopt, en voor ouders die willen dat het weer goed komt.",
  audiences: [
    {
      heading: "Voor leerlingen en studenten",
      points: [
        "Je snapt het in de les, maar thuis lukt het niet meer.",
        "Er komt een toets, toetsweek of eindexamen aan.",
        "Een wiskunde- of statistiekvak in je hbo-opleiding houdt je tegen.",
      ],
    },
    {
      heading: "Voor ouders",
      points: [
        "Je kind haalt onvoldoendes en verliest het vertrouwen.",
        "Je kunt zelf niet meer helpen met de stof van nu.",
        "Je wilt weten wat er in de les gebeurt en hoe het gaat.",
      ],
    },
  ],
};

/** De stappen van aanvraag tot eerste les. */
export const steps = [
  {
    heading: "Vraag een les aan",
    text: "Vul het formulier in met je niveau, je vak en waar je hulp bij zoekt.",
  },
  {
    heading: "We maken kennis",
    text: `Je krijgt ${site.responseTime} antwoord. We spreken af wanneer en hoe de lessen plaatsvinden.`,
  },
  {
    heading: "Je eerste les",
    text: "We beginnen bij wat je al kunt en werken naar je volgende toets of tentamen toe.",
  },
];

export type LevelId = "onderbouw" | "havo" | "vwo" | "hbo";

export const levels: {
  id: LevelId;
  name: string;
  group: "Middelbare school" | "Hbo";
  text: string;
}[] = [
  {
    id: "onderbouw",
    name: "Onderbouw (klas 1–3)",
    group: "Middelbare school",
    text: "Een stevige basis: breuken, vergelijkingen, grafieken en meetkunde. Wie dit goed beheerst, kiest later met vertrouwen een wiskundevak.",
  },
  {
    id: "havo",
    name: "Havo 4 en 5",
    group: "Middelbare school",
    text: "Wiskunde A, B of D, met het oog op schoolexamens en het centraal examen.",
  },
  {
    id: "vwo",
    name: "Vwo 4 t/m 6",
    group: "Middelbare school",
    text: "Wiskunde A, B, C of D, van de eerste toetsweek tot het eindexamen.",
  },
  {
    id: "hbo",
    name: "Hbo",
    group: "Hbo",
    text: "Wiskunde en statistiek binnen je opleiding, bijvoorbeeld [analyse, lineaire algebra, statistiek of een wiskundetoets in het eerste jaar].",
  },
];

export type SubjectId = "a" | "b" | "c" | "d";

export const subjects: {
  id: SubjectId;
  name: string;
  summary: string;
  topics: string[];
  /** Op welke niveaus het vak bestaat. */
  levels: LevelId[];
}[] = [
  {
    id: "a",
    name: "Wiskunde A",
    summary:
      "Toegepaste wiskunde: werken met formules, grafieken en data uit de praktijk.",
    topics: ["Statistiek en kansrekening", "Verbanden en grafieken", "Rekenen met formules"],
    levels: ["havo", "vwo"],
  },
  {
    id: "b",
    name: "Wiskunde B",
    summary:
      "De meest abstracte variant, met veel algebra. Nodig voor technische en bèta-opleidingen.",
    topics: ["Functies en grafieken", "Differentiëren en integreren", "Meetkunde en goniometrie"],
    levels: ["havo", "vwo"],
  },
  {
    id: "c",
    name: "Wiskunde C",
    summary:
      "Voor het profiel Cultuur & Maatschappij op het vwo. Minder formules, meer redeneren.",
    topics: ["Statistiek", "Verbanden en patronen", "Vorm en ruimte"],
    levels: ["vwo"],
  },
  {
    id: "d",
    name: "Wiskunde D",
    summary:
      "Een keuzevak naast wiskunde B, voor wie meer verdieping wil of nodig heeft.",
    topics: ["Kansrekening en statistiek", "Vectoren en meetkunde", "Complexe getallen (vwo)"],
    levels: ["havo", "vwo"],
  },
];

export const about = {
  title: "Over mij",
  intro:
    "[Schrijf hier in twee of drie zinnen wie je bent en waarom je bijles wiskunde geeft. Bijvoorbeeld wat je studeert of hebt gestudeerd, en wat je leuk vindt aan uitleggen.]",
  /** Feiten in een lijstje. Laat alleen staan wat klopt. */
  facts: [
    { label: "Opleiding", value: "[jouw opleiding of diploma]" },
    { label: "Ervaring met bijles", value: "[bijv. sinds welk jaar, of hoeveel leerlingen]" },
    { label: "Lessen", value: "[online, bij jou thuis of op een vaste plek]" },
    { label: "Regio", value: "[plaats of regio]" },
  ],
  approachHeading: "Zo pak ik het aan",
  /** Controleer of deze werkwijze bij jou past en pas hem aan. */
  approach: [
    "We beginnen bij wat je al wél kunt, zodat je weet waar het misgaat.",
    "Je doet het zelf: ik leg uit, jij rekent, en we bespreken je aanpak.",
    "We werken naar een concreet doel toe, zoals je volgende toets of tentamen.",
    "Ouders horen hoe het gaat, als de leerling dat goed vindt.",
  ],
};

/** Tekst met [haken] wordt gemarkeerd als nog in te vullen. */
export const faq: { question: string; answer: string; onHome?: boolean }[] = [
  {
    question: "Voor welke niveaus kan ik bijles krijgen?",
    answer:
      "Voor de onderbouw van de middelbare school, havo 4 en 5, vwo 4 t/m 6 en wiskundevakken in het hbo.",
    onHome: true,
  },
  {
    question: "Wat is het verschil tussen wiskunde A, B, C en D?",
    answer:
      "Wiskunde A is toegepast en draait om statistiek en formules uit de praktijk. Wiskunde B is abstracter en nodig voor bèta-opleidingen. Wiskunde C bestaat alleen op het vwo, voor Cultuur & Maatschappij. Wiskunde D is een verdiepend keuzevak naast B.",
  },
  {
    question: "Wat kost een les?",
    answer: "[Vul hier je tarief in, bijvoorbeeld per les van 60 minuten, en of er een pakket of korting is.]",
    onHome: true,
  },
  {
    question: "Waar vinden de lessen plaats?",
    answer: "[Vul hier in of je online lesgeeft, bij de leerling thuis of op een vaste plek, en in welke regio.]",
    onHome: true,
  },
  {
    question: "Hoe snel kan ik beginnen?",
    answer: `Vul het aanvraagformulier in. Je krijgt ${site.responseTime} antwoord en dan spreken we samen een eerste les af.`,
    onHome: true,
  },
  {
    question: "Kan ik als ouder een les aanvragen voor mijn kind?",
    answer:
      "Ja. Kies in het formulier dat je ouder of verzorger bent. Vermeld het niveau en het vak van je kind, dan neem ik contact met jou op.",
  },
  {
    question: "Kan ik ook hulp krijgen voor één toets of het eindexamen?",
    answer:
      "Ja. Je kunt bijles aanvragen voor een losse toets, een toetsweek of het eindexamen. Vermeld de datum in je aanvraag, dan kunnen we daarnaartoe werken.",
  },
  {
    question: "Hoe lang duurt een les, en hoe vaak spreken we af?",
    answer: "[Vul hier de duur van een les in en hoe vaak leerlingen meestal komen.]",
  },
];

/** Keuzes in het aanvraagformulier. */
export const formOptions = {
  roles: [
    { value: "leerling", label: "Leerling" },
    { value: "ouder", label: "Ouder of verzorger" },
    { value: "student", label: "Student" },
  ],
  levels: [
    { value: "onderbouw", label: "Onderbouw (klas 1–3)" },
    { value: "havo", label: "Havo 4 of 5" },
    { value: "vwo", label: "Vwo 4, 5 of 6" },
    { value: "hbo", label: "Hbo" },
    { value: "anders", label: "Anders" },
  ],
  subjects: [
    { value: "wiskunde-a", label: "Wiskunde A" },
    { value: "wiskunde-b", label: "Wiskunde B" },
    { value: "wiskunde-c", label: "Wiskunde C" },
    { value: "wiskunde-d", label: "Wiskunde D" },
    { value: "wiskunde", label: "Wiskunde (onderbouw)" },
    { value: "hbo-vak", label: "Wiskunde of statistiek in het hbo" },
    { value: "weet-niet", label: "Weet ik nog niet" },
  ],
};

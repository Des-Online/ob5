import type { FAQItem } from "./types";

export const homepageFaq: FAQItem[] = [
  {
    id: "snelheid",
    question: "Hoe snel krijg ik reactie?",
    answer: "Neem direct contact op via telefoon, WhatsApp of het formulier. De planning hangt af van locatie, urgentie en de benodigde aanpak. Voor livegang moet het definitieve telefoonnummer nog worden gecontroleerd."
  },
  {
    id: "kosten",
    question: "Waarom staan er geen vaste prijzen op de site?",
    answer: "De kosten hangen af van het type ongedierte, de omvang, bereikbaarheid, aantal bezoeken, woning of bedrijf en eventuele preventieve maatregelen. Eerst moet duidelijk zijn wat er precies speelt."
  },
  {
    id: "landelijk",
    question: "Werkt Ongedierte Buddy in heel Nederland?",
    answer: "Ongedierte Buddy richt zich op landelijke hulp bij ongedierte. Per aanvraag wordt bekeken welke planning en specialist passend is voor de locatie en het soort overlast."
  },
  {
    id: "veilig",
    question: "Is de aanpak veilig voor kinderen en huisdieren?",
    answer: "Dat hangt af van de situatie en de gekozen behandeling. Je krijgt vooraf en achteraf instructies die passen bij de woning, bewoners, huisdieren en het type ongedierte."
  }
];

export const reviews = [
  {
    id: "klantreview-1",
    name: "Particuliere klant",
    location: "Woning",
    text: "Rustig contact, duidelijke uitleg en snel een afspraak."
  },
  {
    id: "klantreview-2",
    name: "Zakelijke klant",
    location: "Bedrijfspand",
    text: "Er werd goed meegedacht en professioneel gehandeld."
  },
  {
    id: "klantreview-3",
    name: "Telefonische aanvraag",
    location: "Adviesgesprek",
    text: "Binnen korte tijd teruggebeld en helder advies gekregen."
  }
];

export const workSteps = [
  ["Aanvraag", "Bel, WhatsApp of vraag een inspectie aan. Vertel kort wat je ziet, waar de overlast zit en hoe dringend de situatie is."],
  ["Beoordeling", "We bespreken locatie, soort ongedierte, signalen, mogelijke verspreiding en wat je alvast wel of niet moet doen."],
  ["Aanpak", "Een passende specialist bepaalt de logische vervolgstap. Behandeling, voorbereiding en doorlooptijd verschillen per situatie."],
  ["Nazorg", "Na afloop krijg je praktische adviezen om terugkeer te beperken. Waar nodig worden controlepunten of vervolgafspraken besproken."]
] as const;

export const legalPages = {
  privacyverklaring: {
    title: "Privacyverklaring",
    description:
      "In deze privacyverklaring lees je welke persoonsgegevens Ongedierte Buddy verwerkt, waarom dat gebeurt en welke rechten je hebt."
  },
  cookieverklaring: {
    title: "Cookieverklaring",
    description:
      "In deze cookieverklaring lees je welke cookies Ongedierte Buddy gebruikt en hoe je jouw voorkeuren kunt beheren."
  },
  "algemene-voorwaarden": {
    title: "Algemene voorwaarden",
    description:
      "Deze algemene voorwaarden beschrijven hoe aanvragen, afspraken, uitvoering, betaling, annulering, aansprakelijkheid en klachten worden behandeld."
  },
  disclaimer: {
    title: "Disclaimer",
    description:
      "De informatie op deze website is bedoeld als algemene uitleg over ongedierte en ongediertebestrijding."
  },
  klachten: {
    title: "Klachten",
    description:
      "Ben je niet tevreden over contact, planning, uitvoering of nazorg? Dan kun je een klacht indienen bij Ongedierte Buddy."
  }
} as const;

import type { City, Province, ServiceCityPage } from "./types";

type ProvinceRow = [slug: string, name: string, cities: string[], intro: string];

const provinceRows: ProvinceRow[] = [
  ["groningen", "Groningen", ["Groningen", "Delfzijl", "Veendam", "Stadskanaal"], "Van studentenwoning tot vrijstaand huis: in Groningen helpt Ongedierte Buddy bij overlast zonder een lokaal kantoor te suggereren."],
  ["friesland", "Friesland", ["Leeuwarden", "Sneek", "Heerenveen", "Drachten"], "In Friesland spelen woningtype, water en buitengebied vaak mee. We bespreken snel welke aanpak logisch is."],
  ["drenthe", "Drenthe", ["Assen", "Emmen", "Hoogeveen", "Meppel"], "Ook in Drenthe werken we landelijk en gericht, met aandacht voor woningen, schuren en bedrijfspanden."],
  ["overijssel", "Overijssel", ["Zwolle", "Enschede", "Deventer", "Hengelo"], "In Overijssel helpen we bij acute overlast en terugkerende signalen in huis, horeca, kantoor of magazijn."],
  ["flevoland", "Flevoland", ["Almere", "Lelystad", "Dronten", "Emmeloord"], "Flevoland kent veel nieuwbouw en bedrijfslocaties; juist daar is brononderzoek belangrijk bij terugkerende overlast."],
  ["gelderland", "Gelderland", ["Nijmegen", "Arnhem", "Apeldoorn", "Ede"], "In Gelderland werken we door heel de provincie, van stedelijke appartementen tot woningen aan de rand van groen."],
  ["utrecht", "Utrecht", ["Utrecht", "Amersfoort", "Zeist", "Veenendaal"], "In Utrecht is snelle afstemming belangrijk: bel of app en we bepalen wat er nodig is voor jouw pand."],
  ["noord-holland", "Noord-Holland", ["Amsterdam", "Haarlem", "Zaanstad", "Alkmaar"], "In Noord-Holland helpen we bij overlast in appartementen, winkels, horeca, woningen en VvE-complexen."],
  ["zuid-holland", "Zuid-Holland", ["Rotterdam", "Den Haag", "Leiden", "Dordrecht"], "Zuid-Holland vraagt vaak om discreet en snel handelen, zeker in stedelijke gebouwen en bedrijfsruimtes."],
  ["zeeland", "Zeeland", ["Middelburg", "Vlissingen", "Goes", "Terneuzen"], "In Zeeland kijken we naar woning, omgeving en bron, zonder onnodige beloftes over behandeling of tijdsduur."],
  ["noord-brabant", "Noord-Brabant", ["Eindhoven", "Tilburg", "Breda", "'s-Hertogenbosch"], "In Noord-Brabant helpen we particulieren en bedrijven met duidelijke opvolging en landelijke beschikbaarheid."],
  ["limburg", "Limburg", ["Maastricht", "Venlo", "Roermond", "Sittard"], "In Limburg bieden we directe hulp, duidelijke uitleg en een aanpak die past bij de ernst van de situatie."]
];

export const provinces: Province[] = provinceRows.map(([slug, name, provinceCities, intro]) => ({
  id: slug,
  slug,
  name,
  cities: [...provinceCities],
  intro,
  faq: [
    {
      id: `${slug}-dekking`,
      question: `Werkt Ongedierte Buddy in heel ${name}?`,
      answer: "Ja, we werken landelijk. We claimen geen lokaal kantoor per plaats, maar stemmen snel af welke specialist beschikbaar is."
    },
    {
      id: `${slug}-spoed`,
      question: "Kan ik ook bij spoed bellen?",
      answer: "Neem direct contact op bij spoed of twijfel. We bespreken zo snel mogelijk welke vervolgstap past bij de situatie."
    }
  ],
  seo: {
    title: `Ongediertebestrijding in ${name}`,
    description: `Ongedierte in ${name}? Ongedierte Buddy helpt landelijk bij muizen, ratten, bedwantsen en meer. Snel contact en duidelijke opvolging.`
  },
  published: true
}));

const cityRows = [
  ["amsterdam", "Amsterdam", "noord-holland", "Noord-Holland", ["Haarlem", "Zaanstad", "Amstelveen"], "In Amsterdam komt ongedierte vaak voor in appartementen, horeca, winkels en oude panden met veel doorvoeren.", "portiekwoningen, grachtenpanden, horeca en bedrijfsruimtes"],
  ["rotterdam", "Rotterdam", "zuid-holland", "Zuid-Holland", ["Schiedam", "Capelle aan den IJssel", "Dordrecht"], "Rotterdam vraagt om duidelijke planning en discrete uitvoering in woningen, magazijnen, horeca en VvE's.", "appartementen, havengebouwen, winkels en kantoren"],
  ["den-haag", "Den Haag", "zuid-holland", "Zuid-Holland", ["Delft", "Zoetermeer", "Leiden"], "In Den Haag helpen we bij overlast in woningen, appartementencomplexen, ambassadewijken en bedrijfsruimtes.", "bovenwoningen, winkels, hotels en kantoorruimtes"],
  ["utrecht", "Utrecht", "utrecht", "Utrecht", ["Zeist", "Nieuwegein", "Amersfoort"], "In Utrecht zien bewoners en bedrijven vaak snelle verspreiding via kelders, bergingen en doorvoeren.", "studentenhuizen, appartementen, horeca en kantoren"],
  ["eindhoven", "Eindhoven", "noord-brabant", "Noord-Brabant", ["Veldhoven", "Helmond", "Tilburg"], "In Eindhoven helpen we huishoudens en bedrijven met rustige uitleg en een doelgerichte aanpak.", "nieuwbouw, bedrijfspanden, woningen en winkels"],
  ["groningen", "Groningen", "groningen", "Groningen", ["Assen", "Delfzijl", "Veendam"], "In Groningen spelen studentenhuizen, oude bouw en opslagruimtes vaak een rol bij ongedierte.", "studentenwoningen, appartementen, horeca en schuren"],
  ["tilburg", "Tilburg", "noord-brabant", "Noord-Brabant", ["Breda", "Eindhoven", "Waalwijk"], "In Tilburg helpen we bij signalen in woningen, bedrijfspanden, zorglocaties en horeca.", "rijwoningen, winkels, magazijnen en appartementen"],
  ["almere", "Almere", "flevoland", "Flevoland", ["Lelystad", "Amsterdam", "Hilversum"], "In Almere kijken we vaak naar nieuwbouwdetails, bergingen en routes rond tuinen of water.", "eengezinswoningen, appartementen, scholen en kantoren"],
  ["breda", "Breda", "noord-brabant", "Noord-Brabant", ["Tilburg", "Roosendaal", "Dordrecht"], "In Breda helpen we bewoners, horeca en winkels met snelle inventarisatie en duidelijke vervolgstappen.", "binnenstadspanden, woningen, horeca en magazijnen"],
  ["nijmegen", "Nijmegen", "gelderland", "Gelderland", ["Arnhem", "Wijchen", "Venlo"], "In Nijmegen werken we voor woningen, studentenhuizen en bedrijven met aandacht voor bron en preventie.", "studentenhuizen, portieken, winkels en woningen"],
  ["apeldoorn", "Apeldoorn", "gelderland", "Gelderland", ["Deventer", "Arnhem", "Ede"], "In Apeldoorn speelt de omgeving rond tuin, bosrand of schuur soms mee bij terugkerende overlast.", "woningen, schuren, zorglocaties en bedrijfspanden"],
  ["arnhem", "Arnhem", "gelderland", "Gelderland", ["Nijmegen", "Ede", "Apeldoorn"], "In Arnhem helpen we bij overlast in bovenwoningen, winkels en bedrijfslocaties aan de rand van groen.", "appartementen, winkels, horeca en kantoren"],
  ["haarlem", "Haarlem", "noord-holland", "Noord-Holland", ["Amsterdam", "Zandvoort", "Alkmaar"], "In Haarlem vraagt oudere bouw vaak om extra aandacht voor kieren, kruipruimtes en leidingdoorvoeren.", "monumenten, bovenwoningen, winkels en woningen"],
  ["enschede", "Enschede", "overijssel", "Overijssel", ["Hengelo", "Almelo", "Deventer"], "In Enschede helpen we bij overlast in woningen, studentenhuizen, horeca en bedrijfspanden.", "studentenhuizen, rijwoningen, winkels en magazijnen"],
  ["amersfoort", "Amersfoort", "utrecht", "Utrecht", ["Utrecht", "Zeist", "Hilversum"], "In Amersfoort stemmen we snel af wat nodig is voor woningen, VvE's en bedrijfsruimtes.", "gezinswoningen, appartementen, winkels en kantoren"],
  ["zaanstad", "Zaanstad", "noord-holland", "Noord-Holland", ["Amsterdam", "Purmerend", "Haarlem"], "In Zaanstad kijken we naar water, opslag, bedrijventerreinen en woningen met veel doorvoeren.", "woningen, loodsen, winkels en appartementen"],
  ["s-hertogenbosch", "'s-Hertogenbosch", "noord-brabant", "Noord-Brabant", ["Tilburg", "Eindhoven", "Nijmegen"], "In 's-Hertogenbosch helpen we bij discrete bestrijding in woningen, horeca en zakelijke panden.", "binnenstadspanden, woningen, horeca en kantoren"],
  ["zwolle", "Zwolle", "overijssel", "Overijssel", ["Deventer", "Apeldoorn", "Meppel"], "In Zwolle is snelle bronanalyse belangrijk bij woningen, winkels en kantoren met gedeelde ruimtes.", "woningen, kantoren, winkels en VvE's"],
  ["leiden", "Leiden", "zuid-holland", "Zuid-Holland", ["Den Haag", "Haarlem", "Delft"], "In Leiden zien we vaak oude bouw, studentenwoningen en compacte opslagruimtes als risicofactor.", "studentenhuizen, bovenwoningen, winkels en horeca"],
  ["maastricht", "Maastricht", "limburg", "Limburg", ["Venlo", "Sittard", "Roermond"], "In Maastricht helpen we bij overlast in woningen, horeca en panden met historische bouwdetails.", "oude woningen, horeca, winkels en appartementen"],
  ["dordrecht", "Dordrecht", "zuid-holland", "Zuid-Holland", ["Rotterdam", "Breda", "Gouda"], "In Dordrecht kijken we naar water, oudere bouw en bedrijvigheid als mogelijke oorzaken.", "woningen, winkels, magazijnen en appartementen"],
  ["zoetermeer", "Zoetermeer", "zuid-holland", "Zuid-Holland", ["Den Haag", "Leiden", "Gouda"], "In Zoetermeer helpen we bij overlast in woningen, appartementen, scholen en bedrijfsruimtes.", "rijwoningen, appartementen, kantoren en winkels"],
  ["delft", "Delft", "zuid-holland", "Zuid-Holland", ["Den Haag", "Rotterdam", "Leiden"], "In Delft spelen studentenhuizen, oude panden en horeca regelmatig mee bij ongedierte.", "studentenhuizen, monumenten, horeca en winkels"],
  ["alkmaar", "Alkmaar", "noord-holland", "Noord-Holland", ["Haarlem", "Zaanstad", "Purmerend"], "In Alkmaar helpen we bij overlast in woningen, winkels, horeca en bedrijfspanden.", "woningen, winkels, horeca en opslagruimtes"],
  ["leeuwarden", "Leeuwarden", "friesland", "Friesland", ["Sneek", "Heerenveen", "Groningen"], "In Leeuwarden helpen we bewoners en bedrijven met snelle afstemming en duidelijke preventieadviezen.", "woningen, appartementen, winkels en horeca"],
  ["deventer", "Deventer", "overijssel", "Overijssel", ["Zwolle", "Apeldoorn", "Enschede"], "In Deventer vragen oude bouw, winkels en opslagruimtes vaak om nauwkeurige inspectie.", "historische panden, woningen, winkels en magazijnen"],
  ["venlo", "Venlo", "limburg", "Limburg", ["Maastricht", "Roermond", "Eindhoven"], "In Venlo helpen we bij woningen, logistieke locaties, horeca en winkels met discrete uitvoering.", "logistieke panden, woningen, horeca en winkels"],
  ["hilversum", "Hilversum", "noord-holland", "Noord-Holland", ["Amersfoort", "Amsterdam", "Utrecht"], "In Hilversum helpen we bij overlast in woningen, mediabedrijven, winkels en kantoren.", "villa's, appartementen, kantoren en winkels"],
  ["gouda", "Gouda", "zuid-holland", "Zuid-Holland", ["Rotterdam", "Utrecht", "Zoetermeer"], "In Gouda kijken we naar water, oude bouw en gedeelde ruimtes als mogelijke oorzaken.", "oude woningen, winkels, appartementen en horeca"],
  ["purmerend", "Purmerend", "noord-holland", "Noord-Holland", ["Zaanstad", "Amsterdam", "Alkmaar"], "In Purmerend helpen we huishoudens en bedrijven met snelle reactie en duidelijke vervolgstappen.", "eengezinswoningen, appartementen, winkels en kantoren"]
] as const;

export const cities: City[] = cityRows.map(([slug, name, provinceSlug, provinceName, nearby, intro, buildingContext]) => ({
  id: slug,
  slug,
  name,
  provinceSlug,
  provinceName,
  nearby: [...nearby],
  intro,
  buildingContext,
  faq: [
    {
      id: `${slug}-kantoor`,
      question: `Heeft Ongedierte Buddy een lokaal kantoor in ${name}?`,
      answer: "We werken landelijk en claimen geen plaatselijk kantoor wanneer dat niet bestaat. Je krijgt wel snel contact en een passende planning."
    },
    {
      id: `${slug}-bedrijven`,
      question: "Helpen jullie ook bedrijven?",
      answer: "Ja, we helpen onder meer horeca, winkels, kantoren, magazijnen, verhuurders en VvE's."
    }
  ],
  seo: {
    title: `Ongediertebestrijding ${name}`,
    description: `Ongedierte in ${name}? Bel of app Ongedierte Buddy. Landelijke dekking, duidelijke uitleg en nazorg volgens afspraak.`
  },
  published: true
}));

const comboCities = ["amsterdam", "rotterdam", "den-haag", "utrecht", "eindhoven", "groningen", "tilburg", "almere"];
const comboServices = ["muizen-bestrijden", "ratten-bestrijden", "bedwantsen-bestrijden", "kakkerlakken-bestrijden"];

const pestDetails: Record<string, { label: string; readable: string; risk: string; source: string; urgency: string; preparation: string; prevention: string }> = {
  "muizen-bestrijden": {
    label: "muizen",
    readable: "Muizen",
    risk: "Muizen verplaatsen zich vaak via leidingdoorvoeren, kieren, kruipruimtes, bergingen en gedeelde routes tussen woningen. Daardoor lijkt de overlast soms klein, terwijl de bron elders in het pand zit.",
    source: "voedsel, warmte, nestgelegenheid en kleine openingen rond gevels, vloeren of installaties",
    urgency: "bij keutels op meerdere plekken, knaagschade aan kabels of voorraad, geluiden in plafond of muur en terugkerende signalen na eigen maatregelen",
    preparation: "Bewaar voedsel en dierenvoer afgesloten, maak keukenkastjes, meterkast en plinten bereikbaar en maak foto’s van keutels, schade of loopsporen voordat je alles schoonmaakt.",
    prevention: "Belangrijk is dat openingen worden beperkt, voorraad goed wordt opgeborgen en afval of dierenvoer niet bereikbaar blijft. Bij terugkeer moet opnieuw naar routes en toegangspunten worden gekeken."
  },
  "ratten-bestrijden": {
    label: "ratten",
    readable: "Ratten",
    risk: "Ratten volgen vaak vaste routes langs water, afval, tuinen, kelders, kruipruimtes en riolering. Als de bron niet wordt gevonden, kan activiteit snel terugkomen.",
    source: "afval, water, voerbronnen, open roosters, rioleringsproblemen en beschutte plekken rond buitenranden of opslag",
    urgency: "bij ratten overdag, holen buiten, activiteit bij afval of riolering, schade aan voorraad of overlast bij horeca, VvE of bedrijfspand",
    preparation: "Sluit afval goed af, verwijder losse voerbronnen, maak buitenranden bereikbaar en meld kapotte roosters, open afvoeren, verzakkingen of plekken waar je holen ziet.",
    prevention: "Structurele preventie draait om afvalbeheer, wering, roosters, overzichtelijke opslag en het beperken van water- en voedselbronnen rond het pand."
  },
  "bedwantsen-bestrijden": {
    label: "bedwantsen",
    readable: "Bedwantsen",
    risk: "Bedwantsen verspreiden zich via bagage, kleding, meubels, bedden en aangrenzende ruimtes. Ze zijn moeilijk zichtbaar en vragen om zorgvuldige voorbereiding en duidelijke instructies.",
    source: "slaapplekken, naden van matrassen, bedframes, plinten, textiel, tweedehands meubels en verplaatsing tussen kamers of woningen",
    urgency: "bij beten na het slapen, zwarte puntjes bij bed of matras, levende insecten, overlast in meerdere kamers of verhuur- en hotelsituaties",
    preparation: "Verplaats textiel, matrassen of meubels niet zomaar naar andere ruimtes. Maak foto’s van sporen en wacht op instructies voordat je gaat wassen, stofzuigen of spullen verplaatsen.",
    prevention: "Na behandeling is controle belangrijk. Let op nieuwe beten, houd slaapplekken overzichtelijk en wees voorzichtig met tweedehands meubels, bagage en textiel."
  },
  "kakkerlakken-bestrijden": {
    label: "kakkerlakken",
    readable: "Kakkerlakken",
    risk: "Kakkerlakken zoeken warme, donkere en voedselrijke plekken. In gebouwen met keukens, leidingen, opslag of buren kunnen ze zich sneller verspreiden dan je op het eerste gezicht ziet.",
    source: "warmte, vocht, voedselresten, naden, technische ruimtes, keukens, opslagplekken en gedeelde leidingschachten",
    urgency: "bij zicht overdag, meerdere exemplaren, activiteit in keuken of bedrijfsruimte, geur, vervellingsresten of signalen in horeca of voedselomgeving",
    preparation: "Maak keukens, plinten, apparatuur, voorraadkasten en technische plekken bereikbaar. Sluit voedsel af en meld waar je activiteit of donkere schuilplekken ziet.",
    prevention: "Preventie draait om schoonmaak, voedselopslag, vochtbeperking, afdichting van naden en regelmatige controle van warme schuilplekken."
  }
};

export const serviceCityPages: ServiceCityPage[] = comboCities.flatMap((citySlug) =>
  comboServices.map((serviceSlug) => {
    const city = cities.find((item) => item.slug === citySlug)!;
    const pest = pestDetails[serviceSlug];
    return {
      id: `${citySlug}-${serviceSlug}`,
      citySlug,
      serviceSlug,
      intro: `${pest.readable} bestrijden in ${city.name} vraagt om meer dan alleen snel ingrijpen. De juiste aanpak begint met herkennen waar de overlast zit, welke routes mogelijk zijn en welke omstandigheden in het pand terugkeer kunnen veroorzaken. Ongedierte Buddy helpt met duidelijke intake, passende opvolging en preventieadvies voor woningen, bedrijven en VvE’s.`,
      situation: `In ${city.name} zien we ${pest.label} vooral in situaties met ${city.buildingContext}. De oorzaak kan liggen in ${pest.source}. Daarom wordt eerst gekeken naar signalen, routes, toegangspunten en het gebruik van het pand voordat de aanpak wordt bepaald.`,
      buildingTypes: city.buildingContext.split(", "),
      approach: `Bij ${pest.label} in ${city.name} kijken we naar zichtbare signalen, schuilplekken, routes en risicoplekken. Daarna wordt besproken welke behandeling past, welke voorbereiding nodig is en hoe terugkeer zoveel mogelijk wordt beperkt.`,
      preparation: pest.preparation,
      prevention: pest.prevention,
      faq: [
        {
          id: `${citySlug}-${serviceSlug}-spoed`,
          question: `Wanneer is ${pest.label} bestrijden in ${city.name} urgent?`,
          answer: `Snel contact is verstandig ${pest.urgency}. Ook bij kinderen, kwetsbare bewoners, horeca, verhuur of zakelijke overlast is het beter om niet te lang te wachten.`
        },
        {
          id: `${citySlug}-${serviceSlug}-oorzaak`,
          question: `Waarom krijg ik last van ${pest.label} in ${city.name}?`,
          answer: `De oorzaak verschilt per pand. Vaak spelen ${pest.source} een rol. In ${city.name} kijken we daarom naar het gebouwtype, de omgeving en mogelijke routes vanuit aangrenzende ruimtes.`
        },
        {
          id: `${citySlug}-${serviceSlug}-voorbereiding`,
          question: "Moet ik iets voorbereiden voordat er iemand komt?",
          answer: pest.preparation
        },
        {
          id: `${citySlug}-${serviceSlug}-kosten`,
          question: `Wat kost ${pest.label} bestrijden in ${city.name}?`,
          answer: "De kosten hangen af van de ernst van de overlast, het aantal ruimtes, bereikbaarheid, pandtype, eventuele vervolgcontrole en preventieve maatregelen. Daarom wordt eerst kort beoordeeld wat er nodig is."
        },
        {
          id: `${citySlug}-${serviceSlug}-kantoor`,
          question: `Heeft Ongedierte Buddy een kantoor in ${city.name}?`,
          answer: "We claimen geen lokaal kantoor wanneer dat er niet is. Ongedierte Buddy werkt landelijk en stemt de planning af op locatie, beschikbaarheid en de aard van de overlast."
        }
      ],
      seo: {
        title: `${pest.readable} bestrijden ${city.name}`,
        description: `${pest.readable} in ${city.name}? Lees hoe je signalen herkent, wat de aanpak inhoudt en wanneer professionele hulp verstandig is.`
      },
      published: true
    };
  })
);

export function getProvince(slug: string) {
  return provinces.find((province) => province.slug === slug && province.published);
}

export function getCity(slug: string) {
  return cities.find((city) => city.slug === slug && city.published);
}

export function getServiceCityPage(citySlug: string, serviceSlug: string) {
  return serviceCityPages.find((page) => page.citySlug === citySlug && page.serviceSlug === serviceSlug && page.published);
}

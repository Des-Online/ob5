export type GeoPoint = { name: string; lat: number; lon: number };

export const cityCoordinates: Record<string, GeoPoint> = {
  amsterdam: { name: "Amsterdam", lat: 52.3676, lon: 4.9041 },
  rotterdam: { name: "Rotterdam", lat: 51.9244, lon: 4.4777 },
  "den-haag": { name: "Den Haag", lat: 52.0705, lon: 4.3007 },
  utrecht: { name: "Utrecht", lat: 52.0907, lon: 5.1214 },
  eindhoven: { name: "Eindhoven", lat: 51.4416, lon: 5.4697 },
  groningen: { name: "Groningen", lat: 53.2194, lon: 6.5665 },
  tilburg: { name: "Tilburg", lat: 51.5555, lon: 5.0913 },
  almere: { name: "Almere", lat: 52.3508, lon: 5.2647 },
  breda: { name: "Breda", lat: 51.5719, lon: 4.7683 },
  nijmegen: { name: "Nijmegen", lat: 51.8126, lon: 5.8372 },
  apeldoorn: { name: "Apeldoorn", lat: 52.2112, lon: 5.9699 },
  arnhem: { name: "Arnhem", lat: 51.9851, lon: 5.8987 },
  haarlem: { name: "Haarlem", lat: 52.3874, lon: 4.6462 },
  enschede: { name: "Enschede", lat: 52.2215, lon: 6.8937 },
  amersfoort: { name: "Amersfoort", lat: 52.1561, lon: 5.3878 },
  zaanstad: { name: "Zaanstad", lat: 52.4385, lon: 4.8264 },
  "s-hertogenbosch": { name: "'s-Hertogenbosch", lat: 51.6978, lon: 5.3037 },
  zwolle: { name: "Zwolle", lat: 52.5168, lon: 6.083 },
  leiden: { name: "Leiden", lat: 52.1601, lon: 4.497 },
  maastricht: { name: "Maastricht", lat: 50.8514, lon: 5.691 },
  dordrecht: { name: "Dordrecht", lat: 51.8133, lon: 4.6901 },
  zoetermeer: { name: "Zoetermeer", lat: 52.0607, lon: 4.494 },
  delft: { name: "Delft", lat: 52.0116, lon: 4.3571 },
  alkmaar: { name: "Alkmaar", lat: 52.6324, lon: 4.7534 },
  leeuwarden: { name: "Leeuwarden", lat: 53.2012, lon: 5.7999 },
  deventer: { name: "Deventer", lat: 52.2661, lon: 6.1552 },
  venlo: { name: "Venlo", lat: 51.3704, lon: 6.1724 },
  hilversum: { name: "Hilversum", lat: 52.2292, lon: 5.1669 },
  gouda: { name: "Gouda", lat: 52.0115, lon: 4.7105 },
  purmerend: { name: "Purmerend", lat: 52.505, lon: 4.959 }
};

export const provinceFocusCoordinates: Record<string, GeoPoint> = {
  groningen: { name: "Groningen", lat: 53.2194, lon: 6.5665 },
  friesland: { name: "Friesland", lat: 53.2012, lon: 5.7999 },
  drenthe: { name: "Drenthe", lat: 52.9928, lon: 6.5642 },
  overijssel: { name: "Overijssel", lat: 52.5168, lon: 6.083 },
  flevoland: { name: "Flevoland", lat: 52.5185, lon: 5.4714 },
  gelderland: { name: "Gelderland", lat: 51.9851, lon: 5.8987 },
  utrecht: { name: "Utrecht", lat: 52.0907, lon: 5.1214 },
  "noord-holland": { name: "Noord-Holland", lat: 52.3874, lon: 4.6462 },
  "zuid-holland": { name: "Zuid-Holland", lat: 52.0705, lon: 4.3007 },
  zeeland: { name: "Zeeland", lat: 51.4988, lon: 3.6109 },
  "noord-brabant": { name: "Noord-Brabant", lat: 51.6978, lon: 5.3037 },
  limburg: { name: "Limburg", lat: 50.8514, lon: 5.691 }
};


import { useId } from "react";
import mapData from "@/content/netherlands-map.generated.json";
import { cityCoordinates, provinceFocusCoordinates } from "@/content/geo-locations";
import type { City, Province } from "@/content/types";
import styles from "./region-map.module.css";

type RegionMapVisualProps =
  | { kind: "city"; city: City; routes?: string[] }
  | { kind: "province"; province: Province; routes?: string[] };

const [minLon, minLat, maxLon, maxLat] = mapData.geographicBounds;
const [, , width, height] = mapData.viewBox;
const padding = 30;

function slugFromProvinceName(name: string) {
  return name.toLowerCase().replaceAll(" ", "-");
}

function project(lon: number, lat: number) {
  return {
    x: padding + ((lon - minLon) / (maxLon - minLon)) * (width - padding * 2),
    y: padding + ((maxLat - lat) / (maxLat - minLat)) * (height - padding * 2)
  };
}

function ringPath(ring: number[][]) {
  return ring.map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ") + " Z";
}

function routePath(start: { x: number; y: number }, end: { x: number; y: number }, index: number) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const length = Math.max(Math.hypot(dx, dy), 1);
  const bend = index % 2 === 0 ? 34 : -28;
  const cx = (start.x + end.x) / 2 + (-dy / length) * bend;
  const cy = (start.y + end.y) / 2 + (dx / length) * bend;
  return `M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${end.x.toFixed(1)} ${end.y.toFixed(1)}`;
}

function fallbackRoutes(kind: "city" | "province", slug: string) {
  if (kind === "city" && slug === "almere") return ["amsterdam", "utrecht", "zwolle", "arnhem", "rotterdam", "groningen"];
  if (kind === "province" && slug === "friesland") return ["leeuwarden", "groningen", "zwolle", "alkmaar", "amsterdam"];
  return kind === "city"
    ? ["amsterdam", "utrecht", "rotterdam", "zwolle", "groningen"]
    : ["amsterdam", "utrecht", "rotterdam", "zwolle", "groningen"];
}

export function RegionMapVisual(props: RegionMapVisualProps) {
  const rawId = useId().replaceAll(":", "");
  const gradientId = `mapGradient${rawId}`;
  const glowId = `mapGlow${rawId}`;
  const kind = props.kind;
  const name = kind === "city" ? props.city.name : props.province.name;
  const slug = kind === "city" ? props.city.slug : props.province.slug;
  const activeProvinceSlug = kind === "city" ? props.city.provinceSlug : props.province.slug;
  const focus = kind === "city" ? cityCoordinates[slug] : provinceFocusCoordinates[slug];
  if (!focus) return null;

  const focusPoint = project(focus.lon, focus.lat);
  const routeSlugs = (props.routes?.length ? props.routes : fallbackRoutes(kind, slug)).slice(0, 7);
  const routePoints = routeSlugs.map((routeSlug) => cityCoordinates[routeSlug]).filter(Boolean);
  const caption = kind === "city" ? `Snel contact in ${name} en omgeving.` : `Dekking in heel ${name}.`;

  return (
    <figure className={styles.card}>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`Kaart van Nederland met ${name} gemarkeerd`}>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#eef4ee" />
            <stop offset="1" stopColor="#e3ebe5" />
          </linearGradient>
          <filter id={glowId} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <rect width="100%" height="100%" rx="30" fill={`url(#${gradientId})`} />
        <g className={styles.provinces}>
          {mapData.provinces.flatMap((province) => province.polygons.flatMap((polygon, polygonIndex) => polygon.map((ring, ringIndex) => (
            <path
              key={`${province.id}-${polygonIndex}-${ringIndex}`}
              d={ringPath(ring)}
              className={slugFromProvinceName(province.name) === activeProvinceSlug ? styles.activeProvince : undefined}
            />
          ))))}
        </g>
        <g className={styles.routes} aria-hidden="true">
          {routePoints.map((point, index) => {
            const end = project(point.lon, point.lat);
            const d = routePath(focusPoint, end, index);
            const routeId = `${rawId}-route-${index}`;
            return (
              <g key={`${point.name}-${index}`}>
                <path id={routeId} d={d} pathLength={1} />
                <circle cx={end.x} cy={end.y} r="4.2" />
                {index === 0 ? (
                  <circle r="6" className={styles.movingDot} filter={`url(#${glowId})`}>
                    <animateMotion dur="5.2s" repeatCount="indefinite">
                      <mpath href={`#${routeId}`} />
                    </animateMotion>
                  </circle>
                ) : null}
              </g>
            );
          })}
        </g>
        <g className={styles.focusMarker} transform={`translate(${focusPoint.x.toFixed(1)} ${focusPoint.y.toFixed(1)})`} aria-hidden="true">
          <circle r="15" />
          <circle r="5.5" />
        </g>
      </svg>
      <figcaption className={styles.caption}>
        <span className={styles.captionIcon} aria-hidden="true" />
        <span><strong>{name}</strong><small>{caption}</small></span>
      </figcaption>
      <small className={styles.attribution}>Kaartgrenzen: Kadaster / PDOK, CC BY 4.0</small>
    </figure>
  );
}

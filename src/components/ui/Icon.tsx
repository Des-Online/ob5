type IconProps = {
  name:
    | "phone"
    | "message"
    | "shield"
    | "clock"
    | "star"
    | "menu"
    | "arrow"
    | "check"
    | "close"
    | "chevronLeft"
    | "chevronRight"
    | "calendar"
    | "headphones"
    | "target"
    | "alert";
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true
  };
  if (name === "phone") return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c1 .3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" /></svg>;
  if (name === "message") return <svg {...common}><path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 8.5 8.5 0 0 1-4-.9L3 20l1.3-4.6A8.4 8.4 0 1 1 21 11.5Z" /><path d="M8.5 9.5h7M8.5 13h4" /></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9.2 12 1.9 1.9 4-4.3" /></svg>;
  if (name === "clock") return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (name === "star") return <svg {...common}><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z" /></svg>;
  if (name === "menu") return <svg {...common}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
  if (name === "arrow") return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === "check") return <svg {...common}><path d="m20 6-11 11-5-5" /></svg>;
  if (name === "chevronLeft") return <svg {...common}><path d="m15 18-6-6 6-6" /></svg>;
  if (name === "chevronRight") return <svg {...common}><path d="m9 18 6-6-6-6" /></svg>;
  if (name === "calendar") return <svg {...common}><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /></svg>;
  if (name === "headphones") return <svg {...common}><path d="M4 13a8 8 0 0 1 16 0v4a2 2 0 0 1-2 2h-2v-6h4M4 13v4a2 2 0 0 0 2 2h2v-6H4" /></svg>;
  if (name === "target") return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 12h.01" /></svg>;
  if (name === "alert") return <svg {...common}><path d="M12 9v4M12 17h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z" /></svg>;
  return <svg {...common}><path d="M18 6 6 18M6 6l12 12" /></svg>;
}

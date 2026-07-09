"use client";

import { type CSSProperties, type ElementType, type ReactNode, useEffect, useRef, useState } from "react";
import styles from "./motion.module.css";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  distance?: number;
  threshold?: number;
  id?: string;
};

export function Reveal({ children, as: Tag = "div", className = "", delay = 0, distance = 22, threshold = 0.14, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.unobserve(node);
    }, { rootMargin: "0px 0px -8% 0px", threshold });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      id={id}
      className={`${styles.reveal} ${mounted ? styles.ready : ""} ${visible ? styles.visible : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, "--reveal-distance": `${distance}px` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

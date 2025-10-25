"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
};

export default function Reveal({ children, className, delayMs = 0 }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            timeout = setTimeout(() => setVisible(true), delayMs);
            obs.disconnect();
          }
        });
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.1 }
    );
    obs.observe(el);
    return () => {
      obs.disconnect();
      if (timeout) clearTimeout(timeout);
    };
  }, [delayMs]);

  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className ?? ""}`}>
      {children}
    </div>
  );
}


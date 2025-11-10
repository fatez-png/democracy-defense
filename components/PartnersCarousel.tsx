"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Item = {
  src: string;
  alt: string;
  href?: string;
};

type Props = {
  items: Item[];
  className?: string;
  speedPxPerSec?: number; // continuous marquee speed
};

export default function PartnersCarousel({ items, className, speedPxPerSec = 60 }: Props) {
  const [paused, setPaused] = useState(false);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);
  const [singleWidth, setSingleWidth] = useState(0);

  const doubled = useMemo(() => [...items, ...items], [items]);

  // Measure width of a single sequence (half of doubled track)
  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      const total = el.scrollWidth;
      setSingleWidth(total / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, [items.length]);

  // Continuous animation using rAF
  useEffect(() => {
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!paused && singleWidth > 0) {
        setOffset((prev) => {
          let next = prev + speedPxPerSec * dt;
          if (next >= singleWidth) next -= singleWidth; // wrap seamlessly
          return next;
        });
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused, singleWidth, speedPxPerSec]);

  return (
    <div
      className={"relative select-none " + (className ?? "")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden" ref={wrapRef} aria-roledescription="carousel">
        <div
          ref={trackRef}
          className="flex items-center"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {doubled.map((it, i) => {
            const isCoop = it.src.includes("cooperative_ai");
            const isCanssi = it.src.includes("canssi");
            const baseClasses =
              "max-h-16 sm:max-h-20 lg:max-h-24 w-auto max-w-full mx-auto object-contain grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-transform duration-300 cursor-pointer";
            const content = (
              <img
                src={it.src}
                alt={it.alt}
                className={
                  isCoop
                    ? `${baseClasses} scale-75 hover:scale-75`
                    : isCanssi
                    ? `${baseClasses} scale-110 hover:scale-110`
                    : `${baseClasses} hover:scale-105`
                }
                loading={i < 4 ? "eager" : "lazy"}
              />
            );
            return (
              <div
                key={`${it.src}-${i}`}
                className="shrink-0 px-8 sm:px-10 lg:px-12 flex items-center justify-center h-24 sm:h-28 lg:h-32"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${items.length}`}
              >
                {it.href ? (
                  <a href={it.href} aria-label={it.alt} className="block cursor-pointer">
                    {content}
                  </a>
                ) : (
                  <div className="cursor-pointer" aria-hidden>
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Continuous auto-scroll; no arrows or dots */}
    </div>
  );
}

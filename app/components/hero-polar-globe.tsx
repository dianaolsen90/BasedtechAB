"use client";

import { useEffect, useRef } from "react";

const TILT_DEG = 72;

const STARS = [
  {
    rx: 160,
    ry: 60,
    speed: 0.22,
    phase: 0,
    size: 5,
    color: "#7DD4F0",
    shadow: "0 0 10px rgba(125,212,240,0.9), 0 0 20px rgba(125,212,240,0.35)",
  },
  {
    rx: 185,
    ry: 70,
    speed: 0.38,
    phase: 1.15,
    size: 4,
    color: "#2DE0A5",
    shadow: "0 0 10px rgba(45,224,165,0.85), 0 0 18px rgba(45,224,165,0.3)",
  },
  {
    rx: 145,
    ry: 55,
    speed: 0.58,
    phase: 2.4,
    size: 3,
    color: "#A8E8F5",
    shadow: "0 0 8px rgba(168,232,245,0.9), 0 0 16px rgba(168,232,245,0.28)",
  },
] as const;

const R = 159;

export function HeroPolarGlobe() {
  const starRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);
  const t0Ref = useRef<number>(0);

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const applyStar = (i: number, θ: number) => {
      const el = starRefs.current[i];
      if (!el) return;
      const s = STARS[i];
      const x = s.rx * Math.cos(θ);
      const y = s.ry * Math.sin(θ);
      const depth = Math.sin(θ);
      const opacity = 0.32 + 0.63 * ((depth + 1) / 2);
      const scale = 0.65 + 0.42 * ((depth + 1) / 2);
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%) scale(${scale})`;
      el.style.opacity = String(opacity);
    };

    if (reduced) {
      STARS.forEach((s, i) => applyStar(i, s.phase));
      return;
    }

    t0Ref.current = performance.now();

    const tick = (now: number) => {
      const t = (now - t0Ref.current) / 1000;
      STARS.forEach((s, i) => {
        applyStar(i, t * s.speed + s.phase);
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const parallels = [-110, -70, -35, 0, 35, 70, 110];
  const meridianDeg = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];

  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-0 flex h-[min(420px,92vw)] w-[min(420px,92vw)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      aria-hidden
    >
      <div
        className="absolute left-1/2 top-1/2 z-0 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border border-[rgba(125,212,240,0.25)]"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #1E4A6B 0%, #0D2A45 40%, #071828 100%)",
          boxShadow: "0 0 60px rgba(45,224,165,0.08)",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden
        >
          <defs>
            <clipPath id="hero-globe-clip">
              <circle cx="160" cy="160" r="159" />
            </clipPath>
          </defs>
          <g clipPath="url(#hero-globe-clip)">
            {parallels.map((dy) => {
              const y = 160 + dy;
              const half = Math.sqrt(Math.max(0, R * R - dy * dy));
              return (
                <line
                  key={`p-${dy}`}
                  x1={160 - half}
                  y1={y}
                  x2={160 + half}
                  y2={y}
                  stroke="rgba(125,212,240,0.1)"
                  strokeWidth="0.5"
                />
              );
            })}
            {meridianDeg.map((deg) => {
              const rad = (deg * Math.PI) / 180;
              const x1 = 160 + R * Math.cos(rad);
              const y1 = 160 + R * Math.sin(rad);
              const x2 = 160 - R * Math.cos(rad);
              const y2 = 160 - R * Math.sin(rad);
              return (
                <line
                  key={`m-${deg}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="rgba(125,212,240,0.1)"
                  strokeWidth="0.5"
                />
              );
            })}
            <ellipse
              cx="160"
              cy="38"
              rx="118"
              ry="26"
              fill="rgba(168,232,245,0.18)"
            />
            <ellipse
              cx="160"
              cy="282"
              rx="118"
              ry="26"
              fill="rgba(168,232,245,0.18)"
            />
            <path
              d="M 90 140 Q 120 100 160 115 T 230 130 Q 200 155 170 165 Q 130 175 90 140 Z"
              fill="rgba(29,158,117,0.22)"
            />
            <path
              d="M 200 200 Q 230 185 250 210 Q 235 240 210 235 Q 185 228 200 200 Z"
              fill="rgba(29,158,117,0.22)"
            />
            <path
              d="M 130 210 Q 150 195 175 215 Q 160 245 135 235 Q 120 225 130 210 Z"
              fill="rgba(29,158,117,0.22)"
            />
          </g>
        </svg>
      </div>
      <div
        className="absolute left-1/2 top-1/2 z-[1] h-[400px] w-[400px] max-h-[min(400px,95vw)] max-w-[min(400px,95vw)] -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: "900px", perspectiveOrigin: "50% 50%" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            transform: `rotateX(${TILT_DEG}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          <svg
            className="pointer-events-none absolute h-full w-full overflow-visible"
            viewBox="0 0 400 400"
            aria-hidden
          >
            <g transform="translate(200,200)">
              <ellipse
                rx="160"
                ry="60"
                fill="none"
                stroke="rgba(125,212,240,0.1)"
                strokeWidth="0.5"
                strokeDasharray="4 6"
              />
              <ellipse
                rx="185"
                ry="70"
                fill="none"
                stroke="rgba(125,212,240,0.1)"
                strokeWidth="0.5"
                strokeDasharray="4 6"
              />
              <ellipse
                rx="145"
                ry="55"
                fill="none"
                stroke="rgba(125,212,240,0.1)"
                strokeWidth="0.5"
                strokeDasharray="4 6"
              />
            </g>
          </svg>
          <div
            className="absolute left-1/2 top-1/2 h-0 w-0 -translate-x-1/2 -translate-y-1/2"
            style={{ transformStyle: "preserve-3d" }}
          >
            {STARS.map((s, i) => (
              <div
                key={i}
                ref={(el) => {
                  starRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 rounded-full will-change-transform"
                style={{
                  width: s.size,
                  height: s.size,
                  backgroundColor: s.color,
                  boxShadow: s.shadow,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

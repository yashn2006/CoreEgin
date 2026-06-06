import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

type WordSpec = { text: string; delay: number; particles: number; color?: string; className?: string };

const WORDS: WordSpec[] = [
  { text: "WE", delay: 200, particles: 10 },
  { text: "BUILD", delay: 360, particles: 12 },
  { text: "THE", delay: 520, particles: 10 },
  { text: "FUTURE", delay: 680, particles: 24, color: "#c2185b", className: "ce-text-glow" },
];

const PALETTE = ["#c2185b", "#9b1a4a", "#e91e8c", "#f8a5c2", "#7b0d35"];

type Particle = {
  x: number; y: number;
  vx: number; vy: number;
  size: number; baseSize: number;
  color: string;
  life: number; maxLife: number;
};

export function FallingHeadline() {
  const reduce = useReducedMotion();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number | null>(null);
  const lastTRef = useRef<number>(0);

  // Canvas sizing with DPR
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const r = container.getBoundingClientRect();
      canvas.width = Math.floor(r.width * dpr);
      canvas.height = Math.floor(r.height * dpr);
      canvas.style.width = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  // Animation loop
  useEffect(() => {
    if (reduce) return;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const tick = (t: number) => {
      const last = lastTRef.current || t;
      const dt = Math.min((t - last) / 1000, 0.05);
      lastTRef.current = t;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);

      const arr = particlesRef.current;
      for (let i = arr.length - 1; i >= 0; i--) {
        const p = arr[i];
        p.life += dt * 1000;
        if (p.life >= p.maxLife) { arr.splice(i, 1); continue; }
        p.vy += 280 * dt;
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        const lifeRatio = p.life / p.maxLife;
        const opacity = 1 - lifeRatio;
        const size = p.baseSize * (1 - lifeRatio);
        if (size <= 0) continue;
        ctx.globalAlpha = opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [reduce]);

  const burst = (idx: number) => {
    const spec = WORDS[idx];
    const wordEl = wordRefs.current[idx];
    const container = containerRef.current;
    if (!wordEl || !container) return;
    const wr = wordEl.getBoundingClientRect();
    const cr = container.getBoundingClientRect();
    const left = wr.left - cr.left;
    const bottom = wr.bottom - cr.top;
    const width = wr.width;
    for (let i = 0; i < spec.particles; i++) {
      particlesRef.current.push({
        x: left + Math.random() * width,
        y: bottom,
        vx: (Math.random() * 2 - 1) * 180,
        vy: -(60 + Math.random() * 100),
        baseSize: 1.5 + Math.random() * 2.5,
        size: 0,
        color: PALETTE[(Math.random() * PALETTE.length) | 0],
        life: 0,
        maxLife: 380 + Math.random() * 300,
      });
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <canvas
        ref={canvasRef}
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 10 }}
      />
      <h1
        style={{
          fontFamily: "Clash Display, sans-serif",
          lineHeight: 0.95,
          fontWeight: 700,
          fontSize: "clamp(48px,7vw,96px)",
        }}
        className="flex flex-wrap gap-x-[0.25em] gap-y-1"
      >
        {WORDS.map((w, i) => (
          <span
            key={w.text}
            style={{ display: "inline-block", overflow: "hidden", paddingBottom: "0.08em", lineHeight: 1 }}
          >
            {reduce ? (
              <span
                ref={(el) => { wordRefs.current[i] = el; }}
                className={w.className}
                style={{ display: "inline-block", color: w.color ?? "#ffffff" }}
              >
                {w.text}
              </span>
            ) : (
              <motion.span
                ref={(el) => { wordRefs.current[i] = el; }}
                className={w.className}
                style={{ display: "inline-block", color: w.color ?? "#ffffff", willChange: "transform" }}
                initial={{ y: "-110%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{
                  y: { type: "spring", stiffness: 280, damping: 22, mass: 0.8, delay: w.delay / 1000 },
                  opacity: { duration: 0.08, delay: w.delay / 1000 },
                }}
                onAnimationComplete={() => burst(i)}
              >
                {w.text}
              </motion.span>
            )}
          </span>
        ))}
      </h1>
    </div>
  );
}

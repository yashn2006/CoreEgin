import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
export function CinematicCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    let raf = 0;
    const resize = () => {
      c.width = c.offsetWidth * devicePixelRatio;
      c.height = c.offsetHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: 1.5 + Math.random() * 1.5,
      ph: Math.random() * Math.PI * 2,
    }));

    const tick = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      const t = performance.now() / 1000;
      const max = 150 * devicePixelRatio;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > c.width) a.vx *= -1;
        if (a.y < 0 || a.y > c.height) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < max) {
            ctx.strokeStyle = `rgba(139,26,74,${0.3 * (1 - d / max)})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        const pulse = a.r + Math.sin(t * 2 + a.ph) * 0.8;
        ctx.fillStyle = "rgba(194,24,91,0.7)";
        ctx.beginPath(); ctx.arc(a.x, a.y, pulse, 0, Math.PI * 2); ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section className="relative py-[160px] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, #0a0810 90%)", zIndex: 0 }} />
      <div className="relative z-10 text-center px-6">
        <div className="text-[11px] tracking-[0.4em] mb-5" style={{ color: "#c2185b", fontFamily: "Space Grotesk" }}>
          // READY TO BUILD
        </div>
        <h2 className="font-bold text-white" style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,64px)", lineHeight: 1.05 }}>
          Ready to Build Something <span style={{ color: "#c2185b" }} className="ce-text-glow">Extraordinary?</span>
        </h2>
        <p className="mt-6 text-lg max-w-xl mx-auto" style={{ fontFamily: "Inter", fontWeight: 300, color: "#9b8fa8" }}>
          Let's engineer your vision from zero.
        </p>
        <Link to="/start-project" className="mt-10 inline-block px-12 py-[18px] text-white uppercase tracking-[0.2em] text-sm hover:scale-[1.02] transition-transform"
          style={{ background: "linear-gradient(135deg,#8b1a4a,#c2185b)", borderRadius: 999, fontFamily: "Clash Display", boxShadow: "0 0 60px rgba(194,24,91,0.4)" }}>
          Start a Project →
        </Link>
      </div>
    </section>
  );
}

import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { ClientOnly } from "@/components/ClientOnly";
import svc1 from "@/assets/svc-websites.jpg";
import svc2 from "@/assets/svc-mobile.jpg";
import svc3 from "@/assets/svc-saas.jpg";
import svc4 from "@/assets/svc-custom.jpg";
import svc5 from "@/assets/svc-ai.jpg";
import svc6 from "@/assets/svc-agents.jpg";

const TunnelScene = lazy(() => import("@/components/three/TunnelScene"));

const SERVICES = [
  { num: "01", name: "Websites", desc: "Marketing sites engineered for speed, story and conversion.", img: svc1, accent: "#00ffe0" },
  { num: "02", name: "Mobile Apps", desc: "Native-feeling iOS & Android products people love to open.", img: svc2, accent: "#ff4d00" },
  { num: "03", name: "SaaS Platforms", desc: "Multi-tenant systems built to scale from day one.", img: svc3, accent: "#7b61ff" },
  { num: "04", name: "Custom Software", desc: "Bespoke internal tools that replace ten spreadsheets.", img: svc4, accent: "#00ffe0" },
  { num: "05", name: "AI & Automation", desc: "LLM pipelines and workflows that quietly do the work.", img: svc5, accent: "#ff4d00" },
  { num: "06", name: "AI Agents", desc: "Autonomous agents that reason, act, and integrate.", img: svc6, accent: "#7b61ff" },
];

export function Services() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const [active, setActive] = useState(0);
  const [depth, setDepth] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!wrapRef.current) return;
    const st = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: "top top",
      end: "bottom bottom",
      onEnter: () => setInView(true),
      onEnterBack: () => setInView(true),
      onLeave: () => setInView(false),
      onLeaveBack: () => setInView(false),
      onUpdate: (self) => {
        const p = self.progress;
        progressRef.current = p;
        const idx = Math.min(SERVICES.length - 1, Math.floor(p * SERVICES.length));
        setActive(idx);
        setDepth(Math.round(p * 100));
      },
    });
    return () => { st.kill(); };
  }, []);

  const s = SERVICES[active];

  return (
    <section id="services" ref={wrapRef} style={{ height: "500vh", background: "#050508" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: "#050508" }}>
        {/* 3D scene */}
        <div className="absolute inset-0">
          <ClientOnly>
            <Suspense fallback={null}>
              <TunnelScene progressRef={progressRef} active={inView} />
            </Suspense>
          </ClientOnly>
        </div>

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, #050508 95%)" }} />

        {/* HUD */}
        <div className="absolute top-24 left-6 md:left-10 text-[12px]" style={{ fontFamily: "JetBrains Mono", color: s.accent, letterSpacing: "0.35em" }}>
          // ZONE {s.num} / 06
        </div>
        <div className="absolute top-24 right-6 md:right-10 text-[12px]" style={{ fontFamily: "JetBrains Mono", color: "#6a6a80", letterSpacing: "0.2em" }}>
          DEPTH {depth.toString().padStart(3, "0")}%
        </div>

        {/* Sidebar zone list */}
        <div className="hidden md:flex flex-col gap-3 absolute left-10 top-1/2 -translate-y-1/2 z-10">
          {SERVICES.map((sv, i) => (
            <div key={sv.num} className="flex items-center gap-3 transition-all duration-300">
              <div className="h-px transition-all duration-300" style={{ width: i === active ? 40 : 16, background: i === active ? "#00ffe0" : "#6a6a80" }} />
              <span className="text-[10px] tracking-[0.3em]" style={{ fontFamily: "JetBrains Mono", color: i === active ? "#00ffe0" : "#6a6a80" }}>
                {sv.num} {sv.name.toUpperCase()}
              </span>
            </div>
          ))}
        </div>

        {/* Center grid */}
        <div className="absolute inset-0 flex items-center justify-center px-6 md:px-10 pt-24 z-10">
          <div className="max-w-[1400px] w-full grid md:grid-cols-2 gap-10 items-center">
            {/* Image card */}
            <div className="relative max-w-[560px] w-full mx-auto" style={{ aspectRatio: "4/3" }}>
              <div
                className="absolute inset-0 overflow-hidden transition-all duration-700"
                style={{
                  border: "1px solid #1a1a2e",
                  background: "rgba(13,13,20,0.5)",
                  backdropFilter: "blur(10px)",
                  boxShadow: `0 0 80px ${s.accent}33`,
                  borderRadius: 8,
                }}
              >
                {SERVICES.map((sv, i) => (
                  <img
                    key={sv.num}
                    src={sv.img}
                    alt={sv.name}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
                    style={{ opacity: i === active ? 1 : 0 }}
                  />
                ))}
                {/* scanline */}
                <div className="absolute left-0 right-0 h-px animate-scanline" style={{ background: s.accent, opacity: 0.6 }} />
                {/* corners */}
                {(["tl", "tr", "bl", "br"] as const).map((c) => (
                  <div key={c} className={`absolute w-4 h-4 ${c.includes("t") ? "top-2" : "bottom-2"} ${c.includes("l") ? "left-2" : "right-2"}`}>
                    <div className={`absolute ${c.includes("t") ? "top-0" : "bottom-0"} ${c.includes("l") ? "left-0" : "right-0"} h-[3px] w-4`} style={{ background: s.accent }} />
                    <div className={`absolute ${c.includes("t") ? "top-0" : "bottom-0"} ${c.includes("l") ? "left-0" : "right-0"} w-[3px] h-4`} style={{ background: s.accent }} />
                  </div>
                ))}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 text-[10px]" style={{ background: "rgba(0,0,0,0.7)", fontFamily: "JetBrains Mono", color: "#f0f0f0" }}>
                  <span>◆ MODULE {s.num}</span>
                  <span>RENDER · LIVE</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="text-[12px] tracking-[0.4em]" style={{ fontFamily: "JetBrains Mono", color: s.accent }}>
                / SERVICE {s.num}
              </div>
              <h3
                className="mt-4 font-bold uppercase transition-all duration-600"
                style={{
                  fontFamily: "Clash Display, Rajdhani, sans-serif",
                  fontSize: "clamp(36px, 5.5vw, 88px)",
                  lineHeight: 0.95,
                  color: "#f0f0f0",
                  textShadow: `0 0 40px ${s.accent}77`,
                }}
              >
                {s.name}
              </h3>
              <p className="mt-6 max-w-[540px] text-base" style={{ fontFamily: "JetBrains Mono", color: "#6a6a80" }}>
                {s.desc}
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12" style={{ background: s.accent }} />
                <span className="text-[11px]" style={{ fontFamily: "JetBrains Mono", color: "#6a6a80" }}>Engineered from zero</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block absolute bottom-8 right-10 text-[10px] tracking-[0.3em] ce-blink" style={{ fontFamily: "JetBrains Mono", color: "#6a6a80" }}>
          KEEP SCROLLING ↓
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ComponentType, type ReactNode } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, Plus, Minus } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const ROSE = "#c2185b";
export const PLUM = "#3d1060";
export const MUTED = "#9b8fa8";
export const LABEL = "#c084a8";

export type Deliverable = {
  icon: ComponentType<{ size?: number; style?: React.CSSProperties }>;
  title: string;
  desc: string;
  bullets: string[];
};

export type ServiceConfig = {
  serviceNumber: string; // "01"
  headline: string; // "WEBSITES"
  tagline: string;
  pills: [string, string];
  ctaWord: string; // "Website"
  deliverables: Deliverable[];
  stats: { value: string; label: string }[];
  steps: { num: string; name: string; time: string; desc: string }[];
  whyTitle: string;
  whyAccent: string;
  whyPoints: string[];
  tech: string[];
  techRow2?: string[];
  faqs: { q: string; a: string }[];
  heroVisual: ReactNode;
  whyVisual: ReactNode;
};

export function ServicePage({ config }: { config: ServiceConfig }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ background: "#0a0810", color: "#f0e8ff", minHeight: "100vh" }}
    >
      <Navbar />
      <Hero config={config} />
      <WhatYouGet items={config.deliverables} />
      <ResultsStrip stats={config.stats} />
      <Process steps={config.steps} />
      <WhyCE
        title={config.whyTitle}
        accent={config.whyAccent}
        points={config.whyPoints}
        visual={config.whyVisual}
      />
      <TechStack tech={config.tech} row2={config.techRow2} />
      <FAQ faqs={config.faqs} />
      <BottomCTA ctaWord={config.ctaWord} />
      <Footer />
    </motion.div>
  );
}

/* ---------------- HERO ---------------- */
function Hero({ config }: { config: ServiceConfig }) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-32 pb-20 px-6 md:px-12">
      <div className="absolute inset-0 ce-grid opacity-60" />
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full ce-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(194,24,91,0.18), transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full ce-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(61,16,96,0.25), transparent 60%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] mb-8 tracking-[0.25em] uppercase transition-colors hover:text-white"
            style={{ color: LABEL, fontFamily: "Space Grotesk" }}
          >
            <ArrowLeft size={14} /> Back to CoreEgin
          </Link>

          <Stagger delay={0.05}>
            <div
              className="text-[12px] tracking-[0.4em] uppercase mb-6"
              style={{ color: ROSE, fontFamily: "Space Grotesk" }}
            >
              // SERVICE {config.serviceNumber}
            </div>
          </Stagger>

          <DropHeadline text={config.headline} />

          <Stagger delay={0.5}>
            <p
              className="mt-6 font-light"
              style={{ fontFamily: "Inter", fontSize: 18, color: MUTED, maxWidth: 480, lineHeight: 1.6 }}
            >
              {config.tagline}
            </p>
          </Stagger>

          <Stagger delay={0.65}>
            <div className="mt-8 flex flex-wrap gap-3">
              <StatPill label={config.pills[0]} />
              <StatPill label={config.pills[1]} />
            </div>
          </Stagger>

          <Stagger delay={0.8}>
            <Link
              to="/start-project"
              className="inline-flex items-center mt-10 px-7 py-4 text-white text-[13px] uppercase tracking-[0.2em] transition-transform hover:scale-[1.03]"
              style={{
                background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`,
                borderRadius: 999,
                fontFamily: "Clash Display",
                boxShadow: "0 10px 40px -10px rgba(194,24,91,0.6)",
              }}
            >
              Start This Project →
            </Link>
          </Stagger>
        </div>

        {config.heroVisual}
      </div>
    </section>
  );
}

/* Word-by-word drop animation like homepage */
function DropHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <div className="flex flex-wrap gap-x-4">
      {words.map((w, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block"
          style={{ paddingBottom: "0.05em" }}
        >
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 22,
              mass: 0.8,
              delay: 0.2 + i * 0.16,
            }}
            className="inline-block font-bold text-white ce-text-glow"
            style={{
              fontFamily: "Clash Display",
              fontSize: "clamp(56px, 9vw, 110px)",
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export function Stagger({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StatPill({ label }: { label: string }) {
  return (
    <div
      className="ce-pill px-5 py-2.5 text-[12px] tracking-[0.1em]"
      style={{ color: "#f0e8ff", fontFamily: "Space Grotesk", border: "1px solid rgba(194,24,91,0.3)" }}
    >
      {label}
    </div>
  );
}

/* ---------------- WHAT YOU GET ---------------- */
function WhatYouGet({ items }: { items: Deliverable[] }) {
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle eyebrow="// DELIVERABLES" title="Everything Included." accent="Zero Compromises." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {items.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="ce-glass ce-glass-hover p-7"
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: "rgba(194,24,91,0.12)", border: "1px solid rgba(194,24,91,0.3)" }}
              >
                <d.icon size={20} style={{ color: ROSE }} />
              </div>
              <h3 className="text-white font-bold" style={{ fontFamily: "General Sans", fontSize: 16 }}>
                {d.title}
              </h3>
              <p className="mt-2" style={{ fontFamily: "Inter", fontSize: 14, color: MUTED, lineHeight: 1.6 }}>
                {d.desc}
              </p>
              <ul className="mt-5 space-y-2">
                {d.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2.5"
                    style={{ fontFamily: "Inter", fontSize: 13, color: "#d8cce5" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ background: ROSE }} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESULTS STRIP ---------------- */
function ResultsStrip({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="relative py-20 px-6 md:px-12" style={{ background: "rgba(17,13,26,0.5)" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="ce-glass p-6 text-center"
          >
            <div
              className="text-white font-bold ce-text-glow"
              style={{ fontFamily: "Clash Display", fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1 }}
            >
              {s.value}
            </div>
            <div
              className="mt-3 text-[11px] tracking-[0.3em] uppercase"
              style={{ color: LABEL, fontFamily: "Space Grotesk" }}
            >
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- SECTION TITLE ---------------- */
export function SectionTitle({
  eyebrow, title, accent, center,
}: { eyebrow?: string; title: string; accent?: string; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <div
          className="text-[11px] tracking-[0.4em] uppercase mb-4"
          style={{ color: ROSE, fontFamily: "Space Grotesk" }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="font-bold text-white"
        style={{
          fontFamily: "Clash Display",
          fontSize: "clamp(32px, 4.5vw, 60px)",
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
        }}
      >
        {title} {accent && <span style={{ color: ROSE }}>{accent}</span>}
      </h2>
    </div>
  );
}

/* ---------------- PROCESS ---------------- */
function Process({ steps }: { steps: { num: string; name: string; time: string; desc: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative py-[120px] px-6 md:px-12" style={{ background: "rgba(17,13,26,0.5)" }}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle eyebrow="// PROCESS" title="How We Build" accent="Step by Step" />

        <div ref={ref} className="relative mt-16">
          <svg
            className="hidden lg:block absolute top-12 left-0 w-full h-2 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="50" y1="1" x2="950" y2="1"
              stroke={ROSE} strokeWidth="1.5"
              strokeDasharray="900"
              strokeDashoffset={inView ? 0 : 900}
              style={{ transition: "stroke-dashoffset 2s ease-out 0.3s", opacity: 0.5 }}
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="ce-glass p-6 relative overflow-hidden"
              >
                <div
                  className="absolute -top-2 -right-2 font-bold pointer-events-none"
                  style={{
                    fontFamily: "Clash Display", fontSize: 80,
                    color: "rgba(194,24,91,0.08)", lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div className="relative">
                  <h3 className="text-white font-bold mb-1" style={{ fontFamily: "General Sans", fontSize: 18 }}>
                    {s.name}
                  </h3>
                  <span
                    className="inline-block ce-pill px-3 py-1 text-[10px] tracking-[0.15em] mb-4"
                    style={{ color: ROSE, fontFamily: "Space Grotesk", border: "1px solid rgba(194,24,91,0.3)" }}
                  >
                    {s.time}
                  </span>
                  <p style={{ fontFamily: "Inter", fontSize: 13, color: MUTED, lineHeight: 1.6 }}>
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY CE ---------------- */
function WhyCE({
  title, accent, points, visual,
}: { title: string; accent: string; points: string[]; visual: ReactNode }) {
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[55%_45%] gap-14 items-center">
        <div>
          <SectionTitle eyebrow="// WHY COREEGIN" title={title} accent={accent} />
          <div className="mt-10 space-y-4">
            {points.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="ce-glass px-5 py-4 flex items-start gap-3"
              >
                <span style={{ color: ROSE, fontFamily: "Clash Display", fontSize: 18 }}>→</span>
                <span style={{ fontFamily: "Inter", fontSize: 15, color: "#f0e8ff", lineHeight: 1.5 }}>
                  {d}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        {visual}
      </div>
    </section>
  );
}

/* ---------------- TECH STACK ---------------- */
function TechStack({ tech, row2 }: { tech: string[]; row2?: string[] }) {
  return (
    <section className="relative py-[100px] overflow-hidden">
      <SectionTitle center eyebrow="// ARSENAL" title="Built With" accent="The Best" />
      <div className="mt-12 space-y-4 overflow-hidden">
        <div className="overflow-hidden">
          <div className="flex w-max" style={{ animation: "ce-marquee 22s linear infinite" }}>
            {[...tech, ...tech].map((t, i) => (
              <TechPill key={i} t={t} />
            ))}
          </div>
        </div>
        {row2 && (
          <div className="overflow-hidden">
            <div className="flex w-max" style={{ animation: "ce-marquee 28s linear infinite reverse" }}>
              {[...row2, ...row2].map((t, i) => (
                <TechPill key={i} t={t} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function TechPill({ t }: { t: string }) {
  return (
    <span
      className="ce-pill mx-3 px-5 py-2.5 text-[12px] tracking-[0.15em] whitespace-nowrap"
      style={{ fontFamily: "Space Grotesk", color: "#f0e8ff", border: "1px solid rgba(194,24,91,0.3)" }}
    >
      {t}
    </span>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <SectionTitle center eyebrow="// FAQ" title="Common" accent="Questions" />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="ce-glass overflow-hidden"
                style={{
                  borderColor: isOpen ? "rgba(194,24,91,0.55)" : "rgba(139,26,74,0.2)",
                  boxShadow: isOpen ? "0 0 40px rgba(194,24,91,0.18)" : undefined,
                  transition: "border-color 300ms, box-shadow 300ms",
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5"
                >
                  <span className="text-white" style={{ fontFamily: "General Sans", fontSize: 16, fontWeight: 500 }}>
                    {f.q}
                  </span>
                  {isOpen ? <Minus size={18} style={{ color: ROSE }} /> : <Plus size={18} style={{ color: ROSE }} />}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <div
                        className="px-6 pb-5"
                        style={{ fontFamily: "Inter", fontSize: 14, color: MUTED, lineHeight: 1.65 }}
                      >
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOTTOM CTA ---------------- */
function BottomCTA({ ctaWord }: { ctaWord: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let raf = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const nodes = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
    }));

    const tick = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.strokeStyle = `rgba(194,24,91,${0.25 * (1 - d / 130)})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = ROSE;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="cta" className="relative py-[140px] px-6 md:px-12 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, transparent, #0a0810 75%)" }}
      />
      <div className="relative max-w-[900px] mx-auto text-center">
        <div
          className="text-[12px] tracking-[0.4em] uppercase mb-5"
          style={{ color: ROSE, fontFamily: "Space Grotesk" }}
        >
          // READY TO BUILD
        </div>
        <h2
          className="font-bold text-white ce-text-glow"
          style={{
            fontFamily: "Clash Display",
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Build {ctaWord}?
        </h2>
        <p
          className="mt-5 font-light max-w-[560px] mx-auto"
          style={{ fontFamily: "Inter", fontSize: 18, color: MUTED, lineHeight: 1.6 }}
        >
          Let's engineer something your competitors can't copy.
        </p>
        <Link
          to="/start-project"
          className="inline-flex items-center mt-10 text-white uppercase tracking-[0.2em] text-[13px] transition-all hover:scale-[1.02]"
          style={{
            padding: "18px 48px",
            background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`,
            borderRadius: 999,
            fontFamily: "Clash Display",
            boxShadow: "0 20px 60px -10px rgba(194,24,91,0.6)",
          }}
        >
          Start Your Project →
        </Link>
      </div>
    </section>
  );
}

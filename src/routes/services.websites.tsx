import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowLeft,
  Target,
  Palette,
  Code2,
  Search,
  Gauge as GaugeIcon,
  Rocket,
  Plus,
  Minus,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/websites")({
  head: () => ({
    meta: [
      { title: "Website Development Mumbai — Custom Websites by CoreEgin" },
      { name: "description", content: "Custom website development in Mumbai. Sub-2s load times, SEO-baked, mobile-first, zero templates. CoreEgin engineers conversion-focused marketing websites from scratch." },
      { name: "keywords", content: "website development Mumbai, web design Mumbai, custom website India, marketing website developer Mumbai, fast websites India, SEO website development, Next.js developer Mumbai, web agency Mumbai" },
      { property: "og:title", content: "Website Development Mumbai — CoreEgin" },
      { property: "og:description", content: "Custom marketing websites engineered for speed, story and conversion. Built from zero in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/websites" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Website Development Mumbai — CoreEgin" },
      { name: "twitter:description", content: "Custom websites engineered for speed, story and conversion." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/websites" },
    ],
  }),
  component: WebsitesPage,
});

const ROSE = "#c2185b";
const PLUM = "#3d1060";
const MUTED = "#9b8fa8";
const LABEL = "#c084a8";

function WebsitesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{ background: "#0a0810", color: "#f0e8ff", minHeight: "100vh" }}
    >
      <Navbar />
      <Hero />
      <WhatYouGet />
      <Process />
      <WhyCE />
      <TechStack />
      <FAQ />
      <BottomCTA />
      <Footer />
    </motion.div>
  );
}

/* ---------------- SECTION 1: HERO ---------------- */
function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center pt-32 pb-20 px-6 md:px-12">
      {/* background */}
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
        {/* Left */}
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
              // SERVICE 01
            </div>
          </Stagger>

          <Stagger delay={0.15}>
            <h1
              className="font-bold text-white ce-text-glow"
              style={{
                fontFamily: "Clash Display",
                fontSize: "clamp(64px, 10vw, 120px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              WEBSITES
            </h1>
          </Stagger>

          <Stagger delay={0.3}>
            <p
              className="mt-6 font-light"
              style={{
                fontFamily: "Inter",
                fontSize: 18,
                color: MUTED,
                maxWidth: 480,
                lineHeight: 1.6,
              }}
            >
              Marketing sites engineered for speed, story and conversion.
            </p>
          </Stagger>

          <Stagger delay={0.45}>
            <div className="mt-8 flex flex-wrap gap-3">
              <StatPill label="30+ Sites Delivered" />
              <StatPill label="100% Mobile Optimised" />
            </div>
          </Stagger>

          <Stagger delay={0.6}>
            <a
              href="#cta"
              className="inline-flex items-center mt-10 px-7 py-4 text-white text-[13px] uppercase tracking-[0.2em] transition-transform hover:scale-[1.03]"
              style={{
                background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`,
                borderRadius: 999,
                fontFamily: "Clash Display",
                boxShadow: "0 10px 40px -10px rgba(194,24,91,0.6)",
              }}
            >
              Start This Project →
            </a>
          </Stagger>
        </div>

        {/* Right: browser mockup */}
        <BrowserMockup />
      </div>
    </section>
  );
}

function Stagger({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
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

function BrowserMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative ce-float"
    >
      <div
        className="relative ce-glass overflow-hidden"
        style={{
          borderRadius: 16,
          padding: 0,
          boxShadow: "0 30px 80px -20px rgba(194,24,91,0.35), 0 0 60px rgba(194,24,91,0.15)",
        }}
      >
        {/* scanline */}
        <div
          className="pointer-events-none absolute inset-0 z-20"
          style={{ overflow: "hidden" }}
        >
          <div
            className="absolute left-0 right-0 h-24 animate-scanline"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(194,24,91,0.08), transparent)",
            }}
          />
        </div>

        {/* browser chrome */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: "1px solid rgba(139,26,74,0.25)", background: "rgba(15,11,22,0.8)" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: "#ff5f56" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#ffbd2e" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#27c93f" }} />
          <div
            className="ml-4 flex-1 px-3 py-1 text-[11px]"
            style={{
              background: "rgba(194,24,91,0.08)",
              border: "1px solid rgba(194,24,91,0.2)",
              borderRadius: 6,
              color: ROSE,
              fontFamily: "JetBrains Mono",
            }}
          >
            stellarventures.in
          </div>
        </div>

        {/* fake content */}
        <div className="p-4 space-y-3" style={{ background: "rgba(10,8,16,0.6)" }}>
          <div
            className="h-32 rounded-md"
            style={{ background: `linear-gradient(135deg, ${ROSE}, ${PLUM})` }}
          />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-20 rounded-md ce-glass"
                style={{ border: "1px solid rgba(139,26,74,0.2)" }}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div
              className="h-24 rounded-md"
              style={{ background: "linear-gradient(135deg, rgba(194,24,91,0.25), rgba(61,16,96,0.2))" }}
            />
            <div
              className="h-24 rounded-md ce-glass"
              style={{ border: "1px solid rgba(139,26,74,0.2)" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- SECTION 2: WHAT YOU GET ---------------- */
const DELIVERABLES = [
  {
    icon: Target,
    title: "Strategy & Discovery",
    desc: "We map your business before we touch a pixel.",
    bullets: ["Sitemap planning", "Competitor analysis", "Content architecture"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Brand-aligned interfaces designed for thumbs first.",
    bullets: ["Figma mockups", "Mobile-first design", "Brand-consistent UI"],
  },
  {
    icon: Code2,
    title: "Development",
    desc: "Hand-coded — no themes, no builders, ever.",
    bullets: ["React/Next.js build", "CMS integration", "Animation layer"],
  },
  {
    icon: Search,
    title: "SEO Foundation",
    desc: "Indexable, semantic, structured from day one.",
    bullets: ["Meta tags", "Schema markup", "Core Web Vitals optimised"],
  },
  {
    icon: GaugeIcon,
    title: "Speed Optimisation",
    desc: "Performance is a feature, not an afterthought.",
    bullets: ["Sub-2s load time", "Image optimisation", "CDN setup"],
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "We ship it. Then we stay around.",
    bullets: ["Live deployment", "DNS setup", "30 days post-launch support"],
  },
];

function WhatYouGet() {
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle eyebrow="// DELIVERABLES" title="Everything Included." accent="Zero Compromises." />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {DELIVERABLES.map((d, i) => (
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

function SectionTitle({
  eyebrow,
  title,
  accent,
  center,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  center?: boolean;
}) {
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
        {title}{" "}
        {accent && <span style={{ color: ROSE }}>{accent}</span>}
      </h2>
    </div>
  );
}

/* ---------------- SECTION 3: PROCESS ---------------- */
const STEPS = [
  { num: "01", name: "Discovery", time: "Week 1", desc: "Understanding your business, users, and goals." },
  { num: "02", name: "Design", time: "Week 1–2", desc: "Figma mockups, brand alignment, your approval." },
  { num: "03", name: "Development", time: "Week 2–5", desc: "Full build, CMS, performance tuning." },
  { num: "04", name: "Review & QA", time: "Week 5–6", desc: "Cross-device testing, revisions, speed audit." },
  { num: "05", name: "Launch", time: "Week 6", desc: "Deployment, DNS, handover, support begins." },
];

function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section className="relative py-[120px] px-6 md:px-12" style={{ background: "rgba(17,13,26,0.5)" }}>
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle eyebrow="// PROCESS" title="How We Build" accent="Your Website" />

        <div ref={ref} className="relative mt-16">
          {/* connector svg (desktop) */}
          <svg
            className="hidden lg:block absolute top-12 left-0 w-full h-2 pointer-events-none"
            preserveAspectRatio="none"
            viewBox="0 0 1000 2"
          >
            <line
              x1="50"
              y1="1"
              x2="950"
              y2="1"
              stroke={ROSE}
              strokeWidth="1.5"
              strokeDasharray="900"
              strokeDashoffset={inView ? 0 : 900}
              style={{ transition: "stroke-dashoffset 2s ease-out 0.3s", opacity: 0.5 }}
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {STEPS.map((s, i) => (
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
                    fontFamily: "Clash Display",
                    fontSize: 80,
                    color: "rgba(194,24,91,0.08)",
                    lineHeight: 1,
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

/* ---------------- SECTION 4: WHY COREEGIN ---------------- */
const DIFFS = [
  "Every site built from zero — no WordPress themes, no page builders",
  "Mobile-first always — designed for thumbs before cursors",
  "We target sub-2 second load times on every single project",
  "SEO baked in from day one — not bolted on as an afterthought",
  "You own everything — code, domain, hosting, no lock-in ever",
];

const LIGHTHOUSE = [
  { label: "Performance", score: 98 },
  { label: "Accessibility", score: 100 },
  { label: "SEO", score: 97 },
  { label: "Best Practices", score: 100 },
];

function WhyCE() {
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[55%_45%] gap-14 items-center">
        <div>
          <SectionTitle eyebrow="// WHY COREEGIN" title="Not a Template." accent="Never." />
          <div className="mt-10 space-y-4">
            {DIFFS.map((d, i) => (
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

        <LighthouseCard />
      </div>
    </section>
  );
}

function LighthouseCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="ce-glass p-8"
      style={{ boxShadow: "0 30px 80px -20px rgba(194,24,91,0.3)" }}
    >
      <div className="flex items-center justify-between mb-8">
        <span
          className="text-[11px] tracking-[0.3em] uppercase"
          style={{ color: LABEL, fontFamily: "Space Grotesk" }}
        >
          Lighthouse Audit
        </span>
        <span className="flex items-center gap-2 text-[11px]" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
          <span className="w-2 h-2 rounded-full ce-blink" style={{ background: "#22c55e" }} />
          PASS
        </span>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {LIGHTHOUSE.map((g, i) => (
          <Gauge key={g.label} score={g.score} label={g.label} delay={i * 0.15} />
        ))}
      </div>
    </motion.div>
  );
}

function Gauge({ score, label, delay }: { score: number; label: string; delay: number }) {
  const ref = useRef<SVGCircleElement>(null);
  const inView = useInView(ref, { once: true });
  const R = 40;
  const C = 2 * Math.PI * R;
  const offset = C - (score / 100) * C;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-[110px] h-[110px]">
        <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" />
          <defs>
            <linearGradient id={`g-${label}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={ROSE} />
              <stop offset="100%" stopColor="#22c55e" />
            </linearGradient>
          </defs>
          <circle
            ref={ref}
            cx="50"
            cy="50"
            r={R}
            fill="none"
            stroke={`url(#g-${label})`}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={C}
            strokeDashoffset={inView ? offset : C}
            style={{ transition: `stroke-dashoffset 1.5s ease-out ${delay}s` }}
          />
        </svg>
        <div
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{ fontFamily: "Clash Display", fontSize: 28, fontWeight: 700 }}
        >
          {score}
        </div>
      </div>
      <div
        className="mt-2 text-[10px] tracking-[0.2em] uppercase"
        style={{ color: MUTED, fontFamily: "Space Grotesk" }}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------------- SECTION 5: TECH STACK ---------------- */
const TECH = [
  "Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Sanity CMS",
  "Vercel", "Cloudflare", "Figma", "GSAP", "Three.js", "Lenis",
];

function TechStack() {
  return (
    <section className="relative py-[100px] overflow-hidden">
      <SectionTitle center eyebrow="// ARSENAL" title="Built With" accent="The Best" />
      <div className="mt-12 overflow-hidden">
        <div className="flex w-max" style={{ animation: "ce-marquee 22s linear infinite" }}>
          {[...TECH, ...TECH].map((t, i) => (
            <span
              key={i}
              className="ce-pill mx-3 px-5 py-2.5 text-[12px] tracking-[0.15em] whitespace-nowrap"
              style={{
                fontFamily: "Space Grotesk",
                color: "#f0e8ff",
                border: "1px solid rgba(194,24,91,0.3)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 6: FAQ ---------------- */
const FAQS = [
  { q: "How long does a website take?", a: "Typically 4 to 8 weeks depending on complexity and content readiness." },
  { q: "Do you work with existing brands?", a: "Yes, we work from your existing brand guidelines and adapt everything to match." },
  { q: "Will it work perfectly on mobile?", a: "Every site we build is mobile-first — designed for phones before desktops." },
  { q: "Can I update content myself?", a: "Yes, we integrate a CMS so you can edit text, images, and pages without touching code." },
  { q: "Do you build ecommerce sites?", a: "Yes, we integrate Shopify, WooCommerce, or fully custom checkout solutions." },
  { q: "What happens after launch?", a: "Every project includes 30 days of free post-launch support and bug fixes." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-[120px] px-6 md:px-12">
      <div className="max-w-[800px] mx-auto">
        <SectionTitle center eyebrow="// FAQ" title="Common" accent="Questions" />
        <div className="mt-12 space-y-3">
          {FAQS.map((f, i) => {
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

/* ---------------- SECTION 7: BOTTOM CTA ---------------- */
function BottomCTA() {
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
        n.x += n.vx;
        n.y += n.vy;
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
          Ready to Build Your Website?
        </h2>
        <p
          className="mt-5 font-light max-w-[560px] mx-auto"
          style={{ fontFamily: "Inter", fontSize: 18, color: MUTED, lineHeight: 1.6 }}
        >
          Let's engineer something your competitors can't copy.
        </p>
        <a
          href="mailto:contact@coreegin.com"
          className="inline-flex items-center mt-10 text-white uppercase tracking-[0.2em] text-[13px] transition-all hover:scale-[1.02]"
          style={{
            padding: "18px 48px",
            background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`,
            borderRadius: 999,
            fontFamily: "Clash Display",
            boxShadow: "0 20px 60px -10px rgba(194,24,91,0.6)",
          }}
        >
          Start Your Website Project →
        </a>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Check, X, Smartphone, Apple, Star, Download } from "lucide-react";

const ROSE = "#c2185b";
const PLUM = "#3d1060";
const MUTED = "#9b8fa8";
const LABEL = "#c084a8";

/* ============ SHARED WRAPPERS ============ */
function HeroFrame({ children, glow = "rgba(194,24,91,0.35)" }: { children: React.ReactNode; glow?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative ce-float"
      style={{ filter: `drop-shadow(0 30px 80px ${glow})` }}
    >
      {children}
    </motion.div>
  );
}

function Scanline() {
  return (
    <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
      <div
        className="absolute left-0 right-0 h-24 animate-scanline"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(194,24,91,0.08), transparent)" }}
      />
    </div>
  );
}

/* ============ MOBILE APPS HERO ============ */
export function PhonesMockup() {
  const [hover, setHover] = useState(false);
  return (
    <HeroFrame>
      <div
        className="relative flex items-end justify-center gap-6"
        style={{ perspective: 1000, minHeight: 480 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* iOS */}
        <motion.div
          animate={{ x: hover ? -28 : 0, rotateY: -12 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <PhoneShell ios>
            <div className="px-3 pt-2 pb-3 space-y-2">
              <div className="text-[8px]" style={{ color: LABEL, fontFamily: "JetBrains Mono" }}>DASHBOARD</div>
              <div className="grid grid-cols-2 gap-1.5">
                <StatMini value="98%" sub="UPTIME" />
                <StatMini value="2.4k" sub="USERS" />
              </div>
              <div className="ce-glass rounded-md p-2 h-16">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <polyline
                    fill="none" stroke={ROSE} strokeWidth="1.5"
                    points="0,30 15,20 30,25 45,12 60,18 75,8 100,14"
                  />
                </svg>
              </div>
              <div className="ce-glass rounded-md p-2 h-10" />
            </div>
          </PhoneShell>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>
            <Apple size={11} /> iOS
          </div>
        </motion.div>

        {/* Android */}
        <motion.div
          animate={{ x: hover ? 28 : 0, rotateY: 12 }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className="relative"
          style={{ transformStyle: "preserve-3d" }}
        >
          <PhoneShell>
            <div className="px-3 pt-2 pb-3 space-y-1.5">
              <div className="text-[8px]" style={{ color: LABEL, fontFamily: "JetBrains Mono" }}>FEED</div>
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="ce-glass rounded-md h-9 pl-2 flex items-center"
                  style={{ borderLeft: `2px solid ${["#c2185b", "#22c55e", "#6366f1", "#f59e0b"][i]}` }}
                >
                  <div className="w-5 h-5 rounded-full" style={{ background: "rgba(194,24,91,0.25)" }} />
                  <div className="ml-2 flex-1 space-y-1">
                    <div className="h-1 rounded w-3/4" style={{ background: "rgba(240,232,255,0.3)" }} />
                    <div className="h-1 rounded w-1/2" style={{ background: "rgba(240,232,255,0.15)" }} />
                  </div>
                </div>
              ))}
            </div>
          </PhoneShell>
          <div className="mt-3 flex items-center justify-center gap-1.5 text-[10px]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>
            <Smartphone size={11} /> Android
          </div>
        </motion.div>
      </div>
    </HeroFrame>
  );
}

function PhoneShell({ children, ios = false }: { children: React.ReactNode; ios?: boolean }) {
  return (
    <div
      className="relative ce-glass"
      style={{
        width: 170, height: 340, borderRadius: 32, padding: 6,
        background: "rgba(10,8,16,0.9)",
        border: "1px solid rgba(194,24,91,0.4)",
        boxShadow: "inset 0 0 30px rgba(194,24,91,0.1), 0 0 40px rgba(194,24,91,0.25)",
      }}
    >
      {ios ? (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-2 z-10 rounded-full"
          style={{ width: 60, height: 16, background: "#000" }}
        />
      ) : (
        <div
          className="absolute left-1/2 -translate-x-1/2 top-2.5 z-10 rounded-full"
          style={{ width: 8, height: 8, background: "#000", border: "1px solid rgba(194,24,91,0.3)" }}
        />
      )}
      <div className="relative w-full h-full rounded-[26px] overflow-hidden" style={{ background: "rgba(15,11,22,0.9)" }}>
        <div className="pt-6">{children}</div>
      </div>
    </div>
  );
}

function StatMini({ value, sub }: { value: string; sub: string }) {
  return (
    <div className="ce-glass rounded-md p-1.5 text-center">
      <div className="text-white font-bold" style={{ fontFamily: "Clash Display", fontSize: 13 }}>{value}</div>
      <div className="text-[7px] tracking-[0.15em]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>{sub}</div>
    </div>
  );
}

/* ============ MOBILE APPS WHY: App Store card ============ */
export function AppStoreCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="ce-glass p-7"
      style={{ boxShadow: "0 30px 80px -20px rgba(194,24,91,0.3)" }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-[60px] h-[60px] rounded-xl flex items-center justify-center text-white font-bold"
          style={{ background: `linear-gradient(135deg, ${PLUM}, ${ROSE})`, fontFamily: "Clash Display", fontSize: 26 }}
        >
          CE
        </div>
        <div className="flex-1">
          <div className="text-white font-bold" style={{ fontFamily: "General Sans", fontSize: 16 }}>CoreEgin App</div>
          <div className="text-[12px]" style={{ color: MUTED, fontFamily: "Inter" }}>Productivity · Built by CoreEgin</div>
          <div className="mt-1.5 flex items-center gap-2">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={11} fill={ROSE} style={{ color: ROSE }} />
              ))}
            </div>
            <span className="text-[10px]" style={{ color: LABEL, fontFamily: "JetBrains Mono" }}>4.9 · 12.4k</span>
          </div>
        </div>
        <button
          className="text-white text-[11px] uppercase tracking-widest px-4 py-2 flex items-center gap-1.5"
          style={{ background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`, borderRadius: 999, fontFamily: "Clash Display" }}
        >
          <Download size={11} /> GET
        </button>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="rounded-md ce-glass overflow-hidden"
            style={{ aspectRatio: "9/16" }}
          >
            <div className="h-full p-2 flex flex-col gap-1.5" style={{ background: "rgba(10,8,16,0.6)" }}>
              <div className="h-3 rounded" style={{ background: `linear-gradient(90deg, ${ROSE}, ${PLUM})`, opacity: 0.5 }} />
              <div className="h-2 rounded w-2/3" style={{ background: "rgba(240,232,255,0.12)" }} />
              <div className="h-2 rounded w-1/2" style={{ background: "rgba(240,232,255,0.08)" }} />
              <div className="flex-1 rounded mt-1" style={{ background: "rgba(194,24,91,0.08)" }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 text-center">
        <div>
          <div className="text-white font-bold" style={{ fontFamily: "Clash Display", fontSize: 16 }}>1.2M+</div>
          <div className="text-[9px] tracking-[0.15em]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>DOWNLOADS</div>
        </div>
        <div>
          <div className="text-white font-bold" style={{ fontFamily: "Clash Display", fontSize: 16 }}>4.9★</div>
          <div className="text-[9px] tracking-[0.15em]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>RATING</div>
        </div>
        <div>
          <div className="text-white font-bold" style={{ fontFamily: "Clash Display", fontSize: 16 }}>#2</div>
          <div className="text-[9px] tracking-[0.15em]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>CATEGORY</div>
        </div>
      </div>
    </motion.div>
  );
}

/* ============ SAAS HERO: dashboard mockup ============ */
export function SaaSDashboard() {
  return (
    <HeroFrame>
      <div
        style={{ perspective: 1200 }}
        className="w-full"
      >
        <motion.div
          whileHover={{ rotateX: 2 }}
          style={{ transform: "rotateX(6deg)", transformStyle: "preserve-3d" }}
          className="relative ce-glass overflow-hidden"
        >
          <Scanline />
          <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: "1px solid rgba(139,26,74,0.25)", background: "rgba(15,11,22,0.8)" }}>
            <div className="w-5 h-5 rounded" style={{ background: `linear-gradient(135deg, ${ROSE}, ${PLUM})` }} />
            <div className="flex gap-3 text-[10px]" style={{ color: MUTED, fontFamily: "Space Grotesk" }}>
              <span style={{ color: "#fff" }}>Dashboard</span>
              <span>Users</span>
              <span>Billing</span>
            </div>
            <div className="ml-auto w-6 h-6 rounded-full" style={{ background: "rgba(194,24,91,0.3)" }} />
          </div>
          <div className="grid grid-cols-[140px_1fr]" style={{ background: "rgba(10,8,16,0.6)" }}>
            <div className="p-3 space-y-2" style={{ borderRight: "1px solid rgba(139,26,74,0.2)" }}>
              {["#c2185b", "#22d3ee", "#22c55e", "#a78bfa"].map((c, i) => (
                <div key={i} className="flex items-center gap-2 text-[10px]" style={{ color: i === 0 ? "#fff" : MUTED }}>
                  <span className="w-2 h-2 rounded-full" style={{ background: c }} />
                  {["Overview", "Customers", "Revenue", "Settings"][i]}
                </div>
              ))}
            </div>
            <div className="p-4 space-y-3">
              <div className="grid grid-cols-3 gap-2">
                {[
                  { v: "$42k", l: "MRR", c: ROSE },
                  { v: "8.2k", l: "USERS", c: "#22d3ee" },
                  { v: "98%", l: "RETENTION", c: "#22c55e" },
                ].map((s, i) => (
                  <div key={i} className="ce-glass rounded-md p-2.5">
                    <div className="text-white font-bold" style={{ fontFamily: "Clash Display", fontSize: 18 }}>{s.v}</div>
                    <div className="text-[8px] tracking-[0.2em]" style={{ color: s.c, fontFamily: "Space Grotesk" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="ce-glass rounded-md p-2 h-20">
                <svg viewBox="0 0 200 60" className="w-full h-full">
                  <defs>
                    <linearGradient id="ch1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor={ROSE} stopOpacity="0.4" />
                      <stop offset="100%" stopColor={ROSE} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    fill="none" stroke={ROSE} strokeWidth="1.5"
                    points="0,45 25,30 50,38 75,18 100,28 125,12 150,20 175,8 200,15"
                  />
                  <polygon
                    fill="url(#ch1)"
                    points="0,45 25,30 50,38 75,18 100,28 125,12 150,20 175,8 200,15 200,60 0,60"
                  />
                </svg>
              </div>
              <div className="ce-glass rounded-md overflow-hidden">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-2.5 py-1.5"
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}
                  >
                    <div className="w-3 h-3 rounded-full" style={{ background: `linear-gradient(135deg, ${ROSE}, ${PLUM})` }} />
                    <div className="flex-1 h-1.5 rounded" style={{ background: "rgba(240,232,255,0.1)" }} />
                    <div className="text-[9px]" style={{ color: LABEL, fontFamily: "JetBrains Mono" }}>${(i + 1) * 240}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </HeroFrame>
  );
}

/* ============ SAAS WHY: architecture diagram ============ */
export function ArchitectureDiagram() {
  const nodes = [
    { label: "CLIENT", x: 10 },
    { label: "CDN", x: 30 },
    { label: "LB", x: 50 },
    { label: "APP", x: 70 },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="ce-glass p-7"
      style={{ boxShadow: "0 30px 80px -20px rgba(194,24,91,0.3)" }}
    >
      <div className="text-[11px] tracking-[0.3em] uppercase mb-6" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>
        System Architecture
      </div>
      <svg viewBox="0 0 100 80" className="w-full" style={{ height: 280 }}>
        <defs>
          <linearGradient id="flow" x1="0%" x2="100%">
            <stop offset="0%" stopColor={ROSE} />
            <stop offset="100%" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        {/* connector top row */}
        <line x1="14" y1="20" x2="76" y2="20" stroke={ROSE} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6" />
        {/* connector branches */}
        <line x1="73" y1="22" x2="88" y2="45" stroke={ROSE} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6" />
        <line x1="73" y1="22" x2="88" y2="60" stroke={ROSE} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6" />
        <line x1="73" y1="22" x2="88" y2="75" stroke={ROSE} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.6" />

        <circle r="1" fill="#ff4d8a">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 14 20 L 76 20" />
        </circle>
        <circle r="1" fill="#22d3ee">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 73 22 L 88 45" />
        </circle>

        {nodes.map((n, i) => (
          <g key={i}>
            <rect x={n.x - 4} y={16} width={12} height={8} rx={2} fill="rgba(194,24,91,0.15)" stroke={ROSE} strokeWidth="0.3" />
            <text x={n.x + 2} y={21.5} textAnchor="middle" fontSize="2.6" fill="#fff" fontFamily="Space Grotesk">
              {n.label}
            </text>
          </g>
        ))}

        {[{ y: 45, l: "DATABASE" }, { y: 60, l: "REDIS" }, { y: 75, l: "STORAGE" }].map((s, i) => (
          <g key={i}>
            <rect x={84} y={s.y - 4} width={14} height={8} rx={2} fill="rgba(34,211,238,0.12)" stroke="#22d3ee" strokeWidth="0.3" />
            <text x={91} y={s.y + 1.5} textAnchor="middle" fontSize="2.4" fill="#fff" fontFamily="Space Grotesk">
              {s.l}
            </text>
          </g>
        ))}
      </svg>
      <div className="mt-4 flex items-center gap-2 text-[10px]" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
        <span className="w-2 h-2 rounded-full ce-blink" style={{ background: "#22c55e" }} />
        ALL SYSTEMS OPERATIONAL · 99.97% UPTIME
      </div>
    </motion.div>
  );
}

/* ============ CUSTOM SOFTWARE HERO: code editor ============ */
export function CodeEditor() {
  const lines = [
    { n: 1, parts: [{ t: "import", c: ROSE }, { t: " { Engine } ", c: "#fff" }, { t: "from", c: ROSE }, { t: " 'core'", c: "#22c55e" }] },
    { n: 2, parts: [] },
    { n: 3, parts: [{ t: "// custom build for your business", c: MUTED }] },
    { n: 4, parts: [{ t: "export class", c: ROSE }, { t: " ", c: "#fff" }, { t: "Product", c: "#22d3ee" }, { t: " {", c: "#fff" }] },
    { n: 5, parts: [{ t: "  constructor", c: "#22d3ee" }, { t: "(name: ", c: "#fff" }, { t: "string", c: ROSE }, { t: ") {", c: "#fff" }] },
    { n: 6, parts: [{ t: "    this.engine = ", c: "#fff" }, { t: "new", c: ROSE }, { t: " Engine(name)", c: "#fff" }] },
    { n: 7, parts: [{ t: "  }", c: "#fff" }] },
    { n: 8, parts: [{ t: "  ", c: "#fff" }, { t: "async", c: ROSE }, { t: " ", c: "#fff" }, { t: "ship", c: "#22d3ee" }, { t: "() {", c: "#fff" }] },
    { n: 9, parts: [{ t: "    ", c: "#fff" }, { t: "return", c: ROSE }, { t: " ", c: "#fff" }, { t: "await", c: ROSE }, { t: " this.engine.deploy()", c: "#fff" }] },
    { n: 10, parts: [{ t: "  }", c: "#fff" }] },
    { n: 11, parts: [{ t: "}", c: "#fff" }] },
  ];
  return (
    <HeroFrame>
      <div style={{ perspective: 1000 }}>
        <motion.div
          whileHover={{ rotateY: -12 }}
          style={{ transform: "rotateY(-8deg)", transformStyle: "preserve-3d" }}
          className="relative ce-glass overflow-hidden"
        >
          <Scanline />
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(139,26,74,0.25)", background: "rgba(15,11,22,0.85)" }}>
            <span className="w-2 h-2 rounded-full" style={{ background: "#ff5f56" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#ffbd2e" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#27c93f" }} />
            <div className="ml-3 flex gap-1.5 text-[10px]" style={{ fontFamily: "JetBrains Mono" }}>
              <span className="px-2 py-0.5 rounded" style={{ background: "rgba(194,24,91,0.18)", color: "#fff" }}>product.ts</span>
              <span className="px-2 py-0.5 rounded" style={{ color: MUTED }}>engine.ts</span>
              <span className="px-2 py-0.5 rounded" style={{ color: MUTED }}>index.ts</span>
            </div>
          </div>
          <div className="flex" style={{ background: "rgba(10,8,16,0.85)", minHeight: 360 }}>
            <div className="px-3 py-3 text-right select-none" style={{ borderRight: "1px solid rgba(139,26,74,0.15)" }}>
              {lines.map((l) => (
                <div key={l.n} className="text-[11px] leading-[1.7]" style={{ color: "rgba(194,24,91,0.55)", fontFamily: "JetBrains Mono" }}>
                  {l.n}
                </div>
              ))}
            </div>
            <div className="px-4 py-3 flex-1">
              {lines.map((l, i) => (
                <div key={i} className="text-[11px] leading-[1.7] whitespace-pre" style={{ fontFamily: "JetBrains Mono" }}>
                  {l.parts.length === 0 ? "\u00a0" : l.parts.map((p, j) => (
                    <span key={j} style={{ color: p.c }}>{p.t}</span>
                  ))}
                </div>
              ))}
              <span
                className="inline-block w-1.5 h-3 ml-1 align-middle"
                style={{ background: ROSE, animation: "ce-blink 1s infinite" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </HeroFrame>
  );
}

/* ============ CUSTOM SOFTWARE WHY: comparison table ============ */
export function ComparisonTable() {
  const rows = [
    "Ownership", "Customisation", "Ongoing Cost", "Data Control", "Scalability", "Vendor Lock-in",
  ];
  const ce = ["Full", "Unlimited", "One-time", "100% Yours", "Built for it", "Zero"];
  const off = ["Rented", "Limited", "Monthly forever", "Their servers", "Hits ceiling", "Total"];
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="ce-glass overflow-hidden"
      style={{ boxShadow: "0 30px 80px -20px rgba(194,24,91,0.3)" }}
    >
      <div className="grid grid-cols-[1fr_1.1fr_1fr]">
        <div className="px-5 py-4 text-[10px] tracking-[0.25em] uppercase" style={{ color: LABEL, fontFamily: "Space Grotesk", borderBottom: "1px solid rgba(139,26,74,0.2)" }}>
          Aspect
        </div>
        <div
          className="px-5 py-4 text-[11px] tracking-[0.25em] uppercase text-center text-white"
          style={{
            fontFamily: "Space Grotesk",
            background: `linear-gradient(135deg, rgba(194,24,91,0.25), rgba(61,16,96,0.15))`,
            borderBottom: `2px solid ${ROSE}`,
          }}
        >
          CoreEgin
        </div>
        <div className="px-5 py-4 text-[10px] tracking-[0.25em] uppercase text-center" style={{ color: MUTED, fontFamily: "Space Grotesk", borderBottom: "1px solid rgba(139,26,74,0.2)" }}>
          Off-The-Shelf
        </div>

        {rows.map((r, i) => (
          <div key={r} className="contents">
            <div className="px-5 py-3 text-[13px]" style={{ color: "#fff", fontFamily: "Inter", borderBottom: i < rows.length - 1 ? "1px solid rgba(139,26,74,0.12)" : "none" }}>
              {r}
            </div>
            <div className="px-5 py-3 flex items-center justify-center gap-2 text-[12px]" style={{ background: "rgba(194,24,91,0.05)", color: "#fff", fontFamily: "Inter", borderBottom: i < rows.length - 1 ? "1px solid rgba(139,26,74,0.12)" : "none" }}>
              <Check size={14} style={{ color: "#22c55e" }} /> {ce[i]}
            </div>
            <div className="px-5 py-3 flex items-center justify-center gap-2 text-[12px]" style={{ color: MUTED, fontFamily: "Inter", borderBottom: i < rows.length - 1 ? "1px solid rgba(139,26,74,0.12)" : "none" }}>
              <X size={14} style={{ color: "#ef4444" }} /> {off[i]}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* ============ AI AUTOMATION HERO: pipeline ============ */
export function AIPipeline() {
  const messages = [
    "Analyzing document...",
    "Extracting structured data...",
    "Processing with GPT-4...",
    "Output ready. ✓",
  ];
  const [idx, setIdx] = useState(0);
  const [typed, setTyped] = useState("");
  useEffect(() => {
    let i = 0;
    const target = messages[idx];
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        clearInterval(t);
        setTimeout(() => setIdx((p) => (p + 1) % messages.length), 900);
      }
    }, 35);
    return () => clearInterval(t);
  }, [idx]);

  const nodes = [
    { l: "INPUT", x: 8 },
    { l: "AI MODEL", x: 35 },
    { l: "PROCESS", x: 62 },
    { l: "OUTPUT", x: 89 },
  ];

  return (
    <HeroFrame glow="rgba(34,211,238,0.25)">
      <div className="ce-glass p-6 space-y-5" style={{ minWidth: 480 }}>
        <svg viewBox="0 0 100 22" className="w-full" style={{ height: 90 }}>
          {nodes.slice(0, -1).map((n, i) => (
            <line key={i} x1={n.x + 8} y1={11} x2={nodes[i + 1].x - 8} y2={11} stroke={ROSE} strokeWidth="0.4" strokeDasharray="2 2" opacity="0.7" />
          ))}
          <circle r="1.2" fill="#ff4d8a">
            <animateMotion dur="4s" repeatCount="indefinite" path={`M ${nodes[0].x + 8} 11 L ${nodes[3].x - 8} 11`} />
          </circle>
          {nodes.map((n, i) => (
            <g key={i}>
              <rect x={n.x - 8} y={5} width={16} height={12} rx={6} fill="rgba(194,24,91,0.15)" stroke={ROSE} strokeWidth="0.4" />
              <text x={n.x} y={12} textAnchor="middle" fontSize="2.4" fill="#fff" fontFamily="Space Grotesk">{n.l}</text>
            </g>
          ))}
        </svg>

        <div className="ce-glass rounded-md p-4" style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(34,197,94,0.3)", minHeight: 140 }}>
          <div className="flex items-center gap-2 mb-3 text-[10px]" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
            <span className="w-2 h-2 rounded-full ce-blink" style={{ background: "#22c55e" }} />
            ai-engine ~ live output
          </div>
          {messages.slice(0, idx).map((m, i) => (
            <div key={i} className="text-[12px] leading-relaxed" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
              {"$ "}{m}
            </div>
          ))}
          <div className="text-[12px] leading-relaxed" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
            {"$ "}{typed}
            <span className="inline-block w-1.5 h-3 ml-0.5 align-middle" style={{ background: "#22c55e", animation: "ce-blink 1s infinite" }} />
          </div>
        </div>
      </div>
    </HeroFrame>
  );
}

/* ============ AI AUTOMATION WHY: before/after ============ */
export function BeforeAfter() {
  const scenarios = [
    { title: "Content Creation", before: "8 hours / piece", after: "12 minutes / piece" },
    { title: "Customer Support", before: "12hr response time", after: "Instant, 24/7" },
    { title: "Data Analysis", before: "Manual spreadsheets", after: "Auto-reports daily" },
    { title: "Lead Processing", before: "200 leads / week", after: "5,000 leads / week" },
  ];
  return (
    <div className="space-y-3">
      {scenarios.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="ce-glass p-4 grid grid-cols-[1fr_auto_1fr] gap-3 items-center"
        >
          <div>
            <span className="text-[9px] tracking-[0.2em] px-2 py-0.5 rounded" style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444", fontFamily: "Space Grotesk" }}>BEFORE</span>
            <div className="mt-1.5 text-[13px]" style={{ color: MUTED, fontFamily: "Inter" }}>{s.before}</div>
          </div>
          <div style={{ color: ROSE, fontFamily: "Clash Display", fontSize: 18 }}>→</div>
          <div>
            <span className="text-[9px] tracking-[0.2em] px-2 py-0.5 rounded" style={{ background: "rgba(34,197,94,0.15)", color: "#22c55e", fontFamily: "Space Grotesk" }}>AFTER</span>
            <div className="mt-1.5 text-[13px] text-white" style={{ fontFamily: "Inter" }}>{s.after}</div>
          </div>
          <div className="col-span-3 text-[10px] tracking-[0.2em] uppercase" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>{s.title}</div>
        </motion.div>
      ))}
    </div>
  );
}

/* ============ AI AGENTS HERO: activity monitor ============ */
export function AgentMonitor() {
  const logs = [
    "→ Receiving goal: Qualify 50 leads",
    "→ Searching LinkedIn profiles...",
    "→ Analyzing company data...",
    "→ Scoring lead: 87/100 HIGH PRIORITY",
    "→ Updating CRM automatically...",
    "→ Sending outreach email...",
    "→ Task complete. Next loading...",
  ];
  const [visible, setVisible] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const tick = () => {
      setVisible((prev) => {
        const next = [...prev, logs[i % logs.length]];
        return next.length > 7 ? next.slice(-7) : next;
      });
      i++;
    };
    tick();
    const t = setInterval(tick, 1100);
    return () => clearInterval(t);
  }, []);

  return (
    <HeroFrame glow="rgba(34,211,238,0.3)">
      <div className="ce-glass overflow-hidden" style={{ minWidth: 480 }}>
        <Scanline />
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid rgba(139,26,74,0.25)", background: "rgba(15,11,22,0.85)" }}>
          <div className="flex items-center gap-2 text-[11px]" style={{ color: "#22c55e", fontFamily: "JetBrains Mono" }}>
            <span className="w-2 h-2 rounded-full ce-blink" style={{ background: "#22c55e" }} />
            AGENT STATUS: RUNNING
          </div>
          <div className="text-[10px]" style={{ color: LABEL, fontFamily: "JetBrains Mono" }}>TASK 247 / 500</div>
        </div>
        <div className="p-4 space-y-1.5" style={{ background: "rgba(0,0,0,0.4)", minHeight: 240 }}>
          {visible.map((l, i) => (
            <motion.div
              key={`${i}-${l}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-[11px] leading-relaxed"
              style={{ color: "#22d3ee", fontFamily: "JetBrains Mono" }}
            >
              {l}
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 p-3" style={{ borderTop: "1px solid rgba(139,26,74,0.2)", background: "rgba(15,11,22,0.6)" }}>
          <Mini value="247" label="TASKS TODAY" color={ROSE} />
          <Mini value="98.7%" label="SUCCESS" color="#22c55e" />
          <Mini value="14.2h" label="SAVED" color="#f59e0b" />
        </div>
      </div>
    </HeroFrame>
  );
}

function Mini({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="text-center">
      <div className="font-bold" style={{ color, fontFamily: "Clash Display", fontSize: 18 }}>{value}</div>
      <div className="text-[9px] tracking-[0.15em]" style={{ color: LABEL, fontFamily: "Space Grotesk" }}>{label}</div>
    </div>
  );
}

/* ============ AGENTS WHY: chatbot vs agent ============ */
export function ChatbotVsAgent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 gap-4"
    >
      <div className="ce-glass p-5" style={{ borderColor: "rgba(155,143,168,0.3)" }}>
        <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: MUTED, fontFamily: "Space Grotesk" }}>Chatbot</div>
        <div className="space-y-3">
          {["User asks", "AI responds", "Done"].map((s, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px]" style={{ background: "rgba(155,143,168,0.15)", color: MUTED, fontFamily: "JetBrains Mono" }}>{i + 1}</span>
              <span className="text-[13px]" style={{ color: MUTED, fontFamily: "Inter" }}>{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 text-[11px]" style={{ color: MUTED, fontFamily: "Inter" }}>Reactive. Limited.</div>
      </div>

      <div
        className="ce-glass p-5"
        style={{ borderColor: ROSE, boxShadow: "0 0 40px rgba(194,24,91,0.3), inset 0 0 30px rgba(194,24,91,0.08)" }}
      >
        <div className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: ROSE, fontFamily: "Space Grotesk" }}>AI Agent</div>
        <div className="space-y-2">
          {["Goal set", "Plans steps", "Uses tools", "Executes", "Checks result", "Reports back", "Loops if needed"].map((s, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white"
                style={{ background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`, fontFamily: "JetBrains Mono" }}
              >
                {i + 1}
              </span>
              <span className="text-[12px] text-white" style={{ fontFamily: "Inter" }}>{s}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 pt-4 text-[12px]" style={{ color: ROSE, fontFamily: "General Sans", fontWeight: 600, borderTop: "1px solid rgba(194,24,91,0.25)" }}>
          Handles complexity. Adapts. Improves.
        </div>
      </div>
    </motion.div>
  );
}

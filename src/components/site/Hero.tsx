import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, Layers, Code2, Zap, Bot, Mail, X, Check } from "lucide-react";
import galaxy from "@/assets/ce-galaxy.png";
import { FallingHeadline } from "./FallingHeadline";

const OWNER_EMAIL = "contact@coreegin.com";

const ROTATE = ["Websites", "Mobile Apps", "SaaS Platforms", "Custom Software", "AI & Automation", "AI Agents"];

const drop = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
});

const MINI_SERVICES = [
  { icon: Globe, name: "WEB" },
  { icon: Smartphone, name: "APP" },
  { icon: Layers, name: "SAAS" },
  { icon: Code2, name: "CUSTOM" },
  { icon: Zap, name: "AI" },
  { icon: Bot, name: "AGENT" },
];

const TERMINAL_LINES = [
  "> initializing_CoreEgin.exe",
  "> founder_01: saad_parkar — ONLINE",
  "> founder_02: yash_nandi — ONLINE",
  "> loading_modules: 6 services",
  "> client_pipeline: ACTIVE",
  "> status: ALL SYSTEMS GO",
];

export function Hero() {
  const [rot, setRot] = useState(0);
  const [termTick, setTermTick] = useState(0);
  const [activeMini, setActiveMini] = useState(0);
  const [now, setNow] = useState<Date | null>(null);
  const [bars, setBars] = useState<number[]>([60, 45, 80, 35, 70, 55, 90, 40]);
  const [contactOpen, setContactOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const [picked, setPicked] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const i = setInterval(() => setRot((p) => (p + 1) % ROTATE.length), 3500);
    return () => clearInterval(i);
  }, []);
  useEffect(() => {
    const i = setInterval(() => setTermTick((t) => t + 1), 12000);
    return () => clearInterval(i);
  }, []);
  useEffect(() => {
    const i = setInterval(() => setActiveMini((p) => (p + 1) % 6), 1200);
    return () => clearInterval(i);
  }, []);
  useEffect(() => {
    setNow(new Date());
    const i = setInterval(() => setNow(new Date()), 2000);
    return () => clearInterval(i);
  }, []);
  useEffect(() => {
    const i = setInterval(() => setBars((prev) => prev.map(() => 25 + Math.random() * 75)), 1500);
    return () => clearInterval(i);
  }, []);

  const istTime = now ? now.toLocaleTimeString("en-IN", { hour12: false, timeZone: "Asia/Kolkata" }) : "--:--:--";

  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden" style={{ background: "#0a0810" }}>
      {/* Bg layers */}
      <img src={galaxy} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover ce-bg-zoom" style={{ opacity: 0.08 }} />
      <div className="absolute inset-0 ce-pulse-glow" style={{ background: "radial-gradient(ellipse 600px 400px at 20% 60%, rgba(139,26,74,0.16), transparent 70%)" }} />
      <div className="absolute inset-0 ce-pulse-glow" style={{ background: "radial-gradient(ellipse 500px 400px at 80% 40%, rgba(61,16,96,0.14), transparent 70%)", animationDelay: "2s" }} />
      <div className="absolute inset-0 ce-grid" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 70%, #0a0810 100%)" }} />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 grid md:grid-cols-[55fr_45fr] gap-12 items-center">
        {/* LEFT */}
        <div>
          <motion.div {...drop(0)} className="text-[11px] tracking-[0.4em] mb-6" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>
            // FULL-SPECTRUM DIGITAL ENGINEERING
          </motion.div>
          <FallingHeadline />

          <motion.div {...drop(3)} className="mt-8 text-lg flex items-baseline flex-wrap gap-1" style={{ fontFamily: "Inter, sans-serif", color: "#9b8fa8" }}>
            We engineer —{" "}
            <span style={{ color: "#c2185b", minWidth: 200 }} className="inline-block">
              <motion.span key={rot} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                {ROTATE[rot]}
              </motion.span>
            </span>
          </motion.div>

          <motion.p {...drop(4)} className="mt-4 text-base max-w-lg" style={{ fontFamily: "Inter", fontWeight: 300, color: "#9b8fa8" }}>
            From pixel to protocol, from idea to intelligent system.
          </motion.p>

          <motion.div {...drop(5)} className="mt-8 flex flex-wrap gap-3">
            {["50+ PROJECTS", "12+ INDUSTRIES", "4yr EXPERIENCE"].map((p) => (
              <span key={p} className="ce-pill px-4 py-2 text-[11px] tracking-widest text-white/90" style={{ fontFamily: "Space Grotesk" }}>
                {p}
              </span>
            ))}
          </motion.div>

          <motion.div {...drop(6)} className="mt-10 flex flex-wrap gap-4">
            <Link to="/start-project" className="px-7 py-4 text-white uppercase text-[13px] tracking-widest hover:scale-[1.02] transition-transform"
              style={{ background: "linear-gradient(135deg, #8b1a4a, #c2185b)", borderRadius: 999, fontFamily: "Clash Display", boxShadow: "0 0 40px rgba(194,24,91,0.3)" }}>
              Start Your Project →
            </Link>
            <a href="#services" className="ce-pill px-7 py-4 text-white uppercase text-[13px] tracking-widest hover:border-[rgba(194,24,91,0.6)] transition-colors"
              style={{ fontFamily: "Clash Display" }}>
              Explore Services
            </a>
          </motion.div>
        </div>

        {/* RIGHT — Mission Control */}
        <motion.div {...drop(2)} className="relative ce-float">
          <div className="ce-glass p-6 max-w-[520px] mx-auto relative overflow-hidden">
            {/* scanline */}
            <div className="pointer-events-none absolute left-0 right-0 h-px animate-scanline" style={{ background: "rgba(194,24,91,0.25)", boxShadow: "0 0 12px rgba(194,24,91,0.4)" }} />

            <div className="flex items-center justify-between text-[10px]" style={{ fontFamily: "JetBrains Mono", color: "#c084a8" }}>
              <span>// MISSION CONTROL</span>
              <span className="flex items-center gap-3">
                <span style={{ color: "#c2185b" }}>IST {istTime}</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full ce-blink" style={{ background: "#22c55e" }} />
                  ACTIVE
                </span>
              </span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {/* Radar */}
              <div className="flex flex-col items-center">
                <div className="relative w-40 h-40">
                  {/* orbiting satellites */}
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 6 + i * 3, repeat: Infinity, ease: "linear" }}
                    >
                      <span className="absolute w-1.5 h-1.5 rounded-full" style={{
                        background: "#c2185b",
                        boxShadow: "0 0 8px #c2185b",
                        top: `${10 + i * 12}%`,
                        left: "50%",
                      }} />
                    </motion.div>
                  ))}
                  <svg viewBox="0 0 160 160" className="w-full h-full">
                    {[20, 40, 60, 75].map((r) => (
                      <circle key={r} cx="80" cy="80" r={r} fill="none" stroke="rgba(139,26,74,0.35)" strokeWidth="1" />
                    ))}
                    <line x1="80" y1="80" x2="80" y2="5" stroke="rgba(139,26,74,0.25)" />
                    <line x1="80" y1="80" x2="155" y2="80" stroke="rgba(139,26,74,0.25)" />
                    {[[100, 60], [55, 105], [110, 110], [60, 50]].map(([x, y], i) => (
                      <circle key={i} cx={x} cy={y} r="2" fill="#c2185b" className="ce-blink" style={{ animationDelay: `${i * 0.5}s` }} />
                    ))}
                  </svg>
                  <div className="absolute inset-0 ce-radar-sweep">
                    <svg viewBox="0 0 160 160" className="w-full h-full">
                      <defs>
                        <linearGradient id="sweep" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#c2185b" stopOpacity="0" />
                          <stop offset="100%" stopColor="#c2185b" stopOpacity="0.9" />
                        </linearGradient>
                      </defs>
                      <line x1="80" y1="80" x2="155" y2="80" stroke="url(#sweep)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
                <div className="mt-2 text-[9px] tracking-widest" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>ACTIVE CLIENTS</div>
              </div>

              {/* EKG */}
              <div className="flex flex-col items-center justify-center">
                <svg viewBox="0 0 160 100" className="w-full h-32">
                  <motion.path
                    d="M0 50 L30 50 L36 50 L40 20 L46 80 L52 50 L80 50 L86 50 L90 30 L96 70 L102 50 L160 50"
                    fill="none"
                    stroke="#c2185b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 0 4px #c2185b)" }}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: [0, 1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
                <div className="text-[9px] tracking-widest" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>PROJECT VELOCITY</div>
                <button
                  type="button"
                  onClick={() => { setContactOpen(true); setSent(false); }}
                  className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[9px] tracking-[0.2em] uppercase transition-all hover:scale-105"
                  style={{
                    fontFamily: "JetBrains Mono",
                    color: "#fff",
                    background: "linear-gradient(135deg, rgba(139,26,74,0.6), rgba(194,24,91,0.6))",
                    border: "1px solid rgba(194,24,91,0.7)",
                    boxShadow: "0 0 14px rgba(194,24,91,0.45)",
                  }}
                >
                  <Mail size={10} /> contact
                </button>
              </div>
            </div>

            {/* Terminal / Contact form */}
            <div className="mt-4 rounded-lg p-3 text-[11px] relative" style={{ background: "rgba(0,0,0,0.4)", fontFamily: "JetBrains Mono", color: "#c2185b", minHeight: 220 }}>
              <AnimatePresence mode="wait">
                {!contactOpen ? (
                  <motion.div key={`term-${termTick}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    {TERMINAL_LINES.map((line, i) => (
                      <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.2 }} className="text-white/80">
                        {line}
                      </motion.div>
                    ))}
                    <span className="ce-blink" style={{ color: "#c2185b" }}>▊</span>
                  </motion.div>
                ) : sent ? (
                  <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-white/90 space-y-1">
                    <div style={{ color: "#22c55e" }}>$ npm run send --to={OWNER_EMAIL}</div>
                    <div className="text-white/70">› compiling_message...</div>
                    <div className="text-white/70">› opening_mail_client...</div>
                    <div className="flex items-center gap-2 mt-2" style={{ color: "#22c55e" }}>
                      <Check size={12} /> dispatched · awaiting send
                    </div>
                    <button onClick={() => { setContactOpen(false); setForm({ name: "", email: "" }); setPicked([]); }}
                      className="mt-3 text-[10px] underline" style={{ color: "#c084a8" }}>
                      › close
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    onSubmit={(e) => {
                      e.preventDefault();
                      const name = form.name.trim().slice(0, 100);
                      const email = form.email.trim().slice(0, 255);
                      if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
                      const services = picked.length ? picked.join(", ") : "Not specified";
                      const subject = encodeURIComponent(`New inquiry from ${name}`);
                      const body = encodeURIComponent(
                        `Name: ${name}\nEmail: ${email}\nServices: ${services}\n\n— Sent from CoreEgin Mission Control`
                      );
                      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
                      setSent(true);
                    }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between text-[10px]" style={{ color: "#c2185b" }}>
                      <span>$ npm run contact --init</span>
                      <button type="button" onClick={() => setContactOpen(false)} className="text-white/60 hover:text-white">
                        <X size={12} />
                      </button>
                    </div>
                    <div className="flex items-center gap-1">
                      <span style={{ color: "#c2185b" }}>›</span>
                      <input
                        type="text" required maxLength={100} placeholder="enter --name"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="flex-1 bg-transparent outline-none text-white placeholder-white/30 text-[11px]"
                        style={{ fontFamily: "JetBrains Mono" }}
                      />
                    </div>
                    <div className="flex items-center gap-1">
                      <span style={{ color: "#c2185b" }}>›</span>
                      <input
                        type="email" required maxLength={255} placeholder="enter --email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className="flex-1 bg-transparent outline-none text-white placeholder-white/30 text-[11px]"
                        style={{ fontFamily: "JetBrains Mono" }}
                      />
                    </div>
                    <div className="text-[9px] text-white/50 pt-1">› select --services</div>
                    <div className="grid grid-cols-3 gap-1">
                      {MINI_SERVICES.map((s) => {
                        const on = picked.includes(s.name);
                        return (
                          <button
                            type="button" key={s.name}
                            onClick={() => setPicked((p) => on ? p.filter((x) => x !== s.name) : [...p, s.name])}
                            className="py-1 rounded text-[9px] tracking-widest transition-all"
                            style={{
                              fontFamily: "Space Grotesk",
                              color: on ? "#fff" : "#c084a8",
                              background: on ? "linear-gradient(135deg,#8b1a4a,#c2185b)" : "rgba(139,26,74,0.15)",
                              border: `1px solid ${on ? "rgba(194,24,91,0.8)" : "rgba(139,26,74,0.3)"}`,
                              boxShadow: on ? "0 0 10px rgba(194,24,91,0.4)" : "none",
                            }}
                          >
                            {s.name}
                          </button>
                        );
                      })}
                    </div>
                    <button
                      type="submit"
                      className="w-full mt-2 py-1.5 rounded text-[10px] tracking-[0.2em] uppercase text-white transition-all hover:scale-[1.02]"
                      style={{
                        fontFamily: "JetBrains Mono",
                        background: "linear-gradient(135deg,#8b1a4a,#c2185b)",
                        boxShadow: "0 0 16px rgba(194,24,91,0.45)",
                      }}
                    >
                      $ npm run submit
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Mini service grid */}
            <div className="mt-4 grid grid-cols-3 gap-2">
              {MINI_SERVICES.map((s, i) => {
                const Icon = s.icon;
                const active = activeMini === i;
                return (
                  <div key={s.name} className="ce-glass flex flex-col items-center justify-center py-3 transition-all"
                    style={{
                      borderColor: active ? "rgba(194,24,91,0.6)" : "rgba(139,26,74,0.2)",
                      boxShadow: active ? "0 0 24px rgba(194,24,91,0.3)" : "0 0 0 transparent",
                    }}>
                    <Icon size={16} style={{ color: active ? "#c2185b" : "#c084a8" }} />
                    <span className="mt-1 text-[9px] tracking-widest" style={{ fontFamily: "Space Grotesk", color: "#c084a8" }}>{s.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Live system load bars */}
            <div className="mt-4 rounded-lg p-3" style={{ background: "rgba(0,0,0,0.3)" }}>
              <div className="flex items-center justify-between text-[9px] mb-2" style={{ fontFamily: "JetBrains Mono", color: "#c084a8" }}>
                <span>SYSTEM LOAD</span>
                <span style={{ color: "#22c55e" }}>NOMINAL</span>
              </div>
              <div className="flex items-end gap-1 h-10">
                {bars.map((h, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ background: "linear-gradient(180deg,#ff4d8a,#c2185b,#8b1a4a)", boxShadow: "0 0 6px rgba(194,24,91,0.5)" }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-between text-[9px]" style={{ fontFamily: "JetBrains Mono", color: "#c084a8" }}>
              <span>◆ COREEGIN SYSTEMS</span>
              <span>RENDER · LIVE</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Menu, X, Globe, Smartphone, Layers, Code2, Zap, Bot } from "lucide-react";
import ceLogo from "@/assets/ce-logo.png";

const TICKER = [
  "DIGITAL ENGINEERING STUDIO",
  "MUMBAI, INDIA",
  "FROM PIXEL TO PROTOCOL",
  "FULL-SPECTRUM ENGINEERING",
  "SYSTEM ONLINE",
  "CORE EGIN INITIALIZED",
];

const SERVICES = [
  { icon: Globe, name: "Websites", slug: "websites", desc: "Marketing sites engineered for speed, story and conversion." },
  { icon: Smartphone, name: "Mobile Apps", slug: "mobile-apps", desc: "Native-feeling iOS & Android products people love to open." },
  { icon: Layers, name: "SaaS Platforms", slug: "saas-platforms", desc: "Multi-tenant systems built to scale from day one." },
  { icon: Code2, name: "Custom Software", slug: "custom-software", desc: "Bespoke internal tools that replace ten spreadsheets." },
  { icon: Zap, name: "AI & Automation", slug: "ai-automation", desc: "LLM pipelines and workflows that quietly do the work." },
  { icon: Bot, name: "AI Agents", slug: "ai-agents", desc: "Autonomous agents that reason, act, and integrate." },
];

const NAV = [
  { label: "WORK", href: "#numbers" },
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#founders" },
  { label: "PROCESS", href: "#process" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [hovered, setHovered] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Featured = SERVICES[hovered]?.icon ?? Globe;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Ticker */}
      <div className="h-7 overflow-hidden" style={{ background: "#0d0a14" }}>
        <div
          className="flex whitespace-nowrap h-full items-center ce-marquee"
          style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "#c084a8", letterSpacing: "0.3em" }}
        >
          {[...TICKER, ...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="px-6">
              {t} <span style={{ color: "#c2185b" }}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main bar */}
      <div
        className="h-16 transition-colors duration-300"
        style={{
          background: scrolled || mega ? "rgba(10,8,16,0.85)" : "transparent",
          backdropFilter: scrolled || mega ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || mega ? "blur(20px)" : "none",
          borderBottom: scrolled || mega ? "1px solid rgba(139,26,74,0.15)" : "1px solid transparent",
        }}
        onMouseLeave={() => setMega(false)}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={ceLogo} alt="CoreEgin" width={32} height={32} className="w-8 h-8 object-contain" />
            <span style={{ fontFamily: "Clash Display, sans-serif", fontSize: 18, fontWeight: 700 }}>
              <span className="text-white">CORE</span>
              <span style={{ color: "#c2185b" }}>EGIN</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onMouseEnter={() => n.label === "SERVICES" && setMega(true)}
                className="group relative text-[13px] text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.08em" }}
              >
                {n.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all"
                  style={{ background: "#c2185b" }}
                />
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              to="/start-project"
              className="group relative inline-flex items-center px-5 py-2.5 text-[12px] uppercase tracking-widest text-white border overflow-hidden"
              style={{
                fontFamily: "Clash Display, sans-serif",
                borderColor: "rgba(194,24,91,0.6)",
                borderRadius: 999,
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "linear-gradient(135deg, #8b1a4a, #c2185b)" }}
              />
              <span className="relative">Start a Project →</span>
            </Link>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>

        {/* Services mega */}
        <AnimatePresence>
          {mega && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="absolute left-0 right-0 top-full"
              style={{
                background: "rgba(10,8,16,0.96)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(139,26,74,0.2)",
              }}
              onMouseEnter={() => setMega(true)}
            >
              <div className="max-w-[1400px] mx-auto px-10 py-10 grid grid-cols-3 gap-10">
                {/* Col 1 */}
                <div>
                  <div className="text-[10px] tracking-[0.3em] mb-4" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>
                    // SERVICES
                  </div>
                  <ul className="space-y-3">
                    {SERVICES.map((s, i) => {
                      const dot = (
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: i === hovered ? "#c2185b" : "#8b1a4a" }} />
                      );
                      const label = (
                        <span
                          className="text-base transition-colors"
                          style={{ color: i === hovered ? "#fff" : "#9b8fa8", fontFamily: "Clash Display" }}
                        >
                          {s.name}
                        </span>
                      );
                      const to = `/services/${s.slug}` as
                        | "/services/websites"
                        | "/services/mobile-apps"
                        | "/services/saas-platforms"
                        | "/services/custom-software"
                        | "/services/ai-automation"
                        | "/services/ai-agents";
                      return (
                        <li key={s.name} onMouseEnter={() => setHovered(i)}>
                          <Link
                            to={to}
                            onClick={() => setMega(false)}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            {dot}
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                {/* Col 2 */}
                <div className="ce-glass p-6">
                  <Featured size={28} style={{ color: "#c2185b" }} />
                  <div className="mt-4 text-xl text-white" style={{ fontFamily: "Clash Display" }}>{SERVICES[hovered].name}</div>
                  <p className="mt-2 text-sm" style={{ color: "#9b8fa8" }}>{SERVICES[hovered].desc}</p>
                </div>
                {/* Col 3 */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-[11px]" style={{ fontFamily: "JetBrains Mono", color: "#c084a8" }}>
                    <span className="w-2 h-2 rounded-full ce-blink" style={{ background: "#22c55e" }} />
                    SYSTEM ONLINE — ACCEPTING PROJECTS
                  </div>
                  <div className="ce-glass p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg,#8b1a4a,#c2185b)" }}>SP</div>
                    <div className="text-xs">
                      <div className="text-white">Saad Parkar</div>
                      <div style={{ color: "#c084a8" }}>Founder / Director</div>
                    </div>
                  </div>
                  <div className="ce-glass p-3 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg,#3d1060,#6b21a8)" }}>YN</div>
                    <div className="text-xs">
                      <div className="text-white">Yash Nandi</div>
                      <div style={{ color: "#c084a8" }}>Founder / Co-Director</div>
                    </div>
                  </div>
                  <Link
                    to="/start-project"
                    onClick={() => setMega(false)}
                    className="block text-center mt-2 py-3 text-[12px] uppercase tracking-widest text-white"
                    style={{ background: "linear-gradient(135deg,#8b1a4a,#c2185b)", borderRadius: 999, fontFamily: "Clash Display" }}
                  >
                    Start a Project →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] md:hidden"
            style={{ background: "rgba(10,8,16,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center justify-between p-6">
              <span style={{ fontFamily: "Clash Display", fontSize: 18 }}>
                <span className="text-white">CORE</span><span style={{ color: "#c2185b" }}>ENGINE</span>
              </span>
              <button onClick={() => setMobileOpen(false)} className="text-white"><X size={24} /></button>
            </div>
            <div className="flex flex-col items-center gap-6 mt-12">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setMobileOpen(false)} className="text-2xl text-white" style={{ fontFamily: "Clash Display" }}>
                  {n.label}
                </a>
              ))}
              <Link to="/start-project" onClick={() => setMobileOpen(false)} className="mt-6 px-8 py-3 text-white uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg,#8b1a4a,#c2185b)", borderRadius: 999 }}>Start a Project →</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

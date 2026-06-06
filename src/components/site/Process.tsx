import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check } from "lucide-react";

const STEPS = [
  { n: "01", title: "DISCOVER", week: "Week 1–2", desc: "We dig deep into your vision, users, market, and goals before writing a single line." },
  { n: "02", title: "ARCHITECT", week: "Week 2–3", desc: "System design, tech stack selection, wireframes, and full project blueprint." },
  { n: "03", title: "ENGINEER", week: "Week 3–8", desc: "Sprint-based full build with founder review checkpoints at every milestone." },
  { n: "04", title: "LAUNCH", week: "Week 8+", desc: "Deploy, optimize, monitor, support. We don't disappear after go-live." },
];

const STEP_DELAY = 650; // ms between activations

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [active, setActive] = useState(-1);
  const runIdRef = useRef(0);

  useEffect(() => {
    if (inView) {
      const myRun = ++runIdRef.current;
      setActive(-1);
      STEPS.forEach((_, i) => {
        setTimeout(() => {
          if (runIdRef.current === myRun) setActive(i);
        }, 300 + i * STEP_DELAY);
      });
    } else {
      runIdRef.current++;
      setActive(-1);
    }
  }, [inView]);

  return (
    <section id="process" ref={ref} className="relative max-w-[1400px] mx-auto py-[120px] px-6 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.3 }}
        className="text-center font-bold mb-20"
        style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.05 }}
      >
        How We Turn Ideas <span style={{ color: "#c2185b" }}>Into Engines</span>
      </motion.h2>

      <div className="relative">
        {/* progress connector */}
        <div className="hidden lg:block absolute top-12 left-[6%] right-[6%] h-[2px] rounded-full overflow-hidden" style={{ background: "rgba(139,26,74,0.18)" }}>
          <motion.div
            className="h-full"
            style={{ background: "linear-gradient(90deg,#8b1a4a,#c2185b,#ff4d8a)", boxShadow: "0 0 14px #c2185b" }}
            initial={{ width: "0%" }}
            animate={{ width: active >= 0 ? `${((active + 1) / STEPS.length) * 100}%` : "0%" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 relative">
          {STEPS.map((s, i) => {
            const isActive = i <= active;
            const justLit = i === active;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                animate={
                  isActive
                    ? { opacity: 1, y: 0, scale: justLit ? [0.92, 1.06, 1] : 1 }
                    : { opacity: 0.25, y: 20, scale: 0.96 }
                }
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="ce-glass p-7 relative overflow-hidden"
                style={{
                  borderColor: isActive ? "rgba(194,24,91,0.7)" : "rgba(139,26,74,0.2)",
                  boxShadow: isActive
                    ? "0 0 40px rgba(194,24,91,0.45), inset 0 0 28px rgba(194,24,91,0.12)"
                    : "0 0 0 transparent",
                  transition: "box-shadow 0.5s ease, border-color 0.5s ease",
                }}
              >
                {/* sweep on activation */}
                {justLit && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)" }}
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                )}

                <div className="absolute -top-2 -right-2 font-bold leading-none" style={{ fontFamily: "Clash Display", fontSize: 80, color: isActive ? "rgba(194,24,91,0.28)" : "rgba(139,26,74,0.12)", transition: "color 0.5s" }}>
                  {s.n}
                </div>

                {/* check badge */}
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center"
                  style={{
                    background: isActive ? "linear-gradient(135deg,#8b1a4a,#c2185b)" : "rgba(139,26,74,0.15)",
                    boxShadow: isActive ? "0 0 12px rgba(194,24,91,0.7)" : "none",
                    transition: "all 0.5s",
                  }}>
                  <motion.div initial={false} animate={{ scale: isActive ? 1 : 0 }} transition={{ duration: 0.3 }}>
                    <Check size={14} className="text-white" />
                  </motion.div>
                </div>

                <div className="text-[11px] tracking-[0.3em] mb-3" style={{ color: "#c2185b", fontFamily: "Space Grotesk" }}>
                  {s.n} — {s.title}
                </div>
                <span className="ce-pill inline-block px-3 py-1 text-[10px] tracking-widest mb-4" style={{ color: "#c084a8", fontFamily: "JetBrains Mono" }}>
                  {s.week}
                </span>
                <p className="text-sm" style={{ color: "#9b8fa8", fontFamily: "Inter" }}>{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

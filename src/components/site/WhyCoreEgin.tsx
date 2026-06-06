import { motion } from "framer-motion";
import ceLogo from "@/assets/ce-logo.png";

const POINTS = [
  "Zero outsourcing. Every line written in-house.",
  "Every project gets a founder's attention.",
  "We build for scale, not just launch.",
  "Mumbai's most obsessive engineering studio.",
  "Two founders. Zero middlemen. Pure accountability.",
];

export function WhyCoreEgin() {
  return (
    <section className="relative max-w-[1400px] mx-auto py-[120px] px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <div className="text-[11px] tracking-[0.4em] mb-4" style={{ color: "#c2185b", fontFamily: "Space Grotesk" }}>
          // WHY COREEGIN
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          className="font-bold" style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,4.5vw,64px)", lineHeight: 1.05 }}
        >
          Built Different. <span style={{ color: "#c2185b" }}>By Design.</span>
        </motion.h2>
        <div className="mt-8 space-y-3">
          {POINTS.map((p, i) => (
            <motion.div
              key={p}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }} transition={{ delay: i * 0.1 }}
              className="ce-glass ce-glass-hover px-5 py-4 text-sm md:text-base"
              style={{ fontFamily: "General Sans, Inter", color: "#f0e8ff" }}
            >
              <span style={{ color: "#c2185b" }}>→</span> {p}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 ce-pulse-glow" style={{ background: "radial-gradient(circle at center, rgba(194,24,91,0.25), transparent 60%)" }} />
        <div className="relative ce-glass w-[400px] h-[400px] max-w-full flex items-center justify-center" style={{ border: "1px solid rgba(194,24,91,0.4)" }}>
          <div className="absolute inset-3 rounded-2xl pointer-events-none" style={{ border: "1px solid rgba(61,16,96,0.5)" }} />
          {(["tl", "tr", "bl", "br"] as const).map((c) => (
            <div key={c} className={`absolute w-5 h-5 ${c.includes("t") ? "top-2" : "bottom-2"} ${c.includes("l") ? "left-2" : "right-2"}`}>
              <div className={`absolute ${c.includes("t") ? "top-0" : "bottom-0"} ${c.includes("l") ? "left-0" : "right-0"} w-5 h-px`} style={{ background: "#c2185b" }} />
              <div className={`absolute ${c.includes("t") ? "top-0" : "bottom-0"} ${c.includes("l") ? "left-0" : "right-0"} w-px h-5`} style={{ background: "#c2185b" }} />
            </div>
          ))}
          <img src={ceLogo} alt="CoreEgin logo" width={200} height={200} className="w-[200px] h-[200px] object-contain ce-float" />
        </div>
      </div>
    </section>
  );
}

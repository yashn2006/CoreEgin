import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, MapPin } from "lucide-react";

const EMAIL = "contact.coreegin.com";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section id="contact" className="relative max-w-[1400px] mx-auto py-[120px] px-6 md:px-10 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          className="font-bold"
          style={{ fontFamily: "Clash Display", fontSize: "clamp(32px,4vw,56px)", lineHeight: 1.05 }}
        >
          Let's Engineer <br /><span style={{ color: "#c2185b" }}>Your Vision.</span>
        </motion.h2>
        <p className="mt-6 text-base max-w-md" style={{ color: "#9b8fa8", fontFamily: "Inter", fontWeight: 300 }}>
          Tell us about your project. We'll come back within 24 hours with thoughts, questions, and a clear next step.
        </p>

        <button onClick={copy}
          className="ce-pill mt-8 inline-flex items-center gap-3 px-5 py-3 text-sm hover:border-[rgba(194,24,91,0.5)] transition-colors"
          style={{ color: "#f0e8ff", fontFamily: "JetBrains Mono" }}>
          <span style={{ color: "#c2185b" }}>✉</span>
          {EMAIL}
          {copied ? <Check size={14} style={{ color: "#22c55e" }} /> : <Copy size={14} style={{ color: "#c084a8" }} />}
        </button>

        <div className="mt-4 flex items-center gap-2 text-sm" style={{ color: "#c084a8", fontFamily: "Inter" }}>
          <MapPin size={14} /> Mumbai, India
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {["Reply within 24hrs", "Free First Call", "No Commitment"].map((t) => (
            <span key={t} className="ce-pill px-4 py-2 text-[11px] tracking-widest" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>
              ✓ {t.toUpperCase()}
            </span>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 ce-pulse-glow" style={{ background: "radial-gradient(circle at center, rgba(194,24,91,0.25), transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
          className="relative ce-glass p-10 text-center"
        >
          <div className="text-[11px] tracking-[0.4em] mb-6" style={{ color: "#c2185b", fontFamily: "Space Grotesk" }}>// LET'S BUILD</div>
          <a href={`mailto:${EMAIL}`}
            className="block w-full py-5 text-white uppercase tracking-[0.2em] text-sm md:text-base hover:scale-[1.02] transition-transform"
            style={{ background: "linear-gradient(135deg,#8b1a4a,#c2185b)", borderRadius: 999, fontFamily: "Clash Display", boxShadow: "0 0 60px rgba(194,24,91,0.4)" }}>
            Start a Project →
          </a>
          <p className="mt-6 text-sm" style={{ color: "#9b8fa8", fontFamily: "Inter" }}>
            or email us directly at <span style={{ color: "#c2185b" }}>{EMAIL}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  { q: "How long does a typical project take?", a: "Most projects ship in 6–12 weeks depending on scope. Small marketing sites can launch in 3–4 weeks. SaaS platforms and AI systems usually take 10–16 weeks. We give you a precise timeline after the discovery call." },
  { q: "Do you work with early-stage startups?", a: "Yes — we love working with founders pre-launch. We can scope an MVP that ships fast without painting you into a corner technically." },
  { q: "What does your pricing look like?", a: "We price per project, not per hour. Sites start in the low five figures, complex platforms scale from there. You get a fixed quote after discovery — no surprise invoices." },
  { q: "Do you provide support after launch?", a: "Always. Every build includes 30 days of post-launch support, and we offer ongoing retainers for teams that want us as their long-term engineering partner." },
  { q: "Can you integrate with our existing team or codebase?", a: "Yes. We regularly augment in-house teams, take over legacy codebases, and work inside your stack, repo, and CI of choice." },
  { q: "Where are you based and do you work with international clients?", a: "We're in Mumbai, India and work with clients across the US, UK, EU, and Middle East. Async-first, weekly syncs, and overlap hours that work for you." },
];

export function FAQ() {
  const [open, setOpen] = useState<number>(0);
  return (
    <section className="relative max-w-[800px] mx-auto py-[120px] px-6 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
        className="text-center font-bold mb-12"
        style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,64px)" }}
      >
        Questions, <span style={{ color: "#c2185b" }}>Answered.</span>
      </motion.h2>
      <div className="space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ delay: i * 0.05 }}
              className="ce-glass overflow-hidden transition-all"
              style={{
                borderColor: isOpen ? "rgba(194,24,91,0.5)" : "rgba(139,26,74,0.2)",
                boxShadow: isOpen ? "0 0 40px rgba(194,24,91,0.2)" : "0 0 40px rgba(194,24,91,0.08)",
              }}
            >
              <button onClick={() => setOpen(isOpen ? -1 : i)} className="w-full text-left p-5 flex items-center justify-between gap-4">
                <span className="text-base md:text-lg text-white" style={{ fontFamily: "General Sans, Inter" }}>{f.q}</span>
                <Plus size={20} className="transition-transform shrink-0" style={{ color: "#c2185b", transform: isOpen ? "rotate(45deg)" : "none" }} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed" style={{ color: "#9b8fa8", fontFamily: "Inter", fontWeight: 300 }}>{f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

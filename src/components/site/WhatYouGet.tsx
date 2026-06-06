import { motion } from "framer-motion";
import { Globe, Smartphone, Layers, Code2, Zap, Bot } from "lucide-react";

const CARDS = [
  { icon: Globe, name: "Websites", items: ["Figma Design", "Responsive Build", "CMS Integration", "Speed Optimization", "30 Days Support"] },
  { icon: Smartphone, name: "Mobile Apps", items: ["iOS + Android", "React Native", "App Store Deploy", "Push Notifications", "Analytics"] },
  { icon: Layers, name: "SaaS Platforms", items: ["Multi-tenant Architecture", "Auth System", "Billing Integration", "Admin Dashboard", "API Layer"] },
  { icon: Code2, name: "Custom Software", items: ["Requirement Analysis", "System Design", "Full Build", "Testing", "Documentation"] },
  { icon: Zap, name: "AI & Automation", items: ["LLM Integration", "Workflow Automation", "API Pipelines", "Custom Training", "Monitoring"] },
  { icon: Bot, name: "AI Agents", items: ["Agent Architecture", "Tool Integration", "Memory Systems", "Deployment", "Ongoing Optimization"] },
];

export function WhatYouGet() {
  return (
    <section className="relative max-w-[1400px] mx-auto py-[120px] px-6 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
        className="text-center font-bold mb-16"
        style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.05 }}
      >
        Everything You Need. <span style={{ color: "#c2185b" }}>Nothing You Don't.</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {CARDS.map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }} transition={{ delay: (i % 3) * 0.1 }}
              className="ce-glass ce-glass-hover p-7 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(194,24,91,0.15)" }}>
                  <Icon size={20} style={{ color: "#c2185b" }} />
                </span>
                <h3 className="text-xl text-white" style={{ fontFamily: "Clash Display" }}>{c.name}</h3>
              </div>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li key={it} className="text-sm flex gap-2" style={{ color: "#9b8fa8", fontFamily: "Inter" }}>
                    <span style={{ color: "#c2185b" }}>·</span>{it}
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-[12px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "#c2185b", fontFamily: "Space Grotesk" }}>
                → LET'S BUILD
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

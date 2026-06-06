import { createFileRoute } from "@tanstack/react-router";
import { Search, Network, Brush, GitBranch, ShieldCheck, GraduationCap } from "lucide-react";
import { ServicePage, type ServiceConfig } from "@/components/site/service/ServicePage";
import { CodeEditor, ComparisonTable } from "@/components/site/service/visuals";

export const Route = createFileRoute("/services/custom-software")({
  head: () => ({
    meta: [
      { title: "Custom Software Development Mumbai — Bespoke Tools by CoreEgin" },
      { name: "description", content: "Custom software development company in Mumbai building bespoke internal tools, ERP and workflow systems. Full source code ownership, zero SaaS lock-in, engineered in India." },
      { name: "keywords", content: "custom software development Mumbai, bespoke software India, internal tools developer Mumbai, ERP development India, workflow software Mumbai, enterprise software India" },
      { property: "og:title", content: "Custom Software Development Mumbai — CoreEgin" },
      { property: "og:description", content: "Bespoke internal tools that replace ten spreadsheets. Full code ownership, zero lock-in." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/custom-software" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Custom Software Development Mumbai — CoreEgin" },
      { name: "twitter:description", content: "Bespoke tools engineered for your exact workflow." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/custom-software" },
    ],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServiceConfig = {
  serviceNumber: "04",
  headline: "CUSTOM SOFTWARE",
  tagline: "Bespoke internal tools that replace ten spreadsheets and three SaaS subscriptions.",
  pills: ["20+ Tools Built", "Full Code Ownership"],
  ctaWord: "Your Tool",
  deliverables: [
    { icon: Search, title: "Deep Discovery", desc: "We learn your workflow before we touch a keyboard.", bullets: ["Stakeholder interviews", "Process mapping", "Pain-point audit"] },
    { icon: Network, title: "System Architecture", desc: "Designed to fit your business, not the other way round.", bullets: ["Data modeling", "Integration plan", "Scalability path"] },
    { icon: Brush, title: "Custom UI/UX", desc: "Interfaces designed for your team — not generic users.", bullets: ["Role-specific views", "Keyboard-first flows", "Branded design"] },
    { icon: GitBranch, title: "Iterative Development", desc: "Weekly builds. Real feedback. No surprises at the end.", bullets: ["2-week sprints", "Demo every Friday", "Adjust as you learn"] },
    { icon: ShieldCheck, title: "Testing & QA", desc: "Internal tools fail silently — ours don't.", bullets: ["Automated tests", "User acceptance", "Edge-case coverage"] },
    { icon: GraduationCap, title: "Training & Handover", desc: "Your team uses it from day one with confidence.", bullets: ["On-site training", "Video walkthroughs", "Full documentation"] },
  ],
  stats: [
    { value: "20+", label: "Tools Built" },
    { value: "Zero", label: "Outsourcing" },
    { value: "100%", label: "Code Ownership" },
    { value: "8–16wk", label: "Delivery" },
  ],
  steps: [
    { num: "01", name: "Deep Discovery", time: "Week 1–2", desc: "Shadow your team, map workflows, find the actual problem." },
    { num: "02", name: "System Design", time: "Week 2–4", desc: "Architecture, data model, integration plan, UI wireframes." },
    { num: "03", name: "Sprint Build", time: "Week 4–12", desc: "Two-week sprints with live demos and continuous adjustment." },
    { num: "04", name: "User Testing", time: "Week 12–14", desc: "Real workflows tested by the people who'll use it daily." },
    { num: "05", name: "Training & Launch", time: "Week 14+", desc: "On-site training, documentation, deployment, ongoing support." },
  ],
  whyTitle: "Yours.",
  whyAccent: "Forever.",
  whyPoints: [
    "Full source code ownership — no monthly SaaS bills forever",
    "Built for your exact workflow, not generic enterprise users",
    "Integrates with the tools you already pay for and trust",
    "Scales as your team grows without per-seat pricing pain",
    "Zero vendor lock-in — host it anywhere, swap us out anytime",
  ],
  tech: ["Node.js", "PostgreSQL", "React", "Python", "Redis", "Docker", "AWS", "TypeScript", "Prisma", "ElasticSearch", "Figma"],
  faqs: [
    { q: "How is this different from SaaS?", a: "SaaS is rented and generic. Custom software is owned and built for your exact process — pay once instead of forever." },
    { q: "Will it work with my existing tools?", a: "Yes, we integrate with whatever you use — APIs, databases, Slack, Zapier, the lot." },
    { q: "What if requirements change halfway?", a: "Sprint-based development means changes get absorbed naturally without restart-the-clock pricing." },
    { q: "Do I really own the source code?", a: "Yes, completely. Code, designs, docs, deployment configs — all yours on day one." },
    { q: "How long does it take?", a: "Typical projects ship in 8 to 16 weeks depending on complexity and integration count." },
    { q: "Can I host it on my own server?", a: "Absolutely. Self-host, AWS, GCP, on-prem — we set it up wherever you want." },
  ],
  heroVisual: <CodeEditor />,
  whyVisual: <ComparisonTable />,
};

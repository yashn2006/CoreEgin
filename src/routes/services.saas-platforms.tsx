import { createFileRoute } from "@tanstack/react-router";
import { Layers, Lock, CreditCard, Settings2, Plug, Server } from "lucide-react";
import { ServicePage, type ServiceConfig } from "@/components/site/service/ServicePage";
import { SaaSDashboard, ArchitectureDiagram } from "@/components/site/service/visuals";

export const Route = createFileRoute("/services/saas-platforms")({
  head: () => ({
    meta: [
      { title: "SaaS Development Mumbai — Multi-Tenant Platforms by CoreEgin" },
      { name: "description", content: "SaaS platform development in Mumbai. Multi-tenant architecture, Stripe billing, admin dashboards and 99.9% uptime infrastructure engineered from day one by CoreEgin India." },
      { name: "keywords", content: "SaaS development Mumbai, SaaS development company India, multi-tenant SaaS developer, Stripe integration India, B2B SaaS development Mumbai, SaaS MVP India" },
      { property: "og:title", content: "SaaS Development Mumbai — CoreEgin" },
      { property: "og:description", content: "Multi-tenant SaaS platforms built to scale from day one. Engineered in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/saas-platforms" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SaaS Development Mumbai — CoreEgin" },
      { name: "twitter:description", content: "Multi-tenant, billing-ready SaaS platforms built to scale." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/saas-platforms" },
    ],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServiceConfig = {
  serviceNumber: "03",
  headline: "SAAS PLATFORMS",
  tagline: "Multi-tenant systems engineered to scale from your first user to your fifty-thousandth.",
  pills: ["8+ SaaS Shipped", "50,000+ End Users"],
  ctaWord: "Your SaaS",
  deliverables: [
    { icon: Layers, title: "Multi-Tenant Architecture", desc: "Per-tenant data isolation done properly from day one.", bullets: ["Row-level security", "Tenant-aware queries", "Custom subdomains"] },
    { icon: Lock, title: "Authentication System", desc: "Auth flows users don't hate and attackers can't break.", bullets: ["Email + OAuth", "MFA support", "Role-based access"] },
    { icon: CreditCard, title: "Subscription & Billing", desc: "Stripe wired in correctly — trials, dunning, upgrades.", bullets: ["Stripe integration", "Usage-based pricing", "Invoices + receipts"] },
    { icon: Settings2, title: "Admin Dashboard", desc: "Your internal control panel for everything.", bullets: ["User management", "Revenue analytics", "Feature flags"] },
    { icon: Plug, title: "API Layer", desc: "Clean, versioned, documented APIs for everything.", bullets: ["REST + GraphQL", "Auto docs", "Rate limiting"] },
    { icon: Server, title: "Scalable Infrastructure", desc: "Built on infra that grows with you, not against you.", bullets: ["AWS / Vercel", "Auto-scaling", "Zero-downtime deploys"] },
  ],
  stats: [
    { value: "8+", label: "SaaS Built" },
    { value: "50k+", label: "End Users" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "Stripe", label: "Billing Ready" },
  ],
  steps: [
    { num: "01", name: "Product Architecture", time: "Week 1–2", desc: "Multi-tenant data model, auth strategy, billing structure." },
    { num: "02", name: "Design System", time: "Week 2–4", desc: "Reusable component library for fast feature shipping." },
    { num: "03", name: "Core Build", time: "Week 4–12", desc: "Sprint-based development with weekly demo + review." },
    { num: "04", name: "Security Testing", time: "Week 12–14", desc: "Penetration testing, load testing, audit logs verified." },
    { num: "05", name: "Launch & Scale", time: "Week 14+", desc: "Production rollout with monitoring + scaling playbook." },
  ],
  whyTitle: "Built for Scale.",
  whyAccent: "Not Patched For It.",
  whyPoints: [
    "Multi-tenant from the database up — not bolted on later",
    "Stripe billing wired correctly: trials, proration, dunning, refunds",
    "Role-based access control with audit logs out of the box",
    "Infrastructure that handles 10x growth without rewrites",
    "GDPR-ready data handling — privacy and security baked in",
  ],
  tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Stripe", "AWS", "Docker", "TypeScript", "Prisma", "GraphQL"],
  techRow2: ["Supabase", "Vercel", "React", "SendGrid", "Cloudflare", "GitHub Actions", "Twilio", "Figma"],
  faqs: [
    { q: "How long does a SaaS platform take to build?", a: "MVP usually ships in 12–16 weeks. Full feature-rich v1 takes 4–6 months." },
    { q: "Do you handle Stripe billing properly?", a: "Yes — trials, upgrades, downgrades, proration, dunning, webhooks, invoicing, the full deal." },
    { q: "Can multiple users from one company use it?", a: "Yes, multi-tenancy with team accounts and role-based permissions is standard." },
    { q: "How secure is the data?", a: "Row-level security, encrypted at rest and in transit, audit logs, and pen-tested before launch." },
    { q: "Will there be a mobile version?", a: "Web first, but every SaaS we build is responsive, and we can ship a React Native version as phase 2." },
    { q: "What about post-launch?", a: "We offer monthly retainers for new features, performance optimization, and infrastructure scaling." },
  ],
  heroVisual: <SaaSDashboard />,
  whyVisual: <ArchitectureDiagram />,
};

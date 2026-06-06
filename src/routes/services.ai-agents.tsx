import { createFileRoute } from "@tanstack/react-router";
import { Search, Megaphone, Settings, Headphones, Database, Plug } from "lucide-react";
import { ServicePage, type ServiceConfig } from "@/components/site/service/ServicePage";
import { AgentMonitor, ChatbotVsAgent } from "@/components/site/service/visuals";

export const Route = createFileRoute("/services/ai-agents")({
  head: () => ({
    meta: [
      { title: "AI Agents Development Mumbai — Autonomous Agents by CoreEgin" },
      { name: "description", content: "AI agent development company in Mumbai. Goal-driven autonomous agents that plan, use tools, execute and report — 247 tasks automated daily at 98.7% success. Built in India." },
      { name: "keywords", content: "AI agent development Mumbai, autonomous agents India, multi-agent systems Mumbai, agentic AI developer India, AI sales agent, AI research agent, LangChain developer Mumbai" },
      { property: "og:title", content: "AI Agents Development Mumbai — CoreEgin" },
      { property: "og:description", content: "Autonomous agents that reason, act and integrate. Engineered in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/ai-agents" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Agents Development Mumbai — CoreEgin" },
      { name: "twitter:description", content: "Autonomous systems that reason, act, and deliver." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/ai-agents" },
    ],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServiceConfig = {
  serviceNumber: "06",
  headline: "AI AGENTS",
  tagline: "Autonomous systems that reason, plan, use tools, and get the job done without you.",
  pills: ["247 Tasks / Day", "98.7% Success Rate"],
  ctaWord: "Your Agent",
  deliverables: [
    { icon: Search, title: "Research Agents", desc: "Agents that gather, compare, and synthesise at scale.", bullets: ["Web + database search", "Multi-source synthesis", "Structured reports"] },
    { icon: Megaphone, title: "Sales Agents", desc: "Outbound that prospects, qualifies, and books meetings.", bullets: ["Lead scoring", "Personalised outreach", "CRM auto-update"] },
    { icon: Settings, title: "Operations Agents", desc: "Run repetitive ops without humans in the loop.", bullets: ["Scheduled execution", "Error self-recovery", "Slack reporting"] },
    { icon: Headphones, title: "Customer Service Agents", desc: "L1 and L2 support handled — escalate only when needed.", bullets: ["Multi-channel", "Memory across tickets", "Tone matching"] },
    { icon: Database, title: "Data Agents", desc: "Pull, clean, analyse, and report on your data daily.", bullets: ["ETL automation", "Anomaly detection", "Auto-generated dashboards"] },
    { icon: Plug, title: "Integration Agents", desc: "Glue layer between your tools that thinks for itself.", bullets: ["API orchestration", "Conditional routing", "Failure recovery"] },
  ],
  stats: [
    { value: "247", label: "Tasks / Day" },
    { value: "98.7%", label: "Success Rate" },
    { value: "14hrs", label: "Saved Daily" },
    { value: "0", label: "Human Input" },
  ],
  steps: [
    { num: "01", name: "Goal Definition", time: "Week 1", desc: "Define exactly what success looks like for the agent." },
    { num: "02", name: "Tool Architecture", time: "Week 1–2", desc: "Map the tools, APIs, and data the agent will use." },
    { num: "03", name: "Agent Build", time: "Week 2–6", desc: "Construct planning, memory, tool calling, error handling." },
    { num: "04", name: "Guardrails & Testing", time: "Week 6–7", desc: "Safety limits, rate caps, output validation, edge cases." },
    { num: "05", name: "Deploy & Monitor", time: "Week 7+", desc: "Production rollout with full observability and iteration." },
  ],
  whyTitle: "Real Agents.",
  whyAccent: "Not Chatbot Wrappers.",
  whyPoints: [
    "Built on LangGraph and modern agent frameworks — not glued-together prompts",
    "Real tool calling — agents that use your CRM, send emails, edit databases",
    "Memory that persists across runs so agents learn your business over time",
    "Guardrails, budgets, and human approval gates for anything sensitive",
    "Full observability — every thought, tool call, and decision logged",
  ],
  tech: ["LangGraph", "LangChain", "OpenAI", "Anthropic", "Python", "FastAPI", "PostgreSQL", "Redis", "Pinecone", "AWS"],
  techRow2: ["Browser-use", "Playwright", "Supabase", "Docker", "n8n", "TypeScript", "Cloudflare", "SendGrid", "Twilio", "GitHub Actions"],
  faqs: [
    { q: "What's the difference between an agent and automation?", a: "Automation follows a fixed script. An agent has a goal, decides the steps itself, adapts when things change, and recovers from failures." },
    { q: "Are agents reliable enough for production?", a: "Yes — with proper guardrails, retries, validation, and human gates for high-stakes actions. We've shipped agents handling 200+ tasks per day with 98%+ success." },
    { q: "Can agents access my private data?", a: "Yes, through scoped credentials and read/write permissions you control. We never use your data to train models." },
    { q: "What happens when the agent makes a mistake?", a: "Every action is logged, reversible where possible, and high-risk steps require human approval before execution." },
    { q: "Do agents run 24/7?", a: "Yes — they run on schedule, on triggers, or continuously based on your needs." },
    { q: "How much does an agent cost?", a: "Build typically takes 6–10 weeks. Runtime costs depend on volume — usually a fraction of one human salary for the equivalent work." },
  ],
  heroVisual: <AgentMonitor />,
  whyVisual: <ChatbotVsAgent />,
};

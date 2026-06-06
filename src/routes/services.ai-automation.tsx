import { createFileRoute } from "@tanstack/react-router";
import { Brain, MessageSquare, FileSearch, Workflow, PenTool, Bot } from "lucide-react";
import { ServicePage, type ServiceConfig } from "@/components/site/service/ServicePage";
import { AIPipeline, BeforeAfter } from "@/components/site/service/visuals";

export const Route = createFileRoute("/services/ai-automation")({
  head: () => ({
    meta: [
      { title: "AI Automation Mumbai — LLM & Workflow Automation by CoreEgin" },
      { name: "description", content: "AI automation company in Mumbai. GPT-4 & Claude integration, AI chatbots, document processing, RAG pipelines and workflow automation that cuts task time by 80%. Engineered in India." },
      { name: "keywords", content: "AI automation Mumbai, LLM integration India, GPT-4 developer Mumbai, AI chatbot development India, RAG pipeline Mumbai, workflow automation India, AI consulting Mumbai" },
      { property: "og:title", content: "AI Automation Mumbai — CoreEgin" },
      { property: "og:description", content: "LLM pipelines and workflows that quietly run your business. Built in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/ai-automation" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AI Automation Mumbai — CoreEgin" },
      { name: "twitter:description", content: "LLM pipelines that cut task time by 80%." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/ai-automation" },
    ],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServiceConfig = {
  serviceNumber: "05",
  headline: "AI & AUTOMATION",
  tagline: "LLM pipelines and workflows that quietly do the work while you sleep.",
  pills: ["80% Task Reduction", "ROI Within 60 Days"],
  ctaWord: "Your AI Stack",
  deliverables: [
    { icon: Brain, title: "LLM Integration", desc: "GPT-4, Claude, open-source — wired into your stack.", bullets: ["Prompt engineering", "Context windows", "Cost optimization"] },
    { icon: MessageSquare, title: "AI Chatbots", desc: "Conversational interfaces that actually answer.", bullets: ["RAG over your docs", "Tool calling", "Multi-language"] },
    { icon: FileSearch, title: "Document Processing", desc: "Extract structured data from anything humans wrote.", bullets: ["PDF / image OCR", "Schema extraction", "Bulk processing"] },
    { icon: Workflow, title: "Workflow Automation", desc: "Connect 10 apps and let AI run the in-between.", bullets: ["Make / n8n / Zapier", "Custom triggers", "Error handling"] },
    { icon: PenTool, title: "Content Pipelines", desc: "Generate, edit, schedule — at human-quality scale.", bullets: ["Brand-aware tone", "Multi-format output", "Human review gates"] },
    { icon: Bot, title: "Custom AI Agents", desc: "Goal-driven assistants for your team or customers.", bullets: ["Memory + tools", "Multi-step planning", "Always-on operation"] },
  ],
  stats: [
    { value: "80%", label: "Task Reduction" },
    { value: "10x", label: "Faster Output" },
    { value: "24/7", label: "Operation" },
    { value: "<60d", label: "ROI" },
  ],
  steps: [
    { num: "01", name: "Use Case Audit", time: "Week 1", desc: "Find the highest-ROI tasks AI should actually do." },
    { num: "02", name: "Model Selection", time: "Week 1–2", desc: "Pick the right LLM, fine-tune vs RAG, cost vs quality." },
    { num: "03", name: "Integration Build", time: "Week 2–6", desc: "Wire AI into your existing tools, data, and workflows." },
    { num: "04", name: "Safety Testing", time: "Week 6–7", desc: "Hallucination guards, output validation, human fallbacks." },
    { num: "05", name: "Deploy & Monitor", time: "Week 7+", desc: "Live rollout with observability, quality tracking, iteration." },
  ],
  whyTitle: "AI That Works.",
  whyAccent: "Not AI That Demos.",
  whyPoints: [
    "We pick the right model for the job — not the hyped one of the week",
    "Hallucination guards and output validation built into every pipeline",
    "Costs optimized — caching, batching, smaller models where possible",
    "Connected to your real data — RAG, vector search, structured retrieval",
    "Human-in-the-loop for anything that touches customers or money",
  ],
  tech: ["OpenAI", "Anthropic", "LangChain", "Python", "FastAPI", "PostgreSQL", "Redis", "Pinecone", "Supabase", "AWS Lambda"],
  techRow2: ["Make.com", "n8n", "Node.js", "TypeScript", "Docker", "Vercel", "Cloudflare", "Twilio", "SendGrid", "Zapier"],
  faqs: [
    { q: "Will AI replace my team?", a: "No — it removes the boring 80% so your team can focus on the 20% only humans do well." },
    { q: "Is my data safe with these models?", a: "Yes. We use enterprise API tiers that don't train on your data, plus self-hosted models for sensitive flows." },
    { q: "Will it integrate with my existing software?", a: "Yes — we connect AI to your CRM, helpdesk, database, Slack, email, anywhere you already work." },
    { q: "What if the AI gives a wrong answer?", a: "Every pipeline has output validation, confidence thresholds, and human-review gates for high-stakes decisions." },
    { q: "How much does this cost?", a: "Most projects pay for themselves within 60 days through saved hours. Build cost is typically 4–8 weeks of work." },
    { q: "Our team isn't technical — is that ok?", a: "Yes. We design AI tools that non-technical teams actually use without engineering support." },
  ],
  heroVisual: <AIPipeline />,
  whyVisual: <BeforeAfter />,
};

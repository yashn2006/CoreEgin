import { createFileRoute } from "@tanstack/react-router";
import {
  Palette, Code2, Upload, Bell, BarChart3, LifeBuoy,
} from "lucide-react";
import { ServicePage, type ServiceConfig } from "@/components/site/service/ServicePage";
import { PhonesMockup, AppStoreCard } from "@/components/site/service/visuals";

export const Route = createFileRoute("/services/mobile-apps")({
  head: () => ({
    meta: [
      { title: "Mobile App Development Mumbai — iOS & Android by CoreEgin" },
      { name: "description", content: "Mobile app development company in Mumbai building native-feeling iOS and Android apps. React Native, App Store approved on first try, 20+ apps shipped from India." },
      { name: "keywords", content: "mobile app development Mumbai, iOS app developer India, Android app development Mumbai, React Native developer India, app development company Mumbai, mobile app agency India" },
      { property: "og:title", content: "Mobile App Development Mumbai — CoreEgin" },
      { property: "og:description", content: "Native iOS & Android apps engineered in Mumbai. React Native, App Store ready." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/services/mobile-apps" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Mobile App Development Mumbai — CoreEgin" },
      { name: "twitter:description", content: "Native-feeling iOS & Android products people love to open." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/services/mobile-apps" },
    ],
  }),
  component: () => <ServicePage config={config} />,
});

const config: ServiceConfig = {
  serviceNumber: "02",
  headline: "MOBILE APPS",
  tagline: "Native-feeling iOS and Android products people actually love to open.",
  pills: ["20+ Apps Shipped", "iOS & Android Native"],
  ctaWord: "Your App",
  deliverables: [
    { icon: Palette, title: "UI/UX Design", desc: "App-store quality interfaces built thumb-first.", bullets: ["Figma prototypes", "Motion design", "Accessibility built-in"] },
    { icon: Code2, title: "React Native Dev", desc: "One codebase. Two stores. Native performance.", bullets: ["React Native + Expo", "Native modules when needed", "Offline-first architecture"] },
    { icon: Upload, title: "App Store Submission", desc: "We handle the full submission and review dance.", bullets: ["Apple App Store", "Google Play", "Store assets + copy"] },
    { icon: Bell, title: "Push Notifications", desc: "Re-engage users without being annoying.", bullets: ["Firebase Cloud Messaging", "Targeted segments", "Schedule & A/B test"] },
    { icon: BarChart3, title: "Analytics & Tracking", desc: "Know what users actually do — not what you hope.", bullets: ["Firebase Analytics", "Funnel tracking", "Crash reporting"] },
    { icon: LifeBuoy, title: "Post Launch Support", desc: "Apps need care. We don't ship and ghost.", bullets: ["OS update patches", "Feature iterations", "Performance monitoring"] },
  ],
  stats: [
    { value: "20+", label: "Apps Shipped" },
    { value: "iOS / Android", label: "Both Platforms" },
    { value: "100%", label: "Store Approved" },
    { value: "<3s", label: "Cold Start" },
  ],
  steps: [
    { num: "01", name: "Strategy", time: "Week 1", desc: "Define core flows, monetisation, and platform priorities." },
    { num: "02", name: "Design", time: "Week 1–3", desc: "Native iOS + Android design systems in Figma." },
    { num: "03", name: "Development", time: "Week 3–9", desc: "Sprint-based React Native build with weekly TestFlight." },
    { num: "04", name: "Testing", time: "Week 9–10", desc: "Device matrix, edge cases, beta tester feedback." },
    { num: "05", name: "App Store Launch", time: "Week 10+", desc: "Submission, review handling, day-zero monitoring." },
  ],
  whyTitle: "Not a WebView.",
  whyAccent: "Real Native.",
  whyPoints: [
    "Real React Native — not a webview pretending to be an app",
    "Submitted, reviewed and approved on Apple and Google on the first try",
    "Push notifications, deep linking, biometrics — all the native pieces",
    "Sub-3-second cold starts on devices three years old",
    "We test on 20+ real devices before you ever see it",
  ],
  tech: ["React Native", "Expo", "TypeScript", "Firebase", "Redux", "Reanimated", "Fastlane", "XCode", "Android Studio", "Figma"],
  faqs: [
    { q: "How long does an app take?", a: "Most apps ship between 8 and 12 weeks from kickoff." },
    { q: "Do you build for both iOS and Android?", a: "Yes, both platforms from one React Native codebase, with native modules where they matter." },
    { q: "How does App Store submission work?", a: "We handle account setup, asset generation, copy, screenshots, and the full review cycle." },
    { q: "Does the app work offline?", a: "Yes, we architect offline-first with proper sync when devices come back online." },
    { q: "Do I need a backend?", a: "We can build one in parallel — Supabase, Firebase, or fully custom Node, your call." },
    { q: "How much does it cost?", a: "Apps start around the equivalent of a senior contractor for 3 months — but we give fixed scopes, not hourly bills." },
  ],
  heroVisual: <PhonesMockup />,
  whyVisual: <AppStoreCard />,
};

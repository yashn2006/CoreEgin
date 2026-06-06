import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { initLenis, destroyLenis } from "@/lib/lenis";
import { ScrollTrigger } from "@/lib/gsap";

import { LaunchAnimation } from "@/components/site/LaunchAnimation";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Manifesto } from "@/components/site/Manifesto";
import { WhyCoreEgin } from "@/components/site/WhyCoreEgin";
import { Numbers } from "@/components/site/Numbers";
import { Services } from "@/components/site/Services";
import { WhatYouGet } from "@/components/site/WhatYouGet";
import { Process } from "@/components/site/Process";
import { TechStack } from "@/components/site/TechStack";
import { Founders } from "@/components/site/Founders";
import { CinematicCTA } from "@/components/site/CinematicCTA";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCTA } from "@/components/site/StickyCTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CoreEgin — Full-Spectrum Digital Engineering Studio Mumbai" },
      { name: "description", content: "CoreEgin builds websites, mobile apps, SaaS platforms, custom software, AI automation and AI agents. Mumbai's most obsessive digital engineering studio — engineered from zero by Saad Parkar & Yash Nandi." },
      { name: "keywords", content: "digital engineering studio Mumbai, web development Mumbai, mobile app development India, SaaS development India, custom software Mumbai, AI automation India, AI agents Mumbai, CoreEgin, Saad Parkar, Yash Nandi" },
      { property: "og:title", content: "CoreEgin — Full-Spectrum Digital Engineering Studio Mumbai" },
      { property: "og:description", content: "Websites, mobile, SaaS, custom software, AI & autonomous agents. Engineered from zero in Mumbai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/" },
      { property: "og:site_name", content: "CoreEgin" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "CoreEgin — Full-Spectrum Digital Engineering Studio Mumbai" },
      { name: "twitter:description", content: "Websites · Mobile · SaaS · Custom Software · AI · Agents. From pixel to protocol." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CoreEgin",
          url: "https://pixel-to-protocol-forge.lovable.app",
          description: "Full-Spectrum Digital Engineering Studio building websites, mobile apps, SaaS platforms, custom software, AI automation and AI agents.",
          foundingLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
          },
          address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressRegion: "Maharashtra", addressCountry: "IN" },
          founder: [
            { "@type": "Person", name: "Saad Parkar" },
            { "@type": "Person", name: "Yash Nandi" },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (!isTouch) initLenis();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      destroyLenis();
    };
  }, []);

  return (
    <div style={{ background: "#0a0810", overflowX: "clip" }} className="min-h-screen text-white">
      <LaunchAnimation />
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <WhyCoreEgin />
        <Numbers />
        <Services />
        <WhatYouGet />
        <Process />
        <TechStack />
        <Founders />
        <CinematicCTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

const ROW1 = ["React", "Next.js", "Flutter", "Node.js", "Python", "AWS", "OpenAI", "TypeScript", "GraphQL", "Redis"];
const ROW2 = ["Figma", "MongoDB", "Firebase", "PostgreSQL", "Supabase", "Vercel", "Docker", "Stripe", "Twilio", "TensorFlow"];

function Pill({ t }: { t: string }) {
  return (
    <span className="ce-pill mx-3 px-5 py-2 text-[12px] tracking-[0.15em] whitespace-nowrap" style={{ fontFamily: "Space Grotesk", color: "#f0e8ff", border: "1px solid rgba(194,24,91,0.3)" }}>
      {t}
    </span>
  );
}

export function TechStack() {
  return (
    <section className="relative py-[80px] overflow-hidden">
      <h2 className="text-center font-bold mb-12 px-6"
        style={{ fontFamily: "Clash Display", fontSize: "clamp(32px,4.5vw,64px)", lineHeight: 1.05 }}>
        The Arsenal <span style={{ color: "#c2185b" }}>We Build With</span>
      </h2>
      <div className="space-y-4">
        <div className="flex w-max ce-marquee-slow">
          {[...ROW1, ...ROW1].map((t, i) => <Pill key={i} t={t} />)}
        </div>
        <div className="flex w-max ce-marquee-reverse">
          {[...ROW2, ...ROW2].map((t, i) => <Pill key={i} t={t} />)}
        </div>
      </div>
    </section>
  );
}

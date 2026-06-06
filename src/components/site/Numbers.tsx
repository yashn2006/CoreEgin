import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const NUMS = [
  { n: 50, suffix: "+", label: "PROJECTS DELIVERED" },
  { n: 12, suffix: "+", label: "INDUSTRIES SERVED" },
  { n: 4, suffix: "", label: "YEARS EXPERIENCE" },
  { n: 100, suffix: "%", label: "ON-TIME DELIVERY" },
  { n: 2, suffix: "", label: "FOUNDERS · ZERO MIDDLEMEN" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 2000;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{v}{suffix}</span>;
}

export function Numbers() {
  return (
    <section id="numbers" className="relative py-[100px] px-6 md:px-10" style={{ background: "linear-gradient(180deg,#0a0810,#0d0a16)" }}>
      <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {NUMS.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }}
            className="ce-glass ce-card-pulse p-6 text-center relative overflow-hidden"
          >
            <div className="font-bold" style={{ fontFamily: "Clash Display", fontSize: "clamp(40px,5vw,72px)", color: "#c2185b", lineHeight: 1 }}>
              <Counter to={it.n} suffix={it.suffix} />
            </div>
            <div className="mt-3 text-[11px] tracking-[0.2em]" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>
              {it.label}
            </div>
            <motion.div
              initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.4, duration: 1 }}
              className="absolute bottom-0 left-0 h-px" style={{ background: "linear-gradient(90deg,transparent,#c2185b,transparent)" }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

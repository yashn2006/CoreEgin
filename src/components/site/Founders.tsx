import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import ceLogo from "@/assets/ce-logo.png";

function FounderCard({
  initials, name, title, quote, gradient, divider, accent,
}: { initials: string; name: string; title: string; quote: string; gradient: string; divider: string; accent: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mx, [-0.5, 0.5], ["10%", "90%"]);
  const glareY = useTransform(my, [-0.5, 0.5], ["10%", "90%"]);
  const glareBg = useTransform<string, string>([glareX, glareY] as never, ([x, y]: string[]) => `radial-gradient(circle at ${x} ${y}, rgba(255,255,255,0.22), transparent 45%)`);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      style={{ perspective: 1200 }}
      className="relative"
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="ce-glass relative p-10 md:p-12 overflow-hidden"
      >
        {/* logo watermark */}
        <img
          src={ceLogo}
          alt=""
          aria-hidden
          className="absolute -right-10 -bottom-10 w-64 h-64 object-contain pointer-events-none select-none"
          style={{ opacity: 0.08, filter: "drop-shadow(0 0 20px rgba(194,24,91,0.4))", transform: "translateZ(20px)" }}
        />

        {/* radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 20% 0%, ${accent}, transparent 60%)` }} />

        {/* moving glare */}
        <motion.div
          className="absolute inset-0 pointer-events-none mix-blend-overlay"
          style={{ background: glareBg }}
        />

        <div className="relative" style={{ transform: "translateZ(40px)" }}>
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold"
            style={{ background: gradient, fontFamily: "Clash Display", boxShadow: `0 10px 30px ${accent}` }}>{initials}</div>
          <h3 className="mt-6 text-3xl text-white" style={{ fontFamily: "Clash Display" }}>{name}</h3>
          <div className="mt-2 text-[12px] tracking-[0.25em]" style={{ color: "#c084a8", fontFamily: "Space Grotesk" }}>{title}</div>
          <div className="h-px w-10 my-6" style={{ background: divider }} />
          <p className="italic text-[15px]" style={{ fontFamily: "Inter", fontWeight: 300, color: "#f0e8ff" }}>"{quote}"</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Founders() {
  return (
    <section id="founders" className="relative max-w-[1400px] mx-auto py-[120px] px-6 md:px-10">
      <motion.h2
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
        className="text-center font-bold mb-16"
        style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.05 }}
      >
        The Minds Behind <span style={{ color: "#c2185b" }}>The Engine</span>
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <FounderCard initials="SP" name="Saad Parkar" title="Founder / Director"
          quote="Obsessed with building products that outlast trends."
          gradient="linear-gradient(135deg,#8b1a4a,#c2185b)" divider="#c2185b" accent="rgba(194,24,91,0.35)" />
        <FounderCard initials="YN" name="Yash Nandi" title="Founder / Co-Director"
          quote="Engineering isn't a process. It's a discipline."
          gradient="linear-gradient(135deg,#3d1060,#6b21a8)" divider="#7b21a8" accent="rgba(123,33,168,0.35)" />
      </div>
    </section>
  );
}

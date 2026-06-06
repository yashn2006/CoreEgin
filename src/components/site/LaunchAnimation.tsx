import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ceLogo from "@/assets/ce-logo.png";

const CORE = "CORE";
const ENGINE = "EGIN";

export function LaunchAnimation() {
  const [visible, setVisible] = useState(true);
  const [step, setStep] = useState(0);
  // 0: idle, 1: logo+rings, 2: type words, 3: tagline, 4: shockwave, 5: split

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 250),
      setTimeout(() => setStep(2), 950),
      setTimeout(() => setStep(3), 1900),
      setTimeout(() => setStep(4), 2500),
      setTimeout(() => setStep(5), 2850),
      setTimeout(() => setVisible(false), 3550),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const letters = (text: string, color: string, baseDelay = 0) =>
    text.split("").map((ch, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 40, rotateX: -90, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
        transition={{ delay: baseDelay + i * 0.07, duration: 0.5, ease: [0.2, 0.9, 0.3, 1] }}
        style={{ color, display: "inline-block", textShadow: color === "#c2185b" ? "0 0 30px rgba(194,24,91,0.6)" : "0 0 20px rgba(255,255,255,0.3)" }}
      >
        {ch}
      </motion.span>
    ));

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] overflow-hidden"
          style={{ background: "radial-gradient(ellipse at center, #14091c 0%, #050309 70%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* animated grid */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage: "linear-gradient(rgba(194,24,91,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(194,24,91,0.4) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />

          {/* vignette pulse */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(circle at center, rgba(194,24,91,0.25), transparent 50%)" }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.8, 0.4], scale: [0.6, 1.2, 1] }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />

          {/* split panels */}
          <motion.div
            className="absolute top-0 left-0 h-full w-1/2"
            style={{ background: "#050309", transformOrigin: "left center", boxShadow: "20px 0 60px rgba(194,24,91,0.4)" }}
            initial={{ x: 0 }}
            animate={step >= 5 ? { x: "-105%", skewY: 2 } : {}}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          />
          <motion.div
            className="absolute top-0 right-0 h-full w-1/2"
            style={{ background: "#050309", transformOrigin: "right center", boxShadow: "-20px 0 60px rgba(194,24,91,0.4)" }}
            initial={{ x: 0 }}
            animate={step >= 5 ? { x: "105%", skewY: -2 } : {}}
            transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          />

          {/* center crack seam */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full pointer-events-none"
            style={{ background: "linear-gradient(180deg, transparent, #c2185b, transparent)", boxShadow: "0 0 24px #c2185b, 0 0 48px rgba(194,24,91,0.6)" }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={step >= 1 ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* shockwave rings */}
          {step >= 4 && [0, 0.12, 0.24].map((d, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
              style={{ border: "2px solid #c2185b", boxShadow: "0 0 24px #c2185b" }}
              initial={{ width: 80, height: 80, x: "-50%", y: "-50%", opacity: 0.9 }}
              animate={{ width: 1600, height: 1600, opacity: 0 }}
              transition={{ duration: 1.1, delay: d, ease: "easeOut" }}
            />
          ))}

          {/* center stack */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 pointer-events-none">
            {/* orbiting rings around logo */}
            <div className="relative w-40 h-40 flex items-center justify-center">
              {step >= 1 && [120, 150, 180].map((size, i) => (
                <motion.div
                  key={size}
                  className="absolute rounded-full border"
                  style={{ width: size, height: size, borderColor: "rgba(194,24,91,0.35)" }}
                  initial={{ scale: 0, opacity: 0, rotate: 0 }}
                  animate={{ scale: 1, opacity: 1, rotate: 360 }}
                  transition={{ scale: { duration: 0.6, delay: i * 0.08 }, opacity: { duration: 0.6, delay: i * 0.08 }, rotate: { duration: 8 + i * 2, repeat: Infinity, ease: "linear" } }}
                >
                  <div className="absolute w-2 h-2 rounded-full" style={{ background: "#c2185b", top: -4, left: "50%", boxShadow: "0 0 10px #c2185b" }} />
                </motion.div>
              ))}

              <motion.img
                src={ceLogo}
                alt="CoreEgin"
                width={112}
                height={112}
                className="w-24 h-24 object-contain relative z-10"
                initial={{ opacity: 0, scale: 0.4, rotate: -90, filter: "blur(12px)" }}
                animate={{ opacity: 1, scale: 1, rotate: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                style={{ filter: "drop-shadow(0 0 24px rgba(194,24,91,0.7))" }}
              />
            </div>

            {/* word mark */}
            <div
              className="text-5xl md:text-7xl font-bold tracking-wider"
              style={{ fontFamily: "Clash Display, Space Grotesk, sans-serif", perspective: 800 }}
            >
              {step >= 2 && letters(CORE, "#ffffff")}
              {step >= 2 && <span className="inline-block w-2" />}
              {step >= 2 && letters(ENGINE, "#c2185b", CORE.length * 0.07 + 0.1)}
            </div>

            {/* tagline */}
            <motion.div
              className="text-[10px] md:text-xs tracking-[0.5em] uppercase"
              style={{ color: "#c084a8", fontFamily: "JetBrains Mono, monospace" }}
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={step >= 3 ? { opacity: 1, letterSpacing: "0.5em" } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              From Pixel <span style={{ color: "#c2185b" }}>·</span> To Protocol
            </motion.div>

            {/* loader bar */}
            <motion.div
              className="h-px overflow-hidden rounded-full"
              style={{ background: "rgba(139,26,74,0.3)" }}
              initial={{ width: 0 }}
              animate={step >= 1 ? { width: 280 } : {}}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="h-full"
                style={{ background: "linear-gradient(90deg,#8b1a4a,#c2185b,#ff4d8a)", boxShadow: "0 0 10px #c2185b" }}
                initial={{ width: "0%" }}
                animate={step >= 1 ? { width: "100%" } : {}}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

          {/* particles burst on shockwave */}
          {step >= 4 && (
            <div className="absolute left-1/2 top-1/2 pointer-events-none">
              {Array.from({ length: 60 }).map((_, i) => {
                const angle = (i / 60) * Math.PI * 2;
                const dist = 240 + Math.random() * 360;
                return (
                  <motion.span
                    key={i}
                    className="absolute w-1 h-1 rounded-full"
                    style={{ background: i % 3 ? "#c2185b" : "#ffffff", boxShadow: "0 0 8px #c2185b" }}
                    initial={{ x: 0, y: 0, opacity: 1 }}
                    animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  />
                );
              })}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

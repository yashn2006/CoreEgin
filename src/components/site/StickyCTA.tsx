import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ce-cta-dismissed")) return;
    const onScroll = () => setVisible(window.scrollY > window.innerHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    sessionStorage.setItem("ce-cta-dismissed", "1");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-5 right-5 z-50 flex items-center gap-2"
        >
          <Link to="/start-project"
            className="ce-pill px-5 py-3 text-[12px] tracking-[0.2em] text-white hover:scale-[1.02] transition-transform"
            style={{ fontFamily: "Clash Display", borderColor: "rgba(194,24,91,0.6)", background: "rgba(10,8,16,0.7)", backdropFilter: "blur(16px)" }}>
            START A PROJECT →
          </Link>
          <button onClick={dismiss} aria-label="Dismiss" className="ce-glass w-9 h-9 rounded-full flex items-center justify-center">
            <X size={14} style={{ color: "#c084a8" }} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

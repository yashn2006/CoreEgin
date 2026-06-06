import { motion } from "framer-motion";

const L1 = "We don't ship templates. We engineer futures.".split(" ");

export function Manifesto() {
  return (
    <section className="relative py-[120px] px-6 md:px-10 text-center">
      <h2 className="font-bold" style={{ fontFamily: "Clash Display", fontSize: "clamp(36px,5vw,72px)", lineHeight: 1.1 }}>
        {L1.map((w, i) => {
          const isAccent = w === "futures.";
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="inline-block mr-3"
              style={isAccent ? { color: "#c2185b", textShadow: "0 0 40px rgba(194,24,91,0.5)" } : { color: "#f0e8ff" }}
            >
              {w}
            </motion.span>
          );
        })}
      </h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ delay: 0.6 }}
        className="mt-10 text-base max-w-2xl mx-auto"
        style={{ fontFamily: "Inter", fontWeight: 300, color: "#9b8fa8" }}
      >
        Every pixel is a decision. Every line of code is a commitment.
      </motion.p>
    </section>
  );
}

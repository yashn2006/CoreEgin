import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Lock } from "lucide-react";
import { useForm } from "@formspree/react";
import ceLogo from "@/assets/ce-logo.png";

export const Route = createFileRoute("/start-project")({
  head: () => ({
    meta: [
      { title: "Start a Project — Hire CoreEgin | Mumbai Engineering Studio" },
      { name: "description", content: "Start your project with CoreEgin — Mumbai's full-spectrum digital engineering studio. Secure terminal-style intake, answers in 90 seconds. Websites, apps, SaaS, AI." },
      { name: "keywords", content: "hire web developer Mumbai, hire app developer India, start project CoreEgin, software development quote Mumbai, contact CoreEgin" },
      { property: "og:title", content: "Start a Project — CoreEgin Mumbai" },
      { property: "og:description", content: "Secure project intake. From pixel to protocol." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-to-protocol-forge.lovable.app/start-project" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Start a Project — CoreEgin" },
      { name: "twitter:description", content: "Tell us about your project. Answers in 90 seconds." },
    ],
    links: [
      { rel: "canonical", href: "https://pixel-to-protocol-forge.lovable.app/start-project" },
    ],
  }),
  component: StartProjectPage,
});

type Service = "Website" | "Mobile App" | "SaaS Platform" | "Custom Software" | "AI & Automation" | "AI Agent" | "Something else";
const SERVICES: Service[] = ["Website", "Mobile App", "SaaS Platform", "Custom Software", "AI & Automation", "AI Agent", "Something else"];
const BUDGETS = ["Under ₹50,000", "₹50,000 – ₹1,00,000", "₹1,00,000 – ₹3,00,000", "₹3,00,000 – ₹5,00,000", "₹5,00,000+", "Not sure yet"];
const TIMELINES = ["ASAP — within 4 weeks", "1–3 months", "3–6 months", "Just exploring for now"];

const ROSE = "#c2185b";
const GREEN = "#00ff88";
const AMBER = "#f59e0b";

type Line = { kind: "sys" | "ask" | "ans" | "warn" | "ok" | "rule" | "blank"; text: string };

function useTyper(lines: string[], onDone?: () => void, speed = 18, startDelay = 0) {
  const [out, setOut] = useState<string[]>([]);
  const [active, setActive] = useState("");
  useEffect(() => {
    let cancelled = false;
    let i = 0;
    let buf = "";
    let t: ReturnType<typeof setTimeout>;
    const startT = setTimeout(() => {
      const step = () => {
        if (cancelled) return;
        if (i >= lines.length) { onDone?.(); return; }
        const cur = lines[i];
        if (buf.length < cur.length) {
          buf = cur.slice(0, buf.length + 1);
          setActive(buf);
          t = setTimeout(step, speed);
        } else {
          setOut((p) => [...p, cur]);
          setActive("");
          buf = "";
          i++;
          t = setTimeout(step, 140);
        }
      };
      step();
    }, startDelay);
    return () => { cancelled = true; clearTimeout(startT); clearTimeout(t!); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { out, active };
}

function StartProjectPage() {
  const [state, handleSubmit] = useForm('xvzyajnz');
  const [step, setStep] = useState(0); // 0 intro typing, 1..7 questions, 8 processing, 9 done
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [answers, setAnswers] = useState({
    name: "", email: "", company: "", service: "", budget: "", timeline: "", notes: "",
  });
  const [progress, setProgress] = useState(0);
  const [submissionState, setSubmissionState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const initRanRef = useRef(false);

  // intro typer
  const INTRO: Line[] = [
    { kind: "sys", text: "> INITIALIZING SECURE CONNECTION..." },
    { kind: "sys", text: "> COREEGIN PROJECT INTAKE SYSTEM v2.0" },
    { kind: "sys", text: "> MUMBAI, INDIA — FULL-SPECTRUM DIGITAL ENGINEERING" },
    { kind: "rule", text: "> ─────────────────────────────────────────────────" },
    { kind: "sys", text: "> Hello. Let's build something extraordinary." },
    { kind: "sys", text: "> This will take approximately 90 seconds." },
    { kind: "blank", text: "" },
  ];

  useEffect(() => {
    if (initRanRef.current) return;
    initRanRef.current = true;
    let i = 0;
    let buf = "";
    let cancelled = false;
    const start = setTimeout(function loop() {
      if (cancelled) return;
      if (i >= INTRO.length) {
        setStep(1);
        return;
      }
      const cur = INTRO[i];
      if (cur.kind === "blank" || cur.kind === "rule") {
        setHistory((p) => [...p, cur]);
        i++;
        setTimeout(loop, 60);
        return;
      }
      if (buf.length < cur.text.length) {
        buf = cur.text.slice(0, buf.length + 1);
        setHistory((p) => {
          const last = p[p.length - 1];
          if (last && (last as any).__typing) {
            return [...p.slice(0, -1), { ...cur, text: buf, __typing: true } as any];
          }
          return [...p, { ...cur, text: buf, __typing: true } as any];
        });
        setTimeout(loop, 5);
      } else {
        setHistory((p) => {
          const last = p[p.length - 1];
          if (last && (last as any).__typing) return [...p.slice(0, -1), cur];
          return [...p, cur];
        });
        buf = "";
        i++;
        setTimeout(loop, 40);
      }
    }, 400);
    return () => { cancelled = true; clearTimeout(start); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle Formspree state changes
  useEffect(() => {
    if (state.submitting) {
      setHistory((p) => {
        const last = p[p.length - 1];
        if (last?.text.includes("TRANSMITTING")) return p;
        return [...p, sys("> TRANSMITTING TO COREEGIN...")];
      });
    } else if (state.succeeded) {
      setHistory((p) => [
        ...p,
        ok("> ✓ REQUEST RECEIVED SUCCESSFULLY"),
        rule(),
        sys("> SUMMARY:"),
        sys(`> Name:     ${answers.name}`),
        sys(`> Email:    ${answers.email}`),
        sys(`> Company:  ${answers.company}`),
        sys(`> Building: ${answers.service}`),
        sys(`> Budget:   ${answers.budget}`),
        sys(`> Timeline: ${answers.timeline}`),
        rule(),
        sys("> The CoreEgin team will contact you within 24 hours."),
        sys("> Saad Parkar & Yash Nandi — contact.coreegin.com"),
        rule(),
        sys("> Thank you for choosing CoreEgin."),
        sys("> From Pixel to Protocol."),
      ]);
      setStep(9);
    } else if (state.errors?.length) {
      setHistory((p) => [
        ...p,
        warn("> ⚠ Submission failed. Please email us directly at "),
        { kind: "warn" as const, text: "> contact.coreegin.com" },
      ]);
      setStep(9);
    }
  }, [state.submitting, state.succeeded, state.errors]);

  // autoscroll
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [history, step]);

  // focus input when a question is active
  useEffect(() => {
    if (step >= 1 && step <= 7) {
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const prompt = (text: string): Line => ({ kind: "ask", text });
  const ans = (text: string): Line => ({ kind: "ans", text });
  const sys = (text: string): Line => ({ kind: "sys", text });
  const warn = (text: string): Line => ({ kind: "warn", text });
  const ok = (text: string): Line => ({ kind: "ok", text });
  const rule = (): Line => ({ kind: "rule", text: "> ─────────────────────────────────────────────────" });

  // Render the current question prompt + options block once when step changes
  const lastStepRenderedRef = useRef(0);
  useEffect(() => {
    if (step === lastStepRenderedRef.current) return;
    lastStepRenderedRef.current = step;
    if (step === 1) setHistory((p) => [...p, prompt("> What's your name?")]);
    if (step === 2) setHistory((p) => [...p, prompt("> What's your email address?")]);
    if (step === 3) setHistory((p) => [...p, prompt("> What's your company or brand name?")]);
    if (step === 4) setHistory((p) => [
      ...p,
      prompt("> What do you want to build? (type the number)"),
      sys("  [1] Website"),
      sys("  [2] Mobile App"),
      sys("  [3] SaaS Platform"),
      sys("  [4] Custom Software"),
      sys("  [5] AI & Automation"),
      sys("  [6] AI Agent"),
      sys("  [7] Something else"),
    ]);
    if (step === 5) setHistory((p) => [
      ...p,
      prompt("> What's your estimated budget? (type the number)"),
      sys("  [1] Under ₹50,000"),
      sys("  [2] ₹50,000 – ₹1,00,000"),
      sys("  [3] ₹1,00,000 – ₹3,00,000"),
      sys("  [4] ₹3,00,000 – ₹5,00,000"),
      sys("  [5] ₹5,00,000+"),
      sys("  [6] Not sure yet"),
    ]);
    if (step === 6) setHistory((p) => [
      ...p,
      prompt("> When do you want to launch? (type the number)"),
      sys("  [1] ASAP — within 4 weeks"),
      sys("  [2] 1–3 months"),
      sys("  [3] 3–6 months"),
      sys("  [4] Just exploring for now"),
    ]);
    if (step === 7) setHistory((p) => [
      ...p,
      prompt("> Tell us anything else about your project. (or press Enter to skip)"),
    ]);
    if (step === 8) {
      // processing
      setHistory((p) => [...p, rule(), sys("> PROCESSING YOUR REQUEST...")]);
      const start = Date.now();

      const submitForm = async () => {
        try {
          setSubmissionState("submitting");

          // Show transmission message
          setHistory((p) => [...p, sys("> TRANSMITTING TO COREEGIN...")]);

          const formData = new FormData();
          formData.append('name', answers.name);
          formData.append('email', answers.email);
          formData.append('company', answers.company);
          formData.append('service', answers.service);
          formData.append('budget', answers.budget);
          formData.append('timeline', answers.timeline);
          formData.append('message', answers.notes);

          await handleSubmit(formData);
          setSubmissionState("success");
        } catch (err) {
          setSubmissionState("error");
        }
      };

      const iv = setInterval(() => {
        const pct = Math.min(100, Math.round(((Date.now() - start) / 2000) * 100));
        setProgress(pct);
        if (pct >= 100) {
          clearInterval(iv);
          setTimeout(() => submitForm(), 200);
        }
      }, 50);
    }
  }, [step, answers]);

  const submit = () => {
    const v = input.trim();
    if (step === 1) {
      if (!v) return;
      const name = v.slice(0, 80);
      setAnswers((a) => ({ ...a, name }));
      setHistory((p) => [...p, ans(v), sys(`> Nice to meet you, ${name}. Let's continue.`)]);
      setInput(""); setStep(2);
    } else if (step === 2) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
        setHistory((p) => [...p, ans(v), warn("> ⚠ That doesn't look like a valid email. Try again:")]);
        setInput(""); setEmailError(true);
        return;
      }
      setAnswers((a) => ({ ...a, email: v }));
      setHistory((p) => [...p, ans(v)]);
      setInput(""); setEmailError(false); setStep(3);
    } else if (step === 3) {
      if (!v) return;
      setAnswers((a) => ({ ...a, company: v.slice(0, 120) }));
      setHistory((p) => [...p, ans(v)]);
      setInput(""); setStep(4);
    } else if (step === 4) {
      const n = parseInt(v, 10);
      if (!(n >= 1 && n <= 7)) return;
      const svc = SERVICES[n - 1];
      setAnswers((a) => ({ ...a, service: svc }));
      setHistory((p) => [...p, { kind: "ans", text: svc } as Line]);
      setInput(""); setStep(5);
    } else if (step === 5) {
      const n = parseInt(v, 10);
      if (!(n >= 1 && n <= 6)) return;
      const b = BUDGETS[n - 1];
      setAnswers((a) => ({ ...a, budget: b }));
      setHistory((p) => [...p, ans(b)]);
      setInput(""); setStep(6);
    } else if (step === 6) {
      const n = parseInt(v, 10);
      if (!(n >= 1 && n <= 4)) return;
      const t = TIMELINES[n - 1];
      setAnswers((a) => ({ ...a, timeline: t }));
      setHistory((p) => [...p, ans(t)]);
      setInput(""); setStep(7);
    } else if (step === 7) {
      const notes = v ? v.slice(0, 1000) : "(skipped)";
      setAnswers((a) => ({ ...a, notes }));
      setHistory((p) => [...p, ans(notes)]);
      setInput(""); setStep(8);
    }
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") { e.preventDefault(); submit(); }
  };

  // particles drift
  const particles = useRef<{ x: number; y: number; vx: number; vy: number; o: number }[]>(
    Array.from({ length: 30 }, () => ({
      x: Math.random() * 100, y: Math.random() * 100,
      vx: (Math.random() - 0.5) * 0.02, vy: (Math.random() - 0.5) * 0.02,
      o: 0.15 + Math.random() * 0.35,
    }))
  );
  const [, force] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      for (const p of particles.current) {
        p.x = (p.x + p.vx + 100) % 100;
        p.y = (p.y + p.vy + 100) % 100;
      }
      force((x) => x + 1);
    }, 80);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden" style={{ background: "#0a0810", color: "#fff" }}>
      {/* Background plasma blobs */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(194,24,91,0.08), transparent 60%)" }} />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(61,16,96,0.08), transparent 60%)" }} />
      <div className="pointer-events-none absolute inset-0 ce-grid opacity-40" />
      {/* Particles */}
      <div className="pointer-events-none absolute inset-0">
        {particles.current.map((p, i) => (
          <span key={i} className="absolute rounded-full"
            style={{
              left: `${p.x}%`, top: `${p.y}%`, width: 3, height: 3,
              background: ROSE, opacity: p.o, boxShadow: `0 0 6px ${ROSE}`,
            }} />
        ))}
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center px-5 md:px-8 justify-between"
        style={{ background: "rgba(10,8,16,0.90)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(194,24,91,0.18)" }}>
        <Link to="/" className="flex items-center gap-2.5">
          <img src={ceLogo} alt="CoreEgin" width={26} height={26} className="w-[26px] h-[26px] object-contain" />
          <span style={{ fontFamily: "Clash Display, sans-serif", fontSize: 16, fontWeight: 700 }}>
            <span className="text-white">CORE</span><span style={{ color: ROSE }}>EGIN</span>
          </span>
        </Link>
        <div className="hidden md:block text-[12px] tracking-[0.3em]" style={{ color: ROSE, fontFamily: "JetBrains Mono" }}>
          // PROJECT INTAKE SYSTEM
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-2 text-[11px]" style={{ color: GREEN, fontFamily: "JetBrains Mono" }}>
            <span className="w-1.5 h-1.5 rounded-full ce-blink" style={{ background: GREEN }} />
            SYSTEM ONLINE
          </span>
          <Link to="/" className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] tracking-[0.18em] uppercase rounded-full transition-colors hover:text-white"
            style={{ color: "#c084a8", border: "1px solid rgba(194,24,91,0.35)", fontFamily: "JetBrains Mono" }}>
            <ArrowLeft size={12} /> Back
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center text-[13px] mb-5" style={{ color: GREEN, fontFamily: "JetBrains Mono" }}>
          <Typewriter text="> COREEGIN PROJECT INTAKE — INITIALIZED" delay={200} />
        </motion.div>

        <div className="relative w-full" style={{ maxWidth: 780 }}>
          {/* Side decorations */}
          <div className="hidden lg:block absolute -left-10 top-1/2 -translate-y-1/2 origin-center"
            style={{ transform: "translateY(-50%) rotate(-90deg)", color: ROSE, opacity: 0.4, fontFamily: "JetBrains Mono", fontSize: 10, letterSpacing: "0.3em", whiteSpace: "nowrap" }}>
            SECURE CONNECTION ESTABLISHED
          </div>
          <div className="hidden lg:block absolute -right-10 top-1/2 -translate-y-1/2 origin-center"
            style={{ transform: "translateY(-50%) rotate(90deg)", color: ROSE, opacity: 0.4, fontFamily: "JetBrains Mono", fontSize: 10, letterSpacing: "0.3em", whiteSpace: "nowrap" }}>
            COREEGIN — PROJECT INTAKE v2.0
          </div>

          {/* Terminal card */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden mx-auto w-[95vw] md:w-full"
            style={{
              maxWidth: 780,
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(194,24,91,0.25)",
              borderRadius: 16,
              boxShadow: "0 0 60px rgba(194,24,91,0.12)",
            }}>
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3"
              style={{ borderBottom: "1px solid rgba(194,24,91,0.15)" }}>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: "#ef4444" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#f59e0b" }} />
                <span className="w-2 h-2 rounded-full" style={{ background: "#22c55e" }} />
              </div>
              <div className="text-[11px]" style={{ color: "#9b8fa8", fontFamily: "JetBrains Mono" }}>
                COREEGIN — PROJECT_INTAKE.exe
              </div>
              <div className="text-[11px] tracking-widest" style={{ color: "#6b5675", fontFamily: "JetBrains Mono" }}>
                — □ ✕
              </div>
            </div>

            {/* Body */}
            <div className="relative">
              {/* Scanline */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
                <div className="absolute left-0 right-0 h-12" style={{
                  background: "linear-gradient(180deg, transparent, rgba(194,24,91,0.04), transparent)",
                  animation: "ce-scan 8s linear infinite",
                }} />
              </div>

              <div ref={scrollRef} className="relative p-5 md:p-8 overflow-y-auto"
                style={{ maxHeight: "60vh", fontFamily: "JetBrains Mono" }}>
                {history.map((l, i) => (
                  <div key={i} className="leading-relaxed text-[13px] md:text-[14px]"
                    style={{
                      color:
                        l.kind === "ask" ? ROSE :
                        l.kind === "ans" ? "#fff" :
                        l.kind === "warn" ? AMBER :
                        l.kind === "ok" ? GREEN :
                        l.kind === "rule" ? "rgba(194,24,91,0.4)" :
                        l.kind === "blank" ? "transparent" : "#9b8fa8",
                      whiteSpace: "pre-wrap",
                    }}>
                    {l.text || "\u00A0"}
                  </div>
                ))}

                {/* Progress bar during processing */}
                {step === 8 && (
                  <div className="mt-2 mb-1 h-2 w-full rounded-full overflow-hidden"
                    style={{ background: "rgba(194,24,91,0.12)" }}>
                    <div style={{
                      width: `${progress}%`, height: "100%",
                      background: `linear-gradient(90deg, #8b1a4a, ${ROSE})`,
                      boxShadow: "0 0 12px rgba(194,24,91,0.6)",
                      transition: "width 80ms linear",
                    }} />
                  </div>
                )}

                {/* Active input line */}
                {step >= 1 && step <= 7 && (
                  <div className="flex items-center gap-2 text-[13px] md:text-[14px]">
                    <span style={{ color: ROSE }}>›</span>
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={onKey}
                      autoFocus
                      inputMode={step === 4 || step === 5 || step === 6 ? "numeric" : "text"}
                      className="flex-1 bg-transparent outline-none text-white"
                      style={{ fontFamily: "JetBrains Mono", caretColor: ROSE }}
                      placeholder=""
                      aria-label="terminal input"
                    />
                    <span className="ce-blink" style={{ color: ROSE }}>█</span>
                  </div>
                )}

                {/* Final buttons */}
                {step === 9 && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-6 flex flex-wrap gap-3 justify-center">
                    <Link to="/" className="px-6 py-3 text-[12px] tracking-[0.18em] uppercase rounded-full transition-all hover:scale-[1.03]"
                      style={{ fontFamily: "Clash Display", color: "#fff", border: `1px solid ${ROSE}`, background: "transparent" }}>
                      ← Back to Homepage
                    </Link>
                    <a href="/#services" className="px-6 py-3 text-[12px] tracking-[0.18em] uppercase rounded-full text-white transition-all hover:scale-[1.03]"
                      style={{ fontFamily: "Clash Display", background: `linear-gradient(135deg, #8b1a4a, ${ROSE})`, boxShadow: "0 0 30px rgba(194,24,91,0.45)" }}>
                      View Our Services →
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Bottom info */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 text-[11px]" style={{ color: "#9b8fa8", fontFamily: "JetBrains Mono" }}>
              <Lock size={11} /> Your information is secure and will never be shared.
            </div>
            <div className="mt-2 text-[12px]" style={{ fontFamily: "JetBrains Mono" }}>
              <a href="mailto:contact@coreegin.com" style={{ color: ROSE }} className="hover:underline">contact.coreegin.com</a>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @keyframes ce-scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(2400%); }
        }
      `}</style>
    </div>
  );
}

function Typewriter({ text, delay = 0 }: { text: string; delay?: number }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    const start = setTimeout(() => {
      const iv = setInterval(() => {
        i++;
        setOut(text.slice(0, i));
        if (i >= text.length) clearInterval(iv);
      }, 800 / Math.max(1, text.length));
    }, delay);
    return () => clearTimeout(start);
  }, [text, delay]);
  return <span>{out}<span className="ce-blink">█</span></span>;
}

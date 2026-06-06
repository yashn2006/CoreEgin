import { Linkedin, Instagram, Dribbble } from "lucide-react";
import ceLogo from "@/assets/ce-logo.png";

export function Footer() {
  return (
    <footer style={{ background: "#07050f", borderTop: "1px solid rgba(139,26,74,0.15)" }} className="px-6 md:px-20 py-16">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-10 items-start">
        <div>
          <div className="flex items-center gap-3">
            <img src={ceLogo} alt="CoreEgin" width={36} height={36} className="w-9 h-9 object-contain" />
            <span style={{ fontFamily: "Clash Display", fontSize: 20, fontWeight: 700 }}>
              <span className="text-white">CORE</span><span style={{ color: "#c2185b" }}>EGIN</span>
            </span>
          </div>
          <p className="mt-4 text-[13px]" style={{ color: "#9b8fa8", fontFamily: "Inter" }}>From Pixel to Protocol.</p>
        </div>
        <nav className="flex flex-wrap gap-6 md:justify-center">
          {[
            ["Services", "#services"],
            ["Process", "#process"],
            ["About", "#founders"],
            ["Contact", "#contact"],
          ].map(([l, h]) => (
            <a key={l} href={h} className="text-[13px] transition-colors hover:text-[#c2185b]" style={{ color: "#9b8fa8", fontFamily: "Inter" }}>{l}</a>
          ))}
        </nav>
        <div className="flex gap-3 md:justify-end">
          {[Linkedin, Instagram, Dribbble].map((Icon, i) => (
            <a key={i} href="#" aria-label="social" className="ce-glass w-10 h-10 rounded-full flex items-center justify-center hover:border-[rgba(194,24,91,0.5)] transition">
              <Icon size={16} style={{ color: "#c2185b" }} />
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-[1400px] mx-auto mt-10 pt-6 flex flex-col md:flex-row justify-between gap-3 text-[11px]"
        style={{ borderTop: "1px solid rgba(139,26,74,0.1)", color: "#9b8fa8", fontFamily: "JetBrains Mono" }}>
        <span>© 2025 CoreEgin. All rights reserved.</span>
        <span>Mumbai, India · Full-Spectrum Digital Engineering</span>
      </div>
    </footer>
  );
}

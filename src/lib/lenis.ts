import Lenis from "lenis";
import { gsap } from "./gsap";

let lenisInstance: Lenis | null = null;

export function initLenis(): Lenis | null {
  if (typeof window === "undefined") return null;
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });

  const ticker = (time: number) => {
    lenisInstance?.raf(time * 1000);
  };
  gsap.ticker.add(ticker);
  gsap.ticker.lagSmoothing(0);

  return lenisInstance;
}

export function destroyLenis() {
  lenisInstance?.destroy();
  lenisInstance = null;
}

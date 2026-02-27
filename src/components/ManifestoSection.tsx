import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useEffect, useRef, useState } from "react";

const ManifestoSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top;
      setScrollY(progress);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className="relative py-20 md:py-32 overflow-hidden"
      style={{ background: "#111111" }}
    >
      <style>{`
        .ghost-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
          font-family: serif;
          font-weight: 900;
          font-size: clamp(5rem, 15vw, 14rem);
          color: rgba(255,255,255,0.06);
          letter-spacing: -2px;
          pointer-events: none;
          user-select: none;
          will-change: transform;
        }
      `}</style>

      {/* Parallax ghost text behind */}
      <div
        className="ghost-text"
        style={{ transform: `translate(calc(-50% + ${scrollY * 0.18}px), calc(-50% - 8rem))` }}
      >
        BALANCE
      </div>
      <div
        className="ghost-text"
        style={{
          transform: `translate(calc(-50% - ${scrollY * 0.14}px), calc(-50% + 8rem))`,
          fontSize: "clamp(4rem, 12vw, 11rem)",
          color: "rgba(255,255,255,0.04)",
        }}
      >
        NOT ENOUGH
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}
      >
        <p className="font-handwritten text-2xl text-primary mb-6">✦ Our Manifesto</p>

        <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-white">
          Clean alone is{" "}
          <span className="line-through opacity-40">not enough</span>.
        </h2>

        <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-primary mt-4">
          Balance is.
        </h2>

        <p className="body-mono mt-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
          Plainfuel exists to make balance simple, affordable, and practical — once and for all.
        </p>

        {/* Doodle divider */}
        <div className="mt-12 flex justify-center">
          <svg className="w-24 h-12 text-primary" viewBox="0 0 100 50" fill="none">
            <path d="M10 40 Q25 10 50 25 Q75 40 90 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;
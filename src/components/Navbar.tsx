import logo from "@/assets/plainfuel-logo.jpeg";
import { useState, useEffect } from "react";

const tickerItems = [
  "PROTEIN + FIBRE",
  "MICRONUTRIENTS",
  "ONE SIMPLE ADDITION",
  "NO MORE STACKING",
  "COMPLETE YOUR MEALS",
  "BALANCE OVER TRENDS",
  "CLEAN LABEL",
  "NOTHING TO HIDE",
  "INDIA'S FIRST",
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 28s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.55)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.3)",
          boxShadow: scrolled
            ? "0 4px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)"
            : "0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        {/* ── Main nav row ── */}
        <div className="max-w-[1400px] mx-auto flex items-center justify-between py-3 px-6 md:px-10">

          {/* Logo only — larger and sharp */}
          <a href="/" className="flex items-center group">
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                width: 52,
                height: 52,
                boxShadow: "0 2px 12px rgba(0,0,0,0.12)",
                border: "1.5px solid rgba(255,255,255,0.8)",
              }}
            >
              <img
                src={logo}
                alt="Plainfuel"
                className="w-full h-full object-cover"
              />
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7 font-body text-sm text-foreground">
            <a href="#story"   className="hover:text-primary transition-colors font-medium">Our Story</a>
            <a href="#balance" className="hover:text-primary transition-colors font-medium">The Balance</a>
            <a href="#product" className="hover:text-primary transition-colors font-medium">What's Inside</a>
            <a href="#why"     className="hover:text-primary transition-colors font-medium">Why Us</a>
          </nav>

          {/* CTA */}
          <a href="#cta" className="pill-btn-filled !text-sm">
            Join Waitlist →
          </a>
        </div>

      
      </header>
    </>
  );
};

export default Navbar;
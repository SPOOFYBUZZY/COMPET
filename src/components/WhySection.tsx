import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Finally a clean label protein I can actually trust.",
    name: "Amaan Bakali",
    role: "Owner and Coach at Crossfit Third Eye",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&q=80",
  },
  {
    quote: "Doesn't taste like supplements — tastes like real food.",
    name: "Prorna Maarvikurne",
    role: "Student of Oberoi International",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80",
  },
  {
    quote: "No fillers, no fluff. Just what my body needs.",
    name: "Shailin Suvarna",
    role: "Artist Internships, India Partner",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
  },
  {
    quote: "The only brand that was honest about what's inside.",
    name: "Arjun Singh",
    role: "Partnerships at Thought Over Design",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
  },
];

const WhySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <style>{`
        @keyframes heartPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.18); }
        }
        @keyframes heartGlow {
          0%, 100% { filter: drop-shadow(0 0 6px rgba(192, 57, 90, 0.3)); }
          50%       { filter: drop-shadow(0 0 18px rgba(192, 57, 90, 0.65)); }
        }
        .heart-pulse {
          animation: heartPulse 1.6s ease-in-out infinite, heartGlow 1.6s ease-in-out infinite;
          transform-box: fill-box;
          transform-origin: center;
        }
        #review-scroll::-webkit-scrollbar { display: none; }
        #review-scroll { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section id="why" ref={ref} className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col items-center text-center">

          {/* ── Header ── */}
          <Parallax translateY={[-20, 20]}>
            <motion.div
              className={`mb-10 w-full ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              initial={{ opacity: 0, x: 80 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-1.5 bg-white border border-primary/30 rounded-full px-3 py-1 shadow-sm mb-4">
                <span className="text-primary text-xs">♥</span>
                <span className="font-body text-xs font-bold text-primary">226K</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <h2 className="heading-lg leading-none">
                  Real <span className="text-primary">people</span>. Real <span className="text-primary">love</span>.
                </h2>
                <p className="body-mono text-sm text-muted-foreground">
                  100% honest reviews from real customers.
                </p>
              </div>
            </motion.div>
          </Parallax>

          {/* ── Review cards — stretch to fill full width ── */}
          <div
            id="review-scroll"
            className={`flex gap-4 overflow-x-auto pb-4 w-full ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{ flex: "1 1 0", minWidth: "200px" }}
                className="border border-gray-200 rounded-2xl p-4 flex flex-col justify-between bg-white hover:shadow-md transition-shadow"
              >
                <p className="font-heading text-base leading-snug text-foreground mb-4 text-left">
                  "{t.quote}"
                </p>
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-full h-[140px] object-cover rounded-xl mb-3"
                />
                <div className="flex items-end justify-between gap-1">
                  <div className="text-left">
                    <p className="font-body text-sm font-bold text-foreground">{t.name}</p>
                    <p className="font-body text-xs text-muted-foreground leading-tight">{t.role}</p>
                  </div>
                  <span className="text-primary text-base flex-shrink-0">→</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Progress bar ── */}
          <div
            className={`mt-5 mb-14 h-[2px] bg-gray-200 rounded-full w-[200px] ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-full w-1/2 bg-primary rounded-full" />
          </div>

          {/* ── Heart + CTA ── */}
          <div
            className={`flex flex-col items-center gap-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s" }}
          >
            <svg viewBox="0 0 200 180" fill="none" className="w-44 h-44" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="100" cy="95" rx="72" ry="66" stroke="#c0395a" strokeWidth="1.2" opacity="0.15" />
              <ellipse cx="100" cy="95" rx="56" ry="50" stroke="#c0395a" strokeWidth="1.5" opacity="0.25" />
              <g className="heart-pulse">
                <path
                  d="M100 125
                     C80 110, 52 92, 52 70
                     C52 54, 64 44, 76 44
                     C85 44, 94 50, 100 58
                     C106 50, 115 44, 124 44
                     C136 44, 148 54, 148 70
                     C148 92, 120 110, 100 125Z"
                  fill="#c0395a"
                  fillOpacity="0.12"
                  stroke="#c0395a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M84 58 C80 62, 78 68, 80 74"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.5"
                />
              </g>
            </svg>

            <a
              href="#love"
              className="inline-flex items-center gap-2 border border-foreground rounded-full px-6 py-3 font-body text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
            >
              Head to our wall of infinite love →
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

export default WhySection;
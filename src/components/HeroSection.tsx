import { useState, useEffect } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";

const slides = [
  {
    id: 1,
    productImg: "/products/1.png",
    floatingImg: "/products/2.png",
    label: "Double Cocoa Protein Bar",
  },
  {
    id: 2,
    productImg: "/products/3.png",
    floatingImg: "/products/4.png",
    label: "Whey Protein",
  },
  {
    id: 3,
    productImg: "/products/5.png",
    floatingImg: "/products/6.png",
    label: "Unsweetened Peanut Butter",
  },
];

// Slide 1 — just an arrow + lightning + small spiral
const Doodles1 = ({ animKey }: { animKey: number }) => {
  const s = "#53976D";
  const d = (len: number, delay: number) => ({
    strokeDasharray: len, strokeDashoffset: len,
    animation: `doodleDraw 0.5s ${delay}s cubic-bezier(0.4,0,0.2,1) forwards`,
    opacity: 0 as const,
  });
  return (
    <svg key={animKey} className="absolute pointer-events-none"
      style={{ inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      viewBox="0 0 600 560" fill="none">
      {/* Arrow → top-left edge */}
      <path d="M 108 74 C 132 70, 160 67, 180 66" stroke={s} strokeWidth={3.5} strokeLinecap="round" style={d(76, 0.04)} />
      <path d="M 168 57 L 181 66 L 168 76" stroke={s} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={d(30, 0.3)} />
      {/* Lightning right-upper */}
      <path d="M 522 138 L 538 160 L 524 163 L 542 186" stroke={s} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={d(72, 0.08)} />
      {/* Small spiral left-center */}
      <path d="M 120 252 C 108 242,92 248,96 262 C 100 276,118 278,128 268 C 136 258,128 244,116 244" stroke={s} strokeWidth={2.5} strokeLinecap="round" style={d(110, 0.14)} />
    </svg>
  );
};

// Slide 2 — heart + single wavy line
const Doodles2 = ({ animKey }: { animKey: number }) => {
  const s = "#53976D";
  const d = (len: number, delay: number) => ({
    strokeDasharray: len, strokeDashoffset: len,
    animation: `doodleDraw 0.5s ${delay}s ease forwards`,
    opacity: 0 as const,
  });
  return (
    <svg key={animKey} className="absolute pointer-events-none"
      style={{ inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      viewBox="0 0 600 560" fill="none">
      {/* Heart left-upper */}
      <path d="M 128 76 C 128 66,116 62,111 70 C 106 62,94 66,94 76 C 94 88,111 100,111 100 C 111 100,128 88,128 76 Z"
        stroke={s} strokeWidth={2.8} strokeLinecap="round" strokeLinejoin="round" style={d(108, 0.05)} />
      {/* Wavy line bottom edge */}
      <path d="M 170 534 C 192 524, 212 542, 236 532 C 260 522, 280 540, 304 530"
        stroke={s} strokeWidth={2.5} strokeLinecap="round" style={d(170, 0.1)} />
      {/* Curling tendril right-center */}
      <path d="M 550 268 C 564 256,576 266,570 280 C 564 294,548 292,544 280 C 540 268,550 258,560 262"
        stroke={s} strokeWidth={2.5} strokeLinecap="round" style={d(110, 0.16)} />
    </svg>
  );
};

// Slide 3 — open triangle + two clean angle brackets
const Doodles3 = ({ animKey }: { animKey: number }) => {
  const s = "#53976D";
  const d = (len: number, delay: number) => ({
    strokeDasharray: len, strokeDashoffset: len,
    animation: `doodleDraw 0.5s ${delay}s cubic-bezier(0.2,0.8,0.4,1) forwards`,
    opacity: 0 as const,
  });
  return (
    <svg key={animKey} className="absolute pointer-events-none"
      style={{ inset: 0, width: "100%", height: "100%", zIndex: 0 }}
      viewBox="0 0 600 560" fill="none">
      {/* Open triangle top-left */}
      <path d="M 98 92 L 128 54 L 158 92" stroke={s} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={d(88, 0.04)} />
      {/* Angle bracket right-center */}
      <path d="M 520 252 L 544 276 L 520 300" stroke={s} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={d(68, 0.08)} />
      {/* Bold tick bottom-left */}
      <path d="M 100 476 L 116 496 L 148 452" stroke={s} strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" style={d(66, 0.12)} />
    </svg>
  );
};

// Route to correct doodle component based on slide index
const DoodleMarks = ({ animKey, slideIndex }: { animKey: number; slideIndex: number }) => {
  if (slideIndex === 0) return <Doodles1 animKey={animKey} />;
  if (slideIndex === 1) return <Doodles2 animKey={animKey} />;
  return <Doodles3 animKey={animKey} />;
};

const Star = ({ className, style }: { className: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2 L13.5 9.5 L21 9.5 L15 13.8 L17.5 21 L12 17 L6.5 21 L9 13.8 L3 9.5 L10.5 9.5 Z" />
  </svg>
);

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [current, setCurrent] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const goTo = (index: number) => {
    if (index === current) return;
    setExiting(true);
    setTimeout(() => {
      setCurrent(index);
      setExiting(false);
      setAnimKey((k) => k + 1);
    }, 360);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setExiting(false);
        setAnimKey((k) => k + 1);
      }, 360);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <ParallaxProvider>
    <>
      <style>{`
        @keyframes doodleDraw {
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes productIn {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
        @keyframes productOut {
          from { opacity: 1; transform: translateY(0)     scale(1);    }
          to   { opacity: 0; transform: translateY(-20px) scale(0.96); }
        }
        @keyframes floatBob {
          0%, 100% { transform: translateY(0px)   rotate(-3deg); }
          50%       { transform: translateY(-9px)  rotate(-3deg); }
        }
        .product-in  { animation: productIn  0.45s cubic-bezier(0.22,1,0.36,1) forwards; }
        .product-out { animation: productOut 0.32s ease-in forwards; }
        .float-bob   { animation: floatBob 3.5s ease-in-out infinite; }
      `}</style>

      <section ref={ref} className="relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* ── Left: Heading ── */}
            <Parallax speed={-10}>
              <motion.div
                className={`space-y-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                initial={{ opacity: 0, x: -80 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h1 className="heading-xl">
                  We're re-building<br />
                  the world's <span className="underline-draw">trust</span><br />
                  in food.
                </h1>

              <p className="body-mono max-w-md">
                We're India's first 100%<br />
                clean-label food brand&nbsp;
                <Star className="inline w-4 h-4 text-primary align-middle" />
                <Star className="inline w-3 h-3 text-primary align-middle opacity-60 ml-0.5" />
              </p>

                <a href="#story" className="pill-btn inline-flex">
                <span className="font-handwritten text-lg">Short story looong of why we exist</span>
                <span>→</span>
              </a>

              {/* Slide dots */}
                <div className="flex gap-2 pt-2">
                {slides.map((s, i) => (
                  <button
                    key={s.id}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-green-600 w-6" : "bg-gray-300 w-2"
                    }`}
                  />
                ))}
              </div>
              </motion.div>
            </Parallax>

            {/* ── Right: Image + Doodles ── */}
            <Parallax speed={15}>
              <div
                className={`relative h-[440px] lg:h-[520px] ${isVisible ? "animate-scale-up" : "opacity-0"}`}
                style={{ animationDelay: "0.2s" }}
              >
              {/* Doodle marks — z-0, product at z-20 sits on top of them */}
              {!exiting && <DoodleMarks animKey={animKey} slideIndex={current} />}

              {/* Sparkle stars */}
              <Star className="absolute top-10 left-6 w-8 h-8 text-primary" style={{ zIndex: 10 }} />
              <Star className="absolute top-[4.8rem] left-14 w-5 h-5 text-primary opacity-55" style={{ zIndex: 10 }} />

              {/* 
                Main product image — transparent PNG
                - No background, no rounded corners, no shadow on container
                - object-contain preserves transparency
                - Drop shadow via filter for depth without a box background
              */}
              <div
                key={`main-${current}`}
                className={`absolute inset-0 flex items-end justify-end ${
                  exiting ? "product-out" : "product-in"
                }`}
                style={{ zIndex: 20 }}
              >
                <img
                  src={slide.productImg}
                  alt={slide.label}
                  className="w-[82%] h-[90%] object-contain"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.18))",
                  }}
                />
              </div>

              {/* 
                Floating accent image — transparent PNG
                - No background box, no overflow:hidden (would clip transparency)
                - drop-shadow filter for depth
              */}
              <div
                key={`float-${current}`}
                className={`absolute top-2 right-2 w-32 h-32 float-bob ${
                  exiting ? "product-out" : "product-in"
                }`}
                style={{ zIndex: 30 }}
              >
                <img
                  src={slide.floatingImg}
                  alt="accent"
                  className="w-full h-full object-contain"
                  style={{
                    filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.15))",
                  }}
                />
              </div>
              </div>
            </Parallax>

          </div>
        </div>
      </section>
    </>
    </ParallaxProvider>
  );
};

export default HeroSection;
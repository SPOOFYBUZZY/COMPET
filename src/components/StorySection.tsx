import heroFood from "@/assets/hero-food.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

const StorySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <>
      {/* "The internet told us..." section */}
      <section id="story" ref={ref} className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-center">

            <Parallax translateY={[-30, 30]}>
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="heading-lg">
                  The internet<br />
                  told us our<br />
                  food was{" "}
                  <span className="underline-draw">broken</span>.
                </h2>
                <div className="mt-8 space-y-4">
                  <p className="body-mono">
                    First, it was protein. Then fibre.<br />
                    Then micronutrients. Then gut health.
                  </p>
                  <p className="body-mono">
                    Each trend showed{" "}
                    <span className="font-bold text-foreground">only half the picture</span>.
                  </p>
                  <p className="body-mono italic">
                    And half-truths create extremes.
                  </p>
                </div>
              </motion.div>
            </Parallax>

            {/* Right: Venn Diagram — circles slide in from sides on scroll */}
            <div className="flex items-center justify-center relative mx-auto w-full" style={{ minHeight: 360, maxWidth: 460 }}>

              {/* Base SVG layer — overlap, labels, annotations (fades in after circles meet) */}
              <svg
                viewBox="0 0 440 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[460px] absolute inset-0"
              >
                {/* Overlap fill */}
                <motion.path
                  d="M 220 72 A 120 120 0 0 1 220 284 A 120 120 0 0 1 220 72 Z"
                  fill="#53976D" fillOpacity="0.18"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                />

                {/* Left label */}
                <motion.text x="132" y="172" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="14" fill="#53976D" fontWeight="600"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}>What</motion.text>
                <motion.text x="132" y="192" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="14" fill="#53976D" fontWeight="600"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.15 }}>you eat</motion.text>

                {/* Right label */}
                <motion.text x="308" y="172" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="14" fill="#53976D" fontWeight="600"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}>What</motion.text>
                <motion.text x="308" y="192" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="14" fill="#53976D" fontWeight="600"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.25 }}>you know</motion.text>

                {/* Center overlap label */}
                <motion.text x="220" y="170" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="12" fill="#53976D" fontWeight="700"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 }}>Plain</motion.text>
                <motion.text x="220" y="188" textAnchor="middle"
                  fontFamily="'Courier New', monospace" fontSize="12" fill="#53976D" fontWeight="700"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.35 }}>fuel</motion.text>

                {/* Top annotation */}
                <motion.text x="220" y="24" textAnchor="middle"
                  fontFamily="'Georgia', serif" fontSize="12" fill="#53976D" fontStyle="italic"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.4 }}>We're working on</motion.text>
                <motion.text x="220" y="40" textAnchor="middle"
                  fontFamily="'Georgia', serif" fontSize="12" fill="#53976D" fontStyle="italic"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: 1.45 }}>closing the gap</motion.text>

                {/* Arrow down to overlap */}
                <motion.path d="M 220 46 C 220 58, 220 66, 220 80"
                  stroke="#53976D" strokeWidth="1.8" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1.5 }} />
                <motion.path d="M 213 74 L 220 84 L 227 74"
                  stroke="#53976D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1.55 }} />

                {/* Barry mascot */}
                <motion.g
                  initial={{ opacity: 0, y: 12 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.6 }}
                >
                  <circle cx="376" cy="294" r="24" stroke="#53976D" strokeWidth="2.2" fill="white" />
                  <path d="M 360 274 L 355 260 M 369 270 L 367 256 M 378 269 L 380 255 M 387 272 L 393 259"
                    stroke="#53976D" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="368" cy="290" r="2.8" fill="#53976D" />
                  <circle cx="384" cy="290" r="2.8" fill="#53976D" />
                  <path d="M 366 302 C 371 308, 381 308, 386 302"
                    stroke="#53976D" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <text x="376" y="334" textAnchor="middle"
                    fontFamily="'Georgia', serif" fontSize="12.5" fill="#53976D" fontStyle="italic">
                    This is Plainfuel!
                  </text>
                </motion.g>

                {/* Arrow from Barry toward overlap */}
                <motion.path d="M 352 288 C 325 276, 295 262, 264 246"
                  stroke="#53976D" strokeWidth="1.8" strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.65 }} />
                <motion.path d="M 271 237 L 263 247 L 275 252"
                  stroke="#53976D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ opacity: 0 }} animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3, delay: 1.75 }} />
              </svg>

              {/* LEFT circle — slides in from the left */}
              <motion.svg
                viewBox="0 0 440 360" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[460px] absolute inset-0 pointer-events-none"
                initial={{ x: -180, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: -180, opacity: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <circle cx="172" cy="178" r="120"
                  stroke="#53976D" strokeWidth="2.5"
                  fill="#53976D" fillOpacity="0.06" />
              </motion.svg>

              {/* RIGHT circle — slides in from the right */}
              <motion.svg
                viewBox="0 0 440 360" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full max-w-[460px] absolute inset-0 pointer-events-none"
                initial={{ x: 180, opacity: 0 }}
                animate={isVisible ? { x: 0, opacity: 1 } : { x: 180, opacity: 0 }}
                transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <circle cx="268" cy="178" r="120"
                  stroke="#53976D" strokeWidth="2.5"
                  fill="#53976D" fillOpacity="0.06" />
              </motion.svg>

            </div>

          </div>
        </div>
      </section>

      {/* Thumbnail cards section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="relative">
            <button
              onClick={() => {
                const el = document.getElementById('thumb-scroll');
                if (el) el.scrollBy({ left: -340, behavior: 'smooth' });
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
            >←</button>
            <button
              onClick={() => {
                const el = document.getElementById('thumb-scroll');
                if (el) el.scrollBy({ left: 340, behavior: 'smooth' });
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center shadow-sm hover:bg-gray-50 transition-colors"
            >→</button>

            <div
              id="thumb-scroll"
              className="flex gap-6 overflow-x-auto scroll-smooth pb-2 justify-center"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {/* Card 1 — Our Story */}
              <div className="flex-none w-[300px]">
                <div className="rounded-xl overflow-hidden mb-3 h-[180px] bg-[#1a0a0f] flex flex-col items-start justify-end p-5 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#53976D]/30 to-[#1a0a0f]" />
                  <div className="relative z-10">
                    <p className="text-white/50 text-xs uppercase tracking-widest mb-1 font-mono">Est. 2024</p>
                    <p className="text-white font-black text-2xl leading-tight" style={{ fontFamily: 'serif' }}>Plain.<br />Honest.<br />Real.</p>
                  </div>
                </div>
                <a href="#story" className="flex items-center justify-between group">
                  <span className="font-body font-bold text-foreground text-sm">Our Story</span>
                  <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="body-mono text-xs mt-1 text-muted-foreground">Why we started Plainfuel and<br />what we're building.</p>
              </div>

              {/* Card 2 — Ingredients */}
              <div className="flex-none w-[300px]">
                <div className="rounded-xl overflow-hidden mb-3 h-[180px] bg-[#1c1235] flex flex-col items-start justify-center px-5 gap-3">
                  <p className="text-white font-bold text-lg leading-tight">Ingredient<br />Dictionary</p>
                  <p className="text-white/60 text-xs">Found something you can't pronounce on the label? We'll tell you exactly what it is.</p>
                  <div className="flex items-center w-full bg-white rounded-lg px-3 py-2 gap-2">
                    <input readOnly placeholder='Search e.g. "Maltodextrin"' className="flex-1 text-xs text-gray-400 bg-transparent outline-none" />
                    <span className="text-gray-400 text-xs">🔍</span>
                  </div>
                </div>
                <a href="#ingredients" className="flex items-center justify-between group">
                  <span className="font-body font-bold text-foreground text-sm">What's Inside</span>
                  <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="body-mono text-xs mt-1 text-muted-foreground">100% transparent labels.<br />No hidden nasties.</p>
              </div>

              {/* Card 3 — Products */}
              <div className="flex-none w-[300px]">
                <div className="rounded-xl overflow-hidden mb-3 h-[180px] bg-[#e0ede6] flex flex-col items-center justify-center gap-2 px-4">
                  <p className="text-[#53976D] font-black text-xs uppercase tracking-widest">Clean Label</p>
                  <p className="text-foreground font-black text-xl text-center leading-tight" style={{ fontFamily: 'serif' }}>Protein. Fibre.<br />Micronutrients.<br />All in one.</p>
                  <span className="mt-1 px-3 py-1 rounded-full border border-[#53976D] text-[#53976D] text-xs font-mono">Shop Plainfuel →</span>
                </div>
                <a href="#products" className="flex items-center justify-between group">
                  <span className="font-body font-bold text-foreground text-sm">Our Products</span>
                  <span className="text-foreground group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <p className="body-mono text-xs mt-1 text-muted-foreground">India's first 100% clean-label<br />everyday food range.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section ref={ref2} className="relative py-12 md:py-16 overflow-hidden">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" style={{ zIndex: 0 }}>
          <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-primary" style={{ zIndex: 1, opacity: 0.82 }} />
        <div className={`relative max-w-[1400px] mx-auto px-6 md:px-10 ${isVisible2 ? 'animate-fade-up' : 'opacity-0'}`} style={{ zIndex: 2 }}>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img src={heroFood} alt="Balanced nutrition" className="w-full md:w-1/2 rounded-2xl max-h-72 object-cover" loading="lazy" />
            <div className="text-primary-foreground">
              <p className="font-handwritten text-3xl md:text-4xl mb-4">Revealed! The real problem 👇</p>
              <h3 className="font-heading text-3xl md:text-4xl leading-tight">
                It was never one nutrient.<br />
                It was always <em>imbalance</em>.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySection;
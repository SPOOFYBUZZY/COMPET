import productShot from "@/assets/product-shot.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const ProductSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [activeTab, setActiveTab] = useState<"powders" | "bars">("powders");

  return (
    <>
      <style>{`
        @keyframes dashMove {
          to { stroke-dashoffset: -20; }
        }
        .dash-anim {
          stroke-dasharray: 6 6;
          animation: dashMove 1s linear infinite;
        }
      `}</style>

      <section id="product" ref={ref} className="py-20 md:py-32 bg-secondary">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT: heading + body + PS + video pill ── */}
            <div
              className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <motion.div
                className={`space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
                initial={{ opacity: 0, x: -80 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <h2 className="heading-lg">
                  A bridge — not<br />
                  a <span className="underline-draw">replacement</span>.
                </h2>
                <p className="body-mono max-w-sm">
                  Between what your daily diet gives you and what your body consistently needs — we literally have <span className="font-bold">#nothingtohide</span>.
                </p>
                <p className="font-handwritten text-primary text-lg leading-snug">
                  PS— That's why we built Plainfuel.<br />
                  Not another supplement :)
                </p>
              </motion.div>

              {/* Video pill button — bottom of left col */}
              <div className="pt-4">
                <a
                  href="#product-video"
                  className="inline-flex items-center gap-3 border-2 border-primary rounded-2xl px-5 py-3 hover:bg-primary/5 transition-colors"
                  style={{ boxShadow: "3px 3px 0 #c0395a" }}
                >
                  <span className="w-9 h-9 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                      <path d="M8 5.5 L19 12 L8 18.5 Z" fill="#c0395a" />
                    </svg>
                  </span>
                  <span className="font-handwritten text-primary text-lg leading-tight">
                    Revealed! The secret<br />ingredient in our bars
                  </span>
                </a>
              </div>
            </div>

            {/* ── RIGHT: pink card with image + tabs + arrows ── */}
            <div
              className={`${isVisible ? "animate-scale-up" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-pink-50 rounded-3xl p-5">
                {/* Card header */}
                <div className="text-center mb-3">
                  <h3 className="font-heading text-base font-bold text-foreground">
                    Our Kitchen in 3D
                  </h3>
                  <p className="body-mono text-xs text-muted-foreground">
                    See where our products are made
                  </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-2 mb-4 justify-center">
                  {(["powders", "bars"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-1.5 rounded-full text-xs font-body font-bold border transition-all ${
                        activeTab === tab
                          ? "bg-white border-primary text-primary shadow-sm"
                          : "border-transparent text-muted-foreground hover:border-gray-300"
                      }`}
                    >
                      {tab === "powders" ? "Protein Powders" : "Protein Bars"}
                    </button>
                  ))}
                </div>

                {/* Image with dashed annotation arrows */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={productShot}
                    alt="Plainfuel product"
                    className="w-full h-[220px] object-cover rounded-2xl"
                    loading="lazy"
                  />
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 220"
                    fill="none"
                  >
                    <line x1="200" y1="10" x2="200" y2="80"
                      stroke="#1a1a2e" strokeWidth="1.5" className="dash-anim" />
                    <path d="M 193 74 L 200 84 L 207 74"
                      stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="10" y1="130" x2="90" y2="130"
                      stroke="#1a1a2e" strokeWidth="1.5" className="dash-anim" />
                    <path d="M 84 123 L 94 130 L 84 137"
                      stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="390" y1="130" x2="310" y2="130"
                      stroke="#1a1a2e" strokeWidth="1.5" className="dash-anim" />
                    <path d="M 316 123 L 306 130 L 316 137"
                      stroke="#1a1a2e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="200" cy="110" r="10" fill="white" stroke="#1a1a2e" strokeWidth="1.5" />
                    <path d="M 200 106 C 200 104,203 102,206 104 C 209 106,208 110,205 112 L 200 118 L 195 112 C 192 110,191 106,194 104 C 197 102,200 104,200 106 Z"
                      fill="#c0395a" />
                    <circle cx="370" cy="200" r="14" fill="#1a1a2e" />
                    <text x="370" y="205" textAnchor="middle"
                      fontFamily="monospace" fontSize="9" fill="white" fontWeight="bold">3D</text>
                  </svg>
                </div>

                {/* CTA */}
                <a
                  href="#tour"
                  className="mt-4 flex items-center justify-center gap-2 text-primary font-handwritten text-base hover:underline"
                >
                  <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
                      stroke="#c0395a" strokeWidth="2" />
                    <circle cx="12" cy="10" r="3" stroke="#c0395a" strokeWidth="2" />
                  </svg>
                  Click here to step into our kitchen
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
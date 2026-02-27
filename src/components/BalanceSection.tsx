import balanceFood from "@/assets/balance-food.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";

const BalanceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <>
      <style>{`
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .spin-slow {
          animation: slowSpin 40s linear infinite;
        }
      `}</style>

      <section id="balance" ref={ref} className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <Parallax translateY={[-20, 20]}>
              <motion.div
                className={`relative flex items-center justify-center ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}
                initial={{ opacity: 0, x: 80 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                {/* Spinning food circle */}
                <div className="spin-slow w-full max-w-lg mx-auto">
                  <img
                    src={balanceFood}
                    alt="Circle of balanced foods"
                    className="w-full object-contain"
                    style={{ filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.10))" }}
                    loading="lazy"
                  />
                </div>
                {/* Badge — counter-rotates so it stays upright */}
                <div
                  className="absolute -top-2 right-8 bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center animate-wiggle"
                  style={{ zIndex: 10 }}
                >
                  <span className="font-heading text-lg font-bold">Balance</span>
                </div>
              </motion.div>
            </Parallax>

            {/* Right — text */}
            <div
              className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: '0.15s' }}
            >
              <h2 className="heading-lg">
                What we need<br />
                is <span className="underline-draw">balance</span>.
              </h2>
              <p className="body-mono">
                For years, it has been established that the human body requires a balance of carbohydrates, fats, fibre, protein, and essential micronutrients.
              </p>
              <p className="body-mono">
                They are not optional. Chronic deficiencies can quietly damage the body over time.
              </p>
              <p className="body-mono font-bold text-foreground">
                That is why we built Plainfuel.
              </p>
              <div className="pt-4">
                <a href="#product" className="pill-btn">
                  <span className="font-handwritten text-lg">See what's inside →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BalanceSection;
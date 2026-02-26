import heroFood from "@/assets/hero-food.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const StorySection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  return (
    <>
      {/* "We make real food" section */}
      <section id="story" ref={ref} className="py-20 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
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
            </div>

            <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-scale-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-2">💪</span>
                <span className="font-body text-xs font-bold text-foreground">Protein</span>
                <span className="font-handwritten text-primary text-sm mt-1">2018's obsession</span>
              </div>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-2">🌾</span>
                <span className="font-body text-xs font-bold text-foreground">Fibre</span>
                <span className="font-handwritten text-primary text-sm mt-1">2020's obsession</span>
              </div>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-2">💊</span>
                <span className="font-body text-xs font-bold text-foreground">Micronutrients</span>
                <span className="font-handwritten text-primary text-sm mt-1">2022's obsession</span>
              </div>
              <div className="bg-secondary rounded-2xl p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl mb-2">🦠</span>
                <span className="font-body text-xs font-bold text-foreground">Gut Health</span>
                <span className="font-handwritten text-primary text-sm mt-1">2024's obsession</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight strip */}
      <section ref={ref2} className="bg-primary py-12 md:py-16">
        <div className={`max-w-[1400px] mx-auto px-6 md:px-10 ${isVisible2 ? 'animate-fade-up' : 'opacity-0'}`}>
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

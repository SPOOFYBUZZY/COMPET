import lifestyle from "@/assets/lifestyle.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WhySection = () => {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    "Replaces 3-4 separate supplements",
    "More cost-effective than stacking",
    "Fits into busy routines",
    "No more overthinking every nutrient",
    "One simple addition to your meal",
  ];

  return (
    <section id="why" ref={ref} className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="heading-lg">
              It fits into<br />
              <span className="underline-draw">real life</span>.
            </h2>

            <p className="body-mono">
              No more remembering different pills.<br />
              No more stacking powders.<br />
              No more overthinking every nutrient.
            </p>

            <div className="space-y-3">
              {benefits.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-3 group"
                  style={{ animationDelay: `${0.1 * i}s` }}
                >
                  <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold font-body shrink-0">✓</span>
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`${isVisible ? 'animate-scale-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={lifestyle}
                alt="Person enjoying Plainfuel shake"
                className="w-full rounded-2xl shadow-xl"
                loading="lazy"
              />
              {/* Small handwritten annotation */}
              <div className="absolute -bottom-6 left-6 bg-background border border-border rounded-full px-5 py-2 shadow-md">
                <span className="font-handwritten text-lg text-primary">fits into your morning ☀️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

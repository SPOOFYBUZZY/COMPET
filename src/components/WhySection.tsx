import lifestyle from "@/assets/lifestyle.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const WhySection = () => {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    { icon: "🧴", text: "Replaces 3-4 separate supplements" },
    { icon: "💰", text: "More cost-effective than stacking" },
    { icon: "⏰", text: "Fits into busy routines" },
    { icon: "🧠", text: "No more overthinking every nutrient" },
    { icon: "🥤", text: "One simple addition to your meal" },
  ];

  return (
    <section id="why" ref={ref} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h2 className="section-heading">
              It fits into{" "}
              <span className="doodle-underline text-primary">real life.</span>
            </h2>
            <p className="section-body">
              No more remembering different pills. No more stacking powders.
              No more overthinking every nutrient.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div
                  key={benefit.text}
                  className={`flex items-center gap-4 p-4 bg-background rounded-xl hand-drawn-box transition-transform hover:scale-[1.02] duration-200 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                  style={{
                    animationDelay: `${0.2 + i * 0.1}s`,
                    transform: `rotate(${(i % 2 === 0 ? -0.5 : 0.5)}deg)`,
                  }}
                >
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="font-body font-semibold text-lg text-foreground">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="hand-drawn-box overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={lifestyle}
                alt="Person enjoying Plainfuel"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <svg className="absolute -top-8 -right-4 w-16 h-16 text-highlight animate-wiggle" viewBox="0 0 60 60" fill="none">
              <path d="M30 5 L35 20 L50 20 L38 30 L42 45 L30 35 L18 45 L22 30 L10 20 L25 20 Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

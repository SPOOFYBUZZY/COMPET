import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProblemSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const trends = [
    { label: "Protein", emoji: "💪" },
    { label: "Fibre", emoji: "🌾" },
    { label: "Micronutrients", emoji: "💊" },
    { label: "Gut Health", emoji: "🦠" },
    { label: "???", emoji: "🔄" },
  ];

  return (
    <section id="story" ref={ref} className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`max-w-3xl mx-auto text-center space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="section-heading">
            Half-truths create{" "}
            <span className="text-primary">extremes.</span>
          </h2>
          <p className="section-body">
            We don't need to run from protein obsession to fibre obsession to micronutrient stacking.
            Each trend shows only half the picture. And half-truths create extremes.
          </p>
        </div>

        <div className={`mt-16 flex flex-wrap justify-center gap-4 md:gap-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {trends.map((trend, i) => (
            <div
              key={trend.label}
              className="hand-drawn-box px-6 py-4 bg-background hover:bg-highlight/20 transition-colors duration-300 cursor-default"
              style={{
                transform: `rotate(${(i % 2 === 0 ? -1 : 1) * (1 + i * 0.5)}deg)`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <span className="text-2xl mr-2">{trend.emoji}</span>
              <span className="font-heading text-xl text-foreground">{trend.label}</span>
            </div>
          ))}
        </div>

        <div className={`mt-16 max-w-2xl mx-auto ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <div className="squiggle-border bg-highlight/10 p-8 text-center">
            <p className="font-heading text-2xl md:text-3xl text-foreground">
              "What we need is{" "}
              <span className="doodle-underline text-primary">balance</span>."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

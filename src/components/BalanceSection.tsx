import balanceFood from "@/assets/balance-food.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BalanceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="balance" ref={ref} className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="hand-drawn-box overflow-hidden -rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={balanceFood}
                alt="Balanced nutrition circle of fresh foods"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 pill-badge bg-highlight animate-wiggle">
              ⚖️ Balance!
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="section-heading">
              Take fibre,{" "}
              <span className="text-primary">for example.</span>
            </h2>
            <p className="section-body">
              An adult body needs roughly 25–40 grams of fibre per day. Most of us are nowhere close.
            </p>
            <p className="section-body">
              Urban diets are often low in whole grains, legumes, fruits, and vegetables.
              And while fibre became a trend recently, the need for it has always existed.
            </p>
            <div className="squiggle-border inline-block px-6 py-3 bg-primary/10">
              <p className="font-heading text-xl text-foreground">
                The real problem was never one nutrient.
                <br />
                The real problem was <span className="text-primary">imbalance</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BalanceSection;

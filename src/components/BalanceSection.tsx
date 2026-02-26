import balanceFood from "@/assets/balance-food.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BalanceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="balance" ref={ref} className="py-20 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${isVisible ? 'animate-scale-up' : 'opacity-0'}`}>
            <img
              src={balanceFood}
              alt="Circle of balanced foods"
              className="w-full max-w-lg mx-auto rounded-2xl"
              loading="lazy"
            />
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-20 h-20 flex items-center justify-center animate-wiggle">
              <span className="font-handwritten text-lg text-center leading-tight">what<br />we need</span>
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.15s' }}>
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
  );
};

export default BalanceSection;

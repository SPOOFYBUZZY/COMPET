import heroFood from "@/assets/hero-food.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Doodle decorations */}
      <svg className="absolute top-10 right-10 w-24 h-24 text-highlight opacity-60 animate-float" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="3" strokeDasharray="8 6" />
      </svg>
      <svg className="absolute bottom-20 left-10 w-16 h-16 text-primary opacity-40 animate-wiggle" viewBox="0 0 100 100" fill="none">
        <path d="M20 80 Q50 10 80 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="pill-badge bg-highlight/20">
              ✋ Stop chasing trends
            </div>
            <h1 className="section-heading">
              We're bringing{" "}
              <span className="doodle-underline text-primary">balance</span>
              {" "}back to nutrition.
            </h1>
            <p className="section-body max-w-lg">
              The internet made us believe there was something wrong with our food.
              First protein, then fibre, then micronutrients. Each trend shows only half the picture.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#story" className="cta-button">
                Start from the beginning →
              </a>
            </div>
          </div>

          <div className={`relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="hand-drawn-box overflow-hidden rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src={heroFood}
                alt="Balanced healthy food ingredients"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Floating doodle arrow */}
            <svg className="absolute -bottom-6 -left-6 w-20 h-20 text-primary animate-wiggle" viewBox="0 0 80 80" fill="none">
              <path d="M10 60 Q30 20 70 30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
              <path d="M55 20 L70 30 L58 38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

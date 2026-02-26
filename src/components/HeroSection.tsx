import heroFood from "@/assets/hero-food.webp";
import productShot from "@/assets/product-shot.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HeroSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Big heading */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h1 className="heading-xl">
              We're bringing<br />
              <span className="underline-draw">balance</span> back<br />
              to nutrition.
            </h1>

            <p className="body-mono max-w-md">
              We're building India's first<br />
              balanced-nutrition brand ✦
            </p>

            <a href="#story" className="pill-btn inline-flex">
              <span className="font-handwritten text-lg">Short story looong of why we exist</span>
              <span>→</span>
            </a>
          </div>

          {/* Right: Product images floating */}
          <div className={`relative ${isVisible ? 'animate-scale-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <img
              src={productShot}
              alt="Plainfuel nutrition product"
              className="w-full max-w-md mx-auto lg:ml-auto rounded-2xl"
              loading="eager"
            />
            {/* Floating food image */}
            <img
              src={heroFood}
              alt="Healthy ingredients"
              className="absolute -bottom-8 -left-8 w-40 h-40 object-cover rounded-xl shadow-xl animate-float hidden lg:block"
              loading="eager"
            />
            {/* Doodle accent - small stars like reference */}
            <svg className="absolute top-4 -left-4 w-8 h-8 text-primary" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14 2 9.2h7.6z" />
            </svg>
            <svg className="absolute top-12 left-2 w-5 h-5 text-primary opacity-60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l2.4 7.2H22l-6 4.8 2.4 7.2L12 16.8 5.6 21.2 8 14 2 9.2h7.6z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

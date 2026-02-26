import productShot from "@/assets/product-shot.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProductSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: "🧬",
      title: "~30-50% Key Micronutrients",
      description: "Not 100%. Because your food already provides some.",
    },
    {
      icon: "🌾",
      title: "5-6g Fibre Per Serve",
      description: "Helping you closer to that daily 25-40g requirement.",
    },
    {
      icon: "💪",
      title: "Complete Amino Acid Profile",
      description: "High-quality protein with all essential amino acids.",
    },
  ];

  return (
    <section id="product" ref={ref} className="py-20 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Doodle decorations */}
      <svg className="absolute top-10 left-10 w-32 h-32 opacity-10" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
        <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" />
      </svg>

      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block pill-badge border-primary-foreground/50 text-primary-foreground mb-6">
            ✨ That's why we built Plainfuel
          </div>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
            A bridge — not a replacement.
          </h2>
          <p className="text-xl opacity-90 font-body">
            Between what your daily diet gives you and what your body consistently needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="bg-primary-foreground/10 rounded-[2rem] p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src={productShot}
                  alt="Plainfuel nutrition product"
                  className="w-full h-auto rounded-[1.5rem]"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 pill-badge bg-highlight text-highlight-foreground border-foreground animate-float">
                Not another supplement! 🚫
              </div>
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-primary-foreground/15 transition-colors duration-300"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-heading text-xl mb-1">{feature.title}</h3>
                    <p className="opacity-80 font-body">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

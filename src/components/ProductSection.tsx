import productShot from "@/assets/product-shot.webp";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ProductSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: "🧬",
      title: "~30-50% Key Micronutrients",
      desc: "Not 100%. Because your food already provides some.",
    },
    {
      icon: "🌾",
      title: "5-6g Fibre Per Serve",
      desc: "Moving you closer to the daily 25-40g your body needs.",
    },
    {
      icon: "💪",
      title: "Complete Amino Acid Profile",
      desc: "High-quality protein, not just any protein.",
    },
  ];

  return (
    <section id="product" ref={ref} className="py-20 md:py-32 bg-secondary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="font-handwritten text-2xl text-primary mb-4">✦ That's why we built Plainfuel</p>
          <h2 className="heading-lg">
            A bridge — not<br />
            a <span className="underline-draw">replacement</span>.
          </h2>
          <p className="body-mono mt-6 max-w-xl mx-auto">
            Between what your daily diet gives you and what your body consistently needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`${isVisible ? 'animate-scale-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img
                src={productShot}
                alt="Plainfuel product"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-foreground text-background rounded-2xl px-5 py-3 font-body text-xs font-bold shadow-lg">
                Not another supplement! 🚫
              </div>
            </div>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-6 flex items-start gap-5 shadow-sm hover:shadow-md transition-shadow"
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <span className="text-3xl mt-1">{f.icon}</span>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-1">{f.title}</h3>
                  <p className="body-mono">{f.desc}</p>
                </div>
              </div>
            ))}

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <p className="font-handwritten text-xl text-primary">
                "We are not here to replace your meals. We are here to complete them." ✦
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;

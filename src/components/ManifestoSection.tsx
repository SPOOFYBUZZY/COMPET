import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ManifestoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 bg-foreground text-background">
      <div className={`max-w-[1400px] mx-auto px-6 md:px-10 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <p className="font-handwritten text-2xl text-primary mb-6">✦ Our Manifesto</p>

        <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05]">
          Clean alone is{" "}
          <span className="line-through opacity-40">not enough</span>.
        </h2>

        <h2 className="font-heading text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-primary mt-4">
          Balance is.
        </h2>

        <p className="body-mono mt-8 max-w-xl mx-auto text-background/70">
          Plainfuel exists to make balance simple, affordable, and practical — once and for all.
        </p>

        {/* Doodle divider */}
        <div className="mt-12 flex justify-center">
          <svg className="w-24 h-12 text-primary" viewBox="0 0 100 50" fill="none">
            <path d="M10 40 Q25 10 50 25 Q75 40 90 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;

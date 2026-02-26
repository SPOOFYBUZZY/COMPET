import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const ManifestoSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`max-w-3xl mx-auto text-center space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="pill-badge bg-primary/10 mx-auto">
            📢 Our Manifesto
          </div>

          <h2 className="section-heading leading-snug">
            Clean alone is{" "}
            <span className="line-through opacity-50">not enough</span>.
          </h2>

          <h2 className="section-heading text-primary leading-snug">
            Balance is.
          </h2>

          <p className="section-body max-w-xl mx-auto">
            Today, every brand screams "clean." But clean should be the bare minimum.
            Plainfuel exists to make balance simple, affordable, and practical — once and for all.
          </p>

          <div className="pt-8">
            <svg className="mx-auto w-24 h-24 text-primary animate-float" viewBox="0 0 100 100" fill="none">
              <path d="M50 10 C25 10 10 30 10 50 C10 75 30 90 50 90 C70 90 90 75 90 50 C90 30 75 10 50 10" stroke="currentColor" strokeWidth="2" strokeDasharray="5 5" fill="none" />
              <text x="50" y="55" textAnchor="middle" fill="currentColor" fontSize="24" fontFamily="Lilita One">⚖️</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManifestoSection;

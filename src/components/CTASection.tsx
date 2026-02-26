import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="cta" ref={ref} className="py-20 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`max-w-2xl mx-auto text-center space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl leading-tight">
            Come, join the{" "}
            <span className="text-highlight">fam!</span>
          </h2>
          <p className="text-xl opacity-80 font-body">
            Be the first to know when Plainfuel launches. No spam, just the truth.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full bg-background/10 border-2 border-background/30 text-background placeholder:text-background/50 font-body text-lg focus:outline-none focus:border-highlight transition-colors"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-highlight text-highlight-foreground font-heading text-lg border-2 border-background/30 hover:scale-105 transition-transform duration-200 shadow-[3px_3px_0px_hsl(var(--background)/0.3)]"
              >
                Join Waitlist 🚀
              </button>
            </form>
          ) : (
            <div className="hand-drawn-box border-background/30 inline-block px-8 py-6 bg-background/10 animate-scale-in">
              <p className="font-heading text-2xl text-highlight">You're in! 🎉</p>
              <p className="font-body mt-2 opacity-80">We'll keep you posted on all things Plainfuel.</p>
            </div>
          )}

          {/* Social doodles */}
          <div className="flex justify-center gap-6 pt-8">
            {["Instagram", "YouTube", "LinkedIn"].map((social) => (
              <div
                key={social}
                className="pill-badge border-background/30 text-background/70 hover:text-highlight hover:border-highlight transition-colors cursor-pointer"
              >
                📱 {social}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

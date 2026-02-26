import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState } from "react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="cta" ref={ref} className="py-20 md:py-32">
      <div className={`max-w-[1400px] mx-auto px-6 md:px-10 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="heading-lg">
          Come, join<br />
          the <span className="underline-draw">fam</span>!
        </h2>

        <p className="body-mono mt-6 max-w-md mx-auto">
          Be the first to know when Plainfuel launches. No spam, just the truth.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3 rounded-full border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required
            />
            <button type="submit" className="pill-btn-filled whitespace-nowrap">
              Join Waitlist 🚀
            </button>
          </form>
        ) : (
          <div className="mt-10 inline-block bg-primary/10 rounded-2xl px-8 py-6 animate-scale-up">
            <p className="font-heading text-2xl text-primary">You're in! 🎉</p>
            <p className="body-mono mt-2">We'll keep you posted.</p>
          </div>
        )}

        <div className="flex justify-center gap-4 mt-10">
          {["Instagram", "YouTube", "LinkedIn"].map((s) => (
            <span key={s} className="pill-btn !text-xs cursor-pointer">📱 {s}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

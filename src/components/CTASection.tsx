import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { useState, useEffect } from "react";

// Rotating product/lifestyle images
const images = [
  "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=600&q=80", // protein shake
  "https://images.unsplash.com/photo-1622484211901-84689c6d0ca5?w=600&q=80", // fitness food
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80", // healthy bowl
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80", // workout
  "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80", // clean food
];

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setImgIndex((i) => (i + 1) % images.length);
        setFade(true);
      }, 200);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .fam-underline {
          position: relative;
          display: inline-block;
          color: #53976D;
        }
        .fam-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 60%;
          height: 4px;
          background: #53976D;
          border-radius: 2px;
        }

        .go-tag {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: #53976D;
          font-weight: 700;
          line-height: 1.1;
          transform: rotate(3deg);
          display: inline-block;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border: 2px solid #53976D;
          border-radius: 999px;
          padding: 10px 20px;
          font-size: 0.875rem;
          font-weight: 600;
          color: #53976D;
          background: transparent;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          text-decoration: none;
        }
        .social-pill:hover {
          background: #53976D;
          color: white;
        }
        .social-pill svg { flex-shrink: 0; }

        .img-fade { transition: opacity 0.2s ease; }

        .waitlist-input {
          flex: 1;
          padding: 12px 20px;
          border-radius: 999px;
          border: 2px solid #e5e5e5;
          background: white;
          font-size: 0.875rem;
          color: #1a1a2e;
          outline: none;
          transition: border-color 0.2s;
        }
        .waitlist-input:focus { border-color: #53976D; }
        .waitlist-input::placeholder { color: #aaa; }

        .waitlist-btn {
          padding: 12px 28px;
          border-radius: 999px;
          background: #53976D;
          color: white;
          font-size: 0.875rem;
          font-weight: 600;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.1s;
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.85; }
          50%       { transform: scale(1.12); opacity: 1; }
        }
        .waitlist-btn:hover { opacity: 0.88; transform: scale(1.02); }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50%       { transform: scale(1.13); opacity: 1; }
        }
        .stars-breathe {
          animation: breathe 2.4s ease-in-out infinite;
          transform-origin: center;
          display: block;
        }
      `}</style>

      <section id="cta" ref={ref} className="py-20 md:py-28 overflow-hidden">
        <div className={`max-w-[1400px] mx-auto px-6 md:px-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="flex flex-col md:flex-row items-stretch gap-0">

            {/* ── LEFT: Heading + social + form ── */}
            <div className="flex-1 min-w-0 flex flex-col justify-center">

              {/* Heading row with tag */}
              <div className="flex items-start gap-6 mb-8">
                <h2 className="heading-lg leading-none">
                  Come, join<br />
                  the <span className="fam-underline">fam</span>!
                </h2>
                <div className="go-tag body-mono mt-2 leading-tight text-right">
                  GO<br />TRUTH<br />SEEKERS!
                </div>
              </div>

              {/* Social links */}
              <div className="flex flex-col gap-3 mb-8">
                <a href="#" className="social-pill" style={{ width: "fit-content" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Join our Instagram Community →
                </a>
                <div className="flex gap-3 flex-wrap">
                  <a href="#" className="social-pill">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
                    YouTube →
                  </a>
                  <a href="#" className="social-pill">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn →
                  </a>
                </div>
              </div>

              {/* Email waitlist form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="waitlist-input"
                    required
                  />
                  <button type="submit" className="waitlist-btn">
                    Join Waitlist 🚀
                  </button>
                </form>
              ) : (
                <div className="inline-block rounded-2xl px-6 py-4 animate-scale-up" style={{ background: "rgba(83,151,109,0.08)" }}>
                  <p className="font-heading text-2xl text-primary">You're in! 🎉</p>
                  <p className="font-body text-sm text-muted-foreground mt-1">We'll keep you posted.</p>
                </div>
              )}
            </div>

            {/* ── CENTER: Stars Love Us doodle ── */}
            <div className="hidden md:flex flex-col items-center justify-center px-6" style={{ alignSelf: "center" }}>
              <div className="stars-breathe text-center" style={{ color: "#53976D" }}>
                <svg width="140" height="150" viewBox="0 0 140 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Radiating dash lines */}
                  <line x1="18" y1="32" x2="8"  y2="22" stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="10" y1="55" x2="2"  y2="53" stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="28" y1="14" x2="26" y2="4"  stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="122" y1="32" x2="132" y2="22" stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="130" y1="55" x2="138" y2="53" stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="112" y1="14" x2="114" y2="4"  stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>
                  <line x1="70"  y1="5"  x2="70"  y2="0"  stroke="#53976D" strokeWidth="2.5" strokeLinecap="round"/>

                  {/* STARS */}
                  <text x="70" y="50" textAnchor="middle"
                    fontFamily="'Georgia', serif" fontWeight="800" fontSize="34"
                    fill="#53976D" letterSpacing="2">STARS</text>

                  {/* ♥ US! */}
                  <text x="70" y="90" textAnchor="middle"
                    fontFamily="'Georgia', serif" fontWeight="800" fontSize="34"
                    fill="#53976D" letterSpacing="2">♥ US!</text>

                  {/* Subtitle */}
                  <text x="70" y="118" textAnchor="middle"
                    fontFamily="'Georgia', serif" fontSize="11" fontStyle="italic"
                    fill="#53976D" opacity="0.7">(and we didn't even</text>
                  <text x="70" y="133" textAnchor="middle"
                    fontFamily="'Georgia', serif" fontSize="11" fontStyle="italic"
                    fill="#53976D" opacity="0.7">have to pay for it)</text>
                </svg>
                
              </div>
            </div>

            {/* ── RIGHT: Auto-rotating image ── */}
            <div className="flex-1 w-full md:max-w-[480px] flex items-center">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] w-full" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.12)" }}>
                <img
                  key={imgIndex}
                  src={images[imgIndex]}
                  alt="Plainfuel lifestyle"
                  className="img-fade w-full h-full object-cover"
                  style={{ opacity: fade ? 1 : 0 }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CTASection;
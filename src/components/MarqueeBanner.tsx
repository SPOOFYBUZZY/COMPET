const MarqueeBanner = () => {
  const items = [
    "🥜 REAL BALANCE",
    "💪 PROTEIN + FIBRE + MICRONUTRIENTS",
    "🌿 NOT A FAD",
    "⚡ ONE SIMPLE ADDITION",
    "🥗 COMPLETE YOUR MEALS",
    "✨ NO MORE STACKING",
  ];

  return (
    <div className="bg-primary py-3 overflow-hidden">
      <div className="marquee-strip">
        <div className="marquee-strip-inner">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="mx-8 text-primary-foreground font-heading text-sm md:text-base tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;

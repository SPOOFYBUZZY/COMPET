const MarqueeBanner = () => {
  const text = "BALANCE OVER TRENDS • PROTEIN + FIBRE + MICRONUTRIENTS • ONE SIMPLE ADDITION • NO MORE STACKING • COMPLETE YOUR MEALS • ";

  return (
    <div className="bg-banner py-3 overflow-hidden">
      <div className="marquee-strip">
        <div className="marquee-strip-inner">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-body text-xs md:text-sm tracking-widest uppercase"
              style={{ color: 'hsl(var(--banner-foreground))' }}
            >
              {text}{text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeBanner;

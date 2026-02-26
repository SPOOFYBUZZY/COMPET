import logo from "@/assets/plainfuel-logo.jpeg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        <a href="/" className="flex items-center">
          <img src={logo} alt="Plainfuel" className="h-8 md:h-10 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body text-sm text-foreground">
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#balance" className="hover:text-primary transition-colors">The Balance</a>
          <a href="#product" className="hover:text-primary transition-colors">What's Inside</a>
          <a href="#why" className="hover:text-primary transition-colors">Why Us</a>
          <a href="#cta" className="pill-btn-filled !text-xs">
            Join Waitlist →
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

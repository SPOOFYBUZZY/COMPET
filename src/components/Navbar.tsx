import logo from "@/assets/plainfuel-logo.jpeg";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="Plainfuel" className="h-10 md:h-12 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-body font-medium text-foreground">
          <a href="#story" className="hover:text-primary transition-colors">Our Story</a>
          <a href="#balance" className="hover:text-primary transition-colors">The Balance</a>
          <a href="#product" className="hover:text-primary transition-colors">What's Inside</a>
          <a href="#why" className="hover:text-primary transition-colors">Why Plainfuel</a>
        </nav>

        <a href="#cta" className="cta-button !px-6 !py-2 !text-base">
          Join the waitlist →
        </a>
      </div>
    </header>
  );
};

export default Navbar;

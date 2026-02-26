import logo from "@/assets/plainfuel-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Plainfuel" className="h-10 w-auto" />
          </div>

          <p className="font-body text-muted-foreground text-center">
            © 2026 Plainfuel. Balance over trends. Always.
          </p>

          <div className="flex gap-6 font-body text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

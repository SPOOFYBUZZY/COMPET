import logo from "@/assets/plainfuel-logo.jpeg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={logo} alt="Plainfuel" className="h-8 w-auto" />
        <p className="body-mono text-xs">© 2026 Plainfuel. Balance over trends. Always.</p>
        <div className="flex gap-6 font-body text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

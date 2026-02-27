import logo from "@/assets/plainfuel-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-16">
      <style>{`
        .footer-link {
          color: #ccc;
          font-size: 0.85rem;
          text-decoration: none;
          transition: color 0.2s;
          display: block;
          margin-bottom: 10px;
          font-family: inherit;
        }
        .footer-link:hover { color: #53976D; }
        .footer-col-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #666;
          margin-bottom: 16px;
          font-weight: 600;
        }
        .newsletter-input {
          flex: 1;
          padding: 12px 18px;
          background: #222;
          border: 1px solid #333;
          border-radius: 999px 0 0 999px;
          color: white;
          font-size: 0.85rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .newsletter-input::placeholder { color: #555; }
        .newsletter-input:focus { border-color: #53976D; }
        .newsletter-btn {
          padding: 12px 22px;
          background: #53976D;
          color: white;
          font-size: 0.85rem;
          font-weight: 700;
          border: none;
          border-radius: 0 999px 999px 0;
          cursor: pointer;
          white-space: nowrap;
          transition: opacity 0.2s;
          letter-spacing: 0.3px;
        }
        .newsletter-btn:hover { opacity: 0.85; }
        .social-icon {
          color: #aaa;
          transition: color 0.2s;
          cursor: pointer;
        }
        .social-icon:hover { color: #53976D; }
        .footer-divider {
          border: none;
          border-top: 1px solid #222;
          margin: 40px 0 24px;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6 md:px-10">

        {/* ── Top row ── */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-4">

          {/* Brand + Newsletter */}
          <div className="lg:max-w-[320px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#222] flex items-center justify-center border border-[#333]">
                <img src={logo} alt="Plainfuel" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-wide uppercase">Plainfuel</p>
                <p className="text-[#666] text-xs">Balance over trends.</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-3 mt-6">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#53976D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 10.91A16 16 0 0 0 13.09 16l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 21 17z"/></svg>
              <p className="text-[#53976D] font-bold text-sm tracking-wider uppercase">Truth Seekers, Unite!</p>
            </div>
            <p className="text-[#888] text-xs leading-relaxed mb-4">
              One honest, BS-free article about clean nutrition & real food.<br />
              Delivered every week. Free (for now).
            </p>

            <div className="flex">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />
              <button className="newsletter-btn">Count me in</button>
            </div>
          </div>

          {/* Links cols */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">

            {/* Company */}
            <div>
              <p className="footer-col-title">Company</p>
              <a href="#" className="footer-link">Our Story</a>
              <a href="#" className="footer-link">Why Plainfuel</a>
              <a href="#" className="footer-link">The Balance</a>
              <a href="#" className="footer-link">What's Inside</a>
              <a href="#" className="footer-link">Careers</a>
            </div>

            {/* Support */}
            <div>
              <p className="footer-col-title">Support</p>
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Our Policies</a>
              <a href="#" className="footer-link">Unauthorized Sellers</a>
            </div>

            {/* Products */}
            <div>
              <p className="footer-col-title">Products</p>
              <a href="#" className="footer-link">Protein Powders</a>
              <a href="#" className="footer-link">Whey Protein</a>
              <a href="#" className="footer-link">Plant Protein</a>
              <a href="#" className="footer-link">Protein Bars</a>
              <a href="#" className="footer-link">Join Waitlist</a>
            </div>

          </div>
        </div>

        <hr className="footer-divider" />

        {/* ── Bottom row ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">© 2026 Plainfuel. Balance over trends. Always.</p>

          {/* Social icons */}
          <div className="flex gap-6">
            {/* Instagram */}
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            {/* YouTube */}
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* Twitter/X */}
            <a href="#" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.622 5.905-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>

          <p className="text-[#444] text-xs">Nothing to hide. Ever.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
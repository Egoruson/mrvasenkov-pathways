import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-white.png";

const navItems = [
  { label: "О КОМПАНИИ", href: "#about" },
  { label: "ТОВАРЫ", href: "#products" },
  { label: "ОТПРАВИТЬ ЗАПРОС", href: "#quiz" },
  { label: "КОНТАКТЫ", href: "#contacts" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hero-gradient border-b border-primary/20 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16">
        <img src={logo} alt="ETRADE LTD" className="h-12 w-auto" />

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://t.me/vasenkov"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex cta-gradient cta-gradient-hover animate-pulse-glow text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm transition-all"
          >
            КОНСУЛЬТАЦИЯ
          </a>

          <button
            className="lg:hidden text-primary-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden hero-gradient border-t border-primary-foreground/10 pb-4">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground"
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 pt-2">
            <a
              href="https://t.me/vasenkov"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center cta-gradient text-primary-foreground font-semibold px-5 py-2 rounded-lg text-sm"
            >
              КОНСУЛЬТАЦИЯ
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

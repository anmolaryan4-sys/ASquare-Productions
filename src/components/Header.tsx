import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import A2Logo from "./A2Logo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#030303]/90 backdrop-blur-md border-white/5 py-4 shadow-2xl"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* LOGO */}
        <A2Logo size="sm" onClick={() => scrollToSection("home")} />

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-12 lg:gap-16">
          {["home", "work", "services", "about", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="font-display font-medium text-[10px] lg:text-[11px] tracking-[0.3em] uppercase text-white/70 hover:text-gold-400 hover:premium-text-glow transition-all duration-300 focus:outline-none cursor-pointer"
            >
              {link === "home" ? "Home" : link === "work" ? "Work" : link === "services" ? "Services" : link === "about" ? "About" : "Contact"}
            </button>
          ))}
        </nav>

        {/* LET'S TALK BUTTON */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-sm border border-gold-400/40 bg-transparent text-[10px] tracking-[0.25em] uppercase font-bold text-white transition-all duration-500 hover:border-gold-400 hover:bg-gold-400/10 hover:premium-gold-glow cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>

        {/* MOBILE BURGER BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/80 hover:text-gold-400 p-1 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE NAV ROUTING */}
      <div
        className={`md:hidden fixed inset-x-0 top-[73px] bg-[#050505]/98 border-b border-white/5 backdrop-blur-lg flex flex-col px-8 py-8 transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          {["home", "work", "services", "about", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollToSection(link)}
              className="text-left font-display font-medium text-sm tracking-[0.25em] uppercase text-white/80 hover:text-gold-400 transition-colors py-1 cursor-pointer"
            >
              {link === "home" ? "Home" : link === "work" ? "Work" : link === "services" ? "Services" : link === "about" ? "About" : "Contact"}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full text-center py-3 mt-4 border border-gold-400 bg-gold-400/5 hover:bg-gold-400 hover:text-black text-gold-400 hover:text-neutral-950 font-mono tracking-[0.2em] text-xs font-bold transition-all duration-300 rounded-sm cursor-pointer"
          >
            LET'S TALK
          </button>
        </div>
      </div>
    </header>
  );
}

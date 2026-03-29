import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "Expertise", id: "expertise" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            VINIPX
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-zinc-400 transition-colors duration-300 hover:text-white group"
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out z-0"></span>
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:w-3/4 transition-all duration-300 ease-out"></span>
              </button>
            ))}
            {/* Buy me a Coffee - Desktop */}
            <a
              href="https://buymeacoffee.com/vinipx"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase text-amber-400 hover:text-amber-300 transition-all duration-300 hover:scale-105 group"
            >
              <Coffee className="w-4 h-4" />
              <span>Support</span>
              <span className="absolute inset-0 bg-amber-500/10 border border-amber-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-zinc-300 hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950/98 backdrop-blur-lg border-b border-zinc-800"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-xs font-bold tracking-widest uppercase text-zinc-300 hover:text-cyan-400 transition-colors py-2"
                >
                  {link.label}
                </button>
              ))}
              {/* Buy me a Coffee - Mobile */}
              <a
                href="https://buymeacoffee.com/vinipx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-amber-400 hover:text-amber-300 transition-colors py-2 mt-4 pt-4 border-t border-zinc-800"
              >
                <Coffee className="w-4 h-4" />
                Buy me a Coffee
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

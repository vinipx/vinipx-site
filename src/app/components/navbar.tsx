import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

function AnimatedCoffee({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Steam lines */}
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      {/* Animated vapor */}
      <path
        d="M6 1v3"
        className="animate-steam-1"
        style={{ opacity: 0.7 }}
      />
      <path
        d="M10 1v3"
        className="animate-steam-2"
        style={{ opacity: 0.7 }}
      />
      <path
        d="M14 1v3"
        className="animate-steam-3"
        style={{ opacity: 0.7 }}
      />
      <style>{`
        .animate-steam-1 {
          animation: steam 1.8s ease-in-out infinite;
        }
        .animate-steam-2 {
          animation: steam 1.8s ease-in-out 0.4s infinite;
        }
        .animate-steam-3 {
          animation: steam 1.8s ease-in-out 0.8s infinite;
        }
        @keyframes steam {
          0% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-3px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
        }
      `}</style>
    </svg>
  );
}

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
              <AnimatedCoffee className="w-4 h-4" />
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
                <AnimatedCoffee className="w-4 h-4" />
                Buy me a Coffee
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

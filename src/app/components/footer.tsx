import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-2">
              VINIPX
            </h3>
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Vinipx. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#portfolio" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              Portfolio
            </a>
            <a href="#expertise" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              Expertise
            </a>
            <a href="#insights" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              Insights
            </a>
            <a href="#contact" className="text-zinc-400 hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 transition-all hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}

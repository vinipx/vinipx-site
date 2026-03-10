import { Github, Linkedin, Download, ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-8 inline-block"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <img
                  src="./vini.jpg"
                  alt="Vinipx Profile"
                  className="relative w-40 h-40 rounded-full object-cover object-center border-4 border-zinc-900"
                />
              </div>
            </motion.div>

            {/* Logo/Name */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(12px)", scale: 0.9 }}
              animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 relative w-max mx-auto"
            >
              {/* Futuristic glowing backdrop */}
              <div className="absolute -inset-x-8 -inset-y-4 bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-cyan-600/10 blur-3xl rounded-full -z-10 animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              <h1 className="text-5xl md:text-7xl font-black tracking-[0.08em] md:tracking-[0.14em] uppercase relative">
                <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-10 blur-xl animate-pulse rounded-full" style={{ animationDuration: '3s' }}></span>
                <span className="relative bg-gradient-to-br from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] inline-block transition-all duration-700 hover:tracking-[0.18em] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-default">
                  VINIPX
                </span>
              </h1>
              
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] w-40 bg-gradient-to-r from-transparent via-indigo-500 via-purple-500 via-cyan-500 to-transparent mx-auto mt-6 origin-center"
              />
            </motion.div>

            {/* Headline */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.7,
                  },
                },
                hidden: {},
              }}
              className="mb-12 max-w-3xl mx-auto flex flex-col items-center space-y-4"
            >
              {[
                { text: "Engineering", accent: "ROBUST QUALITY", gradient: "from-indigo-400 to-cyan-400" },
                { text: "Elevating", accent: "DEVELOPER PRODUCTIVITY", gradient: "from-purple-400 to-pink-400" },
                { text: "Unleashing", accent: "AI-POWERED INNOVATION", gradient: "from-emerald-400 to-cyan-400" },
              ].map((line, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(8px)", scale: 0.95 },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)", scale: 1 },
                  }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative px-6 py-3 rounded-2xl overflow-hidden w-full max-w-lg cursor-default border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] transition-colors duration-500 hover:border-white/10 shadow-lg shadow-black/20 hover:shadow-cyan-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
                  
                  <p className="relative z-10 text-lg md:text-xl font-light tracking-widest text-center flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3">
                    <span className="text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300 uppercase text-xs md:text-sm font-medium tracking-[0.2em]">
                      {line.text}
                    </span>
                    <span className="hidden sm:inline-block text-zinc-700 mx-2">|</span>
                    <span className={`font-semibold bg-gradient-to-r ${line.gradient} bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_currentColor] transition-all duration-300`}>
                      {line.accent}
                    </span>
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex gap-6 justify-center mb-10"
            >
              <a
                href="https://github.com/vinipx"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 border border-zinc-700"
              >
                <Github className="w-5 h-5 text-cyan-400" />
                <span className="text-zinc-100">vinipx</span>
              </a>
              <a
                href="https://linkedin.com/in/vinipxf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 border border-zinc-700"
              >
                <Linkedin className="w-5 h-5 text-emerald-400" />
                <span className="text-zinc-100">vinipxf</span>
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 flex items-center gap-2"
              >
                Explore Portfolio
                <ArrowDown className="w-5 h-5" />
              </button>
              <a
                href="./cv.html"
                download="Vinicius_Fagundes_CV.html"
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/30 border border-emerald-500/50 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown className="w-6 h-6 text-zinc-500" />
      </motion.div>
    </section>
  );
}

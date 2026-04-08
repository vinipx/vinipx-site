import { ExternalLink, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    title: "TAFLEX",
    description: "Enterprise-grade Java test automation frameworks leveraging Web UI testing, API testing, and Mobile testing for robust quality assurance.",
    badge: "ENTERPRISE",
    technologies: ["Java", "Playwright", "Appium", "API Testing", "Cucumber"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZ3xlbnwwfHx8fDE3MjY4NDc3MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/taflex/",
    repoUrl: "https://github.com/vinipx/taflex",
    color: "emerald",
  },
  {
    title: "TAFLEX-TS",
    description: "Enterprise-grade Typescript test automation frameworks leveraging Web UI testing, API testing, and Mobile testing for robust quality assurance.",
    badge: "FRAMEWORK",
    technologies: ["TypeScript", "Playwright", "Cucumber", "API Testing", "WebdriverIO"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwbGFwdG9wfGVufDB8fHx8MTcyNjg0ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/taflex-ts/",
    repoUrl: "https://github.com/vinipx/taflex-ts",
    color: "indigo",
  },
  {
    title: "TAFLEX-JS",
    description: "Enterprise-grade JavaScript test automation frameworks leveraging Web UI testing, API testing, and Mobile testing for robust quality assurance.",
    badge: "FRAMEWORK",
    technologies: ["JavaScript", "WebdriverIO", "Playwright", "Axios"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBsYXB0b3B8ZW58MHx8fHwxNzI2ODQ3NzAwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/taflex-js-modular/",
    repoUrl: "https://github.com/vinipx/taflex-js-modular",
    color: "yellow",
  },
  {
    title: "TAFLEX-PY",
    description: "Enterprise-grade Python test automation frameworks leveraging Web UI testing, API testing, and Mobile testing for robust quality assurance.",
    badge: "FRAMEWORK",
    technologies: ["Python", "Playwright", "API Testing", "Appium"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwbGFwdG9wfGVufDB8fHx8MTcyNjg0ODUwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/taflex-python-modular/",
    repoUrl: "https://github.com/vinipx/taflex-python-modular",
    color: "indigo",
  },
  {
    title: "WIXY Hub",
    description: "A WireMock orchestrator with a visual editor and Native AI (MCP) support for intelligent API mocking.",
    badge: "AI-ENHANCED",
    technologies: ["Node.js", "React", "WireMock", "MCP", "AI"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbnxlbnwwfHx8fDE3MjY4NDkwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/wixy/",
    repoUrl: "https://github.com/vinipx/wixy-hub",
    color: "cyan",
  },
  {
    title: "AUTOPOM",
    description: "An AI-powered developer productivity tool designed for automatically generating Page Object Models (POM).",
    badge: "PRODUCTIVITY",
    technologies: ["Python", "AI", "Test Automation", "AST"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBnbG93fGVufDB8fHx8MTcyNjg0OTAwMHww&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/AUTOPOM/",
    repoUrl: "https://github.com/vinipx/autopom",
    color: "blue",
  },
  {
    title: "QUANTAF",
    description: "A specialized framework tailored for financial testing, including robust support for FIX Protocol and JMS.",
    badge: "FINANCE",
    technologies: ["Java", "FIX Protocol", "JMS", "Financial Tech"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaW5nJTIwZmluYW5jZXxlbnwwfHx8fDE3MjY4NDc3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    demoUrl: "https://vinipx.github.io/QUANTAF/",
    repoUrl: "https://github.com/vinipx/quantaf",
    color: "purple",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Innovative solutions driving quality and automation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const colorClasses = {
              cyan: {
                badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
                gradient: "from-cyan-500 to-blue-500",
                border: "border-cyan-500/30",
                shadow: "hover:shadow-cyan-500/20",
              },
              emerald: {
                badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
                gradient: "from-emerald-500 to-teal-500",
                border: "border-emerald-500/30",
                shadow: "hover:shadow-emerald-500/20",
              },
              blue: {
                badge: "bg-blue-500/10 text-blue-400 border-blue-500/30",
                gradient: "from-blue-500 to-purple-500",
                border: "border-blue-500/30",
                shadow: "hover:shadow-blue-500/20",
              },
              purple: {
                badge: "bg-purple-500/10 text-purple-400 border-purple-500/30",
                gradient: "from-purple-500 to-pink-500",
                border: "border-purple-500/30",
                shadow: "hover:shadow-purple-500/20",
              },
              yellow: {
                badge: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
                gradient: "from-yellow-500 to-amber-500",
                border: "border-yellow-500/30",
                shadow: "hover:shadow-yellow-500/20",
              },
              indigo: {
                badge: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
                gradient: "from-indigo-500 to-violet-500",
                border: "border-indigo-500/30",
                shadow: "hover:shadow-indigo-500/20",
              },
            }[project.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`group relative bg-zinc-800 rounded-xl overflow-hidden border ${colorClasses.border} hover:border-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-xl ${colorClasses.shadow}`}
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-800 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold border ${colorClasses.badge} flex items-center gap-1`}>
                    <Sparkles className="w-3 h-3" />
                    {project.badge}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-100 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded border border-zinc-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${colorClasses.gradient} hover:opacity-90 text-white text-sm rounded-lg transition-all`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        See Docs
                      </a>
                    )}
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 text-sm rounded-lg transition-all border border-zinc-600"
                    >
                      <Github className="w-4 h-4" />
                      Repo
                    </a>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

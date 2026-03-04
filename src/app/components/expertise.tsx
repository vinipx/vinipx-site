import { TestTube, Zap, Brain, Shield, Workflow, Sparkles } from "lucide-react";
import { motion } from "motion/react";

const expertiseAreas = [
  {
    title: "Test Automation",
    icon: TestTube,
    color: "cyan",
    description: "Building robust, scalable test frameworks for enterprise systems",
    keyPoints: [
      "Robust Frameworks",
      "Enterprise Scale",
      "Quality Assurance Strategies",
      "Reliable CI/CD",
    ],
    image: "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0JTIwYXV0b21hdGlvbiUyMGNvZGUlMjB0ZXJtaW5hbHxlbnwxfHx8fDE3NzI2NTE5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Dev Productivity",
    icon: Zap,
    color: "emerald",
    description: "Optimizing workflows and accelerating development velocity",
    keyPoints: [
      "Developer Productivity Tools",
      "Workflow Streamlining",
      "DevOps",
      "Continuous Improvement",
    ],
    image: "https://images.unsplash.com/photo-1672957603474-fe1d31c482e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBwcm9kdWN0aXZpdHklMjB3b3JrZmxvd3xlbnwxfHx8fDE3NzI2NTE5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "AI & Agentic Workflows",
    icon: Brain,
    color: "blue",
    description: "Leveraging AI to create intelligent, autonomous systems",
    keyPoints: [
      "Agentic Workflows",
      "Tool Building",
      "Native AI Integrations (Claude, Gemini, Copilot, Cursor)",
      "Intelligent Testing",
    ],
    image: "https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI1ODYxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Expertise() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Core <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Three pillars of innovation driving quality and efficiency
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            const colorClasses = {
              cyan: {
                gradient: "from-cyan-500 to-blue-500",
                border: "border-cyan-500/50",
                shadow: "hover:shadow-cyan-500/20",
                iconBg: "bg-cyan-500/10",
                iconColor: "text-cyan-400",
              },
              emerald: {
                gradient: "from-emerald-500 to-teal-500",
                border: "border-emerald-500/50",
                shadow: "hover:shadow-emerald-500/20",
                iconBg: "bg-emerald-500/10",
                iconColor: "text-emerald-400",
              },
              blue: {
                gradient: "from-blue-500 to-purple-500",
                border: "border-blue-500/50",
                shadow: "hover:shadow-blue-500/20",
                iconBg: "bg-blue-500/10",
                iconColor: "text-blue-400",
              },
            }[area.color as keyof typeof colorClasses];

            return (
              <motion.div
                key={area.title}
                variants={cardVariants}
                className={`group relative bg-zinc-900 rounded-xl overflow-hidden border ${colorClasses.border} hover:border-opacity-100 transition-all duration-300 hover:scale-105 hover:shadow-xl ${colorClasses.shadow}`}
              >
                {/* Card Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900 z-10"></div>
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-lg ${colorClasses.iconBg} mb-4`}>
                    <Icon className={`w-7 h-7 ${colorClasses.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-zinc-100 mb-3">
                    {area.title}
                  </h3>
                  
                  <p className="text-zinc-400 mb-4">
                    {area.description}
                  </p>

                  <ul className="space-y-2">
                    {area.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colorClasses.gradient} mt-1.5 flex-shrink-0`}></div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

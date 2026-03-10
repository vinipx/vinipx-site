import { Briefcase, Award, Rocket } from "lucide-react";
import { motion } from "motion/react";

const timelineEvents = [
  {
    year: "May 2024 - Present",
    title: "Key Quality Engineer",
    company: "EPAM Systems (Verizon) - New Jersey, USA",
    type: "career",
    description: "Leading AI-driven quality assurance and test automation for Verizon's 5G Mobile Radio Labs Quintec RF Switch Matrix solution.",
    achievements: [
      "Designed and deployed a 7-agent AI system enhancing feature delivery speed by 70% through intelligent orchestration and automated workflows.",
      "Achieved 100% test coverage for critical modules with +800tests (unit/integration/functional(e2e)) and AI-driven quality gates (85%+ architecture / coverage).",
      "Product Owner for Device Testing Hub; built Appium/REST Assured frameworks, optimized Gradle build to under 5 minutes across 16 modules.",
    ],
  },
  {
    year: "May 2018 - Apr 2024",
    title: "Team Lead, Key Quality Engineer",
    company: "EPAM Systems (UBS AG) - Krakow, Poland",
    type: "career",
    description: "Tech Lead for test automation on Wealth Management Private & Corporate, architecting frameworks for distributed microservices.",
    achievements: [
      "Architected TAF for distributed systems with Spring Boot proxy containers, integration tests (JMS, MQ, FIX), and REST Assured API tests.",
      "Set up CI monitoring (GitLab), performance testing (Micrometer, Grafana, Prometheus), and reporting (Allure, ReportPortal).",
      "Kanban Master for backlog refinement; defined code conventions, defect management, and risk assessment practices.",
    ],
  },
  {
    year: "Nov 2015 - Mar 2018",
    title: "Program Test Lead, Test Engineer SME",
    company: "Dell Computers - Porto Alegre, Brazil",
    type: "career",
    description: "Program Test Lead for Dell Financial Services Leasing across EMEA & APAC, coordinating distributed QA teams under SAFe.",
    achievements: [
      "Coordinated 15+ test leads across EMEA/APAC; drove defect reviews, QA strategy, and program-level reporting for Release Management.",
      "Implemented data-driven E2E testing with NoSQL (MongoDB) and DevOps practices: automated smoke/regression suites via Jenkins.",
      "Participated in SAFe adoption workshops (Austin, Dublin); led CoP forums and team ceremonies for agile process improvement.",
    ],
  },
  {
    year: "Jan 2014 - Nov 2015",
    title: "Test Analyst Senior",
    company: "DBServer - Porto Alegre, Brazil",
    type: "career",
    description: "Senior test analyst on eBOss Financial Services and SalesForce for Dell's European Leasing systems.",
    achievements: [
      "Agile/Scrum testing for leasing and financial solutions; test planning, scenarios, metrics, and environment maintenance.",
      "Led Defect Review Board meetings, root cause analysis, UAT support, and sprint demos for business stakeholders.",
      "Experience with eBoss Financial Services, Infolease, SalesForce; Sybase, PowerBuilder, HP Quality Center, SoapUI.",
    ],
  },
  {
    year: "Apr 2012 - Jan 2014",
    title: "Test Analyst Senior",
    company: "Banrisul - Porto Alegre, Brazil",
    type: "career",
    description: "Senior test analyst and team lead for Banrisul's account and private banking solutions for Brazilian clients.",
    achievements: [
      "Led QA team for financial services; hardware (ATMs) and software testing with compliance and quality targets.",
      "Led test planning, requirements meetings, daily checkpoint status meetings, and defect review processes.",
      "Waterfall project; TestLink, BugZilla; coordinated with 8 QA members and 30+ developers.",
    ],
  },
  {
    year: "Sep 2009 - Nov 2010",
    title: "Test Analyst",
    company: "Stefanini - Porto Alegre, Brazil",
    type: "career",
    description: "Test analyst on Dell Services CTI telecom softphone project with Siebel integration.",
    achievements: [
      "Test artifact creation (scenarios, cases, plans, metrics); hardware and softphone testing with Siebel CRM integration.",
      "Test execution with detailed analysis; environment preparation and release documentation.",
      "HP Quality Center, HP QTP; manual testing and record/playback automation in 3-QA, 7-dev team.",
    ],
  },
  {
    year: "Aug 2006 - Oct 2008",
    title: "Test Analyst",
    company: "SICREDI - Porto Alegre, Brazil",
    type: "career",
    description: "Test analyst and team lead for SICREDI's internal bank solutions: accounting, investments, and credit/debit cards.",
    achievements: [
      "Led QA for financial/cooperative solutions; change management, compliance sign-offs, and deployment readiness.",
      "Test strategy, plan, case design; Defect Review Board meetings; waterfall project delivery.",
      "Bank/cooperative solutions for accounts, investments, and back-end applications.",
    ],
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-zinc-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Professional <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Key milestones and achievements in my career
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-emerald-500 to-cyan-500"></div>

            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const Icon = event.type === "achievement" ? Award : event.type === "career" ? Briefcase : Rocket;

              return (
                <motion.div
                  key={`${event.year}-${event.title}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className={`relative mb-12 md:mb-16 ${
                    isLeft ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-zinc-900 rounded-full border-4 border-cyan-500 flex items-center justify-center z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content card */}
                  <div className={`ml-24 md:ml-0 ${isLeft ? "md:mr-24" : "md:ml-24"}`}>
                    <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/30 mb-3`}>
                        <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                        {event.year}
                      </div>

                      {/* Title and company */}
                      <h3 className="text-xl font-bold text-zinc-100 mb-1">
                        {event.title}
                      </h3>
                      <p className="text-emerald-400 font-medium mb-3">
                        {event.company}
                      </p>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm mb-4">
                        {event.description}
                      </p>

                      {/* Achievements */}
                      {event.achievements.length > 0 && (
                        <ul className="space-y-2">
                          {event.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

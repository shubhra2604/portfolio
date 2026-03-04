import { motion as Motion } from "framer-motion";
import { BarChart3, Braces, LineChart, Search } from "lucide-react";
import {
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiScikitlearn,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";
import AnimatedSection from "../components/AnimatedSection";

const stacks = [
  {
    title: "Frontend",
    items: [
      {
        name: "React",
        icon: SiReact,
        color: "text-[#61DAFB]",
        glow: "rgba(97, 218, 251, 0.45)",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-[#38BDF8]",
        glow: "rgba(56, 189, 248, 0.42)",
      },
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-[#E34F26]",
        glow: "rgba(227, 79, 38, 0.38)",
      },
      {
        name: "CSS",
        icon: SiCss,
        color: "text-[#1572B6]",
        glow: "rgba(21, 114, 182, 0.4)",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-[#F7DF1E]",
        glow: "rgba(247, 223, 30, 0.35)",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-[#339933]",
        glow: "rgba(51, 153, 51, 0.4)",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-[#FFFFFF]",
        glow: "rgba(255, 255, 255, 0.35)",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
        glow: "rgba(71, 162, 72, 0.4)",
      },
      {
        name: "SQL",
        icon: SiMysql,
        color: "text-[#4479A1]",
        glow: "rgba(68, 121, 161, 0.4)",
      },
    ],
  },
  {
    title: "AI & Data",
    items: [
      {
        name: "Python",
        icon: SiPython,
        color: "text-[#3776AB]",
        glow: "rgba(55, 118, 171, 0.42)",
      },
      {
        icon: SiScikitlearn,
        name: "Scikit-learn",
        color: "text-[#F7931E]",
        glow: "rgba(247, 147, 30, 0.42)",
      },
      {
        name: "Machine Learning",
        icon: SiTensorflow,
        color: "text-[#FF6F00]",
        glow: "rgba(255, 111, 0, 0.42)",
      },
    ],
  },
  {
    title: "Visualization",
    items: [
      {
        name: "Matplotlib",
        icon: LineChart,
        color: "text-blue-300",
        glow: "rgba(147, 197, 253, 0.35)",
      },
      {
        name: "Seaborn",
        icon: BarChart3,
        color: "text-violet-300",
        glow: "rgba(167, 139, 250, 0.35)",
      },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-[#FFCA28]",
        glow: "rgba(255, 202, 40, 0.35)",
      },
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#F05032]",
        glow: "rgba(240, 80, 50, 0.35)",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-slate-100",
        glow: "rgba(226, 232, 240, 0.3)",
      },
      {
        name: "REST APIs",
        icon: Braces,
        color: "text-amber-300",
        glow: "rgba(251, 191, 36, 0.35)",
      },
      {
        name: "Web Scraping",
        icon: Search,
        color: "text-indigo-300",
        glow: "rgba(129, 140, 248, 0.35)",
      },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      staggerChildren: 0.07,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease: "easeOut" } },
};

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" aos="fade-up" delay={90}>
      <Motion.div
        className="mx-auto max-w-6xl px-4 py-8 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="mb-7 text-center">
          <h2 className="bg-gradient-to-r from-indigo-300 to-amber-300 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-4xl">
            Technical Skills
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-gray-400">
            Technologies and tools I use to build scalable web and AI
            applications.
          </p>
        </div>

        <div className="space-y-6">
          {stacks.map((stack, stackIndex) => (
            <Motion.section
              key={stack.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-2.5"
              data-aos="fade-up"
              data-aos-delay={stackIndex * 90}
            >
              <h3 className="text-center text-lg font-bold text-slate-100 md:text-xl">
                {stack.title} <span className="text-indigo-300">→</span>
              </h3>

              <Motion.div className="flex flex-wrap justify-center gap-4">
                {stack.items.map((skill) => (
                  <Motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className="group relative"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl opacity-0 blur-md transition-all duration-300 group-hover:opacity-100"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${skill.glow}, transparent 72%)`,
                      }}
                    />

                    <div
                      className="relative flex min-h-[40px] min-w-[140px] max-w-[220px] items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-3 py-2 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-white/5 hover:border-purple-400/40"
                      style={{ boxShadow: "0 8px 18px rgba(15,23,42,0.2)" }}
                    >
                      <skill.icon className={`text-base ${skill.color}`} />
                      <span className="whitespace-nowrap text-sm font-semibold leading-tight text-slate-200">
                        {skill.name}
                      </span>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-0 rounded-xl border border-transparent opacity-0 transition-all duration-300 group-hover:opacity-100"
                      style={{
                        borderColor: skill.glow,
                        boxShadow: `0 0 26px ${skill.glow}`,
                      }}
                    />
                  </Motion.div>
                ))}
              </Motion.div>
            </Motion.section>
          ))}
        </div>
      </Motion.div>
    </AnimatedSection>
  );
}

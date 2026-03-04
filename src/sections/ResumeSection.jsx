import { motion as Motion } from "framer-motion";
import {
  Award,
  BookOpenCheck,
  ExternalLink,
  FileDown,
  FolderKanban,
  Sparkles,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

const highlights = [
  { label: "CGPA", value: "8.1", icon: Award },
  { label: "Projects", value: "3+", icon: FolderKanban },
  { label: "Certifications", value: "3+", icon: BookOpenCheck },
];

const currentStatus = [
  {
    title: "🎓 Student",
    description: "BTech in Computer Science at Manipal University Jaipur",
    meta: "2023 - Present",
  },
  {
    title: "💼 Open to Opportunities",
    description: "Open to Internships in Full-Stack Development and AI/ML",
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 22 },
  show: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.16 + index * 0.1,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

export default function ResumeSection() {
  return (
    <AnimatedSection id="resume" title="Resume" aos="fade-up" delay={90}>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[2fr_1fr] lg:gap-8">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="w-full space-y-4"
        >
          <h3 className="flex items-center gap-2 text-2xl font-bold text-indigo-300">
            <Sparkles className="h-5 w-5" />
            Resume Preview
          </h3>

          <div className="flex flex-wrap gap-4">
            <Motion.a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/40 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-100 transition-all duration-300 hover:border-amber-300/60 hover:bg-amber-300/10 hover:text-amber-100 hover:shadow-[0_0_24px_rgba(245,158,11,0.24)]"
            >
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </Motion.a>

            <Motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/40 bg-indigo-400/10 px-4 py-2 text-sm font-semibold text-indigo-100 transition-all duration-300 hover:border-amber-300/60 hover:bg-amber-300/10 hover:text-amber-100 hover:shadow-[0_0_24px_rgba(245,158,11,0.24)]"
            >
              <FileDown className="h-4 w-4" />
              Download PDF
            </Motion.a>
          </div>

          <div className="group relative rounded-xl border border-indigo-300/30 bg-gradient-to-br from-indigo-400/12 via-violet-400/10 to-amber-300/12 p-[1px] transition-all duration-300 hover:border-purple-400/40">
            <div className="rounded-xl border border-white/10 bg-slate-950/75 p-2 backdrop-blur-md">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                title="Resume PDF"
                className="h-[460px] w-full rounded-xl sm:h-[560px] lg:h-[610px]"
              />
            </div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.1, duration: 0.55, ease: "easeOut" }}
          className="space-y-5"
        >
          <h3 className="flex items-center gap-2 text-2xl font-bold text-violet-300">
            <Sparkles className="h-5 w-5" />
            Key Highlights
          </h3>

          <div className="space-y-3 rounded-xl border border-indigo-300/25 bg-slate-900/45 p-3 backdrop-blur-md">
            {highlights.map((item, index) => (
              <Motion.article
                key={item.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-indigo-300/25 bg-gradient-to-r from-indigo-400/12 via-slate-950/70 to-amber-300/12 p-[1px]"
              >
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/75 px-4 py-3 backdrop-blur-md transition-all duration-300 group-hover:shadow-[0_0_24px_rgba(129,140,248,0.24)]">
                  <div className="flex items-center gap-2 text-slate-100">
                    <item.icon className="h-[18px] w-[18px] text-amber-300" />
                    <span className="text-sm font-semibold text-slate-300">
                      {item.label}
                    </span>
                  </div>
                  <p className="text-lg font-black tracking-tight text-amber-300">
                    {item.value}
                  </p>
                </div>
              </Motion.article>
            ))}
          </div>

          <Motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.52, duration: 0.45, ease: "easeOut" }}
            className="space-y-3 rounded-xl border border-indigo-300/25 bg-gradient-to-br from-indigo-400/12 via-slate-950/70 to-violet-400/10 p-4"
          >
            <h4 className="flex items-center gap-2 text-xl font-bold text-indigo-300">
              💼 Current Status
            </h4>

            {currentStatus.map((status, index) => (
              <Motion.article
                key={status.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: 0.58 + index * 0.08,
                  duration: 0.35,
                  ease: "easeOut",
                }}
                whileHover={{ y: -3 }}
                className="group rounded-xl border border-indigo-200/20 bg-slate-900/70 p-4 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(129,140,248,0.18)]"
              >
                <h5 className="text-2xl font-bold text-slate-100">
                  {status.title}
                </h5>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {status.description}
                </p>
                {status.meta ? (
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                    {status.meta}
                  </p>
                ) : null}
              </Motion.article>
            ))}
          </Motion.section>
        </Motion.div>
      </div>
    </AnimatedSection>
  );
}

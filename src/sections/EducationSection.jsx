import AnimatedSection from "../components/AnimatedSection";
import { motion as Motion } from "framer-motion";
import { education } from "../data/portfolioData";

const timelineVariants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 1.1, ease: "easeInOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.18 + index * 0.16, duration: 0.45, ease: "easeOut" },
  }),
};

const getBadge = (highlight) => {
  if (highlight.toLowerCase().includes("dean")) return `🏆 ${highlight}`;
  if (highlight.toLowerCase().includes("cgpa")) return `📊 ${highlight}`;
  if (highlight.toLowerCase().includes("percentage"))
    return `🎓 ${highlight.replace("Percentage:", "").trim()}`;
  return `✨ ${highlight}`;
};

export default function EducationSection() {
  return (
    <AnimatedSection
      id="education"
      title="Education & Achievements"
      aos="fade-right"
      delay={110}
    >
      <Motion.div
        className="relative mx-auto max-w-5xl py-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Motion.div
          variants={timelineVariants}
          className="absolute left-4 top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-blue-400 via-indigo-400 to-violet-400 shadow-[0_0_22px_rgba(129,140,248,0.45)] md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-8">
          {education.map((entry, index) => (
            <Motion.article
              key={`${entry.title}-${entry.period}`}
              custom={index}
              variants={cardVariants}
              className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10"
            >
              <Motion.span
                className="absolute left-4 top-10 z-20 h-5 w-5 -translate-x-1/2 rounded-full border border-indigo-200/50 bg-gradient-to-r from-blue-400 to-violet-400 shadow-[0_0_22px_rgba(129,140,248,0.55)] md:left-1/2"
                animate={{ scale: [1, 1.14, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.25 }}
              />

              {index % 2 === 0 ? (
                <>
                  <Motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="ml-10 rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_28px_rgba(15,23,42,0.28)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_26px_rgba(129,140,248,0.35)] md:ml-0 md:mr-10"
                  >
                    <h3 className="text-xl font-bold text-slate-100">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {entry.subtitle}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                      {entry.period}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-indigo-300/25 bg-gradient-to-r from-indigo-400/15 via-violet-400/10 to-blue-400/15 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_0_12px_rgba(129,140,248,0.18)]"
                        >
                          {getBadge(highlight)}
                        </span>
                      ))}
                    </div>
                  </Motion.div>
                  <div className="hidden md:block" />
                </>
              ) : (
                <>
                  <div className="hidden md:block" />
                  <Motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="ml-10 rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_12px_28px_rgba(15,23,42,0.28)] backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_26px_rgba(129,140,248,0.35)] md:ml-10"
                  >
                    <h3 className="text-xl font-bold text-slate-100">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-300">
                      {entry.subtitle}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                      {entry.period}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="rounded-full border border-indigo-300/25 bg-gradient-to-r from-indigo-400/15 via-violet-400/10 to-blue-400/15 px-3 py-1.5 text-xs font-semibold text-slate-200 shadow-[0_0_12px_rgba(129,140,248,0.18)]"
                        >
                          {getBadge(highlight)}
                        </span>
                      ))}
                    </div>
                  </Motion.div>
                </>
              )}
            </Motion.article>
          ))}
        </div>
      </Motion.div>
    </AnimatedSection>
  );
}

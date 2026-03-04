import AnimatedSection from "../components/AnimatedSection";
import MotionHover from "../components/MotionHover";
import { profile, projects } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <AnimatedSection
      id="projects"
      title="Projects"
      aos="fade-right"
      delay={140}
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <MotionHover
            key={project.name}
            className="group relative overflow-hidden rounded-3xl border border-indigo-300/25 bg-slate-900/55 p-7 shadow-[0_0_24px_rgba(99,102,241,0.1)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            hoverScale={1.02}
            hoverY={-6}
            hoverRotate={-0.6}
            usePointerTilt
            maxTilt={7}
            data-aos="fade-right"
            data-aos-delay={index * 120}
          >
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-indigo-400/20 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
            <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-amber-400/20 blur-2xl" />

            <div className="mb-5 h-[3px] w-20 rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-400" />

            <h3 className="mb-3 text-2xl font-black text-slate-100 transition-colors group-hover:text-amber-300">
              {project.name}
            </h3>

            <p className="mb-3 text-sm text-slate-400">
              Featured full-stack product with polished UX and production
              workflow.
            </p>

            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-indigo-300/25 bg-slate-900/55 px-3 py-1 text-xs font-semibold text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="space-y-1.5 text-sm text-slate-300">
              {project.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-3">
              <MotionHover
                as="a"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-500 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                hoverScale={1.07}
                hoverY={-3}
                hoverRotate={0.4}
              >
                Live Demo ↗
              </MotionHover>

              <MotionHover
                as="a"
                href={project.githubUrl || profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-indigo-300/30 bg-slate-900/60 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-200 shadow-[0_0_14px_rgba(99,102,241,0.2)]"
                hoverScale={1.05}
                hoverY={-3}
                hoverRotate={-0.2}
              >
                GitHub Repo ↗
              </MotionHover>
            </div>
          </MotionHover>
        ))}
      </div>
    </AnimatedSection>
  );
}

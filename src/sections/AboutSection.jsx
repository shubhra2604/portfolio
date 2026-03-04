import AnimatedSection from "../components/AnimatedSection";

export default function AboutSection() {
  const aboutParagraphs = [
    "I’m a Computer Science student at Manipal University Jaipur focused on building scalable full-stack applications and intelligent AI-driven systems. I enjoy turning complex ideas into clean, performant digital products that combine strong engineering with thoughtful user experience.",
    "My work involves modern web technologies like React, Node.js, Express, and MongoDB along with machine learning and data analysis. I’ve built projects such as AI-powered travel planning platforms, full-stack rental marketplaces, and conversational AI applications designed to solve real-world problems.",
    "I’m particularly interested in systems where frontend experience, backend architecture, and intelligent automation work seamlessly together. I enjoy exploring new technologies, refining my development practices, and building products that are both technically strong and practically useful.",
  ];

  return (
    <AnimatedSection id="about" title="About Me" aos="fade-left" delay={80}>
      <div className="mx-auto max-w-6xl px-6 py-8 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          <div className="max-w-2xl space-y-4 text-left leading-relaxed text-slate-300">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto flex w-full max-w-md flex-col gap-5 lg:mx-0 lg:ml-auto">
            <div className="w-full rounded-xl border border-indigo-300/20 bg-slate-900/55 p-5 text-indigo-100 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/30 hover:shadow-[0_0_22px_rgba(99,102,241,0.2)]">
              <h3 className="text-base font-bold leading-tight text-indigo-200">
                Full-Stack Web Development
              </h3>
              <p className="mt-2 text-sm leading-snug text-slate-300">
                React, Node.js, Express, and MongoDB for scalable web apps.
              </p>
            </div>

            <div className="w-full rounded-xl border border-violet-300/20 bg-slate-900/55 p-5 text-violet-100 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/30 hover:shadow-[0_0_22px_rgba(167,139,250,0.2)]">
              <h3 className="text-base font-bold leading-tight text-violet-200">
                AI & Machine Learning Integration
              </h3>
              <p className="mt-2 text-sm leading-snug text-slate-300">
                ML pipelines and AI APIs for practical intelligent features.
              </p>
            </div>

            <div className="w-full rounded-xl border border-amber-300/20 bg-slate-900/55 p-5 text-amber-100 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-purple-400/30 hover:shadow-[0_0_22px_rgba(245,158,11,0.2)]">
              <h3 className="text-base font-bold leading-tight text-amber-200">
                Modern Frontend Engineering
              </h3>
              <p className="mt-2 text-sm leading-snug text-slate-300">
                Responsive UI with React, Tailwind CSS, and smooth interactions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

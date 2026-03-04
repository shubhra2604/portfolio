export default function AnimatedSection({
  id,
  title,
  children,
  aos = "fade-up",
  delay = 0,
  className = "",
}) {
  return (
    <section
      id={id}
      data-aos={aos}
      data-aos-delay={delay}
      className={`py-20 ${className}`}
    >
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
        <div className="scan-lines relative overflow-hidden rounded-[2rem] border border-indigo-300/25 bg-slate-900/50 p-8 shadow-[0_0_30px_rgba(99,102,241,0.12)] backdrop-blur-xl md:p-12">
          <div className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-indigo-300/12 blur-3xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-36 w-36 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="absolute left-5 top-4 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
          </div>

          {title ? (
            <h2 className="relative z-10 mb-8 mt-6 bg-gradient-to-r from-indigo-300 to-amber-300 bg-clip-text text-3xl font-black tracking-tight text-transparent md:text-4xl">
              {title}
            </h2>
          ) : null}
          <div className="relative z-10">{children}</div>
        </div>
      </div>
    </section>
  );
}

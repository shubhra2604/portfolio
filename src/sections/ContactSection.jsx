import { useState } from "react";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../components/AnimatedSection";
import MotionHover from "../components/MotionHover";
import { profile } from "../data/portfolioData";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus({ type: "", text: "" });

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setStatus({ type: "success", text: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch(() => {
        setStatus({ type: "error", text: "Failed to send message" });
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <AnimatedSection id="contact" title="Contact" aos="zoom-in" delay={130}>
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div
          className="space-y-3 rounded-2xl border border-indigo-300/25 bg-slate-900/55 p-6 text-slate-300 shadow-[0_0_24px_rgba(99,102,241,0.1)] backdrop-blur-md"
          data-aos="fade-right"
        >
          <p>
            <span className="font-semibold text-slate-100">Email:</span>{" "}
            <a className="text-indigo-300" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-100">Phone:</span>{" "}
            <a className="text-amber-300" href={`tel:${profile.phone}`}>
              {profile.phone}
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-100">LinkedIn:</span>{" "}
            <a
              className="text-violet-300"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/shubhra-kiran-bid
            </a>
          </p>
          <p>
            <span className="font-semibold text-slate-100">GitHub:</span>{" "}
            <a
              className="text-indigo-300"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              github.com/shubhra2604
            </a>
          </p>

          <p className="pt-4 text-sm text-slate-400">
            Open to internships, freelance projects, and full-time
            opportunities.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-indigo-300/25 bg-slate-900/55 p-6 shadow-[0_0_24px_rgba(99,102,241,0.1)] backdrop-blur-md"
          data-aos="fade-left"
        >
          <div className="group relative">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full rounded-xl border border-indigo-300/25 bg-slate-900/60 px-4 pb-2 pt-6 text-sm text-slate-100 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300/20"
              placeholder=" "
              type="text"
              required
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs font-semibold uppercase tracking-wide text-amber-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold">
              Your Name
            </label>
          </div>

          <div className="group relative">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full rounded-xl border border-indigo-300/25 bg-slate-900/60 px-4 pb-2 pt-6 text-sm text-slate-100 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300/20"
              placeholder=" "
              type="email"
              required
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs font-semibold uppercase tracking-wide text-amber-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold">
              Your Email
            </label>
          </div>

          <div className="group relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer h-36 w-full rounded-xl border border-indigo-300/25 bg-slate-900/60 px-4 pb-2 pt-6 text-sm text-slate-100 outline-none transition focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300/20"
              placeholder=" "
              required
            />
            <label className="pointer-events-none absolute left-4 top-2 text-xs font-semibold uppercase tracking-wide text-amber-300 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:font-medium peer-focus:top-2 peer-focus:text-xs peer-focus:font-semibold">
              Your Message
            </label>
          </div>

          <MotionHover
            as="button"
            type="submit"
            disabled={isSending}
            className="animate__animated animate__pulse rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-amber-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(99,102,241,0.35)]"
            hoverScale={1.08}
            hoverY={-4}
            hoverRotate={-0.6}
          >
            {isSending ? "Sending..." : "Send Message"}
          </MotionHover>

          {status.text ? (
            <p
              className={`text-sm font-medium ${
                status.type === "success" ? "text-emerald-300" : "text-rose-300"
              }`}
            >
              {status.text}
            </p>
          ) : null}
        </form>
      </div>
    </AnimatedSection>
  );
}

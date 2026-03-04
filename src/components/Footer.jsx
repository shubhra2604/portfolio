export default function Footer() {
  return (
    <footer
      data-aos="fade-up"
      className="mx-auto mt-4 w-full max-w-7xl border-t border-indigo-300/25 px-4 py-10 text-center text-sm text-slate-400 md:px-8"
    >
      © {new Date().getFullYear()} Shubhra Kiran Bid • Crafted with React,
      Tailwind, AOS, Animate.css, Motion One, and Lottie.
    </footer>
  );
}

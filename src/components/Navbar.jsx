import { Link, NavLink } from "react-router-dom";
import { Home, User, Code2, Award, Mail, FileText } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills", icon: Award },
  { href: "/projects", label: "Projects", icon: Code2 },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/resume", label: "Resume", icon: FileText },
];

export default function Navbar({ profile }) {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-3 z-50 px-4 md:px-8">
      <nav
        data-aos="fade-down"
        className="scan-lines relative mx-auto flex w-full max-w-7xl items-center justify-between overflow-hidden rounded-2xl border border-indigo-300/30 bg-slate-950/65 px-5 py-3 shadow-[0_0_26px_rgba(99,102,241,0.16)] backdrop-blur-xl md:px-8 md:py-4"
      >
        <Link
          to="/"
          onClick={handleNavClick}
          className="mt-4 bg-gradient-to-r from-indigo-300 via-violet-300 to-amber-300 bg-clip-text text-[11px] font-black uppercase tracking-[0.24em] text-transparent md:mt-3 md:text-sm"
        >
          {profile.name}
        </Link>

        <div className="mt-4 flex items-center md:mt-3">
          <div className="hidden items-center gap-4 lg:flex">
            {navLinks.map((link, index) => (
              <NavLink
                key={link.label}
                to={link.href}
                onClick={handleNavClick}
                data-aos="fade-down"
                data-aos-delay={index * 70}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 px-2 py-1 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-yellow-400"
                      : "text-slate-300 hover:text-yellow-400"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <link.icon className="h-[18px] w-[18px]" />
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-400 to-amber-400 transition-all duration-200 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

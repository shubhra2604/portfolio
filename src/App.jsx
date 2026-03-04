import { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection from "./sections/ProjectsSection";
import EducationSection from "./sections/EducationSection";
import ContactSection from "./sections/ContactSection";
import ResumeSection from "./sections/ResumeSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ParticleField from "./components/ParticleField";
import { profile } from "./data/portfolioData";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      mirror: true,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.refreshHard();
  }, [location.pathname]);

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <ParticleField />
      <div className="site-blob site-blob-a" />
      <div className="site-blob site-blob-b" />
      <div className="site-blob site-blob-c" />
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b1020]/70" />

      <Navbar profile={profile} />

      <main className="relative z-10 pb-20 pt-6 md:pt-8">
        <Routes>
          <Route path="/" element={<HeroSection profile={profile} />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/education" element={<EducationSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <div className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}

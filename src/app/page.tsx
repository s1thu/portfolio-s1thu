import Hero from "../app/components/Hero";
import Skills from "../app/components/Skills";
import About from "../app/components/About";
import Projects from "../app/components/Projects";
import Contact from "../app/components/Contact";
import Footer from "../app/components/Footer";

export default function Home() {
  return (
    <div className="bg-bg-primary">
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import { mockProjects } from "./lib/mockProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Projects projects={mockProjects} />
      <Contact />
    </div>
  );
}

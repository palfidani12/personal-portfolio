import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div id="app-main-div" className="size-full">
      <Navigation />
      <Hero />
      <Intro />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

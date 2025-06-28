

import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Achievements from "./Pages/Achievements";
import Contact from "./Pages/Contact";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-24 scroll-smooth">
        <section id="hero"><Hero /></section>
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="achievements"><Achievements /></section>
        <section id="contact"><Contact /></section>
      </main>
    </Router>
  );
}

export default App;

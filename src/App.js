import React from "react";
import "./App.css";
import AboutMe from "./Aboutme";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const App = () => {

  // Función para hacer scroll hacia abajo a las secciones
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="logo">
          <h1>Brayan Alexis Rodriguez Ramirez</h1>
          <p>Full Stack Developer</p>
        </div>
        <nav className="navbar">
          <button onClick={() => scrollToSection('about')}>About Me</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('skills')}>Skills</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
      </header>

      <section id="about" className="section">
        <AboutMe />
      </section>

      <section id="projects" className="section">
        <Projects />
      </section>

      <section id="skills" className="section">
        <Skills />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>


    </div>
  );
};

export default App;

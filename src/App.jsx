import React from "react";
import Navbar from "./Sections/Navbar";
import Home from "./Sections/home";
import About from "./Sections/About";
import Projects from "./Sections/projects";
import Experience from "./Sections/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <Projects />
      <About />

      <footer className="bg-gray-800 text-gray-400 py-8 text-center">
        <p className="text-sm md:text-base">
          Thanks for reading all the way till here! ❤️
        </p>
      </footer>
    </div>
  );
}

export default App;

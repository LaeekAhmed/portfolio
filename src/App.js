import Navbar from "./Sections/Navbar";
import Home from "./Sections/home";
import Skills from "./Sections/skills";
import About from "./Sections/About";
import MyPage from "./Sections/flowbite_test";
import Projects from "./Sections/projects";
import Experience from "./Sections/Experience";

function App() {
  return (
    <div>
      {/* the funcs called below basically return a set of nested div's.
      so basically it is nothing but HTML */}
      <Navbar />
      <Home />
      <Experience/>
      <Projects />
      {/* <Skills /> */}
      <About/>
    </div>
  );
}

export default App;

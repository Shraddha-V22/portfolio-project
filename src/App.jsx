import { useEffect } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { createContext } from "react";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Connect from "./components/Connect";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
const ThemeContext = createContext(null);

export default function App() {
  const [modeToggled, setModeToggled] = useState(true);
  const [active, setActive] = useState("home");

  const navRef = useRef(null);

  function handleModeToggle() {
    setModeToggled((prev) => !prev);
  }

  function setActiveSection() {
    const homeHeight = navRef.current.childNodes[2].clientHeight - 20;
    const aboutHeight =
      homeHeight + navRef.current.childNodes[3].clientHeight - 20;
    const skillsHeight =
      aboutHeight + navRef.current.childNodes[4].clientHeight - 20;
    const projectsHeight =
      skillsHeight + navRef.current.childNodes[5].clientHeight - 20;
    const blogsHeight =
      projectsHeight + navRef.current.childNodes[6].clientHeight - 20;
    // const connectHeight = blogsHeight + navRef.current.childNodes[7].clientHeight;
    const scrollTop = window.scrollY;

    if (scrollTop >= blogsHeight) {
      setActive("connect");
    } else if (scrollTop > projectsHeight) {
      setActive("blogs");
    } else if (scrollTop > skillsHeight) {
      setActive("projects");
    } else if (scrollTop > aboutHeight) {
      setActive("skills");
    } else if (scrollTop > homeHeight) {
      setActive("about");
    } else if (scrollTop > 0) {
      setActive("home");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", setActiveSection);
    return () => window.removeEventListener("scroll", setActiveSection);
  }, []);

  return (
    <ThemeContext.Provider value={modeToggled}>
      <div
        ref={navRef}
        className={`overflow-x-hidden ${
          modeToggled ? "bg-dark text-blueGreen" : "text-navyBlue"
        }`}
      >
        <Header onclick={handleModeToggle} activeSection={active} />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Connect />
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

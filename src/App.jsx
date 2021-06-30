import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 1000px)` });
  return (
    <div className="app">
      <Navbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        isMobile={isMobile}
      />
      <div className="sections">
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;

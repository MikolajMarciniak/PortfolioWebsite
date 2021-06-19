import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

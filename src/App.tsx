import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import About from "./pages/about";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import Projects from "./pages/projects";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

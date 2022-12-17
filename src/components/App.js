import { Routes, Route } from "react-router-dom";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";

import "../index.css";
import "../App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="skills" element={<Skills />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;

import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import NavBar from "./NavBar";

import Nav from "react-bootstrap/Nav";

import akLogo from "../images/ak-logo.png";

import "../index.css";
import "../App.css";

function App() {
  return (
    <div className="App">
      <a id="ak-logo-link" href="#home">
        <img id="ak-logo" src={akLogo} alt="AK" />
      </a>
      <NavBar />
      <Home />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;

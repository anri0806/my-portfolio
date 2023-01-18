import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import NavBar from "./NavBar";
import CustomCursor from "./CustomCursor";

import akLogo from "../images/ak-logo.png";

import "../index.css";
import "../App.css";

function App() {
  return (
    <div className="App">
      <CustomCursor />
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

import Home from "./Home";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Projects from "./Projects";
import NavBar from "./NavBar";
import CustomCursor from "./CustomCursor";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

import akLogo from "../images/ak-logo.png";

import "../index.css";
import "../App.css";

function App() {
  const options = {
    // fullScreen: {
    //   enable: true,
    //   zIndex: 100,
    // },
    // fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#51505011",
        animation: {
          enable: true,
          speed: 180,
          sync: true,
        },
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#51505011",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "https://cdn.matteobruni.it/images/particles/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.2,
        random: false,
        anim: {
          enable: false,
          speed: 3,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 15,
        random: {
          enable: true,
          minimumValue: 25,
        },
        animation: {
          enable: true,
          speed: 5,
          minimumValue: 8,
          sync: true,
          startValue: "min",
          destroy: "max",
        },
      },
      links: {
        enable: false,
      },
      move: {
        enable: true,
        speed: 3.5,
        direction: "none",
        random: false,
        straight: false,
        outMode: "destroy",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onhover: {
          enable: true,
          mode: "trail",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 0.8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
        trail: {
          delay: 0.005,
          quantity: 5,
          pauseOnStop: true,
        },
      },
    },
    retina_detect: true,
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <Particles options={options} init={particlesInit} />
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

import { NavLink } from "react-router-dom";

import aboutButton from "../images/1.png";
import skillsButton from "../images/2.png";
import projectsButton from "../images/3.png";

function HomeNavBar() {
  return (
    <div className="nav-bar">
      <NavLink className="nav-link" to="about">
        <img className="home-btn" src={aboutButton} alt="about me" />
      </NavLink>
      <NavLink className="nav-link" to="skills">
        <img className="home-btn" src={skillsButton} alt="skills" />
      </NavLink>
      <NavLink className="nav-link" to="projects">
        <img className="home-btn" src={projectsButton} alt="projects" />
      </NavLink>
    </div>
  );
}

export default HomeNavBar;

import Nav from "react-bootstrap/Nav";

import aboutButton from "../images/1.png";
import skillsButton from "../images/2.png";
import projectsButton from "../images/3.png";

function HomeNavBar() {

  // style={{ margin: "0", padding: "0", width: "30%" }}

  return (
    <Nav className="nav-bar">
      <Nav.Link to="about" className="home-nav-link">
        <img className="home-btn" src={aboutButton} alt="about me" />
      </Nav.Link>
      <Nav.Link to="skills" className="home-nav-link">
        <img className="home-btn" src={skillsButton} alt="skills" />
      </Nav.Link>
      <Nav.Link to="projects" className="home-nav-link">
        <img className="home-btn" src={projectsButton} alt="projects" />
      </Nav.Link>
    </Nav>
  );
}

export default HomeNavBar;

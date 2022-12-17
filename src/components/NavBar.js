import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="about">
        About Me
      </NavLink>
      <NavLink className="nav-link" to="skills">
        Skills
      </NavLink>
      <NavLink className="nav-link" to="projects">
        Projects
      </NavLink>
    </div>
  );
}

export default NavBar;

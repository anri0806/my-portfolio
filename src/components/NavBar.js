import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Nav>
      <Nav.Link className="nav-link" to="/">
        Home
      </Nav.Link>
      <Nav.Link className="nav-link" to="/about">
        About Me
      </Nav.Link>
      <Nav.Link className="nav-link" to="/skills">
        Skills
      </Nav.Link>
      <Nav.Link className="nav-link" to="/projects">
        Projects
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;

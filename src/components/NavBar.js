import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
      <Nav id="nav-bar">
        <Nav.Link className="nav-link" href="#about-me">
          01. About Me
        </Nav.Link>
        <Nav.Link className="nav-link" href="#skills">
          02. Skills
        </Nav.Link>
        <Nav.Link className="nav-link" href="#projects">
          03. Projects
        </Nav.Link>
      </Nav>
  );
}

export default NavBar;

import Nav from "react-bootstrap/Nav";

function NavBar() {
  return (
    <Nav>
      <Nav.Link className="nav-link" href="/">
        Home
      </Nav.Link>
      <Nav.Link className="nav-link" href="/about">
        About Me
      </Nav.Link>
      <Nav.Link className="nav-link" href="/skills">
        Skills
      </Nav.Link>
      <Nav.Link className="nav-link" href="/projects">
        Projects
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;

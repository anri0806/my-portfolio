import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar'

function NavBar() {
  return (
    <>
      <Nav navbarScroll>
        <Nav.Link className="nav-link" href="#home">
          Home
        </Nav.Link>
        <Nav.Link className="nav-link" href="#about-me">
          About Me
        </Nav.Link>
        <Nav.Link className="nav-link" href="#skills">
          Skills
        </Nav.Link>
        <Nav.Link className="nav-link" href="#proj">
          Projects
        </Nav.Link>
      </Nav>
    </>
  );
}

export default NavBar;

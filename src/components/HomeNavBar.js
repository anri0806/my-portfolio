import Nav from "react-bootstrap/Nav";

function HomeNavBar() {
  return (
    <Nav className="home-nav">
      <Nav.Link href="#about-me" className="home-nav-link">
        01. About me
      </Nav.Link>
      <Nav.Link href="#skills" className="home-nav-link">
        02. Skills
      </Nav.Link>
      <Nav.Link href="#projects" className="home-nav-link">
        03. Projects
      </Nav.Link>
      <Nav.Link href="#contact-me" className="home-nav-link">
        04. Contact
      </Nav.Link>
    </Nav>
  );
}

export default HomeNavBar;

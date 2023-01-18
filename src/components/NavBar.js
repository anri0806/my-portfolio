import { useState, useEffect } from "react";

import Nav from "react-bootstrap/Nav";

function NavBar() {
  const [visible, setVisible] = useState(false);

  // Show navBar based on scroll location

  function controlNavbar() {
    if (window.scrollY < 750) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }

  // Activate controlNavbar func

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <Nav
      className={visible ? "nav-bar-visible justify-content-end" : "nav-bar"}
    >
      <Nav.Link
        className={visible ? "nav-visible" : "nav-not-visible"}
        href="#about-me"
      >
        01. About Me
      </Nav.Link>
      <Nav.Link
        className={visible ? "nav-visible" : "nav-not-visible"}
        href="#skills"
      >
        02. Skills
      </Nav.Link>
      <Nav.Link
        className={visible ? "nav-visible" : "nav-not-visible"}
        href="#projects"
      >
        03. Projects
      </Nav.Link>
    </Nav>
  );
}

export default NavBar;

import { Button } from "react-bootstrap";

import contactMePic from "../images/contact-me.jpg";

export default function ContactMe() {
  return (
    <section className="contact-me" id="contact-me">
      <div id="contact-me-title">
        <div id="title">
          <p style={{ fontSize: "4vw" }}>04. </p>
          <p style={{ fontWeight: "900" }}>Get In</p>
          <p>Touch</p>
        </div>

        <p id="contact-me-message">
          Feel free to contact me with any questions. I will get back to you as
          soon as possible!
        </p>
        <a href="mailto:anri0806ny@gmail.com">
          <Button id="contact-button" variant="light">
            <span style={{ fontFamily: "Roboto" }}>Say Hello</span>
          </Button>
        </a>
      </div>
      <img id="contact-me-pic" src={contactMePic} alt="phone" />
    </section>
  );
}

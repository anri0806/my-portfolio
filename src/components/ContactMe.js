import { Button } from "react-bootstrap";

import contactMePic from "../images/contact-me.jpg";

export default function ContactMe() {
  return (
    <section className="contact-me" id="contact-me">
      <div id="contact-me-title">
        <p style={{ fontSize: "4vw" }}>04. </p>
        <p style={{ fontWeight: "900" }}>Get In</p>
        <p>Touch</p>

        <p
          style={{
            fontSize: "1.1vw",
            fontFamily: "Roboto",
            width: "70%",
            lineHeight: "19px",
            marginTop: "40px",
          }}
        >
          Feel free to contact me with any questions. I will get back to you as
          soon as possible!
        </p>
        <a href="mailto:anri0806ny@gmail.com">
          <Button variant="light">
            <span style={{ fontFamily: "Roboto" }}>Say Hello</span>
          </Button>
        </a>
      </div>
      <img id="contact-me-pic" src={contactMePic} alt="phone" />
    </section>
  );
}

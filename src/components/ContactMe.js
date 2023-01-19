import { Button } from "react-bootstrap";

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
            width: "30%",
            lineHeight: "19px",
            marginTop: "40px",
          }}
        >
          Whether you have a question or just want to say hi, I’ll try my best
          to get back to you!
        </p>
        <a href="mailto:anri0806ny@gmail.com">
          <Button variant="light">
            <span style={{ fontFamily: "Roboto" }}>Say Hello</span>
          </Button>
        </a>
      </div>
    </section>
  );
}

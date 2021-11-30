import React from "react";
import { Container } from "react-bootstrap";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <SectionHeading number="04." text="What's Next" />
      <Container>
        <div className="text-center">
          <h1 className="lightest-slate">Get In Touch</h1>
          <p className="slate">
            Looking for new opportunities! my inbox is always open. Whether you
            have a question or just want to say hi, I’ll try my best to get back
            to you!
          </p>
          <a href="#sdfsd" className="greenBtn">
            Say Hello
          </a>
        </div>
      </Container>
    </section>
  );
}

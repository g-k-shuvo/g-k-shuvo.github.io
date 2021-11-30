import React from "react";
import { Container } from "react-bootstrap";
import "../styles/Banner.css";

export default function Banner() {
  return (
    <section id="banner">
      <Container>
        <div className="banner-container">
          <div className="banner-text">
            <h1 className="banner-subtitle green">Hello There! I am</h1>
            <h1 className="banner-heading lightest-slate">Golam Kibria</h1>
            <h1 className="banner-heading slate">
              I build things for the web.
            </h1>
            <p className="slate">
              Hard-working <span className="green">web developer</span> with a
              flair for creating elegant solutions in the least amount of
              time.Passionate about{" "}
              <span className="green">problem-solving</span> and modern web
              development technologies.
            </p>
            <a href="#sdfsdf" className="greenBtn">
              My Resume
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/About.css";
import aboutImage from "../images/about-img.jpg";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <SectionHeading number="01." text="About Me" />
      <Container>
        <Row className="gy-5 justify-content-center">
          <Col md={7}>
            <p className="about-text slate">
              Hello! My name is Golam Kibria.I describe myself as a passionate
              developer who loves coding and problem solving.I spend a lot of
              time learning new technologies.
            </p>
            <p className="about-text slate">
              Interested in the entire web development spectrum and working on
              ambitious projects with positive people.
            </p>
            <p className="about-text slate">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="skills">
              <p className="slate">
                <span>HTML5</span>
                <span>CSS3</span>
                <span>SCSS / SAAS</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>Material UI</span>
                <span>Javascript (ES6+)</span>
                <span>React</span>
                <span>Node JS</span>
                <span>MongoDB</span>
                <span>Redux</span>
                <span>GatsbyJS</span>
                <span>Next JS</span>
                <span>Github</span>
                <span>Firebase</span>
                <span>Django</span>
                <span>Wordpress</span>
              </p>
            </div>
          </Col>
          <Col md={3}>
            <img src={aboutImage} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

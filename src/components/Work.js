import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Work.css";
import { FiGithub, FiGlobe } from "react-icons/fi";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <SectionHeading number="03." text="Some Things I’ve Built" />
      <Container>
        <Row className="gy-5 py-5">
          <Col lg={7}>
            <img src={project1} className="img-fluid project-image" alt="" />
          </Col>
          <Col lg={5}>
            <div className="text-lg-end">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">Doctris</h2>
              <p className="slate project-description">
                Medical Website where users can schedule appointments with
                doctors while logged in.Users can sign up / sign in manually or
                by using Google or Facebook.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">React Router</span>
                <span className="ut">Firebase</span>
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/g-k-shuvo/doctris"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://doctris-7335f.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGlobe />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 py-5">
          <Col
            lg={5}
            className="order-lg-1 order-md-2 order-sm-2 order-xs-2 order-2"
          >
            <div className="text-right">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name ">Travo</h2>
              <p className="slate project-description">
                Travel Website where users can sign up / sign in manually or by
                using Google or Facebook. They can book tours and cancel booked
                tours while logged in. Admins can add destinations and update
                the status of any booked tours.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">React Router</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/g-k-shuvo/travo-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://github.com/g-k-shuvo/travo-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://travo-a8443.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGlobe />
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            className="order-lg-2 order-md-1 order-sm-1 order-xs-1 order-1"
          >
            <img src={project2} className="img-fluid project-image" alt="" />
          </Col>
        </Row>
        <Row className="gy-5 py-5">
          <Col lg={7}>
            <img src={project3} className="img-fluid project-image" alt="" />
          </Col>
          <Col lg={5}>
            <div className="text-lg-end">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">Timezone</h2>
              <p className="slate project-description">
                A E-Commerce Website where users buy watches and cancel orders
                once logged in. Admins can add new products and remove existing
                ones. They can also update the status of orders and make any
                existing user an admin.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">React Router</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/g-k-shuvo/timezone-client"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://github.com/g-k-shuvo/timezone-server"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://timezone-b18e3.web.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGlobe />
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="gy-5 py-5">
          <Col
            lg={5}
            className="order-lg-1 order-md-2 order-sm-2 order-xs-2 order-2"
          >
            <div className="text-right">
              <p className="green featured">Featured Project</p>
              <h2 className="lightest-slate project-name">
                100 Days 100 Projects
              </h2>
              <p className="slate project-description">
                It's a challenge I took to improve my coding skills. Using all
                of the web development technologies I learned, I am developing
                100 projects.
              </p>
              <p className="used-technologies slate">
                <span className="ut">HTML5</span>
                <span className="ut">CSS3</span>
                <span className="ut">Vanilla JS</span>
                <span className="ut">Tailwind CSS</span>
                <span className="ut">Material UI</span>
                <span className="ut">SAAS/SCSS</span>
                <span className="ut">DJango</span>
                <span className="ut">React</span>
                <span className="ut">Node JS</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>
              </p>
              <div className="project-links">
                <a
                  href="https://github.com/g-k-shuvo?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </Col>
          <Col
            lg={7}
            className="order-lg-2 order-md-1 order-sm-1 order-xs-1 order-1"
          >
            <img src={project4} className="img-fluid project-image" alt="" />
          </Col>
        </Row>
        <Row>
          <Col>
            <a
              href="https://github.com/g-k-shuvo"
              target="_blank"
              className="greenBtn"
              rel="noreferrer"
            >
              View All Projects
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

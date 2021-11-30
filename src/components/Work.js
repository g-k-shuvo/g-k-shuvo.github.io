import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";

export default function Work() {
  return (
    <section id="work" className="section-padding">
      <SectionHeading number="03." text="Some Things I’ve Built" />
      <Container>
        <Row className="gy-5">
          <Col md={7}>
            <img src={project1} className="img-fluid" alt="" />
          </Col>
          <Col md={5}>
            <div className="text-left">
              <p className="green">Featured Project</p>
              <h2 className="lightest-slate">Travo</h2>
              <p className="slate">
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
                <span className="ut">Firebase</span>{" "}
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div className="text-right">
              <p className="green">Featured Project</p>
              <h2 className="lightest-slate">Doctris</h2>
              <p className="slate">
                Medical Website where users can schedule appointments with
                doctors while logged in.Users can sign up / sign in manually or
                by using Google or Facebook.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">React Router</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>{" "}
              </p>
            </div>
          </Col>
          <Col md={7}>
            <img src={project2} className="img-fluid" alt="" />
          </Col>
          <Col md={7}>
            <img src={project3} className="img-fluid" alt="" />
          </Col>
          <Col md={5}>
            <div className="text-left">
              <p className="green">Featured Project</p>
              <h2 className="lightest-slate">Timezone</h2>
              <p className="slate">
                Medical Website where users can schedule appointments with
                doctors while logged in.Users can sign up / sign in manually or
                by using Google or Facebook.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">React Router</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>{" "}
              </p>
            </div>
          </Col>
          <Col md={5}>
            <div className="text-right">
              <p className="green">Featured Project</p>
              <h2 className="lightest-slate">100 Days 100 Projects</h2>
              <p className="slate">
                Medical Website where users can schedule appointments with
                doctors while logged in.Users can sign up / sign in manually or
                by using Google or Facebook.
              </p>
              <p className="used-technologies slate">
                <span className="ut">React</span>
                <span className="ut">React Bootstrap</span>
                <span className="ut">Node JS</span>
                <span className="ut">Express JS</span>
                <span className="ut">React Router</span>
                <span className="ut">MongoDB</span>
                <span className="ut">Firebase</span>{" "}
              </p>
            </div>
          </Col>
          <Col md={7}>
            <img src={project1} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

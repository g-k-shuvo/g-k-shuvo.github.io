import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading number="02." text="Where I've Worked" />
      <Container>
        <Row className="justify-content-center gy-5">
          <Col md={8}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="tabs" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Fiverr</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Upwork</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Freelancer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <h5 className="lightest-slate">
                        Freelance Web Developer
                        <span className="green">@Fiverr</span>
                      </h5>
                      <p className="experience-year slate">2019-Present</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 className="lightest-slate">
                        Freelance Web Developer
                        <span className="green">@Upwork</span>
                      </h5>
                      <p className="experience-year slate">2019-Present</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 className="lightest-slate">
                        Freelance Web Developer
                        <span className="green">@Freelancer</span>
                      </h5>
                      <p className="experience-year slate">2019-2020</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

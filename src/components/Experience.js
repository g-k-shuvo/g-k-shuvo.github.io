import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import SectionHeading from "./SectionHeading";
import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <SectionHeading number="02." text="Where I've Worked" />
      <Container>
        <Row className="justify-content-center gy-5 mt-4">
          <Col lg={10}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row className="gy-4">
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
                        <span className="green"> @Fiverr</span>
                      </h5>
                      <p className="experience-year slate">2019-Present</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Converted PSD, Figma, XD designs into Responsive
                            Websites.
                          </li>
                          <li className="slate">
                            Converted Wordpress Sites into Gatsby JS Website for
                            Better Performance.
                          </li>
                          <li className="slate">
                            Developed NEXT JS websites for better SEO
                            Optimization.
                          </li>
                          <li className="slate">
                            Completed 30+ client projects.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h5 className="lightest-slate">
                        Freelance Web Developer
                        <span className="green"> @Upwork</span>
                      </h5>
                      <p className="experience-year slate">2019-Present</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Developed MERN Stack websites such as E-Commerce
                            Website, Medical Website, Travel Agency Website etc.
                          </li>
                          <li className="slate">
                            Converted Wordpress Sites into Gatsby JS Website for
                            Better Performance.
                          </li>
                          <li className="slate">
                            Developed NEXT JS websites for better SEO
                            Optimization.
                          </li>
                          <li className="slate">
                            Completed 10+ client projects.
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h5 className="lightest-slate">
                        Freelance Web Developer
                        <span className="green"> @Freelancer</span>
                      </h5>
                      <p className="experience-year slate">2019-2020</p>
                      <div className="experience-details">
                        <ul>
                          <li className="slate">
                            Developed Full Stack Websites such as Blog,
                            E-Commerce etc.
                          </li>
                          <li className="slate">
                            Built static websites using HTML, CSS, Bootstrap,
                            Javascript, JQuery etc.
                          </li>
                          <li className="slate">
                            Customized Wordpress Themes.
                          </li>
                          <li className="slate">
                            Completed 20+ client projects.
                          </li>
                        </ul>
                      </div>
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

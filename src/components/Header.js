import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/Header.css";

export default function Header() {
  return (
    <header>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="/">GK</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">
                <span className="green">01.</span>About
              </Nav.Link>
              <Nav.Link href="#experience">
                <span className="green">02.</span>Experience
              </Nav.Link>
              <Nav.Link href="#work">
                <span className="green">03.</span>Work
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className="green">04.</span>Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

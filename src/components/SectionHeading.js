import React from "react";
import { Container } from "react-bootstrap";

export default function SectionHeading({ number, text }) {
  return (
    <div className="section-heading">
      <Container>
        <h2>
          <span className="number green">{number}</span>
          <span className="lightest-slate">{text}</span>
        </h2>
      </Container>
    </div>
  );
}

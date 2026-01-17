import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1 className="purple">Resume</h1>
        <p style={{ marginTop: "15px", maxWidth: "500px" }}>
          Resume will be added soon. <br />
          Currently focusing on learning backend development and building
          real projects.
        </p>
      </Container>
    </Container>
  );
}

export default Resume;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              I’m <span className="purple">Ilhom Komiljonov</span>, a beginner{" "}
              <span className="purple">Backend Developer</span> who is actively
              learning how server-side systems work.
              <br />
              <br />
              I focus on understanding backend fundamentals and improving my
              skills by building small but practical projects.
              <br />
              <br />
              Currently, I’m learning and practicing with
              <b className="purple">
                {" "}
                JavaScript, Node.js, basic databases, and backend concepts{" "}
              </b>
              such as APIs, authentication, and data handling.
              <br />
              <br />
              My goal is to grow step by step, write clean and readable code, and
              eventually work on real-world backend applications.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;

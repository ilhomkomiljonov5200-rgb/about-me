import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Home() {

  /* ===============================
     🟣 MOUSE TRAIL ANIMATION
     =============================== */
  useEffect(() => {
    const handleMouseMove = (e) => {
      const dot = document.createElement("span");
      dot.className = "cursor-dot";
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section>
      {/* ================= HERO SECTION ================= */}
      <Container fluid className="home-section" id="home">
        <Particle />

        <Container className="home-content">
          <Row className="align-items-center">

            {/* LEFT SIDE TEXT */}
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M{" "}
                <strong className="main-name">
                  KOMILJONOV ILHOM
                </strong>
              </h1>

              <div className="type-container">
                <Type />
              </div>
            </Col>

            {/* RIGHT SIDE IMAGE */}
            <Col md={5} className="home-img-col">
              <img
                src={homeLogo}
                alt="home illustration"
                className="img-fluid home-img floating-img"
              />
            </Col>

          </Row>
        </Container>
      </Container>

      {/* ================= ABOUT PREVIEW ================= */}
      <Home2 />

      {/* ================= SOCIAL LINKS ================= */}
      <Container>
        <Row className="home-social-row">
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">

              <li className="social-icons">
                <a
                  href="https://github.com/ilhomkomiljonov5200-rgb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://t.me/Ilhom_Komiljonov"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegramPlane />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/komi1jonov_x/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>

            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;

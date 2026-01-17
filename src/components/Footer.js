import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

function Footer() {
  let year = new Date().getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        {/* LEFT */}
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Ilhom Komiljonov</h3>
        </Col>

        {/* CENTER */}
        <Col md="4" className="footer-copywright">
          <h3>© {year} Ilhom Komiljonov</h3>
        </Col>

        {/* RIGHT */}
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            {/* GitHub */}
            <li className="social-icons">
              <a
                href="https://github.com/ilhomkomiljonov5200-rgb"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            {/* Telegram */}
            <li className="social-icons">
              <a
                href="https://t.me/Ilhom_Komiljonov"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegramPlane />
              </a>
            </li>

            {/* Instagram */}
            <li className="social-icons">
              <a
                href="https://www.instagram.com/komi1jonov_x/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

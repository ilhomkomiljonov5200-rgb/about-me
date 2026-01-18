import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />

      <Container className="resume-wrapper">
        <div className="resume-card">
          {/* Header */}
          <div className="resume-header">
            <h1 className="purple">Resume</h1>
            <h2>Ilhom Komiljonov</h2>
            <span className="resume-role">Junior Frontend Developer</span>
          </div>

          {/* Summary */}
          <div className="resume-block">
            <h3 className="purple">Summary</h3>
            <p>
              Junior Frontend Developer with experience in Python and Telegram bot
              development. Currently learning HTML, CSS, JavaScript, and React.
              Motivated to build real-world projects and grow in the IT field.
            </p>
          </div>

          {/* Experience */}
          <div className="resume-block">
            <h3 className="purple">Experience</h3>

            <div className="resume-item">
              <h4>Python Developer (Aiogram)</h4>
              <span>2023 – 2024</span>
              <p>
                Developed Telegram bots using Python and Aiogram.
              </p>
            </div>

            <div className="resume-item">
              <h4>Sales Assistant</h4>
              <span>2024 – 2025</span>
              <p>
                Worked in retail, improved communication and customer service
                skills.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="resume-block">
            <h3 className="purple">Skills</h3>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Python</li>
              <li>Aiogram</li>
            </ul>
          </div>

          {/* CV Download Button */}
          <div className="cv-wrapper">
            <a
              href="/cv/Ilhom_Komiljonov_CV.pdf"
              download
              target="_blank"
              rel="noreferrer"
              className="cv-btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Resume;

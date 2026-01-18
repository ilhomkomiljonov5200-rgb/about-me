import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {

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
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0 about-text">
          <p>
            Hi everyone! I’m{" "}
            <span className="purple">Ilhom Komiljonov</span>.
            <br />
            <br />
            I’m a beginner{" "}
            <span className="purple">Backend Developer</span> who is learning how
            to build server-side applications.
            <br />
            <br />
            I mainly focus on backend fundamentals and improve my skills by
            building small projects step by step.
            <br />
            <br />
            I care about understanding core concepts, writing clean and readable
            code, and continuously learning new things.
            <br />
            <br />
            My goal is to grow as a backend developer and work on real-world
            applications in the future.
          </p>

          <p className="about-quote">
            “Learning step by step and building real things.”
          </p>

          <footer className="blockquote-footer">Ilhom</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

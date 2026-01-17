import React from "react";
import { Row, Col } from "react-bootstrap";
import { FaApple } from "react-icons/fa";
import { SiGooglechrome, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", gap: "20px", paddingBottom: "50px" }}>

      {/* Apple */}
      <Col xs="auto">
        <div className="apple-pill">
          <FaApple className="apple-icon" />
          <span className="apple-text">Mac M4</span>
        </div>
      </Col>

      {/* Chrome */}
      <Col xs="auto">
        <div className="apple-pill">
          <SiGooglechrome className="apple-icon" />
          <span className="apple-text">Google Chrome</span>
        </div>
      </Col>

      {/* VS Code */}
      <Col xs="auto">
        <div className="apple-pill">
          <SiVisualstudiocode className="apple-icon" />
          <span className="apple-text">VS Code</span>
        </div>
      </Col>

    </Row>
  );
}

export default Toolstack;

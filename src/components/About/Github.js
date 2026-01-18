import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="ilhomkomiljonov5200-rgb"
        blockSize={15}
        blockMargin={5}
        colorScheme="dark"
        fontSize={14}
      />
    </Row>
  );
}

export default Github;

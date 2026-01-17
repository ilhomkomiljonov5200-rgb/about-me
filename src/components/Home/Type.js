import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
  "Backend Developer (Learning)",
  "Node.js & Express.js",
  "Working with Databases (MongoDB)",
  "Building REST APIs",
],

        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

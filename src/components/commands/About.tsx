import React from "react";
import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about" style={{ lineHeight: "1.8" }}>
      {/* Profile Image floated right */}
      <img
        src="https://res.cloudinary.com/dl6vahv6t/image/upload/v1752582210/IMG_20240929_105737_270_xwzh4q.jpg"
        alt="Mesay Lemma"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          objectFit: "cover",
          float: "right",
          marginLeft: "1.5rem",
          marginBottom: "1rem",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          border: "2px solid #64ffda",
        }}
      />
      <p>
        I'm <HighlightSpan>Mesay Lemma</HighlightSpan>, a Computer Science
        student at Addis Ababa University, specializing in{" "}
        <HighlightAlt>backend development with Golang</HighlightAlt> and
        <HighlightAlt> mobile development with Flutter</HighlightAlt>.
      </p>
      <p>
        With professional experience in Golang, Flutter, Python, Java, and C++,
        I build scalable backend systems and performant mobile applications.
      </p>
      <p>
        As an <HighlightAlt>A2SV scholar</HighlightAlt>, I've developed strong
        problem-solving skills through competitive programming, solving 850+
        algorithmic challenges on LeetCode and Codeforces. This training has
        given me the ability to approach complex technical problems
        methodically.
      </p>
      <p>
        I prioritize clean, maintainable code and efficient solutions. My
        technical approach balances performance with practicality to deliver
        robust software.
      </p>
      <p>
        When not coding, I enjoy contributing to open-source projects and
        staying current with emerging technologies in distributed systems and
        mobile development.
      </p>
    </AboutWrapper>
  );
};

export default About;

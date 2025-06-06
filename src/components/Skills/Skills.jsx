import React from "react";
import "./Skills.css";

const skills = [
  { name: "HTML5", level: "100%" },
  { name: "CSS3", level: "85%" },
  { name: "JavaScript", level: "75%" },
  { name: "React JS", level: "40%", learning: true },
  { name: "MongoDB", level: "Beginner", learning: true },
  { name: "Express", level: "Beginner", learning: true },
  { name: "Node.js", level: "Beginner", learning: true },
  { name: "DSA with C++", level: "Beginner", learning: true },
];

const SkillSection = () => {
  return (
    <div className="skills-container" id="skills">
      <h1>⚙️ My Tech Stack</h1>
      <div className="skill-grid">
        {skills.map((skills, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-inner">
              <div className="skill-front">
                {skills.name}
                {skills.learning && <span className="badge">Learning</span>}
              </div>
              <div className="skill-back">{skills.level}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillSection;

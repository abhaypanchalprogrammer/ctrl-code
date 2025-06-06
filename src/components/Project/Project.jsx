import React from "react";
import "./Project.css";
import amazon from "../../assets/amazon.png";
import netflix from "../../assets/netflix.png";
import tic from "../../assets/tictactoe.png";

const Project = () => {
  return (
    <div className="projects" id="projects">
      <h1>Go Through My Works</h1>
      <div className="work-container">
        <div className="work-card">
          <div className="amazone-clone">
            <img src={amazon} alt="" />
            <a href="https://abhaypanchalprogrammer.github.io/portfolio/Amazon.html">
              Amazon Clone
            </a>
          </div>
          <div className="netflix-clone">
            <img src={netflix} alt="" />
            <a href="https://abhaypanchalprogrammer.github.io/netflix/netflix.html">
              Netflix Clone
            </a>
          </div>
          <div className="tic-tac-toe">
            <img src={tic} alt="" />
            <a href="https://abhaypanchalprogrammer.github.io/tic-tac-toe/">
              Tic-Tac-Toe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

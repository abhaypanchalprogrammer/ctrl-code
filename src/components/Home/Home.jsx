import React, { useState, useEffect } from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import "./Home.css";
import mypic from "../../assets/mypic.png";
import "./media.css";

const Home = () => {
  const titles = [
    "Frontend Developer",
    "MERN Stack Developer ",
    "Freelancer",
    "Creator",
  ];
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typeSpeed = !deleting ? 120 : 50;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentTitle.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          setDeleting(true);
          typeSpeed = 50;
        }
      } else {
        setText(currentTitle.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex, titles]);

  return (
    <div className="home">
      <div className="home-container">
        <div className="info">
          <p>Hello there, welcome to</p>
          <h3>Ctrl+Code</h3>
          <h1 className="title">
            I am <span>{text}</span>
          </h1>
          <p>
            A passionate frontend developer crafting modern web experiences.
          </p>
          <button
            onClick={() => {
              window.open(
                "https://abhaypanchalprogrammer.github.io/Personal-Portfolio/assets/CV-FINAL.pdf"
              );
            }}
          >
            Download CV
          </button>
          <div className="social-media-icons">
            <a
              href="https://x.com/programmer2005"
              target="_blank"
              rel="noreferrer"
              id="twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/abhay-panchal-05966a337/"
              target="_blank"
              rel="noreferrer"
              id="linkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/abhaypanchalprogrammer"
              target="_blank"
              rel="noreferrer"
              id="github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/programmer14_25/profilecard/?igsh=YjQyeHJpN3lldWlq"
              target="_blank"
              rel="noreferrer"
              id="instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <img src={mypic} alt="" className="mypic" />
      </div>
    </div>
  );
};

export default Home;

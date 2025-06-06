import React from "react";
import "./About.css";
import { FaGraduationCap } from "react-icons/fa";
import pic from "../../assets/myimage.png";
import { FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <div className="aboutMe" id="about">
      <div className="text">
        <h1>About Me</h1>
      </div>
      <div className="information">
        <div className="image">
          <img src={pic} alt="" height={320} />
        </div>
        <div className="infor">
          <div className="content">
            <div className="education-card">
              {/* <img
                src={edu}
                alt=""
                height={50}
                style={{ color: "rgba(255, 106, 0, 0.5)" }}
              /> */}
              <FaGraduationCap className="edu-icon" />
              <h2>Education</h2>
              <p>
                Pursuing<span> B.C.A </span>Bachelor's Degree
              </p>
              <p>From</p>
              <p>Silver Oak University, Ahmedabad</p>
              <p>(2024-Present)</p>
            </div>

            <div className="experience">
              <FaBriefcase className="exp-icon" />
              <h2>Experience</h2>
              <p>1.5+ Years Of Front-End Development</p>
              <p>Focusing on MERN Stack And DSA</p>
            </div>
          </div>
          <div className="parah">
            I'm a passionate and curious developer with a strong focus on
            creating clean, user-friendly web experiences. With a background in
            MERN stack development and a keep eye for design, I love turning
            ideas into functional, visually engaging products. Whether it's
            building responsive UIs, optimizing performance, or learning the
            latest tech trends, I'm always eager to grow and take on new
            challenges. When I'm not coding, you'll find me exploring tech
            content, designing futuristic UI concepts, or improving my
            problem-solving skills through DSA.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

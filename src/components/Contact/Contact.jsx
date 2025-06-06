import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <h1>Contact Me</h1>
      <p>
        You can reach me at:{" "}
        <a href="mailto:your.email@example.com" className="email-link">
          abhaypanchal2525@gmail.com
        </a>
      </p>
    </div>
  );
};

export default Contact;

import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-me">
      <span>About the Creator: </span>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/robertdaraban/">
        <i className="fab fa-linkedin"></i>
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/darabandev">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default ContactMe;

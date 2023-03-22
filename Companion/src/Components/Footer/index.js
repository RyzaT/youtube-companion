import React from "react";
import {FaGithub, FaEnvelope, FaLinkedin} from 'react-icons/fa';
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="contact-heading">Contact Us</h4>
      <div className="contact-container">
      <section>
        <h4><FaGithub/>Github</h4>
        <ul>
          <li><a href="https://github.com/RyzaT">RyzaT</a></li>
          <li><a href="https://github.com/KonstantinGolovahin">KonstantinGolovahin</a></li>
          <li><a href="https://github.com/JayClay922">JayClay922</a></li>
        </ul>
      </section>
      <section>
        <h4><FaEnvelope/>Email</h4>
        <ul>
          <li><a href="mailto:ryant.webdev@gmail.com">ryant.webdev@gmail.com</a></li>
          <li><a href="mailto:sobakoved@inbox.lv">sobakoved@inbox.lv</a></li>
          <li><a href="mailto:jamesclayman922@live.com">jamesclayman922@live.com</a></li>
        </ul>
      </section>
      <section>
        <h4><FaLinkedin/>LinkedIn</h4>
        <ul>
          <li><a href="http://linkedin.com/in/ryan-taylor-7715b775">Ryan Taylor</a></li>
          <li><a href="https://www.linkedin.com/in/konstantin-golovahin-07b977268/">Konstantin Golovahin</a></li>
          <li><a href="https://www.linkedin.com/in/james-clayman-76ba7775">James Clayman</a></li>
        </ul>
      </section>
      </div>
    </footer>
  );
}

export default Footer;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import "./Footer.css";

const Footer = ({ nav }) => {
  return (
    <div className="app__footer-container">
      {!nav && (
        <>
          <div className="app__footer-title">
            <h2>Contact</h2>
            <p>
              // Let's work together! Here you will find my Github profile, my
              LinkedIn page, my email and my CV.
            </p>
          </div>
          <div className="app__footer-contact-icons">
            <a
              className="app__footer-contact-item"
              href="https://github.com/DorianMas"
              target="_blank"
            >
              <FaGithub size={45} />
            </a>
            <a
              className="app__footer-contact-item"
              href="https://www.linkedin.com/in/dorian-masquelier-5b5a498a/"
              target="_blank"
            >
              <FaLinkedin size={45} />
            </a>
            <a
              className="app__footer-contact-item"
              href="mailto: dorian.masquelier@gmail.com"
              target="_blank"
            >
              <HiOutlineMail size={45} />
            </a>
            <a className="app__footer-contact-item" href="" target="_blank">
              <BsFillPersonLinesFill size={45} />
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default Footer;

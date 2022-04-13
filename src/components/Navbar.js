import "./Navbar.css";

import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { useState } from "react";

const Navbar = () => {
  //Gestion du menu
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="app__navbar-container">
      <div>
        <img src={Logo} alt="logo" style={{ width: "50px" }} />
      </div>
      {/**Menu */}
      <ul
        className="app__navbar_menu"
        style={{ display: "flex", justifyContent: "center", gap: "40px" }}
      >
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
      {/**Hamburger */}
      <div className="app__navbar-mobile_menu-button" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/**Mobile Menu */}
      {nav && (
        <ul className="app__navbar-mobile_menu-list">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      )}
      {/**Social icons */}
      <div className="app__navbar_contact">
        <ul>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(0, 72, 255)" }}
          >
            <a href="https://www.linkedin.com/in/dorian-masquelier-5b5a498a/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(0,0,10)" }}
          >
            <a href="https://github.com/DorianMas">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(10, 100, 3 )" }}
          >
            <a href="https://www.linkedin.com/in/dorian-masquelier-5b5a498a/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(80, 00, 3 )" }}
          >
            <a href="https://www.linkedin.com/in/dorian-masquelier-5b5a498a/">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

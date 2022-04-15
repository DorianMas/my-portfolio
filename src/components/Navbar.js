import "./Navbar.css";

import Logo from "../assets/logo.png";

import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = ({ nav, setNav }) => {
  //Gestion du menu

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
        <Link to="app__navbar-container" smooth="true" duration={500}>
          <li>Home</li>
        </Link>
        <Link to="app__about-container" smooth="true" duration={500}>
          <li>About</li>
        </Link>
        <Link to="app__skills-container" smooth="true" duration={500}>
          <li>Skills</li>
        </Link>
        <Link to="app__work-container" smooth="true" duration={500}>
          <li>Work</li>
        </Link>
        <Link to="app__footer-container" smooth="true" duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      {/**Hamburger */}
      <div className="app__navbar-mobile_menu-button" onClick={handleClick}>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {/**Mobile Menu */}
      {nav && (
        <ul className="app__navbar-mobile_menu-list">
          <Link to="app__navbar-container" smooth="true" duration={500}>
            <li onClick={handleClick}> Home </li>
          </Link>

          <Link to="app__about-container" smooth="true" duration={500}>
            <li onClick={handleClick}>About</li>
          </Link>
          <Link to="app__skills-container" smooth="true" duration={500}>
            <li onClick={handleClick}>Skills</li>
          </Link>
          <Link to="app__work-container" smooth="true" duration={500}>
            <li onClick={handleClick}>Work</li>
          </Link>
          <Link to="app__footer-container" smooth="true" duration={500}>
            <li onClick={handleClick}>Contact</li>
          </Link>
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
              LinkedIn <FaLinkedin size={30} target="_blank" />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(0,0,10)" }}
          >
            <a href="https://github.com/DorianMas" target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(10, 100, 3 )" }}
          >
            <a href="mailto: dorian.masquelier@gmail.com" target="_blank">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li
            className="app__navbar_contact-socialmedia"
            style={{ backgroundColor: "rgb(80, 00, 3 )" }}
          >
            <a href="" target="_blank">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

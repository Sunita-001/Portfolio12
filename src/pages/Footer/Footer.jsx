import "./Footer.css";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";

function Footer() {

  return (

    <div className="footer">

      <div className="social-icons">

        <a
          href="https://github.com/Sunita-001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/sunita-473202329/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/Sunita001/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaCode />
        </a>

      </div>

      <p>&copy; 2026 Sunita. All rights reserved.</p>

      <ul className="link">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#service">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>

  );

}

export default Footer;
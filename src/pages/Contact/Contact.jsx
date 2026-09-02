import "./Contact.css";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCode
} from "react-icons/fa";

function Contact() {
  return (
    <div className="contact" id="contact">

      <div className="title">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h3>Let's Connect</h3>

          <p>
            I'm always open to connecting, discussing ideas,
            collaborating on projects, and exploring new opportunities.
            Feel free to reach out through any of the platforms below.
          </p>

          <div className="info-item">
            <FaEnvelope className="contact-icon" />
            <a href="mailto:sunitagolay001@gmail.com">
              sunitagolay001@gmail.com
            </a>
          </div>

          <div className="info-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/sunita-473202329/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="info-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/Sunita-001"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>

          <div className="info-item">
            <FaCode className="contact-icon" />
            <a
              href="https://leetcode.com/u/Sunita001/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
          </div>

        </div>

        <form
          className="contact-form"
          action="mailto:sunitagolay001@gmail.com"
          method="POST"
          encType="text/plain"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;
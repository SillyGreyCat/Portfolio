import "./Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-card">

        <h2>Contact Me</h2>

        <div className="contact-item">
          <FaEnvelope />
          <span>pareekdhruv090@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhone />
          <span>+91-9340518926</span>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/dhruv-pareek-522998404/" target="_blank" className="social-btn">
            <FaLinkedin /> LinkedIn
          </a>

          <a href="https://github.com/SillyGreyCat?tab=repositories" target="_blank" className="social-btn">
            <FaGithub /> GitHub
          </a>
        </div>

      </div>

    </section>
  );
}

export default Contact;

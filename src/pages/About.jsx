import "./About.css";
import { FaUserGraduate, FaCogs, FaLaptopCode, FaChalkboardTeacher } from "react-icons/fa";

function About() {
  return (
    <section className="about">

      <div className="about-card">

        <h2>About Me</h2>

        <p className="about-text">
          I am a Full Stack Developer and curious person focused on building
          useful projects and learning more about software development.
        </p>

        <div className="about-grid">

          <div className="about-item">
            <FaCogs />
            <span>Curiosity fuelled learning mindset</span>
          </div>

          <div className="about-item">
            <FaLaptopCode />
            <span>Problem solving using software</span>
          </div>

          <div className="about-item">
            <FaChalkboardTeacher />
            <span>Always learning and growing</span>
          </div>

          <div className="about-item">
            <FaUserGraduate />
            <span>Full Stack developer in training</span>
          </div>

        </div>

        <div className="about-tags">
          <span>Python</span>
          <span>C</span>
          <span>Java</span>
          <span>React</span>
          <span>DSA</span>
        </div>

      </div>

    </section>
  );
}

export default About;

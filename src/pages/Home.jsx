import "./Home.css";
import { FaChalkboardTeacher,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaCogs,
  FaTrophy } from "react-icons/fa";
import profile from "../assets/images/profile-img.jpeg";

function Home() {
  return (
    <section className="home">

      {/* HERO CARD */}
      <div className="home-card">
        <img className="profile-img" src={profile} alt="Profile" />

        <h1>Dhruv Pareek</h1>
        <h3>Full Stack Developer</h3>

        <p className="tagline">
          Learning by building projects using React, Java, and Python.
        </p>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience-section">

        <h2 className="section-title">Skills</h2>

        <div className="cards-grid">

          <div className="exp-card">
            <h3>
              <FaChalkboardTeacher style={{ marginRight: "8px" }} />
              Role
            </h3>
            <p>Full Stack Developer</p>
          </div>

          <div className="exp-card">
            <h3>
              <FaLaptopCode style={{ marginRight: "8px" }} />
              Practical Training
            </h3>
            <ul>
              <li>Python</li>
              <li>AI/ML</li>
              <li>DSA</li>
              <li>React</li>
              <li>Java programming</li>
            </ul>
          </div>

          <div className="exp-card highlight">
            <h3>
              <FaTrophy style={{ marginRight: "8px" }} />
              Philosophy
            </h3>
            <br/>
            <p>
              Passionate about solving problems and creating useful and scalable software solutions.
              Always curious, and open to learn and grow. 
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}

export default Home;

import "./About.css";
import AboutPhoto from "../../assets/images/about_photo.jpeg";
import Skills from "./Skills";


function About() {
    return (
        <div className="about" id="about">
            <div className="about-content">
                <div className="text">
                    <div className="title2">
                        <h1>About Me</h1>
                    </div>
                    <div className="parag">
                        <p>
                          I'm Sunita Golay, a Computer Science student with a strong interest in
                          software development, Artificial Intelligence, and emerging technologies.
                          I enjoy solving problems, building practical solutions, and learning
                          through hands-on experiences.

                          <br /><br />

                          My experience extends beyond development. As an AI Intern at Tripple One
                          Solution, I have gained exposure to real-world AI applications and
                          problem solving. I'm also an Unstop Campus Ambassador and a Social Media
                          Lead at Google Developer Groups on Campus, where I work on community
                          engagement, communication, content, and student-focused initiatives.

                          <br /><br />

                          These experiences have strengthened my technical, communication, and
                          leadership skills while teaching me how to take ownership and work
                          effectively with others. I'm constantly learning, experimenting, and
                          looking for opportunities to turn ideas into meaningful solutions.
                      </p>
                    </div>
                    <div className="info">
                         <div className="card">
                             <h3>01</h3>
                             <p>Learning Approach</p>
                             <p>Hands-on, curious, and always improving</p>
                         </div>

                         <div className="card">
                             <h3>∞</h3>
                             <p>Growth Mindset</p>
                             <p>Continuously learning and exploring new ideas</p>
                         </div>
                    </div>
                </div>
                <div className="about-photo">
                    <img src={AboutPhoto} alt="Sunita" />
                </div>
            </div>
            <Skills/>
        </div>
    )
}
export default About;
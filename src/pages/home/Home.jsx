import "./Home.css";
import HomePhoto from "../../assets/images/home_photo.jpeg";

function Home() {
    return (
        <div className="home" id="home">
            <div className="home-content">
                <div className="text">
                    <div className="valide">
                        <img src={HomePhoto} alt="Sunita" />
                        <p>"Learn. Build. Grow."</p>
                    </div>
                    <div className="text-info">
                        <div className="title1">
                            <h1>Hi, I'm <span>Sunita</span></h1>
                        </div>
                        <div className="paraga">
                            <p>
                                I'm a Computer Science student passionate about
                                building meaningful digital experiences, exploring
                                modern technologies, and continuously improving
                                my skills through real-world projects.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="btn1">
                    <a href="/my.resume.pdf"download>
                           Download Resume
                    </a>
                    <a href="#project">Explore My Projects</a>
                </div>
            </div>
            <div className="photo">
                    <img src={HomePhoto} alt="Sunita" />
            </div>
        </div>
    )
}
export default Home;
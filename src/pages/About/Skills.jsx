import "./Skills.css";

import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaJava
} from "react-icons/fa";

import {
    SiPython,
    SiCplusplus,
    SiMysql
} from "react-icons/si";

function Skills() {
    return (
        <div className="skills">
            <div className="skills-slider">
                <div className="skills-track">

                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />

                    <SiPython />
                    <SiCplusplus />
                    <FaJava />

                    <SiMysql />

                    <FaGitAlt />
                    <FaGithub />

                    {/* C */}
                    <span className="c-icon">C</span>

                </div>
            </div>
        </div>
    );
}

export default Skills;
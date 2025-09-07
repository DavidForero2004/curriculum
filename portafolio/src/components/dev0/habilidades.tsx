"use client";
import {
  SiSharp,
  SiMysql,
  SiJavascript,
  SiExpress,
  SiNextdotjs,
  SiPostman,
  SiVsco,
  SiGooglechrome,
} from "react-icons/si";

import {
  FaJava,
  FaPython,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaCog,
  FaWrench,
  FaLightbulb,
} from "react-icons/fa";
import { MdSecurity } from "react-icons/md";

export default function Habilidades() {
  return (
    <section className="banner-skills fade-section" id="skills-section">
      <h2 className="skills-title">Mis Habilidades</h2>
      <div className="container-dev">
        <div className="skills-category">
          <h3>
            <FaCog /> Desarrollo
          </h3>
          <div className="skills-grid">
            <div className="skill-card">
              <SiMysql /> <span>MySQL</span>
            </div>
            <div className="skill-card">
              <FaJava /> <span>Java</span>
            </div>
            <div className="skill-card">
              <SiSharp /> <span>C#</span>
            </div>
            <div className="skill-card">
              <FaPython /> <span>Python</span>
            </div>
            <div className="skill-card">
              <FaNodeJs /> <span>Node.js</span>
            </div>
            <div className="skill-card">
              <SiExpress /> <span>Express.js</span>
            </div>
            <div className="skill-card">
              <SiNextdotjs /> <span>Next.js</span>
            </div>
            <div className="skill-card">
              <SiJavascript /> <span>JavaScript</span>
            </div>
            <div className="skill-card">
              <FaHtml5 /> <span>HTML5</span>
            </div>
            <div className="skill-card">
              <FaCss3Alt /> <span>CSS3</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>
            <FaWrench /> Herramientas
          </h3>
          <div className="skills-grid">
            <div className="skill-card">
              <FaGitAlt /> <span>Git</span>
            </div>
            <div className="skill-card">
              <FaGithub /> <span>GitHub</span>
            </div>
            <div className="skill-card">
              <SiPostman /> <span>Postman</span>
            </div>
            <div className="skill-card">
              <SiVsco /> <span>VS Code</span>
            </div>
            <div className="skill-card">
              <SiGooglechrome /> <span>Chrome DevTools</span>
            </div>
          </div>
        </div>

        <div className="skills-category">
          <h3>
            <FaLightbulb /> Conocimientos
          </h3>
          <div className="skills-grid">
            <div className="skill-card">
              <MdSecurity /> <span>Prácticas de Seguridad</span>
            </div>
            <div className="skill-card">
              <span>API</span>
            </div>
            <div className="skill-card">
              <span>Autenticación</span>
            </div>
            <div className="skill-card">
              <span>Diseño Responsivo</span>
            </div>
            <div className="skill-card">
              <span>Aprendizaje Continuo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

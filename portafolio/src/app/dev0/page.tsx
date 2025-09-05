"use client";

import "../../styles/dev0/page.css";
import { playfairDisplay, poppins, inter } from "../../../public/fonts/font";
import FooterDev0 from "@/components/footerDev0";
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
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
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
import { MdSecurity } from "react-icons/md";



export default function Dev0Page() {
   const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="main-banner">
      {/* Navegación */}
      <ul className="nav-links">
        <li className="nav-item">
          <a
            className={inter.className}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("intro-section");
            }}
          >
            <span className="text-span">Introducción</span>
            <span className="circle-span"></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={inter.className}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about-section");
            }}
          >
            <span className="text-span">Acerca de</span>
            <span className="circle-span"></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={inter.className}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("skills-section");
            }}
          >
            <span className="text-span">Habilidades</span>
            <span className="circle-span"></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={inter.className}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("experience-section");
            }}
          >
            <span className="text-span">Experiencia</span>
            <span className="circle-span"></span>
          </a>
        </li>
        <li className="nav-item">
          <a
            className={inter.className}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("footer-dev0");
            }}
          >
            <span className="text-span">Contacto</span>
            <span className="circle-span"></span>
          </a>
        </li>
      </ul>
      {/* Introducción */}
      <section className="banner-intro" id="intro-section">
        <div className="banner-container">
          <div className="banner-title">
            <p id="name" className={playfairDisplay.className}>
              David Forero
            </p>
          </div>
          <div className="banner-occupation">
            <p id="occupation" className={poppins.className}>
              Desarrollador de software
            </p>
          </div>
        </div>
        <div className="scroll-down">
          <p>Ver más</p>
          <p>↓</p>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="banner-about" id="about-section">
        <div className="text-about">
          <h1>Sobre mí</h1>
          <p>
            Soy David Forero, <strong>desarrollador de software</strong> con
            experiencia en la creación de <strong>aplicaciones web</strong> y{" "}
            <strong>de escritorio</strong>, así como en el{" "}
            <strong>diseño y gestión de bases de datos</strong>. Me destaco por
            aprender rápido, adaptarme a nuevas tecnologías y aportar soluciones
            que generen impacto en los proyectos. Busco formar parte de un
            equipo innovador donde pueda aplicar mis habilidades y seguir
            creciendo profesionalmente.
          </p>
        </div>
        <div className="image-about">
          <div className="image-circle">
            <img
              src="/img/user.png"
              alt="Foto de perfil"
              className="profile-image"
            />
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="banner-skills" id="skills-section">
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

      {/* Experiencia */}
      <section className="banner-experience" id="experience-section">
        <h2 className="experience-title">Experiencia</h2>

        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>SENA</h3>
              <h4>Técnico en programación de software</h4>
              <span>Enero 2020 - Diciembre 2021</span>
              <p>
                Formación en desarrollo de sistemas de información, bases de
                datos y programación.
              </p>
            </div>
          </div>

          {/* Item 1 */}
          <div className="timeline-item left">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>SENA</h3>
              <h4>
                Tecnólogo en análisis y desarrollo en sistemas de información
              </h4>
              <span>Enero 2022 - Diciembre 2022</span>
              <p>
                Formación en desarrollo de sistemas de información, bases de
                datos y programación.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>NIKKEN LTDA</h3>
              <h4>Asistente de procesos comerciales</h4>
              <span>Diciembre 2022 - Diciembre 2023</span>
              <p>
                • Creación de reportes para análisis comercial con SQL Server.{" "}
                <br />• Desarrollo y mantenimiento de tablas y vistas en SQL
                Server. <br />
                • Desarrollo de aplicativo web para descarga de datos (HTML,
                CSS, JS). <br />
                • Análisis y limpieza de datos para garantizar calidad. <br />•
                Mantenimiento del Front-End de la web con CSS.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item left">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>PHOTONIC SAS</h3>
              <h4>Soporte de Software Junior</h4>
              <span>Junio 2024 — Febrero 2025</span>
              <p>
                • Desarrollo de aplicaciones de escritorio con{" "}
                <strong>C#</strong>. <br />• Diseño y administración de{" "}
                <strong>bases de datos</strong> y procesos <strong>ETL</strong>.{" "}
                <br />• Creación de <strong>scripts en Python</strong> para
                automatización en entornos Linux. <br />• Soporte técnico y
                resolución de incidencias de software.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>Universidad Compensar</h3>
              <h4>Ingeniería de Software</h4>
              <span>Enero 2024 - Actualidad</span>
              <p>En proceso de formación en Ingeniería de Software.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterDev0 />
    </div>
  );
}

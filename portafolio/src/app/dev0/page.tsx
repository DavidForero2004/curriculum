import Link from "next/link";
import "../../styles/dev0/page.css";

import { playfairDisplay, poppins, inter } from "../../../public/fonts/font";

export default function Dev0Page() {
  return (
    <div className="main-banner">

      {/* Enlaces de navegación */}
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#intro-section" className={inter.className}>
            <span className="text-span">Introducción</span>
            <span className="circle-span"></span>
          </a>
        </li>
        <li className="nav-item">
          <a href="#about-section" className={inter.className}>
            <span className="text-span">Acerca de</span>
            <span className="circle-span"></span>
          </a>
        </li>
      </ul>

      <section className="banner-intro" id="intro-section">
        <div className="banner-container">
          <div className="banner-title">
            <p id="name" className={playfairDisplay.className}>
              David Forero
            </p>
          </div>
          <div className="banner-occupation">
            <p id="occupation" className={poppins.className}>
              Desarrollador
            </p>
          </div>
        </div>
        <div className="scroll-down">
          <p>ver más</p>
          <p>↓</p>
        </div>
      </section>
      <section className="banner-about" id="about-section">
        <div className="text-about">
          <h1>Sobre mí</h1>
          <p>
            Soy David Forero, <strong>desarrollador de software</strong> con experiencia en la
            creación de
            <strong> aplicaciones web</strong> y <strong>de escritorio</strong>,
            así como en el
            <strong> diseño y gestión de bases de datos</strong>. Me destaco por
            aprender rápido, adaptarme a nuevas tecnologías y aportar soluciones
            que generen impacto en los proyectos. Busco formar parte de un
            equipo innovador donde pueda aplicar mis habilidades y seguir
            creciendo profesionalmente.
          </p>
        </div>
        <div className="image-about">
          {/* Aquí puedes colocar una ilustración profesional o un avatar */}
        </div>
      </section>
    </div>
  );
}

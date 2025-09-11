"use client";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { inter } from "../../../public/fonts/font";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const optionsRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((p) => !p);

  // efecto que aplica el estilo al DOM cuando cambia isOpen
  useEffect(() => {
    const c = containerRef.current;
    const o = optionsRef.current;

    if (!c || !o) return;

    if (isOpen) {
      c.style.display = "block";
      o.style.display = "block";
      c.classList.add("hamburger-containerH");
      o.classList.add("options-hamburgerH");

      // 👉 cerrar al hacer click en el contenedor
      const handleClick = () => setIsOpen(false);
      c.addEventListener("click", handleClick);

      // limpiar cuando cambie o se desmonte
      return () => {
        c.removeEventListener("click", handleClick);
      };
    } else {
      c.style.display = "none";
      o.style.display = "none";
      c.classList.remove("hamburger-containerH");
      o.classList.remove("options-hamburgerH");
    }
  }, [isOpen]);

  const scrollToSection = (id: string, label: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveLabel(label);
    setIsOpen(false); // cerrar el menú al hacer clic
  };

  return (
    <div>
      {/* Botón hamburguesa */}
      <div className="icon-hamburger cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="faTimes iconFa" />
        ) : (
          <FaBars className="faBars iconFa" />
        )}
      </div>

      {/* Contenedor del menú */}
      <div
        id="hamburger-container"
        ref={containerRef}
        style={{ display: "none" }}
      >
        <div
          id="options-hamburger"
          ref={optionsRef}
          style={{ display: "none" }}
        >
          <ul className="ul">
            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("intro-section", "intro");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "intro" ? "active" : ""
                  }`}
                >
                  Introducción
                </span>
              </a>
            </li>

            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-section", "about");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "about" ? "active" : ""
                  }`}
                >
                  Acerca de
                </span>
              </a>
            </li>

            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("skills-section", "skills");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "skills" ? "active" : ""
                  }`}
                >
                  Habilidades
                </span>
              </a>
            </li>

            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("experience-section", "experience");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "experience" ? "active" : ""
                  }`}
                >
                  Experiencia
                </span>
              </a>
            </li>
            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("download-cv", "cv");
                }}
              >
                <span
                  className={`li-txt ${activeLabel === "cv" ? "active" : ""}`}
                >
                  Descargar Curriculum
                </span>
              </a>
            </li>

            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("projects-section", "projects");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "projects" ? "active" : ""
                  }`}
                >
                  Proyectos
                </span>
              </a>
            </li>

            <li className="li">
              <a
                className={inter.className}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("footer-dev0", "contact");
                }}
              >
                <span
                  className={`li-txt ${
                    activeLabel === "contact" ? "active" : ""
                  }`}
                >
                  Contacto
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

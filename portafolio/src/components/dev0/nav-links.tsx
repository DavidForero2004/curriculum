"use client";
import { useState } from "react";
import { inter } from "../../../public/fonts/font";

type NavsProps = {
  showNav: boolean;
};

export default function Navs({ showNav }: NavsProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  /** nav links **/
  const [activeLabel, setActiveLabel] = useState<string | null>(null);

  return (
    <ul className={`nav-links ${showNav ? "visible" : "hidden"}`}>
      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("intro-section");
            setActiveLabel("intro");
          }}
        >
          <span
            className={`text-span ${activeLabel === "intro" ? "active" : ""}`}
          >
            Introducción
          </span>
          <span className="circle-span"></span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-section");
            setActiveLabel("about");
          }}
        >
          <span
            className={`text-span ${activeLabel === "about" ? "active" : ""}`}
          >
            Acerca de
          </span>
          <span className="circle-span"></span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("skills-section");
            setActiveLabel("skills");
          }}
        >
          <span
            className={`text-span ${activeLabel === "skills" ? "active" : ""}`}
          >
            Habilidades
          </span>
          <span className="circle-span"></span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("experience-section");
            setActiveLabel("experience");
          }}
        >
          <span
            className={`text-span ${
              activeLabel === "experience" ? "active" : ""
            }`}
          >
            Experiencia
          </span>
          <span className="circle-span"></span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("download-cv");
            setActiveLabel("cv");
          }}
        >
          <span className={`text-span ${activeLabel === "cv" ? "active" : ""}`}>
            Descargar Curriculum
          </span>
          <span className="circle-span"></span>
        </a>
      </li>
      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("projects-section");
            setActiveLabel("projects");
          }}
        >
          <span
            className={`text-span ${
              activeLabel === "projects" ? "active" : ""
            }`}
          >
            Proyectos
          </span>
          <span className="circle-span"></span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("footer-dev0");
            setActiveLabel("contact");
          }}
        >
          <span
            className={`text-span ${activeLabel === "contact" ? "active" : ""}`}
          >
            Contacto
          </span>
          <span className="circle-span"></span>
        </a>
      </li>
    </ul>
  );
}

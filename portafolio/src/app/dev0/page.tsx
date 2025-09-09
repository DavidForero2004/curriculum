"use client";
import { useState, useEffect } from "react";
import "../../styles/dev0/page.css";
import FooterDev0 from "@/components/footerDev0";
import Habilidades from "@/components/dev0/habilidades";
import SobreMi from "@/components/dev0/about";
import Navs from "@/components/dev0/nav-links";
import Introduccion from "@/components/dev0/introduccion";
import Projects from "@/components/dev0/projects";
import Cv from "@/components/dev0/curriculum";
import Experience from "@/components/dev0/experience";

export default function Dev0Page() {
  // estado para mostrar/ocultar la navegación
  const [showNav, setShowNav] = useState<boolean>(false);

  // Detectar si estoy en el banner o más abajo (50%)
  useEffect(() => {
    const banner = document.getElementById("intro-section");
    if (!banner) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          // si está visible menos del 50% → mostrar nav
          setShowNav(ratio < 0.4);
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        // thresholds en pasos de 0.01 → súper preciso
      }
    );

    observer.observe(banner);

    return () => observer.disconnect();
  }, []);

  // --- EFECTO FADE EN SCROLL ---
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible-section");
          } else {
            entry.target.classList.remove("visible-section");
          }
        });
      },
      {
        threshold: 0.3, // se activa cuando 30% de la sección está visible
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="main-banner">
      {/* Navegación */}
      <Navs showNav={showNav} />

      {/* Introducción */}
      <Introduccion showNav={true} />

      {/* Sobre mí */}
      <SobreMi />

      {/* Habilidades */}
      <Habilidades />

      {/* Experiencia */}
      <Experience />

      {/* Curriculum */}
      <Cv />

      {/* Proyectos */}
      <Projects />

      {/* Footer */}
      <FooterDev0 />
    </div>
  );
}

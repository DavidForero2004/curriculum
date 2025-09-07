import { inter } from "../../../public/fonts/font";
import { useState } from "react";

export default function Habilidades() {
    
    // --- CARRUSEL ---
      const [currentIndex, setCurrentIndex] = useState(0);
      const visibleItems = 3;
    
      const projects = [
        {
          id: 1,
          title: "Gestor de Inventario",
          desc: "Sistema para gestionar inventario en un bar, con registro de eventos y reportes.",
        },
        {
          id: 2,
          title: "Juego Pacman 2D",
          desc: "Juego educativo en JavaScript, HTML y CSS, inspirado en Pacman.",
        },
        {
          id: 3,
          title: "CRUD Angular",
          desc: "Gestión de eventos y roles, con Angular y MySQL.",
        },
        {
          id: 4,
          title: "App Calculadora",
          desc: "Aplicación móvil de calculadora en Android (Kotlin y Java).",
        },
        {
          id: 5,
          title: "Portafolio Next.js",
          desc: "Este mismo portafolio, construido con Next.js y React Icons.",
        },
      ];
    
      const totalItems = projects.length;
      const maxIndex = totalItems - visibleItems;
    
      const nextSlide = () => {
        setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
      };
    
      const prevSlide = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
      };
  return (

      <section className="banner-projects fade-section" id="projects-section">
        <h2 className={`${inter.className} projects-title`}>Algunos Proyectos</h2>
        <div className="carousel-container">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
            }}
          >
            {projects.map((p) => (
              <div key={p.id} className="project-card">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Botones */}
        <div className="carousel-buttons">
          <button onClick={prevSlide}>‹</button>
          <button onClick={nextSlide}>›</button>
        </div>
      </section>
  );
}

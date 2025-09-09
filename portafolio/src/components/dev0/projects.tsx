import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  desc: string;
}

export default function Habilidades() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Gestor de Inventario",
      desc: "Sistema para gestionar inventario...",
    },
    { id: 2, title: "Juego Pacman 2D", desc: "Juego educativo..." },
    { id: 3, title: "CRUD Angular", desc: "Gestión de eventos..." },
    { id: 4, title: "App Calculadora", desc: "Aplicación móvil..." },
    { id: 5, title: "Portafolio Next.js", desc: "Este mismo portafolio..." },
  ];

  const visibleItems = 2; // tarjetas visibles a la vez
  const autoplay = true;
  const autoplayInterval = 5000;
  const loop = true;

  const totalItems = projects.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [cardWidthPx, setCardWidthPx] = useState(0);
  const [gapPx, setGapPx] = useState(0);

  // recalcular anchos y gaps al montar y redimensionar
  useEffect(() => {
    function recalc() {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;

      const containerW = container.clientWidth;
      const gapStr =
        window.getComputedStyle(track).getPropertyValue("gap") || "0px";
      const gap = parseFloat(gapStr);

      const v = Math.min(visibleItems, totalItems);
      const cardW = (containerW - gap * (v - 1)) / v;

      setGapPx(gap);
      setCardWidthPx(cardW);

      // ajustar currentIndex por si cambia tamaño
      const maxIndex = Math.max(0, totalItems - v);
      setCurrentIndex((prev) => Math.min(prev, maxIndex));
    }

    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [visibleItems, totalItems]);

  // calcular maxTranslateX
  const maxTranslate =
    trackRef.current && containerRef.current
      ? trackRef.current.scrollWidth - containerRef.current.clientWidth
      : 0;
  const maxIndex = Math.max(0, totalItems - visibleItems);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : loop ? 0 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : loop ? maxIndex : 0));
  };

  // autoplay
  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      nextSlide();
    }, autoplayInterval);
    return () => clearInterval(id);
  }, [autoplay, autoplayInterval, cardWidthPx, gapPx, maxTranslate]);

  const translateX = Math.min(
    currentIndex * (cardWidthPx + gapPx),
    maxTranslate
  );

  return (
    <section className="banner-projects fade-section" id="projects-section">
      <h2 className="projects-title">Algunos Proyectos</h2>

      <div className="carousel-container" ref={containerRef}>
        <div
          className="carousel-track"
          ref={trackRef}
          style={{ transform: `translateX(-${translateX}px)` }}
        >
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card"
              style={{ width: cardWidthPx ? `${cardWidthPx}px` : "auto" }}
            >
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-buttons">
        <button onClick={prevSlide} aria-label="Anterior">
          ‹
        </button>
        <button onClick={nextSlide} aria-label="Siguiente">
          ›
        </button>
      </div>
    </section>
  );
}

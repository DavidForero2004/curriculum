import { playfairDisplay, poppins, inter } from "../../../public/fonts/font";
import { useState } from "react";


type NavsProps = {
  showNav: boolean;
};

export default function Introduccion({showNav}: NavsProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const [activeLabel, setActiveLabel] = useState<string | null>(null);




  return (
    
    <section className="banner-intro fade-section" id="intro-section">
     
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
      <div className={`scroll-down ${showNav ? "visible" : ""}`} >
        <a
          className={inter.className}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("about-section");
             setActiveLabel("intro");
          }}
        >
          <p>Ver más</p>
          <p>↓</p>
        </a>
      </div>
    </section>
  );
}

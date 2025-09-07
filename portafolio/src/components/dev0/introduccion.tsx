import { playfairDisplay, poppins } from "../../../public/fonts/font";
export default function Introduccion() {
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
            <div className="scroll-down">
              <p>Ver más</p>
              <p>↓</p>
            </div>
          </section>
  );
}   
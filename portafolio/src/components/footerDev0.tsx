import { FaEnvelope, FaPhone, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLinkedin, SiCodepen } from "react-icons/si";
import { useState } from "react";

export default function FooterDev0() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2850);
      window.open(link, "_blank");
    });
  };

  return (
    <footer className="footer-dev0 relative" id="footer-dev0">
      <div className="footer-icons flex gap-4 justify-center">
        <a
          href="mailto:davidforeromoreno2016@gmail.com"
          onClick={(e) => handleCopy(e, "mailto:davidforeromoreno2016@gmail.com")}
        >
          <FaEnvelope />
        </a>
        <a
          href=""
          onClick={(e) => handleCopy(e, "tel:+573192709591")}
        >
          <FaPhone />
        </a>
        <a
          href="https://www.instagram.com/__david_forero?igsh=ZGUxd3V1NWpsZTF2"
          onClick={(e) =>
            handleCopy(
              e,
              "https://www.instagram.com/__david_forero?igsh=ZGUxd3V1NWpsZTF2"
            )
          }
        >
          <FaInstagram />
        </a>
        <a
          href="https://codepen.io/sysbzvfp-the-bashful"
          onClick={(e) => handleCopy(e, "https://codepen.io/sysbzvfp-the-bashful")}
        >
          <SiCodepen />
        </a>
        <a
          href="https://github.com/DavidForero2004"
          onClick={(e) => handleCopy(e, "https://github.com/DavidForero2004")}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/david-orlando-forero-moreno-02127a278/"
          onClick={(e) =>
            handleCopy(
              e,
              "https://www.linkedin.com/in/david-orlando-forero-moreno-02127a278/"
            )
          }
        >
          <SiLinkedin />
        </a>
      </div>

      <p className="text-center mt-4">
        © {currentYear} David Forero.<br /> Todos los derechos reservados.
      </p>

      {/* 🚀 ALERTA tipo SweetAlert */}
      {copied && (
        <div className="alert-overlay">
          <div className="alert-box">
            <h2>¡Link copiado!</h2>
            <p>El enlace ha sido guardado en tu portapapeles.</p>
            <button onClick={() => setCopied(false)}>OK</button>
          </div>
        </div>
      )}
    </footer>
  );
}

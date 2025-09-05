import { FaEnvelope, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { SiLinkedin, SiCodepen } from "react-icons/si";

export default function FooterDev0() {
  return (
    <footer className="footer-dev0" id="footer-dev0">
      <div className="footer-icons">
        <a href="mailto:tuemail@correo.com" target="_blank" rel="noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://codepen.io/" target="_blank" rel="noreferrer">
          <SiCodepen />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <SiLinkedin />
        </a>
      </div>
      <p>© 2024 David Forero. Todos los derechos reservados.</p>
    </footer>
  );
}

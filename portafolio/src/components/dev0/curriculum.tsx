
import { inter } from "../../../public/fonts/font";
import { FaDownload } from "react-icons/fa";

export default function Cv() {
  return (
    <section className="download-cv fade-section" id="download-cv">
      <div className="file">
        <a href="/api/curriculum" download>
          <h1 className={inter.className}>Descargar archivo</h1>
          <span id="download-icon">
            <FaDownload />
          </span>
        </a>
      </div>
    </section>
  );
}

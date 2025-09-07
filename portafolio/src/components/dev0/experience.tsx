
import {
  FaBriefcase,
  FaGraduationCap
} from "react-icons/fa";


export default function Experience() {
  return (
   
 <section className="banner-experience fade-section" id="experience-section">
        <h2 className="experience-title">Experiencia</h2>
        <div className="timeline">
          {/* Item 1 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>SENA</h3>
              <h4>Técnico en programación de software</h4>
              <span>Enero 2020 - Diciembre 2021</span>
              <p>
                Formación en desarrollo de sistemas de información, bases de
                datos y programación.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item left">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>SENA</h3>
              <h4>
                Tecnólogo en análisis y desarrollo en sistemas de información
              </h4>
              <span>Enero 2022 - Diciembre 2022</span>
              <p>
                Formación en desarrollo de sistemas de información, bases de
                datos y programación.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>NIKKEN LTDA</h3>
              <h4>Asistente de procesos comerciales</h4>
              <span>Diciembre 2022 - Diciembre 2023</span>
              <p>
                • Creación de reportes para análisis comercial con SQL Server.{" "}
                <br />• Desarrollo y mantenimiento de tablas y vistas en SQL
                Server. <br />
                • Desarrollo de aplicativo web para descarga de datos (HTML,
                CSS, JS). <br />
                • Análisis y limpieza de datos para garantizar calidad. <br />•
                Mantenimiento del Front-End de la web con CSS.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className="timeline-item left">
            <div className="timeline-icon">
              <FaBriefcase />
            </div>
            <div className="timeline-content">
              <h3>PHOTONIC SAS</h3>
              <h4>Soporte de Software Junior</h4>
              <span>Junio 2024 — Febrero 2025</span>
              <p>
                • Desarrollo de aplicaciones de escritorio con{" "}
                <strong>C#</strong>. <br />• Diseño y administración de{" "}
                <strong>bases de datos</strong> y procesos <strong>ETL</strong>.{" "}
                <br />• Creación de <strong>scripts en Python</strong> para
                automatización en entornos Linux. <br />• Soporte técnico y
                resolución de incidencias de software.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className="timeline-item right">
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>Universidad Compensar</h3>
              <h4>Ingeniería de Software</h4>
              <span>Enero 2024 - Actualidad</span>
              <p>En proceso de formación en Ingeniería de Software.</p>
            </div>
          </div>
        </div>
      </section>)}
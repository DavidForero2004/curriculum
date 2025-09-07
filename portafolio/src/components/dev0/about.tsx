export default function SobreMi() {
  return (
    <section className="banner-about fade-section" id="about-section">
      <div className="text-about">
        <h1>Sobre mí</h1>
        <p>
          Soy David Forero, <strong>desarrollador de software</strong> con
          experiencia en la creación de <strong>aplicaciones web</strong> y{" "}
          <strong>de escritorio</strong>, así como en el{" "}
          <strong>diseño y gestión de bases de datos</strong>. Me destaco por
          aprender rápido, adaptarme a nuevas tecnologías y aportar soluciones
          que generen impacto en los proyectos. Busco formar parte de un equipo
          innovador donde pueda aplicar mis habilidades y seguir creciendo
          profesionalmente.
        </p>
      </div>
      <div className="image-about">
        <div className="image-circle">
          <img
            src="/img/user.png"
            alt="Foto de perfil"
            className="profile-image"
          />
        </div>
      </div>
    </section>
  );
}

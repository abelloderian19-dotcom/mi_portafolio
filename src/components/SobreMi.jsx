function SobreMi({ nombre, profesion, biografia, imagen, tecnologias }) {
  return (
    <section id="sobre-mi" className="about-section section-shell" aria-labelledby="about-title">
      <div className="about-photo-wrap">
        <img
          src={imagen}
          alt={`Retrato de ${nombre}`}
          className="about-photo"
          width="360"
          height="360"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="about-copy">
        <p className="eyebrow">UN POCO SOBRE MÍ</p>
        <h2 id="about-title">Hola, soy {nombre}</h2>
        <p className="about-role">{profesion}</p>
        <p className="about-bio">{biografia}</p>

        <h3 className="skills-title">Tecnologías que estoy aprendiendo</h3>
        <ul className="skills-list" aria-label="Tecnologías">
          {tecnologias.map((tecnologia) => (
            <li className="skill-tag" key={tecnologia}>{tecnologia}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default SobreMi;

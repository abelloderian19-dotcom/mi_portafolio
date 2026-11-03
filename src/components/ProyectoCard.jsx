function ProyectoCard({ proyecto }) {
  return (
    <article className="card project-card h-100">
      <img
        src={proyecto.imagen}
        className="card-img-top project-image"
        alt={proyecto.alt}
        width="640"
        height="360"
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <p className="project-type">{proyecto.enfoque}</p>
        <h3 className="card-title h5">{proyecto.titulo}</h3>
        <p className="card-text project-description">{proyecto.descripcion}</p>
        <div className="project-tech" aria-label={`Tecnologías: ${proyecto.tecnologias.join(', ')}`}>
          <span className="project-tech-label">Tecnologías</span>
          {proyecto.tecnologias.map((tecnologia) => (
            <span className="project-tech-tag" key={tecnologia}>{tecnologia}</span>
          ))}
        </div>
        <div className="d-flex flex-wrap gap-2 mt-auto">
          <a
            className="btn btn-outline-primary project-link align-self-start"
            href={proyecto.enlace}
            target="_blank"
            rel="noreferrer"
          >
            {proyecto.tipoEnlace}<span className="visually-hidden">: {proyecto.titulo}</span>
            <span aria-hidden="true"> ↗</span>
          </a>
          {proyecto.enlaceDemo && (
            <a
              className="btn btn-primary project-link align-self-start"
              href={proyecto.enlaceDemo}
              target="_blank"
              rel="noreferrer"
            >
              {proyecto.tipoEnlaceDemo || 'Ver demo'}<span className="visually-hidden">: {proyecto.titulo}</span>
              <span aria-hidden="true"> ↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProyectoCard;

function NoticiaCard({ noticia }) {
  const fechaLegible = new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${noticia.fecha}T00:00:00Z`));

  return (
    <article className="card news-card h-100">
      <div className="card-body">
        <time className="news-date" dateTime={noticia.fecha}>{fechaLegible}</time>
        <h3 className="card-title h5">{noticia.titulo}</h3>
        <p className="card-text">{noticia.contenido}</p>
      </div>
    </article>
  );
}

export default NoticiaCard;

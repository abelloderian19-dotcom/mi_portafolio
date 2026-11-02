
function SobreMi({ nombre, profesion, biografia, imagen, tecnologias }) {
  return (
    <section id="sobre-mi" className="container py-5">

      <div className="row align-items-center">

        {/* Fotografía */}
        <div className="col-md-5 text-center mb-4 mb-md-0">
          <img
            src={imagen}
            alt={`Fotografía de ${nombre}`}
            className="img-fluid rounded-circle shadow"
            style={{
              width: '260px',
              height: '260px',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Información personal */}
        <div className="col-md-7">

          <h2 className="fw-bold mb-3">
            Sobre mí
          </h2>

          <h3 className="text-primary">
            ¡Hola! Soy {nombre}
          </h3>

          <h5 className="text-secondary mb-3">
            {profesion}
          </h5>

          <p className="text-muted">
            {biografia}
          </p>

          <h5 className="mt-4 mb-3">
            Mis conocimientos
          </h5>

          <div className="d-flex flex-wrap gap-2">
            {tecnologias.map((tecnologia, index) => (
              <span
                className="badge bg-primary p-2"
                key={index}
              >
                {tecnologia}
              </span>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}

export default SobreMi;

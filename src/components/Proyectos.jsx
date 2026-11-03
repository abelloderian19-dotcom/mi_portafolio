import proyectos from '../data/proyectos';
import ProyectoCard from './ProyectoCard';

function Proyectos() {
  return (
    <section id="proyectos" className="projects-section" aria-labelledby="projects-title">
      <div className="container">
        <div className="projects-heading">
          <p className="eyebrow">TRABAJO SELECCIONADO</p>
          <h2 id="projects-title">Proyectos</h2>
          <p className="projects-intro">Algunos trabajos y aprendizajes que he desarrollado durante mi formación.</p>
        </div>
        <div className="row g-4">
          {proyectos.map((proyecto) => (
            <div className="col-md-6 col-lg-4" key={proyecto.id}>
              <ProyectoCard proyecto={proyecto} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Proyectos;

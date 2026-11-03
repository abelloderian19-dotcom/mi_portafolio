import { useState } from 'react';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';

const perfil = {
  nombre: 'Alan Abello',
  profesion: 'Estudiante y desarrollador web',
  biografia:
    'En este portafolio comparto lo que voy aprendiendo y los proyectos que construyo con React.',
  imagen: `${import.meta.env.BASE_URL}images/perfil.jpg`,
  tecnologias: ['React', 'JavaScript', 'Bootstrap', 'HTML', 'CSS'],
};

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark site-navbar">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#inicio" onClick={cerrarMenu}>
          Alan Abello<span className="brand-dot">.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-controls="portfolio-menu"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div id="portfolio-menu" className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {[
              ['Inicio', '#inicio'],
              ['Sobre mí', '#sobre-mi'],
              ['Proyectos', '#proyectos'],
              ['Noticias', '#noticias'],
              ['Contacto', '#contacto'],
            ].map(([texto, enlace]) => (
              <li className="nav-item" key={enlace}>
                <a className="nav-link" href={enlace} onClick={cerrarMenu}>{texto}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="inicio" className="intro-hero">
          <div className="container intro-content">
            <p className="eyebrow">PORTAFOLIO · DESARROLLO WEB</p>
            <h1>Ideas que toman forma en la web.</h1>
            <p className="intro-lead">
              Hola, soy {perfil.nombre}. Este es mi espacio para mostrar lo que aprendo y creo.
            </p>
            <a className="btn btn-primary intro-button" href="#sobre-mi">Conóceme</a>
          </div>
          <div className="intro-orbit" aria-hidden="true">&lt;/&gt;</div>
        </section>
        <SobreMi {...perfil} />
        <Proyectos />
        <Noticias />
      </main>
      <footer className="site-footer">
        <div className="container">Hecho por {perfil.nombre} · Portafolio personal</div>
      </footer>
    </>
  );
}

export default App;

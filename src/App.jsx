
import { useState } from 'react';

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#inicio">
          Mi Portafolio
        </a>

        {/* Botón para celulares */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={menuAbierto}
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Enlaces */}
        <div className={`collapse navbar-collapse ${menuAbierto ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#inicio"
                onClick={() => setMenuAbierto(false)}>
                Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi"
                onClick={() => setMenuAbierto(false)}>
                Sobre mí
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#proyectos"
                onClick={() => setMenuAbierto(false)}>
                Proyectos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#noticias"
                onClick={() => setMenuAbierto(false)}>
                Noticias
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contacto"
                onClick={() => setMenuAbierto(false)}>
                Contacto
              </a>
            </li>

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

      <section id="inicio" className="container text-center mt-5">
        <h1>Bienvenido a mi portafolio</h1>
        <p>Este es mi sitio web personal desarrollado con React y Bootstrap.</p>
      </section>
    </>
  );
}

export default App;

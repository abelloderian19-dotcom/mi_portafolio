import { useEffect, useState } from 'react';
import NoticiaCard from './NoticiaCard';

function Noticias() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controlador = new AbortController();

    async function cargarNoticias() {
      try {
        const respuesta = await fetch(`${import.meta.env.BASE_URL}data/noticias.json`, {
          signal: controlador.signal,
        });

        if (!respuesta.ok) {
          throw new Error('No se pudieron cargar las noticias.');
        }

        const datos = await respuesta.json();
        setNoticias(datos);
      } catch (errorCarga) {
        if (errorCarga.name !== 'AbortError') {
          setError('No fue posible cargar las noticias. Intenta recargar la página.');
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargarNoticias();

    return () => controlador.abort();
  }, []);

  return (
    <section id="noticias" className="news-section" aria-labelledby="news-title">
      <div className="container">
        <div className="projects-heading">
          <p className="eyebrow">NOVEDADES</p>
          <h2 id="news-title">Noticias</h2>
          <p className="projects-intro">Actualizaciones de mi portafolio y proyectos.</p>
        </div>

        {cargando && <p role="status">Cargando noticias…</p>}
        {error && <p className="news-error" role="alert">{error}</p>}

        {!cargando && !error && (
          <div className="row g-4">
            {noticias.length > 0 ? (
              noticias.map((noticia) => (
                <div className="col-md-6" key={noticia.id}>
                  <NoticiaCard noticia={noticia} />
                </div>
              ))
            ) : (
              <p role="status">Todavía no hay noticias publicadas.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Noticias;

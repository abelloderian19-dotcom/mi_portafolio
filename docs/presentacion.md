# Guía para la presentación del portafolio

Esta guía sirve para preparar una exposición breve y explicar el código con palabras propias. Se puede acompañar con la captura del README y una demostración en vivo.

## 1. Objetivo y resultado

- Presentar perfil, proyectos académicos y noticias en una sola página.
- Mostrar el sitio publicado en GitHub Pages.
- Explicar que el contenido está dividido en componentes React reutilizables.

## 2. Cómo está organizado

- `App.jsx` arma la página y define los datos del perfil.
- `SobreMi.jsx`, `Proyectos.jsx`, `Noticias.jsx` y `ProyectoCard.jsx` separan cada parte de la interfaz.
- Las tarjetas reciben datos mediante **props**. `map()` crea una tarjeta por cada proyecto o noticia.

Pregunta para practicar: **¿Qué diferencia hay entre props y state?** Las props son datos que un componente recibe; el state guarda datos que pueden cambiar mientras la aplicación funciona.

## 3. Carga de noticias

- Las noticias viven en `public/data/noticias.json`.
- `Noticias.jsx` usa `useEffect` para pedir el archivo al cargar la sección.
- `useState` conserva las noticias y los estados de carga y error.
- `NoticiaCard.jsx` presenta cada noticia y su fecha.

Demostración posible: cambiar el título de una noticia en el JSON, volver a cargar el sitio y observar el cambio.

## 4. Pruebas

- Jasmine contiene las expectativas de cada prueba; Karma abre el navegador y ejecuta la suite.
- Las pruebas revisan contenido, imágenes, enlaces, el botón del menú y la carga correcta o fallida de noticias.
- Los informes HTML y LCOV se generan en `coverage/`.
- La suite se ejecutó en Chrome Headless; se puede ejecutar en Firefox cuando esté instalado.

Comando principal: `npm test`.

## 5. Accesibilidad, rendimiento y publicación

- Las imágenes tienen `alt`; los enlaces y botones pueden usarse con teclado.
- El menú móvil informa si está abierto y la interfaz respeta la preferencia de movimiento reducido.
- Las imágenes de proyectos usan carga diferida y versiones comprimidas; Vite minifica JavaScript y CSS al compilar.
- GitHub Actions ejecuta `npm run build` y publica `dist/` en GitHub Pages.

## Decisiones que conviene explicar

- Bootstrap aporta la cuadrícula adaptable y las Cards; el CSS propio ajusta colores, bordes y tipografía.
- La ruta base `/mi_portafolio/` permite que Vite encuentre recursos bajo la URL del repositorio en GitHub Pages.
- Separar datos y componentes hace más sencillo actualizar proyectos o noticias sin rehacer el diseño.

## Cierre

Para cerrar, mencionar qué parte costó más, qué concepto de React quedó más claro y qué mejora se haría a continuación. Completar estas respuestas con la experiencia real antes de exponer.

const rutaImagen = (nombre) => `${import.meta.env.BASE_URL}images/projects/${nombre}`;

const proyectos = [
  {
    id: 'mpaz',
    titulo: 'MPAZ PRO',
    descripcion: 'Aplicación Android para estudiantes. Guarda seguimientos, respuestas e intentos en el dispositivo; ofrece lectura de apoyo con TextToSpeech y respuesta háptica. Usa cuentas ficticias locales de demostración, no autenticación institucional.',
    enfoque: 'Aplicación para estudiantes',
    tecnologias: [
      'Kotlin 2.0',
      'Jetpack Compose',
      'Material 3',
      'MVVM',
      'ViewModel',
      'StateFlow',
      'Navigation Compose',
      'Room',
      'KSP',
      'TextToSpeech',
      'Respuesta háptica',
      'Gradle Kotlin DSL',
    ],
    imagen: rutaImagen('mpaz.svg'),
    alt: 'Ilustración representativa de una aplicación para estudiantes llamada MPAZ PRO',
    enlace: 'https://github.com/abelloderian19-dotcom/MPAZ-PRO--3/tree/develop',
    tipoEnlace: 'Ver repositorio',
  },
  {
    id: 'mil-sabores',
    titulo: 'Pastelería 1000 Sabores',
    descripcion: 'Proyecto Fullstack para una pastelería, con una interfaz de administración.',
    enfoque: 'Sitio de pastelería y administración',
    tecnologias: ['javascript' , 'html', 'css', 'bootstrap'],
    imagen: rutaImagen('milSabores.jpg'),
    alt: 'Captura de la página de inicio de Pastelería 1000 Sabores',
    enlace: 'https://github.com/abelloderian19-dotcom/Fullstack-II',
    tipoEnlace: 'Ver repositorio',
    enlaceDemo: 'https://abelloderian19-dotcom.github.io/Fullstack-II/',
    tipoEnlaceDemo: 'Ver página',
  },
  {
    id: 'stylepro',
    titulo: 'StylePro Uniformes',
    descripcion: 'Mi primera página web, creada durante el segundo semestre como proyecto inicial de desarrollo web.',
    enfoque: 'Primera página web',
    tecnologias: ['javascript' , 'html', 'css'],
    imagen: rutaImagen('stylepro.jpg'),
    alt: 'Captura de la página de inicio de StylePro Uniformes',
    enlace: 'https://styleprouniformes.vercel.app/',
    tipoEnlace: 'Ver sitio web',
  },
];

export default proyectos;

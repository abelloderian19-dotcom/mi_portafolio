import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Noticias from '../components/Noticias';
import ProyectoCard from '../components/ProyectoCard';
import SobreMi from '../components/SobreMi';

afterEach(() => {
  cleanup();
});

describe('Sección Sobre mí', () => {
  it('muestra nombre, biografía, foto y tecnologías recibidas por props', () => {
    render(
      <SobreMi
        nombre="Alan Abello"
        profesion="Estudiante"
        biografia="Estoy aprendiendo React."
        imagen="/images/perfil.jpg"
        tecnologias={['React', 'CSS']}
      />,
    );

    expect(screen.getByRole('heading', { name: 'Hola, soy Alan Abello' })).toBeTruthy();
    expect(screen.getByText('Estoy aprendiendo React.')).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Retrato de Alan Abello' }).getAttribute('src'))
      .toBe('/images/perfil.jpg');
    expect(screen.getByText('React')).toBeTruthy();
    expect(screen.getByText('CSS')).toBeTruthy();
  });
});

describe('Tarjeta de proyecto', () => {
  it('muestra el proyecto y permite abrir su repositorio y su demo', () => {
    const proyecto = {
      id: 'proyecto-prueba',
      titulo: 'Proyecto de prueba',
      descripcion: 'Descripción de prueba.',
      enfoque: 'Proyecto académico',
      tecnologias: ['React', 'Bootstrap'],
      imagen: '/images/proyecto.png',
      alt: 'Imagen del proyecto de prueba',
      enlace: 'https://github.com/alan/proyecto',
      tipoEnlace: 'Ver repositorio',
      enlaceDemo: 'https://alan.github.io/proyecto/',
      tipoEnlaceDemo: 'Ver página',
    };

    render(<ProyectoCard proyecto={proyecto} />);

    expect(screen.getByRole('heading', { name: 'Proyecto de prueba' })).toBeTruthy();
    expect(screen.getByRole('img', { name: 'Imagen del proyecto de prueba' })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Ver repositorio/ }).getAttribute('href'))
      .toBe(proyecto.enlace);
    expect(screen.getByRole('link', { name: /Ver página/ }).getAttribute('href'))
      .toBe(proyecto.enlaceDemo);
  });
});

describe('Menú de navegación', () => {
  beforeEach(() => {
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      ok: true,
      json: () => Promise.resolve([]),
    }));
  });

  it('abre el menú y lo cierra al seleccionar una sección', () => {
    render(<App />);

    const botonMenu = screen.getByRole('button', { name: 'Abrir menú' });
    fireEvent.click(botonMenu);
    expect(botonMenu.getAttribute('aria-expanded')).toBe('true');

    fireEvent.click(screen.getByRole('link', { name: 'Sobre mí' }));
    expect(botonMenu.getAttribute('aria-expanded')).toBe('false');
  });

  it('muestra un enlace de contacto que conduce al perfil de GitHub', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: '¿Hablamos de un proyecto?' })).toBeTruthy();
    expect(screen.getByRole('link', { name: /Ver mi perfil en GitHub/ }).getAttribute('href'))
      .toBe('https://github.com/abelloderian19-dotcom');
  });
});

describe('Carga de noticias desde JSON', () => {
  it('carga y muestra las noticias recibidas desde fetch', async () => {
    const noticia = {
      id: 1,
      titulo: 'Noticia de prueba',
      fecha: '2026-11-03',
      contenido: 'Contenido recibido desde JSON.',
    };
    spyOn(window, 'fetch').and.returnValue(Promise.resolve({
      ok: true,
      json: () => Promise.resolve([noticia]),
    }));

    render(<Noticias />);

    expect(screen.getByRole('status').textContent).toContain('Cargando noticias');
    expect(await screen.findByRole('heading', { name: 'Noticia de prueba' })).toBeTruthy();
    expect(screen.getByText('Contenido recibido desde JSON.')).toBeTruthy();
    expect(window.fetch).toHaveBeenCalledWith('/data/noticias.json', jasmine.any(Object));
  });

  it('muestra un mensaje accesible si falla la carga', async () => {
    spyOn(window, 'fetch').and.returnValue(Promise.reject(new Error('Sin conexión')));

    render(<Noticias />);

    expect(await screen.findByRole('alert')).toBeTruthy();
  });
});

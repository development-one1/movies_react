//  BrowserRouter, Routes, Route

import { NavLink } from "react-router-dom";
import { useState } from "react";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";
import { Listado } from "./components/Listado";
import "./index.css";

function App() {
  const [ listadoState, setListadoState ] = useState([]);

  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Pelis</h1>
      </header>

      {/* Barra de navegación */}
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/peliculas">Películas</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <section className="content">
        <Listado listadoState={listadoState} setListadoState={setListadoState} />
      </section>

      {/* Barra lateral */}
      <aside className="lateral">
        <Buscador listadoState={listadoState} setListadoState={setListadoState} />
        <Crear setListadoState={setListadoState} />
      </aside>

      {/* Pie de página */}
      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript -
        <a href="https://andresfelipe.com">Andrés Felipe</a>
      </footer>
    </div>
  );
}

export default App;

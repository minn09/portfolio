import "./navbar.css";
function NavBar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="/">Inicio</a>
        </li>
        <li>
          <a href="/projects">Proyectos</a>
        </li>
      </ul>
      <ul className="nav-settings">
        <li>
          <a href="/idioma">Español/Ingles</a>
        </li>
        <li>
          <a href="/modo">Oscuro/Claro</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

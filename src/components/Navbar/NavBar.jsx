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
        <li>
          <a href="/sobre-mi">Sobre mi</a>
        </li>
      </ul>
      <ul className="nav-settings">
        <li>
          <a href="/idioma">
            <img
              className="icon"
              src="./assets/images/blanco-negro.png"
              alt=""
            />
          </a>
        </li>
        <li>
          <a href="/modo">
            <img
              className="icon"
              src="./assets/images/icons8-traductor-google-60.png"
              alt=""
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

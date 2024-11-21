import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ReactLogo from "../../assets/svg/react.svg";
import PythonLogo from "../../assets/svg/python.svg";
import TailwindLogo from "../../assets/svg/tailwind.svg";
import TypescriptLogo from "../../assets/svg/typescript.svg";
import "./Card.component.css"; // Asegúrate de importar el archivo CSS

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        {/* Imagen del proyecto */}
        <div className="image-container">
          <img src="logo.png" alt="Project Logo" className="card-image" />
        </div>

        {/* Información del proyecto */}
        <div className="info-container">
          <h2 className="title">Proyecto 1:</h2>
          <p className="description">
            Este proyecto se realizó haciendo unas cosas hechas.
          </p>

          {/* Tecnologías */}
          <div className="card-technologies">
            <img src={ReactLogo} alt="React Logo" className="card-icon" />
            <img
              src={TypescriptLogo}
              alt="Typescript Logo"
              className="card-icon"
            />
            <img src={TailwindLogo} alt="Tailwind Logo" className="card-icon" />
            <img src={PythonLogo} alt="Python Logo" className="card-icon" />
          </div>

          {/* Botones */}
          <div className="buttons">
            <a
              href="https://github.com"
              target="_blank"
              className="button-code"
            >
              <FaGithub className="button-icon" /> Code
            </a>
            <a
              href="https://example.com"
              target="_blank"
              className="button-demo"
            >
              <FaExternalLinkAlt className="button-icon" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

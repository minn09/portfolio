import { HiOutlineExternalLink } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import ReactLogo from "/assets/svg/react.svg";
import PythonLogo from "/assets/svg/python.svg";
import TailwindLogo from "/assets/svg/tailwind.svg";
import TypescriptLogo from "/assets/svg/typescript.svg";
import "./Card.component.css"; // Asegúrate de importar el archivo CSS

const Card = () => {
  return (
    <div className="card-container">
      <div className="card-content">
        {/* Imagen del proyecto */}
        <div className="image-container">
          <img
            src="/assets/images/github.png"
            alt="Project Logo"
            className="card-image"
          />
        </div>

        {/* Información del proyecto */}
        <div className="info-container">
          <h2 className="title">Demo Proyect:</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            tempore rerum ipsa aliquid.
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
              <AiFillGithub size={30} className="button-icon" /> Code
            </a>
            <a
              href="https://example.com"
              target="_blank"
              className="button-demo"
            >
              <HiOutlineExternalLink size={30} className="button-icon" /> Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

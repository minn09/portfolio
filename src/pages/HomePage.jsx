import "../global.css";
import "./homepage.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
function HomePage() {
  return (
    <div className="container">
      <h1 className="name">¡Hola!, soy Jonathan</h1>
      <h2 className="subtitle">
        Soy desarrollador de software enfocado en el desarrollo web frontend,
        estoy en busca de oportunidades para contribuir y crecer en el mundo de
        la tecnología
      </h2>

      <div className="button-container">
        <button className="button">
          <AiOutlineMail size={30} color="white" className="icon" />
          <span>Email</span>
        </button>

        <button className="button">
          <AiFillGithub size={30} color="white" className="icon" />
          <span>Github</span>
        </button>

        <button className="button">
          <AiFillLinkedin size={30} color="white" className="icon" />
          <span>Linkedin</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;

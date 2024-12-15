import "../global.css";
import "./homepage.css";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
function HomePage() {
  return (
    <header className="container">
      <h1 className="name">¡Hola!, soy Jonathan</h1>
      <h2 className="subtitle">
        Soy desarrollador de software enfocado en el desarrollo web frontend,
        estoy en busca de oportunidades para contribuir y crecer en el mundo de
        la tecnología
      </h2>

      <article className="button-container">
        <button className="button">
          <AiOutlineMail size={30} className="icon" />
          <span>Email</span>
        </button>

        <button className="button">
          <AiFillGithub size={30} className="icon" />
          <span>Github</span>
        </button>

        <button className="button">
          <AiFillLinkedin size={30} className="icon" />
          <span>Linkedin</span>
        </button>
      </article>
    </header>
  );
}

export default HomePage;

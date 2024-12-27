import "./homepage.css";
import "../global.css";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiTwotoneContainer,
} from "react-icons/ai";
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
        <div className="contact">
          <button className="button">
            <AiTwotoneContainer className="button-icon" />
            <span className="button-text">Resume</span>
          </button>
          <button className="button">
            <AiOutlineMail className="button-icon" />
            <span className="button-text">Email</span>
          </button>
        </div>
        <div className="social">
          <button className="button">
            <AiFillGithub className="button-icon" />
            <span className="button-text">Github</span>
          </button>

          <button className="button">
            <AiFillLinkedin className="button-icon" />
            <span className="button-text">Linkedin</span>
          </button>
        </div>
      </article>
    </header>
  );
}

export default HomePage;

import "../global.css";
import "./homepage.css";
import { MdEmail, MdContactMail } from "react-icons/md"; // Icono de Material Design
function HomePage() {
  return (
    <div className="container">
      <h1 className="name">Hola, soy Jonathan</h1>
      <h2 className="subtitle">
        Soy desarrollador de software enfocado en el desarrollo web frontend,
        estoy en busca de oportunidades para contribuir y crecer en el mundo de
        la tecnología
      </h2>
      <div className="contact-container">
        <div className="button-container">
          <button className="button">
            <MdContactMail size={30} color="white" className="icon-homepage" />
            <span>Resume</span>
          </button>

          <button className="button">
            <MdEmail size={30} color="white" className="icon" />
            <span>Email</span>
          </button>
        </div>
        <div className="images-container">
          <img
            className="image"
            src="/assets/images/github.png"
            alt="Github Avatar"
          />
          <img
            className="image"
            src="./assets/images/linkedin.png"
            alt="Linkedin Avatar"
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

import "../global.css";
import "./homepage.css";
import Technologies from "../components/Technologies";
function HomePage() {
  return (
    <div className="container">
      <h1 className="name">Hola, soy Jonathan</h1>
      <h2 className="subtitle">

        Soy apasionado estudiante de ingeniería de software especializado en
        Desarrollo Web en busca de oportunidades para contribuir y crecer en el
        mundo de la tecnología.
      </h2>

      <div className="images-container">
        <img className="image" src="./assets/github.png" alt="Github Avatar" />
        <img
          className="image"
          src="./assets/linkedin.png"
          alt="Linkedin Avatar"
        />

        Soy apasionado estudiante de ingeniería de software en busca de
        oportunidades para contribuir y crecer en el mundo de la tecnología.
      </h2>

      <div className="images-container">
        <img className="image" src="./assets/github.png" alt="Avatar" />
        <img className="image" src="./assets/linkedin.png" alt="Avatar" />

      </div>

      <div className="buttons-container">
        <button>Curriculum vitae</button>
        <button>Contactame</button>
      </div>

      <Technologies />



      <div>Proyectos</div>

    </div>
    //TODO: create paths for the routes
  );
}

export default HomePage;

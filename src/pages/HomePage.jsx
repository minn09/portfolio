import "../global.css";
import "./homepage.css";
function HomePage() {
  return (
    <div className="container">
      <h1 className="name">Jonathan Huertas</h1>
      <h2 className="subtitle">
        Desarrollador Web Front-end, Javascript, React, Node.js, Express,
        MongoDB
      </h2>

      <div className="images-container">
        <img
          src="https://avatars.githubusercontent.com/u/10026465?v=4"
          alt="Avatar"
        />
        <img
          src="https://avatars.githubusercontent.com/u/10026465?v=4"
          alt="Avatar"
        />
      </div>

      <div className="buttons-container">
        <button>Curriculum vitae</button>
        <button>Contactame</button>
      </div>
    </div>
  );
}

export default HomePage;

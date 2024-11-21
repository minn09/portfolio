import "./technologies.css";

function Technologies() {
  return (
    <div className="technologies">
      <h2>Tecnologías</h2>
      <div className="technologies-container">
        <div className="technology">
          <img src="./assets/html.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="technology">
          <img src="./assets/css.svg" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="technology">
          <img src="./assets/javascript.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="technology">
          <img src="./assets/react.png" alt="React" />
          <p>React</p>
        </div>
        <div className="technology">
          <img src="./assets/python.png" alt="Python" />
          <p>Python</p>
        </div>
      </div>
    </div>
  );
}

export default Technologies;

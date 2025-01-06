import "./technologies.css";

function Technologies() {
  return (
    <article className="technologies">
      <h2 className="technology-tittle">Tecnologías</h2>
      <div className="technologies-container">
        <div className="technology">
          <img src="/assets/svg/html.svg" alt="HTML" />
          <p className="technology-text">HTML</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/css.svg" alt="CSS" />
          <p className="technology-text">CSS</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/js.svg" alt="JavaScript" />
          <p className="technology-text">JavaScript</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/react.svg" alt="React" />
          <p className="technology-text">React</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/python.svg" alt="Python" />
          <p className="technology-text">Python</p>
        </div>
      </div>
    </article>
  );
}

export default Technologies;

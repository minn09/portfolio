import "./technologies.css";

function Technologies() {
  return (
    <article className="technologies">
      <h2>Tecnologías</h2>
      <div className="technologies-container">
        <div className="technology">
          <img src="/assets/svg/html.svg" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/css.svg" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/js.svg" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/react.svg" alt="React" />
          <p>React</p>
        </div>
        <div className="technology">
          <img src="./assets/svg/python.svg" alt="Python" />
          <p>Python</p>
        </div>
      </div>
    </article>
  );
}

export default Technologies;

import "./Footer.css";
import { FaRegClipboard } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const email = "jonathan.huertas.contreras@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    alert("Correo copiado al portapapeles");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Botón del correo */}
        <button className="email-button">
          <AiOutlineMail className="icon" />
          <span className="email">{email}</span>
        </button>

        {/* Botón de copiar */}
        <button className="copy-button" onClick={handleCopy}>
          <FaRegClipboard className="icon" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;

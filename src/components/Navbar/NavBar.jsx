import "./navbar.css";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";

function NavBar() {
  return (
    <nav>
      <div className="nav-container-buttons">
        <div className="nav-buttons">
          <div className="button-translate">
            <button>
              <BsTranslate className="icon" />
            </button>
          </div>
          <div className="button-change-mode">
            <button>
              <FaCircleHalfStroke className="icon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

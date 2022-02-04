import "./style.css";
import { FiX, FiClipboard } from "react-icons/fi";

const LinkItem = () => {
  return (
    <div className="modal-container">

      <div className="modal-header">
        <h2>Link Encurtado!</h2>
        <button>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>
          https://google.com
      </span>

      <button className="modal-link">
          https://google.com
          <FiClipboard size={20} color="#fff"/>
      </button>
      
    </div>
  );
};

export default LinkItem;

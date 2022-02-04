import "./style.css";
import { FiX, FiClipboard } from "react-icons/fi";

const LinkItem = ({ closeModal, linkEncurtado }) => {

  async function copyLink () {
    await navigator.clipboard.writeText(linkEncurtado.link)
    alert('Url Copiada com sucesso');
  }

  return (
    <div className="modal-container">

      <div className="modal-header">
        <h2>Link Encurtado!</h2>

        <button onClick={closeModal}>
          <FiX size={28} color="#000" />
        </button>
      </div>

      <span>
          {linkEncurtado.long_url}
      </span>

      <button className="modal-link" onClick={copyLink}>
          {linkEncurtado.link}
          <FiClipboard size={20} color="#fff"/>
      </button>
      
    </div>
  );
};

export default LinkItem;

import { useState, useEffect } from "react";
import "./style.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSaved } from "../../services/storedLinks";

const LinksPage = () => {
  //estado responsavel por carregar os links
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState([]);
  //modal
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved("shotLink");
      if (result.length === 0) {
        //lista vazia
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  return (
    <main className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {myLinks.map((link) => (

        <div key={link.id} className="links-item">

          <buttom className="link">
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </buttom>

          <buttom className="link-delete">
            <FiTrash size={24} color="#FF5454" />
          </buttom>          
        </div>
      ))}
    </main>
  );
};

export default LinksPage;

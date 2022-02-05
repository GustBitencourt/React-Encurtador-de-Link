import { useState, useEffect } from "react";
import "./style.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSaved } from "../../services/storedLinks";
import LinkItem from "../../components/LinkItem";

const LinksPage = () => {
  
  //estado responsavel por carregar os links
  const [myLinks, setMyLinks] = useState([]);

  //modal - abrir e fechar com as informações
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved("shotLink");
      if (result.length === 0) {
        //lista vazia
      }

      //todos os links salvos no LocalStorage
      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);

  }

  return (
    <main className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {/* percorre array de links salvos no storage para monta-lo */}
      {myLinks.map((link) => (

        <div key={link.id} className="links-item">

          <buttom className="link" onClick={ () => handleOpenLink(link)} >
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </buttom>

          <buttom className="link-delete">
            <FiTrash size={24} color="#FF5454" />
          </buttom>          
        </div>
      ))}
      
      {/* modal igual da home */}
      {
        showModal && (
          <LinkItem 
          closeModal={() => setShowModal(false)}
          linkEncurtado={data}
          />
        )
      }
    </main>
  );
};

export default LinksPage;

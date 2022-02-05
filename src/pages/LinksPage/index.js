import { useState, useEffect } from "react";
import "./style.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSaved, deleteLink } from "../../services/storedLinks";
import LinkItem from "../../components/LinkItem";

const LinksPage = () => {
  
  //estado responsavel por carregar os links
  const [myLinks, setMyLinks] = useState([]);

  //modal - abrir e fechar com as informações
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  //estado para quando lista estiver vazia
  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSaved("shortLink");
      if (result.length === 0) {
        //lista vazia
        setEmptyList(true);
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

  async function handleDelete(id) {
    const result = await deleteLink(myLinks, id);

    if(result.length === 0) {
      console.log('sem links salvos');
      setEmptyList(true);
    }

    setMyLinks(result);    
  }

  return (
    <main className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      {/* Mensagem pra quando não houver links salvos */}
      {
        emptyList && (
          <div className="links-item">
            <h2 className="empty-text">Você não possui links salvos!</h2>

          </div>
        )
      }

      {/* percorre array de links salvos no storage para monta-lo */}
      {myLinks.map((link) => (

        <div key={link.id} className="links-item">

          <buttom className="link" onClick={ () => handleOpenLink(link)} >
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </buttom>

          <buttom className="link-delete">
            <FiTrash size={24} color="#FF5454" onClick={() => handleDelete(link.id)} />
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

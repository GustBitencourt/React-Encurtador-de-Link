import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Logo from '../../assets/img/Logo.svg';
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/Menu';
import api from '../../services/api';
import { saveLink, getLinksSaved } from '../../services/storedLinks';
import "./style.css";

const Home = () => {
  const [link, setLink] = useState('');
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleSubmitLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link
      })

      //resposta da api com o link encurtado
      setData(response.data);
      setShowModal(true);

      //salvar link no storage - com a chave
      saveLink('shortLink', response.data);

    } catch (err) {
      alert('Algo deu errado!');
      setLink('');
    }
  }

  return (
    <main className="container-home">

      <div className="logo">

        <img src={Logo} alt="Link Logo" title="Link Logo" />
        <h1>Encurta Link</h1>
        <span>Encurte o seu link 👇🏼</span>

      </div>

      <div className="input-area">

        <div>
          <FiLink size={24} color="#FFF" />
          <input 
            placeholder="Cole o seu link aqui"
            value={link}
            onChange={(event) => setLink(event.target.value)}
          />
        </div>
        
        <button onClick={handleSubmitLink}>Encurtar Link</button>
      </div>

      <Menu />

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

export default Home;

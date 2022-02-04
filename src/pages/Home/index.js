import { useState } from 'react';
import { FiLink } from 'react-icons/fi';
import Logo from '../../assets/img/Logo.svg';
import LinkItem from '../../components/LinkItem';
import Menu from '../../components/Menu';
import "./style.css";

const Home = () => {
  const [link, setLink] = useState('');
  const [showModal, setShowModal] = useState(false);

  function handleSubmitLink() {
    console.log(`Link: ${link}`);
    setShowModal(true);
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
          <LinkItem />
        )
      }
    </main>
  );
};

export default Home;

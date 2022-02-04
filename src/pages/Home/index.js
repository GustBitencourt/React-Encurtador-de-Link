import { FiLink } from "react-icons/fi";
import Logo from "../../assets/img/Logo.svg";
import "./style.css";

const Home = () => {
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
          <input placeholder="Cole o seu link aqui" />
        </div>
        
        <button>Encurtar Link</button>
      </div>

    </main>
  );
};

export default Home;

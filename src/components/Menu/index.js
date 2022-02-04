import './style.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const Menu = () => {
  return (
      <div className="menu">
          <a className="social" href="https://github.com/GustBitencourt" target="_black" >
              <BsGithub size={24} color="#fff"/>
          </a>

          <a className="social" href="https://www.linkedin.com/in/gustavo-bitencourt-081615204/" target="_black">
              <BsLinkedin size={24} color="#fff"/>
          </a>

          <Link className="menu-item" to="/mylinks">
            Meus Links          
          </Link>


      </div>
  );
};

export default Menu;

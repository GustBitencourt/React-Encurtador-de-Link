import './style.css';
import Erro from '../../assets/img/notfound.svg';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
      <div className="container-error">
          <img src={Erro} alt="página de erro 404" title="Erro" />
          <h1>Not Found - 404</h1>

          <Link to="/">
              Voltar para Home          
          </Link>
      </div>
  );
};

export default NotFound;
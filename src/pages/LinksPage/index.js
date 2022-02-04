import './style.css';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LinksPage = () => {
  return (
    <main className="links-container">

      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus Links</h1>
      </div>

      <div className="links-item">

        <buttom className="link">
          <FiLink size={18} color="#fff" />
          https://www.google.com
        </buttom>

        <buttom className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </buttom>

      </div>

      <div className="links-item">

        <buttom className="link">
          <FiLink size={18} color="#fff" />
          https://www.google.com
        </buttom>

        <buttom className="link-delete">
          <FiTrash size={24} color="#FF5454" />
        </buttom>

      </div>
    </main>
  );
};

export default LinksPage;

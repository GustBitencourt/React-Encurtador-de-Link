import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LinksPage from '../pages/LinksPage';

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylinks" element={<LinksPage />} />
        </Routes>
      </BrowserRouter>
    )
};
  
export default RoutesApp;
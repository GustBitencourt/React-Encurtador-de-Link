import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LinksPage from '../pages/LinksPage';
import NotFound from '../pages/NotFound';

const RoutesApp = () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mylinks" element={<LinksPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    )
};
  
export default RoutesApp;
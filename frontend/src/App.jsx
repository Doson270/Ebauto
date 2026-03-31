import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'; // Import de ta nouvelle Navbar
import Accueil from './pages/Accueil';
import Avis from './pages/Avis';
import Devis from './pages/Devis';
import FAQ from './pages/Faq';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="relative">
          <Navbar /> {/* Elle est ici, à l'extérieur des Routes ! */}
          
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/avis" element={<Avis />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/devis" element={<Devis />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
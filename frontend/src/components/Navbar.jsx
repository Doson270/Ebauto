import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Wrench, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Fonction pour vérifier si le lien est actif (pour mettre la couleur bleue)
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Avis Clients', path: '/avis' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed w-full z-[100] bg-white border-b border-gray-100 shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-blue-700 p-2 rounded-lg group-hover:bg-blue-800 transition-colors">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-blue-950">
              SOS<span className="text-blue-600">EBAutomobiles</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-bold transition-colors ${
                  isActive(link.path) 
                    ? 'text-blue-600' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Bouton Devis qui se démarque */}
            <Link 
              to="/devis" 
              className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition shadow-md hover:shadow-orange-200 flex items-center gap-2"
            >
              Devis Gratuit
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-950 p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold ${isActive(link.path) ? 'text-blue-600' : 'text-gray-800'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/devis"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-blue-700 text-white py-4 rounded-xl font-bold"
            >
              Demander un Devis
            </Link>
            <a href="tel:+33744206592" className="flex items-center justify-center gap-2 text-blue-700 font-bold py-2">
              <Phone size={18} /> Appeler le garage
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
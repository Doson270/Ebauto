import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Cette ligne force le navigateur à remonter tout en haut
    window.scrollTo(0, 0);
  }, [pathname]); // Se déclenche à chaque fois que l'URL change

  return null; // Le composant ne doit rien afficher visuellement
};

export default ScrollToTop;
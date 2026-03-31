import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-gray-100 transition-all ${isOpen ? 'bg-blue-50/30' : ''}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left px-6"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-blue-700' : 'text-blue-950'}`}>
          {question}
        </span>
        <div className={`p-2 rounded-full transition-transform ${isOpen ? 'bg-blue-700 text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-8 px-6' : 'max-h-0'}`}>
        <p className="text-gray-600 leading-relaxed text-base">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "Combien coûte un passage à la valise de diagnostic ?",
      answer: "Le forfait diagnostic électronique est à 60€. Cela comprend la lecture des codes défauts, l'effacement des erreurs mineures et un rapport détaillé sur l'état de vos calculateurs. Si nous effectuons les réparations, une partie de ce forfait peut être déduite."
    },
    {
      question: "Combien de temps faut-il pour une recherche de panne électrique ?",
      answer: "Les pannes de faisceaux électriques sont complexes. En général, un premier diagnostic est posé en 1h à 2h. Pour les réparations lourdes (faisceau moteur coupé, oxydation sévère), nous vous fournissons un devis précis après l'expertise initiale."
    },
    {
      question: "Proposez-vous des pièces d'occasion ?",
      answer: "Pour certains éléments mécaniques (moteurs, boîtes, optiques), nous pouvons travailler avec des casses certifiées afin de réduire vos coûts, tout en garantissant la pièce. Pour les éléments de sécurité (freins, direction), nous n'utilisons que du neuf."
    },
    {
      question: "Puis-je venir sans rendez-vous ?",
      answer: "Pour un simple passage à la valise, nous essayons de vous recevoir entre deux interventions. Cependant, pour toute réparation mécanique ou électrique, il est préférable de prendre rendez-vous via notre formulaire de devis pour garantir une prise en charge immédiate."
    },
    {
      question: "Mon véhicule est immobilisé, pouvez-vous vous déplacer ?",
      answer: "Nous effectuons principalement nos réparations en atelier pour disposer de tout l'équipement de diagnostic nécessaire. Toutefois, nous pouvons vous conseiller des services de remorquage partenaires pour acheminer votre voiture au garage."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header de la FAQ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
            <HelpCircle size={18} />
            <span>Questions Fréquentes</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight">
            Toutes vos questions, <br /> <span className="text-blue-600">nos réponses d'expert.</span>
          </h1>
          <p className="mt-6 text-gray-500 text-lg max-w-2xl mx-auto">
            La mécanique et l'électronique peuvent paraître complexes. Nous misons sur la transparence totale pour vous rassurer.
          </p>
        </div>

        {/* Liste Accordéon */}
        <div className="bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl shadow-blue-900/5 overflow-hidden">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* CTA si pas de réponse */}
        <div className="mt-20 bg-blue-950 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MessageCircle size={150} className="text-white" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 italic">Vous n'avez pas trouvé votre réponse ?</h3>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-lg">
            Chaque panne est unique. Contactez-nous directement pour une analyse personnalisée de votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/devis" className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg">
              Demander un Devis
            </Link>
            <a href="tel:+33744206592" className="bg-white text-blue-950 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
              <Phone size={18} />
              07 44 20 65 92
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
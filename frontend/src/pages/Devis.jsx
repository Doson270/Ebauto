import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Car, Wrench, Zap, ClipboardCheck, Loader2 } from 'lucide-react';

const Devis = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // REMPLACE CES 3 VALEURS PAR LES TIENNES SUR MAILJS
    emailjs.sendForm('service_8mgzrv3', 'template_ssph9pj', form.current, 'PTDWGuDZFgGvYCAK7')
      .then(() => {
        setStatus({ type: 'success', msg: 'Votre demande a été envoyée ! Nous vous rappelons sous 24h.' });
        form.current.reset();
      })
      .catch(() => {
        setStatus({ type: 'error', msg: 'Erreur lors de l\'envoi. Veuillez nous appeler directement.' });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-blue-950 mb-4">Demande de Devis Gratuit</h1>
          <p className="text-gray-600 text-lg">Décrivez votre problème, nous analysons votre demande avec précision.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-blue-900/5 overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          {/* Sidebar d'info */}
          <div className="bg-blue-700 md:w-1/3 p-10 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Pourquoi un devis détaillé ?</h3>
              <ul className="space-y-6">
                <li className="flex gap-3 text-sm">
                  <div className="bg-blue-600 p-2 rounded-lg h-fit"><Wrench size={18}/></div>
                  <span>Estimation juste des pièces et main d'œuvre.</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <div className="bg-blue-600 p-2 rounded-lg h-fit"><Zap size={18}/></div>
                  <span>Pré-diagnostic électrique à distance possible.</span>
                </li>
                <li className="flex gap-3 text-sm">
                  <div className="bg-blue-600 p-2 rounded-lg h-fit"><ClipboardCheck size={18}/></div>
                  <span>Engagement de transparence totale.</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 pt-8 border-t border-blue-600 italic text-blue-100 text-xs">
              "Un diagnostic précis est le début d'une réparation durable."
            </div>
          </div>

          {/* Formulaire */}
          <form ref={form} onSubmit={sendEmail} className="md:w-2/3 p-10 space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nom complet</label>
                <input type="text" name="user_name" required placeholder="Ex: Jean Martin"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                <input type="tel" name="user_phone" required placeholder="06 12 34 56 78"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Véhicule (Marque / Modèle)</label>
              <div className="relative">
                <Car className="absolute left-4 top-3.5 text-gray-400" size={18} />
                <input type="text" name="car_model" required placeholder="Ex: Peugeot 208 - 2018"
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Type d'intervention souhaitée</label>
              <select name="service_type" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition appearance-none bg-white">
                <option>Mécanique générale</option>
                <option>Électricité / Faisceaux</option>
                <option>Diagnostic Valise</option>
                <option>Entretien / Vidange</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Description du problème</label>
              <textarea name="message" rows="4" required placeholder="Décrivez les symptômes ou les voyants allumés..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition"></textarea>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl shadow-lg shadow-orange-200 transition transform hover:-translate-y-1 flex items-center justify-center gap-3">
              {loading ? <Loader2 className="animate-spin" /> : <Send size={20} />}
              {loading ? 'Envoi en cours...' : 'Envoyer ma demande gratuite'}
            </button>

            {status.msg && (
              <div className={`p-4 rounded-xl text-center font-bold ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Devis;
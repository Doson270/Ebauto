import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck, PenTool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Avis = () => {
    // Données de confiance statiques (Expertise et Réassurance)
    const avisExperts = [
        {
            id: 1,
            nom: "Marc Antoine D.",
            vehicule: "Audi A4 - Problème Électronique",
            note: 5,
            commentaire: "Bluffé par l'expertise. Deux concessions me demandaient de changer tout le faisceau moteur pour 3000€. Ici, le mécanicien a trouvé le fil coupé en 1h. Une honnêteté rare de nos jours.",
            date: "Il y a 2 semaines",
            tag: "Électronique"
        },
        {
            id: 2,
            nom: "Sophie Laroche",
            vehicule: "Renault Clio IV - Révision & Freins",
            note: 5,
            commentaire: "Garage d'une propreté impeccable, ce qui rassure tout de suite. Devis respecté au centime près, pas de 'mauvaise surprise' au moment de payer. Je reviendrai pour l'entretien annuel sans hésiter.",
            date: "Il y a 1 mois",
            tag: "Entretien"
        },
        {
            id: 3,
            nom: "Julien Vermont",
            vehicule: "BMW Série 3 - Passage Valise",
            note: 5,
            commentaire: "Voyant moteur allumé depuis des mois. Le diagnostic valise a été très précis et l'explication technique était claire, même pour quelqu'un qui n'y connaît rien. Très pro.",
            date: "Il y a 3 jours",
            tag: "Diagnostic"
        },
        {
            id: 4,
            nom: "Karim B.",
            vehicule: "Volkswagen Golf - Embrayage",
            note: 4,
            commentaire: "Réparation lourde effectuée dans les délais. On sent l'expérience derrière chaque geste. Le prix est juste pour la qualité du travail fourni. Un vrai spécialiste.",
            date: "Il y a 1 mois",
            tag: "Mécanique"
        }
    ];

    return (
        <>
<Helmet>
  <title>Avis Clients - Garage Expert [Ta Ville] | 4.9/5 sur Google</title>
  <meta name="description" content="Découvrez les témoignages de nos clients à [Ta Ville]. Spécialiste pannes complexes et électronique automobile." />
</Helmet>
<div className="pt-24 bg-gray-50 min-h-screen">            {/* Header de la page */}
            <section className="bg-blue-950 py-20 text-white text-center px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
                        La Satisfaction de nos Clients
                    </h1>
                    <p className="text-blue-200 text-lg max-w-2xl mx-auto leading-relaxed">
                        Parce qu'une réparation réussie est une relation de confiance qui dure. 
                        Découvrez pourquoi nos clients nous recommandent.
                    </p>
                    
                    {/* Badge de score global */}
                    <div className="mt-8 inline-flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm border border-white/20">
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />)}
                        </div>
                        <span className="font-bold">4.9/5 sur Google Reviews</span>
                    </div>
                </div>
            </section>

            {/* Grille des avis */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {avisExperts.map((avis) => (
                        <div key={avis.id} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative hover:border-blue-200 transition-all duration-300 group">
                            <MessageSquareQuote className="absolute top-6 right-8 w-12 h-12 text-blue-50 group-hover:text-blue-100 transition-colors" />
                            
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className={`w-4 h-4 ${i < avis.note ? 'text-orange-400 fill-orange-400' : 'text-gray-200'}`} />
                                    ))}
                                </div>
                                <span className="text-gray-400 text-xs font-medium">• {avis.date}</span>
                            </div>

                            <p className="text-gray-700 leading-relaxed text-lg italic mb-8">
                                "{avis.commentaire}"
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-50 pt-6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                                        {avis.nom.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-blue-950 flex items-center gap-1">
                                            {avis.nom} <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        </h4>
                                        <p className="text-xs text-gray-500 font-medium">{avis.vehicule}</p>
                                    </div>
                                </div>
                                <span className="text-[10px] uppercase tracking-tighter font-black bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">
                                    {avis.tag}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Garantie & Réassurance (Juste sous les avis) */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center p-6">
                        <ShieldCheck className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                        <h5 className="font-bold text-blue-950 mb-2">Pièces Garanties</h5>
                        <p className="text-sm text-gray-600">Toutes nos pièces de rechange sont certifiées d'origine ou de qualité équivalente.</p>
                    </div>
                    <div className="text-center p-6">
                        <PenTool className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                        <h5 className="font-bold text-blue-950 mb-2">Transparence Totale</h5>
                        <p className="text-sm text-gray-600">On vous explique chaque ligne de votre facture. Pas de frais cachés.</p>
                    </div>
                    <div className="text-center p-6">
                        <CheckCircle2 className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                        <h5 className="font-bold text-blue-950 mb-2">Expertise Confirmée</h5>
                        <p className="text-sm text-gray-600">Spécialiste valise et recherche de pannes électriques complexes.</p>
                    </div>
                </div>

                {/* Bouton vers Devis */}
                <div className="mt-16 text-center">
                    <Link to="/devis" className="inline-block bg-orange-500 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-orange-600 transition shadow-xl hover:shadow-orange-200">
                        Comme eux, faites-nous confiance
                    </Link>
                </div>
            </section>
        </div>
        </>
    );
};

export default Avis;
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Wrench, Zap, Cpu, CalendarDays, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import imgAccueil from '../img/image.webp'

const Accueil = () => {
  return (
    <>
      <Helmet>
        <title>SOSebautomobiles Bordeaux | Mécanique & Diagnostic Électronique</title>
        <meta name="description" content="Expert en réparation mécanique, diagnostic valise et faisceaux électriques à Bordeaux. Devis gratuit et transparence totale." />
        <meta name="keywords" content="mécanicien Bordeaux, garage automobile, diagnostic valise, réparation électrique voiture, faisceau électrique, révision auto" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": "SOSebautomobiles",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "2 sente de la Goélette",
                "addressLocality": "Bordeaux",
                "postalCode": "33100",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 44.9105,
                "longitude": -0.6369
              },
              "telephone": "+33744206592",
              "priceRange": "$$",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "08:30",
                  "closes": "18:30"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="pt-24 bg-gray-50 min-h-screen">
        {/* 2. Hero Section */}
        <section className="bg-blue-950 text-white py-24 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15">
            <img src={imgAccueil} alt="Moteur de voiture moderne" className="w-full h-full object-cover" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
            {/* Badge Localisation Cliquable */}
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=2+sente+de+la+Goélette+33100+Bordeaux"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-800/50 px-4 py-1 rounded-full text-sm text-blue-200 mb-6 border border-blue-700 hover:bg-blue-700/60 transition-all cursor-pointer group"
            >
              <MapPin className="w-4 h-4 text-blue-300 group-hover:scale-110 transition-transform" />
              <span className="hover:underline">Situé à Bordeaux, 33100 (Voir l'itinéraire)</span>
            </a>

            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight max-w-4xl">
              L'Expertise Mécanique & <span className="text-blue-400">Électronique</span> pour votre Véhicule.
            </h1>
            <p className="mt-8 text-xl text-blue-100 max-w-2xl leading-relaxed">
              Du diagnostic valise complexe à la réparation de faisceaux électriques, nous assurons la fiabilité de votre voiture, toutes marques. Devis transparent avant toute intervention.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
              {/* CORRECTION : to="/devis" en minuscules pour éviter la 404 */}
              <Link to="/devis" className="bg-orange-500 text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-orange-600 transition shadow-lg w-full sm:w-auto text-center">
                Obtenir mon Devis Gratuit
              </Link>
              <a href="tel:+33744206592" className="flex items-center gap-3 text-blue-100 font-semibold text-lg hover:text-white transition group">
                <span className="p-3 bg-blue-800/60 rounded-full group-hover:scale-105 transition"><Phone className="w-6 h-6 text-white" /></span>
                Appeler le Garage
              </a>
            </div>
          </div>
        </section>

        {/* 3. Badges de Réassurance */}
        <section className="bg-gray-50 border-y border-gray-100 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Cpu className="w-12 h-12 text-blue-600 bg-blue-50 p-3 rounded-2xl"/>
              <div>
                <h4 className="font-bold text-lg text-blue-950">Diagnostic Valise Expert</h4>
                <p className="text-gray-600 text-sm">Équipements de pointe pour localiser chaque panne.</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Zap className="w-12 h-12 text-orange-600 bg-orange-50 p-3 rounded-2xl"/>
              <div>
                <h4 className="font-bold text-lg text-blue-950">Électricité & Faisceaux</h4>
                <p className="text-gray-600 text-sm">Spécialiste des pannes électriques complexes.</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <CalendarDays className="w-12 h-12 text-green-600 bg-green-50 p-3 rounded-2xl"/>
              <div>
                <h4 className="font-bold text-lg text-blue-950">Devis Rapide & Transparent</h4>
                <p className="text-gray-600 text-sm">Pas de surprise, vous validez avant réparation.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* 4. Section Services */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-blue-700 font-semibold">Nos Compétences</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 mt-2">Réparation mécanique et électronique</h2>
              <p className="text-gray-600 mt-5 leading-relaxed">Nous maîtrisons l'ensemble des interventions, des plus classiques aux plus techniques.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow duration-300">
                <Wrench className="w-10 h-10 text-blue-600 mb-6"/>
                <h4 className="text-xl font-bold text-blue-950">Mécanique Générale</h4>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">Vidange, freins, distribution, embrayage. Entretien courant.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow duration-300">
                <Cpu className="w-10 h-10 text-blue-600 mb-6"/>
                <h4 className="text-xl font-bold text-blue-950">Passage à la Valise</h4>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">Lecture et effacement des codes défauts, diagnostic précis.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow duration-300">
                <Zap className="w-10 h-10 text-orange-600 mb-6"/>
                <h4 className="text-xl font-bold text-blue-950">Électricité</h4>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">Réparation de faisceaux électriques, alternateurs, démarreurs.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl hover:shadow-xl transition-shadow duration-300">
                <Star className="w-10 h-10 text-green-600 mb-6"/>
                <h4 className="text-xl font-bold text-blue-950">Climatisation</h4>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">Diagnostic de fuites, recharge de gaz, réparation circuit.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Témoignages */}
        <section className="py-24 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-700 font-semibold">Témoignages</span>
              <h2 className="text-4xl font-extrabold tracking-tight text-blue-950 mt-2">La confiance de nos clients</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500"/>)}
                </div>
                <p className="text-gray-700 leading-relaxed">"Le seul garage qui a réussi à réparer mon problème de faisceau électrique."</p>
                <p className="mt-6 font-bold text-blue-950">Jean-Pierre L.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500"/>)}
                </div>
                <p className="text-gray-700 leading-relaxed">"Passage à la valise rapide, diagnostic clair et devis respecté."</p>
                <p className="mt-6 font-bold text-blue-950">Marie M.</p>
              </div>
              <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-orange-500 fill-orange-500"/>)}
                </div>
                <p className="text-gray-700 leading-relaxed">"Accueil professionnel, mécanique impeccable sur ma courroie."</p>
                <p className="mt-6 font-bold text-blue-950">Thomas R.</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 bg-white border-t border-gray-100 text-center text-sm text-gray-500">
          © 2024 SOSebautomobiles. Tous droits réservés.
        </footer>
      </div>
    </>
  );
};

export default Accueil;
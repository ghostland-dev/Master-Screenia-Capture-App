
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Tarifs <span className="text-gradient">simples</span> et transparents
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choisissez le forfait qui correspond à vos besoins et commencez à enregistrer dès aujourd'hui.
            Pas de frais cachés, pas de surprise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-medium mb-2">Gratuit</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">0€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Parfait pour découvrir les fonctionnalités de base
              </p>
              
              <Button className="w-full mb-6" variant="outline" asChild>
                <a href="/signup">Commencer gratuitement</a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Enregistrement d'écran jusqu'à 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Résolution standard (720p)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Fonctions d'édition de base</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>5 enregistrements stockés max.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden border-2 border-primary relative shadow-lg">
            <div className="absolute top-0 right-0 bg-primary text-white text-xs font-medium px-3 py-1 rounded-bl-lg">
              POPULAIRE
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-medium mb-2">Pro</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">12€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Idéal pour les créateurs de contenu et les professionnels
              </p>
              
              <Button className="w-full mb-6">
                <a href="/signup">Essai gratuit de 7 jours</a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Enregistrement illimité</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Résolution HD (1080p)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Édition vidéo avancée</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Stockage cloud de 50 Go</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Intégration webcam</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Suppression de bruit</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Sans filigrane</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-medium mb-2">Entreprise</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">29€</span>
                <span className="text-muted-foreground">/mois</span>
              </div>
              <p className="text-muted-foreground mb-6">
                Pour les équipes et les entreprises avec des besoins avancés
              </p>
              
              <Button className="w-full mb-6" variant="outline">
                <a href="/contact">Contactez-nous</a>
              </Button>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Tout ce qui est inclus dans Pro</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Résolution 4K</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Stockage cloud illimité</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Personnalisation avancée</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Outils de collaboration d'équipe</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>API d'intégration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                  <span>Support premium</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Questions fréquentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div>
              <h3 className="text-xl font-medium mb-2">Puis-je changer de forfait à tout moment ?</h3>
              <p className="text-muted-foreground">
                Oui, vous pouvez passer à un forfait supérieur ou inférieur à tout moment. Les changements prendront effet à la prochaine période de facturation.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Y a-t-il des frais de configuration ?</h3>
              <p className="text-muted-foreground">
                Non, il n'y a aucun frais de configuration. Vous payez uniquement le prix du forfait que vous choisissez.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Comment fonctionne l'essai gratuit ?</h3>
              <p className="text-muted-foreground">
                L'essai gratuit de 7 jours vous donne un accès complet à toutes les fonctionnalités du forfait Pro. Aucune carte de crédit n'est requise pour l'essai.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-2">Quels modes de paiement acceptez-vous ?</h3>
              <p className="text-muted-foreground">
                Nous acceptons les cartes de crédit (Visa, Mastercard, American Express), PayPal et les virements bancaires pour les forfaits Entreprise.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;

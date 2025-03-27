
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";

const pricingPlans = [
  {
    name: "Gratuit",
    description: "Parfait pour démarrer avec les fonctionnalités essentielles",
    price: "0€",
    duration: "pour toujours",
    popular: false,
    features: [
      "Enregistrement d'écran de base",
      "Durée limitée à 10 minutes",
      "Exportation avec filigrane",
      "Stockage limité à 2GB",
      "Outils d'édition basiques"
    ],
    buttonText: "Commencer gratuitement",
    buttonVariant: "outline" as const
  },
  {
    name: "Pro",
    description: "Pour les créateurs qui ont besoin de fonctionnalités avancées",
    price: "19€",
    duration: "par mois",
    popular: true,
    features: [
      "Enregistrement illimité",
      "Édition avancée",
      "Stockage de 50GB",
      "Exportation HD sans filigrane",
      "Sous-titrage automatique",
      "Bibliothèque de musiques royalty-free",
      "Effets et transitions professionnels"
    ],
    buttonText: "Essayer 14 jours gratuits",
    buttonVariant: "default" as const
  },
  {
    name: "Entreprise",
    description: "Solution complète pour les équipes et les entreprises",
    price: "49€",
    duration: "par utilisateur/mois",
    popular: false,
    features: [
      "Toutes les fonctionnalités Pro",
      "Stockage illimité",
      "Administration multi-utilisateurs",
      "Assistance prioritaire",
      "Intégrations API",
      "Sécurité et conformité avancées",
      "Personnalisation de la marque",
      "Formation et onboarding dédié"
    ],
    buttonText: "Contacter l'équipe commerciale",
    buttonVariant: "outline" as const
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Des tarifs <span className="text-gradient">simples et transparents</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choisissez le forfait qui correspond à vos besoins, sans engagement à long terme. Annulez à tout moment.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <FadeIn key={index} delay={0.1 * index} className="h-full">
              <div className={`relative h-full rounded-2xl p-8 flex flex-col ${
                plan.popular ? "glass-panel shadow-lg border-primary/20" : "glass-card"
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5" />
                    Plus populaire
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline mb-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-sm text-muted-foreground ml-2">{plan.duration}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-medium mb-4">Fonctionnalités</h4>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                  variant={plan.buttonVariant}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <FadeIn delay={0.4}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">
              Vous avez des besoins spécifiques ? Contactez-nous pour une solution personnalisée.
            </p>
            <Button variant="outline">Demander un devis personnalisé</Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Pricing;


import { FadeIn } from "@/components/animations/FadeIn";
import { Camera, Scissors, Film, MoveHorizontal, Layers, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Camera className="h-6 w-6 text-primary" />,
    title: "Capture flexible",
    description: "Enregistrez votre écran complet, une fenêtre spécifique ou une zone définie avec une qualité exceptionnelle."
  },
  {
    icon: <Film className="h-6 w-6 text-primary" />,
    title: "Webcam intégrée",
    description: "Ajoutez votre webcam en incrustation picture-in-picture pour une présentation plus personnelle."
  },
  {
    icon: <Scissors className="h-6 w-6 text-primary" />,
    title: "Montage intuitif",
    description: "Découpez, assemblez et peaufinez vos vidéos grâce à notre interface de montage fluide et accessible."
  },
  {
    icon: <MoveHorizontal className="h-6 w-6 text-primary" />,
    title: "Transitions élégantes",
    description: "Créez des enchaînements fluides entre vos clips avec notre bibliothèque de transitions professionnelles."
  },
  {
    icon: <Layers className="h-6 w-6 text-primary" />,
    title: "Mixage audio",
    description: "Maîtrisez chaque aspect sonore grâce au mixage multi-pistes pour un rendu audio parfait."
  },
  {
    icon: <Sparkles className="h-6 w-6 text-primary" />,
    title: "Effets IA",
    description: "Générez des images, créez des avatars animés ou sous-titrez automatiquement vos vidéos avec notre IA."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Une suite complète <span className="text-gradient">de création vidéo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tout ce dont vous avez besoin pour capturer, éditer et partager des vidéos professionnelles depuis votre navigateur.
            </p>
          </div>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={0.1 * index} className="h-full">
              <div className="feature-card h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

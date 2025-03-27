
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Monitor, Layout, MousePointer, Mic, Volume2, Pencil, Camera } from "lucide-react";

const recordingFeatures = [
  {
    icon: <Monitor className="h-5 w-5" />,
    title: "Écran complet",
    description: "Capturez l'intégralité de votre écran en haute résolution"
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: "Fenêtre spécifique",
    description: "Enregistrez une application ou une fenêtre particulière"
  },
  {
    icon: <MousePointer className="h-5 w-5" />,
    title: "Zone personnalisée",
    description: "Définissez précisément la zone à enregistrer"
  },
  {
    icon: <Camera className="h-5 w-5" />,
    title: "Webcam intégrée",
    description: "Ajoutez votre image en incrustation (PiP)"
  },
  {
    icon: <Mic className="h-5 w-5" />,
    title: "Capture du micro",
    description: "Enregistrez votre voix avec réduction de bruit"
  },
  {
    icon: <Volume2 className="h-5 w-5" />,
    title: "Son système",
    description: "Capturez le son de votre ordinateur"
  },
  {
    icon: <Pencil className="h-5 w-5" />,
    title: "Annotations",
    description: "Dessinez et ajoutez du texte pendant l'enregistrement"
  }
];

const RecordingOptions = () => {
  return (
    <section id="recording" className="py-20 md:py-32 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Capture professionnelle
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Enregistrez votre écran <span className="text-gradient">comme jamais auparavant</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Notre technologie de capture avancée vous permet d'enregistrer n'importe quel contenu avec une précision exceptionnelle et sans perte de qualité.
              </p>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {recordingFeatures.map((feature, index) => (
                <FadeIn key={index} delay={0.1 * (index + 2)} className="flex items-start gap-3">
                  <div className="mt-1 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            
            <FadeIn delay={0.6}>
              <Button className="bg-primary hover:bg-primary/90">
                <Camera className="mr-2 h-4 w-4" />
                Essayer maintenant
              </Button>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3} className="relative">
            <div className="rounded-2xl overflow-hidden glass-panel shadow-xl">
              <div className="relative aspect-[4/3] w-full">
                <div className="relative w-full h-full bg-gradient-to-br from-background to-background/80 p-6 overflow-hidden">
                  {/* Screen recording interface mockup */}
                  <div className="absolute inset-0 p-6">
                    <div className="w-full h-full bg-card/30 rounded-xl border border-border overflow-hidden shadow-lg">
                      <div className="h-8 bg-background flex items-center px-3 border-b border-border">
                        <div className="flex items-center gap-1.5">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-center text-muted-foreground mx-auto">
                          Capture d'écran
                        </div>
                      </div>
                      <div className="p-4 h-[calc(100%-2rem)]">
                        <div className="h-full rounded-lg border border-border bg-background/50 flex flex-col items-center justify-center p-6">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                            <Monitor className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="text-lg font-medium mb-2">Sélectionnez une source</h3>
                          <p className="text-sm text-muted-foreground text-center mb-4">
                            Choisissez ce que vous souhaitez capturer
                          </p>
                          <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
                            <div className="p-3 rounded-lg bg-primary/5 border border-primary/20 text-center">
                              <Monitor className="h-5 w-5 mx-auto mb-1 text-primary" />
                              <span className="text-xs">Écran</span>
                            </div>
                            <div className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-center cursor-pointer transition-colors">
                              <Layout className="h-5 w-5 mx-auto mb-1" />
                              <span className="text-xs">Fenêtre</span>
                            </div>
                            <div className="p-3 rounded-lg bg-secondary hover:bg-secondary/80 text-center cursor-pointer transition-colors">
                              <MousePointer className="h-5 w-5 mx-auto mb-1" />
                              <span className="text-xs">Zone</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating webcam element */}
            <div className="absolute -bottom-6 -right-6 p-4 glass-card rounded-xl shadow-lg animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium">Webcam</div>
                  <div className="text-xs text-muted-foreground">Activée</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default RecordingOptions;

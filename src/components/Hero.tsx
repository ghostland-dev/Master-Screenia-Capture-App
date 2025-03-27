
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/FadeIn";
import { Camera, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-2/3 h-1/2 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse-light"></div>
        <div className="absolute bottom-0 right-1/3 w-2/3 h-1/2 bg-accent/10 rounded-full blur-3xl opacity-40 animate-pulse-light animation-delay-2000"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="stagger-animation">
            <FadeIn delay={0.1} className="mb-4">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                La solution ultime d'enregistrement et montage
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Capturez. Éditez. <br />
                <span className="text-gradient">Créez sans limites.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-8">
                Transformez vos idées en contenus captivants grâce à notre plateforme tout-en-un d'enregistrement d'écran et d'édition vidéo professionnelle.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Camera className="mr-2 h-5 w-5" />
                  Commencer l'enregistrement
                </Button>
                <Button size="lg" variant="outline">
                  Découvrir les fonctionnalités
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.5}>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 10.5L11 14.5L9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Aucune carte de crédit requise
                
                <span className="mx-2">•</span>
                
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M15 10.5L11 14.5L9 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Annulation à tout moment
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4} className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden glass-panel shadow-xl animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
              <div className="absolute inset-0 p-1">
                <div className="w-full h-full bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                  <div className="h-8 bg-background/90 flex items-center px-3 border-b border-border">
                    <div className="flex items-center gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="relative h-[calc(100%-2rem)] bg-gray-900/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                        <Camera className="mr-2 h-4 w-4 text-primary" />
                        Démarrer la capture
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -bottom-6 -left-6 p-4 glass-card rounded-xl shadow-lg animate-float animation-delay-1000">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Camera className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-medium text-foreground">Capture en cours</div>
                  <div className="text-xs text-muted-foreground">00:04:32</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-2 p-3 glass-card rounded-xl shadow-lg animate-float animation-delay-2000">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                <span className="text-xs font-medium">REC</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;

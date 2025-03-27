
import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Film, Scissors, Text, Music, Clock, Sparkles } from "lucide-react";

const EditingFeatures = () => {
  return (
    <section id="editing" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-2/3 h-1/2 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn className="order-2 lg:order-1 relative">
            <div className="rounded-2xl overflow-hidden glass-panel shadow-xl">
              <div className="relative aspect-video w-full">
                <div className="relative w-full h-full bg-gradient-to-br from-background to-background/80 p-4 overflow-hidden">
                  {/* Timeline mockup */}
                  <div className="absolute inset-x-4 top-4 bottom-4 bg-card/30 rounded-xl border border-border shadow-lg overflow-hidden">
                    <div className="h-8 bg-background flex items-center px-4 border-b border-border">
                      <div className="flex items-center gap-4">
                        <Film className="h-4 w-4 text-primary" />
                        <span className="text-sm">Projet.mp4</span>
                      </div>
                      <div className="flex items-center gap-2 ml-auto">
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Scissors className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Text className="h-3.5 w-3.5" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Music className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                    
                    {/* Preview area */}
                    <div className="h-[40%] p-2 bg-card/10">
                      <div className="w-full h-full bg-gray-900/30 rounded-md flex items-center justify-center">
                        <div className="text-sm text-muted-foreground">Aperçu</div>
                      </div>
                    </div>
                    
                    {/* Timeline */}
                    <div className="h-[calc(60%-2rem)] p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Button size="sm" variant="ghost" className="h-6 px-2">
                          <Clock className="h-3.5 w-3.5" />
                          <span className="text-xs ml-1">00:01:24</span>
                        </Button>
                        <div className="bg-secondary h-0.5 flex-grow rounded"></div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-20 text-xs">Vidéo</div>
                          <div className="flex-grow h-8 bg-primary/20 rounded-md border border-primary/30 flex items-center px-2">
                            <div className="w-1/3 h-6 bg-primary/40 rounded"></div>
                            <div className="w-1/4 h-6 bg-primary/40 rounded ml-1"></div>
                            <div className="w-1/5 h-6 bg-primary/40 rounded ml-1"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-20 text-xs">Audio</div>
                          <div className="flex-grow h-8 bg-blue-400/20 rounded-md border border-blue-400/30 flex items-center px-2">
                            <div className="w-2/3 h-4 bg-blue-400/40 rounded"></div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <div className="w-20 text-xs">Texte</div>
                          <div className="flex-grow h-8 bg-yellow-400/20 rounded-md border border-yellow-400/30 flex items-center px-2">
                            <div className="w-1/4 h-4 bg-yellow-400/40 rounded ml-12"></div>
                            <div className="w-1/5 h-4 bg-yellow-400/40 rounded ml-24"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -left-6 p-3 glass-card rounded-xl shadow-lg animate-float animation-delay-1000">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Effets spéciaux</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 p-3 glass-card rounded-xl shadow-lg animate-float animation-delay-2000">
              <div className="flex items-center gap-2">
                <Text className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium">Sous-titres IA</span>
              </div>
            </div>
          </FadeIn>
          
          <div className="order-1 lg:order-2">
            <FadeIn className="mb-6">
              <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium">
                Studio d'édition
              </div>
            </FadeIn>
            
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Un montage vidéo <span className="text-gradient">à la portée de tous</span>
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg text-muted-foreground mb-8">
                Notre éditeur vidéo combine puissance et simplicité pour vous permettre de créer des contenus professionnels sans expertise technique.
              </p>
            </FadeIn>
            
            <div className="space-y-6 mb-8">
              <FadeIn delay={0.3}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Scissors className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Découpage précis</h3>
                    <p className="text-muted-foreground">
                      Découpez et assemblez vos séquences avec une précision au cadre près grâce à notre timeline intuitive.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.4}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Text className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Textes et titres animés</h3>
                    <p className="text-muted-foreground">
                      Ajoutez des textes, titres et sous-titres avec des animations élégantes pour enrichir vos vidéos.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.5}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Mixage audio avancé</h3>
                    <p className="text-muted-foreground">
                      Contrôlez chaque aspect sonore grâce au mixage multi-pistes, à l'égalisation et aux effets audio.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn delay={0.6}>
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Intelligence artificielle</h3>
                    <p className="text-muted-foreground">
                      Générez des sous-titres, des avatars animés ou améliorez vos vidéos grâce à nos outils d'IA intégrés.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <FadeIn delay={0.7}>
              <Button className="bg-primary hover:bg-primary/90">
                <Film className="mr-2 h-4 w-4" />
                Explorer l'éditeur
              </Button>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditingFeatures;


import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Camera, MonitorIcon, Mic, Edit, DownloadCloud, Share2 } from "lucide-react";

const Features = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Nos <span className="text-gradient">Fonctionnalités</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez toutes les fonctionnalités qui font de Screenia la solution d'enregistrement 
            la plus complète du marché.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-primary/10 text-primary mb-2">
              <MonitorIcon className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Enregistrement d'écran</h2>
            <p className="text-muted-foreground">
              Capturez tout ce qui se passe sur votre écran en haute définition. Enregistrez votre écran entier, 
              une fenêtre spécifique ou sélectionnez une zone personnalisée.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Capture de l'écran complet, d'une fenêtre ou d'une zone</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Définition HD jusqu'à 4K</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Enregistrement du son système</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span>Pointeur de souris visible et clics mis en évidence</span>
              </li>
            </ul>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-tr from-primary/10 to-primary/30">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <MonitorIcon className="h-20 w-20 text-primary opacity-20" />
            </div>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-tr from-indigo-500/10 to-indigo-500/30 lg:order-3">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Camera className="h-20 w-20 text-indigo-500 opacity-20" />
            </div>
          </div>
          
          <div className="space-y-6 lg:order-4">
            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-indigo-500/10 text-indigo-500 mb-2">
              <Camera className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Enregistrement Webcam</h2>
            <p className="text-muted-foreground">
              Ajoutez une touche personnelle à vos enregistrements en incluant votre webcam. 
              Parfait pour les présentations et les tutoriels.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                <span>Incrustation de webcam redimensionnable</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                <span>Positionnement personnalisé sur l'écran</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                <span>Filtres et ajustements en temps réel</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-indigo-500 mr-2 mt-0.5" />
                <span>Arrière-plans virtuels et flou</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center p-3 rounded-lg bg-amber-500/10 text-amber-500 mb-2">
              <Mic className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">Capture Audio</h2>
            <p className="text-muted-foreground">
              Enregistrez un son cristallin avec notre système de capture audio avancé. 
              Idéal pour les podcasts, les voix off et les commentaires.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span>Suppression du bruit et amélioration vocale</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span>Mixage audio en temps réel</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span>Égaliseur et effets audio</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <span>Multiples sources audio simultanées</span>
              </li>
            </ul>
          </div>
          
          <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-tr from-amber-500/10 to-amber-500/30">
            {/* Image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Mic className="h-20 w-20 text-amber-500 opacity-20" />
            </div>
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Fonctionnalités supplémentaires
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Screenia propose de nombreuses fonctionnalités avancées pour répondre 
              à tous vos besoins d'enregistrement et d'édition.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <Edit className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Édition Vidéo</h3>
              <p className="text-muted-foreground">
                Outils d'édition intégrés pour couper, organiser et améliorer vos enregistrements.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <DownloadCloud className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Export Flexible</h3>
              <p className="text-muted-foreground">
                Exportez en MP4, WebM, GIF et autres formats avec des paramètres personnalisables.
              </p>
            </div>
            
            <div className="bg-background p-6 rounded-lg">
              <Share2 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-medium mb-2">Partage Facile</h3>
              <p className="text-muted-foreground">
                Partagez directement sur YouTube, Google Drive ou générez des liens partageables.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;

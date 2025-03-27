
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Globe, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background antialiased">
      <Navbar />
      
      <main className="container max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-4">
            À propos de <span className="text-gradient">Screenia</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre histoire, notre mission et les personnes qui ont créé Screenia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Notre histoire</h2>
            <p className="text-muted-foreground">
              Screenia est née en 2022 de la frustration de ne pas trouver d'outil d'enregistrement 
              d'écran complet, accessible et facile à utiliser. Notre équipe de passionnés de technologie 
              a décidé de créer la solution que nous aurions aimé avoir.
            </p>
            <p className="text-muted-foreground">
              Depuis notre lancement, nous nous sommes engagés à développer un outil qui répond véritablement 
              aux besoins des créateurs de contenu, des professionnels et des entreprises, en privilégiant 
              toujours l'expérience utilisateur et la qualité.
            </p>
            <p className="text-muted-foreground">
              Aujourd'hui, Screenia est utilisée par des milliers de personnes à travers le monde, des 
              enseignants aux YouTubers, en passant par les équipes de développement logiciel.
            </p>
          </div>
          
          <div className="relative rounded-xl overflow-hidden h-[400px] bg-gradient-to-tr from-primary/10 to-primary/30">
            {/* Team image placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="h-20 w-20 text-primary opacity-20" />
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Notre mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Simplicité</h3>
              <p className="text-muted-foreground">
                Rendre l'enregistrement d'écran et le partage de contenu aussi simple que possible, 
                sans sacrifier les fonctionnalités avancées.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Accessibilité</h3>
              <p className="text-muted-foreground">
                Créer des outils que tout le monde peut utiliser, quel que soit son niveau technique 
                ou ses compétences en édition vidéo.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border">
              <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                Repousser constamment les limites de ce qui est possible de faire 
                dans un navigateur pour offrir des fonctionnalités de pointe.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Notre équipe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Team members would go here - placeholder for now */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="text-center">
                <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-muted-foreground opacity-50" />
                </div>
                <h3 className="font-medium">Nom du membre</h3>
                <p className="text-sm text-muted-foreground">Titre / Rôle</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-muted/50 rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Rejoignez l'aventure
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nous sommes toujours à la recherche de personnes talentueuses et passionnées pour nous aider 
              à construire l'avenir de Screenia.
            </p>
          </div>
          
          <div className="flex justify-center">
            <a href="/careers" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Voir nos offres d'emploi
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

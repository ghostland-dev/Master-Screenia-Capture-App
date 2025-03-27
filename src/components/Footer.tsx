
import { Film } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12 md:py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <Film className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-semibold">Screenia</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La solution ultime pour l'enregistrement d'écran et l'édition vidéo professionnelle dans votre navigateur.
            </p>
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Screenia. Tous droits réservés.
            </div>
          </div>
          
          <div className="md:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-medium mb-4">Produit</h3>
                <ul className="space-y-2">
                  <li><a href="#features" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Fonctionnalités</a></li>
                  <li><a href="#recording" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Enregistrement</a></li>
                  <li><a href="#editing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Montage</a></li>
                  <li><a href="#pricing" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Tarifs</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Ressources</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Blog</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Guides</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Tutoriels</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">FAQ</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Entreprise</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">À propos</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Carrières</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contact</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Presse</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-4">Légal</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Conditions</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Confidentialité</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookies</a></li>
                  <li><a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Licences</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

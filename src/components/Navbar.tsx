
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { Menu, X, Camera } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/40">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Camera className="h-4 w-4 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-lg">Screenia</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="nav-link">Accueil</Link>
            <Link to="/screen-recorder" className="nav-link">Enregistrer</Link>
            <a href="#features" className="nav-link">Fonctionnalités</a>
            <a href="#recording" className="nav-link">Capture</a>
            <a href="#pricing" className="nav-link">Tarifs</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <a href="#">Connexion</a>
            </Button>
            <Button asChild>
              <a href="#">Essayer gratuitement</a>
            </Button>
          </div>

          {/* Mobile navigation */}
          <div className="md:hidden">
            <Drawer open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <DrawerTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DrawerTrigger>
              <DrawerContent className="h-[90vh]">
                <div className="px-4 py-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Camera className="h-4 w-4 text-primary" />
                        </div>
                        <span className="font-bold tracking-tight text-lg">Screenia</span>
                      </Link>
                      <DrawerClose asChild>
                        <Button variant="ghost" size="icon">
                          <X className="h-5 w-5" />
                        </Button>
                      </DrawerClose>
                    </div>
                    <nav className="flex flex-col gap-4">
                      <Link to="/" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Accueil</Link>
                      <Link to="/screen-recorder" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Enregistrer</Link>
                      <a href="#features" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Fonctionnalités</a>
                      <a href="#recording" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Capture</a>
                      <a href="#pricing" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Tarifs</a>
                    </nav>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#">Connexion</a>
                    </Button>
                    <Button className="w-full" asChild>
                      <a href="#">Essayer gratuitement</a>
                    </Button>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

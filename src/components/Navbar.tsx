
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose
} from "@/components/ui/drawer";
import { Menu, X, Camera, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="nav-link">Enregistrer</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/screen-recorder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Enregistreur d'écran</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Capturez votre écran avec audio et vidéo en haute qualité
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/audio-recorder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Enregistreur audio</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Enregistrez des pistes audio claires avec notre outil d'enregistrement vocal
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/webcam-recorder" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Enregistreur webcam</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Capturez des vidéos avec votre webcam pour des tutoriels ou des vlogs
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/features" className="nav-link">Fonctionnalités</Link>
            <Link to="/pricing" className="nav-link">Tarifs</Link>
            <Link to="/about" className="nav-link">À propos</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Essayer gratuitement</Link>
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
                      
                      <div className="py-2 border-b border-border/30">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-lg font-medium">Enregistrer</span>
                          <ChevronDown className="h-4 w-4" />
                        </div>
                        <div className="pl-4 flex flex-col gap-2 mt-2">
                          <Link to="/screen-recorder" className="text-base text-muted-foreground hover:text-foreground" onClick={closeMenu}>Enregistreur d'écran</Link>
                          <Link to="/audio-recorder" className="text-base text-muted-foreground hover:text-foreground" onClick={closeMenu}>Enregistreur audio</Link>
                          <Link to="/webcam-recorder" className="text-base text-muted-foreground hover:text-foreground" onClick={closeMenu}>Enregistreur webcam</Link>
                        </div>
                      </div>
                      
                      <Link to="/features" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Fonctionnalités</Link>
                      <Link to="/pricing" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>Tarifs</Link>
                      <Link to="/about" className="text-lg font-medium py-2 border-b border-border/30" onClick={closeMenu}>À propos</Link>
                    </nav>
                  </div>
                  <div className="flex flex-col gap-2 mt-auto">
                    <Button variant="outline" className="w-full" asChild onClick={closeMenu}>
                      <Link to="/login">Connexion</Link>
                    </Button>
                    <Button className="w-full" asChild onClick={closeMenu}>
                      <Link to="/signup">Essayer gratuitement</Link>
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

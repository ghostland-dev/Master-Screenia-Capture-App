
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Camera, Film, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "py-4 bg-background/80 backdrop-blur-md shadow-sm" 
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Film className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-semibold">Screenia</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#features" className="nav-link">Fonctionnalités</a>
            <a href="#recording" className="nav-link">Enregistrement</a>
            <a href="#editing" className="nav-link">Montage</a>
            <a href="#pricing" className="nav-link">Tarifs</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">Connexion</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <Camera className="mr-2 h-4 w-4" />
              Essayer gratuitement
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border animate-fade-in">
          <div className="container py-4 px-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a 
              href="#recording" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enregistrement
            </a>
            <a 
              href="#editing" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Montage
            </a>
            <a 
              href="#pricing" 
              className="px-4 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tarifs
            </a>
            <div className="flex flex-col space-y-2 pt-2 border-t border-border">
              <Button variant="outline" className="w-full">Connexion</Button>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Camera className="mr-2 h-4 w-4" />
                Essayer gratuitement
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

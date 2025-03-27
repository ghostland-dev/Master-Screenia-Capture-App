
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { Camera } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Camera className="h-5 w-5 text-primary" />
            </div>
            <span className="font-bold tracking-tight text-xl">Screenia</span>
          </Link>
        </div>
        
        <div className="bg-card rounded-xl border border-border shadow-sm p-6 md:p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold mb-2">Créer un compte</h1>
            <p className="text-muted-foreground">
              Commencez à capturer et partager votre écran dès aujourd'hui
            </p>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">Prénom</Label>
                <Input id="first-name" placeholder="John" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="last-name">Nom</Label>
                <Input id="last-name" placeholder="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input id="password" type="password" placeholder="••••••••" />
              <p className="text-xs text-muted-foreground">
                Au moins 8 caractères avec une lettre majuscule et un chiffre
              </p>
            </div>
            
            <div className="flex items-start space-x-2 mt-4">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  J'accepte les conditions d'utilisation et la politique de confidentialité
                </label>
              </div>
            </div>
            
            <Button type="submit" className="w-full">
              Créer un compte
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Ou continuer avec</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </div>
          
          <div className="text-center text-sm">
            <span className="text-muted-foreground">Vous avez déjà un compte ?</span>{" "}
            <Link to="/login" className="text-primary hover:underline">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

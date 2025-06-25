import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'modern-card border-border/30 shadow-2xl backdrop-blur-xl' 
        : 'bg-transparent'
    }`} role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo contemporain */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center cursor-pointer group neon-border">
              <Code className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent" itemProp="name">Yann Morin</h1>
              <p className="text-xs text-muted-foreground uppercase tracking-wider" itemProp="jobTitle">Web Developer</p>
            </div>
          </div>
          
          {/* Menu desktop moderne */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => scrollToSection("hero")}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium rounded-lg hover:bg-muted/10"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium rounded-lg hover:bg-muted/10"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium rounded-lg hover:bg-muted/10"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pourquoi")}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-all duration-300 font-medium rounded-lg hover:bg-muted/10"
            >
              À propos
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Contact
            </Button>
          </div>
          
          {/* Bouton menu mobile */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden glass-card hover-glow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </Button>
        </div>
        
        {/* Menu mobile */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="glass-card rounded-2xl p-4 space-y-3">
            <button
              onClick={() => scrollToSection("hero")}
              className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pourquoi")}
              className="block w-full text-left py-3 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
            >
              Pourquoi
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full glass-card hover-glow bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 font-semibold py-3 rounded-xl"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
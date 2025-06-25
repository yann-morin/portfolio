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
        ? 'glass-card border-border/20 shadow-lg' 
        : 'bg-transparent'
    }`} role="navigation" aria-label="Navigation principale">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center hover-glow cursor-pointer group">
              <Code className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text" itemProp="name">Yann Morin</h1>
              <p className="text-sm text-muted-foreground" itemProp="jobTitle">Développeur Web Freelance Montpellier</p>
            </div>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection("pourquoi")}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Pourquoi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="glass-card hover-glow bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 font-semibold px-6 py-2 rounded-xl"
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
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">YM</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-foreground">Yann Morin</h1>
              <p className="text-sm text-muted-foreground">Développeur Web</p>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("accueil")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("pourquoi")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Pourquoi moi
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              Contact
            </button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 mt-4">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-muted-foreground hover:text-accent transition-colors text-left"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-accent transition-colors text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-muted-foreground hover:text-accent transition-colors text-left"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("pourquoi")}
                className="text-muted-foreground hover:text-accent transition-colors text-left"
              >
                Pourquoi moi
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-accent transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

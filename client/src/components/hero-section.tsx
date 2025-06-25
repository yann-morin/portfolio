import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, Zap, Star, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background" itemScope itemType="https://schema.org/WebPage">
      {/* Grid background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Modern gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/30 to-accent/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-accent-secondary/20 to-accent-tertiary/30 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Titre principal avec effet gradient */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-full text-primary text-sm font-medium">
                ✨ Développeur Web Freelance
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight" itemProp="name">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Sites Web
              </span>
              <span className="block text-4xl md:text-6xl lg:text-7xl text-foreground/90 mt-4 font-light">
                Contemporains
              </span>
            </h1>
          </div>
          
          {/* Sous-titre */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed" itemProp="description">
              Design moderne • Développement sur mesure • Performance optimisée
              <br />
              <span className="text-lg md:text-xl">Votre présence digitale à Montpellier</span>
            </p>
          </div>

          {/* Statistics Cards */}
          <div className={`grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="modern-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projets créés</div>
            </div>
            <div className="modern-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Clients satisfaits</div>
            </div>
            <div className="modern-card p-6 rounded-xl text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Star className="h-5 w-5 text-accent-tertiary fill-current" />
                <span className="text-3xl font-bold text-accent-tertiary">5.0</span>
              </div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-4 text-lg font-semibold neon-border rounded-xl transition-all duration-300"
            >
              Démarrer un projet
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              size="lg"
              className="modern-card border-2 border-muted text-foreground hover:bg-muted hover:text-background px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Mes réalisations
            </Button>
          </div>
          
          {/* Badge localisation */}
          <div className={`mt-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 rounded-full">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Basé à Montpellier • Disponible en télétravail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
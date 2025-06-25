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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero" itemScope itemType="https://schema.org/WebPage">
      {/* Particules flottantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Orbes lumineux */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent-secondary/20 rounded-full blur-2xl animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badges animés */}
          <div className={`mb-8 flex justify-center space-x-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-4 rounded-2xl hover-glow group cursor-pointer">
              <Code className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
              <p className="text-xs mt-2 text-muted-foreground">Développement</p>
            </div>
            <div className="glass-card p-4 rounded-2xl hover-glow group cursor-pointer">
              <Palette className="h-8 w-8 text-accent group-hover:scale-110 transition-transform" />
              <p className="text-xs mt-2 text-muted-foreground">Design</p>
            </div>
            <div className="glass-card p-4 rounded-2xl hover-glow group cursor-pointer">
              <Zap className="h-8 w-8 text-accent-secondary group-hover:scale-110 transition-transform" />
              <p className="text-xs mt-2 text-muted-foreground">Performance</p>
            </div>
          </div>
          
          {/* Titre principal avec effet gradient */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight" itemProp="name">
              <span className="gradient-text">Yann Morin</span>
              <span className="block text-3xl md:text-5xl lg:text-6xl text-foreground/90 mt-4 font-light">
                Développeur Web <span className="text-primary font-bold">Freelance</span> à <span className="text-accent font-bold">Montpellier</span>
              </span>
            </h1>
          </div>
          
          {/* Sous-titre */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light" itemProp="description">
              Création de sites web <span className="text-primary font-semibold">modernes</span> et 
              <span className="text-accent font-semibold"> performants</span> pour les commerçants, artisans et professionnels de Montpellier et l'Hérault. 
              Des solutions sur mesure qui donnent vie à vos idées digitales avec un référencement optimisé.
            </p>
          </div>

          {/* Statistiques */}
          <div className={`flex justify-center space-x-8 mb-10 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center space-x-1 mb-1">
                <Star className="h-4 w-4 text-accent-quaternary fill-current" />
                <span className="text-2xl font-bold text-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">Note client</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">50+</div>
              <p className="text-sm text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent mb-1">2 ans</div>
              <p className="text-sm text-muted-foreground">d'expérience</p>
            </div>
          </div>
          
          {/* Boutons d'action */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="group glass-card hover-glow bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300"
            >
              Démarrer votre projet
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={scrollToPortfolio}
              variant="outline" 
              size="lg"
              className="glass-card hover-glow border-muted-foreground/30 text-foreground hover:bg-muted/20 font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300"
            >
              Voir mes réalisations
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
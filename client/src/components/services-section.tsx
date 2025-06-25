import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Pen, Server, Wrench, Search, Star, ArrowRight, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-modern relative overflow-hidden" itemScope itemType="https://schema.org/Service">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="particle absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="mb-4 glass-card px-6 py-2 text-primary border-primary/30">
              <Zap className="h-4 w-4 mr-2" />
              Mes Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" itemProp="name">
              Mes offres de <span className="gradient-text">création de sites web</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Trois formules de création de sites internet adaptées aux commerçants, artisans et professionnels de Montpellier. 
              De la simple vitrine web au projet e-commerce sur mesure avec fonctionnalités personnalisées et référencement SEO optimisé.
            </p>
          </div>
          
          {/* Cartes de services */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Pack BASIC */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <Card className="glass-card hover-glow group border-primary/20 rounded-3xl overflow-hidden relative h-full flex flex-col">
                {/* Badge populaire */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-primary/20 text-primary border-primary/30 px-3 py-1">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Populaire
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Pack BASIC</h3>
                    <p className="text-muted-foreground mb-4">Parfait pour démarrer</p>
                    <div className="text-4xl font-bold gradient-text mb-1">990€</div>
                    <div className="text-sm text-muted-foreground">TTC</div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Site vitrine 1 page responsive
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Design moderne et professionnel
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Optimisé mobile et tablette
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Formulaire de contact
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Optimisation SEO de base
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-primary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-primary transition-colors text-sm">
                        Mise en ligne incluse
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full glass-card hover-glow bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 font-semibold py-3 rounded-xl group/btn"
                  >
                    Choisir BASIC
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pack PRO */}
            <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              <Card className="glass-card hover-glow group border-accent/20 rounded-3xl overflow-hidden relative h-full flex flex-col">
                {/* Badge recommandé */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent/20 text-accent border-accent/30 px-3 py-1">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Recommandé
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Pack PRO</h3>
                    <p className="text-muted-foreground mb-4">Solution complète</p>
                    <div className="text-4xl font-bold text-accent mb-1">1790€</div>
                    <div className="text-sm text-muted-foreground">TTC</div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Site multi-pages (jusqu'à 5 pages)
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Design sur mesure et animations
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Galerie photos/portfolio
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Blog/actualités
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Optimisation SEO avancée
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Intégration réseaux sociaux
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent transition-colors text-sm">
                        Formation à la gestion
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full glass-card hover-glow bg-accent/20 hover:bg-accent/30 text-accent border-accent/50 font-semibold py-3 rounded-xl group/btn"
                  >
                    Choisir PRO
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Pack PERSONNALISÉ */}
            <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <Card className="glass-card hover-glow group border-accent-secondary/20 rounded-3xl overflow-hidden relative h-full flex flex-col">
                {/* Badge sur mesure */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-accent-secondary/20 text-accent-secondary border-accent-secondary/30 px-3 py-1">
                    <Zap className="h-3 w-3 mr-1" />
                    Sur mesure
                  </Badge>
                </div>

                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Devis Personnalisé</h3>
                    <p className="text-muted-foreground mb-4">Projet unique</p>
                    <div className="text-4xl font-bold text-accent-secondary mb-1">Sur devis</div>
                    <div className="text-sm text-muted-foreground">Tarif adapté</div>
                  </div>
                  
                  <div className="space-y-3 mb-8 flex-grow">
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Projet entièrement sur mesure
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Fonctionnalités spécifiques
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        E-commerce, réservations
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Applications web complexes
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Intégrations API tierces
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Support technique dédié
                      </span>
                    </div>
                    <div className="flex items-start group/item">
                      <div className="glass-card p-1 rounded-lg mr-3 mt-0.5 flex-shrink-0">
                        <Check className="text-accent-secondary h-4 w-4" />
                      </div>
                      <span className="text-foreground group-hover/item:text-accent-secondary transition-colors text-sm">
                        Délais adaptés au projet
                      </span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={scrollToContact}
                    className="w-full glass-card hover-glow bg-accent-secondary/20 hover:bg-accent-secondary/30 text-accent-secondary border-accent-secondary/50 font-semibold py-3 rounded-xl group/btn"
                  >
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Services techniques */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Services techniques <span className="gradient-text">inclus</span>
              </h3>
              <p className="text-muted-foreground">
                Technologies modernes pour une performance optimale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="glass-card p-6 rounded-2xl hover-glow group text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Pen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Design</h4>
                <p className="text-sm text-muted-foreground">Interface moderne et intuitive</p>
              </div>

              <div className="glass-card p-6 rounded-2xl hover-glow group text-center">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Server className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Hébergement</h4>
                <p className="text-sm text-muted-foreground">Serveurs rapides et sécurisés</p>
              </div>

              <div className="glass-card p-6 rounded-2xl hover-glow group text-center">
                <div className="w-12 h-12 bg-accent-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Wrench className="h-6 w-6 text-accent-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Maintenance</h4>
                <p className="text-sm text-muted-foreground">Suivi et mises à jour</p>
              </div>

              <div className="glass-card p-6 rounded-2xl hover-glow group text-center">
                <div className="w-12 h-12 bg-accent-quaternary/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Search className="h-6 w-6 text-accent-quaternary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">SEO</h4>
                <p className="text-sm text-muted-foreground">Optimisation pour Google</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Eye, Code2, Palette } from "lucide-react";
import { useEffect, useState } from "react";

export default function PortfolioSection() {
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

    const element = document.getElementById('portfolio');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Boulangerie Martin",
      description: "Site vitrine avec présentation des produits et horaires d'ouverture",
      pack: "Pack BASIC",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      features: ["Responsive", "SEO", "Contact"],
      color: "primary",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Boulangerie artisanale avec vitrine moderne"
    },
    {
      id: 2,
      title: "Salon Élégance",
      description: "Site complet avec système de réservation en ligne et galerie photos",
      pack: "Pack PRO",
      technologies: ["React", "Node.js", "PostgreSQL"],
      features: ["Réservation", "Galerie", "Blog", "SEO"],
      color: "accent",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Salon de coiffure moderne avec équipements professionnels"
    },
    {
      id: 3,
      title: "Menuiserie Dubois",
      description: "Portfolio professionnel avec galerie de créations sur mesure",
      pack: "Pack PRO",
      technologies: ["Vue.js", "Express", "MongoDB"],
      features: ["Portfolio", "Devis", "Contact", "SEO"],
      color: "accent-secondary",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Atelier d'artisan menuisier avec meubles sur mesure"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background relative overflow-hidden">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="particle absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="mb-4 glass-card px-6 py-2 text-accent border-accent/30">
              <Eye className="h-4 w-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Mes dernières <span className="gradient-text">réalisations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Découvrez quelques projets récents créés pour des professionnels 
              de Montpellier et des environs
            </p>
          </div>
          
          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <Card className="glass-card hover-glow group border-border/20 rounded-3xl overflow-hidden relative">
                  {/* Badge du pack */}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className={`${
                      project.pack === 'Pack BASIC' 
                        ? 'bg-primary/20 text-primary border-primary/30' 
                        : 'bg-accent/20 text-accent border-accent/30'
                    } px-3 py-1 backdrop-blur-sm`}>
                      {project.pack}
                    </Badge>
                  </div>

                  {/* Image du projet */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Bouton de visualisation au survol */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        variant="outline"
                        size="sm"
                        className="glass-card border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Voir le site
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies utilisées */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Code2 className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium text-muted-foreground">Technologies</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="outline"
                            className="text-xs border-muted-foreground/30 text-muted-foreground"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Fonctionnalités */}
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <Palette className="h-4 w-4 text-muted-foreground mr-2" />
                        <span className="text-sm font-medium text-muted-foreground">Fonctionnalités</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <Badge
                            key={featureIndex}
                            className={`text-xs ${
                              project.pack === 'Pack BASIC'
                                ? 'bg-primary/10 text-primary border-primary/30'
                                : 'bg-accent/10 text-accent border-accent/30'
                            }`}
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Statistiques de projets */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <div className="text-3xl font-bold gradient-text mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Projets réalisés</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-sm text-muted-foreground">Clients satisfaits</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <div className="text-3xl font-bold text-accent mb-2">2 sem</div>
                <p className="text-sm text-muted-foreground">Délai moyen</p>
              </div>
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <div className="text-3xl font-bold text-accent-secondary mb-2">24/7</div>
                <p className="text-sm text-muted-foreground">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
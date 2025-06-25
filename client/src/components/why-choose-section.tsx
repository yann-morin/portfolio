import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserCheck, Handshake, MapPin, Clock, MessageCircle, Wrench, Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhyChooseSection() {
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

    const element = document.getElementById('pourquoi');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      icon: UserCheck,
      title: "Expertise reconnue",
      description: "Développeur confirmé chez ACSEO, j'apporte mon expertise technique à votre projet personnel avec la même rigueur professionnelle.",
      color: "primary",
      delay: "0.1s"
    },
    {
      icon: Handshake,
      title: "Relation de confiance",
      description: "Échanges transparents, prix fixes communiqués dès le début. Pas de surprise, pas de frais cachés, juste un service honnête.",
      color: "accent",
      delay: "0.2s"
    },
    {
      icon: MapPin,
      title: "Proximité locale",
      description: "Basé à Montpellier, je comprends les enjeux locaux et peux vous rencontrer facilement pour discuter de votre projet.",
      color: "accent-secondary",
      delay: "0.3s"
    },
    {
      icon: Clock,
      title: "Disponibilité garantie",
      description: "Développement en dehors de mes heures de salarié, je m'engage sur des délais réalistes et tenus.",
      color: "accent-quaternary",
      delay: "0.4s"
    },
    {
      icon: MessageCircle,
      title: "Langage simple",
      description: "Pas de jargon technique, des explications claires. Votre site doit vous ressembler, pas à un manuel informatique.",
      color: "primary",
      delay: "0.5s"
    },
    {
      icon: Wrench,
      title: "Suivi après livraison",
      description: "Formation pour les mises à jour simples et support en cas de questions après la mise en ligne.",
      color: "accent",
      delay: "0.6s"
    }
  ];

  return (
    <section id="pourquoi" className="py-20 bg-gradient-modern relative overflow-hidden" itemScope itemType="https://schema.org/AboutPage">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="mb-4 glass-card px-6 py-2 text-primary border-primary/30">
              <Heart className="h-4 w-4 mr-2" />
              Mes Valeurs
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" itemProp="name">
              Pourquoi me faire <span className="gradient-text">confiance</span> ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Développeur web freelance basé à Montpellier, je vous accompagne avec transparence et professionnalisme. 
              Expertise technique, proximité locale et relation de confiance pour vos projets de création de sites internet.
            </p>
          </div>
          
          {/* Grille des avantages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div
                  key={index}
                  className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
                  style={{ animationDelay: reason.delay }}
                >
                  <Card className="glass-card hover-glow group border-border/20 rounded-3xl overflow-hidden h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      {/* Icône avec effet glow */}
                      <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                        reason.color === 'primary' ? 'bg-primary/20 group-hover:bg-primary/30' :
                        reason.color === 'accent' ? 'bg-accent/20 group-hover:bg-accent/30' :
                        reason.color === 'accent-secondary' ? 'bg-accent-secondary/20 group-hover:bg-accent-secondary/30' :
                        'bg-accent-quaternary/20 group-hover:bg-accent-quaternary/30'
                      }`}>
                        <IconComponent className={`h-8 w-8 ${
                          reason.color === 'primary' ? 'text-primary' :
                          reason.color === 'accent' ? 'text-accent' :
                          reason.color === 'accent-secondary' ? 'text-accent-secondary' :
                          'text-accent-quaternary'
                        }`} />
                      </div>

                      {/* Titre */}
                      <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {reason.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {reason.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Section de confiance supplémentaire */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Une approche <span className="gradient-text">humaine</span> du développement web
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Chaque projet est unique et mérite une attention particulière. Je prends le temps 
                  de comprendre votre activité, vos objectifs et vos contraintes pour créer un site 
                  qui vous ressemble vraiment.
                </p>
                
                {/* Statistiques de confiance */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">6 ans</div>
                    <p className="text-muted-foreground">d'expérience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <p className="text-muted-foreground">projets réalisés</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">100%</div>
                    <p className="text-muted-foreground">de clients satisfaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
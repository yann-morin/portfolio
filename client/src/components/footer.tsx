import { Code, Mail, MapPin, Phone, ExternalLink } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-gradient-modern">
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-background/90 backdrop-blur-sm"></div>
      
      <div className="relative">
        {/* Section principale */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            {/* Header du footer */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center hover-glow">
                  <Code className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Yann Morin</h3>
                  <p className="text-muted-foreground">Développeur Web Freelance</p>
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Création de sites web professionnels sur mesure pour commerçants, 
                artisans et indépendants dans la région de Montpellier.
              </p>
            </div>

            {/* Grille de contenu */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              {/* Navigation */}
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <ExternalLink className="h-4 w-4 mr-2 text-primary" />
                  Navigation
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Accueil", id: "hero" },
                    { name: "Services", id: "services" },
                    { name: "Portfolio", id: "portfolio" },
                    { name: "À propos", id: "pourquoi" }
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Code className="h-4 w-4 mr-2 text-primary" />
                  Services
                </h4>
                <ul className="space-y-3">
                  {[
                    "Pack BASIC",
                    "Pack PRO", 
                    "Hébergement",
                    "Maintenance"
                  ].map((service) => (
                    <li key={service}>
                      <button
                        onClick={() => scrollToSection("services")}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
                      >
                        {service}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <h4 className="font-semibold text-foreground mb-4 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Mail className="h-4 w-4 mr-2 text-primary" />
                    yann.morin@freelance.com
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <Phone className="h-4 w-4 mr-2 text-primary" />
                    04 XX XX XX XX
                  </li>
                  <li className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    Montpellier, France
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="glass-card p-6 rounded-2xl hover-glow">
                <h4 className="font-semibold text-foreground mb-4">
                  Prêt à commencer ?
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Discutons de votre projet web ensemble.
                </p>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 px-4 rounded-xl transition-colors"
                >
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <div className="mb-2 md:mb-0">
                  © 2024 Yann Morin - Développeur Web Freelance
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-primary font-medium">SASU</span>
                  <span>•</span>
                  <span>Siret: XXX XXX XXX XXXXX</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

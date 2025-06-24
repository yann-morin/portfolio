import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Pen, Server, Wrench, Search, Star } from "lucide-react";

export default function ServicesSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Mes offres de création</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Deux formules adaptées à vos besoins, de la simple vitrine au site complet avec plusieurs pages
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Pack BASIC */}
            <Card className="bg-card border-border hover:border-blue-200 transition-colors group shadow-md hover:shadow-lg rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Pack BASIC</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">990€</div>
                    <div className="text-sm text-muted-foreground">TTC</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Parfait pour une présence web efficace et professionnelle
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Site vitrine 1 page responsive</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Design moderne et professionnel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Formulaire de contact fonctionnel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Optimisation mobile et tablette</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Référencement de base (SEO)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Livraison sous 10 jours</span>
                  </li>
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Choisir BASIC
                </Button>
              </CardContent>
            </Card>
            
            {/* Pack PRO */}
            <Card className="bg-card border-2 border-accent relative group shadow-sm">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-accent text-white px-4 py-1 font-semibold">
                  <Star className="w-3 h-3 mr-1" />
                  RECOMMANDÉ
                </Badge>
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-foreground">Pack PRO</h3>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-accent">1990€</div>
                    <div className="text-sm text-muted-foreground">TTC</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Solution complète pour une présence web maximale
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Site complet 3 à 5 pages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Design sur-mesure et moderne</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Formulaires avancés (devis, réservation)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Galerie photos / portfolio</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">SEO optimisé + fiche Google My Business</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Formation à la mise à jour</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-accent mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                    <span className="text-foreground">Livraison sous 15 jours</span>
                  </li>
                </ul>
                
                <Button
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-semibold"
                >
                  Choisir PRO
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Services optionnels */}
          <Card className="bg-card shadow-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-foreground">Services optionnels</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pen className="text-accent h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Rédaction web</h4>
                  <p className="text-muted-foreground text-sm mb-3">Contenu optimisé SEO</p>
                  <p className="font-semibold text-accent">+300€</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Server className="text-accent h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Hébergement</h4>
                  <p className="text-muted-foreground text-sm mb-3">Hébergement sécurisé</p>
                  <p className="font-semibold text-accent">150€/an</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wrench className="text-accent h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Maintenance</h4>
                  <p className="text-muted-foreground text-sm mb-3">Mises à jour & support</p>
                  <p className="font-semibold text-accent">200€/an</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="text-accent h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">SEO local</h4>
                  <p className="text-muted-foreground text-sm mb-3">Référencement avancé</p>
                  <p className="font-semibold text-accent">+500€</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

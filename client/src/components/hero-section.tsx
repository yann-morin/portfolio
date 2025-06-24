import { Button } from "@/components/ui/button";
import { Calculator, Phone, Zap, MapPin, Handshake } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accueil" className="pt-20 pb-16 bg-gradient-to-br from-primary to-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Votre <span className="text-accent">site web professionnel</span><br/>
              clé en main à Montpellier
            </h2>
            <p className="text-xl text-light mb-8 max-w-2xl mx-auto">
              Développeur web freelance spécialisé dans la création de sites vitrines pour commerçants, artisans et indépendants. Solution complète, moderne et abordable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Devis gratuit
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 text-lg font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              04 XX XX XX XX
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-accent h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Livraison rapide</h3>
              <p className="text-light text-sm">Site en ligne sous 2 semaines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Proximité locale</h3>
              <p className="text-light text-sm">Basé à Montpellier, disponible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="text-accent h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2">Transparence totale</h3>
              <p className="text-light text-sm">Prix fixe, pas de surprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

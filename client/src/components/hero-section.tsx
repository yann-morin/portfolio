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
    <section id="accueil" className="pt-20 pb-16 bg-gradient-bubble relative overflow-hidden">
      {/* Bulles flottantes */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-foreground">
              Votre <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">site web professionnel</span><br/>
              clé en main à Montpellier
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Développeur web freelance spécialisé dans la création de sites vitrines pour commerçants, artisans et indépendants. Solution complète, moderne et abordable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Calculator className="mr-2 h-5 w-5" />
              Devis gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              04 XX XX XX XX
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Zap className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Livraison rapide</h3>
              <p className="text-muted-foreground text-sm">Site en ligne sous 2 semaines</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Proximité locale</h3>
              <p className="text-muted-foreground text-sm">Basé à Montpellier, disponible</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Handshake className="text-white h-8 w-8" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Transparence totale</h3>
              <p className="text-muted-foreground text-sm">Prix fixe, pas de surprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

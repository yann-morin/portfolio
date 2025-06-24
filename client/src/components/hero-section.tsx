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
    <section id="accueil" className="min-h-screen flex items-center bg-gradient-bubble relative overflow-hidden">
      {/* Bulles flottantes */}
      <div className="bubble bubble-1"></div>
      <div className="bubble bubble-2"></div>
      <div className="bubble bubble-3"></div>
      <div className="bubble bubble-4"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12 sm:mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-foreground">
              Votre <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">site web<br className="sm:hidden"/>professionnel</span><br/>
              clé en main à Montpellier
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Développeur web freelance spécialisé dans la création de sites vitrines pour commerçants, artisans et indépendants. Solution complète, moderne et abordable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 sm:mb-20 px-4 sm:px-0">
            <Button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
            >
              <Calculator className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              Devis gratuit
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-300 text-blue-600 hover:bg-blue-50 px-8 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-semibold rounded-full transition-all duration-200 w-full sm:w-auto"
            >
              <Phone className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
              04 XX XX XX XX
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto px-4 sm:px-0">
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Zap className="text-white h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-lg sm:text-xl">Livraison rapide</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Site en ligne sous 2 semaines</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <MapPin className="text-white h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-lg sm:text-xl">Proximité locale</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Basé à Montpellier, disponible</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg">
                <Handshake className="text-white h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-semibold mb-2 sm:mb-3 text-foreground text-lg sm:text-xl">Transparence totale</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Prix fixe, pas de surprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

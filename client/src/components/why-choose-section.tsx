import { Card, CardContent } from "@/components/ui/card";
import { UserCheck, Handshake, MapPin, Clock, MessageCircle, Wrench } from "lucide-react";

export default function WhyChooseSection() {
  const reasons = [
    {
      icon: UserCheck,
      title: "Expertise reconnue",
      description: "Développeur confirmé chez ACSEO, j'apporte mon expertise technique à votre projet personnel avec la même rigueur professionnelle."
    },
    {
      icon: Handshake,
      title: "Relation de confiance",
      description: "Échanges transparents, prix fixes communiqués dès le début. Pas de surprise, pas de frais cachés, juste un service honnête."
    },
    {
      icon: MapPin,
      title: "Proximité locale",
      description: "Basé à Montpellier, je comprends les enjeux locaux et peux vous rencontrer facilement pour discuter de votre projet."
    },
    {
      icon: Clock,
      title: "Disponibilité garantie",
      description: "Développement en dehors de mes heures de salarié, je m'engage sur des délais réalistes et tenus."
    },
    {
      icon: MessageCircle,
      title: "Langage simple",
      description: "Pas de jargon technique, des explications claires. Votre site doit vous ressembler, pas à un manuel informatique."
    },
    {
      icon: Wrench,
      title: "Suivi après livraison",
      description: "Formation pour les mises à jour simples et support en cas de questions après la mise en ligne."
    }
  ];

  return (
    <section id="pourquoi" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Pourquoi me faire confiance ?</h2>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Un développeur local, transparent et à l'écoute de vos besoins
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-accent h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                  <p className="text-light">{reason.description}</p>
                </div>
              );
            })}
          </div>
          
          <Card className="bg-primary">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Mon engagement</h3>
              <p className="text-light text-lg mb-6 max-w-3xl mx-auto">
                "Créer votre site web ne se limite pas au code. C'est comprendre votre métier, 
                vos clients et vos objectifs pour vous livrer un outil qui fait vraiment la différence."
              </p>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">YM</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold">Yann Morin</p>
                  <p className="text-light text-sm">Développeur Web Freelance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

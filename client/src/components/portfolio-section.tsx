import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Boulangerie Martin",
      description: "Site vitrine avec présentation des produits et horaires",
      pack: "Pack BASIC",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Boulangerie artisanale avec vitrine moderne"
    },
    {
      id: 2,
      title: "Salon Élégance",
      description: "Site complet avec réservation en ligne et galerie",
      pack: "Pack PRO",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Salon de coiffure moderne avec équipements professionnels"
    },
    {
      id: 3,
      title: "Menuiserie Dubois",
      description: "Portfolio avec galerie de créations sur mesure",
      pack: "Pack PRO",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Atelier d'artisan menuisier avec meubles sur mesure"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Mes dernières réalisations</h2>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Découvrez quelques projets récents pour des professionnels de Montpellier et alentours
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-secondary overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-light mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-accent font-semibold">
                      {project.pack}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-accent hover:text-accent/80"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-white px-8 py-3 font-semibold"
            >
              Voir tous mes projets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

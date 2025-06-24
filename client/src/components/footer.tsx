export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-secondary border-t border-gray-700 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">YM</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Yann Morin</h3>
                  <p className="text-sm text-light">Développeur Web Freelance</p>
                </div>
              </div>
              <p className="text-light text-sm">
                Création de sites web professionnels pour commerçants, 
                artisans et indépendants à Montpellier.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-light">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-accent transition-colors"
                  >
                    Pack BASIC
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-accent transition-colors"
                  >
                    Pack PRO
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-accent transition-colors"
                  >
                    Hébergement
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="hover:text-accent transition-colors"
                  >
                    Maintenance
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-light">
                <li>yann.morin@freelance.com</li>
                <li>04 XX XX XX XX</li>
                <li>Montpellier, France</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center">
            <p className="text-light text-sm">
              © 2024 Yann Morin - Développeur Web Freelance. 
              <span className="text-accent"> SASU</span> - Siret: XXX XXX XXX XXXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

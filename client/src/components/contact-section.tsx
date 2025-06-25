import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { Mail, Phone, MapPin, Send, Gift, Clock, MessageSquare, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessType: "",
      selectedPack: "",
      projectDescription: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Demande envoyée !",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-background relative overflow-hidden" itemScope itemType="https://schema.org/ContactPage">
      {/* Particules de fond */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <Badge className="mb-4 glass-card px-6 py-2 text-primary border-primary/30">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground" itemProp="name">
              Démarrons votre <span className="gradient-text">projet web</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" itemProp="description">
              Contact direct avec votre développeur web freelance à Montpellier. Devis gratuit et personnalisé sous 24h 
              pour votre site internet. Première consultation sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Informations de contact */}
            <div className={`lg:col-span-4 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="space-y-8">
                {/* Carte principale */}
                <Card className="glass-card hover-glow border-border/20 rounded-3xl">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-foreground mb-6">
                      Parlons de votre projet
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Email</h4>
                          <p className="text-muted-foreground">yann.morin@freelance.fr</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Phone className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                          <p className="text-muted-foreground">04 XX XX XX XX</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-6 w-6 text-accent-secondary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                          <p className="text-muted-foreground">Montpellier, Hérault</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Avantages */}
                <div className="space-y-4">
                  <div className="glass-card p-4 rounded-2xl hover-glow">
                    <div className="flex items-center space-x-3">
                      <Gift className="h-5 w-5 text-primary" />
                      <span className="text-foreground font-medium">Devis gratuit sous 24h</span>
                    </div>
                  </div>
                  <div className="glass-card p-4 rounded-2xl hover-glow">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-accent" />
                      <span className="text-foreground font-medium">Livraison en 2 semaines</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className={`lg:col-span-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <Card className="glass-card border-border/20 rounded-3xl">
                <CardContent className="p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {/* Informations personnelles */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="firstName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Prénom *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl"
                                  placeholder="Votre prénom"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="lastName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Nom *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl"
                                  placeholder="Votre nom"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Email *</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="email"
                                  className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl"
                                  placeholder="votre@email.fr"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground font-medium">Téléphone</FormLabel>
                              <FormControl>
                                <Input 
                                  {...field} 
                                  type="tel"
                                  value={field.value || ""}
                                  className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl"
                                  placeholder="06 XX XX XX XX"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Type d'entreprise */}
                      <FormField
                        control={form.control}
                        name="businessType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Type d'activité *</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                              <FormControl>
                                <SelectTrigger className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl">
                                  <SelectValue placeholder="Sélectionnez votre secteur d'activité" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="glass-card border-border/30">
                                <SelectItem value="restaurant">Restaurant / Bar</SelectItem>
                                <SelectItem value="commerce">Commerce / Boutique</SelectItem>
                                <SelectItem value="artisan">Artisan / Métiers manuels</SelectItem>
                                <SelectItem value="service">Service / Conseil</SelectItem>
                                <SelectItem value="sante">Santé / Bien-être</SelectItem>
                                <SelectItem value="immobilier">Immobilier</SelectItem>
                                <SelectItem value="autre">Autre</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Pack sélectionné */}
                      <FormField
                        control={form.control}
                        name="selectedPack"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Pack souhaité *</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                value={field.value || ""}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                              >
                                <div className="glass-card p-4 rounded-xl hover-glow">
                                  <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="basic" id="basic" className="border-primary text-primary" />
                                    <Label htmlFor="basic" className="flex-1 cursor-pointer">
                                      <div className="font-semibold text-foreground">Pack BASIC</div>
                                      <div className="text-sm text-muted-foreground">Site vitrine 1 page - 990€</div>
                                    </Label>
                                  </div>
                                </div>
                                <div className="glass-card p-4 rounded-xl hover-glow">
                                  <div className="flex items-center space-x-3">
                                    <RadioGroupItem value="pro" id="pro" className="border-accent text-accent" />
                                    <Label htmlFor="pro" className="flex-1 cursor-pointer">
                                      <div className="font-semibold text-foreground">Pack PRO</div>
                                      <div className="text-sm text-muted-foreground">Site multi-pages - 1790€</div>
                                    </Label>
                                  </div>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Description du projet */}
                      <FormField
                        control={form.control}
                        name="projectDescription"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground font-medium">Description du projet *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field}
                                value={field.value || ""}
                                className="glass-card border-border/30 bg-background/50 focus:border-primary/50 rounded-xl min-h-[120px]"
                                placeholder="Décrivez votre projet, vos besoins spécifiques, les fonctionnalités souhaitées..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Bouton de soumission */}
                      <Button
                        type="submit"
                        disabled={contactMutation.isPending}
                        className="w-full glass-card hover-glow bg-primary/20 hover:bg-primary/30 text-primary border-primary/50 font-semibold py-4 rounded-xl text-lg group"
                      >
                        {contactMutation.isPending ? (
                          <>Envoi en cours...</>
                        ) : (
                          <>
                            Envoyer ma demande
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </Button>

                      <p className="text-sm text-muted-foreground text-center">
                        * Champs obligatoires - Réponse garantie sous 24h
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
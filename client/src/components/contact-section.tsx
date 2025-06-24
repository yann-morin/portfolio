import { useState } from "react";
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
import { Mail, Phone, MapPin, Send, Gift, Clock } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  
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
    <section id="contact" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Parlons de votre projet</h2>
            <p className="text-xl text-light max-w-2xl mx-auto">
              Discutons ensemble de vos besoins. Devis gratuit sous 24h.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <Card className="bg-secondary">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Demande de devis gratuit</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-primary border-gray-600 text-white focus:border-accent"
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
                            <FormLabel>Nom *</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                className="bg-primary border-gray-600 text-white focus:border-accent"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              className="bg-primary border-gray-600 text-white focus:border-accent"
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
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="tel"
                              className="bg-primary border-gray-600 text-white focus:border-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="businessType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Type d'activité *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-primary border-gray-600 text-white focus:border-accent">
                                <SelectValue placeholder="Sélectionnez votre secteur" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="commerce">Commerce / Boutique</SelectItem>
                              <SelectItem value="restauration">Restauration</SelectItem>
                              <SelectItem value="artisanat">Artisanat</SelectItem>
                              <SelectItem value="service">Service à la personne</SelectItem>
                              <SelectItem value="liberal">Profession libérale</SelectItem>
                              <SelectItem value="autre">Autre</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="selectedPack"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormLabel>Pack souhaité</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="basic" id="basic" />
                                <Label htmlFor="basic">Pack BASIC (990€)</Label>
                              </div>
                              <div className="flex items-center space-x-3">
                                <RadioGroupItem value="pro" id="pro" />
                                <Label htmlFor="pro">Pack PRO (1990€)</Label>
                              </div>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="projectDescription"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Décrivez votre projet</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              rows={4}
                              placeholder="Décrivez brièvement votre activité et vos besoins..."
                              className="bg-primary border-gray-600 text-white focus:border-accent"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button
                      type="submit"
                      disabled={contactMutation.isPending}
                      className="w-full bg-accent hover:bg-accent/90 text-white py-4 px-6 font-semibold text-lg shadow-lg hover:shadow-xl"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      {contactMutation.isPending ? "Envoi en cours..." : "Envoyer ma demande"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            {/* Informations de contact */}
            <div className="space-y-8">
              <Card className="bg-secondary">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Restons en contact</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email professionnel</h4>
                        <p className="text-light">yann.morin@freelance.com</p>
                        <p className="text-sm text-light">Réponse sous 24h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Téléphone</h4>
                        <p className="text-light">04 XX XX XX XX</p>
                        <p className="text-sm text-light">Du lundi au vendredi, 18h-20h</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="text-accent h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Localisation</h4>
                        <p className="text-light">Montpellier et environs</p>
                        <p className="text-sm text-light">Déplacements possibles</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-accent/10 border border-accent/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">
                    <Gift className="text-accent mr-2 inline h-5 w-5" />
                    Offre de lancement
                  </h3>
                  <p className="text-light mb-4">
                    Pour mes 10 premiers clients, bénéficiez d'une réduction de 10% 
                    sur le Pack PRO et d'un an d'hébergement offert.
                  </p>
                  <p className="text-sm text-light">
                    <Clock className="mr-1 inline h-4 w-4" />
                    Offre valable jusqu'au 31 mars 2024
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

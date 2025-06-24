import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the request
      console.log("New contact request:", contactRequest);
      
      res.json({ 
        success: true, 
        message: "Votre demande a été envoyée avec succès. Vous recevrez une réponse sous 24h.",
        id: contactRequest.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Données invalides", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Erreur serveur. Veuillez réessayer plus tard." 
        });
      }
    }
  });

  // Get all contact requests (for admin purposes)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Erreur lors de la récupération des demandes" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

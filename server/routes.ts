import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertPartnerApplicationSchema } from "@shared/schema";
import { ObjectStorageService } from "./objectStorage";
import { sendContactEmails } from "./email";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Serve public assets from object storage
  app.get("/public-objects/:filePath(*)", async (req, res) => {
    const filePath = req.params.filePath;
    const objectStorageService = new ObjectStorageService();
    try {
      const file = await objectStorageService.searchPublicObject(filePath);
      if (!file) {
        return res.status(404).json({ error: "File not found" });
      }
      objectStorageService.downloadObject(file, res);
    } catch (error) {
      console.error("Error searching for public object:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      
      // Save to database
      const contactRequest = await storage.createContactRequest(validatedData);
      
      // Send emails - if this fails, we want to inform the user
      await sendContactEmails(validatedData);
      
      res.json({ success: true, data: contactRequest });
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof ZodError) {
        res.status(400).json({ success: false, error: "Errore nella validazione dei dati" });
      } else {
        // For SendGrid or other system errors, surface the specific error message
        const errorMessage = error instanceof Error 
          ? error.message 
          : "Errore nell'invio del messaggio. Ti preghiamo di riprovare o contattarci direttamente.";
        
        res.status(500).json({ 
          success: false, 
          error: errorMessage
        });
      }
    }
  });

  // Partner application submission
  app.post("/api/partner", async (req, res) => {
    try {
      const validatedData = insertPartnerApplicationSchema.parse(req.body);
      const partnerApplication = await storage.createPartnerApplication(validatedData);
      res.json({ success: true, data: partnerApplication });
    } catch (error) {
      console.error("Partner application error:", error);
      res.status(400).json({ success: false, error: "Errore nella validazione dei dati" });
    }
  });

  // Get all contact requests (admin endpoint)
  app.get("/api/contact", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json({ success: true, data: requests });
    } catch (error) {
      console.error("Get contact requests error:", error);
      res.status(500).json({ success: false, error: "Errore del server" });
    }
  });

  // Get all partner applications (admin endpoint)
  app.get("/api/partner", async (req, res) => {
    try {
      const applications = await storage.getPartnerApplications();
      res.json({ success: true, data: applications });
    } catch (error) {
      console.error("Get partner applications error:", error);
      res.status(500).json({ success: false, error: "Errore del server" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

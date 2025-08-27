import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertPartnerApplicationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      res.json({ success: true, data: contactRequest });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ success: false, error: "Errore nella validazione dei dati" });
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

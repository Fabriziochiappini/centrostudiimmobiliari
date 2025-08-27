import { type ContactRequest, type InsertContactRequest, type PartnerApplication, type InsertPartnerApplication } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  createPartnerApplication(application: InsertPartnerApplication): Promise<PartnerApplication>;
  getContactRequests(): Promise<ContactRequest[]>;
  getPartnerApplications(): Promise<PartnerApplication[]>;
}

export class MemStorage implements IStorage {
  private contactRequests: Map<string, ContactRequest>;
  private partnerApplications: Map<string, PartnerApplication>;

  constructor() {
    this.contactRequests = new Map();
    this.partnerApplications = new Map();
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const request: ContactRequest = { 
      ...insertRequest,
      telefono: insertRequest.telefono || null,
      servizio: insertRequest.servizio || null,
      id, 
      createdAt: new Date() 
    };
    this.contactRequests.set(id, request);
    return request;
  }

  async createPartnerApplication(insertApplication: InsertPartnerApplication): Promise<PartnerApplication> {
    const id = randomUUID();
    const application: PartnerApplication = { 
      ...insertApplication, 
      id, 
      createdAt: new Date() 
    };
    this.partnerApplications.set(id, application);
    return application;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return Array.from(this.contactRequests.values());
  }

  async getPartnerApplications(): Promise<PartnerApplication[]> {
    return Array.from(this.partnerApplications.values());
  }
}

export const storage = new MemStorage();

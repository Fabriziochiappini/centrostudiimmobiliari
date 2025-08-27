import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nome: text("nome").notNull(),
  cognome: text("cognome").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono"),
  servizio: text("servizio"),
  messaggio: text("messaggio").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const partnerApplications = pgTable("partner_applications", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  nome: text("nome").notNull(),
  cognome: text("cognome").notNull(),
  email: text("email").notNull(),
  telefono: text("telefono").notNull(),
  esperienza: text("esperienza").notNull(),
  motivazione: text("motivazione").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export const insertPartnerApplicationSchema = createInsertSchema(partnerApplications).omit({
  id: true,
  createdAt: true,
});

export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;

export type PartnerApplication = typeof partnerApplications.$inferSelect;
export type InsertPartnerApplication = z.infer<typeof insertPartnerApplicationSchema>;

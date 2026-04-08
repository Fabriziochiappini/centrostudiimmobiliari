import sgMail from "@sendgrid/mail";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().min(1),
  cognome: z.string().min(1),
  email: z.string().email(),
  telefono: z.string().optional().nullable(),
  servizio: z.string().optional().nullable(),
  messaggio: z.string().min(1),
});

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function readBody(req: any) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  const chunks: Buffer[] = [];
  for await (const chunk of req) chunks.push(Buffer.from(chunk));
  const raw = Buffer.concat(chunks).toString("utf8");
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export default async function handler(req: any, res: any) {
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method Not Allowed" });

  const parsedBody = await readBody(req);
  const parsed = contactSchema.safeParse(parsedBody);
  if (!parsed.success) {
    return res.status(400).json({ error: "Dati non validi" });
  }

  const data = parsed.data;
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return res.status(200).json({ success: true, delivered: false });
  }

  const fromEmail = process.env.CONTACT_FROM_EMAIL || "info@webproitalia.com";
  const toEmail = process.env.CONTACT_TO_EMAIL || "info@centrostudiimmobiliari.it";

  sgMail.setApiKey(apiKey);

  const nomeCognome = `${data.nome} ${data.cognome}`.trim();
  const safeNomeCognome = escapeHtml(nomeCognome);
  const safeEmail = escapeHtml(data.email);
  const safeTelefono = data.telefono ? escapeHtml(data.telefono) : "";
  const safeServizio = data.servizio ? escapeHtml(data.servizio) : "";
  const safeMessaggio = escapeHtml(data.messaggio);

  const adminEmail = {
    to: toEmail,
    from: fromEmail,
    subject: `Nuova richiesta di contatto - ${nomeCognome}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2ca781;">Nuova Richiesta di Contatto</h2>
        <p>Hai ricevuto una nuova richiesta di contatto dal sito web.</p>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #071029;">Dettagli Cliente</h3>
          <p><strong>Nome:</strong> ${safeNomeCognome}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          ${safeTelefono ? `<p><strong>Telefono:</strong> ${safeTelefono}</p>` : ""}
          ${safeServizio ? `<p><strong>Servizio di interesse:</strong> ${safeServizio}</p>` : ""}
        </div>
        <div style="background-color: #e8f5f1; padding: 20px; border-radius: 8px;">
          <h3 style="margin-top: 0; color: #2ca781;">Messaggio</h3>
          <p style="white-space: pre-wrap;">${safeMessaggio}</p>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 14px;">
          Puoi rispondere direttamente al cliente all'indirizzo: ${safeEmail}
        </p>
      </div>
    `,
  };

  const clientEmail = {
    to: data.email,
    from: fromEmail,
    subject: "Conferma ricezione richiesta - Centro Studi Immobiliari",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2ca781;">Grazie per averci contattato!</h2>
        <p>Gentile ${safeNomeCognome},</p>
        <p>Abbiamo ricevuto la tua richiesta di contatto e ti ringraziamo per l'interesse dimostrato nei nostri servizi.</p>
        <div style="background-color: #e8f5f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0; color: #2ca781;">La tua richiesta</h3>
          ${safeServizio ? `<p><strong>Servizio:</strong> ${safeServizio}</p>` : ""}
          <p><strong>Messaggio:</strong></p>
          <p style="white-space: pre-wrap;">${safeMessaggio}</p>
        </div>
        <p>Un nostro consulente ti risponderà al più presto all'indirizzo email fornito.</p>
        <p style="color: #666; font-size: 14px; margin-top: 30px;">
          <strong>Centro Studi Immobiliari</strong><br />
          Email: info@centrostudiimmobiliari.it<br />
          Consulenza Immobiliare Professionale
        </p>
      </div>
    `,
  };

  try {
    await Promise.all([sgMail.send(adminEmail), sgMail.send(clientEmail)]);
    return res.status(200).json({ success: true, delivered: true });
  } catch {
    return res.status(502).json({ error: "Errore nell'invio delle email" });
  }
}

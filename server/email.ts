import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const FROM_EMAIL = 'info@webproitalia.com';
const TO_EMAIL = 'info@centrostudiimmobiliari.it';

interface ContactData {
  nome: string;
  cognome: string;
  email: string;
  telefono?: string | null;
  servizio?: string | null;
  messaggio: string;
}

export async function sendContactEmails(data: ContactData) {
  try {
    console.log('📧 Preparing emails...');
    console.log(`   Admin email TO: ${TO_EMAIL}`);
    console.log(`   Client email TO: ${data.email}`);
    console.log(`   FROM: ${FROM_EMAIL}`);
    
    // Email to Centro Studi Immobiliari with client details
    const adminEmail = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `Nuova richiesta di contatto - ${data.nome} ${data.cognome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2ca781;">Nuova Richiesta di Contatto</h2>
          <p>Hai ricevuto una nuova richiesta di contatto dal sito web.</p>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #071029;">Dettagli Cliente</h3>
            <p><strong>Nome:</strong> ${data.nome} ${data.cognome}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            ${data.telefono ? `<p><strong>Telefono:</strong> ${data.telefono}</p>` : ''}
            ${data.servizio ? `<p><strong>Servizio di interesse:</strong> ${data.servizio}</p>` : ''}
          </div>
          
          <div style="background-color: #e8f5f1; padding: 20px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #2ca781;">Messaggio</h3>
            <p style="white-space: pre-wrap;">${data.messaggio}</p>
          </div>
          
          <p style="margin-top: 20px; color: #666; font-size: 14px;">
            Puoi rispondere direttamente a questa email o contattare il cliente all'indirizzo: ${data.email}
          </p>
        </div>
      `,
    };

    // Confirmation email to client
    const clientEmail = {
      to: data.email,
      from: FROM_EMAIL,
      subject: 'Conferma ricezione richiesta - Centro Studi Immobiliari',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2ca781;">Grazie per averci contattato!</h2>
          <p>Gentile ${data.nome} ${data.cognome},</p>
          
          <p>Abbiamo ricevuto la tua richiesta di contatto e ti ringraziamo per l'interesse dimostrato nei nostri servizi.</p>
          
          <div style="background-color: #e8f5f1; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #2ca781;">La tua richiesta</h3>
            ${data.servizio ? `<p><strong>Servizio:</strong> ${data.servizio}</p>` : ''}
            <p><strong>Messaggio:</strong></p>
            <p style="white-space: pre-wrap;">${data.messaggio}</p>
          </div>
          
          <p>Un nostro consulente ti risponderà al più presto all'indirizzo email fornito.</p>
          
          <p style="color: #666; font-size: 14px; margin-top: 30px;">
            <strong>Centro Studi Immobiliari</strong><br>
            Email: info@centrostudiimmobiliari.it<br>
            Consulenza Immobiliare Professionale
          </p>
        </div>
      `,
    };

    // Send both emails
    const [adminResponse, clientResponse] = await Promise.all([
      sgMail.send(adminEmail),
      sgMail.send(clientEmail)
    ]);

    console.log('✅ Admin email sent - Status:', adminResponse[0].statusCode);
    console.log('✅ Client email sent - Status:', clientResponse[0].statusCode);
    console.log('📬 Email sent to:', TO_EMAIL, 'and', data.email);
    
    return { success: true };
  } catch (error: any) {
    console.error('❌ Error sending emails:', error);
    if (error.response) {
      console.error('SendGrid error details:', error.response.body);
    }
    throw new Error('Errore nell\'invio delle email. Verifica la configurazione SendGrid.');
  }
}

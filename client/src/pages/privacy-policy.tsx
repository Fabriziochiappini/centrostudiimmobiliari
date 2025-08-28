import HeroSection from "@/components/layout/hero-section";

export default function PrivacyPolicy() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Privacy Policy"
        subtitle="Informazioni sul trattamento dei dati personali secondo il GDPR"
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">1. Titolare del trattamento</h2>
              <p className="text-gray-600 leading-relaxed">
                Il titolare del trattamento dei dati è <strong>Exponent S.r.l.s</strong>, con sede legale in Italia, 
                P.IVA 04062291206, contattabile all'indirizzo email info@exponent group.it e al numero di telefono +39 051 196 000 10.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">2. Tipologie di dati raccolti</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Raccogliamo le seguenti categorie di dati personali:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Dati anagrafici (nome, cognome)</li>
                <li>Dati di contatto (email, telefono)</li>
                <li>Informazioni professionali (esperienza nel settore immobiliare)</li>
                <li>Messaggi e comunicazioni inviate tramite i nostri moduli di contatto</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">3. Finalità del trattamento</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I dati personali vengono trattati per le seguenti finalità:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Rispondere alle richieste di informazioni e contatto</li>
                <li>Valutare candidature per partnership commerciali</li>
                <li>Fornire consulenza immobiliare personalizzata</li>
                <li>Comunicazioni commerciali e promozionali (previo consenso)</li>
                <li>Adempimento di obblighi legali e fiscali</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">4. Base giuridica del trattamento</h2>
              <p className="text-gray-600 leading-relaxed">
                Il trattamento dei dati personali si basa sul consenso dell'interessato, sull'interesse legittimo 
                del titolare per attività commerciali e promozionali, e sull'esecuzione di misure precontrattuali 
                adottate su richiesta dell'interessato.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">5. Conservazione dei dati</h2>
              <p className="text-gray-600 leading-relaxed">
                I dati personali vengono conservati per il tempo necessario al raggiungimento delle finalità per cui sono stati raccolti 
                e comunque non oltre 5 anni dalla cessazione del rapporto, salvo diversi obblighi di legge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">6. Diritti dell'interessato</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                L'interessato ha diritto a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Accedere ai propri dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Limitare il trattamento</li>
                <li>Opporsi al trattamento</li>
                <li>Richiedere la portabilità dei dati</li>
                <li>Proporre reclamo all'autorità di controllo</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">7. Sicurezza dei dati</h2>
              <p className="text-gray-600 leading-relaxed">
                Adottiamo misure tecniche e organizzative appropriate per garantire un livello di sicurezza 
                adeguato al rischio, incluse crittografia, pseudonimizzazione e controlli di accesso.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">8. Aggiornamenti</h2>
              <p className="text-gray-600 leading-relaxed">
                La presente privacy policy può essere aggiornata periodicamente. 
                La versione più recente è sempre disponibile su questa pagina.
              </p>
            </div>

            <div className="bg-[#a9f6db]/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-montserrat font-bold text-[#071029] mb-2">Contatti per la Privacy</h3>
              <p className="text-gray-600">
                Per esercitare i tuoi diritti o per qualsiasi domanda relativa al trattamento dei dati, 
                contattaci all'indirizzo <strong>info@exponent group.it</strong> o al numero <strong>+39 051 196 000 10</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
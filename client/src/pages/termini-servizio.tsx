import HeroSection from "@/components/layout/hero-section";

export default function TerminiServizio() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Termini di Servizio"
        subtitle="Condizioni generali di utilizzo dei servizi Exponent"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">1. Informazioni sulla società</h2>
              <p className="text-gray-600 leading-relaxed">
                <strong>Exponent S.r.l.s</strong> è una società di consulenza immobiliare con P.IVA 04062291206, 
                con sedi operative in Bologna, Firenze, Padova, Milano, Piacenza, Cagliari, Venezia e Modena. 
                Contatti: info@centrostudiimmobiliari.it - +39 051 196 000 10.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">2. Accettazione dei termini</h2>
              <p className="text-gray-600 leading-relaxed">
                L'utilizzo dei nostri servizi implica l'accettazione integrale dei presenti termini e condizioni. 
                Se non accetti questi termini, ti preghiamo di non utilizzare i nostri servizi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">3. Descrizione dei servizi</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Exponent offre i seguenti servizi di consulenza immobiliare:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Ricerca:</strong> Property Finder per la ricerca di immobili</li>
                <li><strong>NPL:</strong> Gestione crediti non performanti</li>
                <li><strong>Saldo e Stralcio:</strong> in partnership con Jurelit</li>
                <li><strong>Asta:</strong> Assistenza per aste immobiliari</li>
                <li><strong>Valorizzazione:</strong> Home staging e valorizzazione immobiliare</li>
                <li><strong>Affitti Brevi:</strong> Gestione affitti a breve termine</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">4. Obblighi del cliente</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Il cliente si impegna a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fornire informazioni veritiere e complete</li>
                <li>Collaborare attivamente nel processo di consulenza</li>
                <li>Rispettare i termini di pagamento concordati</li>
                <li>Non utilizzare i servizi per scopi illeciti</li>
                <li>Rispettare la proprietà intellettuale di Exponent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">5. Obblighi di Exponent</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Exponent si impegna a:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Fornire servizi professionali di alta qualità</li>
                <li>Mantenere la riservatezza delle informazioni del cliente</li>
                <li>Operare nel rispetto delle normative vigenti</li>
                <li>Fornire assistenza personalizzata secondo le esigenze del cliente</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">6. Tariffe e pagamenti</h2>
              <p className="text-gray-600 leading-relaxed">
                Le tariffe per i servizi vengono concordate caso per caso e comunicate prima dell'inizio della prestazione. 
                I pagamenti devono essere effettuati secondo le modalità e i tempi concordati. 
                In caso di ritardo nei pagamenti, si applicheranno interessi di mora secondo i termini di legge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">7. Responsabilità e limitazioni</h2>
              <p className="text-gray-600 leading-relaxed">
                Exponent fornisce consulenza basata sulle migliori pratiche del settore e sulla propria esperienza. 
                La responsabilità è limitata al valore del servizio fornito. Exponent non è responsabile per danni indiretti 
                o consequenziali derivanti dall'utilizzo dei servizi.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">8. Riservatezza</h2>
              <p className="text-gray-600 leading-relaxed">
                Tutte le informazioni condivise durante la prestazione del servizio sono trattate con massima riservatezza 
                e non verranno divulgate a terzi senza autorizzazione, salvo obblighi di legge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">9. Risoluzione controversie</h2>
              <p className="text-gray-600 leading-relaxed">
                Eventuali controversie saranno risolte preferibilmente attraverso trattative dirette. 
                In caso di mancato accordo, sarà competente il foro di Bologna. 
                Si applica la legge italiana per tutti gli aspetti non diversamente specificati.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">10. Modifiche ai termini</h2>
              <p className="text-gray-600 leading-relaxed">
                Exponent si riserva il diritto di modificare questi termini in qualsiasi momento. 
                Le modifiche saranno pubblicate sul sito web e entreranno in vigore dalla data di pubblicazione.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">11. Recesso</h2>
              <p className="text-gray-600 leading-relaxed">
                Entrambe le parti possono recedere dal contratto con preavviso di 30 giorni, 
                fatti salvi i pagamenti per i servizi già prestati e gli obblighi di riservatezza.
              </p>
            </div>

            <div className="bg-[#a9f6db]/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-montserrat font-bold text-[#071029] mb-2">Contatti</h3>
              <p className="text-gray-600">
                Per qualsiasi domanda sui presenti termini di servizio, contatta:<br />
                <strong>Email:</strong> info@centrostudiimmobiliari.it<br />
                <strong>Telefono:</strong> +39 051 196 000 10<br />
                <strong>P.IVA:</strong> 04062291206
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
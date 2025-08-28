import HeroSection from "@/components/layout/hero-section";

export default function CookiePolicy() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Cookie Policy"
        subtitle="Informazioni sull'utilizzo dei cookie sul nostro sito web"
        backgroundImage="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">1. Cosa sono i cookie</h2>
              <p className="text-gray-600 leading-relaxed">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Vengono utilizzati per migliorare l'esperienza di navigazione e fornire funzionalità personalizzate.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">2. Tipologie di cookie utilizzati</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#071029] mb-2">Cookie Tecnici (Necessari)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Essenziali per il corretto funzionamento del sito web. Includono cookie per la gestione delle sessioni, 
                    la sicurezza e la funzionalità di base.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071029] mb-2">Cookie di Prestazione</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Raccolgono informazioni anonime su come i visitatori utilizzano il sito per migliorare le prestazioni 
                    e l'esperienza utente.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#071029] mb-2">Cookie di Funzionalità</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Consentono al sito di ricordare le scelte effettuate (come lingua, regione) per fornire 
                    funzionalità avanzate e personalizzate.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">3. Cookie di terze parti</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Il nostro sito può utilizzare cookie di terze parti per:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Analisi del traffico web (Google Analytics)</li>
                <li>Integrazione con social media</li>
                <li>Visualizzazione di mappe interattive</li>
                <li>Servizi di assistenza clienti</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">4. Durata dei cookie</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                I cookie possono essere:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Di sessione:</strong> vengono eliminati alla chiusura del browser</li>
                <li><strong>Persistenti:</strong> rimangono sul dispositivo per un periodo prestabilito</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">5. Gestione dei cookie</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Puoi gestire o disabilitare i cookie attraverso:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Le impostazioni del tuo browser</li>
                <li>Il banner di gestione cookie presente sul sito</li>
                <li>Le impostazioni di privacy del tuo dispositivo</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                <strong>Nota:</strong> La disabilitazione di alcuni cookie potrebbe limitare la funzionalità del sito.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">6. Come disabilitare i cookie</h2>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-[#071029]">Chrome:</h4>
                  <p className="text-gray-600 text-sm">Impostazioni {'>'}  Privacy e sicurezza {'>'}  Cookie e altri dati dei siti</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#071029]">Firefox:</h4>
                  <p className="text-gray-600 text-sm">Opzioni {'>'}  Privacy e sicurezza {'>'}  Cookie e dati dei siti web</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#071029]">Safari:</h4>
                  <p className="text-gray-600 text-sm">Preferenze {'>'}  Privacy {'>'}  Gestisci dati siti web</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#071029]">Edge:</h4>
                  <p className="text-gray-600 text-sm">Impostazioni {'>'}  Privacy, ricerca e servizi {'>'}  Cookie e autorizzazioni sito</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">7. Aggiornamenti</h2>
              <p className="text-gray-600 leading-relaxed">
                Questa Cookie Policy può essere aggiornata periodicamente per riflettere modifiche 
                nelle nostre pratiche o per altri motivi operativi, legali o normativi.
              </p>
            </div>

            <div className="bg-[#a9f6db]/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-montserrat font-bold text-[#071029] mb-2">Titolare del trattamento</h3>
              <p className="text-gray-600">
                <strong>Exponent S.r.l.s</strong><br />
                P.IVA: 04062291206<br />
                Email: info@exponent group.it<br />
                Telefono: +39 051 196 000 10
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
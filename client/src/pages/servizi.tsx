import { Search, FileText, Scale, Gavel, TrendingUp, Home } from "lucide-react";
import HeroSection from "@/components/layout/hero-section";

export default function Servizi() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="I Nostri Servizi"
        subtitle="Soluzioni complete e personalizzate per ogni esigenza immobiliare, dalla consulenza strategica alla gestione del patrimonio."
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Services Full Width */}
      <section className="py-20 bg-gray-50">
        <div className="w-full">
          <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-[#071029] mb-6">
              I Nostri Servizi Specializzati
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soluzioni complete e innovative per ogni fase del tuo investimento immobiliare, 
              dal primo contatto alla massimizzazione dei rendimenti
            </p>
          </div>
          
          <div className="space-y-0">
            {/* Ricerca */}
            <div className="bg-[#071029] py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <Search className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-white">Ricerca</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-white leading-relaxed">
                        Il Property Finder può aiutarti a trovare l'immobile che soddisfi le tue esigenze specifiche.
                      </p>
                      <p className="text-white leading-relaxed">
                        Grazie alla sua conoscenza del mercato immobiliare e alla sua esperienza nella ricerca di proprietà, 
                        il Property Finder può identificare le opzioni che meglio si adattano alle tue esigenze di acquisto, 
                        risparmiandoti tempo e sforzi nella ricerca.
                      </p>
                      <p className="text-white leading-relaxed">
                        Inoltre, il Property Finder può assisterti nella trattativa con l'agenzia immobiliare o il venditore privato, 
                        cercando di ottenere il miglior prezzo possibile per l'immobile e garantendoti una transazione sicura e trasparente.
                      </p>
                      <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
                        <p className="text-[#a9f6db] font-medium">
                          In sintesi, il Property Finder è un professionista esperto che può supportarti nella ricerca e nell'acquisto 
                          della casa dei tuoi sogni, garantendoti un servizio personalizzato e di alta qualità.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    {/* Carica un'immagine chiamata "ricerca-property-finder.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src="/public-objects/ricerca-property-finder.jpg" 
                        alt="Property Finder - Casa con giardino e viale d'accesso"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">🏡</div><p class="text-lg font-semibold">Carica "ricerca-property-finder.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* NPL */}
            <div className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-1">
                    {/* Carica un'immagine chiamata "npl-opportunita.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src="/public-objects/npl-opportunita.jpg" 
                        alt="NPL - Opportunità di investimento immobiliare"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">📊</div><p class="text-lg font-semibold">Carica "npl-opportunita.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  <div className="order-2">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <FileText className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-[#071029]">NPL</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                        Hai mai desiderato accedere a un'affare immobiliare unico nel suo genere?
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Sei pronto a cogliere un'opportunità che potrebbe trasformare il tuo portafoglio di investimenti? 
                        Allora gli NPL, o crediti non performanti, potrebbero essere la chiave per sbloccare il tuo potenziale finanziario.
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        Gli NPL rappresentano una via straordinaria per acquisire immobili a prezzi straordinariamente vantaggiosi. 
                        Questi crediti bancari non performanti offrono l'opportunità di accedere a proprietà di valore 
                        prima che finiscano sul mercato tradizionale.
                      </p>
                      <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          Grazie al supporto delle normative vigenti e all'autorizzazione della Banca d'Italia, 
                          puoi avere la sicurezza di un investimento solido e regolamentato.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Saldo e Stralcio */}
            <div className="bg-[#071029] py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <Scale className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-white">Saldo e Stralcio</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-white leading-relaxed">
                        Abbiamo scelto di collaborare esclusivamente con il nostro partner, <strong>Jurelit</strong>, per offrire 
                        un'opportunità altamente vantaggiosa a tutte le parti coinvolte.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
                            🏠 <span className="ml-2">Debitore</span>
                          </h4>
                          <p className="text-black leading-relaxed">
                            Eliminazione completa del debito con sollievo finanziario immediato
                          </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
                            💼 <span className="ml-2">Creditore</span>
                          </h4>
                          <p className="text-black leading-relaxed">
                            Recupero rapido ed efficiente senza lunghe battaglie legali
                          </p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
                            💰 <span className="ml-2">Acquirente</span>
                          </h4>
                          <p className="text-black leading-relaxed">
                            Acquisto di immobili a prezzi notevolmente sotto il valore di mercato
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
                        <p className="text-[#a9f6db] font-medium">
                          <strong>La collaborazione con Jurelit</strong> garantisce una gestione efficiente e trasparente 
                          per risultati soddisfacenti per tutti i partecipanti.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    {/* Carica un'immagine chiamata "saldo-stralcio-jurelit.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src="/public-objects/saldo-stralcio-jurelit.jpg" 
                        alt="Saldo e Stralcio - Partnership Jurelit"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">⚖️</div><p class="text-lg font-semibold">Carica "saldo-stralcio-jurelit.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Asta */}
            <div className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                  <div className="order-1">
                    {/* Carica un'immagine chiamata "asta-immobiliare.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden mb-8">
                      <img 
                        src="/public-objects/asta-immobiliare.jpg" 
                        alt="Aste immobiliari - Tribunale e martelletto"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">🔨</div><p class="text-lg font-semibold">Carica "asta-immobiliare.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                    
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                      <h4 className="text-2xl font-semibold text-[#071029] mb-6 text-center">📋 Processo Aste</h4>
                      <div className="grid grid-cols-1 gap-4">
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-xs font-bold text-[#071029]">1</div>
                          <span className="text-sm font-medium text-gray-700">Lettura perizia e analisi documenti</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-xs font-bold text-[#071029]">2</div>
                          <span className="text-sm font-medium text-gray-700">Visita immobile e valutazione</span>
                        </div>
                        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-xs font-bold text-[#071029]">3</div>
                          <span className="text-sm font-medium text-gray-700">Strategia d'acquisto e offerta</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="order-2">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <Gavel className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-[#071029]">Asta</h3>
                    </div>
                    
                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed">
                        Negli ultimi anni, abbiamo notato un <strong>aumento significativo delle richieste</strong> da parte dei nostri clienti 
                        di partecipare alle aste immobiliari.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-3">🔒 Sicurezza</h4>
                          <p className="text-gray-600 text-sm">
                            Tutti i documenti sono pubblici e consultabili, garantendo massima trasparenza
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-3">💰 Risparmio</h4>
                          <p className="text-gray-600 text-sm">
                            Acquisto di immobili a prezzi sotto il valore di mercato
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-[#071029] p-6 rounded-lg text-white">
                        <p className="leading-relaxed mb-4">
                          Tuttavia, comprendiamo che molti possano sentirsi intimiditi. Per questo <strong className="text-[#a9f6db]">consigliamo sempre di affidarsi a un professionista specializzato</strong>.
                        </p>
                        <p className="text-[#a9f6db] font-medium">
                          Il nostro team di professionisti è qui per guidarti attraverso l'intero processo e assicurarti 
                          un'esperienza di acquisto senza intoppi.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Valorizzazione */}
            <div className="bg-[#071029] py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <TrendingUp className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-white">Valorizzazione</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-white leading-relaxed">
                        Il nostro servizio di valorizzazione immobiliare ti offre un <strong>supporto completo in ogni fase</strong> 
                        del processo di vendita della tua casa.
                      </p>
                      <p className="text-white leading-relaxed">
                        Comprendiamo che la maggior parte dei potenziali acquirenti cerca casa online, ed è proprio per questo motivo 
                        che mettiamo a disposizione i nostri servizi per aiutarti a <strong>vendere la tua proprietà in modo più rapido</strong> 
                        e ad un prezzo più vantaggioso.
                      </p>
                      
                      <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-semibold text-[#071029] mb-3">🏡 Home Staging Professionale</h4>
                          <p className="text-black leading-relaxed">
                            Valorizziamo gli spazi e gli arredi della tua casa, rendendola più attraente per i potenziali acquirenti
                          </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg">
                          <h4 className="font-semibold text-black mb-3">💰 Rendita durante la Vendita</h4>
                          <p className="text-black leading-relaxed">
                            Sfruttare il potenziale di rendita tramite affitti a breve termine durante il periodo di vendita
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
                        <p className="text-[#a9f6db] font-medium">
                          <strong>Contattaci per ulteriori informazioni</strong> e per scoprire come possiamo aiutarti a valorizzare 
                          la tua casa e ottenere il massimo dalla vendita.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2">
                    {/* Carica un'immagine chiamata "valorizzazione-home-staging.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src="/public-objects/valorizzazione-home-staging.jpg" 
                        alt="Valorizzazione - Home staging di un soggiorno moderno"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">📈</div><p class="text-lg font-semibold">Carica "valorizzazione-home-staging.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Affitti Brevi */}
            <div className="bg-white py-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="order-1">
                    {/* Carica un'immagine chiamata "affitti-brevi-airbnb.jpg" nella directory public dell'Object Storage */}
                    <div className="aspect-video rounded-xl overflow-hidden">
                      <img 
                        src="/public-objects/affitti-brevi-airbnb.jpg" 
                        alt="Affitti Brevi - Camera da letto accogliente per ospiti"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('div');
                          fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                          fallback.innerHTML = '<div class="text-center text-gray-500"><div class="text-6xl mb-4">🏨</div><p class="text-lg font-semibold">Carica "affitti-brevi-airbnb.jpg"</p><p class="text-sm">nella directory public dell\'Object Storage</p></div>';
                          target.parentNode?.appendChild(fallback);
                        }}
                      />
                    </div>
                  </div>
                  <div className="order-2">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                        <Home className="w-8 h-8 text-[#071029]" />
                      </div>
                      <h3 className="text-4xl font-montserrat font-bold text-[#071029]">Affitti Brevi</h3>
                    </div>
                    <div className="space-y-6">
                      <p className="text-lg text-gray-600 leading-relaxed font-semibold">
                        Gli affitti a breve termine offrono numerosi vantaggi che rendono questa opzione 
                        molto attraente per i proprietari immobiliari.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-2">💰 Maggiori Guadagni</h4>
                          <p className="text-gray-600 text-sm">Reddito più elevato rispetto agli affitti a lungo termine</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-2">🔄 Flessibilità</h4>
                          <p className="text-gray-600 text-sm">Controllo completo sulla disponibilità della proprietà</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-2">📈 Valorizzazione</h4>
                          <p className="text-gray-600 text-sm">Casa sempre presentabile per potenziali acquirenti</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#a9f6db]">
                          <h4 className="font-semibold text-[#071029] mb-2">🌐 Visibilità</h4>
                          <p className="text-gray-600 text-sm">Marketing su piattaforme di prenotazione online</p>
                        </div>
                      </div>
                      
                      <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
                        <p className="text-gray-700 font-medium">
                          <strong>Se desideri massimizzare il guadagno e la visibilità</strong> della tua casa, contattaci 
                          per scoprire come il nostro servizio di affitti a breve termine può aiutarti a raggiungere 
                          i tuoi obiettivi di vendita.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gray-100 py-20">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#071029] mb-6">
                  Pronto a Trasformare il Tuo Investimento Immobiliare?
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                  I nostri esperti sono pronti ad accompagnarti in ogni fase del tuo percorso immobiliare
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a 
                    href="/contatti" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#071029] text-white font-semibold rounded-lg hover:bg-[#071029]/90 transition-colors duration-300"
                  >
                    Contattaci
                  </a>
                  <a 
                    href="/partner" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#a9f6db] text-[#071029] font-semibold rounded-lg hover:bg-[#a9f6db]/80 transition-colors duration-300"
                  >
                    Scopri i Servizi
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
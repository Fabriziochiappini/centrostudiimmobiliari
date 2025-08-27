import HeroSection from "@/components/layout/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Search, FileText, Scale, Gavel, TrendingUp, Home } from "lucide-react";

export default function Servizi() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="I Nostri Servizi"
        subtitle="Soluzioni complete e personalizzate per ogni esigenza immobiliare, dalla consulenza strategica alla gestione del patrimonio."
        backgroundImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#071029] mb-4">
              I Nostri Servizi Specializzati
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Soluzioni complete per ogni fase del tuo investimento immobiliare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Ricerca */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Search className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">Ricerca</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Il Property Finder può aiutarti a trovare l'immobile che soddisfi le tue esigenze specifiche.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Grazie alla sua conoscenza del mercato immobiliare e alla sua esperienza nella ricerca di proprietà, 
                    il Property Finder può identificare le opzioni che meglio si adattano alle tue esigenze di acquisto, 
                    risparmiandoti tempo e sforzi nella ricerca.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Inoltre, il Property Finder può assisterti nella trattativa con l'agenzia immobiliare o il venditore privato, 
                    cercando di ottenere il miglior prezzo possibile per l'immobile e garantendoti una transazione sicura e trasparente.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Affidarsi al Property Finder può anche aiutarti a evitare errori costosi, come l'acquisto di un immobile 
                    che non corrisponde alle tue esigenze o che ha problemi strutturali o legali.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    In sintesi, il Property Finder è un professionista esperto che può supportarti nella ricerca e nell'acquisto 
                    della casa dei tuoi sogni, garantendoti un servizio personalizzato e di alta qualità.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* NPL */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">NPL</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Hai mai desiderato accedere a un'affare immobiliare unico nel suo genere?</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Sei pronto a cogliere un'opportunità che potrebbe trasformare il tuo portafoglio di investimenti? 
                    Allora gli NPL, o crediti non performanti, potrebbero essere la chiave per sbloccare il tuo potenziale finanziario.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Gli NPL rappresentano una via straordinaria per acquisire immobili a prezzi straordinariamente vantaggiosi. 
                    Questi crediti bancari non performanti, spesso derivanti da mutui immobiliari inadempiuti, offrono l'opportunità 
                    di accedere a proprietà di valore prima che finiscano sul mercato tradizionale.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Perché limitarsi a seguire la folla quando puoi distinguerti dagli altri investitori?</strong>
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Investire negli NPL ti permette di evitare la concorrenza sempre più agguerrita nel settore immobiliare, 
                    che spesso porta a prezzi gonfiati e ad aste estremamente competitive. Con una strategia di investimento 
                    ben pianificata e l'accesso a competenze specializzate, puoi gestire efficacemente il rischio e massimizzare 
                    il potenziale di ritorno sui tuoi investimenti.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Grazie al supporto delle normative vigenti e all'autorizzazione della Banca d'Italia</strong>, 
                    puoi avere la sicurezza di un investimento solido e regolamentato. Gli NPL rappresentano l'esclusiva 
                    opportunità immobiliare per trasformare il tuo futuro finanziario.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Saldo e Stralcio */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Scale className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">Saldo e Stralcio</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Abbiamo scelto di collaborare esclusivamente con il nostro partner, <strong>Jurelit</strong>, per offrire 
                    un'opportunità altamente vantaggiosa a tutte le parti coinvolte: debitori, creditori e acquirenti.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>L'operazione di stralcio si distingue per i suoi benefici unici:</strong>
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">🏠 Beneficio per il debitore:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Attraverso lo stralcio, il debitore può eliminare completamente il suo debito. Questo rappresenta 
                        un enorme sollievo finanziario e la possibilità di iniziare da zero, liberandosi da pesanti obblighi finanziari.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">💼 Beneficio per il creditore:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Lo stralcio permette al creditore di recuperare una parte dei suoi soldi in modo più rapido ed efficiente 
                        rispetto ai lunghi tempi d'attesa di una procedura legale tradizionale, ottenendo almeno una parte 
                        del proprio credito senza lunghe battaglie legali.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">💰 Beneficio per il compratore:</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        I potenziali acquirenti hanno la straordinaria opportunità di acquistare immobili a un prezzo 
                        notevolmente inferiore rispetto al valore di mercato, ottenendo un potenziale rendimento elevato 
                        sull'investimento e proprietà di qualità a un costo più accessibile.
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    <strong>La collaborazione con Jurelit</strong> ci permette di offrire una soluzione innovativa che soddisfa 
                    le esigenze di tutte le parti coinvolte, facilitando il processo di stralcio con una gestione efficiente 
                    e trasparente dell'operazione per raggiungere risultati soddisfacenti per tutti i partecipanti.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Asta */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Gavel className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">Asta</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Negli ultimi anni, abbiamo notato un <strong>aumento significativo delle richieste</strong> da parte dei nostri clienti 
                    di partecipare alle aste immobiliari.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>I motivi dietro a questa crescente tendenza sono molteplici e vantaggiosi:</strong>
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-[#071029]">Sicurezza:</strong>
                        <span className="text-gray-600 text-sm"> Le aste offrono un vantaggio in termini di sicurezza, in quanto tutti i documenti relativi all'immobile sono pubblici e consultabili.</span>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-[#071029]">Risparmio economico:</strong>
                        <span className="text-gray-600 text-sm"> Partecipare alle aste consente di acquistare beni immobiliari a prezzi al di sotto del valore di mercato.</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Tuttavia, comprendiamo che molti acquirenti possano sentirsi intimiditi nell'approcciarsi a questo tipo di acquisto 
                    a causa di informazioni errate, pertanto <strong>consigliamo sempre di affidarsi a un professionista specializzato</strong> 
                    per evitare ritardi o problemi.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-[#071029] mb-3">📋 Passaggi fondamentali per partecipare a un'asta:</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Lettura della perizia:</strong> Analizzare attentamente la perizia per comprendere caratteristiche e valore</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Avviso di vendita:</strong> Esaminare l'avviso per comprendere condizioni e requisiti specifici</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Visita all'immobile:</strong> Effettuare una visita per valutare le condizioni effettive</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Stato occupazionale:</strong> Verificare eventuali occupazioni o locazioni in corso</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Valutazione reale:</strong> Ottenere una stima accurata del valore di mercato da esperti</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Strategia d'acquisto:</strong> Sviluppare una strategia considerando limiti di prezzo e condizioni</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-[#a9f6db]">•</span>
                        <span><strong>Deposito dell'offerta:</strong> Presentare un'offerta competitiva e adeguata entro i termini e le modalità stabilite dall'asta</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Partecipare alle aste immobiliari può essere un'opportunità interessante per gli acquirenti, ma è fondamentale 
                    essere ben informati e seguire una strategia ben definita.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Il nostro team di professionisti è qui per guidarti</strong> attraverso l'intero processo e assicurarti 
                    un'esperienza di acquisto senza intoppi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Valorizzazione */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">Valorizzazione</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Il nostro servizio di valorizzazione immobiliare ti offre un <strong>supporto completo in ogni fase</strong> 
                    del processo di vendita della tua casa.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Comprendiamo che la maggior parte dei potenziali acquirenti cerca casa online, ed è proprio per questo motivo 
                    che mettiamo a disposizione i nostri servizi per aiutarti a <strong>vendere la tua proprietà in modo più rapido</strong> 
                    e ad un prezzo più vantaggioso.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-[#071029] mb-2">🏡 Home Staging Professionale</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Attraverso il nostro servizio di homestaging, valorizziamo gli spazi e gli arredi della tua casa, 
                      rendendola più attraente e invitante per i potenziali acquirenti. La valorizzazione immobiliare 
                      è un elemento chiave per aumentare il valore di mercato della tua casa.
                    </p>
                  </div>
                  
                  <div className="bg-[#a9f6db]/10 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-[#071029] mb-2">💰 Opportunità Unica: Rendita durante la Vendita</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">
                      Se la tua casa è attualmente libera, possiamo <strong>sfruttare il suo potenziale di rendita</strong> 
                      tramite affitti a breve termine durante il periodo di vendita.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Questo significa che mentre la tua casa è in vendita, avrai la possibilità di guadagnare grazie 
                      agli affitti temporanei. Tale opportunità può essere particolarmente attraente per gli investitori 
                      che cercano un immobile in grado di generare reddito fin da subito.
                    </p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-[#071029] mb-2">✨ Vantaggi del nostro servizio:</h4>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Valorizzazione immobiliare professionale</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Vendita più veloce della proprietà</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Prezzo di vendita più elevato</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 text-sm">Possibilità di guadagnare durante la vendita</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Contattaci per ulteriori informazioni</strong> e per scoprire come possiamo aiutarti a valorizzare 
                    la tua casa e ottenere il massimo dalla vendita.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Affitti Brevi */}
            <Card className="bg-white border-4 border-[#a9f6db] p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[#a9f6db] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Home className="w-10 h-10 text-[#071029]" />
                  </div>
                  <h3 className="text-2xl font-montserrat font-bold text-[#071029] mb-4">Affitti Brevi</h3>
                </div>
                <div className="text-left">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Gli affitti a breve termine offrono <strong>numerosi vantaggi</strong> che rendono questa opzione 
                    molto attraente per i proprietari immobiliari.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Ecco alcuni motivi per cui dovresti considerare gli affitti a breve termine:</strong>
                  </p>
                  
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">💰 Maggiori guadagni finanziari</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Gli affitti a breve termine spesso generano un reddito più elevato rispetto agli affitti a lungo termine. 
                        Grazie alla crescente popolarità delle piattaforme come Airbnb, puoi sfruttare la domanda di alloggi 
                        temporanei e ottenere tariffe più elevate, massimizzando il guadagno mensile durante la vendita.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">🔄 Flessibilità e controllo</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ti offrono maggiore flessibilità nel gestire la disponibilità della tua proprietà. Puoi decidere 
                        quando mettere a disposizione la casa e per quanto tempo, adattando gli affitti alla tua pianificazione 
                        ed evitando lunghi periodi di locazione che potrebbero interferire con la vendita.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">📈 Valorizzazione dell'immobile</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Contribuiscono a valorizzare la tua casa durante il processo di vendita. Quando gli affittuari 
                        visitano la casa arredata con cura, possono apprezzarne appieno il potenziale. Una casa ben 
                        presentata può attirare più potenziali acquirenti.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">🌐 Maggiore visibilità e marketing</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Mettendo la casa in affitto a breve termine, potrai promuoverla su diverse piattaforme di 
                        prenotazione online. Questo offre un'ampia visibilità e l'opportunità di raggiungere un 
                        vasto pubblico di potenziali acquirenti interessati alla proprietà.
                      </p>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-[#071029] mb-2">⚡ Utilizzo efficiente dell'immobile</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Durante il periodo di vendita, l'immobile non rimarrà vuoto ed inutilizzato. Gli affitti 
                        a breve termine ti permetteranno di sfruttare la casa e generare reddito, contribuendo 
                        a coprire le spese associate durante il processo di vendita.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-[#a9f6db]/10 p-4 rounded-lg mb-4">
                    <p className="text-gray-600 leading-relaxed mb-2">
                      <strong>Considerando questi vantaggi</strong>, gli affitti a breve termine si presentano come 
                      una scelta strategica per sfruttare al massimo il tuo immobile durante la vendita.
                    </p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Se desideri massimizzare il guadagno e la visibilità</strong> della tua casa, contattaci 
                    per scoprire come il nostro servizio di affitti a breve termine può aiutarti a raggiungere 
                    i tuoi obiettivi di vendita.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Search, FileText, Scale, Gavel, TrendingUp, Home, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import HeroSection from "@/components/layout/hero-section";

// Componente per il contenuto del servizio Ricerca
const RicercaContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Il Property Finder può aiutarti a trovare l'immobile che soddisfi le tue esigenze specifiche.
    </p>
    <p className="leading-relaxed">
      Grazie alla sua conoscenza del mercato immobiliare e alla sua esperienza nella ricerca di proprietà, 
      il Property Finder può identificare le opzioni che meglio si adattano alle tue esigenze di acquisto, 
      risparmiandoti tempo e sforzi nella ricerca.
    </p>
    <p className="leading-relaxed">
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
);

// Componente per il contenuto del servizio NPL
const NPLContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed font-semibold">
      Hai mai desiderato accedere a un'affare immobiliare unico nel suo genere?
    </p>
    <p className="leading-relaxed">
      Sei pronto a cogliere un'opportunità che potrebbe trasformare il tuo portafoglio di investimenti? 
      Allora gli NPL, o crediti non performanti, potrebbero essere la chiave per sbloccare il tuo potenziale finanziario.
    </p>
    <p className="leading-relaxed">
      Gli NPL rappresentano una via straordinaria per acquisire immobili a prezzi straordinariamente vantaggiosi. 
      Questi crediti bancari non performanti offrono l'opportunità di accedere a proprietà di valore 
      prima che finiscano sul mercato tradizionale.
    </p>
    <div className="bg-[#a9f6db]/10 p-6 rounded-lg">
      <p className="font-medium">
        Grazie al supporto delle normative vigenti e all'autorizzazione della Banca d'Italia, 
        puoi avere la sicurezza di un investimento solido e regolamentato.
      </p>
    </div>
  </div>
);

// Componente per il contenuto del servizio Saldo e Stralcio
const SaldoStralcioContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
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
);

// Componente per il contenuto del servizio Asta
const AstaContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Negli ultimi anni, abbiamo notato un <strong>aumento significativo delle richieste</strong> da parte dei nostri clienti 
      di partecipare alle aste immobiliari.
    </p>
    
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h4 className="text-xl font-semibold text-[#071029] mb-4 text-center">📋 Processo Aste</h4>
      <div className="grid grid-cols-1 gap-3">
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
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
        <h4 className="font-semibold text-[#071029] mb-2">🔒 Sicurezza</h4>
        <p className="text-gray-600 text-sm">
          Tutti i documenti sono pubblici e consultabili, garantendo massima trasparenza
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
        <h4 className="font-semibold text-[#071029] mb-2">💰 Risparmio</h4>
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
);

// Componente per il contenuto del servizio Valorizzazione
const ValorizzazioneContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Il nostro servizio di valorizzazione immobiliare ti offre un <strong>supporto completo in ogni fase</strong> 
      del processo di vendita della tua casa.
    </p>
    <p className="leading-relaxed">
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
);

// Componente per il contenuto del servizio Affitti Brevi
const AffittiBreviContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      L'<strong>affitto a breve termine</strong> sta rivoluzionando il settore immobiliare, offrendo nuove opportunità 
      di investimento per i proprietari di casa.
    </p>
    <p className="leading-relaxed">
      Se hai mai considerato di <strong>massimizzare il rendimento del tuo immobile</strong> attraverso Airbnb, Booking.com 
      e altre piattaforme, questa potrebbe essere l'opzione perfetta per te.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
        <h4 className="font-semibold text-[#071029] mb-2">📈 Alti Rendimenti</h4>
        <p className="text-gray-600 text-sm">
          Guadagni potenzialmente superiori rispetto agli affitti tradizionali
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#a9f6db]">
        <h4 className="font-semibold text-[#071029] mb-2">🛠️ Gestione Completa</h4>
        <p className="text-gray-600 text-sm">
          Ti occupiamo di tutto: dalla pulizia alla comunicazione con gli ospiti
        </p>
      </div>
    </div>
    
    <div className="bg-[#071029] p-6 rounded-lg text-white">
      <p className="leading-relaxed mb-4">
        Tuttavia, gestire un affitto a breve termine richiede tempo, dedizione e conoscenze specifiche del mercato.
      </p>
      <p className="text-[#a9f6db] font-medium">
        <strong>È qui che entriamo in gioco noi.</strong> Il nostro team specializzato gestisce ogni aspetto 
        della tua proprietà, permettendoti di goderti i guadagni senza stress.
      </p>
    </div>
  </div>
);

export default function Servizi() {
  const services = [
    {
      id: 'ricerca',
      title: 'Ricerca',
      icon: Search,
      content: RicercaContent,
      bgColor: 'bg-[#071029]',
      textColor: 'text-white',
      image: '/public-objects/ricerca-property-finder.jpg',
      imageAlt: 'Property Finder - Casa con giardino e viale d\'accesso',
      imagePlaceholder: '🏡'
    },
    {
      id: 'npl',
      title: 'NPL',
      icon: FileText,
      content: NPLContent,
      bgColor: 'bg-white',
      textColor: 'text-gray-600',
      image: '/public-objects/npl-opportunita.jpg',
      imageAlt: 'NPL - Opportunità di investimento immobiliare',
      imagePlaceholder: '📊'
    },
    {
      id: 'saldo-stralcio',
      title: 'Saldo e Stralcio',
      icon: Scale,
      content: SaldoStralcioContent,
      bgColor: 'bg-[#071029]',
      textColor: 'text-white',
      image: '/public-objects/saldo-stralcio-jurelit.jpg',
      imageAlt: 'Saldo e Stralcio - Partnership Jurelit',
      imagePlaceholder: '⚖️'
    },
    {
      id: 'asta',
      title: 'Asta',
      icon: Gavel,
      content: AstaContent,
      bgColor: 'bg-white',
      textColor: 'text-gray-600',
      image: '/public-objects/asta-immobiliare.jpg',
      imageAlt: 'Aste immobiliari - Tribunale e martelletto',
      imagePlaceholder: '🔨'
    },
    {
      id: 'valorizzazione',
      title: 'Valorizzazione',
      icon: TrendingUp,
      content: ValorizzazioneContent,
      bgColor: 'bg-[#071029]',
      textColor: 'text-white',
      image: '/public-objects/valorizzazione-home-staging.jpg',
      imageAlt: 'Valorizzazione - Home staging di un soggiorno moderno',
      imagePlaceholder: '📈'
    },
    {
      id: 'affitti-brevi',
      title: 'Affitti Brevi',
      icon: Home,
      content: AffittiBreviContent,
      bgColor: 'bg-white',
      textColor: 'text-gray-600',
      image: '/public-objects/affitti-brevi-airbnb.jpg',
      imageAlt: 'Affitti Brevi - Camera da letto accogliente per ospiti',
      imagePlaceholder: '🏨'
    }
  ];

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
          
          {/* Mobile/Tablet Accordion View */}
          <div className="block lg:hidden px-4 sm:px-6">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <AccordionItem 
                    key={service.id} 
                    value={service.id}
                    className="bg-white rounded-xl shadow-lg border-0 overflow-hidden"
                  >
                    <AccordionTrigger 
                      className="px-6 py-4 hover:no-underline"
                      data-testid={`accordion-trigger-${service.id}`}
                    >
                      <div className="flex items-center space-x-4 flex-1 text-left">
                        <div className="w-12 h-12 bg-[#a9f6db] rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-[#071029]" />
                        </div>
                        <h3 className="text-xl font-montserrat font-bold text-[#071029]">
                          {service.title}
                        </h3>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent 
                      className="px-6 pb-6 pt-2"
                      data-testid={`accordion-content-${service.id}`}
                    >
                      <div className="space-y-4">
                        {/* Immagine per mobile */}
                        <div className="aspect-video rounded-lg overflow-hidden">
                          <img 
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'bg-gray-100 aspect-video rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                              fallback.innerHTML = `<div class="text-center text-gray-500"><div class="text-4xl mb-2">${service.imagePlaceholder}</div><p class="text-sm font-medium">${service.title}</p></div>`;
                              target.parentNode?.appendChild(fallback);
                            }}
                          />
                        </div>
                        
                        {/* Contenuto */}
                        <div className="text-gray-600">
                          <service.content />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
          
          {/* Desktop Full Layout */}
          <div className="hidden lg:block space-y-0">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={service.id} className={`${service.bgColor} py-20`}>
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className={isEven ? "order-1" : "order-2 lg:order-1"}>
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-[#a9f6db] rounded-full flex items-center justify-center mr-6">
                            <IconComponent className="w-8 h-8 text-[#071029]" />
                          </div>
                          <h3 className={`text-4xl font-montserrat font-bold ${service.bgColor === 'bg-white' ? 'text-[#071029]' : 'text-white'}`}>
                            {service.title}
                          </h3>
                        </div>
                        <div className={service.textColor}>
                          <service.content />
                        </div>
                      </div>
                      <div className={isEven ? "order-2" : "order-1 lg:order-2"}>
                        <div className="aspect-video rounded-xl overflow-hidden">
                          <img 
                            src={service.image}
                            alt={service.imageAlt}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const fallback = document.createElement('div');
                              fallback.className = 'bg-gray-100 aspect-video rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300 w-full h-full';
                              fallback.innerHTML = `<div class="text-center text-gray-500"><div class="text-6xl mb-4">${service.imagePlaceholder}</div><p class="text-lg font-semibold">Carica "${service.image.split('/').pop()}"</p><p class="text-sm">nella directory public dell'Object Storage</p></div>`;
                              target.parentNode?.appendChild(fallback);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
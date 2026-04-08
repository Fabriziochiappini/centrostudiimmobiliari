import { Search, FileText, Scale, Gavel, TrendingUp, Home, ChevronDown, ArrowRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import HeroSection from "@/components/layout/hero-section";
import DownloadGuideSection from "@/components/layout/download-guide-section";
import SEOHead from "@/components/SEOHead";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

// Componente per il contenuto del servizio Ricerca
const RicercaContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Il Property Finder è il miglior alleato per trovare l'immobile che soddisfi le tue esigenze specifiche.
    </p>
    <p className="leading-relaxed">
      Grazie alla sua conoscenza del mercato immobiliare e nella ricerca, il Property Finder può identificare le opzioni che meglio si adattano alle tue esigenze di acquisto, risparmiandoti tempo e sforzi.
    </p>
    <p className="leading-relaxed">
      Inoltre, il Property Finder può assisterti nella trattativa con l'agenzia immobiliare o il venditore privato, cercando di ottenere il miglior prezzo possibile e garantendoti una transazione sicura e trasparente.
    </p>
  </div>
);

// Componente per il contenuto del servizio NPL
const NPLContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Gli NPL rappresentano un'opportunità straordinaria per acquisire immobili a prezzi vantaggiosi. Questi crediti bancari offrono l'opportunità di accedere a proprietà di valore prima che finiscano all'asta.
    </p>
    <p className="leading-relaxed">
      Grazie al nostro supporto, puoi accedere ai migliori investimenti in totale sicurezza.
    </p>
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
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
          🏠 <span className="ml-2">Debitore</span>
        </h4>
        <p className="text-black leading-relaxed">
          Eliminazione completa del debito con sollievo finanziario immediato
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
          💼 <span className="ml-2">Creditore</span>
        </h4>
        <p className="text-black leading-relaxed">
          Recupero rapido ed efficiente senza lunghe battaglie legali
        </p>
      </div>
      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-3 flex items-center">
          💰 <span className="ml-2">Acquirente</span>
        </h4>
        <p className="text-black leading-relaxed">
          Acquisto di immobili a prezzi notevolmente sotto il valore di mercato
        </p>
      </div>
    </div>
    
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#bbdbca' }}>
      <p className="text-black font-medium">
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
      <h4 className="text-xl font-semibold text-[#071029] mb-4 text-center">Aste</h4>
      <div className="grid grid-cols-1 gap-3">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
          <span className="text-sm font-medium text-gray-700">Lettura perizia e analisi documenti</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
          <span className="text-sm font-medium text-gray-700">Visita immobile e valutazione</span>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <div className="w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
          <span className="text-sm font-medium text-gray-700">Strategia d'acquisto e offerta</span>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-2">🔒 Sicurezza</h4>
        <p className="text-gray-600 text-sm">
          Tutti i documenti sono pubblici e consultabili, garantendo massima trasparenza
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-2">💰 Risparmio</h4>
        <p className="text-gray-600 text-sm">
          Acquisto di immobili a prezzi sotto il valore di mercato
        </p>
      </div>
    </div>
    
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#bbdbca' }}>
      <p className="leading-relaxed mb-4 text-black">
        Tuttavia, comprendiamo che molti possano sentirsi intimiditi da questa modalità di acquisto. Per questo <strong className="text-black">consigliamo sempre di affidarsi a un professionista specializzato</strong>.
      </p>
      <p className="text-black font-medium">
        Il nostro team di professionisti è qui per guidarti attraverso l'intero processo e assicurarti 
        un'esperienza di acquisto senza sorprese.
      </p>
    </div>
  </div>
);

// Componente per il contenuto del servizio Valorizzazione
const ValorizzazioneContent = () => (
  <div className="space-y-6">
    <p className="text-lg leading-relaxed">
      Il nostro servizio di valorizzazione immobiliare ti offre un <strong>supporto completo in ogni fase del</strong> processo di vendita della tua casa.
    </p>
    <p className="leading-relaxed">
      Comprendiamo che la maggior parte dei potenziali acquirenti cerca casa online, ed è proprio per questo motivo 
      che mettiamo a disposizione i nostri servizi per aiutarti a <strong>vendere la tua proprietà in modo più rapido</strong> e ad un prezzo più vantaggioso.
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
    
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#bbdbca' }}>
      <p className="text-black font-medium">
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
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-2">💰 Massimizzazione della Vendita</h4>
        <p className="text-gray-600 text-sm">
          Valorizziamo il potenziale di guadagno generando un profitto tramite affitti a breve termine durante il periodo di vendita
        </p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-[#2ca781]">
        <h4 className="font-semibold text-[#071029] mb-2">🛠️ Gestione Completa</h4>
        <p className="text-gray-600 text-sm">
          Ci occupiamo di tutto: dalla pulizia alla comunicazione con gli ospiti
        </p>
      </div>
    </div>
    
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#bbdbca' }}>
      <p className="text-black font-medium">
        <strong>🔒 Massima Sicurezza:</strong> Il cliente paga prima di entrare in casa, <strong>rischio insolvenza pari allo zero</strong>
      </p>
    </div>
    
    <div className="p-6 rounded-lg" style={{ backgroundColor: '#bbdbca' }}>
      <p className="leading-relaxed mb-4 text-black">
        Tuttavia, gestire un affitto a breve termine richiede tempo, dedizione e conoscenze specifiche del mercato.
      </p>
      <p className="text-black font-medium">
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
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/coppia-di-tiro-medio-che-parla-con-l-agente-immobiliare_1757939645930.jpg',
      imageAlt: 'Property Finder - Casa con giardino e viale d\'accesso',
      imagePlaceholder: '🏡'
    },
    {
      id: 'npl',
      title: 'NPL',
      icon: FileText,
      content: NPLContent,
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/uomo-che-fa-una-presentazione-aziendale-usando-una-penna-digitale-futuristica_1757939645928.jpg',
      imageAlt: 'NPL - Opportunità di investimento immobiliare',
      imagePlaceholder: '📊'
    },
    {
      id: 'saldo-stralcio',
      title: 'Saldo e Stralcio',
      icon: Scale,
      content: SaldoStralcioContent,
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/vista-frontale-della-pianta-che-cresce-dalle-monete-d-oro_1757939645929.jpg',
      imageAlt: 'Saldo e Stralcio - Partnership Jurelit',
      imagePlaceholder: '⚖️'
    },
    {
      id: 'asta',
      title: 'Asta',
      icon: Gavel,
      content: AstaContent,
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/paesaggio-analogico-della-citta-con-edifici_1757939645927.jpg',
      imageAlt: 'Aste immobiliari - Tribunale e martelletto',
      imagePlaceholder: '🔨'
    },
    {
      id: 'valorizzazione',
      title: 'Valorizzazione',
      icon: TrendingUp,
      content: ValorizzazioneContent,
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/vista-edificio-per-uffici-dall-alto-al-tramonto_1757939645926.jpg',
      imageAlt: 'Valorizzazione - Home staging di un soggiorno moderno',
      imagePlaceholder: '📈'
    },
    {
      id: 'affitti-brevi',
      title: 'Affitti Brevi',
      icon: Home,
      content: AffittiBreviContent,
      bgColor: 'bg-white',
      textColor: 'text-black',
      image: '/attached_assets/architettura-moderna-dell-appartamento_1757939645923.jpg',
      imageAlt: 'Affitti Brevi - Camera da letto accogliente per ospiti',
      imagePlaceholder: '🏨'
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Servizi Immobiliari | Centro Studi Immobiliari - Property Finder, NPL, Aste"
        description="Scopri tutti i servizi immobiliari del Centro Studi Immobiliari: Property Finder, NPL, Saldo e Stralcio, Aste Immobiliari, Home Staging e Affitti Brevi. Consulenza professionale per investimenti immobiliari."
        keywords="servizi immobiliari, property finder, NPL immobiliari, saldo e stralcio, aste immobiliari, home staging, affitti brevi, valorizzazione immobiliare"
        ogImage="/attached_assets/Progetto senza titolo (94)_1756738184287.jpg"
      />
      {/* Hero Section */}
      <HeroSection
        title="I Nostri Servizi"
        subtitle="Soluzioni complete e personalizzate per ogni esigenza immobiliare, dalla consulenza strategica alla gestione del patrimonio."
        backgroundImage="/attached_assets/vista-edificio-per-uffici-dall-alto-al-tramonto_1757939645926.jpg"
      />

      {/* Services Full Width */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
        <div className="relative w-full">
          <ScrollReveal>
            <div className="text-center mb-24 px-4 sm:px-6 lg:px-8">
              {/* Top separator line */}
              <div className="relative mb-16">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <div className="bg-white px-8">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#2ca781] to-gray-400 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
                ✦ SERVIZI SPECIALIZZATI ✦
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-black mb-8 leading-tight">
                Servizi <span style={{ color: '#2ca781' }}>Premium Esclusivi</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-5xl mx-auto leading-relaxed font-light">
                <strong className="font-bold text-black">6 servizi specializzati</strong> che hanno generato un <span className="text-[#2ca781] font-bold">ROI medio del 25%</span> per i nostri clienti. 
                Expertise comprovata in <strong className="font-bold text-black">500+ investimenti</strong>.
              </p>
            </div>
          </ScrollReveal>
          
          {/* Mobile/Tablet Accordion View */}
          <div className="block lg:hidden px-4 sm:px-6">
            <StaggerContainer staggerDelay={0.1}>
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
                        <div className="w-12 h-12 bg-[#2ca781] rounded-full flex items-center justify-center">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold text-black">
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
                        <div className="text-black">
                          <service.content />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
            </StaggerContainer>
          </div>
          
          {/* Desktop Full Layout */}
          <div className="hidden lg:block space-y-0">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div key={service.id}>
                  {index > 0 && (
                    <div className="bg-white py-8">
                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                          </div>
                          <div className="relative flex justify-center">
                            <div className="bg-white px-6">
                              <div className="w-12 h-0.5 bg-gradient-to-r from-[#2ca781] to-gray-400"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className={`${service.bgColor} py-20`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                      <div className={isEven ? "order-1" : "order-2 lg:order-1"}>
                        <div className="flex items-center mb-8">
                          <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-6">
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-black">
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
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-[#2ca781] to-[#1a513b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent to-white"></div>
        <div className="relative max-w-6xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* Top separator line */}
          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-white/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-[#2ca781] px-8">
                <div className="w-16 h-1 bg-gradient-to-r from-white to-yellow-300 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-white font-bold text-sm uppercase tracking-widest mb-8">
            🚀 INIZIA ORA IL TUO INVESTIMENTO
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white mb-8 leading-tight">
            Accedi ai <span className="text-yellow-300">Deals Esclusivi</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-5xl mx-auto">
            <strong className="font-bold text-white">Solo 50 consulenze exclusive all'anno.</strong> Accedi al network di investitori premium 
            che ha realizzato un <span className="text-yellow-300 font-bold">ROI medio del 25%</span> negli ultimi 24 mesi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contatti">
              <Button 
                size="lg" 
                className="bg-[#2ca781] text-white hover:bg-[#2ca781]/90 font-semibold px-8 py-3 text-lg"
                data-testid="button-contact-cta"
              >
                Contattaci Ora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Guide Section */}
      <DownloadGuideSection />

    </div>
  );
}

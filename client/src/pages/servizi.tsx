import HeroSection from "@/components/layout/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, DollarSign, Building, TrendingUp } from "lucide-react";

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
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Consulenza Strategica */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">Consulenza Strategica</h3>
                    <p className="text-muted-foreground mb-6">
                      Analisi approfondite e strategie personalizzate per massimizzare il valore dei tuoi investimenti immobiliari.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Analisi di mercato dettagliate
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Pianificazione degli investimenti
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Ottimizzazione del portfolio
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Valutazione dei rischi
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Valutazioni Immobiliari */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">Valutazioni Immobiliari</h3>
                    <p className="text-muted-foreground mb-6">
                      Perizie accurate e certificate per determinare il valore reale dei tuoi immobili secondo standard internazionali.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Perizie certificate
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Valutazioni per mutui
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Due diligence tecnica
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Analisi comparative
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gestione Patrimonio */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">Gestione Patrimonio</h3>
                    <p className="text-muted-foreground mb-6">
                      Servizi completi per la gestione e l'ottimizzazione del tuo patrimonio immobiliare esistente.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Property management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Ottimizzazione rendimenti
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Manutenzione programmata
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Gestione contratti locazione
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Investimenti e Sviluppo */}
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-foreground mb-4">Investimenti e Sviluppo</h3>
                    <p className="text-muted-foreground mb-6">
                      Identificazione di opportunità di investimento e supporto nello sviluppo di progetti immobiliari.
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Ricerca opportunità
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Analisi fattibilità
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Project management
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        Supporto finanziario
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Il Nostro Processo
            </h2>
            <p className="text-xl text-muted-foreground">
              Un approccio strutturato per garantire risultati eccellenti
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Analisi Iniziale</h3>
              <p className="text-muted-foreground">Valutazione delle tue esigenze e obiettivi</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Strategia</h3>
              <p className="text-muted-foreground">Sviluppo di un piano personalizzato</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Implementazione</h3>
              <p className="text-muted-foreground">Esecuzione delle attività previste</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-foreground mb-2">Monitoraggio</h3>
              <p className="text-muted-foreground">Controllo e ottimizzazione continua</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

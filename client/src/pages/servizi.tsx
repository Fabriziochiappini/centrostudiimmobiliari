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
                    Gestione specializzata di crediti deteriorati e Non Performing Loans nel settore immobiliare.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Contenuto dettagliato in arrivo...
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
                    Negoziazione e gestione di accordi di saldo e stralcio per ottimizzare la risoluzione di posizioni debitorie.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Contenuto dettagliato in arrivo...
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
                    Supporto completo per partecipazione ad aste immobiliari e acquisizione di immobili a prezzi vantaggiosi.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Contenuto dettagliato in arrivo...
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
                    Strategie per aumentare il valore degli immobili attraverso ristrutturazioni mirate e ottimizzazioni.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Contenuto dettagliato in arrivo...
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
                    Gestione completa di proprietà per affitti brevi e massimizzazione dei rendimenti turistici.
                  </p>
                  <p className="text-gray-600 text-sm italic">
                    Contenuto dettagliato in arrivo...
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

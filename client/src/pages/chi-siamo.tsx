import HeroSection from "@/components/layout/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, BookOpen, Heart } from "lucide-react";

export default function ChiSiamo() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Chi Siamo"
        subtitle="Un team di professionisti esperti nel settore immobiliare, dedicati a offrire soluzioni innovative e servizi di qualità superiore."
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Company Story */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
                La Nostra Storia
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                EXPONENT nasce dalla visione di creare un punto di riferimento nel settore della consulenza immobiliare, 
                combinando esperienza consolidata con approcci innovativi e tecnologie all'avanguardia.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dal 2009, abbiamo accompagnato centinaia di clienti nella realizzazione dei loro progetti immobiliari, 
                costruendo relazioni durature basate sulla fiducia e sui risultati concreti.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                La nostra missione è trasformare ogni investimento immobiliare in un successo, offrendo consulenza 
                strategica personalizzata e supporto completo in ogni fase del processo.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="EXPONENT office building" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              I Nostri Valori
            </h2>
            <p className="text-xl text-muted-foreground">
              Principi che guidano ogni nostra decisione e azione
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Integrità</h3>
              <p className="text-muted-foreground">Trasparenza e onestà in ogni rapporto professionale</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Innovazione</h3>
              <p className="text-muted-foreground">Soluzioni creative e tecnologie avanzate</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Competenza</h3>
              <p className="text-muted-foreground">Esperienza e formazione continua del team</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Dedizione</h3>
              <p className="text-muted-foreground">Impegno totale per il successo dei nostri clienti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Il Nostro Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Professionisti qualificati con esperienza pluriennale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Marco Rossi - CEO" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">Marco Rossi</h3>
                <p className="text-primary font-medium mb-3">CEO & Fondatore</p>
                <p className="text-muted-foreground">
                  15 anni di esperienza nel settore immobiliare, specializzato in investimenti commerciali e sviluppo urbano.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c6a96b71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Elena Bianchi - COO" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">Elena Bianchi</h3>
                <p className="text-primary font-medium mb-3">COO & Head of Operations</p>
                <p className="text-muted-foreground">
                  Esperta in gestione operativa e processi di due diligence, con background in finanza aziendale.
                </p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" 
                alt="Luca Verde - CTO" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-2">Luca Verde</h3>
                <p className="text-primary font-medium mb-3">CTO & Innovation Director</p>
                <p className="text-muted-foreground">
                  Responsabile dell'innovazione tecnologica e delle soluzioni digitali per l'analisi del mercato immobiliare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

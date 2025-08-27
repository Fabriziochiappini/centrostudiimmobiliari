import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { BarChart, DollarSign, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/pexels-sevenstormphotography-443383_1756304452891.jpg";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="EXPONENT"
        subtitle="New Way Of Consulting"
        backgroundImage={heroImage}
        className="min-h-screen flex items-center"
      />

      {/* Value Strategy Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
              Massimizza i tuoi investimenti immobiliari con la nostra Value Strategy
            </h2>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Perché Scegliere EXPONENT
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La nostra esperienza e professionalità al servizio dei tuoi investimenti immobiliari
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  Analisi di Mercato
                </h3>
                <p className="text-muted-foreground">
                  Studi approfonditi del mercato immobiliare per identificare le migliori opportunità di investimento.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  Valutazioni Accurate
                </h3>
                <p className="text-muted-foreground">
                  Perizie e valutazioni immobiliari professionali basate su metodologie certificate e aggiornate.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-200">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-4">
                  Consulenza Personalizzata
                </h3>
                <p className="text-muted-foreground">
                  Servizi su misura per ogni cliente, dalla consulenza strategica alla gestione completa del patrimonio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2" data-testid="stat-clienti">500+</div>
              <div className="text-lg opacity-90">Clienti Soddisfatti</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2" data-testid="stat-valore">€2.5M</div>
              <div className="text-lg opacity-90">Valore Transato</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2" data-testid="stat-esperienza">15+</div>
              <div className="text-lg opacity-90">anni di Esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-montserrat font-bold mb-2" data-testid="stat-successo">98%</div>
              <div className="text-lg opacity-90">Tasso di Successo</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-6">
            Pronto a Investire nel Tuo Futuro?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contattaci oggi per una consulenza gratuita e scopri come possiamo aiutarti a raggiungere i tuoi obiettivi immobiliari.
          </p>
          <Link href="/contatti">
            <Button 
              size="lg"
              className="font-semibold py-4 px-8 transform hover:scale-105 transition-all duration-200"
              data-testid="button-consulenza-gratuita"
            >
              Richiedi Consulenza Gratuita
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

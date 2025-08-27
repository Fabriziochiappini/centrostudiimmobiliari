import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { Search, FileText, Handshake, Gavel, TrendingUp, Home as HomeIcon, ArrowRight } from "lucide-react";
import heroImage from "@assets/pexels-sevenstormphotography-443383_1756304452891.jpg";
import servicesImage from "@assets/pexels-frankfurtpictures-830891_1756305978315.jpg";

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
        <div className="w-full">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
              Massimizza i tuoi investimenti immobiliari con la nostra Value Strategy
            </h2>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${servicesImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
            I Nostri Servizi
          </h2>
        </div>
        
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 grid-rows-2">
          {/* Ricerca */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <Search className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Ricerca</h3>
              <p className="text-white/80">Affidati ai nostri Property Finder</p>
            </div>
          </div>

          {/* NPL */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <FileText className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">NPL</h3>
              <p className="text-white/80">Accedi a proprietà di valore prima che finiscano sul mercato tradizionale.</p>
            </div>
          </div>

          {/* Saldo e Stralcio */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <Handshake className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Saldo e Stralcio</h3>
              <p className="text-white/80">Una soluzione win-win per trasformare il debito in valore.</p>
            </div>
          </div>

          {/* Asta */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <Gavel className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Asta</h3>
              <p className="text-white/80">Competenza e strategia per trasformare le aste in occasioni concrete.</p>
            </div>
          </div>

          {/* Valorizzazione */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Valorizzazione</h3>
              <p className="text-white/80">Più attrattiva per gli acquirenti, più vantaggi per te.</p>
            </div>
          </div>

          {/* Affitti Brevi */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <HomeIcon className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Affitti Brevi</h3>
              <p className="text-white/80">Una scelta intelligente per investitori che puntano a valore e liquidità.</p>
            </div>
          </div>
        </div>
        
        {/* Services CTA */}
        <div className="relative z-10 text-center mt-8">
          <Link href="/servizi">
            <span className="inline-flex items-center text-sm text-white hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
              Scopri di più
              <ArrowRight className="ml-1 w-3 h-3" />
            </span>
          </Link>
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

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { Search, FileText, Handshake, Gavel, TrendingUp, Home as HomeIcon, ArrowRight, ShoppingCart, TrendingDown, TrendingUp as TrendingUpIcon, Repeat } from "lucide-react";
import heroImage from "@assets/pexels-sevenstormphotography-443383_1756304452891.jpg";
import servicesImage from "@assets/pexels-frankfurtpictures-830891_1756305978315.jpg";
import heroVideo from "@assets/854325-hd_1280_720_25fps_1756306774660.mp4";
import strategyVideo from "@assets/4514359-uhd_3840_2160_24fps_1756307297823.mp4";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="EXPONENT"
        subtitle="New Way Of Consulting"
        backgroundVideo={heroVideo}
        className="min-h-screen flex items-center"
      />

      {/* Value Strategy Intro Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
              Massimizza i tuoi investimenti con la nostra Value Strategy
            </h2>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        className="min-h-screen flex flex-col justify-center relative bg-cover bg-center bg-no-repeat"
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
              <p className="text-white/80 mb-4">Affidati ai nostri Property Finder</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* NPL */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <FileText className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">NPL</h3>
              <p className="text-white/80 mb-4">Accedi a proprietà di valore prima che finiscano sul mercato tradizionale.</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Saldo e Stralcio */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <Handshake className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Saldo e Stralcio</h3>
              <p className="text-white/80 mb-4">Una soluzione win-win per trasformare il debito in valore.</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Asta */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <Gavel className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Asta</h3>
              <p className="text-white/80 mb-4">Competenza e strategia per trasformare le aste in occasioni concrete.</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Valorizzazione */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <TrendingUp className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Valorizzazione</h3>
              <p className="text-white/80 mb-4">Più attrattiva per gli acquirenti, più vantaggi per te.</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>

          {/* Affitti Brevi */}
          <div className="group relative overflow-hidden transition-all duration-300 hover:scale-105 hover:z-20">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: '#a9f6db', padding: '2px' }}></div>
            <div className="relative bg-[#071029] text-white p-8 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
              <HomeIcon className="w-12 h-12 mb-4" style={{ color: '#a9f6db' }} />
              <h3 className="text-xl font-montserrat font-semibold mb-4">Affitti Brevi</h3>
              <p className="text-white/80 mb-4">Una scelta intelligente per investitori che puntano a valore e liquidità.</p>
              <Link href="/servizi">
                <span className="inline-flex items-center text-xs text-white/60 hover:text-[#a9f6db] transition-colors duration-200 cursor-pointer">
                  Scopri di più
                  <ArrowRight className="ml-1 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Strategy Title Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white">
              La Nostra Value Strategy in 4 passaggi
            </h2>
          </div>
        </div>
      </section>

      {/* Value Strategy Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={strategyVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group bg-primary border-4 border-[#a9f6db] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="w-8 h-8 text-[#071029]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-[#071029] font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-white mb-3">
                Acquisto Strategico
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Acquistare un immobile ad un prezzo inferiore al valore di mercato
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group bg-primary border-4 border-[#a9f6db] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HomeIcon className="w-8 h-8 text-[#071029]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-[#071029] font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-white mb-3">
                Massimizzazione Reddito
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Massimizzare la messa a reddito con il servizio affitti brevi
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group bg-primary border-4 border-[#a9f6db] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUpIcon className="w-8 h-8 text-[#071029]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-[#071029] font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-white mb-3">
                Rivendita Valorizzata
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Rivendere l'immobile ad un prezzo più alto dopo la valorizzazione
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group bg-primary border-4 border-[#a9f6db] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Repeat className="w-8 h-8 text-[#071029]" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#a9f6db] rounded-full flex items-center justify-center text-[#071029] font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-white mb-3">
                Reinvestimento
              </h3>
              <p className="text-white text-sm leading-relaxed">
                Acquistare un nuovo immobile con un budget più alto
              </p>
            </div>
          </div>
          
          {/* Approfondisci Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-primary border-2 border-white text-white hover:bg-primary/90 font-semibold py-4 px-10 text-lg"
              data-testid="button-approfondisci"
            >
              Approfondisci
            </Button>
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
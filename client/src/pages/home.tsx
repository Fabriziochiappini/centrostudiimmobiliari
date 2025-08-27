import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { Search, FileText, Handshake, Gavel, TrendingUp, Home as HomeIcon, ArrowRight, ShoppingCart, TrendingDown, TrendingUp as TrendingUpIcon, Repeat } from "lucide-react";
import heroImage from "@assets/pexels-sevenstormphotography-443383_1756304452891.jpg";
import servicesImage from "@assets/pexels-frankfurtpictures-830891_1756305978315.jpg";
import heroVideo from "@assets/854325-hd_1280_720_25fps_1756306774660.mp4";
import strategyVideo from "@assets/4514359-uhd_3840_2160_24fps_1756307297823.mp4";
import flipCardBackground from "@assets/pexels-sevenstormphotography-443378_1756309842710.jpg";
import businessCardBackground from "@assets/pexels-goumbik-590045_1756309994763.jpg";
import academyCardBackground from "@assets/pexels-singkham-178541-1108572_1756310104781.jpg";

// FlipCard Component
function FlipCard({ title, description, backgroundImage }: { title: string; description: string; backgroundImage?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const bgImage = backgroundImage || flipCardBackground;

  return (
    <div className="relative h-64 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        data-testid={`flip-card-${title.toLowerCase()}`}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 w-full h-full backface-hidden border-2 border-[#a9f6db] rounded-lg flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
              {title}
            </h3>
            <p className="text-white/80 text-sm">
              Clicca per saperne di più
            </p>
          </div>
        </div>
        
        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-[#a9f6db] rounded-lg flex items-center justify-center p-6">
          <p className="text-[#071029] text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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
            <div className="relative bg-[#071029] text-white py-16 px-12 h-full flex flex-col justify-center items-center text-center m-0.5 group-hover:m-0 transition-all duration-300">
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

      {/* EXPONENT World Section */}
      <section className="py-20 bg-primary">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white text-center mb-12">
            Entra nel mondo EXPONENT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* BUSINESS Card */}
            <FlipCard
              title="BUSINESS"
              description="Come azienda, vogliamo ottimizzare ogni processo, ridurre gli sprechi e massimizzare i profitti."
              backgroundImage={businessCardBackground}
            />
            
            {/* ACADEMY Card */}
            <FlipCard
              title="ACADEMY"
              description="Sono un consulente o un'azienda e voglio iscrivermi a un corso professionale di vendita per crescere personalmente e far crescere il mio team."
              backgroundImage={academyCardBackground}
            />
            
            {/* INVESTOR Card */}
            <FlipCard
              title="INVESTOR"
              description="Voglio trasformare ogni operazione immobiliare in un'opportunità di successo."
            />
          </div>
          
          {/* Diventa Partner Button */}
          <div className="text-center mt-12">
            <Link href="/partner">
              <Button 
                size="lg"
                className="bg-[#a9f6db] border-2 border-[#a9f6db] text-[#071029] hover:bg-[#a9f6db]/90 font-semibold py-4 px-10 text-lg"
                data-testid="button-diventa-partner"
              >
                Diventa Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import HeroSection from "@/components/layout/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, HomeIcon, TrendingUp, Repeat, ArrowRight, MapPin, Calendar, Euro, BarChart3, Clock, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DownloadGuideSection from "@/components/layout/download-guide-section";
import chiSiamoHeroImage from "@assets/pexels-apasaric-618079_1756737892045.jpg";
import SEOHead from "@/components/SEOHead";
import ScrollReveal, { StaggerContainer, StaggerItem } from "@/components/animations/ScrollReveal";

export default function ChiSiamo() {
  return (
    <div className="animate-fade-in">
      <SEOHead 
        title="Chi Siamo | Centro Studi Immobiliari - Team di Esperti nel Real Estate"
        description="Conosci il team di professionisti del Centro Studi Immobiliari. Esperti in consulenza immobiliare, investimenti e Value Strategy per massimizzare i tuoi rendimenti immobiliari."
        keywords="centro studi immobiliari team, consulenti immobiliari, value strategy, esperti real estate, professionisti immobiliari"
        ogImage="/attached_assets/Progetto senza titolo (94)_1756738184287.jpg"
      />
      {/* Hero Section */}
      <HeroSection
        title="Chi Siamo"
        subtitle="Un team di professionisti esperti nel settore immobiliare, dedicati a offrire soluzioni innovative e servizi di qualità superiore."
        backgroundImage={chiSiamoHeroImage}
      />

      {/* Statistics Section */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-6">
                📊 I NOSTRI NUMERI
              </div>
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-black mb-4 leading-tight">
                Risultati <span style={{ color: '#2ca781' }}>Concreti</span>
              </h2>
            </div>
          </ScrollReveal>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <div className="text-center p-6 bg-gradient-to-br from-[#2ca781]/5 to-transparent rounded-xl">
                <div className="text-5xl font-bold mb-2" style={{ color: '#2ca781' }}>+200</div>
                <p className="text-gray-700 font-semibold text-lg">Investitori 2024</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6 bg-gradient-to-br from-[#2ca781]/5 to-transparent rounded-xl">
                <div className="text-5xl font-bold mb-2" style={{ color: '#2ca781' }}>+500</div>
                <p className="text-gray-700 font-semibold text-lg">Investitori in Gestione</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6 bg-gradient-to-br from-[#2ca781]/5 to-transparent rounded-xl">
                <div className="text-5xl font-bold mb-2" style={{ color: '#2ca781' }}>8</div>
                <p className="text-gray-700 font-semibold text-lg">Mercati Italiani</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="text-center p-6 bg-gradient-to-br from-[#2ca781]/5 to-transparent rounded-xl">
                <div className="text-5xl font-bold mb-2" style={{ color: '#2ca781' }}>15+</div>
                <p className="text-gray-700 font-semibold text-lg">Strategie di Acquisto</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Value Strategy Introduction */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
        <ScrollReveal>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              ✦ METODO PROPRIETARIO ✦
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-black mb-8 leading-tight">
              La Nostra <span style={{ color: '#2ca781' }}>Value Strategy</span>
            </h2>
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 leading-relaxed font-light max-w-5xl mx-auto">
              Un approccio <strong className="font-bold text-black">intelligente e proprietario</strong> che ti permette di massimizzare i tuoi investimenti immobiliari.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Questa strategia si basa su quattro passaggi fondamentali che ti aiuteranno a ottenere 
              il massimo valore dai tuoi acquisti e vendite immobiliari.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 4 Steps Strategy */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top separator line */}
          <div className="relative mb-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-8">
                <div className="w-16 h-1 bg-gradient-to-r from-[#2ca781] to-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-6 leading-tight">
                I Quattro Passaggi <span style={{ color: '#2ca781' }}>Fondamentali</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
                Il sistema comprovato per trasformare ogni investimento immobiliare in un successo garantito
              </p>
            </div>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {/* Step 1 */}
            <StaggerItem>
              <Card className="bg-white border-4 border-[#2ca781] p-10 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingDown className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-black mb-4">
                  Acquisto Strategico
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Acquistare un immobile ad un prezzo inferiore rispetto al suo valore di mercato attraverso 
                  saldo e stralcio, aste o ricerca di proprietà in aree in sviluppo.
                </p>
              </Card>
            </StaggerItem>

            {/* Step 2 */}
            <StaggerItem>
              <Card className="bg-white border-4 border-[#2ca781] p-10 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <HomeIcon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-black mb-4">
                  Massimizzazione Reddito
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Massimizzare la messa a reddito attraverso il servizio di affitti brevi, ottenendo 
                  un reddito stabile e superiore rispetto agli affitti tradizionali.
                </p>
              </Card>
            </StaggerItem>

            {/* Step 3 */}
            <StaggerItem>
              <Card className="bg-white border-4 border-[#2ca781] p-10 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-black mb-4">
                  Rivendita Valorizzata
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Rivendere l'immobile ad un prezzo più alto utilizzando strategie di timing 
                  e valutazione del mercato per realizzare un profitto significativo.
                </p>
              </Card>
            </StaggerItem>

            {/* Step 4 */}
            <StaggerItem>
              <Card className="bg-white border-4 border-[#2ca781] p-10 text-center group hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Repeat className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-black mb-4">
                  Reinvestimento
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Utilizzare il profitto ottenuto per acquistare un immobile con un budget più alto, 
                  accedendo a proprietà di maggior valore e potenziale.
                </p>
              </Card>
            </StaggerItem>
          </StaggerContainer>
          {/* Bottom separator line */}
          <div className="relative mt-20">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-8">
                <div className="w-16 h-1 bg-gradient-to-r from-[#2ca781] to-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-tr from-[#2ca781] to-transparent"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              💡 METODOLOGIA AVANZATA
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-8 leading-tight">
              Come Funziona nel <span style={{ color: '#2ca781' }}>Dettaglio</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed">
              Scopri passo dopo passo come la nostra <strong className="font-bold text-black">Value Strategy proprietaria</strong> trasforma i tuoi investimenti immobiliari in operazioni di successo garantito
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Step 1 Detail */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#2ca781] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-black">
                  Acquisto Strategico sotto Valore
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Il primo passo consiste nell'acquistare un immobile ad un prezzo inferiore rispetto al suo valore di mercato. 
                Questo può essere ottenuto attraverso varie strategie, tramite procedure di saldo e stralcio, tramite immobili 
                presenti nel portafoglio aziendale, aste o la ricerca di proprietà in aree in fase di sviluppo o che richiedono 
                lavori di ristrutturazione. L'obiettivo è trovare opportunità di acquisto che offrano un potenziale di 
                apprezzamento del valore nel tempo.
              </p>
            </div>

            {/* Step 2 Detail */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#2ca781] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-black">
                  Massimizzazione del Reddito
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Una volta acquisita la proprietà, il secondo passo consiste nel massimizzare la messa a reddito attraverso 
                il servizio di affitti brevi. Gli affitti brevi offrono la possibilità di ottenere un reddito stabile e 
                spesso superiore rispetto agli affitti tradizionali a lungo termine. Sfruttando la domanda di alloggi 
                temporanei in destinazioni turistiche o in città con una forte presenza studentesca, puoi massimizzare 
                i guadagni e coprire i costi associati all'immobile.
              </p>
            </div>

            {/* Step 3 Detail */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#2ca781] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-black">
                  Rivendita al Momento Giusto
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Il terzo passo consiste nella rivendita dell'immobile ad un prezzo più alto. Utilizzando una strategia 
                di timing e valutazione del mercato immobiliare, puoi cercare il momento giusto per vendere e capitalizzare 
                sull'apprezzamento del valore dell'immobile. Questo ti permette di realizzare un profitto significativo 
                e reinvestirlo in altre opportunità immobiliari.
              </p>
            </div>

            {/* Step 4 Detail */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#2ca781] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-black">
                  Reinvestimento Strategico
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Infine, il quarto passo della Value Strategy è quello di utilizzare il profitto ottenuto dalla vendita 
                per acquistare un immobile con un budget più alto. Questo ti consente di accedere a proprietà di 
                maggior valore e potenziale di crescita, ampliando così il tuo portafoglio immobiliare e aumentando 
                le tue opportunità di guadagno futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion CTA */}
      <section className="py-32 bg-gradient-to-br from-[#2ca781] to-[#1a513b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            🏆 STRATEGIA PROPRIETARIA VINCENTE
          </div>
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-8 leading-tight">
            Una Strategia <span className="text-yellow-300">Vincente</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-5xl mx-auto">
            In conclusione, la nostra <strong className="font-bold text-yellow-300">Value Strategy proprietaria</strong> ti offre un approccio completo per massimizzare 
            i tuoi investimenti immobiliari. Acquistando proprietà ad un prezzo inferiore, sfruttando 
            gli affitti brevi per generare reddito, rivendendo ad un prezzo più alto e reinvestendo 
            i profitti, puoi creare una strategia vincente che ti permette di ottenere il massimo 
            valore dai tuoi investimenti immobiliari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/servizi">
              <Button 
                size="lg"
                className="bg-[#2ca781] border-2 border-[#2ca781] text-white hover:bg-[#2ca781]/90 font-semibold py-4 px-8 text-lg"
                data-testid="button-scopri-servizi"
              >
                Scopri i Servizi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/contatti">
              <Button 
                size="lg"
                variant="outline"
                className="bg-[#2ca781] border-2 border-[#2ca781] text-white hover:bg-[#2ca781]/90 font-semibold py-4 px-8 text-lg"
                data-testid="button-contattaci"
              >
                Contattaci
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

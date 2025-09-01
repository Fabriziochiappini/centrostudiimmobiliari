import HeroSection from "@/components/layout/hero-section";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown, HomeIcon, TrendingUp, Repeat, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ChiSiamo() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Chi Siamo"
        subtitle="Un team di professionisti esperti nel settore immobiliare, dedicati a offrire soluzioni innovative e servizi di qualità superiore."
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Value Strategy Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-6">
            La Nostra Value Strategy
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Un approccio intelligente che ti permette di massimizzare i tuoi investimenti immobiliari.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Questa strategia si basa su quattro passaggi fondamentali che ti aiuteranno a ottenere 
            il massimo valore dai tuoi acquisti e vendite immobiliari.
          </p>
        </div>
      </section>

      {/* 4 Steps Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-4">
              I Quattro Passaggi Fondamentali
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <Card className="bg-white border-4 border-[#2ca781] p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-4">
                Acquisto Strategico
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Acquistare un immobile ad un prezzo inferiore rispetto al suo valore di mercato attraverso 
                saldo e stralcio, aste o ricerca di proprietà in aree in sviluppo.
              </p>
            </Card>

            {/* Step 2 */}
            <Card className="bg-white border-4 border-[#2ca781] p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-4">
                Massimizzazione Reddito
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Massimizzare la messa a reddito attraverso il servizio di affitti brevi, ottenendo 
                un reddito stabile e superiore rispetto agli affitti tradizionali.
              </p>
            </Card>

            {/* Step 3 */}
            <Card className="bg-white border-4 border-[#2ca781] p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-4">
                Rivendita Valorizzata
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Rivendere l'immobile ad un prezzo più alto utilizzando strategie di timing 
                e valutazione del mercato per realizzare un profitto significativo.
              </p>
            </Card>

            {/* Step 4 */}
            <Card className="bg-white border-4 border-[#2ca781] p-8 text-center group hover:scale-105 transition-transform duration-300">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Repeat className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#071029] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-4">
                Reinvestimento
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Utilizzare il profitto ottenuto per acquistare un immobile con un budget più alto, 
                accedendo a proprietà di maggior valore e potenziale.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-4">
              Come Funziona nel Dettaglio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Scopri passo dopo passo come la nostra Value Strategy trasforma i tuoi investimenti immobiliari
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Step 1 Detail */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-[#2ca781] hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-[#2ca781]">
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
                <h3 className="text-xl font-montserrat font-semibold text-[#2ca781]">
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
                <h3 className="text-xl font-montserrat font-semibold text-[#2ca781]">
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
                <h3 className="text-xl font-montserrat font-semibold text-[#2ca781]">
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
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-6">
            Una Strategia Vincente
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            In conclusione, la nostra Value Strategy ti offre un approccio completo per massimizzare 
            i tuoi investimenti immobiliari. Acquistando proprietà ad un prezzo inferiore, sfruttando 
            gli affitti brevi per generare reddito, rivendendo ad un prezzo più alto e reinvestendo 
            i profitti, puoi creare una strategia vincente che ti permette di ottenere il massimo 
            valore dai tuoi investimenti immobiliari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/servizi">
              <Button 
                size="lg"
                className="bg-[#a9f6db] border-2 border-[#a9f6db] text-[#071029] hover:bg-[#a9f6db]/90 font-semibold py-4 px-8 text-lg"
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
                className="border-2 border-[#a9f6db] text-primary hover:bg-[#a9f6db] hover:text-[#071029] font-semibold py-4 px-8 text-lg"
                data-testid="button-contattaci"
              >
                Contattaci
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

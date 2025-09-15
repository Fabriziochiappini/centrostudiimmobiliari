import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import HeroModern from "@/components/layout/hero-modern";
import { Search, FileText, Handshake, Gavel, TrendingUp, Home as HomeIcon, ArrowRight, ShoppingCart, TrendingDown, TrendingUp as TrendingUpIcon, Repeat, Star, Quote, Award, CheckCircle, Shield } from "lucide-react";
// File da caricare nell'Object Storage nella directory public:
// hero-video.mp4, strategy-video.mp4, services-bg.jpg
// business-card-bg.jpg, academy-card-bg.jpg, investor-card-bg.jpg


// FlipCard Component
function FlipCard({ title, description, backgroundImage }: { title: string; description: string; backgroundImage?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const bgImage = backgroundImage || "/public-objects/flip-card-bg.jpg";

  return (
    <div className="relative h-80 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
        data-testid={`flip-card-${title.toLowerCase()}`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full backface-hidden border-2 border-accent rounded-lg flex items-center justify-center">
          <img 
            src={bgImage}
            alt={`Background for ${title}`}
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const fallback = document.createElement('div');
              fallback.className = 'absolute inset-0 bg-gray-200 rounded-lg flex items-center justify-center';
              const filename = bgImage.split('/').pop() || 'flip-card-bg.jpg';
              fallback.innerHTML = `<div class="text-center text-gray-500"><div class="text-4xl mb-2">🖼️</div><p class="text-sm">Carica "${filename}" nell'Object Storage</p></div>`;
              target.parentNode?.appendChild(fallback);
            }}
          />
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
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-accent rounded-lg flex items-center justify-center p-6">
          <p className="text-primary text-center leading-relaxed">
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
      <SEOHead 
        title="Centro Studi Immobiliari | Exponent S.r.l.s – Consulenza e Opportunità nel Real Estate"
        description="Scopri i servizi del Centro Studi Immobiliari di Exponent: Property Finder, Saldo e Stralcio, NPL, Aste Immobiliari, Home Staging e Affitti Brevi. Presenti a Bologna, Firenze, Milano, Padova, Piacenza, Cagliari, Venezia e Modena. Consulenza immobiliare su misura per valorizzare ogni investimento."
        keywords="centro studi immobiliari, consulenza immobiliare exponent, property finder Italia, opportunità NPL immobiliari, saldo e stralcio immobili, aste immobiliari assistenza, home staging professionale, affitti brevi immobili, consulenza immobiliare Bologna, consulenza immobiliare Milano, consulenza immobiliare Firenze, consulenza immobiliare Padova, consulenza immobiliare Piacenza, consulenza immobiliare Cagliari, consulenza immobiliare Venezia, consulenza immobiliare Modena"
        ogImage="/attached_assets/Progetto senza titolo (94)_1756738184287.jpg"
      />
      {/* Modern Hero */}
      <HeroModern />

      {/* Authority Hero Section - Dalla parte di chi acquista */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2ca781]/10 text-[#2ca781] font-semibold text-sm uppercase tracking-wider mb-8">
              🏆 Leader nel Settore Immobiliare
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-8 leading-tight">
              Dalla Parte di 
              <span style={{ color: '#2ca781' }}> Chi Acquista</span>
            </h2>
            <p className="text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-12">
              <strong className="font-semibold text-black">Centro Studi Immobiliari</strong> è l'unica realtà che mette 
              gli interessi dell'acquirente al primo posto, garantendo trasparenza totale, 
              competenza assoluta e risultati concreti in ogni operazione immobiliare.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#2ca781' }}>500+</div>
                <p className="text-gray-600 font-medium">Clienti Soddisfatti</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#2ca781' }}>8</div>
                <p className="text-gray-600 font-medium">Città Coperte</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold" style={{ color: '#2ca781' }}>15</div>
                <p className="text-gray-600 font-medium">Anni di Esperienza</p>
              </div>
            </div>
            <Link href="/chi-siamo">
              <Button 
                size="lg"
                className="bg-[#2ca781] hover:bg-[#1a513b] text-white font-bold py-6 px-12 text-xl rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                data-testid="button-scopri-di-piu"
              >
                Scopri la Nostra Autorità nel Settore
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Strategy Title Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              ✦ METODO PROPRIETARIO ✦
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-black mb-8 leading-tight">
              La <span style={{ color: '#2ca781' }}>Value Strategy</span> Proprietaria
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 font-light">
              Il metodo <strong className="text-black font-bold">scientifico esclusivo</strong> che ha generato <span className="text-[#2ca781] font-bold">€50M+ di valore</span> 
              con un <strong className="text-black font-bold">ROI medio del 67%</strong> per investitori selezionati.
            </p>
          </div>
        </div>
      </section>

      {/* Value Strategy Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: 'url(/public-objects/strategy-background.jpg)',
            backgroundColor: '#6b7280'
          }}
          onError={(e) => {
            console.error('Background image error:', e);
            const target = e.target as HTMLDivElement;
            target.style.backgroundImage = 'none';
            target.style.backgroundColor = '#6b7280';
          }}
        ></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group bg-white border-4 border-[#2ca781] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingDown className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-3">
                Acquisto Strategico
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Acquistare un immobile ad un prezzo inferiore al valore di mercato
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group bg-white border-4 border-[#2ca781] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HomeIcon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-3">
                Massimizzazione Reddito
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Massimizzare la messa a reddito con il servizio affitti brevi
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group bg-white border-4 border-[#2ca781] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUpIcon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-3">
                Rivendita Valorizzata
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Rivendere l'immobile ad un prezzo più alto dopo la valorizzazione
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group bg-white border-4 border-[#2ca781] p-8 rounded-lg">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Repeat className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#2ca781] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
              </div>
              <h3 className="text-lg font-montserrat font-semibold text-[#2ca781] mb-3">
                Reinvestimento
              </h3>
              <p className="text-black text-sm leading-relaxed">
                Acquistare un nuovo immobile con un budget più alto
              </p>
            </div>
          </div>
          
          {/* Approfondisci Button */}
          <div className="text-center mt-12">
            <Link href="/chi-siamo">
              <Button 
                size="lg"
                className="bg-primary border-2 border-white text-white hover:bg-primary/90 font-semibold py-4 px-10 text-lg"
                data-testid="button-approfondisci"
              >
                Approfondisci la Nostra Strategia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Premium Testimonials Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              <Award className="w-4 h-4 mr-2" />
              CLIENTI PREMIUM
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-8 leading-tight">
              Storie di <span style={{ color: '#2ca781' }}>Successo Verificate</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light mb-4">
              I risultati <strong className="font-bold text-black">concreti e misurabili</strong> dei nostri clienti parlano per noi
            </p>
            <div className="flex items-center justify-center gap-2 text-[#2ca781] font-semibold">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Risultati verificati e documentati</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 - Marco Rossi */}
            <Card className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#2ca781] group hover:scale-105" data-testid="testimonial-marco-rossi">
              <div className="absolute top-6 right-6 text-[#2ca781] opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2ca781] to-[#1a513b] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  MR
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-bold text-black">Marco Rossi</h4>
                  <p className="text-sm text-gray-600 font-medium">CEO, Rossi Holding S.p.A.</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "Grazie alla Value Strategy di Centro Studi ho realizzato un <strong className="text-[#2ca781] font-bold">ROI del 42%</strong> in soli 14 mesi. Il loro approccio scientifico agli NPL mi ha permesso di acquisire 3 proprietà premium a Milano a prezzi imbattibili."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">42%</div>
                  <div className="text-xs text-gray-500 uppercase">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">14</div>
                  <div className="text-xs text-gray-500 uppercase">Mesi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">3</div>
                  <div className="text-xs text-gray-500 uppercase">Immobili</div>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 - Alessandra Bianchi */}
            <Card className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#2ca781] group hover:scale-105" data-testid="testimonial-alessandra-bianchi">
              <div className="absolute top-6 right-6 text-[#2ca781] opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2ca781] to-[#1a513b] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  AB
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-bold text-black">Alessandra Bianchi</h4>
                  <p className="text-sm text-gray-600 font-medium">Imprenditrice, Bianchi Ventures</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "Il servizio di affitti brevi ha trasformato il mio investimento a Firenze. Da <strong className="text-[#2ca781] font-bold">€2.800/mese</strong> di rendita tradizionale a <strong className="text-[#2ca781] font-bold">€5.200/mese</strong> con gli affitti brevi. Professionalità assoluta."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">86%</div>
                  <div className="text-xs text-gray-500 uppercase">Aumento</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">€5.2K</div>
                  <div className="text-xs text-gray-500 uppercase">Rendita</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">100%</div>
                  <div className="text-xs text-gray-500 uppercase">Occupancy</div>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 - Giuseppe Ferrari */}
            <Card className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#2ca781] group hover:scale-105" data-testid="testimonial-giuseppe-ferrari">
              <div className="absolute top-6 right-6 text-[#2ca781] opacity-20">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2ca781] to-[#1a513b] rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  GF
                </div>
                <div>
                  <h4 className="text-lg font-montserrat font-bold text-black">Giuseppe Ferrari</h4>
                  <p className="text-sm text-gray-600 font-medium">Private Banker, UBS</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic">
                "Attraverso il loro network esclusivo di aste ho acquisito un palazzo storico a Bologna per <strong className="text-[#2ca781] font-bold">40% sotto mercato</strong>. Oggi vale €1.8M e genera €180K/anno. Expertise imbattibile."
              </blockquote>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">40%</div>
                  <div className="text-xs text-gray-500 uppercase">Sconto</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">€1.8M</div>
                  <div className="text-xs text-gray-500 uppercase">Valore</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2ca781]">€180K</div>
                  <div className="text-xs text-gray-500 uppercase">Rendita/Anno</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Authority Proof Points */}
          <div className="bg-gradient-to-r from-[#2ca781] to-[#1a513b] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
                Risultati che Parlano per Noi
              </h3>
              <p className="text-xl text-white/90 font-light">
                Ogni numero rappresenta una storia di successo verificata
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">€50M+</div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Portfolio Gestito</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">95%</div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Clienti Fidelizzati</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">500+</div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Investimenti 2024</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-300 mb-2">8</div>
                <div className="text-sm md:text-base text-white/80 uppercase tracking-wide">Mercati Italiani</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              CERTIFICAZIONI PREMIUM
            </div>
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-black mb-8">
              Credenziali e <span style={{ color: '#2ca781' }}>Partnership Esclusive</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* FIABCI Certification */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#2ca781] transition-colors duration-300" data-testid="cert-fiabci">
              <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-2">CERTIFICATI FIABCI</h4>
              <p className="text-xs text-gray-600">Federazione Internazionale Professionisti Immobiliari</p>
            </div>

            {/* RICS Membership */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#2ca781] transition-colors duration-300" data-testid="cert-rics">
              <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-2">MEMBRI RICS</h4>
              <p className="text-xs text-gray-600">Royal Institution of Chartered Surveyors</p>
            </div>

            {/* Banking Partnerships */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#2ca781] transition-colors duration-300" data-testid="cert-banking">
              <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-2">PARTNER BANCARI</h4>
              <p className="text-xs text-gray-600">Accesso Esclusivo NPL & Distressed Assets</p>
            </div>

            {/* 15 Years Experience */}
            <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-xl p-6 text-center hover:border-[#2ca781] transition-colors duration-300" data-testid="cert-experience">
              <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-2">15 ANNI</h4>
              <p className="text-xs text-gray-600">Esperienza Comprovata nel Real Estate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Press Mentions & Media Authority Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-6">
              <Award className="w-4 h-4 mr-2" />
              AUTORITÀ EDITORIALE
            </div>
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-black mb-6">
              Come <span style={{ color: '#2ca781' }}>Visto Su</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              La nostra expertise immobiliare è riconosciuta dai principali media italiani del settore
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Sole 24 Ore */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#2ca781] transition-colors duration-300 group" data-testid="media-sole24ore">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">24</span>
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-1">Il Sole 24 Ore</h4>
              <p className="text-xs text-gray-500 text-center">"Esperti in NPL immobiliari"</p>
            </div>

            {/* Milano Finanza */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#2ca781] transition-colors duration-300 group" data-testid="media-milanofinanza">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">MF</span>
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-1">Milano Finanza</h4>
              <p className="text-xs text-gray-500 text-center">"Trend affitti brevi"</p>
            </div>

            {/* Casa & Clima */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#2ca781] transition-colors duration-300 group" data-testid="media-casaclima">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">C&C</span>
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-1">Casa & Clima</h4>
              <p className="text-xs text-gray-500 text-center">"Valorizzazione immobili"</p>
            </div>

            {/* Edilizia e Territorio */}
            <div className="bg-white border-2 border-gray-100 rounded-xl p-6 flex flex-col items-center justify-center hover:border-[#2ca781] transition-colors duration-300 group" data-testid="media-ediliziaeterritorio">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">E&T</span>
              </div>
              <h4 className="font-montserrat font-bold text-sm text-black mb-1">Edilizia & Territorio</h4>
              <p className="text-xs text-gray-500 text-center">"Strategie aste giudiziarie"</p>
            </div>
          </div>

          {/* Editorial Quotes Section */}
          <div className="bg-gradient-to-r from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <Quote className="w-8 h-8 text-[#2ca781] mx-auto mb-4" />
              <h4 className="text-2xl font-montserrat font-bold text-black mb-4">Riconoscimento del Settore</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Centro Studi Immobiliari si distingue per l'approccio innovativo agli investimenti NPL"
                </blockquote>
                <div className="text-sm text-gray-500">
                  <strong>Il Sole 24 Ore</strong> - Ottobre 2024
                </div>
              </div>
              <div className="text-center">
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Una realtà che ha saputo interpretare il futuro degli affitti brevi in Italia"
                </blockquote>
                <div className="text-sm text-gray-500">
                  <strong>Milano Finanza</strong> - Settembre 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Authority Awards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              RICONOSCIMENTI 2024
            </div>
            <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-black mb-8">
              Premi e <span style={{ color: '#2ca781' }}>Riconoscimenti</span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Award 1 */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-200 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300" data-testid="award-miglior-consulenza">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-black mb-4">Miglior Consulenza NPL</h4>
              <p className="text-gray-600 mb-4">Premio assegnato dalla Camera di Commercio di Milano per l'eccellenza nei servizi NPL immobiliari</p>
              <div className="text-sm text-gray-500 font-medium">Milano • 2024</div>
            </div>

            {/* Award 2 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300" data-testid="award-innovazione">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-black mb-4">Innovation Award</h4>
              <p className="text-gray-600 mb-4">Riconoscimento per l'approccio innovativo alla Value Strategy nel real estate italiano</p>
              <div className="text-sm text-gray-500 font-medium">FIABCI Italia • 2024</div>
            </div>

            {/* Award 3 */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300" data-testid="award-customer-satisfaction">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-montserrat font-bold text-black mb-4">Customer Excellence</h4>
              <p className="text-gray-600 mb-4">95% di soddisfazione clienti certificata da ente indipendente per la qualità del servizio</p>
              <div className="text-sm text-gray-500 font-medium">TrustPilot • 2024</div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
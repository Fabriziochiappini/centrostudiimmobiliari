import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";
import contattiHeroImage from "@assets/pexels-rccbtn-33704751_1756737856109.jpg";
import SEOHead from "@/components/SEOHead";

export default function Contatti() {

  return (
    <div className="animate-fade-in">
      <SEOHead 
        title="Contatti | Centro Studi Immobiliari - Consulenza Digitale da Bologna"
        description="Contatta il Centro Studi Immobiliari per consulenza immobiliare professionale. Consulenza digitale in tutta Italia dalla nostra sede di Bologna. Tel: +39 051 196 000 10"
        keywords="contatti centro studi immobiliari, consulenza immobiliare Bologna, consulenza immobiliare digitale, telefono consulenza immobiliare"
        ogImage="/attached_assets/Progetto senza titolo (94)_1756738184287.jpg"
      />
      {/* Hero Section */}
      <HeroSection
        title="Contattaci"
        subtitle="Siamo qui per rispondere a tutte le tue domande e fornirti la migliore consulenza immobiliare."
        backgroundImage={contattiHeroImage}
      />

      {/* Contact Info Cards */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              📞 CONTATTACI SUBITO
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-black mb-8 leading-tight">
              Informazioni di <span style={{ color: '#2ca781' }}>Contatto</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">
              Consulenza <strong className="font-bold text-black">digitale in tutta Italia</strong> dalla nostra sede di Bologna
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Cards Row 1 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#2ca781] rounded-xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-black">Telefono</h3>
                    <p className="text-black">Chiamaci per una consulenza immediata</p>
                  </div>
                </div>
                <a 
                  href="tel:+390511960010" 
                  className="text-2xl font-semibold text-black hover:text-[#2ca781] transition-colors duration-300"
                >
                  +39 051 196 000 10
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#2ca781] rounded-xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-black">Email</h3>
                    <p className="text-black">Scrivici per informazioni dettagliate</p>
                  </div>
                </div>
                <a 
                  href="mailto:info@centrostudiimmobiliari.it" 
                  className="text-xl font-semibold text-black hover:text-[#2ca781] transition-colors duration-300 break-all"
                >
                  info@centrostudiimmobiliari.it
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#2ca781] rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-black">Dati Aziendali</h3>
                    <p className="text-black">Informazioni societarie</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-black">Ragione Sociale:</span>
                    <span className="text-black font-semibold">Exponent S.r.l.s</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-black">Partita IVA:</span>
                    <span className="text-black font-semibold">04062291206</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Offices Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#2ca781] rounded-xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-black">La Nostra Sede</h3>
                    <p className="text-black">Consulenza digitale in tutta Italia</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <div className="w-3 h-3 bg-[#2ca781] rounded-full"></div>
                  <span className="text-black font-semibold text-lg">Bologna</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-[#2ca781] to-[#1a513b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-white font-bold text-sm uppercase tracking-widest mb-8">
              🚀 CONSULENZA PROFESSIONALE
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-8 leading-tight">
              Pronti ad <span className="text-yellow-300">Aiutarti</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-16 font-light max-w-5xl mx-auto">
              Contattaci per una <strong className="font-bold text-yellow-300">consulenza personalizzata e professionale</strong> sui tuoi investimenti immobiliari
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <a 
                href="tel:+390511960010" 
                className="flex-1 bg-[#2ca781] text-white py-4 px-8 rounded-xl font-semibold hover:bg-[#1a513b] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                data-testid="button-call"
              >
                <Phone className="w-5 h-5" />
                <span>Chiamaci Ora</span>
              </a>
              
              <a 
                href="mailto:info@centrostudiimmobiliari.it" 
                className="flex-1 bg-transparent border-2 border-[#2ca781] text-[#2ca781] py-4 px-8 rounded-xl font-semibold hover:bg-[#2ca781] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
                <span>Scrivici</span>
              </a>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-white/90 text-lg font-medium">
                ⚡ Risposta garantita entro 24 ore
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

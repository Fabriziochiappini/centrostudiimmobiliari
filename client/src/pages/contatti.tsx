import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";
import { MapPin, Phone, Mail, Building2 } from "lucide-react";

export default function Contatti() {

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Contattaci"
        subtitle="Siamo qui per rispondere a tutte le tue domande e fornirti la migliore consulenza immobiliare."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#071029] mb-4">
              Informazioni di Contatto
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Siamo presenti su tutto il territorio nazionale per offrirti il miglior servizio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Cards Row 1 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#a9f6db]/20 rounded-xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-[#071029]">Telefono</h3>
                    <p className="text-gray-600">Chiamaci per una consulenza immediata</p>
                  </div>
                </div>
                <a 
                  href="tel:+390511960010" 
                  className="text-2xl font-semibold text-[#071029] hover:text-[#a9f6db] transition-colors duration-300"
                >
                  +39 051 196 000 10
                </a>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-[#a9f6db]/20 rounded-xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-[#071029]">Email</h3>
                    <p className="text-gray-600">Scrivici per informazioni dettagliate</p>
                  </div>
                </div>
                <a 
                  href="mailto:info@exponent group.it" 
                  className="text-xl font-semibold text-[#071029] hover:text-[#a9f6db] transition-colors duration-300 break-all"
                >
                  info@exponent group.it
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Company Info Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#a9f6db]/20 rounded-xl flex items-center justify-center">
                    <Building2 className="w-8 h-8 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-[#071029]">Dati Aziendali</h3>
                    <p className="text-gray-600">Informazioni societarie</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-700">Ragione Sociale:</span>
                    <span className="text-[#071029] font-semibold">Exponent S.r.l.s</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium text-gray-700">Partita IVA:</span>
                    <span className="text-[#071029] font-semibold">04062291206</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Offices Card */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#a9f6db]/20 rounded-xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-[#071029]">Le Nostre Sedi</h3>
                    <p className="text-gray-600">Presenti in 8 città italiane</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["Bologna", "Firenze", "Padova", "Milano", "Piacenza", "Cagliari", "Venezia", "Modena"].map((city) => (
                    <div key={city} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#a9f6db] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{city}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#071029]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Pronti ad Aiutarti
            </h2>
            <p className="text-xl text-white/80 mb-12">
              Contattaci per una consulenza personalizzata sui tuoi investimenti immobiliari
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
              <a 
                href="tel:+390511960010" 
                className="flex-1 bg-[#a9f6db] text-[#071029] py-4 px-8 rounded-xl font-semibold hover:bg-[#a9f6db]/80 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                data-testid="button-call"
              >
                <Phone className="w-5 h-5" />
                <span>Chiamaci Ora</span>
              </a>
              
              <a 
                href="mailto:info@exponent group.it" 
                className="flex-1 bg-transparent border-2 border-white text-white py-4 px-8 rounded-xl font-semibold hover:bg-white hover:text-[#071029] transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                data-testid="button-email"
              >
                <Mail className="w-5 h-5" />
                <span>Scrivici</span>
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                ⚡ Risposta garantita entro 24 ore
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

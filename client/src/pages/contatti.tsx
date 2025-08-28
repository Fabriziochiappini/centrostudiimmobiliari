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

      {/* Contact Info and Form */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-montserrat font-bold text-[#071029] mb-8">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a9f6db]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#071029] mb-2">Telefono</h3>
                    <p className="text-gray-600">+39 051 196 000 10</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a9f6db]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#071029] mb-2">Email</h3>
                    <p className="text-gray-600">info@exponent group.it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a9f6db]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#071029] mb-2">Dati Aziendali</h3>
                    <p className="text-gray-600">
                      Exponent S.r.l.s<br />
                      P.iva 04062291206
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#a9f6db]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#071029]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#071029] mb-2">Le Nostre Sedi</h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <div>Bologna</div>
                      <div>Firenze</div>
                      <div>Padova</div>
                      <div>Milano</div>
                      <div>Piacenza</div>
                      <div>Cagliari</div>
                      <div>Venezia</div>
                      <div>Modena</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action Card */}
            <div>
              <Card className="shadow-lg bg-[#071029] text-white">
                <CardContent className="p-8 text-center">
                  <h2 className="text-2xl font-montserrat font-bold mb-4">Pronti ad Aiutarti</h2>
                  <p className="text-white/80 mb-8">
                    Contattaci per una consulenza personalizzata sui tuoi investimenti immobiliari
                  </p>
                  
                  <div className="space-y-4">
                    <a 
                      href="tel:+390511960010" 
                      className="w-full bg-[#a9f6db] text-[#071029] py-3 px-6 rounded-lg font-semibold hover:bg-[#a9f6db]/80 transition-colors duration-300 inline-block"
                      data-testid="button-call"
                    >
                      📞 Chiamaci Ora
                    </a>
                    
                    <a 
                      href="mailto:info@exponent group.it" 
                      className="w-full bg-transparent border-2 border-white text-white py-3 px-6 rounded-lg font-semibold hover:bg-white hover:text-[#071029] transition-colors duration-300 inline-block"
                      data-testid="button-email"
                    >
                      ✉️ Scrivici una Email
                    </a>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-white/60 text-sm">
                      Risposta garantita entro 24 ore
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

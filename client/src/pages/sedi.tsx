import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import HeroSection from "@/components/layout/hero-section";

const sedi = [
  { citta: "Bologna", indirizzo: "Via principale, Bologna" },
  { citta: "Firenze", indirizzo: "Centro storico, Firenze" },
  { citta: "Padova", indirizzo: "Centro città, Padova" },
  { citta: "Milano", indirizzo: "Zona business, Milano" },
  { citta: "Piacenza", indirizzo: "Centro commerciale, Piacenza" },
  { citta: "Cagliari", indirizzo: "Centro città, Cagliari" },
  { citta: "Venezia", indirizzo: "Area centrale, Venezia" },
  { citta: "Modena", indirizzo: "Zona centrale, Modena" }
];

export default function Sedi() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <HeroSection
        title="Le Nostre Sedi"
        subtitle="Exponent è presente in tutta Italia con uffici strategicamente posizionati per offrirti il miglior servizio."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Sedi Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#071029] mb-4">
              Dove Siamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Con 8 sedi strategicamente distribuite sul territorio nazionale, 
              Exponent è sempre vicina alle tue esigenze immobiliari.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sedi.map((sede, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-[#a9f6db]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[#071029]" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-[#071029] mb-2">
                    {sede.citta}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {sede.indirizzo}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-[#071029] p-8 rounded-xl text-white max-w-2xl mx-auto">
              <h3 className="text-2xl font-montserrat font-bold mb-4">Contatti Centrali</h3>
              <div className="space-y-2">
                <p><strong>Telefono:</strong> +39 051 196 000 10</p>
                <p><strong>Email:</strong> info@centrostudiimmobiliari.it</p>
                <p><strong>P.IVA:</strong> 04062291206</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
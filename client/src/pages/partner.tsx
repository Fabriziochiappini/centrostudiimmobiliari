import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import HeroSection from "@/components/layout/hero-section";
import { insertPartnerApplicationSchema, type InsertPartnerApplication } from "@shared/schema";
import { Clock, Users, Lightbulb, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import businessCardBackground from "@assets/pexels-goumbik-590045_1756309994763.jpg";
import academyCardBackground from "@assets/pexels-singkham-178541-1108572_1756310104781.jpg";
import flipCardBackground from "@assets/pexels-sevenstormphotography-443378_1756309842710.jpg";

// FlipCard Component
function FlipCard({ title, description, backgroundImage }: { title: string; description: string; backgroundImage?: string }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const bgImage = backgroundImage || flipCardBackground;

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
        <div 
          className="absolute inset-0 w-full h-full backface-hidden border-2 border-[#2ca781] rounded-lg flex items-center justify-center bg-cover bg-center"
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
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-white border-2 border-[#2ca781] rounded-lg flex items-center justify-center p-6">
          <p className="text-black text-center leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Partner() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertPartnerApplication>({
    resolver: zodResolver(insertPartnerApplicationSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      esperienza: "",
      motivazione: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertPartnerApplication) => {
      return apiRequest("POST", "/api/partner", data);
    },
    onSuccess: () => {
      toast({
        title: "Candidatura inviata con successo!",
        description: "Ti contatteremo presto per un colloquio.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/partner"] });
    },
    onError: (error) => {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
      console.error("Partner form error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertPartnerApplication) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  };

  return (
    <div className="animate-fade-in">
      <SEOHead 
        title="Diventa Partner | Centro Studi Immobiliari - Opportunità di Collaborazione"
        description="Unisciti alla rete di partner del Centro Studi Immobiliari. Scopri le opportunità di collaborazione nel settore immobiliare e accedi a nuove possibilità di business."
        keywords="partner immobiliari, collaborazione real estate, rete di partner, opportunità business immobiliari, diventa partner"
        ogImage="/attached_assets/Progetto senza titolo (94)_1756738184287.jpg"
      />
      {/* Hero Section */}
      <HeroSection
        title="Diventa Partner"
        subtitle="Unisciti alla rete EXPONENT e scopri le opportunità di collaborazione nel settore immobiliare."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Partner Cards Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              🤝 OPPORTUNITÀ PARTNERSHIP
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold text-black mb-8 leading-tight">
              Scegli il Tuo <span style={{ color: '#2ca781' }}>Percorso</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto">
              Tre opportunità <strong className="font-bold text-black">uniche ed esclusive</strong> per entrare nel mondo EXPONENT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlipCard
              title="BUSINESS"
              description="Diventa partner commerciale EXPONENT. Accedi a opportunità di business esclusive, commissioni competitive e supporto completo per sviluppare la tua rete professionale nel settore immobiliare."
              backgroundImage={businessCardBackground}
            />
            <FlipCard
              title="ACADEMY"
              description="Entra nella EXPONENT Academy. Formazione specializzata, certificazioni professionali e aggiornamento continuo sulle ultime tendenze del mercato immobiliare per eccellere nel settore."
              backgroundImage={academyCardBackground}
            />
            <FlipCard
              title="INVESTOR"
              description="Investi con EXPONENT. Opportunità di investimento selezionate, analisi di mercato approfondite e strategie personalizzate per massimizzare i tuoi rendimenti immobiliari."
              backgroundImage={flipCardBackground}
            />
          </div>
        </div>
      </section>

      {/* Why Choose EXPONENT Section */}
      <section className="py-32 bg-white relative">
        {/* Linea separatrice superiore */}
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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-3 bg-[#2ca781]/10 rounded-full text-[#2ca781] font-bold text-sm uppercase tracking-widest mb-8">
              ✦ VALORI DISTINTIVI ✦
            </div>
            <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-black mb-8 leading-tight">
              Perché Scegliere <span style={{ color: '#2ca781' }}>EXPONENT</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto">
              I <strong className="font-bold text-black">valori distintivi</strong> che ci rendono unici nel settore immobiliare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-black mb-4">
                    Riprenditi il tuo tempo
                  </h3>
                  <p className="text-black leading-relaxed">
                    Qual è il valore più importante oggi? <strong>IL TEMPO</strong>. 
                    Noi di Exponent non te ne facciamo perdere altro.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-black mb-4">
                    Hai bisogno di assistenza?
                  </h3>
                  <p className="text-black leading-relaxed">
                    La nostra assistenza è unica perché è pensata su misura per le tue esigenze.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-black mb-4">
                    Semplice
                  </h3>
                  <p className="text-black leading-relaxed">
                    I nostri sistemi sono semplici per te: analisi, consulenza, assistenza.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-montserrat font-bold text-black mb-4">
                    Smart
                  </h3>
                  <p className="text-black leading-relaxed">
                    Non sprechiamo risorse, le generiamo. Ti porteremo esattamente dove vuoi arrivare.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linea separatrice inferiore */}
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
      </section>

      {/* Call to Action Section */}
      <section className="py-32 bg-gradient-to-br from-[#2ca781] to-[#1a513b] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent to-white"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-6 py-3 bg-white/20 rounded-full text-white font-bold text-sm uppercase tracking-widest mb-8">
            🚀 ENTRA NELLA RETE EXPONENT
          </div>
          <h2 className="text-5xl md:text-6xl font-montserrat font-bold text-white mb-8 leading-tight">
            Pronto a Entrare nel Mondo <span className="text-yellow-300">EXPONENT?</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-16 font-light max-w-5xl mx-auto">
            Contattaci oggi stesso per scoprire le <strong className="font-bold text-yellow-300">opportunità di partnership esclusive</strong> che ti aspettano
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contatti" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#2ca781] text-white font-semibold rounded-lg hover:bg-[#1a513b] transition-colors duration-300"
              data-testid="button-contatti"
            >
              Contattaci Ora
            </a>
            <a 
              href="/servizi" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[#2ca781] text-[#2ca781] font-semibold rounded-lg hover:bg-[#2ca781] hover:text-white transition-colors duration-300"
              data-testid="button-servizi"
            >
              Scopri i Servizi
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

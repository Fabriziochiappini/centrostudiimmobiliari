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
      {/* Hero Section */}
      <HeroSection
        title="Diventa Partner"
        subtitle="Unisciti alla rete EXPONENT e scopri le opportunità di collaborazione nel settore immobiliare."
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=800"
      />

      {/* Partner Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-4">
              Scegli il Tuo Percorso
            </h2>
            <p className="text-xl text-black">
              Tre opportunità uniche per entrare nel mondo EXPONENT
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
      <section className="py-20 bg-white">
        {/* Linea separatrice superiore */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-4">
              Perché Scegliere EXPONENT
            </h2>
            <p className="text-xl text-black">
              I valori che ci rendono unici nel settore immobiliare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-[#2ca781] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-montserrat font-bold text-black mb-3">
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
                  <h3 className="text-2xl font-montserrat font-bold text-black mb-3">
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
                  <h3 className="text-2xl font-montserrat font-bold text-black mb-3">
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
                  <h3 className="text-2xl font-montserrat font-bold text-black mb-3">
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
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mt-16"></div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-[#2ca781] mb-6">
            Pronto a Entrare nel Mondo EXPONENT?
          </h2>
          <p className="text-xl text-black mb-12">
            Contattaci oggi stesso per scoprire le opportunità di partnership che ti aspettano
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

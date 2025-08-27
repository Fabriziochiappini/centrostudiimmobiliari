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
import { DollarSign, BookOpen, Users, Wrench, Target, Award } from "lucide-react";

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

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Perché Diventare Partner
            </h2>
            <p className="text-xl text-muted-foreground">
              I vantaggi di far parte della rete EXPONENT
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Commissioni Competitive</h3>
                <p className="text-muted-foreground">Sistema di commissioni vantaggioso e trasparente per massimizzare i tuoi guadagni.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Formazione Continua</h3>
                <p className="text-muted-foreground">Programmi di formazione e aggiornamento professionale per crescere insieme.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Rete Professionale</h3>
                <p className="text-muted-foreground">Accesso a una rete consolidata di professionisti e opportunità di business.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Strumenti Digitali</h3>
                <p className="text-muted-foreground">Piattaforme tecnologiche avanzate per gestire al meglio la tua attività.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Supporto Marketing</h3>
                <p className="text-muted-foreground">Materiali e strategie di marketing per promuovere efficacemente i tuoi servizi.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-foreground mb-3">Brand Riconosciuto</h3>
                <p className="text-muted-foreground">Opera sotto un marchio consolidato e rispettato nel settore immobiliare.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partner Form Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-foreground mb-4">
              Candidati Ora
            </h2>
            <p className="text-xl text-muted-foreground">
              Compila il form per iniziare il processo di selezione
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              data-testid="input-nome"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="cognome"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cognome *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              data-testid="input-cognome"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input 
                              type="email" 
                              {...field} 
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefono *</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              {...field} 
                              data-testid="input-telefono"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="esperienza"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Anni di Esperienza nel Settore *</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <SelectTrigger data-testid="select-esperienza">
                              <SelectValue placeholder="Seleziona..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-2">0-2 anni</SelectItem>
                              <SelectItem value="3-5">3-5 anni</SelectItem>
                              <SelectItem value="6-10">6-10 anni</SelectItem>
                              <SelectItem value="10+">Più di 10 anni</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="motivazione"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Perché vuoi diventare partner EXPONENT? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="Descrivi le tue motivazioni e come pensi di contribuire al successo di EXPONENT..."
                            data-testid="textarea-motivazione"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      required 
                      data-testid="checkbox-terms"
                    />
                    <label className="text-sm text-muted-foreground">
                      Accetto i termini e le condizioni e autorizzo il trattamento dei miei dati personali *
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                    data-testid="button-submit-partner"
                  >
                    {isSubmitting ? "Invio in corso..." : "Invia Candidatura"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

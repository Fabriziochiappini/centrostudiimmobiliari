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
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contatti() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      nome: "",
      cognome: "",
      email: "",
      telefono: "",
      servizio: "",
      messaggio: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato con successo!",
        description: "Ti risponderemo al più presto.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Errore nell'invio",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = (data: InsertContactRequest) => {
    setIsSubmitting(true);
    submitMutation.mutate(data);
  };

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
              <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">Informazioni di Contatto</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Sede Principale</h3>
                    <p className="text-muted-foreground">Via Roma 123<br />20100 Milano, Italy</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Telefono</h3>
                    <p className="text-muted-foreground">+39 02 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <p className="text-muted-foreground">info@exponent.it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Orari di Apertura</h3>
                    <p className="text-muted-foreground">
                      Lunedì - Venerdì: 9:00 - 18:00<br />
                      Sabato: 9:00 - 13:00<br />
                      Domenica: Chiuso
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-montserrat font-bold text-foreground mb-6">Richiedi Informazioni</h2>
                  
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
                                  data-testid="input-contact-nome"
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
                                  data-testid="input-contact-cognome"
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
                                  data-testid="input-contact-email"
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
                              <FormLabel>Telefono</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  {...field}
                                  value={field.value || ""}
                                  data-testid="input-contact-telefono"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="servizio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Servizio di Interesse</FormLabel>
                            <FormControl>
                              <Select onValueChange={field.onChange} value={field.value || ""}>
                                <SelectTrigger data-testid="select-servizio">
                                  <SelectValue placeholder="Seleziona un servizio..." />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="consulenza">Consulenza Strategica</SelectItem>
                                  <SelectItem value="valutazione">Valutazione Immobiliare</SelectItem>
                                  <SelectItem value="gestione">Gestione Patrimonio</SelectItem>
                                  <SelectItem value="investimenti">Investimenti e Sviluppo</SelectItem>
                                  <SelectItem value="altro">Altro</SelectItem>
                                </SelectContent>
                              </Select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="messaggio"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Messaggio *</FormLabel>
                            <FormControl>
                              <Textarea 
                                {...field} 
                                rows={4}
                                placeholder="Descrivi la tua richiesta..."
                                data-testid="textarea-messaggio"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          required 
                          data-testid="checkbox-privacy"
                        />
                        <label className="text-sm text-muted-foreground">
                          Accetto il trattamento dei miei dati personali secondo la Privacy Policy *
                        </label>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                        data-testid="button-submit-contact"
                      >
                        {isSubmitting ? "Invio in corso..." : "Invia Messaggio"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

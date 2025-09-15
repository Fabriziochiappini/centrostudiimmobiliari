import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Modern Hero Component - Design come nelle immagini di riferimento
export default function HeroModern() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "/attached_assets/consulenza sugli immobili_1757937657387.jpg",
      badge: "CENTRO STUDI IMMOBILIARI",
      title: "Il Valore Migliore Per Gli Investimenti Immobiliari",
      subtitle: "Consulenza strategica e soluzioni innovative per massimizzare i rendimenti del tuo portafoglio immobiliare con la sicurezza di 15 anni di esperienza nel settore.",
      buttonText: "SCOPRI DI PIÙ",
      buttonLink: "/servizi"
    },
    {
      backgroundImage: "/attached_assets/consulenza investimenti immobiliari_1757937657387.jpg",
      badge: "INVESTIMENTI PREMIUM",
      title: "Accedi Alle Migliori Opportunità Del Mercato",
      subtitle: "Network esclusivo di deals immobiliari selezionati con ROI superiori al 40%. Partnership riservata per investitori qualificati con patrimoni da €250K+.",
      buttonText: "RICHIEDI ACCESSO",
      buttonLink: "/contatti"
    },
    {
      backgroundImage: "/attached_assets/studio consulenza immobiliare_1757937657388.webp",
      badge: "EXPERTISE CERTIFICATA",
      title: "La Consulenza Più Autorevole Del Settore",
      subtitle: "Team di professionisti certificati FIABCI e RICS. Metodologie proprietarie che hanno generato oltre €50M di valore per i nostri clienti premium.",
      buttonText: "SCOPRI IL TEAM",
      buttonLink: "/chi-siamo"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Content */}
          <div className="relative z-10 flex items-center h-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl">
                {/* Card Container */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
                  {/* Badge */}
                  <div className="inline-block px-4 py-2 bg-[#2ca781] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                    {slide.badge}
                  </div>
                  
                  {/* Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-black mb-6 leading-tight">
                    {slide.title}
                  </h1>
                  
                  {/* Subtitle */}
                  <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  {/* CTA Button */}
                  <Link href={slide.buttonLink}>
                    <Button
                      size="lg"
                      className="bg-[#2ca781] hover:bg-[#1a513b] text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      data-testid={`button-hero-${index}`}
                    >
                      {slide.buttonText}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#2ca781] scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
            data-testid={`indicator-${index}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        data-testid="button-prev"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        data-testid="button-next"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}
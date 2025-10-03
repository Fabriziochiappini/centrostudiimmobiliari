import { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// Slides array defined outside component for better performance
const SLIDES = [
  {
    backgroundImage: "/attached_assets/architettura-moderna-dell-appartamento_1757939645923.jpg",
    badge: "CENTRO STUDI IMMOBILIARI",
    title: "Il Valore Migliore Per Gli Investimenti Immobiliari",
    subtitle: "Consulenza strategica e soluzioni innovative per massimizzare i rendimenti del tuo portafoglio immobiliare con la sicurezza di 15 anni di esperienza nel settore.",
    buttonText: "SCOPRI DI PIÙ",
    buttonLink: "/servizi"
  },
  {
    backgroundImage: "/attached_assets/concetto-degli-uomini-di-affari-della-stretta-di-mano_1759497740852.jpg",
    badge: "INVESTIMENTI PREMIUM",
    title: "Accedi Alle Migliori Opportunità Del Mercato",
    subtitle: "Network esclusivo di deals immobiliari selezionati con ROI superiori al 40%, con possibilità di partnership riservata.",
    buttonText: "RICHIEDI ACCESSO",
    buttonLink: "/contatti"
  },
  {
    backgroundImage: "/attached_assets/paesaggio-analogico-della-citta-con-edifici_1757939645927.jpg",
    badge: "EXPERTISE CERTIFICATA",
    title: "La Consulenza Più Autorevole Del Settore",
    subtitle: "Team di professionisti certificati FIABCI e RICS. Metodologie proprietarie che hanno generato oltre €50M di valore per i nostri clienti premium.",
    buttonText: "SCOPRI IL TEAM",
    buttonLink: "/chi-siamo"
  },
  {
    backgroundImage: "/attached_assets/uomo-che-fa-una-presentazione-aziendale-usando-una-penna-digitale-futuristica_1757939645928.jpg",
    badge: "INNOVAZIONE E QUALITÀ",
    title: "Tecnologie Avanzate Per Il Real Estate",
    subtitle: "Utilizziamo strumenti digitali all'avanguardia per analisi precise di mercato e valutazioni immobiliari professionali.",
    buttonText: "SCOPRI LE NOSTRE TECNOLOGIE",
    buttonLink: "/servizi"
  },
  {
    backgroundImage: "/attached_assets/vista-frontale-della-pianta-che-cresce-dalle-monete-d-oro_1757939645929.jpg",
    badge: "RISULTATI GARANTITI",
    title: "Portfolio da oltre 2 miliardi €",
    subtitle: "La nostra esperienza si traduce in risultati concreti: ROI medio 25% e oltre 500 investitori soddisfatti.",
    buttonText: "VEDI I RISULTATI",
    buttonLink: "/chi-siamo"
  },
  {
    backgroundImage: "/attached_assets/coppia-di-tiro-medio-che-parla-con-l-agente-immobiliare_1757939645930.jpg",
    badge: "CONSULENZA PERSONALIZZATA",
    title: "Un Partner Di Fiducia Per I Tuoi Investimenti",
    subtitle: "Approccio consulenziale su misura per ogni cliente. Dalla pianificazione strategica all'execution, ti accompagniamo verso il successo.",
    buttonText: "INIZIA LA CONSULENZA",
    buttonLink: "/contatti"
  }
];

export default function HeroModern() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = useRef(true);

  // Preload next image
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % SLIDES.length;
    const img = new Image();
    img.src = SLIDES[nextIndex].backgroundImage;
    
    // Decode the image to ensure it's ready
    if ('decode' in img) {
      img.decode().catch(() => {
        // Ignore decode errors
      });
    }
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const advanceSlide = () => {
      if (!isMountedRef.current) return;
      
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
      
      setTimeout(() => {
        if (isMountedRef.current) {
          setIsTransitioning(false);
        }
      }, 800);
    };

    timerRef.current = setTimeout(advanceSlide, 6000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Determine which slides to render (current and adjacent for smooth transitions)
  const visibleSlides = useMemo(() => {
    const prev = (currentSlide - 1 + SLIDES.length) % SLIDES.length;
    const next = (currentSlide + 1) % SLIDES.length;
    return new Set([prev, currentSlide, next]);
  }, [currentSlide]);

  const handleSlideChange = (newIndex: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    setTimeout(() => {
      if (isMountedRef.current) {
        setIsTransitioning(false);
      }
    }, 800);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {SLIDES.map((slide, index) => {
        // Only render visible slides
        if (!visibleSlides.has(index)) return null;
        
        const isActive = index === currentSlide;
        
        return (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
              willChange: 'opacity',
              pointerEvents: isActive ? 'auto' : 'none'
            }}
          >
            {/* Background Image */}
            <img 
              src={slide.backgroundImage}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ 
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden' as const,
                WebkitBackfaceVisibility: 'hidden' as const
              }}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-lg">
                  {/* Card Container */}
                  <div 
                    className="bg-white/40 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg border border-white/30 transition-opacity duration-500"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transitionDelay: isActive ? '200ms' : '0ms'
                    }}
                  >
                    {/* Badge */}
                    <div className="inline-block px-4 py-2 bg-[#2ca781] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-6">
                      {slide.badge}
                    </div>
                    
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-bold text-black mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    
                    {/* Subtitle */}
                    <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    
                    {/* CTA Button */}
                    <Link href={slide.buttonLink}>
                      <Button
                        size="lg"
                        className="bg-[#2ca781] hover:bg-[#1a513b] text-white font-bold py-3 px-4 sm:py-4 sm:px-8 text-sm sm:text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                        data-testid={`button-hero-${index}`}
                      >
                        <span className="truncate">{slide.buttonText}</span>
                        <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-[#2ca781] scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            onClick={() => handleSlideChange(index)}
            data-testid={`indicator-${index}`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        onClick={() => handleSlideChange((currentSlide - 1 + SLIDES.length) % SLIDES.length)}
        data-testid="button-prev"
        aria-label="Slide precedente"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-20"
        onClick={() => handleSlideChange((currentSlide + 1) % SLIDES.length)}
        data-testid="button-next"
        aria-label="Slide successiva"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
}

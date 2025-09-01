import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundVideo?: string;
  backgroundImage?: string;
  children?: ReactNode;
  className?: string;
  isHomepage?: boolean;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundVideo,
  backgroundImage, 
  children, 
  className = "py-32",
  isHomepage = false
}: HeroSectionProps) {
  return (
    <section className={`relative hero-pattern ${className}`}>
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className={`font-montserrat font-bold text-white mb-6 leading-tight ${
            isHomepage 
              ? "text-6xl md:text-8xl lg:text-9xl" 
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}>
            {title === "EXPONENT" ? (
              <>
                CENTRO STUDI<br />
                Immobiliari
              </>
            ) : (
              title
            )}
          </h1>
          <p className={`text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed ${
            isHomepage 
              ? "text-3xl md:text-4xl lg:text-5xl" 
              : "text-xl md:text-2xl lg:text-3xl"
          }`}>
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}

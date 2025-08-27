import { ReactNode } from "react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  children?: ReactNode;
  className?: string;
}

export default function HeroSection({ 
  title, 
  subtitle, 
  backgroundImage, 
  children, 
  className = "py-32" 
}: HeroSectionProps) {
  return (
    <section className={`relative hero-pattern ${className}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 gradient-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}

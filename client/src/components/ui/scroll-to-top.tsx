import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Mostra il pulsante dopo aver scorso metà della pagina
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const halfPageScrolled = scrollTop > (scrollHeight - windowHeight) / 2;
      
      setIsVisible(halfPageScrolled);
    };

    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          <Button
            onClick={scrollToTop}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 shadow-lg transition-all duration-300 hover:scale-110 border-2 border-accent"
            data-testid="scroll-to-top-button"
            aria-label="Torna all'inizio"
          >
            <ChevronUp className="w-6 h-6" />
          </Button>
        </div>
      )}
    </>
  );
}
import { useEffect } from 'react';
import { useLocation } from 'wouter';

export function useScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll al top quando cambia la route
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);
}
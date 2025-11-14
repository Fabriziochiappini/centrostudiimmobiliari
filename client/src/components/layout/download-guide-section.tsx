import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function DownloadGuideSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#2ca781] to-[#1a513b] rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-montserrat font-bold text-white mb-1">
                📚 Scarica la Guida Gratuita
              </h3>
              <p className="text-white/90 text-sm">
                Compro Casa! - Guida facile all'acquisto 2026
              </p>
            </div>
            <a 
              href="/guida-comprocasa-2026.pdf" 
              download="Guida-ComproCasa-2026-CentroStudiImmobiliari.pdf"
              data-testid="button-download-guide"
            >
              <Button 
                className="bg-white text-[#2ca781] hover:bg-gray-100 font-semibold px-6 py-2 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Scarica PDF
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

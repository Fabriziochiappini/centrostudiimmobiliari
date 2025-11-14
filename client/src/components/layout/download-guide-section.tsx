import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

export default function DownloadGuideSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#2ca781] to-transparent"></div>
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#2ca781] to-[#1a513b] rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block px-4 py-2 bg-white/20 rounded-full text-white font-bold text-xs uppercase tracking-widest mb-6">
                  📚 GUIDA GRATUITA
                </div>
                <h3 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4 leading-tight">
                  Compro Casa!
                </h3>
                <p className="text-xl text-white/90 mb-2 font-semibold">
                  Guida facile all'acquisto 2026
                </p>
                <p className="text-white/80 mb-8">
                  Scopri tutti i segreti per acquistare casa al miglior prezzo: aste, NPL, saldo e stralcio, mutui e molto altro.
                </p>
                <a 
                  href="/guida-comprocasa-2026.pdf" 
                  download="Guida-ComproCasa-2026-CentroStudiImmobiliari.pdf"
                  data-testid="button-download-guide"
                >
                  <Button 
                    size="lg"
                    className="bg-white text-[#2ca781] hover:bg-gray-100 font-bold py-6 px-8 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Scarica la Guida
                  </Button>
                </a>
              </div>

              {/* Right Visual */}
              <div className="hidden md:flex items-center justify-center p-8 md:p-12">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-2xl"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-white/30">
                    <FileText className="w-32 h-32 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

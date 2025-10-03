import { Link } from "wouter";
import footerLogoImage from "@assets/Progetto senza titolo (94)_1756738184287.jpg";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <img 
              src={footerLogoImage}
              alt="Centro Studi Immobiliari"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-background/80 mb-4">
              La tua consulenza immobiliare di fiducia per investimenti sicuri e redditizi.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <a 
                href="#" 
                className="text-background/60 hover:text-accent transition-colors duration-200"
                data-testid="link-social-twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="text-background/60 hover:text-accent transition-colors duration-200"
                data-testid="link-social-linkedin"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Link Rapidi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-background/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/chi-siamo">
                  <span className="text-background/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                    Chi Siamo
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/servizi">
                  <span className="text-background/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                    Servizi
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contatti">
                  <span className="text-background/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                    Contatti
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2">
              <li className="text-background/80">Property Finder</li>
              <li className="text-background/80">NPL Opportunità</li>
              <li className="text-background/80">Saldo e Stralcio</li>
              <li className="text-background/80">Aste Immobiliari</li>
              <li className="text-background/80">Home Staging</li>
              <li className="text-background/80">Affitti Brevi</li>
            </ul>
          </div>
          
          {/* Le Nostre Sedi */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Le Nostre Sedi</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div className="text-background/80">Bologna</div>
              <div className="text-background/80">Firenze</div>
              <div className="text-background/80">Padova</div>
              <div className="text-background/80">Milano</div>
              <div className="text-background/80">Piacenza</div>
              <div className="text-background/80">Cagliari</div>
              <div className="text-background/80">Venezia</div>
              <div className="text-background/80">Modena</div>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contatti</h3>
            <ul className="space-y-2 text-background/80">
              <li>Exponent S.r.l.s</li>
              <li>+39 051 196 000 10</li>
              <li>info@centrostudiimmobiliari.it</li>
              <li>P.IVA 04062291206</li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              &copy; 2024 EXPONENT. Tutti i diritti riservati.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy">
                <span className="text-background/60 hover:text-accent text-sm transition-colors duration-200 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
              <Link href="/cookie-policy">
                <span className="text-background/60 hover:text-accent text-sm transition-colors duration-200 cursor-pointer">
                  Cookie Policy
                </span>
              </Link>
              <Link href="/termini-servizio">
                <span className="text-background/60 hover:text-accent text-sm transition-colors duration-200 cursor-pointer">
                  Termini di Servizio
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Developer Credit */}
      <div className="bg-primary py-3">
        <div className="text-center">
          <a 
            href="https://webproitalia.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:text-white text-sm transition-colors duration-200"
            data-testid="link-webproitalia"
          >
            Realizzato da WEBPROITALIA
          </a>
        </div>
      </div>
    </footer>
  );
}
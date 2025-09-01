import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/ui/mobile-menu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/chi-siamo", label: "Chi Siamo" },
    { href: "/servizi", label: "Servizi" },
    { href: "/partner", label: "Diventa Partner" },
    { href: "/contatti", label: "Contatti" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header className="fixed w-full top-0 z-50 bg-white shadow-lg border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <span 
                  className="text-2xl font-montserrat font-bold text-primary hover:text-primary/90 transition-colors cursor-pointer"
                  data-testid="logo"
                >
                  EXPONENT
                </span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <span
                      className={`px-3 py-2 text-sm font-medium transition-all duration-200 cursor-pointer relative ${
                        isActive(item.href)
                          ? "text-primary after:w-full"
                          : "text-foreground hover:text-primary after:w-0 hover:after:w-full"
                      } after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:h-0.5 after:bg-primary after:transition-all after:duration-200`}
                      data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(true)}
                data-testid="button-mobile-menu"
                className="hover:bg-accent"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navItems={navItems}
        currentLocation={location}
      />
    </>
  );
}

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { href: string; label: string }[];
  currentLocation: string;
}

export default function MobileMenu({ isOpen, onClose, navItems, currentLocation }: MobileMenuProps) {
  const isActive = (href: string) => {
    if (href === "/" && currentLocation === "/") return true;
    if (href !== "/" && currentLocation.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Menu */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border">
          <div className="text-xl font-montserrat font-bold text-primary">EXPONENT</div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            data-testid="button-close-mobile-menu"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
                onClick={onClose}
                data-testid={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

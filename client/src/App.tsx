import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import ScrollToTop from "./components/ui/scroll-to-top";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Home from "./pages/home";
import ChiSiamo from "./pages/chi-siamo";
import Servizi from "./pages/servizi";
import Contatti from "./pages/contatti";
import Sedi from "./pages/sedi";
import PrivacyPolicy from "./pages/privacy-policy";
import CookiePolicy from "./pages/cookie-policy";
import TerminiServizio from "./pages/termini-servizio";
import NotFound from "@/pages/not-found";

function Router() {
  useScrollToTop(); // Hook per scroll automatico al cambio pagina
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chi-siamo" component={ChiSiamo} />
          <Route path="/servizi" component={Servizi} />
          <Route path="/contatti" component={Contatti} />
          <Route path="/sedi" component={Sedi} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/termini-servizio" component={TerminiServizio} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

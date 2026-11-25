import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductCategory from "./pages/ProductCategory";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import Awards from "./pages/Awards";
import Gallery from "./pages/Gallery";
import Catalogue from "./pages/Catalogue";
import Infrastructure from "./pages/Infrastructure";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductCategory />} />
          <Route path="/products/:slug/:productSlug" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

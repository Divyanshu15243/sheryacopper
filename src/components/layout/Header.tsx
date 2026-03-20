import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

import { productCategories as allCategories } from "@/data/products";

const productCategoriesNav = allCategories.map((c) => ({ name: c.title, slug: c.slug }));

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Products", path: "/products", hasDropdown: true },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-graphite">
        <div className="container-wide flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-2 text-sm">
          <div className="flex items-center gap-6 text-primary-foreground/80">
            <a href="tel:+919324277851" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+91-932-427-7851</span>
            </a>
            <a href="mailto:shreyacoppers@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">shreyacoppers@gmail.com</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-primary-foreground/60">
              <MapPin className="h-3.5 w-3.5" />
              A-2/283/1, GIDC, Umbergaon Distt. Valsad, Gujarat
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container-wide flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Shreya Coppers Logo" className="h-16 w-auto" />
            <span className="font-heading text-2xl font-bold tracking-tight">
              <span className="copper-text-gradient">Shreya</span>
              <span className="text-foreground"> Coppers</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={`font-heading text-sm font-medium tracking-wide uppercase flex items-center gap-1 transition-colors ${
                    location.pathname === link.path ? "text-primary" : "text-foreground hover:text-primary"
                  }`}
                  onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="h-3.5 w-3.5" />}
                </Link>
                {link.hasDropdown && (
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-60 bg-background rounded-lg border border-border card-shadow py-2"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                      >
                        {productCategoriesNav.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={`/products/${cat.slug}`}
                            className="block px-4 py-2.5 text-sm font-body hover:bg-surface hover:text-primary transition-colors"
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="copper-gradient px-5 py-2.5 rounded text-sm font-heading font-semibold text-primary-foreground tracking-wide uppercase hover:opacity-90 transition-opacity"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="px-4 py-4 space-y-3">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.path}
                      className="block font-heading text-sm font-medium uppercase py-2"
                      onClick={() => !link.hasDropdown && setMobileOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.hasDropdown && (
                      <div className="pl-4 space-y-1">
                        {productCategoriesNav.map((cat) => (
                          <Link
                            key={cat.slug}
                            to={`/products/${cat.slug}`}
                            className="block text-sm py-1.5 text-muted-foreground hover:text-primary"
                            onClick={() => setMobileOpen(false)}
                          >
                            {cat.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block copper-gradient px-4 py-2.5 rounded text-center text-sm font-heading font-semibold text-primary-foreground uppercase"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

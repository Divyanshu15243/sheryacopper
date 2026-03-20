import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const productLinks = [
  { name: "Brass Products", path: "/products/brass-products" },
  { name: "Copper Products", path: "/products/copper-products" },
  { name: "Copper Alloys", path: "/products/copper-alloys" },
  { name: "Bronze Rod", path: "/products/bronze-rod" },
  { name: "Titanium Tubes", path: "/products/titanium-tubes" },
  { name: "Inconel Tubes", path: "/products/inconel-tubes" },
  { name: "Lightning Arrester", path: "/products/lightning-arrester" },
  { name: "Cathode Anode Hanger", path: "/products/cathode-anode-hanger" },
];

export default function Footer() {
  return (
    <footer className="bg-graphite text-primary-foreground/80">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Shreya Coppers Logo" className="h-14 w-auto" />
              <h3 className="font-heading text-xl font-bold text-primary-foreground">
                <span className="copper-text-gradient">Shreya</span> Coppers
              </h3>
            </Link>
            <p className="text-sm leading-relaxed mb-4">
              Established in 1974, Shreya Coppers is one of the leading manufacturers, exporters, and suppliers of industrial products like Pipes, Tubes, Capillary pipes & Tubes, Flanges, Pipe fittings of metals like Copper, Copper Alloy, Titanium, and Brass.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Products</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm hover:text-primary transition-colors">All Products</Link></li>
              <li><Link to="/awards" className="text-sm hover:text-primary transition-colors">Awards</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-primary transition-colors">Image Gallery</Link></li>
              <li><Link to="/catalogue" className="text-sm hover:text-primary transition-colors">Download Catalogue</Link></li>
              <li><Link to="/infrastructure" className="text-sm hover:text-primary transition-colors">Infrastructure</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-primary mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                <span>A-2/283/1/PH-II, GIDC Umbergaon Distt. Valsad, Gujarat-396171 INDIA</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href="tel:+919324277851" className="hover:text-primary transition-colors">+91 9324277851</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <a href="mailto:shreyacoppers@gmail.com" className="hover:text-primary transition-colors">shreyacoppers@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-wide px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Shreya Coppers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

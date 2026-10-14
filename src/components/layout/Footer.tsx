import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { productCategories } from "@/data/products";
import { company } from "@/data/company";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Awards & Certifications", path: "/awards" },
  { name: "All Products", path: "/products" },
  { name: "Image Gallery", path: "/gallery" },
  { name: "Download Catalogue", path: "/catalogue" },
  { name: "Contact Us", path: "/contact" },
];

const headingClass = "mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-copper";
const linkClass = "text-[14px] text-white/65 transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="" width={44} height={48} className="h-12 w-auto" loading="lazy" />
            <span className="font-heading text-xl font-extrabold tracking-tight">Shreya Coppers</span>
          </Link>
          <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/60">{company.summary}</p>
          <div className="mt-8 inline-flex items-center gap-4 border border-white/15 px-4 py-3">
            <span className="font-heading text-sm font-bold text-copper">{company.certification.standard}</span>
            <span className="h-6 w-px bg-white/15" aria-hidden />
            <span className="text-[13px] leading-tight text-white/60">
              Certified Quality
              <br />
              Management System
            </span>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>Products</h2>
          <ul className="space-y-2.5">
            {productCategories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products/${c.slug}`} className={linkClass}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className={headingClass}>Company</h2>
          <ul className="space-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className={headingClass}>Contact</h2>
          <address className="space-y-4 text-[14px] not-italic text-white/65">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
              <span>
                {company.address.lines.map((l) => (
                  <span key={l} className="block">{l}</span>
                ))}
              </span>
            </p>
            <a href={company.phone.href} className="flex items-center gap-3 transition-colors hover:text-white">
              <Phone className="h-4 w-4 shrink-0 text-copper" aria-hidden /> {company.phone.display}
            </a>
            <a href={company.email.href} className="flex items-center gap-3 break-all transition-colors hover:text-white">
              <Mail className="h-4 w-4 shrink-0 text-copper" aria-hidden /> {company.email.display}
            </a>
          </address>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border-b border-copper pb-1 font-heading text-sm font-bold text-white transition-colors hover:text-copper"
          >
            Request a Quote <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-wide flex flex-col gap-2 py-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Shreya Coppers. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-[0.14em]">Est. {company.established} · Gujarat, India</p>
        </div>
      </div>
    </footer>
  );
}

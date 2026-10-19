import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import { productCategories } from "@/data/products";
import { company } from "@/data/company";

const companyLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Infrastructure", path: "/infrastructure" },
  { name: "Awards & Certifications", path: "/awards" },
  { name: "Image Gallery", path: "/gallery" },
  { name: "Download Catalogue", path: "/catalogue" },
  { name: "Contact Us", path: "/contact" },
];

const headingClass = "mb-5 font-body text-[11px] font-light uppercase tracking-[0.2em] text-white/60";
const linkClass = "font-body text-[15px] font-light text-white transition-opacity hover:opacity-70";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-copper-gradient-deep text-white">
      {/* Faint structural lines */}
      <div className="absolute inset-y-0 left-1/4 -z-10 hidden w-px bg-white/10 lg:block" aria-hidden />
      <div className="absolute inset-y-0 right-1/4 -z-10 hidden w-px bg-white/10 lg:block" aria-hidden />
      <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" aria-hidden />

      <div className="container-wide grid gap-12 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:pt-20">
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3">
            <img src={logo} alt="" width={44} height={48} className="h-12 w-auto" loading="lazy" />
            <span className="leading-none">
              <span className="block font-heading text-xl font-extrabold tracking-tight">Shreya Coppers</span>
              <span className="mt-1.5 block font-body text-[10px] font-light uppercase tracking-[0.2em] text-white/70">
                Copper &amp; Alloy Manufacturers
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-sm font-body text-[14px] font-light leading-relaxed text-white/85">
            Manufacturing copper, brass and alloy products since {company.established}. Engineering quality. Delivering
            performance.
          </p>
        </div>

        <div className="lg:col-span-4">
          <h2 className={headingClass}>Products</h2>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
            {productCategories.map((c) => (
              <li key={c.slug}>
                <Link to={`/products/${c.slug}`} className={linkClass}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-4">
          <h2 className={headingClass}>Company</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
            {companyLinks.map((l) => (
              <li key={l.path}>
                <Link to={l.path} className={linkClass}>
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact row */}
      <address className="container-wide grid gap-5 border-t border-white/15 py-8 font-body text-[14px] font-light not-italic text-white/90 md:grid-cols-3">
        <p className="flex gap-3">
          <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />
          <span>{company.address.lines.join(", ")}</span>
        </p>
        <a href={company.phone.href} className="flex items-center gap-3 transition-opacity hover:opacity-70 md:justify-center">
          <Phone className="h-4 w-4 shrink-0" aria-hidden /> {company.phone.display}
        </a>
        <a href={company.email.href} className="flex items-center gap-3 break-all transition-opacity hover:opacity-70 md:justify-end">
          <Mail className="h-4 w-4 shrink-0" aria-hidden /> {company.email.display}
        </a>
      </address>

      <div className="container-wide flex flex-col gap-3 border-t border-white/15 py-6 font-body text-[13px] font-light text-white/75 sm:flex-row sm:items-center sm:justify-between">
        <p>
          {company.certification.standard} Certified · Est. {company.established} · {company.address.short}
        </p>
        <p>© {new Date().getFullYear()} Shreya Coppers. All rights reserved.</p>
      </div>
    </footer>
  );
}

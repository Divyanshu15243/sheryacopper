import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { company } from "@/data/company";

interface CTASectionProps {
  title?: string;
  description?: string;
}

export default function CTASection({
  title = "Looking for High Quality Copper Products?",
  description = "Contact us today for competitive pricing and expert consultation",
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-charcoal">
      <img
        src={heroBg}
        alt=""
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-charcoal via-charcoal/95 to-charcoal/60" />
      <div className="tech-grid absolute inset-0 -z-10" aria-hidden />

      <div className="container-wide grid gap-10 py-16 md:py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="eyebrow eyebrow-light mb-4">Request a Quote</p>
          <h2 className="h-section text-balance text-white">{title}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/70">{description}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn btn-primary">
              Get a Quote <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link to="/catalogue" className="btn btn-outline-light">
              Download Catalogue
            </Link>
          </div>
        </div>

        <div className="lg:col-span-4 lg:col-start-9">
          <div className="border border-white/15 bg-ink/60 p-6 backdrop-blur-sm sm:p-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">Talk to our sales team</p>
            <a href={company.phone.href} className="mt-5 flex items-center gap-4 text-white transition-colors hover:text-copper">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                <Phone className="h-4 w-4 text-copper" aria-hidden />
              </span>
              <span className="font-heading text-lg font-bold">{company.phone.display}</span>
            </a>
            <a href={company.email.href} className="mt-4 flex items-center gap-4 text-white transition-colors hover:text-copper">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/15">
                <Mail className="h-4 w-4 text-copper" aria-hidden />
              </span>
              <span className="break-all font-heading text-[15px] font-semibold">{company.email.display}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

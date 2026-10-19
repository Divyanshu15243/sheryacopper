import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import warehouse from "@/assets/infrastructure/warehouse.jpg";
import Reveal from "@/components/site/Reveal";
import { company } from "@/data/company";

export default function PartnerCTA() {
  return (
    <section className="bg-white pb-20 md:pb-28" aria-labelledby="partner-heading">
      <div className="container-wide">
        <Reveal className="grid overflow-hidden rounded lg:grid-cols-2">
          <div className="aspect-[16/10] bg-ink lg:aspect-auto">
            <img
              src={warehouse}
              alt="Warehouse stocked with finished metal tubes ready for dispatch"
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-panel px-6 py-12 sm:px-10 lg:px-12 lg:py-16">
            <span className="m-eyebrow mb-5">Get in Touch</span>
            <h2 id="partner-heading" className="font-body text-[1.75rem] font-light leading-[1.2] tracking-[-0.025em] text-ink sm:text-3xl">
              Partner with a Reliable
              <br />
              Copper Manufacturer
            </h2>
            <p className="m-lede mt-5 max-w-md">
              Whether you require bulk supply, long-term sourcing partnerships or technical specifications — Shreya Coppers
              delivers with precision and consistency.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="m-btn m-btn-gradient min-h-[44px]">
                Request a Quote
              </Link>
              <Link to="/catalogue" className="m-btn m-btn-outline min-h-[44px]">
                Download Catalogue
              </Link>
            </div>
            <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 font-body text-[14px] font-light text-ink sm:flex-row sm:gap-8">
              <a href={company.phone.href} className="inline-flex items-center gap-2.5 transition-colors hover:text-copper-dark">
                <Phone className="h-4 w-4 text-copper" aria-hidden /> {company.phone.display}
              </a>
              <a href={company.email.href} className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-copper-dark">
                <Mail className="h-4 w-4 text-copper" aria-hidden /> {company.email.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

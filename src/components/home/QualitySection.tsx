import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import certificate from "@/assets/shrey-certificate-1024x1024.png";
import Reveal from "@/components/site/Reveal";
import { company, referencedStandards } from "@/data/company";

export default function QualitySection() {
  const cert = company.certification;
  return (
    <section className="section bg-white" aria-labelledby="quality-heading">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <figure className="corner-marks border border-line bg-paper p-6 sm:p-10">
            <img
              src={certificate}
              alt={`Shreya Coppers ${cert.standard} ${cert.title}`}
              loading="lazy"
              width={1024}
              height={1024}
              className="mx-auto w-full max-w-md"
            />
            <figcaption className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
              {cert.title} · {cert.standard}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.08} className="order-1 lg:order-2 lg:col-span-7">
          <p className="eyebrow mb-4">Quality &amp; Certification</p>
          <h2 id="quality-heading" className="h-section text-balance">
            An {cert.standard} certified quality management system
          </h2>
          <p className="lede mt-5">
            In our production process, we ensure that only high-grade raw material is used along with ultra-modern equipment
            and machinery, and that products are designed in compliance with relevant international standards.
          </p>

          <dl className="mt-10 divide-y divide-line border-y border-line">
            {[
              { term: "Standard", detail: cert.standard },
              { term: "Certificate", detail: `${cert.title} — ${cert.issuer}` },
              { term: "Certified Scope", detail: cert.scope },
            ].map((row) => (
              <div key={row.term} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-dark sm:pt-1">{row.term}</dt>
                <dd className="text-[15px] font-medium leading-relaxed text-ink">{row.detail}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8">
            <p className="text-[13px] font-semibold text-ink">Standards referenced in our product specifications</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {referencedStandards.map((s) => (
                <li key={s} className="border border-line bg-paper px-3 py-1.5 font-mono text-[12px] text-ink">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <Link to="/awards" className="link-arrow mt-10">
            Awards &amp; certifications <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

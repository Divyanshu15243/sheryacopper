import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { productCategories } from "@/data/products";
import { company, productCount, referencedStandards } from "@/data/company";

const stats = [
  { value: String(company.established), label: "Established in Gujarat, India" },
  { value: "ISO", label: `${company.certification.standard.replace("ISO ", "")} Certified` },
  { value: `${productCount}+`, label: `Products across ${productCategories.length} categories` },
  { value: "Export", label: "Supplying industries worldwide" },
];

export default function QualitySection() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="quality-heading">
      <div className="container-wide">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="m-eyebrow mb-5">Quality &amp; Global Outlook</span>
          <h2 id="quality-heading" className="m-h2">
            Built in India. Trusted Worldwide.
          </h2>
          <p className="m-lede mt-5">
            Every product is manufactured from high-grade raw material on ultra-modern equipment, in compliance with
            relevant international standards — making Shreya Coppers a reliable partner across borders.
          </p>
        </Reveal>

        <dl className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05} className="m-card flex flex-col-reverse px-4 py-7 text-center">
              {/* dt comes first for valid markup; flex-col-reverse shows the figure on top */}
              <dt className="mt-2 font-body text-[12px] font-light text-muted-foreground">{s.label}</dt>
              <dd className="bg-copper-gradient bg-clip-text font-body text-3xl font-light tracking-[-0.02em] text-transparent sm:text-[2rem]">
                {s.value}
              </dd>
            </Reveal>
          ))}
        </dl>

        <Reveal className="mt-10 flex flex-col items-center gap-5 text-center">
          <p className="m-eyebrow">Standards referenced in our specifications</p>
          <ul className="flex max-w-3xl flex-wrap justify-center gap-2">
            {referencedStandards.map((s) => (
              <li key={s} className="m-tag border-line text-ink">
                {s}
              </li>
            ))}
          </ul>
          <Link to="/awards" className="m-btn m-btn-outline mt-2">
            Awards &amp; Certifications <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

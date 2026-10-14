import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import Reveal from "@/components/site/Reveal";
import { company } from "@/data/company";

const glance = [
  { term: "Established", detail: `${company.established}, Gujarat, India` },
  { term: "Materials", detail: "Copper, Copper Alloy, Titanium and Brass" },
  { term: "Manufacturing Base", detail: company.address.lines.slice(0, 2).join(", ") },
  { term: "Certified Scope", detail: `${company.certification.standard} — ${company.certification.scope}` },
];

// Two short facts side by side, then the longer ones full width
const glanceCellClass = ["", "border-t sm:border-l sm:border-t-0", "border-t sm:col-span-2", "border-t sm:col-span-2"];

export default function AboutCompany() {
  return (
    <section className="section bg-white" aria-labelledby="about-heading">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-4">About the Company</p>
          <h2 id="about-heading" className="h-section text-balance">
            Welcome to Shreya Coppers
          </h2>
          <p className="mt-3 font-mono text-[12px] uppercase tracking-[0.14em] text-steel">
            Tube Manufacturers · Copper Alloy
          </p>
          <div className="prose-body mt-8 text-[16px]">
            <p>
              Established in the year 1974, Shreya Coppers is counted as one of the leading manufacturers, exporters, and
              suppliers of Industrial Products like Pipes, Tubes, Capillary pipes &amp; Tubes, Flanges, Pipe fittings of
              metals like Copper, Copper Alloy, Titanium, and Brass.
            </p>
            <p>
              With rich industrial experience and powerful manufacturing setup, we are producing quality copper products. Our
              committed and qualified team works relentlessly to provide the best manufacturing and innovative customer
              experience possible.
            </p>
          </div>

          <div className="mt-10 flex items-end gap-5 border-t border-line pt-8">
            <span className="font-heading text-6xl font-extrabold leading-none tracking-tight text-copper">50+</span>
            <span className="pb-1 text-[15px] font-medium leading-snug text-ink">
              Years of copper &amp; alloy
              <br />
              manufacturing experience
            </span>
          </div>

          <Link to="/about" className="link-arrow mt-10">
            More about our company <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="aspect-[16/10] overflow-hidden bg-paper">
            <img
              src={factoryFloor}
              alt="Tube processing machinery on a manufacturing floor with copper tubes in the foreground"
              loading="lazy"
              width={640}
              height={512}
              className="h-full w-full object-cover"
            />
          </div>
          <dl className="mt-0 grid border-x border-b border-line sm:grid-cols-2">
            {glance.map((g, i) => (
              <div key={g.term} className={`border-line p-6 ${glanceCellClass[i]}`}>
                <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-dark">{g.term}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-ink">{g.detail}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

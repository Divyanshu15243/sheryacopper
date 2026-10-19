import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import Reveal from "@/components/site/Reveal";
import { company } from "@/data/company";

export default function AboutCompany() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="about-heading">
      {/* Intro split */}
      <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="m-eyebrow mb-5">
            Established {company.established} · Gujarat, India
          </span>
          <h2 id="about-heading" className="m-h2 lg:text-[2.6rem]">
            A Legacy in Copper
            <br />
            &amp; Alloy Manufacturing
          </h2>
          <span className="mt-8 block h-px w-12 bg-copper-gradient" aria-hidden />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="m-lede lg:pt-6 lg:text-[17px]">
            Shreya Coppers is one of India&apos;s leading manufacturers, exporters and suppliers of pipes, tubes, capillary
            tubes, flanges and pipe fittings in copper, copper alloy, titanium and brass — delivering consistency,
            precision and trust to industries worldwide for over five decades.
          </p>
        </Reveal>
      </div>

      {/* Dark image card */}
      <div className="container-wide mt-16 md:mt-24">
        <Reveal className="relative isolate overflow-hidden rounded bg-ink">
          <img
            src={factoryFloor}
            alt="Tube processing machinery on the Shreya Coppers manufacturing floor"
            loading="lazy"
            width={1600}
            height={900}
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/10" aria-hidden />
          <div className="max-w-xl px-6 py-14 sm:px-10 md:py-20 lg:px-14">
            <span className="m-eyebrow mb-5 text-white/60">About Us</span>
            <h3 className="font-body text-[1.75rem] font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-4xl">
              Five Decades of Expertise.
              <br />
              One Standard — Quality.
            </h3>
            <p className="mt-6 font-body text-[14px] font-light leading-[1.8] text-white/80">
              With rich industrial experience and a powerful manufacturing setup, our committed and qualified team works
              relentlessly to deliver quality copper products. We operate an {company.certification.standard} certified
              quality management system across the manufacture of copper, copper alloys, brass and cupro-nickel products.
            </p>
            <Link to="/about" className="m-btn m-btn-light mt-8">
              Our Story <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import qualityLab from "@/assets/stock/quality-inspection.jpg";
import Reveal from "@/components/site/Reveal";

const stages = ["Raw Material Control", "Precision Manufacturing", "Quality Assurance", "Storage & Dispatch"];

export default function ManufacturingProcess() {
  return (
    <section className="bg-white py-8 md:py-12" aria-labelledby="process-heading">
      <div className="container-wide">
        <Reveal className="grid overflow-hidden rounded lg:grid-cols-2">
          <div className="aspect-[16/10] bg-ink lg:aspect-auto">
            <img
              src={qualityLab}
              alt="Digital caliper measuring a metal section during quality inspection"
              loading="lazy"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative isolate overflow-hidden bg-copper-gradient-deep px-6 py-12 text-white sm:px-10 lg:px-12 lg:py-16">
            {/* Faint structural lines, as on an engineering drawing */}
            <div className="absolute inset-y-0 left-1/4 -z-10 w-px bg-white/15" aria-hidden />
            <div className="absolute inset-y-0 right-10 -z-10 w-px bg-white/15" aria-hidden />
            <div className="absolute inset-x-0 top-10 -z-10 h-px bg-white/15" aria-hidden />

            <span className="m-eyebrow mb-5 text-white/75">Manufacturing Excellence</span>
            <h2 id="process-heading" className="font-body text-[1.75rem] font-light leading-[1.2] tracking-[-0.02em] text-white sm:text-3xl">
              Where Technology
              <br />
              Meets Metallurgy
            </h2>
            <p className="mt-5 max-w-md font-body text-[14px] font-light leading-[1.8] text-white/90">
              CNC machines, extrusion presses and drawing machines — supported by an in-house tool room and a testing lab
              with spectrometers, tensile testers and dimensional instruments — ensure every batch meets international
              standards before dispatch.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {stages.map((s) => (
                <li key={s} className="m-tag border-white/35 text-white">
                  {s}
                </li>
              ))}
            </ul>
            <Link to="/infrastructure" className="m-btn m-btn-ghost-light mt-8 min-h-[36px] px-4 text-[13px]">
              Our Infrastructure <ArrowRight className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

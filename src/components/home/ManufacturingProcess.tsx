import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import qualityLab from "@/assets/infrastructure/quality-lab.jpg";
import warehouse from "@/assets/infrastructure/warehouse.jpg";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";

// Each stage is drawn from the About and Infrastructure page copy.
const stages = [
  {
    title: "Raw Material",
    text: "Only high-grade raw material is used, held in dedicated storage to ensure uninterrupted production.",
  },
  {
    title: "Precision Manufacturing",
    text: "CNC machines, extrusion presses and drawing machines, supported by an in-house tool room for custom dies.",
  },
  {
    title: "Quality Assurance",
    text: "In-house testing lab with spectrometers, tensile testers and dimensional instruments.",
  },
  {
    title: "Storage & Dispatch",
    text: "Well-organized warehouse for efficient inventory management and timely dispatch of orders.",
  },
];

const images = [
  { src: factoryFloor, alt: "Machining line on a manufacturing floor" },
  { src: qualityLab, alt: "Quality inspection laboratory" },
  { src: warehouse, alt: "Warehouse with stocked metal tubes" },
];

export default function ManufacturingProcess() {
  return (
    <section className="section relative isolate overflow-hidden bg-charcoal text-white" aria-labelledby="process-heading">
      <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
      <div className="container-wide">
        <SectionHeader
          id="process-heading"
          dark
          eyebrow="How We Manufacture"
          title="From raw material to dispatch"
          description="Our infrastructure is divided into departments for production, quality assurance, administration, and client help desk."
          action={
            <Link to="/infrastructure" className="btn btn-outline-light">
              Our infrastructure <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />

        <div className="grid grid-cols-3 gap-2 sm:gap-4">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={i * 0.06} className="aspect-[4/3] overflow-hidden bg-ink sm:aspect-[16/10]">
              <img src={img.src} alt={img.alt} loading="lazy" width={640} height={512} className="h-full w-full object-cover opacity-90" />
            </Reveal>
          ))}
        </div>

        <ol className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8 lg:before:absolute lg:before:inset-x-0 lg:before:top-[19px] lg:before:h-px lg:before:bg-white/15 lg:before:content-['']">
          {stages.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.06} className="relative">
              <span className="relative flex h-10 w-10 items-center justify-center border border-copper bg-charcoal font-mono text-[13px] font-medium text-copper">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">{s.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-white/65">{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

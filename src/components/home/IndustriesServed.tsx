import { Building2, Car, Fuel, Ship, Wind, Zap } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const industries = [
  { icon: Zap, name: "Power & Electrical" },
  { icon: Wind, name: "HVAC & Refrigeration" },
  { icon: Car, name: "Automotive & Engineering" },
  { icon: Ship, name: "Marine & Shipbuilding" },
  { icon: Fuel, name: "Oil & Gas" },
  { icon: Building2, name: "Construction & Architecture" },
];

export default function IndustriesServed() {
  return (
    <section className="bg-white py-20 md:py-24" aria-labelledby="industries-heading">
      <Reveal className="container-wide mx-auto max-w-3xl text-center">
        <span className="m-eyebrow mb-5">Industries We Serve</span>
        <h2 id="industries-heading" className="m-h2">
          Sectors That Demand Uncompromising Quality
        </h2>
        <p className="m-lede mx-auto mt-5 max-w-xl">
          Our copper, brass and alloy products are integral to industries where performance, purity and reliability are
          non-negotiable.
        </p>
      </Reveal>

      <ul className="container-wide mt-12 flex max-w-4xl flex-wrap justify-center gap-3">
        {industries.map((ind, i) => (
          <Reveal
            as="li"
            key={ind.name}
            delay={i * 0.04}
            className="m-tag gap-2.5 border-line px-5 py-2.5 text-[14px] text-ink transition-colors hover:border-copper"
          >
            <ind.icon className="h-4 w-4 text-copper" aria-hidden />
            {ind.name}
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

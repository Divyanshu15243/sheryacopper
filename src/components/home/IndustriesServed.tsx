import { Building2, Car, Fuel, Ship, Wind, Zap } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const industries = [
  { icon: Car, name: "Automotive", desc: "Precision components for automotive systems" },
  { icon: Zap, name: "Electrical", desc: "High conductivity solutions for electrical applications" },
  { icon: Building2, name: "Construction", desc: "Durable materials for building infrastructure" },
  { icon: Fuel, name: "Oil & Gas", desc: "Corrosion-resistant products for energy sector" },
  { icon: Ship, name: "Marine", desc: "Salt-water resistant alloys for marine use" },
  { icon: Wind, name: "HVAC", desc: "Heat exchange tubes and components" },
];

export default function IndustriesServed() {
  return (
    <section className="section bg-paper" aria-labelledby="industries-heading">
      <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
            <p className="eyebrow mb-4">Industries We Serve</p>
            <h2 id="industries-heading" className="h-section text-balance">
              Materials for critical industrial sectors
            </h2>
            <p className="lede mt-5">
              Our products power critical applications across diverse industrial sectors worldwide — serving Automotive,
              Electrical, Marine, Oil &amp; Gas, HVAC and Construction.
            </p>
          </div>
        </Reveal>

        <ul className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-8">
          {industries.map((ind, i) => (
            <Reveal as="li" key={ind.name} delay={(i % 2) * 0.05} className="group bg-white p-7 sm:p-8">
              <div className="flex items-start justify-between">
                <span className="flex h-12 w-12 items-center justify-center border border-line text-copper-dark transition-colors group-hover:border-copper group-hover:bg-copper group-hover:text-ink">
                  <ind.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="mt-8 text-xl font-bold">{ind.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{ind.desc}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

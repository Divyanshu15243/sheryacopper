import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Factory, Shield, Truck, Users } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import { company } from "@/data/company";

const features = [
  { icon: Shield, title: "Premium Quality Materials", desc: "Rigorous testing to international standards" },
  { icon: BadgeCheck, title: `${company.certification.standard} Certified Manufacturing`, desc: "A certified quality management system" },
  { icon: Factory, title: "Modern Manufacturing", desc: "Extrusion, drawing and CNC machining in-house" },
  { icon: Users, title: "Expert Engineers", desc: "Decades of metallurgical expertise" },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time dispatch to all major export markets" },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="why-heading">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <span className="m-eyebrow mb-5">Our Edge</span>
          <h2 id="why-heading" className="m-h2">
            Built on Precision.
            <br />
            Driven by Reliability.
          </h2>
          <p className="m-lede mt-6 max-w-lg">
            At Shreya Coppers, quality is not a checkpoint — it is a continuous process embedded into every stage of
            production. Five decades on, we build long-term industrial partnerships grounded in trust and performance.
          </p>
          <Link to="/about" className="m-btn m-btn-gradient mt-8">
            What Sets Us Apart <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>

        <ol className="space-y-3">
          {features.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 0.05} className="m-card flex items-center gap-4 px-4 py-4 sm:px-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-copper-gradient text-white">
                <f.icon className="h-4 w-4" aria-hidden />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-body text-[14px] font-normal text-ink">{f.title}</span>
                <span className="block font-body text-[12.5px] font-light text-muted-foreground">{f.desc}</span>
              </span>
              <span className="font-body text-xs font-light text-steel">{String(i + 1).padStart(2, "0")}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { Factory, Shield, Truck, Users } from "lucide-react";
import Reveal from "@/components/site/Reveal";

const features = [
  { icon: Shield, title: "Premium Quality Materials", desc: "All products undergo rigorous quality testing to meet international standards." },
  { icon: Factory, title: "Modern Manufacturing", desc: "State-of-the-art machinery and advanced manufacturing processes." },
  { icon: Users, title: "Expert Engineers", desc: "Highly skilled team with decades of metallurgical expertise." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time delivery with global export capabilities to all major markets." },
];

export default function WhyChooseUs() {
  return (
    <section className="section bg-paper" aria-labelledby="why-heading">
      <div className="container-wide">
        <div className="grid gap-6 pb-12 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-16">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Our Advantages</p>
            <h2 id="why-heading" className="h-section text-balance">
              Why choose Shreya Coppers
            </h2>
          </div>
          <p className="lede lg:col-span-5">
            Five decades of copper and alloy manufacturing, backed by a certified quality system and an experienced team.
          </p>
        </div>

        <ol className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={i * 0.05}
              className="relative border-t border-line pt-8 before:absolute before:-top-px before:left-0 before:h-0.5 before:w-12 before:bg-copper before:content-['']"
            >
              <div className="flex items-center gap-4">
                <span className="font-heading text-4xl font-extrabold text-copper">{String(i + 1).padStart(2, "0")}</span>
                <f.icon className="h-5 w-5 text-steel" aria-hidden />
              </div>
              <h3 className="mt-6 text-lg font-bold">{f.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{f.desc}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

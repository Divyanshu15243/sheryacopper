import { Cpu, Factory, Shield, Users, Warehouse, Wrench } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";
import factoryFloor from "@/assets/stock/cnc-machining.jpg";
import productionHall from "@/assets/stock/production-hall.jpg";
import qualityLab from "@/assets/stock/quality-inspection.jpg";
import warehouseImg from "@/assets/stock/pipe-warehouse.jpg";
import pipeHandling from "@/assets/stock/pipe-handling.jpg";

const facilities = [
  {
    image: factoryFloor,
    title: "Manufacturing Floor",
    description:
      "State-of-the-art CNC machines and production lines for precision manufacturing of copper, brass, and alloy products.",
  },
  {
    image: qualityLab,
    title: "Quality Control Lab",
    description: "Advanced testing and inspection equipment ensuring every product meets international quality standards.",
  },
  {
    image: warehouseImg,
    title: "Storage & Warehouse",
    description: "Well-organized warehouse facility for efficient inventory management and timely dispatch of orders.",
  },
  {
    image: pipeHandling,
    title: "Main Production Unit",
    description: "Our primary manufacturing facility at GIDC Umbergaon, spread across a large industrial area.",
  },
];

const capabilities = [
  { icon: Factory, title: "Modern Machinery", desc: "CNC machines, extrusion presses, and drawing machines for precision manufacturing" },
  { icon: Shield, title: "Quality Assurance", desc: "In-house testing lab with spectrometers, tensile testers, and dimensional instruments" },
  { icon: Wrench, title: "Tool & Die Shop", desc: "In-house tool room for custom die manufacturing and maintenance" },
  { icon: Warehouse, title: "Raw Material Storage", desc: "Dedicated storage for raw materials ensuring uninterrupted production" },
  { icon: Cpu, title: "Process Automation", desc: "Automated processes for consistent quality and higher production efficiency" },
  { icon: Users, title: "Skilled Workforce", desc: "Experienced team of engineers, technicians and quality inspectors" },
];

const departments = ["Production", "Quality Assurance", "Administration", "Client Help Desk"];

export default function Infrastructure() {
  usePageMeta(
    "Infrastructure",
    "Advanced manufacturing facilities at GIDC Umbergaon, Gujarat — production, quality control lab, tool room and warehouse for copper and alloy products.",
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Facilities & Capabilities"
        title="Infrastructure"
        subtitle="Advanced manufacturing facilities powering precision metal products"
        image={productionHall}
        imageAlt="Wide industrial production hall with overhead cranes"
      />

      {/* Intro */}
      <section className="section bg-white">
        <div className="container-wide grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Our Facilities</p>
            <h2 className="h-section text-balance">A well-facilitated manufacturing unit at GIDC Umbergaon</h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="lede">
              Our manufacturing unit at GIDC Umbergaon is equipped with the latest technology and machinery for producing
              world-class copper and alloy products.
            </p>
            <h3 className="mt-8 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper-dark">Departments</h3>
            <ul className="mt-4 grid grid-cols-2 gap-px border border-line bg-line">
              {departments.map((d, i) => (
                <li key={d} className="flex items-center gap-3 bg-white px-4 py-4 text-[15px] font-semibold text-ink">
                  <span className="font-mono text-[11px] font-normal text-steel">{String(i + 1).padStart(2, "0")}</span>
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Facilities: alternating rows */}
      <section className="bg-paper py-16 md:py-24">
        <div className="container-wide space-y-16 md:space-y-24">
          {facilities.map((f, i) => (
            <Reveal key={f.title} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
              <div className={cn("overflow-hidden bg-charcoal md:col-span-7", i % 2 === 1 && "md:order-2")}>
                <img
                  src={f.image}
                  alt={f.title}
                  loading="lazy"
                  className="aspect-[16/10] h-full w-full object-cover"
                />
              </div>
              <div className={cn("md:col-span-5", i % 2 === 1 && "md:order-1")}>
                <span className="font-mono text-[12px] text-copper-dark">{String(i + 1).padStart(2, "0")} / {String(facilities.length).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">{f.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </Reveal>
          ))}
          <p className="text-[13px] text-steel">Photography shown is representative.</p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
        <div className="container-wide">
          <SectionHeader dark eyebrow="Capabilities" title="Manufacturing Capabilities" />
          <ul className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal as="li" key={cap.title} delay={(i % 3) * 0.05} className="bg-ink p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <cap.icon className="h-6 w-6 text-copper" aria-hidden />
                  <span className="font-mono text-[11px] text-white/40">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-8 text-xl font-bold text-white">{cap.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{cap.desc}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

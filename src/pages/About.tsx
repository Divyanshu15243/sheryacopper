import { Link } from "react-router-dom";
import { ArrowRight, Check, Factory, Shield, Users } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { usePageMeta } from "@/hooks/use-page-meta";
import { company } from "@/data/company";
import heroBg from "@/assets/hero-bg.jpg";
import warehouseImg from "@/assets/infrastructure/warehouse.jpg";
import certificate1 from "@/assets/shrey-certificate-1024x1024.png";
import certificate2 from "@/assets/certificate2-1024x1024.png";

const milestones = [
  "Established in 1974 in Gujarat, India",
  "ISO certified quality management systems",
  "Export to 30+ countries worldwide",
  "State-of-the-art manufacturing facility at GIDC Umbergaon",
  "Comprehensive range of copper, brass, and alloy products",
  "Trusted by industries across automotive, marine, construction sectors",
];

const stats = [
  { value: "50+", label: "Years Experience" },
  { value: "ISO", label: "Certified Quality" },
  { value: "30+", label: "Countries Exported" },
  { value: "500+", label: "Happy Clients" },
];

const whyChooseItems = [
  {
    icon: Shield,
    title: "Quality",
    description:
      "Our offered range of products is widely admired by consumers for its reliability, ease of install, high efficiency, low maintenance, and outstanding results. In their production process, we ensure that only high-grade raw material is used along with the ultra-modern equipment and machinery and that they are designed in compliance with relevant international standards to meet the world-class quality level.",
  },
  {
    icon: Factory,
    title: "Infrastructure",
    description:
      "We have a well-facilitated infrastructure that is equipped with all the latest technologies and machinery and this is further divided into various departments like for production, quality assurance, administration, and client help desk. Our sophisticated machinery and talented workforce assist us in manufacturing products exactly according to the requirements of the customers.",
  },
  {
    icon: Users,
    title: "Our Team",
    description:
      "The tremendous reputation that we have achieved over these years is due to the diligent efforts of our experienced professionals. Our team of professionals is well aware of their duties and responsibilities and their main motive is to make sure that the work allotted to them is done properly and completed on time. All our products are manufactured precisely.",
  },
];

export default function About() {
  usePageMeta(
    "About Us",
    "Established in 1974, Shreya Coppers is an ISO 9001:2015 certified manufacturer and exporter of copper, copper alloy, titanium and brass pipes, tubes and fittings, based in Valsad, Gujarat.",
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Company Profile"
        title="About Us"
        subtitle="Five decades of excellence in copper and alloy manufacturing"
        image={heroBg}
        imageAlt="Copper tubes on a production line"
      />

      {/* Introduction */}
      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Welcome to Shreya Coppers</p>
            <p className="font-heading text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-[1.75rem]">
              Established in the year 1974, Shreya Coppers is counted as one of the leading manufacturers, exporters, and
              suppliers of Industrial Products like Pipes, Tubes, Capillary pipes &amp; Tubes, Flanges, Pipe fittings of metals
              like Copper, Copper Alloy, Titanium, and Brass.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="prose-body text-[16px] lg:col-span-5 lg:col-start-8 lg:pt-10">
            <p>
              Based in Valsad, Gujarat, Shreya Coppers is an {company.certification.standard} certified company catering to
              the requirement of several industrial sectors.
            </p>
            <p>
              Our company has gained a prominent position in the national and foreign markets by delivering high-end
              products. We are the manufacturers serving national and international markets with the range of quality
              products, empowered by the latest technology and a well-qualified expertise team.
            </p>
          </Reveal>
        </div>

        <div className="container-wide mt-16 lg:mt-20">
          <dl className="grid grid-cols-2 border-y border-line lg:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`py-8 ${i % 2 === 1 ? "border-l border-line pl-6" : "pr-6"} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-heading text-4xl font-extrabold tracking-tight text-copper sm:text-5xl">{s.value}</span>
                  <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-steel">{s.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* At a glance */}
      <section className="section bg-paper">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <Reveal className="lg:col-span-6">
            <div className="aspect-[5/4] overflow-hidden bg-charcoal">
              <img
                src={warehouseImg}
                alt="Stock of copper and metal tubes in a warehouse"
                loading="lazy"
                width={640}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-6">
            <p className="eyebrow mb-4">At a Glance</p>
            <h2 className="h-section text-balance">A manufacturing heritage built since 1974</h2>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {milestones.map((m) => (
                <li key={m} className="flex items-start gap-4 py-4 text-[15px] text-ink">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center bg-copper text-ink">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-white">
        <div className="container-wide">
          <SectionHeader eyebrow="Our Strengths" title="Why Choose Us" />
          <ol className="border-t border-ink">
            {whyChooseItems.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                className="grid gap-4 border-b border-line py-10 md:grid-cols-12 md:gap-10 lg:py-12"
              >
                <div className="flex items-center gap-5 md:col-span-4">
                  <span className="font-mono text-[13px] text-copper-dark">{String(i + 1).padStart(2, "0")}</span>
                  <item.icon className="h-6 w-6 text-steel" aria-hidden />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                </div>
                <p className="text-[16px] leading-[1.8] text-muted-foreground md:col-span-8">{item.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Mission */}
      <section className="section relative isolate overflow-hidden bg-ink text-white">
        <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
        <div className="container-wide grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow eyebrow-light mb-4">Our Mission</p>
            <h2 className="h-section text-white">Quality products for national and international markets</h2>
          </div>
          <div className="space-y-5 text-[17px] leading-[1.8] text-white/70 lg:col-span-7 lg:col-start-6">
            <p>
              Established in the year 1974, Shreya Coppers is counted as one of the leading manufacturers, exporters, and
              suppliers of Industrial Products like Pipes, Tubes, Capillary pipes &amp; Tubes, Flanges, Pipe fittings of metals
              like Copper, Copper Alloy, Titanium, and Brass. Based in Valsad, Gujarat, Shreya Coppers is an{" "}
              {company.certification.standard} certified company catering to the requirement of several industrial sectors.
            </p>
            <p>
              Our company has gained a prominent position in the national and foreign markets by delivering high-end
              products. We are the manufacturers serving national and international markets with the range of quality
              products, empowered by the latest technology and a well-qualified expertise team.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section bg-paper">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Our Certifications"
            title="Internationally certified manufacturing standards"
            description="Quality assured and internationally certified manufacturing standards"
            action={
              <Link to="/awards" className="btn btn-outline">
                Awards &amp; certifications <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            }
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:max-w-4xl">
            {[certificate1, certificate2].map((src, i) => (
              <Reveal key={src} delay={i * 0.08}>
                <figure className="border border-line bg-white p-6">
                  <img
                    src={src}
                    alt={`Shreya Coppers ${company.certification.standard} ${company.certification.title}`}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full"
                  />
                  <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
                    {company.certification.standard} · {company.certification.title}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

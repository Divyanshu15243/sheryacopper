import { Award, CheckCircle, Shield, Star } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import SectionHeader from "@/components/site/SectionHeader";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";
import certificate from "@/assets/shrey-certificate-1024x1024.png";

const awards = [
  {
    title: `${company.certification.standard} Certification`,
    description:
      "Certified quality management system ensuring consistent product quality and customer satisfaction across all manufacturing processes.",
    icon: Shield,
    status: "Certified",
  },
  {
    title: "IAF Accreditation",
    description:
      "International Accreditation Forum recognition for meeting global standards in manufacturing and quality assurance.",
    icon: Award,
    status: "Accredited",
  },
  {
    title: "Excellence in Export",
    description:
      "Recognized for outstanding contribution to export of copper and alloy products to 30+ countries worldwide.",
    icon: Star,
    status: "Awarded",
  },
  {
    title: "Quality Excellence Award",
    description: "Awarded for maintaining highest quality standards in copper, brass, and alloy product manufacturing.",
    icon: CheckCircle,
    status: "Awarded",
  },
];

export default function Awards() {
  const cert = company.certification;
  usePageMeta(
    "Awards & Certifications",
    `Shreya Coppers is an ${cert.standard} certified manufacturer of copper and copper alloys, brass and cupro-nickel pipes, tubes, rods, sections and profiles.`,
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Quality Credentials"
        title="Awards & Certifications"
        subtitle="Recognized for excellence in quality and manufacturing"
      />

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <Reveal className="lg:col-span-5">
            <figure className="corner-marks border border-line bg-paper p-6 sm:p-10 lg:sticky lg:top-[calc(var(--header-h)+32px)]">
              <img
                src={certificate}
                alt={`Shreya Coppers ${cert.standard} ${cert.title}`}
                width={1024}
                height={1024}
                className="mx-auto w-full max-w-md"
              />
              <figcaption className="mt-4 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-steel">
                {cert.title} · {cert.standard}
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <p className="eyebrow mb-4">Our Certifications</p>
            <h2 className="h-section text-balance">{cert.standard} certified quality management</h2>
            <div className="prose-body mt-6 text-[16px]">
              <p>
                Shreya Coppers is an {cert.standard} certified company. Our quality management systems are designed to ensure
                the highest standards in manufacturing copper, brass, titanium, and alloy products.
              </p>
              <p>
                We are committed to continuous improvement and adhere to international standards across all our
                manufacturing processes, from raw material procurement to final product delivery.
              </p>
            </div>

            <dl className="mt-10 divide-y divide-line border-y border-line">
              {[
                { term: "Standard", detail: cert.standard },
                { term: "Certificate", detail: cert.title },
                { term: "Issued By", detail: cert.issuer },
                { term: "Certified Scope", detail: cert.scope },
              ].map((row) => (
                <div key={row.term} className="grid gap-1 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-dark sm:pt-1">{row.term}</dt>
                  <dd className="text-[15px] font-medium leading-relaxed text-ink">{row.detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="container-wide">
          <SectionHeader eyebrow="Recognition" title="Awards & accreditations" />
          <ol className="grid gap-px border border-line bg-line md:grid-cols-2">
            {awards.map((award, i) => (
              <Reveal as="li" key={award.title} delay={(i % 2) * 0.05} className="flex gap-6 bg-white p-7 sm:p-9">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-line text-copper-dark">
                  <award.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    {String(i + 1).padStart(2, "0")} · {award.status}
                  </p>
                  <h3 className="mt-2 text-xl font-bold">{award.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{award.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

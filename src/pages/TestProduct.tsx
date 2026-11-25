import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Droplets, Flame, Plus, Snowflake, Stethoscope } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import SpecScalePreview from "@/components/product/SpecScalePreview";
import { usePageMeta } from "@/hooks/use-page-meta";
import { getScaleConfig } from "@/data/productScale";
import { cn } from "@/lib/utils";
import tubeRacks from "@/assets/stock/tube-racks.jpg";

const scaleConfig = getScaleConfig({
  name: "Straight Copper Tube",
  slug: "copper-tubes",
  specifications: [
    { label: "Outer Diameter", value: "6mm to 130mm" },
    { label: "Wall Thickness", value: "0.70mm to 3.25mm" },
    { label: "Length", value: "300mm to 6000mm" },
  ],
})!;

const materialTags = ["C12200 DHP", "Cu ≥ 99.90%", "P: 0.015–0.040%", "Seamless · Cold Drawn"];

const standards = [
  { code: "ASTM B280", use: "Air Conditioning & Refrigeration" },
  { code: "JIS H 3300", use: "Copper & Alloy Seamless Tubes" },
  { code: "EN 1057", use: "Plumbing, Heating & Gas Systems" },
  { code: "ASTM B819", use: "Medical Gas Tube" },
  { code: "IS 10773", use: "ACR Copper Tubes" },
  { code: "ASTM B68", use: "Bright Annealed Copper Tubes" },
  { code: "EN 13348", use: "Medical Gases & Vacuum" },
  { code: "EN 12735", use: "HVAC/R" },
];

const tempers = [
  {
    code: "H",
    name: "Hard",
    text: "For rigid straight runs that need no bending. Highest pressure rating — suited to exposed piping, riser mains and structural installations.",
    uses: ["HVAC Mains", "Riser Pipes", "Industrial"],
  },
  {
    code: "HH",
    name: "Half Hard",
    text: "A balance of stiffness and formability. Holds its line on long runs yet accepts gentle bends with a tube bender.",
    uses: ["Plumbing", "Gas Lines", "Process Piping"],
  },
  {
    code: "QH",
    name: "Quarter Hard",
    text: "The most formable straight-length temper. Easy to bend on site while keeping better dimensional stability than soft coils.",
    uses: ["Split AC Lines", "Medical Gas", "Equipment Hook-ups"],
  },
];

const applications = [
  { icon: Snowflake, name: "HVAC & Refrigeration", standards: ["JIS H 3300", "IS 10773"] },
  { icon: Stethoscope, name: "Medical Gas", standards: ["EN 13348", "ASTM B819"] },
  { icon: Droplets, name: "Plumbing & Water Supply", standards: ["EN 1057", "BS 2871"] },
  { icon: Flame, name: "Household & Fuel Gas", standards: ["EN 1057", "ASTM B837"] },
  { icon: Building2, name: "Process Piping", standards: ["EN 12735", "ASTM B280"] },
];

const faqs = [
  {
    q: "What separates ACR-grade tube from plumbing-grade tube?",
    a: "ACR tube (ASTM B280) is internally cleaned, degreased and capped at both ends so no oil or moisture reaches the refrigeration circuit. Plumbing tube (EN 1057) does not need that level of internal cleanliness — always specify ASTM B280 for HVAC/R work.",
  },
  {
    q: "Can the same tube be used with R32 and R410A?",
    a: "Yes. C12200 DHP copper is compatible with R22, R32, R410A, R134a, R407C, R404A and R744 (CO₂). Higher-pressure refrigerants may need a thicker wall for the same O.D., so check the working pressure when selecting a wall.",
  },
  {
    q: "Do you supply test certificates?",
    a: "Mill test certificates covering chemistry, mechanical properties and dimensions are available for every batch. Third-party reports and full traceability can be arranged for medical gas and critical projects.",
  },
  {
    q: "Can you supply custom lengths?",
    a: "3 m is our standard length and 6 m is regularly supplied. Cut-to-size lengths are available on request, subject to minimum order quantities.",
  },
];

export default function TestProduct() {
  usePageMeta(
    "Straight Copper Tube",
    "Seamless straight copper tubes in C12200 DHP copper — 6 to 130 mm O.D., 0.70 to 3.25 mm wall, Hard, Half Hard and Quarter Hard tempers.",
  );
  const [temper, setTemper] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Drawn to Perform"
        title="Straight Copper Tube"
        subtitle="Seamless straight copper tubes for HVAC/R, plumbing, medical and industrial use. Cold drawn, pressure tested and made to global standards."
        breadcrumbs={[{ label: "Products", to: "/products" }]}
        bannerImage={tubeRacks}
        imageAlt="Racks of straight metal tubes in a stockyard"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="m-btn m-btn-gradient min-h-[44px]">
            Enquire Now <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/catalogue" className="m-btn m-btn-ghost-light min-h-[44px]">
            Download Brochure
          </Link>
        </div>
      </PageHero>

      {/* Material */}
      <section className="border-b border-line bg-panel py-16 md:py-20" aria-labelledby="material-heading">
        <Reveal className="container-wide grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="m-eyebrow mb-3">Material</span>
            <h2 id="material-heading" className="font-body text-4xl font-light tracking-[-0.02em] text-copper sm:text-5xl">
              99.90% Purity
            </h2>
          </div>
          <div>
            <p className="m-lede">
              Drawn from A-grade copper cathodes in C12200 (DHP) phosphorus-deoxidised copper with a minimum 99.90% copper
              content — for high thermal conductivity, corrosion resistance and consistent strength through the full
              cross-section.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {materialTags.map((t) => (
                <li key={t} className="rounded-full border border-line bg-white px-4 py-1.5 font-body text-[13px] tracking-wide text-ink">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Specifications with scale preview */}
      <section className="bg-paper py-12 md:py-16" aria-label="Specifications">
        <Reveal className="container-wide">
          <SpecScalePreview config={scaleConfig} title="By the Numbers" eyebrow="Specifications" />
        </Reveal>
      </section>

      {/* Compliance */}
      <section className="bg-white py-20 md:py-24" aria-labelledby="compliance-heading">
        <div className="container-wide">
          <Reveal className="mb-10 max-w-2xl">
            <span className="m-eyebrow mb-3">Compliance</span>
            <h2 id="compliance-heading" className="m-h2">
              Built to Every Major Standard
            </h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {standards.map((s, i) => (
              <Reveal as="li" key={s.code} delay={i * 0.04} className="m-card p-6">
                <p className="font-body text-xl font-light text-copper-dark">{s.code}</p>
                <p className="mt-2 font-body text-[14px] font-light text-muted-foreground">{s.use}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Temper guide */}
      <section className="bg-panel py-20 md:py-24" aria-labelledby="temper-heading">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="m-eyebrow mb-3">Temper Guide</span>
            <h2 id="temper-heading" className="m-h2">
              Choose the Right Form
            </h2>
            <p className="m-lede mt-5 max-w-md">
              All three tempers are available in straight lengths. Choose by bending radius, pressure rating and handling on
              site.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div role="tablist" aria-label="Temper" className="flex gap-2">
              {tempers.map((t, i) => (
                <button
                  key={t.code}
                  type="button"
                  role="tab"
                  id={`temper-tab-${t.code}`}
                  aria-selected={temper === i}
                  aria-controls="temper-panel"
                  onClick={() => setTemper(i)}
                  className={cn(
                    "min-h-[44px] flex-1 rounded-full border px-4 py-2 font-body text-[14px] transition-colors",
                    temper === i ? "border-copper bg-copper text-white" : "border-line bg-white text-ink hover:border-copper",
                  )}
                >
                  <span className="font-medium">{t.code}</span> <span className="hidden sm:inline">· {t.name}</span>
                </button>
              ))}
            </div>
            <div id="temper-panel" role="tabpanel" aria-labelledby={`temper-tab-${tempers[temper].code}`} className="mt-6 rounded-2xl bg-white p-6 sm:p-8">
              <p className="font-body text-2xl font-light text-ink">{tempers[temper].name}</p>
              <p className="mt-3 font-body text-[15px] font-light leading-relaxed text-muted-foreground">{tempers[temper].text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tempers[temper].uses.map((u) => (
                  <li key={u} className="m-tag border-copper/40 text-copper-dark">
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-white py-20 md:py-24" aria-labelledby="apps-heading">
        <div className="container-wide">
          <Reveal className="mb-10 max-w-2xl">
            <span className="m-eyebrow mb-3">Applications</span>
            <h2 id="apps-heading" className="m-h2">
              One Tube. Many Industries.
            </h2>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {applications.map(({ icon: Icon, name, standards: st }, i) => (
              <Reveal as="li" key={name} delay={i * 0.05} className="m-card flex flex-col p-6">
                <Icon className="h-6 w-6 text-copper" aria-hidden />
                <p className="mt-5 font-body text-[16px] text-ink">{name}</p>
                <p className="mt-auto pt-4 font-mono text-[11px] uppercase tracking-wider text-steel">{st.join(" · ")}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 md:py-24" aria-labelledby="faq-heading">
        <div className="container-wide max-w-4xl">
          <Reveal className="mb-10">
            <span className="m-eyebrow mb-3">FAQ</span>
            <h2 id="faq-heading" className="m-h2">
              Questions We Hear Often
            </h2>
          </Reveal>
          <ul className="flex flex-col gap-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <li key={f.q} className="rounded-2xl border border-line bg-white">
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-${i}`}
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex min-h-[56px] w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className="font-body text-[15px] text-ink sm:text-base">{f.q}</span>
                    <Plus className={cn("h-4 w-4 shrink-0 text-copper transition-transform", open && "rotate-45")} aria-hidden />
                  </button>
                  {open && (
                    <p id={`faq-${i}`} className="px-5 pb-5 font-body text-[14px] font-light leading-relaxed text-muted-foreground sm:px-6">
                      {f.a}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Download, Pause, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { findProduct, productCategories } from "@/data/products";
import { company, productCount } from "@/data/company";
import { cn } from "@/lib/utils";

const slides = [
  {
    tab: "Since 1974",
    before: "Precision Copper & Alloy Manufacturing",
    accent: "Since 1974",
    description:
      "Leading manufacturers and exporters of high-quality Copper, Brass, Bronze, Titanium, and Inconel products for global industries.",
    product: findProduct("copper-products", "copper-tubes"),
  },
  {
    tab: "ISO Certified",
    before: "Premium Quality",
    accent: "Metal Products",
    description:
      "Brass tubes, copper nickel tubes, bronze rods, titanium tubes, inconel tubes and more — manufactured to international standards.",
    product: findProduct("brass-products", "brass-tubes"),
  },
  {
    tab: "Global Export",
    before: "Trusted by Industries",
    accent: "Worldwide",
    description: "Serving Automotive, Electrical, Marine, Oil & Gas, HVAC and Construction sectors.",
    product: findProduct("copper-alloys", "copper-nickel-tubes"),
  },
];

const facts = [
  { label: "Established", value: String(company.established) },
  { label: "Quality System", value: company.certification.standard },
  { label: "Product Range", value: `${productCategories.length} categories · ${productCount} products` },
  { label: "Manufacturing Base", value: "GIDC Umbergaon, Gujarat" },
];

// 2x2 grid on mobile, single row on desktop: hairlines between cells only
const factCellClass = [
  "",
  "border-l pl-4 sm:pl-6",
  "border-t lg:border-l lg:border-t-0 lg:pl-6",
  "border-l border-t pl-4 sm:pl-6 lg:border-t-0",
];

export const SLIDE_INTERVAL = 6500;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  const go = useCallback((i: number) => setActive((i + slides.length) % slides.length), []);
  const current = slides[active].product;

  // Auto-advance; restarting on every change keeps the timer in step with the progress bar
  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => go(active + 1), SLIDE_INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, playing, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Shreya Coppers highlights"
      className="relative isolate overflow-hidden bg-ink text-white"
    >
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/95 to-ink/70" />
      <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
      <div className="absolute -right-32 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-copper/15 blur-3xl" aria-hidden />

      <div className="container-wide pt-12 sm:pt-16 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Slide copy: every slide shares one grid cell so the height never jumps */}
          <div className="grid lg:col-span-6" aria-live={playing ? "off" : "polite"}>
            {slides.map((s, i) => {
              const Heading = i === 0 ? "h1" : "h2";
              const isActive = i === active;
              return (
                <div
                  key={s.tab}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${slides.length}`}
                  aria-hidden={!isActive}
                  className={cn(
                    "transition-all duration-700 ease-out [grid-area:1/1]",
                    isActive ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0",
                  )}
                >
                  <p className="eyebrow eyebrow-light mb-6">
                    {String(i + 1).padStart(2, "0")} · {s.tab}
                  </p>
                  <Heading className="display text-balance text-white">
                    {s.before} <span className="text-copper">{s.accent}</span>
                  </Heading>
                  <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{s.description}</p>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <Link to="/products" tabIndex={isActive ? undefined : -1} className="btn btn-primary">
                      Explore Our Products <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link to="/contact" tabIndex={isActive ? undefined : -1} className="btn btn-outline-light">
                      Request a Quote
                    </Link>
                    <Link
                      to="/catalogue"
                      tabIndex={isActive ? undefined : -1}
                      className="btn px-2 text-white/75 hover:text-white sm:px-4"
                    >
                      <Download className="h-4 w-4" aria-hidden /> Catalogue
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Product visual */}
          <div className="lg:col-span-6">
            <div className="corner-marks relative mx-auto aspect-[4/3] max-w-xl overflow-hidden bg-white lg:aspect-[5/4] lg:max-w-none">
              {slides.map((s, i) =>
                s.product?.product.image ? (
                  <img
                    key={s.tab}
                    src={s.product.product.image}
                    alt={i === active ? s.product.product.name : ""}
                    width={600}
                    height={600}
                    className={cn(
                      "absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out",
                      i === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                    )}
                  />
                ) : null,
              )}
              {current && (
                <Link
                  to={`/products/${current.category.slug}/${current.product.slug}`}
                  className="group absolute bottom-0 left-0 flex items-center gap-4 bg-ink px-5 py-4 text-white transition-colors hover:bg-copper-dark"
                >
                  <span>
                    <span className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-copper group-hover:text-white/80">
                      {current.category.title}
                    </span>
                    <span className="mt-1 block font-heading text-[15px] font-bold">{current.product.name}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-white/70" aria-hidden />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="mt-12 flex items-center gap-4 lg:mt-14">
          <div className="grid flex-1 grid-cols-3 gap-3 sm:gap-6" role="tablist" aria-label="Choose slide">
            {slides.map((s, i) => (
              <button
                key={s.tab}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Slide ${i + 1}: ${s.tab}`}
                onClick={() => go(i)}
                className="group py-2 text-left"
              >
                <span className="relative block h-0.5 overflow-hidden bg-white/15">
                  {i === active && (
                    <span
                      key={`${active}-${playing}`}
                      className={cn("absolute inset-0 origin-left bg-copper", playing && "animate-progress")}
                    />
                  )}
                </span>
                <span
                  className={cn(
                    "mt-3 hidden font-mono text-[11px] uppercase tracking-[0.16em] transition-colors sm:block",
                    i === active ? "text-white" : "text-white/45 group-hover:text-white/75",
                  )}
                >
                  {String(i + 1).padStart(2, "0")} {s.tab}
                </span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-copper hover:text-copper"
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              type="button"
              onClick={() => go(active - 1)}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-copper hover:text-copper"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(active + 1)}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-copper hover:text-copper"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <dl className="mt-12 grid grid-cols-2 border-t border-white/15 lg:mt-14 lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={`border-white/15 py-5 pr-4 sm:py-6 ${factCellClass[i]}`}>
              <dt className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-white/50">{f.label}</dt>
              <dd className="mt-2 font-heading text-[15px] font-bold text-white sm:text-lg">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

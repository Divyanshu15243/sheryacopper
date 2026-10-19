import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { categoryImage, productCategories } from "@/data/products";
import Reveal from "@/components/site/Reveal";

// Eight categories plus the catalogue card fill a 3 × 3 grid; the rest are one click away
const shown = productCategories.slice(0, 8);

export default function ProductCategories() {
  return (
    <section className="bg-white pb-8 pt-4 md:pt-8" aria-labelledby="categories-heading">
      <div className="container-wide">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="m-eyebrow mb-4">Our Products</span>
            <h2 id="categories-heading" className="m-h2">
              Precision-Engineered Copper &amp; Alloy Solutions
            </h2>
          </div>
          <Link to="/products" className="m-btn m-btn-gradient shrink-0 self-start md:self-auto">
            View All Products <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((cat, i) => (
            <Reveal as="article" key={cat.slug} delay={(i % 3) * 0.05} className="m-card group flex flex-col p-6 sm:p-7">
              <div className="mb-6 aspect-[16/9] overflow-hidden rounded bg-white">
                <img
                  src={categoryImage(cat)}
                  alt=""
                  loading="lazy"
                  width={600}
                  height={338}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="m-h3">{cat.title}</h3>
                <span className="shrink-0 font-body text-xs font-light text-steel">
                  {cat.products.length} {cat.products.length === 1 ? "product" : "products"}
                </span>
              </div>
              <p className="mt-3 flex-1 font-body text-[14px] font-light leading-relaxed text-muted-foreground">{cat.shortDesc}</p>
              <Link to={`/products/${cat.slug}`} className="m-btn m-btn-outline mt-6 min-h-[34px] self-start px-4 text-[13px]">
                Learn more
                <span className="sr-only"> about {cat.title}</span>
              </Link>
            </Reveal>
          ))}

          <Reveal as="article" delay={0.1} className="relative flex flex-col overflow-hidden rounded bg-copper-gradient-deep p-6 text-white sm:p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <span className="m-eyebrow mb-auto text-white/70">Catalogue</span>
            <h3 className="mt-16 font-body text-xl font-light tracking-[-0.02em] text-white">Download Product Catalogue</h3>
            <p className="mt-3 font-body text-[14px] font-light leading-relaxed text-white/85">
              Get detailed product ranges, specifications and standards for our copper, brass and alloy products.
            </p>
            <Link to="/catalogue" className="m-btn m-btn-ghost-light mt-6 min-h-[34px] self-start px-4 text-[13px]">
              Download <Download className="h-3.5 w-3.5" aria-hidden />
            </Link>
          </Reveal>
        </div>

        {/* Wave divider */}
        <svg viewBox="0 0 1200 80" fill="none" className="mx-auto mt-20 h-14 w-full max-w-5xl md:mt-24" aria-hidden>
          <defs>
            <linearGradient id="wave-copper" x1="0" x2="1">
              <stop offset="0" stopColor="hsl(var(--copper-deep))" />
              <stop offset="0.55" stopColor="hsl(var(--copper))" />
              <stop offset="1" stopColor="hsl(var(--copper-light))" />
            </linearGradient>
          </defs>
          <path
            d="M0 40 C 150 0, 300 0, 450 40 S 750 80, 900 40 S 1100 0, 1200 40"
            stroke="url(#wave-copper)"
            strokeWidth="1.5"
          />
        </svg>
      </div>
    </section>
  );
}

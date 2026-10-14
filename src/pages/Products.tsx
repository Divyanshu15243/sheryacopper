import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import { categoryImage, productCategories } from "@/data/products";
import { productCount } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function Products() {
  usePageMeta(
    "Our Products",
    "Complete range of copper, brass, and alloy products for global industries — brass tubes, copper tubes, copper nickel, bronze rods, titanium, inconel and SS tubes.",
  );

  return (
    <SiteLayout>
      <PageHero
        eyebrow={`${productCategories.length} categories · ${productCount} products`}
        title="Our Products"
        subtitle="Complete range of copper, brass, and alloy products for global industries"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link to="/catalogue" className="btn btn-outline-light">
            Download Catalogue
          </Link>
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12">
          {/* Category index */}
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Product categories" className="sticky top-[calc(var(--header-h)+32px)]">
              <p className="eyebrow mb-5">Categories</p>
              <ol className="border-t border-line">
                {productCategories.map((c, i) => (
                  <li key={c.slug}>
                    <a
                      href={`#${c.slug}`}
                      className="group flex items-baseline gap-3 border-b border-line py-3 text-[14px] transition-colors hover:text-copper-dark"
                    >
                      <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 font-semibold">{c.title}</span>
                      <span className="font-mono text-[11px] text-steel">{c.products.length}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-16 lg:col-span-9 lg:space-y-20">
            {productCategories.map((cat, i) => (
              <Reveal as="article" key={cat.slug}>
                <div id={cat.slug} className="grid gap-8 border-t border-ink pt-8 md:grid-cols-2 md:gap-10">
                  <Link to={`/products/${cat.slug}`} className="group block aspect-square overflow-hidden border border-line bg-paper">
                    <img
                      src={categoryImage(cat)}
                      alt={cat.title}
                      loading={i < 2 ? "eager" : "lazy"}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                      <span>
                        {cat.products.length} {cat.products.length === 1 ? "product" : "products"}
                      </span>
                    </div>
                    <h2 className="mt-4 text-[1.75rem] font-bold leading-tight">
                      <Link to={`/products/${cat.slug}`} className="hover:text-copper-dark">
                        {cat.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{cat.description}</p>
                    <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-center gap-2.5 text-[14px] text-ink">
                          <span className="h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/products/${cat.slug}`} className="btn btn-dark mt-8 self-start">
                      View {cat.title} <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>

                {cat.products.length > 1 && (
                  <ul className="mt-8 flex flex-wrap gap-2" aria-label={`${cat.title} products`}>
                    {cat.products.map((p) => (
                      <li key={p.slug}>
                        <Link
                          to={`/products/${cat.slug}/${p.slug}`}
                          className="inline-block border border-line bg-paper px-3 py-2 text-[13px] font-medium text-ink transition-colors hover:border-copper hover:bg-white"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

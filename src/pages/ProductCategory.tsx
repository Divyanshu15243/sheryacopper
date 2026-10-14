import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import { categoryImage, categoryMap, productCategories } from "@/data/products";
import { usePageMeta } from "@/hooks/use-page-meta";

const firstParagraph = (text?: string) => (text ? text.split("\n\n")[0] : "");

export default function ProductCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryMap[slug] : null;

  usePageMeta(category ? category.title : "Category Not Found", category?.description);

  if (!category) {
    return (
      <SiteLayout>
        <PageHero title="Category Not Found" breadcrumbs={[{ label: "Products", to: "/products" }]} />
        <section className="section bg-white">
          <div className="container-wide">
            <p className="lede">The product category you are looking for does not exist.</p>
            <Link to="/products" className="btn btn-dark mt-8">
              Back to Products
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const others = productCategories.filter((c) => c.slug !== category.slug);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Product Category"
        title={category.title}
        subtitle={category.shortDesc}
        breadcrumbs={[{ label: "Products", to: "/products" }]}
        image={categoryImage(category)}
        imageAlt={category.title}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to="/contact" className="btn btn-primary">
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a href="#range" className="btn btn-outline-light">
            View {category.products.length} {category.products.length === 1 ? "product" : "products"}
          </a>
        </div>
      </PageHero>

      {/* Overview */}
      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-4">Overview</p>
            <p className="font-heading text-xl font-semibold leading-relaxed tracking-tight text-ink sm:text-2xl">
              {category.description}
            </p>
          </Reveal>
          <Reveal delay={0.08} className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:col-span-6">
            <div className="bg-white p-6 sm:p-8">
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper-dark">Key Properties</h2>
              <ul className="mt-5 space-y-3">
                {category.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper p-6 sm:p-8">
              <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper-dark">Applications</h2>
              <ul className="mt-5 space-y-3">
                {category.applications.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-[15px] text-ink">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" aria-hidden />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Product range */}
      <section id="range" className="section bg-paper">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-6">
            <div>
              <p className="eyebrow mb-3">Product Range</p>
              <h2 className="h-section">Products in {category.title}</h2>
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-steel">
              {category.products.length} {category.products.length === 1 ? "item" : "items"}
            </span>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {category.products.map((p, i) => (
              <Reveal as="li" key={p.slug} delay={Math.min(i % 3, 2) * 0.05}>
                <Link
                  to={`/products/${category.slug}/${p.slug}`}
                  className="group flex h-full flex-col border border-line bg-white transition-colors hover:border-copper"
                >
                  <div className="aspect-[4/3] overflow-hidden border-b border-line bg-paper">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.name}
                        loading="lazy"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-mono text-[11px] text-steel">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="mt-2 text-lg font-bold leading-snug group-hover:text-copper-dark">{p.name}</h3>
                    {p.description && (
                      <p className="mt-2 line-clamp-3 text-[14px] leading-relaxed text-muted-foreground">
                        {firstParagraph(p.description)}
                      </p>
                    )}
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[13px] font-bold text-copper-dark">
                      View Details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-line bg-white py-14">
        <div className="container-wide">
          <h2 className="eyebrow mb-6">Other Categories</h2>
          <ul className="flex flex-wrap gap-2">
            {others.map((c) => (
              <li key={c.slug}>
                <Link
                  to={`/products/${c.slug}`}
                  className="inline-flex items-center gap-2 border border-line px-4 py-2.5 text-[14px] font-semibold text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white"
                >
                  {c.title} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </SiteLayout>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { categoryImage, productCategories } from "@/data/products";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";

export default function ProductCategories() {
  const [lead, ...rest] = productCategories;

  return (
    <section className="section bg-paper" aria-labelledby="categories-heading">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Product Categories"
          id="categories-heading"
          title="Copper, brass and alloy products for industrial applications"
          description="Brass tubes, copper nickel tubes, bronze rods, titanium tubes, inconel tubes and more — manufactured to international standards."
          action={
            <Link to="/products" className="btn btn-outline">
              View all products <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          }
        />

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="bg-white sm:col-span-2 lg:row-span-2">
            <Link to={`/products/${lead.slug}`} className="group flex h-full flex-col">
              <div className="aspect-[4/3] overflow-hidden bg-white">
                <img
                  src={categoryImage(lead)}
                  alt={lead.title}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-line p-6 sm:p-8">
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                  <span>01</span>
                  <span>{lead.products.length} products</span>
                </div>
                <h3 className="mt-4 text-2xl font-bold sm:text-[1.75rem]">{lead.title}</h3>
                <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-foreground">{lead.description}</p>
                <span className="link-arrow mt-auto pt-6">
                  Explore {lead.title} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </Link>
          </Reveal>

          {rest.map((cat, i) => (
            <Reveal key={cat.slug} delay={Math.min(i, 3) * 0.05} className="bg-white">
              <Link to={`/products/${cat.slug}`} className="group flex h-full sm:flex-col">
                <div className="aspect-square w-28 shrink-0 overflow-hidden bg-white sm:w-auto">
                  <img
                    src={categoryImage(cat)}
                    alt={cat.title}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-col border-l border-line p-4 sm:border-l-0 sm:border-t sm:p-5">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-steel">
                    <span>{String(i + 2).padStart(2, "0")}</span>
                    <span>
                      {cat.products.length} {cat.products.length === 1 ? "product" : "products"}
                    </span>
                  </div>
                  <h3 className="mt-3 flex items-start justify-between gap-3 text-[17px] font-bold leading-snug">
                    {cat.title}
                    <ArrowUpRight
                      className="mt-0.5 h-4 w-4 shrink-0 text-steel transition-colors group-hover:text-copper-dark"
                      aria-hidden
                    />
                  </h3>
                  <p className="mt-2 hidden text-[14px] leading-relaxed text-muted-foreground sm:block">{cat.shortDesc}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

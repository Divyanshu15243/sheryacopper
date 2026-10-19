import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { findProduct } from "@/data/products";
import Reveal from "@/components/site/Reveal";

const featured: [string, string][] = [
  ["brass-products", "brass-square-tubes"],
  ["brass-products", "brass-fittings"],
  ["copper-products", "copper-fittings"],
  ["brass-products", "naval-brass-plates"],
  ["copper-alloys", "copper-nickel-fittings"],
];

const products = featured.map(([c, p]) => findProduct(c, p)).filter((r): r is NonNullable<typeof r> => r !== null);

export default function HotProducts() {
  return (
    <section className="bg-white pb-20 md:pb-28" aria-labelledby="hot-heading">
      <div className="container-wide">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="m-eyebrow mb-4">Most Requested</span>
            <h2 id="hot-heading" className="m-h2">
              Our Hot Products
            </h2>
          </div>
          <Link to="/products" className="m-btn m-btn-outline shrink-0 self-start md:self-auto">
            Browse Catalogue <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-5">
          {products.map(({ category, product }, i) => (
            <Reveal as="li" key={product.slug} delay={i * 0.05}>
              <Link to={`/products/${category.slug}/${product.slug}`} className="m-card group block h-full p-3 sm:p-4">
                <div className="aspect-square overflow-hidden rounded bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 font-body text-[10.5px] font-light uppercase tracking-[0.18em] text-steel">{category.title}</p>
                <h3 className="mt-1.5 flex items-start justify-between gap-2 font-body text-[15px] font-normal leading-snug text-ink">
                  {product.name}
                  <ArrowUpRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-steel transition-colors group-hover:text-copper"
                    aria-hidden
                  />
                </h3>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

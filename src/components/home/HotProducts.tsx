import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { findProduct } from "@/data/products";
import SectionHeader from "@/components/site/SectionHeader";
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
    <section className="section bg-white" aria-labelledby="hot-heading">
      <div className="container-wide">
        <SectionHeader
          id="hot-heading"
          eyebrow="Our Hot Products"
          title="Most requested products"
          description="Explore our most popular copper and brass products trusted by industries worldwide"
        />

        <ul className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 xl:grid-cols-5">
          {products.map(({ category, product }, i) => (
            <Reveal as="li" key={product.slug} delay={i * 0.05}>
              <Link to={`/products/${category.slug}/${product.slug}`} className="group block">
                <div className="aspect-square overflow-hidden border border-line bg-paper transition-colors group-hover:border-copper">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-4 font-mono text-[10.5px] uppercase tracking-[0.16em] text-steel">{category.title}</p>
                <h3 className="mt-1.5 text-[16px] font-bold leading-snug group-hover:text-copper-dark">{product.name}</h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-copper-dark">
                  View details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

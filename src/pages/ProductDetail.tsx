import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Mail, Phone, Send } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import Reveal from "@/components/site/Reveal";
import { categoryMap, findProduct } from "@/data/products";
import { company } from "@/data/company";
import { usePageMeta } from "@/hooks/use-page-meta";

export default function ProductDetail() {
  const { slug, productSlug } = useParams();
  const result = slug && productSlug ? findProduct(slug, productSlug) : null;
  const product = result?.product;
  const category = result?.category;

  usePageMeta(
    product ? `${product.name} Manufacturers` : "Product Not Found",
    product?.description?.split("\n\n")[0],
  );

  if (!product || !category) {
    const parent = slug ? categoryMap[slug] : undefined;
    return (
      <SiteLayout>
        <PageHero
          title="Product Not Found"
          breadcrumbs={[
            { label: "Products", to: "/products" },
            ...(parent ? [{ label: parent.title, to: `/products/${parent.slug}` }] : []),
          ]}
        />
        <section className="section bg-white">
          <div className="container-wide">
            <p className="lede">The product you are looking for does not exist or may have moved.</p>
            <Link to={parent ? `/products/${parent.slug}` : "/products"} className="btn btn-dark mt-8">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {parent?.title ?? "Products"}
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  const paragraphs = (product.description ?? "").split("\n\n").filter(Boolean);
  const specifications = product.specifications ?? [];
  const features = product.features ?? [];
  const applications = product.applications ?? [];
  const related = category.products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const quoteLink = `/contact?product=${encodeURIComponent(product.name)}`;
  const mailLink = `${company.email.href}?subject=${encodeURIComponent(`Enquiry: ${product.name}`)}`;

  return (
    <SiteLayout>
      <PageHero
        eyebrow={category.title}
        title={product.name}
        subtitle={paragraphs[0] && paragraphs[0].length < 260 ? paragraphs[0] : undefined}
        breadcrumbs={[
          { label: "Products", to: "/products" },
          { label: category.title, to: `/products/${category.slug}` },
        ]}
        image={product.image} imageFit="contain"
        imageAlt={product.name}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link to={quoteLink} className="btn btn-primary">
            <Send className="h-4 w-4" aria-hidden /> Request Quote
          </Link>
          {specifications.length > 0 && (
            <a href="#specifications" className="btn btn-outline-light">
              View Specifications
            </a>
          )}
        </div>
      </PageHero>

      <section className="section bg-white">
        <div className="container-wide grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-8">
            {/* Mobile product image (desktop shows it in the hero) */}
            {product.image && (
              <div className="mb-10 aspect-square max-w-md overflow-hidden border border-line bg-paper lg:hidden">
                <img src={product.image} alt={product.name} width={600} height={600} className="h-full w-full object-cover" />
              </div>
            )}

            <Reveal>
              <p className="eyebrow mb-4">Product Overview</p>
              <h2 className="h-section text-balance">
                {product.name} <span className="text-copper-dark">Manufacturers</span>
              </h2>
              <div className="prose-body mt-8 text-[16px]">
                {paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <p className="mt-8 border-l-2 border-copper bg-paper px-6 py-5 text-[15px] text-ink">
                In addition to this, the products offered to the clients are manufactured as per the predefined industrial
                standards.
              </p>
            </Reveal>

            {specifications.length > 0 && (
              <Reveal className="mt-16">
                <div id="specifications">
                  <p className="eyebrow mb-4">Technical Data</p>
                  <h2 className="text-2xl font-bold sm:text-3xl">Specifications &amp; Dimensions</h2>
                  <div className="mt-6 overflow-x-auto border border-line">
                    <table className="w-full min-w-[420px] text-left text-[15px]">
                      <caption className="sr-only">{product.name} specifications</caption>
                      <thead className="bg-ink text-white">
                        <tr>
                          <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                            Property
                          </th>
                          <th scope="col" className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em]">
                            Value
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line">
                        {specifications.map((spec, i) => (
                          <tr key={spec.label} className={i % 2 === 1 ? "bg-paper" : "bg-white"}>
                            <th scope="row" className="w-1/3 px-5 py-4 font-semibold text-ink">
                              {spec.label}
                            </th>
                            <td className="px-5 py-4 font-mono text-[14px] text-ink">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            )}

            <Reveal className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2">
              {applications.length > 0 && (
                <div className="bg-white p-6 sm:p-8">
                  <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper-dark">Applications</h2>
                  <ul className="mt-5 space-y-3">
                    {applications.map((a) => (
                      <li key={a} className="flex items-start gap-3 text-[15px] text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-ink" aria-hidden />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {features.length > 0 && (
                <div className="bg-paper p-6 sm:p-8">
                  <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-copper-dark">Features</h2>
                  <ul className="mt-5 space-y-3">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-[15px] text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-copper" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
          </div>

          {/* Enquiry panel */}
          <aside className="lg:col-span-4">
            <div className="border border-line bg-paper lg:sticky lg:top-[calc(var(--header-h)+32px)]">
              <div className="border-b border-line p-6 sm:p-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-copper-dark">Product Enquiry</p>
                <h2 className="mt-3 text-xl font-bold">Request a quote for {product.name}</h2>
                <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                  To help us respond accurately, include the grade, dimensions, quantity and any applicable standard in your
                  enquiry.
                </p>
                <Link to={quoteLink} className="btn btn-primary mt-6 w-full">
                  <Send className="h-4 w-4" aria-hidden /> Request Quote
                </Link>
              </div>
              <div className="space-y-4 p-6 text-[14px] sm:p-8">
                <a href={company.phone.href} className="flex items-center gap-3 font-semibold text-ink hover:text-copper-dark">
                  <Phone className="h-4 w-4 text-copper-dark" aria-hidden /> {company.phone.display}
                </a>
                <a href={mailLink} className="flex items-center gap-3 break-all font-semibold text-ink hover:text-copper-dark">
                  <Mail className="h-4 w-4 shrink-0 text-copper-dark" aria-hidden /> {company.email.display}
                </a>
                <Link to={`/products/${category.slug}`} className="link-arrow pt-2">
                  <ArrowLeft className="h-4 w-4" aria-hidden /> Back to {category.title}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section border-t border-line bg-paper">
          <div className="container-wide">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3">{category.title}</p>
                <h2 className="h-section">Related products</h2>
              </div>
              <Link to={`/products/${category.slug}`} className="link-arrow">
                View all {category.products.length} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {related.map((p) => (
                <li key={p.slug}>
                  <Link to={`/products/${category.slug}/${p.slug}`} className="group block">
                    <div className="aspect-square overflow-hidden border border-line bg-white transition-colors group-hover:border-copper">
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
                    <h3 className="mt-3 text-[15px] font-bold leading-snug group-hover:text-copper-dark">{p.name}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection />
    </SiteLayout>
  );
}

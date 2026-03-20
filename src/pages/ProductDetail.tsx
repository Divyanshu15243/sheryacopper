import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Send } from "lucide-react";
import { findProduct } from "@/data/products";
import brassTubesImage from "@/assets/products/brass_tubes04.png";

export default function ProductDetail() {
  const { slug, productSlug } = useParams();
  const [activeTab, setActiveTab] = useState<"applications" | "features" | "specifications">("applications");

  const result = slug && productSlug ? findProduct(slug, productSlug) : null;

  const productName = result?.product.name ?? (productSlug
    ? productSlug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")
    : "Product");

  const product = result?.product;
  const category = result?.category;

  const description = product?.description ??
    `Shreya Coppers manufactures and supplies high-quality ${productName} that meets international standards. Our products are manufactured using premium raw materials and advanced manufacturing processes to ensure superior quality, durability, and performance.`;

  const features = product?.features ?? ["Premium quality materials", "Manufactured to international standards", "Available in custom sizes", "Competitive pricing", "Timely delivery"];
  const applications = product?.applications ?? ["Industrial applications", "Engineering", "Construction", "Manufacturing"];
  const specifications = product?.specifications ?? [];

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title={productName} subtitle={category?.title} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <Link to={`/products/${slug}`} className="inline-flex items-center gap-1 text-primary font-medium text-sm mb-8 hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to {category?.title ?? "Category"}
          </Link>

          {/* Main content - like the screenshot */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                {productName} <span className="copper-text-gradient">Manufacturers</span>
              </h2>
              <div className="w-12 h-1 copper-gradient rounded mb-6" />

              {description.split("\n\n").map((para, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-[15px]">
                  {para}
                </p>
              ))}

              {/* Highlight box */}
              <div className="border-l-4 border-primary bg-surface rounded-r-lg p-5 my-8">
                <p className="text-sm text-foreground italic">
                  In addition to this, the products offered to the clients are manufactured as per the predefined industrial standards.
                </p>
              </div>
            </motion.div>

            {/* Right: Product image placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="bg-surface rounded-lg aspect-[4/3] flex items-center justify-center sticky top-28 overflow-hidden">
                <img src={product?.image || brassTubesImage} alt={productName} className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Specifications table */}
          {specifications.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16"
            >
              <h3 className="font-heading text-xl font-bold mb-6">
                Specifications & <span className="copper-text-gradient">Dimensions</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-lg overflow-hidden">
                  <thead>
                    <tr className="copper-gradient">
                      <th className="px-6 py-3 text-left text-sm font-heading font-semibold text-primary-foreground">Property</th>
                      <th className="px-6 py-3 text-left text-sm font-heading font-semibold text-primary-foreground">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? "bg-background" : "bg-surface"}>
                        <td className="px-6 py-3 text-sm font-medium">{spec.label}</td>
                        <td className="px-6 py-3 text-sm text-muted-foreground">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Tabs section: Applications, Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex gap-1 border-b border-border mb-8">
              {(["applications", "features", ...(specifications.length > 0 ? ["specifications"] as const : [])] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  className={`px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide transition-colors border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "applications" && (
              <div className="grid sm:grid-cols-2 gap-3">
                {applications.map((app) => (
                  <div key={app} className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-sm">{app}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "features" && (
              <div className="grid sm:grid-cols-2 gap-3">
                {features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <div className="w-2 h-2 rounded-full copper-gradient shrink-0" />
                    <span className="text-sm">{feat}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "specifications" && specifications.length > 0 && (
              <div className="grid sm:grid-cols-2 gap-3">
                {specifications.map((spec) => (
                  <div key={spec.label} className="flex items-center gap-3 p-3 rounded-lg bg-surface">
                    <span className="text-sm font-medium min-w-[120px]">{spec.label}:</span>
                    <span className="text-sm text-muted-foreground">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Request Quote inline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="copper-gradient inline-flex items-center gap-2 px-8 py-4 rounded font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              <Send className="h-4 w-4" /> Request Quote for {productName}
            </Link>
          </motion.div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

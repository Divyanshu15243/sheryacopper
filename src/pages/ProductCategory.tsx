import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { ArrowRight } from "lucide-react";
import { categoryMap } from "@/data/products";
import brassTubesImage from "@/assets/products/63-37-brass-tube.png";

export default function ProductCategory() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryMap[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen">
        <Header />
        <PageHero title="Category Not Found" />
        <div className="section-padding text-center">
          <Link to="/products" className="text-primary font-medium">← Back to Products</Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title={category.title} />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground leading-relaxed text-lg">{category.description}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {category.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full copper-gradient shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img src={category.products[0]?.image || category.image} alt={category.title} className="rounded-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold mb-8">Products in {category.title}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background p-6 rounded-lg card-shadow hover:copper-glow transition-shadow group"
              >
                {p.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img src={p.image} alt={p.name} className="w-full h-32 object-cover" />
                  </div>
                )}
                <h3 className="font-heading text-base font-semibold group-hover:text-primary transition-colors">{p.name}</h3>
                <Link
                  to={`/products/${slug}/${p.slug}`}
                  className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-medium"
                >
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="font-heading text-2xl font-bold mb-6">Applications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.applications.map((app) => (
              <div key={app} className="p-4 border border-border rounded-lg text-center text-sm font-medium hover:border-primary transition-colors">
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

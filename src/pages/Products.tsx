import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { productCategories } from "@/data/products";

export default function Products() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="Our Products" subtitle="Complete range of copper, brass, and alloy products for global industries" />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link to={`/products/${cat.slug}`} className="group block bg-card rounded-lg overflow-hidden card-shadow">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={cat.products[0]?.image || cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{cat.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-sm text-primary font-medium">
                      View Products <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

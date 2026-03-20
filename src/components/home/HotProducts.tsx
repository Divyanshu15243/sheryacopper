import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { productCategories } from "@/data/products";

// Get featured products from different categories
const products = [
  { ...productCategories[0].products[6], categorySlug: "brass-products" }, // Brass Square Tubes
  { ...productCategories[0].products[17], categorySlug: "brass-products" }, // Brass Fittings
  { ...productCategories[1].products[6], categorySlug: "copper-products" }, // Copper Fittings
  { ...productCategories[0].products[16], categorySlug: "brass-products" }, // Naval Brass Plates
  { ...productCategories[2].products[4], categorySlug: "copper-alloys" }, // Copper Nickel Fittings
];

export default function HotProducts() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Our <span className="copper-text-gradient">Hot Products</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular copper and brass products trusted by industries worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={`/products/${product.categorySlug}/${product.slug}`}
                className="group block bg-card rounded-lg overflow-hidden card-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-sm font-semibold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary font-medium">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

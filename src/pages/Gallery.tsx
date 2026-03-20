import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { X } from "lucide-react";
import { productCategories } from "@/data/products";

import brassProducts from "@/assets/categories/brass-products.jpg";
import copperProducts from "@/assets/categories/copper-products.jpg";
import copperAlloys from "@/assets/categories/copper-alloys.jpg";
import bronzeRod from "@/assets/categories/bronze-rod.jpg";
import titaniumTubes from "@/assets/categories/titanium-tubes.jpg";
import inconelTubes from "@/assets/categories/inconel-tubes.jpg";
import lightningArrester from "@/assets/categories/lightning-arrester.jpg";
import cathodeAnode from "@/assets/categories/cathode-anode-hanger.jpg";
import factoryImg from "@/assets/factory.jpg";
import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import qualityLab from "@/assets/infrastructure/quality-lab.jpg";
import warehouse from "@/assets/infrastructure/warehouse.jpg";
import constructionImg from "@/assets/applications/construction.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import electricalImg from "@/assets/applications/electrical.jpg";
import hvacImg from "@/assets/applications/hvac.jpg";
import plumbingImg from "@/assets/applications/plumbing.jpg";
import cablesImg from "@/assets/applications/cables.jpg";

const categories = ["All", "Products", "Factory", "Applications"];

// Collect all product images from productCategories
const productImages = productCategories.flatMap((category) =>
  category.products
    .filter((product) => product.image)
    .map((product) => ({
      src: product.image!,
      label: product.name,
      category: "Products",
    }))
);

const images = [
  ...productImages,
  { src: factoryImg, label: "Manufacturing Unit", category: "Factory" },
  { src: factoryFloor, label: "Factory Floor", category: "Factory" },
  { src: qualityLab, label: "Quality Lab", category: "Factory" },
  { src: warehouse, label: "Warehouse", category: "Factory" },
  { src: constructionImg, label: "Construction", category: "Applications" },
  { src: automotiveImg, label: "Automotive", category: "Applications" },
  { src: electricalImg, label: "Electrical", category: "Applications" },
  { src: hvacImg, label: "HVAC", category: "Applications" },
  { src: plumbingImg, label: "Plumbing", category: "Applications" },
  { src: cablesImg, label: "Cables", category: "Applications" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="Image Gallery" subtitle="Explore our products, factory, and application areas" />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full font-heading text-sm font-medium uppercase tracking-wide transition-all ${
                  filter === cat
                    ? "copper-gradient text-primary-foreground"
                    : "bg-surface text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.label}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                  onClick={() => setLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div>
                      <span className="font-heading text-sm font-semibold text-primary-foreground">{img.label}</span>
                      <span className="block text-xs text-primary-foreground/60 mt-0.5">{img.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-graphite/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground" onClick={() => setLightbox(null)}>
              <X className="h-8 w-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.label}
              className="max-w-full max-h-[85vh] rounded-lg object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

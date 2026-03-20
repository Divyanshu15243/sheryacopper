import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="copper-gradient py-16">
      <div className="container-wide px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
            Looking for High Quality Copper Products?
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Contact us today for competitive pricing and expert consultation
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-foreground px-8 py-3.5 rounded font-heading text-sm font-semibold text-foreground uppercase tracking-wide hover:bg-primary-foreground/90 transition-colors"
          >
            Get a Quote <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

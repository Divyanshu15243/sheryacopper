import { motion } from "framer-motion";
import { Car, Zap, Building2, Fuel, Ship, Wind } from "lucide-react";

const industries = [
  { icon: Car, name: "Automotive", desc: "Precision components for automotive systems" },
  { icon: Zap, name: "Electrical", desc: "High conductivity solutions for electrical applications" },
  { icon: Building2, name: "Construction", desc: "Durable materials for building infrastructure" },
  { icon: Fuel, name: "Oil & Gas", desc: "Corrosion-resistant products for energy sector" },
  { icon: Ship, name: "Marine", desc: "Salt-water resistant alloys for marine use" },
  { icon: Wind, name: "HVAC", desc: "Heat exchange tubes and components" },
];

export default function IndustriesServed() {
  return (
    <section className="section-padding graphite-gradient">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
            Industries <span className="copper-text-gradient">We Serve</span>
          </h2>
          <p className="mt-3 text-primary-foreground/60 max-w-2xl mx-auto">
            Our products power critical applications across diverse industrial sectors worldwide
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-6 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary/40 hover:bg-primary-foreground/10 transition-all group"
            >
              <ind.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-sm font-semibold text-primary-foreground">{ind.name}</h3>
              <p className="text-xs text-primary-foreground/50 mt-1 hidden md:block">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

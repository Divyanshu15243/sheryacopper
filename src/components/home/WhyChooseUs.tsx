import { motion } from "framer-motion";
import { Shield, Factory, Users, Truck } from "lucide-react";

const features = [
  { icon: Shield, title: "Premium Quality Materials", desc: "All products undergo rigorous quality testing to meet international standards." },
  { icon: Factory, title: "Modern Manufacturing", desc: "State-of-the-art machinery and advanced manufacturing processes." },
  { icon: Users, title: "Expert Engineers", desc: "Highly skilled team with decades of metallurgical expertise." },
  { icon: Truck, title: "Reliable Delivery", desc: "On-time delivery with global export capabilities to all major markets." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            Why Choose <span className="copper-text-gradient">Shreya Coppers</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 bg-background rounded-lg card-shadow hover:copper-glow transition-shadow"
            >
              <div className="w-14 h-14 copper-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Award, Globe, Factory, Calendar } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";

const stats = [
  { icon: Calendar, value: "50+", label: "Years Experience" },
  { icon: Award, value: "ISO", label: "Certified" },
  { icon: Globe, value: "Global", label: "Export Network" },
  { icon: Factory, value: "Advanced", label: "Manufacturing" },
];

export default function AboutCompany() {
  return (
    <section className="section-padding bg-surface">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src={factoryImg} alt="Shreya Coppers factory" className="rounded-lg w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 copper-gradient p-6 rounded-lg hidden md:block">
              <span className="font-heading text-4xl font-bold text-primary-foreground">50+</span>
              <p className="text-sm text-primary-foreground/80">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-2">
              Welcome to <span className="copper-text-gradient">Shreya Coppers</span>
            </h2>
            <p className="text-sm text-primary font-heading font-semibold uppercase tracking-wider mb-6">
              Tube Manufacturers · Copper Alloy · Tube Manufacturers
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Established in the year 1974, our Shreya coppers is counted as one of the leading manufacturers, exporters, and suppliers of Industrial Products like Pipes, Tubes, Capillary pipes & Tubes, Flanges, Pipe fittings of metals like Copper, Copper Alloy, Titanium, and Brass.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With rich industrial experience and powerful manufacturing setup, we are producing quality copper products. Our committed and qualified team works relentlessly to provide the best manufacturing and innovative customer experience possible.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-background rounded-lg card-shadow">
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-heading text-lg font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

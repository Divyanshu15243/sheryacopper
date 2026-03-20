import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Factory, Shield, Wrench, Warehouse, Cpu, Users } from "lucide-react";
import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import qualityLab from "@/assets/infrastructure/quality-lab.jpg";
import warehouseImg from "@/assets/infrastructure/warehouse.jpg";
import factoryImg from "@/assets/factory.jpg";

const facilities = [
  { image: factoryFloor, title: "Manufacturing Floor", description: "State-of-the-art CNC machines and production lines for precision manufacturing of copper, brass, and alloy products." },
  { image: qualityLab, title: "Quality Control Lab", description: "Advanced testing and inspection equipment ensuring every product meets international quality standards." },
  { image: warehouseImg, title: "Storage & Warehouse", description: "Well-organized warehouse facility for efficient inventory management and timely dispatch of orders." },
  { image: factoryImg, title: "Main Production Unit", description: "Our primary manufacturing facility at GIDC Umbergaon, spread across a large industrial area." },
];

const capabilities = [
  { icon: Factory, title: "Modern Machinery", desc: "CNC machines, extrusion presses, and drawing machines for precision manufacturing" },
  { icon: Shield, title: "Quality Assurance", desc: "In-house testing lab with spectrometers, tensile testers, and dimensional instruments" },
  { icon: Wrench, title: "Tool & Die Shop", desc: "In-house tool room for custom die manufacturing and maintenance" },
  { icon: Warehouse, title: "Raw Material Storage", desc: "Dedicated storage for raw materials ensuring uninterrupted production" },
  { icon: Cpu, title: "Process Automation", desc: "Automated processes for consistent quality and higher production efficiency" },
  { icon: Users, title: "Skilled Workforce", desc: "Experienced team of engineers, technicians and quality inspectors" },
];

export default function Infrastructure() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="Infrastructure" subtitle="Advanced manufacturing facilities powering precision metal products" />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold">
              Our <span className="copper-text-gradient">Facilities</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Our manufacturing unit at GIDC Umbergaon is equipped with the latest technology and machinery for producing world-class copper and alloy products.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8">
            {facilities.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group overflow-hidden rounded-lg card-shadow"
              >
                <div className="overflow-hidden aspect-[16/10]">
                  <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 bg-surface">
                  <h3 className="font-heading text-lg font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold">
              Manufacturing <span className="copper-text-gradient">Capabilities</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-8 rounded-lg card-shadow text-center group hover:bg-graphite transition-colors duration-300"
              >
                <cap.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary-foreground transition-colors">{cap.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

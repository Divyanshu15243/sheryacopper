import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import { Award, Shield, Star, CheckCircle } from "lucide-react";
import isoCertImg from "@/assets/awards/iso-certificate.jpg";

const awards = [
  {
    title: "ISO 9001:2008 Certification",
    description: "Certified quality management system ensuring consistent product quality and customer satisfaction across all manufacturing processes.",
    icon: Shield,
    year: "Certified",
  },
  {
    title: "IAF Accreditation",
    description: "International Accreditation Forum recognition for meeting global standards in manufacturing and quality assurance.",
    icon: Award,
    year: "Accredited",
  },
  {
    title: "Excellence in Export",
    description: "Recognized for outstanding contribution to export of copper and alloy products to 30+ countries worldwide.",
    icon: Star,
    year: "Awarded",
  },
  {
    title: "Quality Excellence Award",
    description: "Awarded for maintaining highest quality standards in copper, brass, and alloy product manufacturing.",
    icon: CheckCircle,
    year: "Awarded",
  },
];

export default function Awards() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="Awards & Certifications" subtitle="Recognized for excellence in quality and manufacturing" />

      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={isoCertImg} alt="ISO Certification" className="rounded-lg w-full object-cover aspect-[4/3] card-shadow" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">
                Our <span className="copper-text-gradient">Certifications</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Shreya Coppers is an ISO 9001:2008 certified company. Our quality management systems are designed to ensure the highest standards in manufacturing copper, brass, titanium, and alloy products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to continuous improvement and adhere to international standards across all our manufacturing processes, from raw material procurement to final product delivery.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-8 rounded-lg card-shadow text-center group hover:bg-graphite transition-colors duration-300"
              >
                <award.icon className="h-10 w-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-xs font-heading uppercase tracking-wider text-primary mb-2">{award.year}</div>
                <h3 className="font-heading text-lg font-semibold mb-3 group-hover:text-primary-foreground transition-colors">{award.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

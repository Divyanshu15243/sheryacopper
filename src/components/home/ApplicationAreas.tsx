import { motion } from "framer-motion";
import constructionImg from "@/assets/applications/construction.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import electricalImg from "@/assets/applications/electrical.jpg";
import cablesImg from "@/assets/applications/cables.jpg";
import hvacImg from "@/assets/applications/hvac.jpg";
import plumbingImg from "@/assets/applications/plumbing.jpg";

const areas = [
  { image: constructionImg, label: "Construction" },
  { image: automotiveImg, label: "Automotive" },
  { image: electricalImg, label: "Electrical" },
  { image: cablesImg, label: "Cables & Wiring" },
  { image: hvacImg, label: "HVAC & Plumbing" },
  { image: plumbingImg, label: "Pipe Fittings" },
];

export default function ApplicationAreas() {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold">
            Application <span className="copper-text-gradient">Areas</span>
          </h2>
          <div className="w-12 h-1 copper-gradient mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={area.image}
                alt={area.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="font-heading text-lg font-semibold text-primary-foreground">
                  {area.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

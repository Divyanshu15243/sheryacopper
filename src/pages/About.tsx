import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/layout/PageHero";
import CTASection from "@/components/home/CTASection";
import { Award, Globe, Factory, Calendar, Users, CheckCircle, Shield, Wrench, BarChart3 } from "lucide-react";
import factoryImg from "@/assets/factory.jpg";
import certificate1 from "@/assets/shrey-certificate-1024x1024.png";
import certificate2 from "@/assets/certificate2-1024x1024.png";

const milestones = [
  "Established in 1974 in Gujarat, India",
  "ISO certified quality management systems",
  "Export to 30+ countries worldwide",
  "State-of-the-art manufacturing facility at GIDC Umbergaon",
  "Comprehensive range of copper, brass, and alloy products",
  "Trusted by industries across automotive, marine, construction sectors",
];

const whyChooseItems = [
  {
    icon: Shield,
    title: "Quality",
    description: "Our offered range of products is widely admired by consumers for its reliability, ease of install, high efficiency, low maintenance, and outstanding results. In their production process, we ensure that only high-grade raw material is used along with the ultra-modern equipment and machinery and that they are designed in compliance with relevant international standards to meet the world-class quality level.",
  },
  {
    icon: Factory,
    title: "Infrastructure",
    description: "We have a well-facilitated infrastructure that is equipped with all the latest technologies and machinery and this is further divided into various departments like for production, quality assurance, administration, and client help desk. Our sophisticated machinery and talented workforce assist us in manufacturing products exactly according to the requirements of the customers.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "The tremendous reputation that we have achieved over these years is due to the diligent efforts of our experienced professionals. Our team of professionals is well aware of their duties and responsibilities and their main motive is to make sure that the work allotted to them is done properly and completed on time. All our products are manufactured precisely.",
  },
];

const experienceData = [
  { label: "Financial Services", value: 87 },
  { label: "Business Services", value: 75 },
  { label: "Consumer Products", value: 63 },
  { label: "Energy and Environment", value: 50 },
];

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <PageHero title="About Us" subtitle="Five decades of excellence in copper and alloy manufacturing" />

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src={factoryImg} alt="Factory" className="rounded-lg w-full object-cover aspect-[4/3]" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">
                Welcome to <span className="copper-text-gradient">Shreya Coppers</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in the year 1974, we, Shreya Coppers is counted as one of the leading manufacturers, exporters, and suppliers of Industrial Products like Pipes, Tubes, Capillary pipes & Tubes, Flanges, Pipe fittings of metals like Copper, Copper Alloy, Titanium, and Brass.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Based in Valsad, Gujarat Shreya Coppers is an ISO 9001 2008 certified company catering to the requirement of several industrial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our company has gained a prominent position in the national and foreign markets by delivering high-end products. We are the manufacturers serving national and international markets with the range of quality products, empowered by the latest technology and a well-qualified expertise team.
              </p>
              <div className="border-l-4 border-primary pl-4 mt-6">
                <p className="text-muted-foreground italic">
                  We see ourselves as a forward looking group of passionate property professionals with the relevant experience to match.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, value: "50+", label: "Years Experience" },
              { icon: Award, value: "ISO", label: "Certified Quality" },
              { icon: Globe, value: "30+", label: "Countries Exported" },
              { icon: Users, value: "500+", label: "Happy Clients" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-background rounded-lg card-shadow"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-heading text-3xl font-bold copper-text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold">
              Why <span className="copper-text-gradient">Choose Us</span>
            </h2>
            <div className="w-12 h-1 copper-gradient mx-auto mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-surface p-8 rounded-lg card-shadow"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-heading text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Experience */}
      <section className="section-padding bg-surface">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Our Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl font-bold mb-6">
                Our <span className="copper-text-gradient">Mission</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in the year 1974, we, Shreya coppers is counted as one of the leading manufacturers, exporters, and suppliers of Industrial Products like Pipes, Tubes, Capillary pipes & Tubes, Flanges, Pipe fittings of metals like Copper, Copper Alloy, Titanium, and Brass. Based in Valsad, Gujarat Shreya coppers is an ISO 9001 2008 certified company catering to the requirement of several industrial sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our company has gained a prominent position in the national and foreign markets by delivering high-end products. We are the manufacturers serving national and international markets with the range of quality products, empowered by the latest technology and a well-qualified expertise team.
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {[
                  "Work fewer hours & make money",
                  "You'll get more done in less time",
                  "Phenomenal success in our target",
                  "Leadership skills to manage team",
                  "Retain, high-paying customers",
                  "Generating millions of dollars",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Our Experience */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-graphite rounded-lg p-8 sm:p-10"
            >
              <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-8">
                Our <span className="copper-text-gradient">Experience</span>
              </h2>
              <div className="space-y-6">
                {experienceData.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-heading text-primary-foreground/80">{item.label}</span>
                      <span className="text-sm font-heading text-primary">{item.value}%</span>
                    </div>
                    <div className="w-full h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full copper-gradient rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold">
              Our <span className="copper-text-gradient">Certifications</span>
            </h2>
            <div className="w-12 h-1 copper-gradient mx-auto mt-4" />
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Quality assured and internationally certified manufacturing standards
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-surface p-6 rounded-lg card-shadow"
            >
              <img src={certificate1} alt="Shreya Coppers Certificate" className="w-full h-auto rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface p-6 rounded-lg card-shadow"
            >
              <img src={certificate2} alt="ISO Certificate" className="w-full h-auto rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="copper-gradient py-16 md:py-20">
      <div className="container-wide px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-lg text-primary-foreground/80 max-w-2xl"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-4 w-16 h-1 bg-primary-foreground/60 rounded" />
      </div>
    </section>
  );
}

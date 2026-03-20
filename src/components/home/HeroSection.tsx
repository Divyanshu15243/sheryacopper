import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const slides = [
  {
    image: heroBg,
    badge: "Since 1974",
    heading: (
      <>
        Precision Copper & Alloy Manufacturing
        <span className="copper-text-gradient"> Since 1974</span>
      </>
    ),
    description:
      "Leading manufacturers and exporters of high-quality Copper, Brass, Bronze, Titanium, and Inconel products for global industries.",
  },
  {
    image: heroBg,
    badge: "ISO Certified",
    heading: (
      <>
        Premium Quality
        <span className="copper-text-gradient"> Metal Products</span>
      </>
    ),
    description:
      "Brass tubes, copper nickel tubes, bronze rods, titanium tubes, inconel tubes and more — manufactured to international standards.",
  },
  {
    image: heroBg,
    badge: "Global Export",
    heading: (
      <>
        Trusted by Industries
        <span className="copper-text-gradient"> Worldwide</span>
      </>
    ),
    description:
      "Serving Automotive, Electrical, Marine, Oil & Gas, HVAC and Construction sectors across 40+ countries.",
  },
];

export default function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {slides.map((slide, i) => (
            <div key={i} className="relative min-h-[85vh] flex-[0_0_100%] flex items-center">
              <div className="absolute inset-0">
                <img
                  src={slide.image}
                  alt="Copper tube manufacturing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-graphite/95 via-graphite/80 to-graphite/40" />
              </div>
              <div className="relative container-wide px-4 sm:px-6 lg:px-8 py-20">
                <AnimatePresence mode="wait">
                  {selectedIndex === i && (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="max-w-2xl"
                    >
                      <div className="inline-block copper-gradient px-4 py-1.5 rounded-sm mb-6">
                        <span className="font-heading text-xs font-semibold uppercase tracking-widest text-primary-foreground">
                          {slide.badge}
                        </span>
                      </div>
                      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
                        {slide.heading}
                      </h1>
                      <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed max-w-xl font-body">
                        {slide.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                          to="/products"
                          className="copper-gradient inline-flex items-center gap-2 px-6 py-3.5 rounded font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:opacity-90 transition-opacity"
                        >
                          Explore Products <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded border border-primary-foreground/30 font-heading text-sm font-semibold text-primary-foreground uppercase tracking-wide hover:bg-primary-foreground/10 transition-colors"
                        >
                          Request Quote
                        </Link>
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 px-6 py-3.5 rounded font-heading text-sm font-medium text-primary-foreground/60 uppercase tracking-wide hover:text-primary-foreground transition-colors"
                        >
                          <Download className="h-4 w-4" /> Catalog
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              selectedIndex === i
                ? "w-8 bg-primary"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

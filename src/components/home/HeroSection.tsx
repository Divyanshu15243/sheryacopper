import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ChevronDown, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
// Stock photography from Pexels (free licence): photos 6804265, 28169591, 11133641
import moltenCopper from "@/assets/hero/molten-copper.jpg";
import copperFittings from "@/assets/hero/copper-fittings.jpg";
import copperWire from "@/assets/hero/copper-wire.jpg";
import { cn } from "@/lib/utils";

const slides = [
  {
    tab: "Since 1974",
    word: "Cast",
    image: moltenCopper,
    description:
      "Leading manufacturers and exporters of high-quality Copper, Brass, Bronze, Titanium, and Inconel products for global industries.",
  },
  {
    tab: "ISO Certified",
    word: "Engineered",
    image: copperFittings,
    description:
      "Brass tubes, copper nickel tubes, bronze rods, titanium tubes, inconel tubes and more — manufactured to international standards.",
  },
  {
    tab: "Global Export",
    word: "Delivered",
    image: copperWire,
    description: "Serving Automotive, Electrical, Marine, Oil & Gas, HVAC and Construction sectors worldwide.",
  },
];

export const SLIDE_INTERVAL = 6500;

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  const go = useCallback((i: number) => setActive((i + slides.length) % slides.length), []);

  // Auto-advance; restarting on every change keeps the timer in step with the progress bar
  useEffect(() => {
    if (!playing) return;
    const t = window.setTimeout(() => go(active + 1), SLIDE_INTERVAL);
    return () => window.clearTimeout(t);
  }, [active, playing, go]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Shreya Coppers highlights"
      className="relative isolate h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink text-white"
    >
      {/* Background slides */}
      <div className="absolute inset-0 -z-20" aria-hidden>
        {slides.map((s, i) => (
          <img
            key={s.tab}
            src={s.image}
            alt=""
            width={1920}
            height={1280}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out motion-safe:animate-ken-burns",
              i === active ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />
      {/* Dot pattern */}
      <div
        aria-hidden
        className="absolute left-8 top-28 -z-10 hidden h-40 w-40 opacity-40 md:block"
        style={{
          backgroundImage: "radial-gradient(circle, hsl(var(--copper)) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />

      <div className="container-wide flex h-full flex-col justify-end pb-24 md:pb-28">
        <p className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-white animate-fade-in">
          <span className="h-px w-10 bg-copper" />
          Copper &amp; Non-Ferrous Alloy Manufacturing
        </p>

        <h1 className="font-body text-[2.75rem] font-light leading-[1.02] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5.5rem]">
          <span className="block animate-fade-up">Copper &amp; Alloys</span>
          <span className="relative block h-[1.08em] overflow-hidden italic text-white">
            <span key={slides[active].word} className="absolute inset-0 block motion-safe:animate-word-in">
              {slides[active].word}
            </span>
          </span>
          <span className="block animate-fade-up [animation-delay:0.15s]">Since 1974</span>
        </h1>

        {/* Slide copy: every slide shares one grid cell so the height never jumps */}
        <div className="mt-6 grid max-w-xl" aria-live={playing ? "off" : "polite"}>
          {slides.map((s, i) => {
            const isActive = i === active;
            return (
              <div
                key={s.tab}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${slides.length}`}
                aria-hidden={!isActive}
                className={cn(
                  "transition-all duration-700 ease-out [grid-area:1/1]",
                  isActive ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0",
                )}
              >
                <p className="text-base leading-relaxed text-white sm:text-lg">{s.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-4 animate-fade-up [animation-delay:0.4s] sm:flex-row sm:items-center">
          <Link
            to="/products"
            className="group inline-flex items-center justify-center gap-2 rounded bg-white px-6 py-3.5 font-body text-sm font-medium text-ink transition-colors hover:bg-white/90"
          >
            Explore Our Products
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded border border-white/40 px-6 py-3.5 font-body text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            Request a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
          </Link>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute bottom-8 right-4 flex items-center gap-4 sm:right-6 md:bottom-10 lg:right-10">
        <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
          {slides.map((s, i) => (
            <button
              key={s.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`Slide ${i + 1}: ${s.tab}`}
              onClick={() => go(i)}
              className={cn(
                "relative h-1.5 overflow-hidden rounded-full transition-all",
                i === active ? "w-10 bg-white/30" : "w-1.5 bg-white/40 hover:bg-white/70",
              )}
            >
              {i === active && (
                <span
                  key={`${active}-${playing}`}
                  className={cn("absolute inset-0 origin-left bg-white", playing && "animate-progress")}
                />
              )}
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause slideshow" : "Play slideshow"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-copper hover:text-copper"
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
          </button>
          <button
            type="button"
            onClick={() => go(active - 1)}
            aria-label="Previous slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-copper hover:text-copper"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => go(active + 1)}
            aria-label="Next slide"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-copper hover:text-copper"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/70 animate-fade-in md:block" aria-hidden>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}

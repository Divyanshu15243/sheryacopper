import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import SiteLayout from "@/components/layout/SiteLayout";
import PageHero from "@/components/layout/PageHero";
import { productCategories } from "@/data/products";
import { usePageMeta } from "@/hooks/use-page-meta";
import { cn } from "@/lib/utils";

import factoryFloor from "@/assets/infrastructure/factory-floor.jpg";
import qualityLab from "@/assets/infrastructure/quality-lab.jpg";
import warehouse from "@/assets/infrastructure/warehouse.jpg";
import constructionImg from "@/assets/applications/construction.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import electricalImg from "@/assets/applications/electrical.jpg";
import hvacImg from "@/assets/applications/hvac.jpg";
import plumbingImg from "@/assets/applications/plumbing.jpg";
import cablesImg from "@/assets/applications/cables.jpg";

const categories = ["All", "Products", "Factory", "Applications"] as const;
type Category = (typeof categories)[number];

interface GalleryImage {
  src: string;
  label: string;
  category: Exclude<Category, "All">;
}

const productImages: GalleryImage[] = productCategories.flatMap((category) =>
  category.products
    .filter((product) => product.image)
    .map((product) => ({ src: product.image!, label: product.name, category: "Products" as const })),
);

const images: GalleryImage[] = [
  ...productImages,
  { src: factoryFloor, label: "Factory Floor", category: "Factory" },
  { src: qualityLab, label: "Quality Lab", category: "Factory" },
  { src: warehouse, label: "Warehouse", category: "Factory" },
  { src: constructionImg, label: "Construction", category: "Applications" },
  { src: automotiveImg, label: "Automotive", category: "Applications" },
  { src: electricalImg, label: "Electrical", category: "Applications" },
  { src: hvacImg, label: "HVAC", category: "Applications" },
  { src: plumbingImg, label: "Plumbing", category: "Applications" },
  { src: cablesImg, label: "Cables", category: "Applications" },
];

export default function Gallery() {
  usePageMeta("Image Gallery", "Explore Shreya Coppers products, factory, and application areas.");

  const [filter, setFilter] = useState<Category>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const filtered = filter === "All" ? images : images.filter((img) => img.category === filter);
  const count = (c: Category) => (c === "All" ? images.length : images.filter((i) => i.category === c).length);

  const close = useCallback(() => {
    setLightbox(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (dir: 1 | -1) => setLightbox((i) => (i === null ? i : (i + dir + filtered.length) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, step]);

  const current = lightbox !== null ? filtered[lightbox] : null;

  return (
    <SiteLayout>
      <PageHero eyebrow="Media" title="Image Gallery" subtitle="Explore our products, factory, and application areas" />

      <section className="section bg-white">
        <div className="container-wide">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-6">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter images">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  aria-pressed={filter === cat}
                  className={cn(
                    "inline-flex min-h-[44px] items-center gap-2 border px-4 font-heading text-[14px] font-semibold transition-colors",
                    filter === cat ? "border-ink bg-ink text-white" : "border-line text-ink hover:border-ink",
                  )}
                >
                  {cat}
                  <span className={cn("font-mono text-[11px]", filter === cat ? "text-copper" : "text-steel")}>{count(cat)}</span>
                </button>
              ))}
            </div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-steel" aria-live="polite">
              Showing {filtered.length} images
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((img, i) => (
              <li key={`${img.category}-${img.label}`}>
                <button
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setLightbox(i);
                  }}
                  className="group block w-full text-left"
                  aria-label={`View ${img.label} larger`}
                >
                  <span className="relative block aspect-square overflow-hidden border border-line bg-paper transition-colors group-hover:border-copper">
                    <img
                      src={img.src}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-ink/80 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                      <Maximize2 className="h-4 w-4" aria-hidden />
                    </span>
                  </span>
                  <span className="mt-3 block font-heading text-[14px] font-bold leading-snug text-ink group-hover:text-copper-dark">
                    {img.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[10.5px] uppercase tracking-[0.16em] text-steel">{img.category}</span>
                </button>
              </li>
            ))}
          </ul>

          {filter !== "Products" && (
            <p className="mt-12 text-[13px] text-steel">Factory and application photographs are representative.</p>
          )}
        </div>
      </section>

      {current && lightbox !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.label}
          className="fixed inset-0 z-[60] flex flex-col bg-ink/95 animate-fade-in"
          onClick={close}
        >
          <div className="flex items-center justify-between px-4 py-4 text-white sm:px-6" onClick={(e) => e.stopPropagation()}>
            <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-white/60">
              {lightbox + 1} / {filtered.length}
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              className="flex h-11 w-11 items-center justify-center text-white/80 hover:text-white"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
            <img
              src={current.src}
              alt={current.label}
              className="max-h-full max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/60 text-white hover:border-copper sm:left-6"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                step(1);
              }}
              className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/20 bg-ink/60 text-white hover:border-copper sm:right-6"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-5 text-center sm:px-6" onClick={(e) => e.stopPropagation()}>
            <p className="font-heading text-lg font-bold text-white">{current.label}</p>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-copper">{current.category}</p>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}

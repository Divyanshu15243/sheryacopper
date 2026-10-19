import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: Crumb[];
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  /** Full-width photo behind the banner instead of the framed image on the right */
  bannerImage?: string;
  children?: ReactNode;
}

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs = [],
  image,
  imageAlt = "",
  imageFit = "cover",
  bannerImage,
  children,
}: PageHeroProps) {
  const crumbs: Crumb[] = [{ label: "Home", to: "/" }, ...breadcrumbs, { label: title }];
  const framedImage = bannerImage ? undefined : image;

  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      {bannerImage ? (
        <>
          <img
            src={bannerImage}
            alt={imageAlt}
            width={1600}
            height={900}
            className="absolute inset-0 -z-20 h-full w-full object-cover motion-safe:animate-ken-burns"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/60 to-ink/20" aria-hidden />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-transparent to-ink/30" aria-hidden />
        </>
      ) : (
        <>
          <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
          <div className="absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-copper/10 blur-3xl" aria-hidden />
        </>
      )}

      <div
        className={cn(
          "container-wide grid gap-10 py-12 md:py-16",
          framedImage && "lg:grid-cols-12 lg:items-center lg:py-20",
          bannerImage && "min-h-[380px] content-end pb-14 pt-24 md:min-h-[460px] md:pb-20 lg:min-h-[520px]",
        )}
      >
        <div className={cn(framedImage ? "lg:col-span-7" : "max-w-3xl")}>
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/50">
              {crumbs.map((c, i) => (
                <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3 w-3 text-white/30" aria-hidden />}
                  {c.to ? (
                    <Link to={c.to} className="transition-colors hover:text-copper">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">
                      {c.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {eyebrow && <p className="eyebrow eyebrow-light mb-4">{eyebrow}</p>}
          <h1 className="text-balance font-heading text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[3rem] lg:text-[3.5rem]">
            {title}
          </h1>
          {subtitle && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">{subtitle}</p>}
          {children && <div className="mt-8">{children}</div>}
        </div>

        {framedImage && (
          <div className="hidden lg:col-span-5 lg:block">
            <div className={cn("corner-marks aspect-[4/3] overflow-hidden", imageFit === "contain" ? "bg-white" : "bg-charcoal")}>
              <img
                src={framedImage}
                alt={imageAlt}
                className={cn("h-full w-full", imageFit === "contain" ? "object-contain p-4" : "object-cover")}
              />
            </div>
          </div>
        )}
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-copper via-copper/40 to-transparent" aria-hidden />
    </section>
  );
}

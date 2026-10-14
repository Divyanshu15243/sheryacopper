import constructionImg from "@/assets/applications/construction.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import electricalImg from "@/assets/applications/electrical.jpg";
import cablesImg from "@/assets/applications/cables.jpg";
import hvacImg from "@/assets/applications/hvac.jpg";
import plumbingImg from "@/assets/applications/plumbing.jpg";
import SectionHeader from "@/components/site/SectionHeader";
import Reveal from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

const areas = [
  { image: constructionImg, label: "Construction" },
  { image: automotiveImg, label: "Automotive" },
  { image: electricalImg, label: "Electrical" },
  { image: cablesImg, label: "Cables & Wiring" },
  { image: hvacImg, label: "HVAC & Plumbing" },
  { image: plumbingImg, label: "Pipe Fittings" },
];

// Editorial mosaic on desktop: two wide tiles, four standard tiles
const tileClass = ["lg:col-span-2", "", "", "", "", "lg:col-span-2"];

export default function ApplicationAreas() {
  return (
    <section className="section bg-white" aria-labelledby="applications-heading">
      <div className="container-wide">
        <SectionHeader id="applications-heading" eyebrow="Applications" title="Application Areas" />

        <ul className="grid grid-cols-2 gap-2 sm:gap-4 lg:auto-rows-[250px] lg:grid-cols-4">
          {areas.map((area, i) => (
            <Reveal
              as="li"
              key={area.label}
              delay={(i % 3) * 0.05}
              className={cn("group relative aspect-[4/3] overflow-hidden bg-charcoal lg:aspect-auto", tileClass[i])}
            >
              <img
                src={area.image}
                alt=""
                loading="lazy"
                width={640}
                height={512}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                <h3 className="text-[15px] font-bold text-white sm:text-lg">{area.label}</h3>
                <span className="hidden font-mono text-[11px] text-white/60 sm:block">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

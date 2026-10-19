import constructionImg from "@/assets/applications/construction.jpg";
import automotiveImg from "@/assets/applications/automotive.jpg";
import electricalImg from "@/assets/applications/electrical.jpg";
import cablesImg from "@/assets/applications/cables.jpg";
import hvacImg from "@/assets/applications/hvac.jpg";
import plumbingImg from "@/assets/applications/plumbing.jpg";
import Reveal from "@/components/site/Reveal";

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
    <section className="bg-white pb-20 md:pb-28" aria-labelledby="applications-heading">
      <div className="container-wide">
        <div className="m-card px-4 py-14 sm:px-8 md:py-20 lg:px-14">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="m-eyebrow mb-5">Applications</span>
            <h2 id="applications-heading" className="m-h2">
              Copper at Work, Everywhere
            </h2>
            <p className="m-lede mt-5">
              From building services to vehicles and power networks, our tubes, rods and fittings are engineered into the
              systems industries depend on every day.
            </p>
          </Reveal>

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {areas.map((area, i) => (
              <Reveal
                as="li"
                key={area.label}
                delay={(i % 3) * 0.05}
                className="group relative aspect-[4/3] overflow-hidden rounded bg-charcoal"
              >
                <img
                  src={area.image}
                  alt=""
                  loading="lazy"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/5 to-transparent" />
                <h3 className="absolute inset-x-0 bottom-0 p-4 font-body text-[15px] font-light text-white sm:p-5 sm:text-lg">
                  {area.label}
                </h3>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

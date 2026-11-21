import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

type Mode = "od" | "wall" | "length" | "temper";

interface Spec {
  mode: Mode;
  label: string;
  /** Headline shown when the item is open, e.g. "OD: 6 mm – 130 mm" */
  headline: string;
  description: string;
  /** Slider range; temper has none */
  range?: { min: number; max: number; step: number; initial: number; unit: string; suffix: string; decimals: number };
}

const specs: Spec[] = [
  {
    mode: "od",
    label: "Outside Diameter",
    headline: "OD: 6 mm – 130 mm",
    description: "A complete size range, from fine HVAC/R lines up to large-bore industrial headers.",
    range: { min: 6, max: 130, step: 1, initial: 72, unit: "mm", suffix: "O.D.", decimals: 0 },
  },
  {
    mode: "wall",
    label: "Wall Thickness",
    headline: "0.70 mm – 3.25 mm",
    description: "Thinner walls for standard connections; heavier walls for long runs and high-pressure refrigerants.",
    range: { min: 0.7, max: 3.25, step: 0.05, initial: 1.5, unit: "mm", suffix: "Wall", decimals: 2 },
  },
  {
    mode: "length",
    label: "Standard Length",
    headline: "300 mm – 6000 mm",
    description: "3 m (≈ 10 ft) is standard and 6 m lengths are stocked. Cut-to-size lengths are available on request.",
    range: { min: 300, max: 6000, step: 100, initial: 3000, unit: "mm", suffix: "Length", decimals: 0 },
  },
  {
    mode: "temper",
    label: "Temper",
    headline: "H · HH · QH",
    description: "Hard, Half Hard and Quarter Hard. Every temper is available in straight lengths.",
  },
];

const COPPER_ACROSS =
  "linear-gradient(90deg,#4a200c 0%,#8a4220 12%,#c8743f 30%,#f3b88c 44%,#d88a52 56%,#a5552a 76%,#5a2812 100%)";
const COPPER_DOWN =
  "linear-gradient(180deg,#f3b88c 0%,#d88a52 22%,#b8652f 50%,#8a4220 78%,#4a200c 100%)";

const fmt = (v: number, decimals: number) => v.toFixed(decimals);

export default function SpecScalePreview() {
  const baseId = useId();
  const [active, setActive] = useState<Mode>("od");
  const [values, setValues] = useState<Record<Mode, number>>({
    od: 72,
    wall: 1.5,
    length: 3000,
    temper: 0,
  });

  const spec = specs.find((s) => s.mode === active)!;
  const range = spec.range;
  const value = values[active];
  const pct = range ? ((value - range.min) / (range.max - range.min)) * 100 : 50;
  const valueText = range ? `${fmt(value, range.decimals)} ${range.unit}` : spec.headline;

  return (
    <div className="grid gap-8 rounded-2xl bg-white p-5 shadow-[0_10px_50px_rgba(0,0,0,0.03)] sm:p-10 lg:grid-cols-12 lg:gap-14 lg:rounded-3xl lg:p-14">
      {/* Accordion */}
      <div className="flex flex-col justify-center lg:col-span-5">
        <span className="mb-2 block font-body text-[11px] font-medium uppercase tracking-[0.3em] text-copper-dark">
          Specifications
        </span>
        <h2 className="m-h2 mb-8 sm:mb-10">By the Numbers</h2>

        <ul className="flex w-full flex-col gap-3 lg:max-w-[360px]">
          {specs.map((s) => {
            const open = s.mode === active;
            const panelId = `${baseId}-${s.mode}`;
            return (
              <li key={s.mode}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActive(s.mode)}
                  className={cn(
                    "w-full text-left transition-all duration-300",
                    open
                      ? "rounded-[20px] border border-copper/40 bg-white p-5 shadow-sm sm:p-6"
                      : "flex min-h-[48px] items-center justify-between rounded-full border border-line bg-white px-5 py-3 hover:bg-panel sm:px-6",
                  )}
                >
                  {open ? (
                    <span className="flex items-center justify-between">
                      <span className="font-body text-[15px] text-copper">{s.headline}</span>
                      <Minus className="h-3.5 w-3.5 text-steel" aria-hidden />
                    </span>
                  ) : (
                    <>
                      <span className="font-body text-[13px] font-light text-ink">{s.label}</span>
                      <Plus className="h-4 w-4 text-steel" aria-hidden />
                    </>
                  )}
                  {open && (
                    <span id={panelId} className="mt-2 block font-body text-[14px] leading-relaxed text-muted-foreground">
                      {s.description}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Preview panel */}
      <div className="relative flex h-[380px] flex-col justify-between overflow-hidden rounded-2xl border border-[#F2E5D9] bg-[#F9F3EC] p-5 sm:h-[480px] sm:p-8 lg:col-span-7 lg:h-[540px]">
        <div className="relative z-10 flex items-center justify-between gap-3">
          <span className="font-body text-[13px] font-light uppercase tracking-wider text-ink">Scale Preview</span>
          <span
            className="rounded-full border border-copper bg-[#F9F3EC]/80 px-3 py-1 font-body text-[15px] font-light text-ink backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[17px]"
            aria-live="polite"
          >
            {range ? (
              <>
                {fmt(value, range.decimals)} {range.unit} <span className="text-steel">{range.suffix}</span>
              </>
            ) : (
              spec.headline
            )}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
          {active === "od" && <OdPreview od={values.od} />}
          {active === "wall" && <WallPreview wall={values.wall} />}
          {active === "length" && <LengthPreview length={values.length} />}
          {active === "temper" && <TemperPreview />}
        </div>

        {/* Slider */}
        <div
          className={cn(
            "relative z-10 mx-auto w-full max-w-xl px-2 transition-opacity duration-300 sm:px-6",
            !range && "pointer-events-none opacity-0",
          )}
        >
          <div className="relative mt-8 flex h-10 items-center">
            <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#E8D9CB]">
              <div className="h-full rounded-full bg-copper" style={{ width: `${pct}%` }} />
            </div>
            <input
              type="range"
              min={range?.min ?? 0}
              max={range?.max ?? 1}
              step={range?.step ?? 1}
              value={range ? value : 0}
              disabled={!range}
              tabIndex={range ? 0 : -1}
              aria-label={`${spec.label} preview`}
              aria-valuetext={valueText}
              onChange={(e) => setValues((v) => ({ ...v, [active]: Number(e.target.value) }))}
              className="peer relative z-20 h-10 w-full cursor-pointer opacity-0"
            />
            <div
              className="pointer-events-none absolute top-1/2 z-10 h-5 w-5 rounded-full border-4 border-[#FAF3EC] bg-copper shadow-md peer-focus-visible:ring-2 peer-focus-visible:ring-copper peer-focus-visible:ring-offset-2"
              style={{ left: `${pct}%`, transform: "translate(-50%, -50%)" }}
            />
            <div
              className="pointer-events-none absolute bottom-full z-30 -mb-1 flex flex-col items-center"
              style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
            >
              <span className="whitespace-nowrap rounded-lg bg-copper px-2.5 py-1 font-body text-[12px] font-medium text-white shadow-md">
                {valueText}
              </span>
              <span className="h-0 w-0 border-x-[5px] border-t-[5px] border-x-transparent border-t-copper" />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-between font-body text-[17px] text-steel sm:text-[20px]">
            <span>
              {range ? fmt(range.min, range.decimals) : ""} {range?.unit}
            </span>
            <span>
              {range ? fmt(range.max, range.decimals) : ""} {range?.unit}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Previews ---------- */

function Marking({ vertical = false, size }: { vertical?: boolean; size: number }) {
  return (
    <span
      className="whitespace-nowrap font-mono font-semibold uppercase tracking-[0.18em] text-[#2b1206]/70"
      style={{ fontSize: size, writingMode: vertical ? "vertical-rl" : undefined }}
    >
      Shreya Coppers · C12200 DHP · ASTM B280
    </span>
  );
}

/** Vertical tube whose rendered width follows the outside diameter (6–130 mm → 12–150 px). */
function OdPreview({ od }: { od: number }) {
  const frac = (od - 6) / 124;
  // Narrower on phones so the widest tube still leaves the slider labels readable
  const width = 12 + frac * 138;
  return (
    <div
      className="relative flex h-full items-center justify-center overflow-hidden transition-[width] duration-150 ease-out"
      style={{
        width: `calc(12px + ${frac} * min(138px, 22vw))`,
        background: COPPER_ACROSS,
        maskImage: "linear-gradient(180deg,transparent 0%,#000 14%,#000 86%,transparent 100%)",
        WebkitMaskImage: "linear-gradient(180deg,transparent 0%,#000 14%,#000 86%,transparent 100%)",
      }}
    >
      {width > 26 && <Marking vertical size={Math.min(13, Math.max(8, width / 8))} />}
    </div>
  );
}

/** Tube cross-section; ring thickness follows the wall (≈ 9 px per mm on a 28.6 mm tube). */
function WallPreview({ wall }: { wall: number }) {
  const outer = 260;
  const ring = wall * 9;
  return (
    <div className="flex flex-col items-center -translate-y-6">
      <div
        className="relative rounded-full shadow-[0_18px_40px_-18px_rgba(90,40,18,0.6)]"
        style={{
          width: outer,
          height: outer,
          background: "conic-gradient(from 210deg,#f3b88c,#c8743f,#8a4220,#5a2812,#a5552a,#e0995a,#f3b88c)",
        }}
      >
        <div
          className="absolute rounded-full bg-[#F9F3EC] shadow-[inset_0_6px_14px_rgba(90,40,18,0.35)] transition-all duration-150 ease-out"
          style={{ inset: ring }}
        />
      </div>
      <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-steel">Cross-section · 28.6 mm O.D.</p>
    </div>
  );
}

/** Horizontal tube on a 0–6 m ruler. */
function LengthPreview({ length }: { length: number }) {
  const pct = (length / 6000) * 100;
  return (
    <div className="w-full max-w-xl px-6 -translate-y-6 sm:px-10">
      <div className="relative h-7">
        <div
          className="absolute inset-y-0 left-0 flex items-center justify-start overflow-hidden rounded-[3px] pl-3 shadow-[0_10px_22px_-12px_rgba(90,40,18,0.7)] transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%`, background: COPPER_DOWN }}
        >
          {pct > 40 && <Marking size={9} />}
        </div>
      </div>
      <div className="relative mt-4 h-6 border-t border-steel/50">
        {Array.from({ length: 7 }, (_, i) => (
          <span key={i} className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: `${(i / 6) * 100}%` }}>
            <span className="h-2 w-px bg-steel/60" />
            <span className="mt-1 whitespace-nowrap font-mono text-[10px] text-steel">{i} m</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Three tubes: rigid hard temper, then progressively more bendable tempers. */
function TemperPreview() {
  const tubes = [
    { label: "H", d: "M40 70 L360 70" },
    { label: "HH", d: "M40 168 Q200 128 360 168" },
    { label: "QH", d: "M40 280 Q200 196 360 280" },
  ];
  return (
    <svg viewBox="0 0 420 330" className="w-full max-w-[480px] px-6" role="presentation">
      {tubes.map((t) => (
        <g key={t.label}>
          <path d={t.d} fill="none" stroke="#5a2812" strokeWidth={20} />
          <path d={t.d} fill="none" stroke="#b8652f" strokeWidth={15} />
          <path d={t.d} fill="none" stroke="#e0995a" strokeWidth={7} transform="translate(0 -3)" />
          <path d={t.d} fill="none" stroke="#f7caa4" strokeWidth={2} transform="translate(0 -5)" />
          <text
            x={385}
            y={t.label === "H" ? 75 : t.label === "HH" ? 173 : 285}
            className="font-mono"
            fontSize={13}
            fill="#7a7a7a"
          >
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

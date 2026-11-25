/**
 * Size ranges for the interactive "Size Range" section on product pages.
 *
 * Ranges come from a product's own `specifications` (Outer Diameter / Wall Thickness / Length) when present;
 * everything else uses the TYPICAL ranges below. These are indicative industry ranges — edit any value here
 * to match what Shreya Coppers actually supplies. Products that are not listed get no section.
 */
import type { ProductItem } from "./products";

export type Profile = "round" | "square" | "rect" | "hex" | "oct" | "oval";
export type Visual =
  | "side"
  | "section"
  | "length"
  | "temper"
  | "plate-thickness"
  | "plate-width"
  | "coil"
  | "coil-length"
  | "coil-temper";

export interface ScaleRange {
  min: number;
  max: number;
  step: number;
  initial: number;
  unit: string;
  suffix: string;
  decimals: number;
  /** Discrete sizes the slider snaps to (e.g. standard ACR sizes), with optional tick labels */
  stops?: number[];
  stopLabels?: string[];
}

export interface ScaleItem {
  key: string;
  label: string;
  headline: string;
  description: string;
  visual: Visual;
  range?: ScaleRange;
}

export interface ScaleConfig {
  profile: Profile;
  marking: string;
  items: ScaleItem[];
}

type R = [number, number];

const decimalsFor = (step: number) => (step >= 1 ? 0 : step >= 0.1 ? 1 : 2);
const snap = (v: number, step: number) => Math.round(v / step) * step;

function range(r: R, step: number, unit: string, suffix: string, at = 0.45): ScaleRange {
  const [min, max] = r;
  const decimals = decimalsFor(step);
  return { min, max, step, unit, suffix, decimals, initial: Number(snap(min + (max - min) * at, step).toFixed(decimals)) };
}

const fmtRange = (r: ScaleRange) => `${r.min.toFixed(r.decimals)} – ${r.max.toFixed(r.decimals)} ${r.unit}`;

function item(key: string, label: string, visual: Visual, description: string, r?: ScaleRange, headline?: string): ScaleItem {
  return { key, label, visual, description, range: r, headline: headline ?? (r ? fmtRange(r) : label) };
}

const sizeStep = (r: R) => (r[1] <= 15 ? 0.1 : 1);
const wallStep = (r: R) => (r[1] <= 2 ? 0.01 : 0.05);
const lengthStep = (r: R) => (r[1] <= 3000 ? 50 : 100);

const SIZE_LABEL: Record<Profile, string> = {
  round: "Outside Diameter",
  oval: "Major Axis",
  square: "Size Across",
  rect: "Width",
  hex: "Across Flats",
  oct: "Across Flats",
};

const lengthItem = (r: R) =>
  item("length", "Length", "length", "Supplied in straight lengths. Cut-to-size lengths are available on request.", range(r, lengthStep(r), "mm", "Length"));

const temperItem = item(
  "temper",
  "Temper",
  "temper",
  "Hard, Half Hard and Quarter Hard tempers — chosen by bending radius, pressure rating and handling.",
  undefined,
  "H · HH · QH",
);

function tube(o: { size: R; wall: R; length?: R; profile?: Profile; temper?: boolean }): Omit<ScaleConfig, "marking"> {
  const profile = o.profile ?? "round";
  const items = [
    item("size", SIZE_LABEL[profile], "side", "The full size range — drag the slider to compare sizes against each other.", range(o.size, sizeStep(o.size), "mm", profile === "round" ? "O.D." : "Size")),
    item("wall", "Wall Thickness", "section", "Lighter walls for standard duty; heavier walls for long runs and high-pressure service.", range(o.wall, wallStep(o.wall), "mm", "Wall", 0.3)),
  ];
  if (o.length) items.push(lengthItem(o.length));
  if (o.temper) items.push(temperItem);
  return { profile, items };
}

function rod(o: { size: R; length: R; profile?: Profile }): Omit<ScaleConfig, "marking"> {
  const profile = o.profile ?? "round";
  return {
    profile,
    items: [
      item("size", profile === "round" ? "Diameter" : SIZE_LABEL[profile], "side", "Solid bar in the full diameter range — drag to compare sizes.", range(o.size, sizeStep(o.size), "mm", profile === "round" ? "Dia." : "Size")),
      lengthItem(o.length),
    ],
  };
}

function flat(o: { thickness: R; width: R; length?: R }): Omit<ScaleConfig, "marking"> {
  const items = [
    item("thickness", "Thickness", "plate-thickness", "Thickness range available, from light gauge to heavy section.", range(o.thickness, o.thickness[1] <= 1 ? 0.01 : o.thickness[1] <= 10 ? 0.1 : 0.5, "mm", "Thick", 0.3)),
    item("width", "Width", "plate-width", "Widths available — slit or cut to your drawing on request.", range(o.width, o.width[1] <= 100 ? 1 : 5, "mm", "Width")),
  ];
  if (o.length) items.push(lengthItem(o.length));
  return { profile: "rect", items };
}

/* ---------- Coils (pancake / level wound) ---------- */

/** Standard ACR sizes, 3/16" to 7/8" */
const ACR_STOPS = [4.76, 6.35, 7.94, 9.53, 12.7, 15.88, 19.05, 22.23];
const ACR_LABELS = ["3/16″", "1/4″", "5/16″", "3/8″", "1/2″", "5/8″", "3/4″", "7/8″"];

function coil(o: { stops?: number[]; labels?: string[]; wall: R; length?: { range: R; initial: number } }): Omit<ScaleConfig, "marking"> {
  const stops = o.stops ?? ACR_STOPS;
  const labels = o.labels ?? ACR_LABELS;
  const size: ScaleRange = {
    min: stops[0],
    max: stops[stops.length - 1],
    step: 0.01,
    initial: stops[3] ?? stops[0],
    unit: "mm",
    suffix: "O.D.",
    decimals: 2,
    stops,
    stopLabels: labels,
  };
  const items = [
    item(
      "size",
      "Outside Diameter",
      "coil",
      `${labels[0]} to ${labels[labels.length - 1]} outer diameter — the standard split AC, refrigeration and industrial connection sizes.`,
      size,
      `OD: ${fmtRange(size)}`,
    ),
    item(
      "wall",
      "Wall Thickness",
      "section",
      "Lighter walls for split AC unit connections; heavier walls for long runs and high-pressure refrigerants.",
      range(o.wall, 0.01, "mm", "Wall", 0.3),
    ),
  ];
  if (o.length) {
    const r = { ...range(o.length.range, 0.01, "m", "Coil Length"), initial: o.length.initial };
    items.push(
      item("coil-length", "Coil Length", "coil-length", "Standard coil length is 15.24 m (50 ft). Custom lengths are available on request.", r, `${o.length.range[0]} m – ${o.length.range[1]} m`),
    );
  }
  items.push(
    item(
      "temper",
      "Temper",
      "coil-temper",
      "Soft annealed — bends freely by hand or with standard benders, and flares cleanly for flare and compression fittings without cracking.",
      undefined,
      "Soft Annealed",
    ),
  );
  return { profile: "round", items };
}

/* ---------- Typical ranges (edit to match actual supply) ---------- */

const condenser = tube({ size: [6, 50.8], wall: [0.5, 3], length: [300, 12000] });
const brassRound = tube({ size: [3, 150], wall: [0.3, 10], length: [300, 6000] });
const shaped = (profile: Profile, size: R = [6, 100]) => tube({ size, wall: [0.5, 5], length: [300, 6000], profile });
const capillary = tube({ size: [0.8, 6], wall: [0.2, 1.5], length: [300, 6000] });
const pancake = coil({ wall: [0.4, 1.2], length: { range: [3, 16], initial: 15.24 } });
const levelWound = coil({ wall: [0.3, 1.0] });

const TYPICAL: Record<string, Omit<ScaleConfig, "marking">> = {
  // Brass
  "brass-tubes": brassRound,
  "63-37-brass-tubes": brassRound,
  "70-30-brass-tubes": condenser,
  "red-brass-tubes": brassRound,
  "admiralty-brass-tubes": condenser,
  "aluminium-brass-tubes": condenser,
  "hollow-brass-tubes": brassRound,
  "brass-fluted-tubes": brassRound,
  "twisted-corrugated-brass-tubes": condenser,
  "brass-square-tubes": shaped("square"),
  "brass-hexagonal-tubes": shaped("hex", [6, 60]),
  "brass-octagonal-tubes": shaped("oct", [6, 80]),
  "rectangular-brass-tubes": shaped("rect", [10, 150]),
  "brass-oval-elliptical-tubes": shaped("oval", [10, 100]),
  "brass-radiator-tubes": tube({ size: [10, 60], wall: [0.1, 0.5], length: [300, 3000], profile: "oval" }),
  "brass-capillary-tubes": capillary,
  "brass-rods": rod({ size: [3, 150], length: [300, 6000] }),
  "brass-sheets": flat({ thickness: [0.1, 6], width: [100, 1250], length: [500, 2500] }),
  "naval-brass-plates": flat({ thickness: [3, 100], width: [300, 1500], length: [500, 3000] }),

  // Copper
  "copper-tubes": tube({ size: [6, 300], wall: [0.5, 8], length: [300, 12000], temper: true }),
  "copper-square-tubes": shaped("square"),
  "copper-rectangular-tubes": shaped("rect", [10, 150]),
  "copper-oval-tubes": shaped("oval", [10, 100]),
  "copper-capillary-tubes": capillary,
  "copper-u-bend-tubes": condenser,
  "hollow-conductor-tubes": tube({ size: [6, 40], wall: [1, 6], length: [300, 6000], profile: "square" }),
  "copper-rods-sections": flat({ thickness: [1, 50], width: [5, 300], length: [300, 6000] }),
  "copper-bars-rectangular": flat({ thickness: [2, 50], width: [10, 300], length: [300, 6000] }),
  "copper-bus-bar": flat({ thickness: [2, 30], width: [10, 300], length: [300, 6000] }),
  "level-wound-copper-coil": levelWound,
  "lwc-acr-plain": levelWound,
  "lwc-acr-inner-grooved": levelWound,
  "pancake-coil": pancake,
  "copper-sheets": flat({ thickness: [0.1, 6], width: [100, 1250], length: [500, 2500] }),
  "copper-foils": flat({ thickness: [0.01, 0.2], width: [10, 650] }),

  // Copper alloys
  "copper-nickel-tubes": condenser,
  "copper-nickel-u-bend-tubes": condenser,
  "copper-nickel-twisted-tubes": condenser,
  "finned-tubes": tube({ size: [9.5, 50.8], wall: [0.5, 2.5], length: [300, 12000] }),
  "copper-nickel-brake-tubing": tube({ size: [3.2, 12.7], wall: [0.6, 1] }),
  "copper-nickel-rods": rod({ size: [3, 150], length: [300, 6000] }),
  "copper-nickel-sections": flat({ thickness: [3, 50], width: [10, 150], length: [300, 6000] }),
  "copper-nickel-strips": flat({ thickness: [0.1, 3], width: [5, 600] }),
  "copper-nickel-sheets-plates": flat({ thickness: [0.5, 50], width: [300, 1500], length: [500, 3000] }),

  // Bronze
  "silicon-bronze-rods": rod({ size: [6, 200], length: [300, 3000] }),
  "aluminium-bronze-rods": rod({ size: [6, 200], length: [300, 3000] }),
  "phosphorus-bronze-rods": rod({ size: [6, 200], length: [300, 3000] }),
  "silicon-bronze-sheets": flat({ thickness: [0.1, 6], width: [100, 600] }),
  "aluminium-bronze-sheets": flat({ thickness: [0.1, 6], width: [100, 600] }),
  "phosphor-bronze-sheets": flat({ thickness: [0.1, 6], width: [100, 600] }),

  // Titanium / nickel alloys
  "titanium-tubes-product": tube({ size: [6, 114], wall: [0.5, 5], length: [300, 12000] }),
  "inconel-seamless-tubes-product": tube({ size: [6, 114], wall: [0.5, 5], length: [300, 12000] }),
  "monel-seamless-tubes-product": tube({ size: [6, 114], wall: [0.5, 5], length: [300, 12000] }),

  // Medical
  "medical-copper-pipes": tube({ size: [6, 108], wall: [0.6, 2.5], length: [300, 6000], temper: true }),
  "en-13348-medical-copper-tubes": tube({ size: [6, 108], wall: [0.6, 2.5], length: [300, 6000], temper: true }),
  "astm-b819-type-k": tube({ size: [9.5, 130], wall: [0.89, 4.6], length: [300, 6000], temper: true }),
  "astm-b819-type-l": tube({ size: [9.5, 130], wall: [0.76, 3.8], length: [300, 6000], temper: true }),
};

/** "6mm to 300mm" → [6, 300]; "Up to 12 meters" → [300, 12000] */
function parseRange(value: string | undefined, isLength = false): R | undefined {
  if (!value) return undefined;
  const v = value.toLowerCase();
  const nums = (v.match(/\d+(?:\.\d+)?/g) ?? []).map(Number);
  const toMm = (n: number) => (/\bm(?:eter|etre)?s?\b/.test(v) && !/mm/.test(v) ? n * 1000 : n);
  if (nums.length >= 2) return [toMm(nums[0]), toMm(nums[1])];
  if (isLength && nums.length === 1 && v.includes("up to")) return [300, toMm(nums[0])];
  return undefined;
}

export function getScaleConfig(product: ProductItem): ScaleConfig | null {
  const base = TYPICAL[product.slug];
  if (!base) return null;

  const spec = (label: string) => product.specifications?.find((s) => s.label.toLowerCase() === label)?.value;
  const own = {
    size: parseRange(spec("outer diameter")),
    wall: parseRange(spec("wall thickness")),
    length: parseRange(spec("length"), true),
  };

  const items = base.items.map((it) => {
    const r = own[it.key as keyof typeof own];
    if (!r || !it.range) return it;
    const step = it.key === "size" ? sizeStep(r) : it.key === "wall" ? wallStep(r) : lengthStep(r);
    const next = range(r, step, it.range.unit, it.range.suffix, it.key === "wall" ? 0.3 : 0.45);
    return { ...it, range: next, headline: fmtRange(next) };
  });

  return { ...base, items, marking: `Shreya Coppers · ${product.name}` };
}

import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import type { Profile, ScaleConfig, ScaleItem } from "@/data/productScale";

interface Props {
  config: ScaleConfig;
  /** Heading shown above the accordion */
  title?: string;
  eyebrow?: string;
}

const fmt = (v: number, decimals: number) => v.toFixed(decimals);
const nearest = (stops: number[], v: number) =>
  stops.reduce((best, s, i) => (Math.abs(s - v) < Math.abs(stops[best] - v) ? i : best), 0);
const frac = (it: ScaleItem, v: number) => {
  const r = it.range;
  if (!r) return 0.5;
  if (r.stops) return nearest(r.stops, v) / (r.stops.length - 1);
  return (v - r.min) / (r.max - r.min);
};

/* Copper surface treatments per profile (side view) */
const SIDE_SURFACE: Record<Profile, string> = {
  round: "linear-gradient(90deg,#4a200c 0%,#8a4220 12%,#c8743f 30%,#f3b88c 44%,#d88a52 56%,#a5552a 76%,#5a2812 100%)",
  oval: "linear-gradient(90deg,#4a200c 0%,#9a4c24 16%,#e8a678 42%,#d88a52 58%,#a5552a 80%,#5a2812 100%)",
  square: "linear-gradient(90deg,#5a2812 0 5%,#c8743f 5% 14%,#e09a68 40%,#c8743f 86%,#5a2812 95%)",
  rect: "linear-gradient(90deg,#5a2812 0 4%,#c8743f 4% 12%,#e09a68 40%,#c8743f 88%,#5a2812 96%)",
  hex: "linear-gradient(90deg,#5a2812 0%,#8a4220 26%,#e8a678 26% 74%,#8a4220 74%,#5a2812 100%)",
  oct: "linear-gradient(90deg,#5a2812 0%,#8a4220 18%,#c8743f 18% 32%,#eaa97b 32% 68%,#c8743f 68% 82%,#8a4220 82%,#5a2812 100%)",
};

const SIZE_SYMBOL: Record<Profile, string> = { round: "Ø", oval: "Ø", square: "□", rect: "▭", hex: "⬡", oct: "⯃" };

export default function SpecScalePreview({ config, title = "Size Range", eyebrow = "Dimensions" }: Props) {
  const baseId = useId();
  const [activeKey, setActiveKey] = useState(config.items[0].key);
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(config.items.map((i) => [i.key, i.range?.initial ?? 0])),
  );

  const active = config.items.find((i) => i.key === activeKey) ?? config.items[0];
  const range = active.range;
  const value = values[active.key];
  const pct = frac(active, value) * 100;
  const stops = range?.stops;
  const stopIdx = stops ? nearest(stops, value) : 0;
  const coilSize = config.items.find((i) => i.visual === "coil");
  const coilLen = config.items.find((i) => i.visual === "coil-length");
  const coilTube = coilSize ? 3 + frac(coilSize, values[coilSize.key]) * 9 : 5;
  const valueText = range ? `${fmt(value, range.decimals)} ${range.unit}` : active.headline;
  const thickness = config.items.find((i) => i.key === "thickness");
  const width = config.items.find((i) => i.key === "width");

  return (
    <div className="grid border border-line bg-white lg:grid-cols-12">
      {/* Spec list */}
      <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
          Select a dimension, then drag the slider to see the range to scale.
        </p>

        <ul className="mt-8 border-t border-line">
          {config.items.map((it, i) => {
            const open = it.key === active.key;
            const panelId = `${baseId}-${it.key}`;
            return (
              <li key={it.key} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setActiveKey(it.key)}
                  className={cn(
                    "group block w-full border-l-2 px-4 py-4 text-left transition-colors sm:px-5",
                    open ? "border-copper bg-paper" : "border-transparent hover:bg-paper/60",
                  )}
                >
                  <span className="flex items-baseline gap-4">
                    <span className={cn("font-mono text-[11px]", open ? "text-copper-dark" : "text-steel")}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-heading text-[15px] font-semibold text-ink">{it.label}</span>
                    <span className={cn("font-mono text-[12px]", open ? "text-copper-dark" : "text-steel")}>{it.headline}</span>
                  </span>
                  {open && (
                    <span id={panelId} className="mt-2 block pl-[calc(11px+1rem+0.25rem)] text-[14px] leading-relaxed text-muted-foreground">
                      {it.description}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Drawing panel */}
      <div className="corner-marks relative isolate flex h-[400px] flex-col justify-between overflow-hidden bg-ink p-5 text-white sm:h-[480px] sm:p-8 lg:col-span-7 lg:h-auto lg:min-h-[520px]">
        <div className="tech-grid absolute inset-0 -z-10" aria-hidden />
        <div className="absolute -right-32 -top-32 -z-10 h-80 w-80 rounded-full bg-copper/15 blur-3xl" aria-hidden />

        <div className="relative z-10 flex items-start justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">Scale Preview · {active.label}</span>
          <span className="text-right" aria-live="polite">
            {range ? (
              <>
                <span className="font-mono text-3xl font-medium leading-none text-white sm:text-4xl">{fmt(value, range.decimals)}</span>
                <span className="ml-1.5 font-mono text-sm text-copper">{range.unit}</span>
                <span className="mt-1 block font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">
                  {range.suffix}
                  {stops && range.stopLabels && <span className="text-copper"> · {range.stopLabels[stopIdx]}</span>}
                </span>
              </>
            ) : (
              <span className="font-mono text-xl text-white">{active.headline}</span>
            )}
          </span>
        </div>

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
          {active.visual === "side" && <SidePreview profile={config.profile} f={frac(active, value)} marking={config.marking} label={valueText} />}
          {active.visual === "section" && <SectionPreview profile={config.profile} f={frac(active, value)} />}
          {active.visual === "length" && range && <LengthPreview length={value} max={range.max} marking={config.marking} />}
          {active.visual === "temper" && <TemperPreview />}
          {active.visual === "coil" && <CoilPreview tube={coilTube} outer={0.55 + frac(active, value) * 0.45} />}
          {active.visual === "coil-length" && <CoilPreview tube={coilTube} outer={0.35 + frac(active, value) * 0.65} />}
          {active.visual === "coil-temper" && <CoilPreview tube={coilTube} outer={coilLen ? 0.35 + frac(coilLen, values[coilLen.key]) * 0.65 : 0.8} tail />}
          {(active.visual === "plate-thickness" || active.visual === "plate-width") && (
            <PlatePreview
              t={thickness ? frac(thickness, values.thickness) : 0.3}
              w={width ? frac(width, values.width) : 0.5}
              focus={active.visual === "plate-thickness" ? "t" : "w"}
              label={valueText}
            />
          )}
        </div>

        {/* Slider */}
        <div className={cn("relative z-10 w-full transition-opacity duration-300", !range && "pointer-events-none opacity-0")}>
          <div className="relative mt-6 flex h-10 items-center">
            <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 bg-white/15">
              <div className="h-full bg-gradient-to-r from-copper-dark to-copper" style={{ width: `${pct}%` }} />
            </div>
            {/* ticks: one per standard size, otherwise quarters */}
            {(stops ? stops.map((_, i) => (i / (stops.length - 1)) * 100) : [0, 25, 50, 75, 100]).map((t) => (
              <span key={t} className="absolute top-1/2 h-2.5 w-px -translate-y-1/2 bg-white/25" style={{ left: `${t}%` }} aria-hidden />
            ))}
            <input
              type="range"
              min={stops ? 0 : (range?.min ?? 0)}
              max={stops ? stops.length - 1 : (range?.max ?? 1)}
              step={stops ? 1 : (range?.step ?? 1)}
              value={stops ? stopIdx : range ? value : 0}
              disabled={!range}
              tabIndex={range ? 0 : -1}
              aria-label={`${active.label} preview`}
              aria-valuetext={valueText}
              onChange={(e) => {
                const n = Number(e.target.value);
                setValues((v) => ({ ...v, [active.key]: stops ? stops[n] : n }));
              }}
              className="peer relative z-20 h-10 w-full cursor-pointer opacity-0"
            />
            <div
              className="pointer-events-none absolute top-1/2 z-10 h-4 w-4 rotate-45 border-2 border-ink bg-copper shadow-[0_0_0_4px_hsl(var(--copper)/0.25)] peer-focus-visible:ring-2 peer-focus-visible:ring-white peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-ink"
              style={{ left: `${pct}%`, transform: "translate(-50%, -50%) rotate(45deg)" }}
            />
          </div>
          {stops ? (
            <div className="relative mt-1 h-9 font-mono text-[10px] sm:text-[12px]">
              {stops.map((st, i) => (
                <span
                  key={st}
                  className={cn(
                    "absolute top-0 -translate-x-1/2 text-center leading-tight",
                    i === stopIdx ? "text-copper" : "text-white/45",
                    i % 2 === 1 && "max-sm:hidden",
                  )}
                  style={{ left: `${(i / (stops.length - 1)) * 100}%` }}
                >
                  {st.toFixed(2)}
                  {range?.stopLabels && <span className="block text-[9px] text-white/35 sm:text-[10px]">{range.stopLabels[i]}</span>}
                </span>
              ))}
            </div>
          ) : (
          <div className="mt-1 flex items-center justify-between font-mono text-[12px] text-white/50 sm:text-[13px]">
            <span>
              {range && fmt(range.min, range.decimals)} {range?.unit}
            </span>
            <span>
              {range && fmt(range.max, range.decimals)} {range?.unit}
            </span>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- Drawings ---------- */

function Marking({ text, vertical = false, size }: { text: string; vertical?: boolean; size: number }) {
  return (
    <span
      className="whitespace-nowrap font-mono font-semibold uppercase tracking-[0.18em] text-[#2b1206]/70"
      style={{ fontSize: size, writingMode: vertical ? "vertical-rl" : undefined }}
    >
      {text}
    </span>
  );
}

/** Side elevation: a vertical bar whose width follows the size, with a dimension line across it. */
function SidePreview({ profile, f, marking, label }: { profile: Profile; f: number; marking: string; label: string }) {
  const w = `calc(12px + ${f} * min(150px, 24vw))`;
  const px = 12 + f * 150;
  return (
    <div className="relative flex h-full items-center justify-center">
      <div
        className="relative flex h-full items-center justify-center overflow-hidden transition-[width] duration-150 ease-out"
        style={{
          width: w,
          background: SIDE_SURFACE[profile],
          maskImage: "linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%)",
          WebkitMaskImage: "linear-gradient(180deg,transparent 0%,#000 16%,#000 84%,transparent 100%)",
        }}
      >
        {px > 30 && <Marking text={marking} vertical size={Math.min(12, Math.max(8, px / 9))} />}
      </div>
      {/* dimension line */}
      <div className="absolute top-[24%] transition-[width] duration-150 ease-out" style={{ width: w }}>
        <span className="relative block h-px w-full bg-white/80">
          <span className="absolute -left-px -top-2 h-4 w-px bg-white/80" />
          <span className="absolute -right-px -top-2 h-4 w-px bg-white/80" />
          <span className="absolute left-full top-1/2 ml-2 h-px w-5 bg-white/40" />
          <span className="absolute left-full top-1/2 ml-8 -translate-y-1/2 whitespace-nowrap font-mono text-[11px] text-copper">
            {SIZE_SYMBOL[profile]} {label}
          </span>
        </span>
      </div>
    </div>
  );
}

/** Outer and inner outline of the profile, centred at (150,150). */
function profilePath(profile: Profile, a: number, b: number) {
  const c = 150;
  if (profile === "round" || profile === "oval") {
    return `M${c - a} ${c} a${a} ${b} 0 1 0 ${2 * a} 0 a${a} ${b} 0 1 0 ${-2 * a} 0Z`;
  }
  if (profile === "square" || profile === "rect") {
    const r = Math.min(6, b / 6);
    return `M${c - a + r} ${c - b} H${c + a - r} Q${c + a} ${c - b} ${c + a} ${c - b + r} V${c + b - r} Q${c + a} ${c + b} ${c + a - r} ${c + b} H${c - a + r} Q${c - a} ${c + b} ${c - a} ${c + b - r} V${c - b + r} Q${c - a} ${c - b} ${c - a + r} ${c - b}Z`;
  }
  const n = profile === "hex" ? 6 : 8;
  // a = apothem (across flats / 2) → circumradius
  const R = a / Math.cos(Math.PI / n);
  const off = Math.PI / n;
  const pts = Array.from({ length: n }, (_, i) => {
    const ang = off + (i * 2 * Math.PI) / n;
    return `${(c + R * Math.cos(ang)).toFixed(1)} ${(c + R * Math.sin(ang)).toFixed(1)}`;
  });
  return `M${pts.join(" L")}Z`;
}

/** Cross-section with the wall drawn in proportion across the range (indicative, not to absolute scale). */
function SectionPreview({ profile, f }: { profile: Profile; f: number }) {
  const [a, b] = profile === "rect" ? [125, 72] : profile === "oval" ? [125, 82] : [110, 110];
  const t = 5 + f * (0.42 * b - 5);
  return (
    <div className="flex -translate-y-4 flex-col items-center">
      <svg viewBox="0 0 300 300" className="h-[220px] w-[220px] sm:h-[280px] sm:w-[280px]">
        <defs>
          <linearGradient id="cu-section" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3b88c" />
            <stop offset="0.35" stopColor="#d88a52" />
            <stop offset="0.7" stopColor="#a5552a" />
            <stop offset="1" stopColor="#5a2812" />
          </linearGradient>
        </defs>
        {/* centre lines */}
        <path d="M150 10 V290 M10 150 H290" stroke="hsl(var(--copper))" strokeOpacity={0.35} strokeDasharray="10 4 2 4" strokeWidth={1} />
        <path
          d={`${profilePath(profile, a, b)} ${profilePath(profile, a - t, b - t)}`}
          fill="url(#cu-section)"
          fillRule="evenodd"
          stroke="#f3b88c"
          strokeOpacity={0.5}
          strokeWidth={1}
        />
      </svg>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/45">Section A–A · Wall indicative</p>
    </div>
  );
}

/** Horizontal tube against a metre rule scaled to the maximum length. */
function LengthPreview({ length, max, marking }: { length: number; max: number; marking: string }) {
  const tickStep = max <= 3000 ? 500 : max <= 6000 ? 1000 : 2000;
  const ticks = Array.from({ length: Math.floor(max / tickStep) + 1 }, (_, i) => i * tickStep);
  const pct = (length / max) * 100;
  return (
    <div className="w-full max-w-xl -translate-y-4 px-6 sm:px-10">
      <div className="relative h-7">
        <div
          className="absolute inset-y-0 left-0 flex items-center overflow-hidden pl-3 shadow-[0_10px_22px_-12px_rgba(0,0,0,0.8)] transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%`, background: "linear-gradient(180deg,#f3b88c 0%,#d88a52 22%,#b8652f 50%,#8a4220 78%,#4a200c 100%)" }}
        >
          {pct > 45 && <Marking text={marking} size={9} />}
        </div>
      </div>
      <div className="relative mt-4 h-6 border-t border-white/30">
        {ticks.map((t) => (
          <span key={t} className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: `${(t / max) * 100}%` }}>
            <span className="h-2 w-px bg-white/40" />
            <span className="mt-1 whitespace-nowrap font-mono text-[10px] text-white/50">{t / 1000} m</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/**
 * Pancake coil seen from above: an Archimedean spiral of tube.
 * `tube` = drawn tube width (px, follows O.D.); `outer` = 0–1 share of the maximum coil radius (follows length).
 * `tail` uncoils the outer end in a soft curve to show the annealed temper.
 */
function CoilPreview({ tube, outer, tail = false }: { tube: number; outer: number; tail?: boolean }) {
  const c = 150;
  const r0 = 34;
  const rMax = 30 + outer * 92;
  const pitch = tube + 1.2;
  const turns = Math.max(1.2, (rMax - r0) / pitch);
  const thetaEnd = turns * 2 * Math.PI;
  // Rotate so the outer end sits at the top of the coil, heading right
  const phase = -Math.PI / 2 - thetaEnd;
  const pts: string[] = [];
  for (let th = 0; th <= thetaEnd + 0.001; th += 0.12) {
    const r = r0 + (pitch * th) / (2 * Math.PI);
    pts.push(`${(c + r * Math.cos(th + phase)).toFixed(1)} ${(c + r * Math.sin(th + phase)).toFixed(1)}`);
  }
  const rEnd = r0 + (pitch * thetaEnd) / (2 * Math.PI);
  pts.push(`${c} ${(c - rEnd).toFixed(1)}`);
  let d = `M${pts.join(" L")}`;
  if (tail) {
    const y = c - rEnd;
    d += ` C${c + 80} ${y.toFixed(1)} ${c + 140} ${(y + 20).toFixed(1)} ${c + 170} ${(y + 90).toFixed(1)}`;
  }
  return (
    <svg viewBox={tail ? "0 0 360 300" : "0 0 300 300"} className={cn("-translate-y-4", tail ? "h-[240px] w-[288px] sm:h-[300px] sm:w-[360px]" : "h-[240px] w-[240px] sm:h-[300px] sm:w-[300px]")} role="presentation">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d={d} stroke="#2a1206" strokeWidth={tube + 1.2} />
        <path d={d} stroke="#b8652f" strokeWidth={tube} />
        <path d={d} stroke="#e8a678" strokeWidth={Math.max(0.8, tube * 0.45)} transform="translate(-0.6 -0.6)" />
        <path d={d} stroke="#fbd5b5" strokeWidth={Math.max(0.4, tube * 0.12)} strokeOpacity={0.8} transform="translate(-1 -1)" />
      </g>
      {tail && (
        <text x={c + 60} y={c - rEnd - 18} fontFamily="ui-monospace, monospace" fontSize={11} fill="rgba(255,255,255,0.55)">
          Bends by hand
        </text>
      )}
    </svg>
  );
}

/** Three tubes: rigid hard temper, then progressively more bendable tempers. */
function TemperPreview() {
  const tubes = [
    { label: "H  · Hard", d: "M40 70 L340 70", y: 75 },
    { label: "HH · Half Hard", d: "M40 168 Q190 128 340 168", y: 173 },
    { label: "QH · Quarter Hard", d: "M40 280 Q190 196 340 280", y: 285 },
  ];
  return (
    <svg viewBox="0 0 470 330" className="w-full max-w-[520px] px-6" role="presentation">
      {tubes.map((t) => (
        <g key={t.label}>
          <path d={t.d} fill="none" stroke="#3a180a" strokeWidth={20} />
          <path d={t.d} fill="none" stroke="#b8652f" strokeWidth={15} />
          <path d={t.d} fill="none" stroke="#e0995a" strokeWidth={7} transform="translate(0 -3)" />
          <path d={t.d} fill="none" stroke="#f7caa4" strokeWidth={2} transform="translate(0 -5)" />
          <text x={358} y={t.y} fontFamily="ui-monospace, monospace" fontSize={12} fill="rgba(255,255,255,0.6)">
            {t.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

/** Isometric plate / strip: thickness and width both follow their sliders; the focused one is dimensioned. */
function PlatePreview({ t, w, focus, label }: { t: number; w: number; focus: "t" | "w"; label: string }) {
  const W = 110 + w * 220; // front-face width
  const T = 4 + t * 70; // front-face height (thickness)
  const D = 70; // depth offset
  const x0 = 210 - (W + D * 0.9) / 2;
  const y0 = 160 - T / 2 + D * 0.25;
  const top = `M${x0} ${y0} L${x0 + D * 0.9} ${y0 - D * 0.55} L${x0 + D * 0.9 + W} ${y0 - D * 0.55} L${x0 + W} ${y0}Z`;
  const side = `M${x0 + W} ${y0} L${x0 + W + D * 0.9} ${y0 - D * 0.55} V${y0 - D * 0.55 + T} L${x0 + W} ${y0 + T}Z`;
  const copper = "hsl(var(--copper))";
  const x1 = x0 + W + D * 0.9; // back-right edge
  const y1 = y0 - D * 0.55;
  return (
    <svg viewBox="0 0 480 320" className="w-full max-w-[560px] -translate-y-4 px-4" role="presentation">
      <defs>
        <linearGradient id="cu-top" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3b88c" />
          <stop offset="0.5" stopColor="#d88a52" />
          <stop offset="1" stopColor="#b8652f" />
        </linearGradient>
        <linearGradient id="cu-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c8743f" />
          <stop offset="1" stopColor="#6b3014" />
        </linearGradient>
      </defs>
      <path d={top} fill="url(#cu-top)" />
      <rect x={x0} y={y0} width={W} height={T} fill="url(#cu-front)" />
      <path d={side} fill="#5a2812" />
      {focus === "t" ? (
        <g stroke={copper} strokeWidth={1.2}>
          <path d={`M${x1 + 14} ${y1} V${y1 + T} M${x1 + 8} ${y1} H${x1 + 20} M${x1 + 8} ${y1 + T} H${x1 + 20}`} />
          <text x={x1 + 26} y={y1 + T / 2 + 4} fontFamily="ui-monospace, monospace" fontSize={12} fill={copper} stroke="none">
            {label}
          </text>
        </g>
      ) : (
        <g stroke={copper} strokeWidth={1.2}>
          <path d={`M${x0} ${y0 + T + 18} H${x0 + W} M${x0} ${y0 + T + 12} V${y0 + T + 24} M${x0 + W} ${y0 + T + 12} V${y0 + T + 24}`} />
          <text x={x0 + W / 2} y={y0 + T + 40} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize={12} fill={copper} stroke="none">
            {label}
          </text>
        </g>
      )}
    </svg>
  );
}

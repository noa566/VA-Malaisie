import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n.jsx";
import { easeOutExpo } from "../lib/motion.js";

/**
 * Projection équirectangulaire centrée sur la péninsule malaise.
 * Coordonnées : longitude / latitude réelles.
 */
function proj(lon, lat) {
  const x = 86 + (lon - 99.55) * 118;
  const y = 42 + (7.12 - lat) * 118;
  return [Number(x.toFixed(1)), Number(y.toFixed(1))];
}

function toPath(points, close = true) {
  return (
    points.map(([lon, lat], i) => {
      const [x, y] = proj(lon, lat);
      return `${i === 0 ? "M" : "L"}${x} ${y}`;
    }).join(" ") + (close ? " Z" : "")
  );
}

/* Côte ouest (nord → sud) puis côte est (sud → nord). */
const PENINSULA = [
  [100.2, 6.5],
  [100.17, 6.22],
  [100.2, 5.85],
  [100.28, 5.42],
  [100.4, 4.88],
  [100.55, 4.32],
  [100.68, 3.92],
  [100.9, 3.48],
  [101.12, 3.18],
  [101.26, 2.94],
  [101.48, 2.55],
  [101.82, 2.32],
  [102.2, 2.19],
  [102.58, 1.98],
  [102.95, 1.78],
  [103.22, 1.5],
  [103.4, 1.34],
  [103.51, 1.266],
  [103.7, 1.31],
  [103.9, 1.36],
  [104.12, 1.43],
  [104.26, 1.57],
  [104.05, 1.92],
  [103.86, 2.42],
  [103.55, 3.05],
  [103.42, 3.55],
  [103.36, 4.05],
  [103.26, 4.55],
  [103.16, 5.15],
  [103.08, 5.52],
  [102.72, 5.95],
  [102.25, 6.14],
  [101.75, 6.42],
  [101.25, 6.62],
  [100.75, 6.7],
  [100.42, 6.62],
];

const THAILAND = [
  [100.2, 6.5],
  [100.42, 6.62],
  [100.75, 6.7],
  [101.25, 6.62],
  [101.75, 6.42],
  [102.25, 6.14],
  [102.35, 6.55],
  [101.9, 6.95],
  [101.2, 7.18],
  [100.5, 7.22],
  [100.05, 6.95],
  [100.08, 6.55],
];

const SINGAPORE = [
  [103.62, 1.24],
  [103.66, 1.17],
  [103.84, 1.155],
  [104.02, 1.22],
  [104.08, 1.29],
  [104.0, 1.345],
  [103.86, 1.38],
  [103.74, 1.378],
  [103.66, 1.35],
];

const KL = [101.686, 3.139];
const SG = [103.83, 1.27];

function routeCurve() {
  const [x1, y1] = proj(...KL);
  const [x2, y2] = proj(...SG);
  const [cx, cy] = proj(102.85, 2.95);
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;
}

function Pin({ lon, lat, label, sub, align = "right", delay = 0, reduced }) {
  const [x, y] = proj(lon, lat);
  const labelX = align === "right" ? x + 16 : x - 16;
  const anchor = align === "right" ? "start" : "end";

  return (
    <g>
      {!reduced ? (
        <motion.circle
          cx={x}
          cy={y}
          fill="none"
          stroke="#E0A458"
          strokeWidth="1"
          initial={{ r: 7, opacity: 0.5 }}
          animate={{ r: [7, 20], opacity: [0.45, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay }}
        />
      ) : null}
      <circle cx={x} cy={y} r="4.5" fill="#E0A458" />
      <circle cx={x} cy={y} r="8.5" fill="none" stroke="#E0A458" strokeOpacity="0.45" />
      <text
        x={labelX}
        y={y - 6}
        textAnchor={anchor}
        fill="#EDEDED"
        fontSize="15"
        fontFamily="Inter Tight, Inter, sans-serif"
        fontWeight="600"
      >
        {label}
      </text>
      <text
        x={labelX}
        y={y + 12}
        textAnchor={anchor}
        fill="#9AA0A6"
        fontSize="11"
        fontFamily="Inter, sans-serif"
      >
        {sub}
      </text>
    </g>
  );
}

function insetProj(lon, lat) {
  return [12 + (lon - 95.2) * 6.6, 28 + (8.2 - lat) * 6.6];
}

function Inset({ label }) {
  const peninsula = PENINSULA.map(([lon, lat]) => insetProj(lon, lat));
  const borneo = [
    [109.05, 5.9],
    [110.2, 1.6],
    [114.5, 1.2],
    [119.3, 5.3],
    [118.7, 7.0],
    [117.0, 7.35],
    [113.8, 6.7],
    [111.3, 6.0],
  ].map(([lon, lat]) => insetProj(lon, lat));
  const sumatra = [
    [95.6, 5.5],
    [97.5, 3.4],
    [100.8, 1.4],
    [104.0, -0.2],
    [103.4, 1.0],
    [101.2, 2.2],
    [98.6, 3.8],
    [95.8, 5.2],
  ].map(([lon, lat]) => insetProj(lon, lat));
  const zoom = [
    insetProj(99.7, 7.0),
    insetProj(104.5, 7.0),
    insetProj(104.5, 1.05),
    insetProj(99.7, 1.05),
  ];
  const toD = (pts, close = true) =>
    pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(" ") +
    (close ? " Z" : "");

  return (
    <g transform="translate(548, 28)" aria-hidden="true">
      <rect width="186" height="156" rx="6" fill="#0e1216" stroke="#2a3139" />
      <text
        x="12"
        y="18"
        fill="#6a727a"
        fontSize="9"
        letterSpacing="1.6"
        fontFamily="Inter Tight, Inter, sans-serif"
      >
        {label}
      </text>
      <path d={toD(sumatra)} fill="#161b20" stroke="#2a3139" strokeWidth="0.6" />
      <path d={toD(borneo)} fill="#1a222a" stroke="#3d4852" strokeWidth="0.7" />
      <path d={toD(peninsula)} fill="#cfd6dc" stroke="#EDEDED" strokeWidth="0.7" />
      <path
        d={toD(zoom)}
        fill="none"
        stroke="#E0A458"
        strokeWidth="1"
        strokeOpacity="0.85"
      />
    </g>
  );
}

export default function MissionMap() {
  const { mission } = useI18n();
  const reduced = useReducedMotion();
  const malaysiaLabel = proj(101.85, 4.55);
  const thailandLabel = proj(101.35, 6.82);
  const map = mission.map;

  return (
    <figure className="overflow-hidden rounded-2xl border border-line bg-surface">
      <figcaption className="sr-only">{map.caption}</figcaption>
      <svg
        viewBox="0 0 760 820"
        role="img"
        aria-label={map.caption}
        className="h-auto w-full"
      >
        <rect width="760" height="820" fill="#12161b" />
        <Inset label={map.malaysia} />
        <path d={toPath(THAILAND)} fill="#181d23" stroke="#2a3139" strokeWidth="0.8" />
        <path
          d={toPath(PENINSULA)}
          fill="#1c242c"
          stroke="#5a6570"
          strokeWidth="1.15"
          strokeLinejoin="round"
        />
        <path
          d={toPath(SINGAPORE)}
          fill="#24303a"
          stroke="#E0A458"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        <motion.path
          d={routeCurve()}
          fill="none"
          stroke="#E0A458"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0.2 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduced ? 0 : 1.7, ease: easeOutExpo, delay: 0.15 }}
        />

        <text
          x={thailandLabel[0]}
          y={thailandLabel[1]}
          textAnchor="middle"
          fill="#6a727a"
          fontSize="11"
          letterSpacing="3"
          fontFamily="Inter Tight, Inter, sans-serif"
        >
          {map.thailand}
        </text>
        <text
          x={malaysiaLabel[0]}
          y={malaysiaLabel[1]}
          textAnchor="middle"
          fill="#c8cdd2"
          fontSize="13"
          letterSpacing="6"
          fontFamily="Inter Tight, Inter, sans-serif"
        >
          {map.malaysia}
        </text>
        <Pin
          lon={KL[0]}
          lat={KL[1]}
          label="Kuala Lumpur"
          sub={map.klDates}
          align="left"
          reduced={reduced}
        />
        <Pin
          lon={SG[0]}
          lat={SG[1]}
          label={map.sgName}
          sub={map.sgDates}
          align="right"
          delay={0.4}
          reduced={reduced}
        />
      </svg>
    </figure>
  );
}

export function MissionTimeline() {
  const { mission } = useI18n();

  return (
    <ol className="mt-12 grid gap-4 md:grid-cols-3">
      {mission.timeline.map((stop, i) => (
        <li
          key={stop.place}
          className="relative rounded-2xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-accent/30 md:p-6"
        >
          <p className="font-display text-xs tracking-[0.18em] text-accent uppercase">
            {String(i + 1).padStart(2, "0")} · {stop.kicker}
          </p>
          <h3 className="mt-3 font-display text-xl font-semibold text-cream">
            {stop.place}
          </h3>
          <p className="mt-1 text-sm text-accent/90">{stop.dates}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{stop.detail}</p>
        </li>
      ))}
    </ol>
  );
}

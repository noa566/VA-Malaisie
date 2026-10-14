import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n.jsx";
import { fadeUp, stagger, viewport } from "../lib/motion.js";
import AnimatedCounter from "./AnimatedCounter.jsx";

const TONES = [
  ["#1c2229", "#3a2e22"],
  ["#161c24", "#2a3340"],
  ["#1a1f1c", "#3a3228"],
  ["#18161f", "#2e2a38"],
  ["#1c1a18", "#3d3428"],
  ["#151c22", "#2c3844"],
  ["#1b1816", "#3a2c26"],
  ["#171a20", "#2a3038"],
  ["#1a1714", "#3c3326"],
  ["#14181d", "#2f3640"],
];

function Portrait({ member, index }) {
  const [from, to] = TONES[index % TONES.length];
  const initial = member.firstName.slice(0, 1).toUpperCase();

  if (member.photo) {
    return (
      <img
        src={member.photo}
        alt={`Portrait de ${member.firstName}`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover"
      />
    );
  }

  return (
    <div
      className="relative flex h-full w-full items-end justify-start overflow-hidden"
      style={{ background: `linear-gradient(160deg, ${from}, ${to})` }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 120 150"
        className="absolute inset-x-0 bottom-0 mx-auto h-[92%] w-[70%] text-cream/12"
        fill="currentColor"
      >
        <circle cx="60" cy="46" r="22" />
        <path d="M18 150c6-38 28-58 42-58s36 20 42 58H18z" />
      </svg>
      <span className="relative z-10 p-3 font-display text-2xl font-medium text-cream/25">
        {initial}
      </span>
    </div>
  );
}

export default function TeamGrid() {
  const { site, team } = useI18n();
  const reduced = useReducedMotion();

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(reduced)}
        className="max-w-3xl space-y-5 text-[17px] leading-relaxed text-muted"
      >
        {team.body.map((p) => (
          <motion.p key={p} variants={fadeUp(reduced)}>
            {p}
          </motion.p>
        ))}
      </motion.div>

      <dl className="mt-14 grid grid-cols-2 gap-6 border-y border-line py-10 sm:grid-cols-4 sm:gap-8">
        {team.stats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-xs tracking-[0.16em] text-muted uppercase">
              {stat.label}
            </dt>
            <dd className="mt-2 font-display text-4xl font-semibold text-accent sm:text-5xl">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger(reduced)}
        className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-5"
      >
        {team.members.map((member, index) => (
          <motion.li
            key={`${member.firstName}-${member.role}`}
            variants={fadeUp(reduced)}
            className="group overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-accent/35"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <div className="h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]">
                <Portrait member={member} index={index} />
              </div>
            </div>
            <div className="px-3 py-3">
              <p className="font-display text-sm font-medium text-cream">
                {member.firstName}
              </p>
              <p className="mt-0.5 text-xs text-muted">{member.role}</p>
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <p className="mt-10 text-sm text-muted">
        {team.projectsNote}{" "}
        <a
          href={site.mainSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-cream underline decoration-accent/60 decoration-1 underline-offset-4 transition-colors hover:text-accent"
        >
          {team.projectsLinkLabel}
          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
        </a>
      </p>
    </div>
  );
}

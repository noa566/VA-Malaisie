import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n.jsx";
import { fadeUp, viewport } from "../lib/motion.js";

export default function Chapter({
  id,
  number,
  title,
  lead,
  children,
}) {
  const reduced = useReducedMotion();
  const { ui } = useI18n();

  return (
    <section
      id={id}
      data-chapter={number}
      className="relative scroll-mt-24 px-5 py-24 sm:px-8 md:px-12 md:py-32 lg:px-16"
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-6xl">
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp(reduced)}
          className="max-w-3xl"
        >
          <p className="mb-4 flex items-center gap-3 font-display text-sm font-medium tracking-[0.22em] text-accent uppercase">
            <span aria-hidden="true">{number}</span>
            <span className="h-px w-8 bg-accent/70" />
            <span className="sr-only">{ui.chapter} {number} — </span>
          </p>
          <h2
            id={`${id}-title`}
            className="font-display text-3xl leading-[1.15] font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
          {lead ? (
            <p className="mt-5 max-w-2xl text-lg text-muted sm:text-xl">
              {lead}
            </p>
          ) : null}
        </motion.header>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

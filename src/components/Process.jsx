import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n.jsx";
import { fadeUp, stagger, viewport } from "../lib/motion.js";

export default function Process() {
  const { process } = useI18n();
  const reduced = useReducedMotion();

  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(reduced)}
      className="grid gap-0 border-b border-line sm:grid-cols-2"
    >
      {process.steps.map((step) => (
        <motion.li
          key={step.number}
          variants={fadeUp(reduced)}
          className="border-t border-line py-8 pr-4 sm:border-r sm:odd:pr-10 sm:even:border-r-0 sm:even:pl-10 md:py-10"
        >
          <p className="font-display text-sm tracking-[0.2em] text-accent">
            {step.number}
          </p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-cream">
            {step.title}
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
            {step.text}
          </p>
        </motion.li>
      ))}
    </motion.ol>
  );
}

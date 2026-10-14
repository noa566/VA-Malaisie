import { motion, useReducedMotion } from "framer-motion";
import { easeOutExpo } from "../lib/motion.js";

export default function Transition({ children }) {
  const reduced = useReducedMotion();
  const words = children.split(" ");

  return (
    <section
      className={
        reduced
          ? "relative flex min-h-[55svh] items-center justify-center px-6 py-20"
          : "relative h-[125svh]"
      }
      aria-label="Transition"
    >
      <div className="sticky top-0 flex h-svh items-center justify-center px-6">
        <div className="relative max-w-4xl text-center">
          <div
            className="pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/8 blur-3xl"
            aria-hidden="true"
          />
          <motion.div
            initial={{ scaleX: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: reduced ? 0 : 0.8, ease: easeOutExpo }}
            className="mx-auto mb-8 h-px w-14 origin-center bg-accent"
            aria-hidden="true"
          />
          <p className="font-display relative text-[1.85rem] leading-[1.2] font-semibold tracking-tight text-cream sm:text-4xl md:text-5xl lg:text-[3.4rem]">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                className="mr-[0.28em] inline-block last:mr-0"
                initial={{ opacity: 0, y: reduced ? 0 : 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{
                  duration: reduced ? 0.01 : 0.55,
                  delay: reduced ? 0 : 0.12 + i * 0.055,
                  ease: easeOutExpo,
                }}
              >
                {word}
              </motion.span>
            ))}
          </p>
          <motion.div
            initial={{ scaleX: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: reduced ? 0 : 0.8,
              delay: reduced ? 0 : 0.35,
              ease: easeOutExpo,
            }}
            className="mx-auto mt-8 h-px w-14 origin-center bg-accent"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}

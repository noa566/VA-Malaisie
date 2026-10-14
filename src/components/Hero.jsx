import { motion, useReducedMotion } from "framer-motion";
import { useI18n } from "../i18n.jsx";
import { easeOutExpo } from "../lib/motion.js";

export default function Hero() {
  const { hero } = useI18n();
  const reduced = useReducedMotion();
  const duration = reduced ? 0.01 : 0.8;
  const delay = (i) => (reduced ? 0 : 0.12 + i * 0.12);

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center px-5 pt-24 pb-16 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: delay(0), ease: easeOutExpo }}
          className="mb-6 font-display text-[11px] font-medium tracking-[0.22em] text-accent uppercase sm:text-xs"
        >
          {hero.label}
        </motion.p>

        <h1 className="font-display max-w-[18ch] text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-cream sm:text-5xl md:max-w-[20ch] md:text-6xl lg:text-7xl">
          {hero.titleLines.map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                initial={{ opacity: 0, y: reduced ? 0 : "100%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration, delay: delay(1 + i), ease: easeOutExpo }}
                className="block"
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: delay(3), ease: easeOutExpo }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: reduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration, delay: delay(4), ease: easeOutExpo }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <a
            href={hero.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent-soft"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-cream/20 px-6 py-3 text-sm font-medium text-cream transition-colors duration-200 hover:border-cream/45 hover:bg-white/5"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#qui-nous-sommes"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration, delay: reduced ? 0 : 1.1 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] tracking-[0.18em] text-muted uppercase"
        aria-label={hero.scrollHint}
      >
        <span className="hidden sm:inline">{hero.scrollHint}</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-cream/25 pt-1.5">
          <motion.span
            className="block h-1.5 w-1 rounded-full bg-accent"
            animate={reduced ? {} : { y: [0, 10, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}

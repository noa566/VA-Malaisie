import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n.jsx";
import { fadeUp, mailtoLink, stagger, viewport } from "../lib/motion.js";

export default function Offers() {
  const { offers, site } = useI18n();
  const reduced = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger(reduced)}
      className="grid gap-5 lg:grid-cols-2 lg:gap-6"
    >
      {offers.cards.map((card, index) => {
        const href = mailtoLink(
          site.contact.email,
          card.mailtoSubject,
          card.mailtoBody,
        );
        const featured = index === 0;

        return (
          <motion.article
            key={card.id}
            variants={fadeUp(reduced)}
            id={card.id}
            className={`flex scroll-mt-28 flex-col rounded-2xl border p-6 sm:p-8 ${
              featured
                ? "border-accent/40 bg-surface"
                : "border-line bg-surface"
            }`}
          >
            <p className="font-display text-xs tracking-[0.2em] text-accent uppercase">
              {card.kicker}
            </p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-cream sm:text-3xl">
              {card.title}
            </h3>

            <dl className="mt-8 flex flex-1 flex-col gap-7">
              {offers.structure.map((row) => (
                <div key={row.key}>
                  <dt className="text-[11px] tracking-[0.18em] text-muted uppercase">
                    {row.label}
                  </dt>
                  <dd className="mt-2 text-[15px] leading-relaxed text-cream/85">
                    {card[row.key]}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={href}
              className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                featured
                  ? "bg-accent text-ink hover:bg-accent-soft"
                  : "border border-cream/20 text-cream hover:border-cream/45 hover:bg-white/5"
              }`}
            >
              {card.cta}
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </motion.article>
        );
      })}
    </motion.div>
  );
}

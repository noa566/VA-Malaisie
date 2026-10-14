import { ArrowUpRight, Calendar, Mail, Phone } from "lucide-react";
import { useI18n } from "../i18n.jsx";
import { mailtoLink } from "../lib/motion.js";

export default function CTA() {
  const { cta, offers, site } = useI18n();

  return (
    <div className="max-w-3xl">
      <p className="text-lg leading-relaxed text-muted sm:text-xl">{cta.text}</p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {cta.options.map((option) => {
          const card = offers.cards.find((c) => c.id === option.id);
          const href = mailtoLink(
            site.contact.email,
            card?.mailtoSubject,
            card?.mailtoBody,
          );
          return (
            <a
              key={option.id}
              href={href}
              className="group rounded-2xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/40"
            >
              <p className="font-display flex items-center justify-between gap-3 text-lg font-semibold text-cream group-hover:text-accent">
                {option.label}
                <ArrowUpRight className="h-4 w-4 opacity-70" strokeWidth={1.5} aria-hidden="true" />
              </p>
              <p className="mt-2 text-sm text-muted">{option.hint}</p>
            </a>
          );
        })}
      </div>

      {site.calendly ? (
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-cream underline decoration-accent/60 underline-offset-4 hover:text-accent"
        >
          <Calendar className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
          {cta.calendlyLabel}
        </a>
      ) : null}

      <address className="mt-12 border-t border-line pt-8 not-italic">
        <p className="font-display text-base font-medium text-cream">
          {site.contact.name}
        </p>
        <p className="mt-1 text-sm text-muted">{site.contact.role}</p>
        <p className="mt-4 flex flex-col gap-2 text-sm sm:flex-row sm:gap-6">
          <a
            href={`mailto:${site.contact.email}`}
            className="inline-flex items-center gap-2 text-cream hover:text-accent"
          >
            <Mail className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
            {site.contact.email}
          </a>
          {site.contact.phone ? (
            <a
              href={`tel:${site.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-cream hover:text-accent"
            >
              <Phone className="h-4 w-4 text-accent" strokeWidth={1.5} aria-hidden="true" />
              {site.contact.phone}
            </a>
          ) : null}
        </p>
      </address>
    </div>
  );
}

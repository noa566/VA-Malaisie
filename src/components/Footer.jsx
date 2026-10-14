import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n.jsx";

export default function Footer() {
  const { footer, site, ui } = useI18n();

  return (
    <footer className="border-t border-line px-5 py-12 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.22em] text-cream uppercase">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {footer.blurb}
          </p>
          <p className="mt-4 text-sm text-muted">
            {site.program} · {site.school}
          </p>
        </div>

        <ul className="flex flex-col gap-2 text-sm">
          <li>
            <a
              href={site.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-cream hover:text-accent"
            >
              {ui.mainSite}
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} aria-hidden="true" />
            </a>
          </li>
          {site.social.linkedin ? (
            <li>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
          ) : null}
          {site.social.instagram ? (
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream hover:text-accent"
              >
                Instagram
              </a>
            </li>
          ) : null}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">
        {footer.legal} · {site.year}
      </p>
    </footer>
  );
}

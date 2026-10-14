import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n.jsx";

export default function Navbar() {
  const { nav, site, ui, lang, setLang } = useI18n();
  const reduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-white/5 bg-ink/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 pl-8 sm:px-8 md:h-[4.25rem] md:px-12 lg:px-16"
        aria-label={ui.navAria}
      >
        <a
          href="#hero"
          className="font-display inline-flex items-center gap-2.5 text-[15px] font-semibold tracking-[0.22em] text-cream uppercase"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors duration-200 hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangSwitch lang={lang} setLang={setLang} label={ui.langAria} />
          <a
            href={nav.cta.href}
            className="hidden rounded-full bg-accent px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:bg-accent-soft sm:inline-flex"
          >
            {nav.cta.label}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? ui.closeMenu : ui.openMenu}
          >
            {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="menu-mobile"
            initial={{ opacity: 0, y: reduced ? 0 : -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: reduced ? 0.01 : 0.25 }}
            className="border-t border-white/5 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-6 sm:px-8">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={close}
                    className="block py-3 font-display text-lg text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <a
                  href={nav.cta.href}
                  onClick={close}
                  className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink"
                >
                  {nav.cta.label}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function LangSwitch({ lang, setLang, label }) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-1 font-display text-[11px] tracking-[0.16em]"
    >
      <button
        type="button"
        onClick={() => setLang("fr")}
        aria-pressed={lang === "fr"}
        className={`rounded px-1.5 py-1 transition-colors ${
          lang === "fr" ? "text-accent" : "text-muted hover:text-cream"
        }`}
      >
        FR
      </button>
      <span className="text-line" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`rounded px-1.5 py-1 transition-colors ${
          lang === "en" ? "text-accent" : "text-muted hover:text-cream"
        }`}
      >
        EN
      </button>
    </div>
  );
}

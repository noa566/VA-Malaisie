import { useEffect } from "react";
import { useI18n } from "../i18n.jsx";

export default function Seo() {
  const { site, lang } = useI18n();

  useEffect(() => {
    document.title = site.seo.title;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", site.seo.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", site.seo.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", site.seo.description);

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.setAttribute("href", `${site.canonicalUrl}/`);
  }, [site, lang]);

  return null;
}

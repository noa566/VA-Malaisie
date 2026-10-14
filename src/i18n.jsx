import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { content } from "./content.js";

const LanguageContext = createContext(null);
const STORAGE_KEY = "va-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === "undefined") return "fr";
    return window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "fr";
  });

  const setLang = (next) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      ...content[lang],
    }),
    [lang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}

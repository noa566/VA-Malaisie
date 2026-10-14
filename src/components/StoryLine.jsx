import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

const CHAPTERS = [
  { id: "hero", number: "00" },
  { id: "qui-nous-sommes", number: "01" },
  { id: "mission", number: "02" },
  { id: "offres", number: "03" },
  { id: "deroule", number: "04" },
  { id: "contact", number: "05" },
];

export default function StoryLine() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });
  const [active, setActive] = useState(0);
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    const measure = () => {
      const doc = document.documentElement;
      const next = CHAPTERS.map((ch) => {
        const el = document.getElementById(ch.id);
        if (!el) return { ...ch, t: 0 };
        const top = el.getBoundingClientRect().top + window.scrollY;
        const t = top / Math.max(doc.scrollHeight, 1);
        return { ...ch, t: Math.min(Math.max(t, 0), 1) };
      });
      setMarks(next);
    };

    measure();
    window.addEventListener("resize", measure);
    const timer = window.setTimeout(measure, 400);
    return () => {
      window.removeEventListener("resize", measure);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => {
      if (!marks.length) return;
      let idx = 0;
      for (let i = 0; i < marks.length; i += 1) {
        if (v >= marks[i].t - 0.02) idx = i;
      }
      setActive(idx);
    });
    return () => unsub();
  }, [scrollYProgress, marks]);

  return (
    <div
      className="pointer-events-none fixed top-0 bottom-0 left-2 z-40 sm:left-3 md:left-6"
      aria-hidden="true"
    >
      <div className="relative h-full w-px">
        <div className="absolute inset-y-[11%] w-px bg-line/80" />
        <motion.div
          className="absolute top-[11%] h-[78%] w-px origin-top bg-accent"
          style={{ scaleY: reduced ? 1 : scaleY }}
        />
        {marks.map((mark, i) => {
          const lit = i <= active;
          const top = 11 + mark.t * 78;
          return (
            <span
              key={mark.id}
              className="absolute left-1/2 block h-2 w-2 -translate-x-1/2 rounded-full border transition-[background-color,border-color,box-shadow] duration-500"
              style={{
                top: `${top}%`,
                backgroundColor: lit ? "#E0A458" : "#0B0D10",
                borderColor: lit ? "#E0A458" : "#2A3139",
                boxShadow: lit ? "0 0 0 4px rgb(224 164 88 / 0.18)" : "none",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

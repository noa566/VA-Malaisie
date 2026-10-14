export const easeOutExpo = [0.22, 1, 0.36, 1];

export const fadeUp = (reduced) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0.01 : 0.7, ease: easeOutExpo },
  },
});

export const stagger = (reduced) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : 0.1,
      delayChildren: reduced ? 0 : 0.08,
    },
  },
});

export const viewport = { once: true, amount: 0.25, margin: "0px 0px -8% 0px" };

export function mailtoLink(email, subject, body) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${email}${query ? `?${query}` : ""}`;
}

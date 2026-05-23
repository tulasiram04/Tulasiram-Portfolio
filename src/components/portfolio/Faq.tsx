import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  { q: "Why choose WebWeave Studio?", a: "I deliver premium, conversion-focused websites with the polish of a top design studio — but with the speed and dedication of an independent developer. Every project gets my full attention." },
  { q: "How long does development take?", a: "A landing page typically ships in 5–7 days. A standard multi-page website takes 10–14 days. Larger custom builds are quoted individually." },
  { q: "Do you provide SEO optimization?", a: "Yes. Every site is built with on-page SEO best practices: semantic HTML, fast load times, structured metadata, sitemaps, and clean URLs." },
  { q: "Are websites mobile responsive?", a: "Absolutely. Mobile-first development is standard. Your site will look and perform beautifully on every screen size — phone, tablet, and desktop." },
  { q: "Do you work internationally?", a: "Yes. I work with founders and businesses worldwide. Communication is via email, WhatsApp, or video calls — whatever fits your timezone." },
  { q: "What technologies do you use?", a: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and modern cloud infrastructure — chosen for performance and longevity." },
  { q: "Do you redesign websites?", a: "Yes. If your current site is outdated or underperforming, I can rebuild it from the ground up with a premium, conversion-focused design." },
  { q: "How can clients contact you?", a: "Easiest is WhatsApp at +91 6374357533 or email webweavestudio04@gmail.com. You can also use the booking form below." },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-gold italic">answered</span></>}
          subtitle="Everything you need to know before we start building."
        />

        <div className="mt-16 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-2xl border-gold-gradient overflow-hidden ${isOpen ? "glass-strong shadow-glow" : "glass"}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left"
                >
                  <span className="font-display text-lg md:text-xl">{f.q}</span>
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all ${isOpen ? "bg-gradient-gold rotate-45 text-primary-foreground shadow-glow" : "glass text-primary"}`}>
                    <Plus size={16} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

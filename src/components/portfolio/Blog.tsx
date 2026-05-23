import { motion } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const posts = [
  { tag: "Web Development", title: "Why your website is losing you customers in 2026", date: "Mar 12, 2026", read: "5 min" },
  { tag: "SEO", title: "The new SEO playbook for founders (post-AI search era)", date: "Feb 28, 2026", read: "7 min" },
  { tag: "UI/UX", title: "10 UI patterns that quietly convert better", date: "Feb 14, 2026", read: "6 min" },
  { tag: "Frontend", title: "How to build a premium website with React & Framer Motion", date: "Jan 30, 2026", read: "9 min" },
  { tag: "Startup", title: "Your first website: what founders get wrong", date: "Jan 18, 2026", read: "4 min" },
  { tag: "Performance", title: "Sub-1s load times: the engineering behind it", date: "Jan 04, 2026", read: "8 min" },
];

export function Blog() {
  return (
    <section id="blog" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Insights"
          title={<>From the <span className="text-gradient-gold italic">studio journal</span></>}
          subtitle="Practical writing on modern web development, SEO, and building digital brands that last."
        />

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-3xl glass border-gold-gradient p-7 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs uppercase tracking-[0.2em] text-primary">{p.tag}</span>
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-display text-xl leading-snug mb-6 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground pt-4 border-t border-white/5">
                  <span className="flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                  <span>{p.read} read</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

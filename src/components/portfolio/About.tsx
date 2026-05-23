import { motion } from "framer-motion";
import developer from "@/assets/developer.jpeg";
import { Award, Sparkles, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const stats = [
  { value: "2", label: "Projects Completed" },
  { value: "2", label: "Happy Clients" },
  { value: "99", label: "Performance Score" },
  { value: "24/7", label: "Responsive Support" },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="About"
          title={<>Crafting digital experiences <span className="text-gradient-gold italic">that convert</span></>}
          subtitle="Premium, scalable, SEO-focused websites for founders and businesses ready to grow."
        />

        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden border-gold-gradient shadow-elegant">
              <img
                src={developer}
                alt="WebWeave Studio — Premium Web Design"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

              <div className="absolute bottom-6 left-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-white">Founder & Developer</span>
                </div>
                <h3 className="font-display text-3xl font-bold text-white mb-1 tracking-tight">Tulasiram </h3>
                <p className="text-sm text-white/70">WebWeave Studio · India</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 text-primary">
              <Sparkles size={18} />
              <span className="text-sm uppercase tracking-[0.2em]">Welcome to WebWeave Studio</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-light leading-tight">
              I build <span className="text-gradient-gold italic">premium</span> digital experiences for businesses that want to stand out.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I'm a Full Stack Developer obsessed with crafting modern, scalable websites
              that don't just look beautiful - they perform. From founder - led startups to
              established brands, I help businesses grow online with strategic design,
              SEO-first development, and interfaces users actually love.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every project I take on is treated like a launch. Clean code, lightning-fast
              load times, and pixel-perfect details that make your brand unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-2xl p-5 hover-lift"
                >
                  <div className="font-display text-3xl text-gradient-gold">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

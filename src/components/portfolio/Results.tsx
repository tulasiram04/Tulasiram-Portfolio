import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { Gauge, Search, Smartphone, Sparkles, Target, Rocket, Zap, Crown } from "lucide-react";

const metrics = [
  { icon: Gauge, label: "Performance Score", value: "95", suffix: "+" },
  { icon: Search, label: "Optimized Structure", value: "SEO", suffix: "" },
  { icon: Smartphone, label: "Responsive Design", value: "100", suffix: "%" },
  { icon: Zap, label: "Average Load Time", value: "1.1", suffix: "s" },
];

const features = [
  { icon: Target, title: "Business-focused strategy", desc: "Every design decision serves a business goal." },
  { icon: Rocket, title: "Conversion optimization", desc: "Built to turn visitors into paying customers." },
  { icon: Sparkles, title: "Modern animations", desc: "Cinematic motion that feels alive, not distracting." },
  { icon: Crown, title: "Premium architecture", desc: "Scalable code built for the next 10 years." },
];

export function Results() {
  return (
    <section id="results" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Results"
          title={<>Numbers that <span className="text-gradient-gold italic">speak louder</span> than words</>}
          subtitle="Premium engineering measured in real performance metrics - not promises."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass-strong rounded-3xl p-6 shadow-card overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
              <div className="relative flex items-center justify-between mb-6">
                <m.icon className="text-primary" size={24} />
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Live</span>
              </div>
              <div className="relative font-display text-5xl text-gradient-gold">
                {m.value}
                <span className="text-2xl text-muted-foreground">{m.suffix}</span>
              </div>
              <div className="text-sm text-muted-foreground mt-2">{m.label}</div>
              <div className="mt-4 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: m.suffix === "%" || m.suffix === "+" ? `${m.value}%` : "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                  className="h-full bg-gradient-gold rounded-full shadow-glow"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass p-5 hover-lift"
            >
              <f.icon size={20} className="text-primary mb-3" />
              <div className="font-medium mb-1">{f.title}</div>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

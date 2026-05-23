import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail, Sparkles, Zap, Smartphone, Search, Gauge, Crown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Particles } from "./Particles";

const badges = [
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Search, label: "SEO Optimized" },
  { icon: Sparkles, label: "Modern UI/UX" },
  { icon: Gauge, label: "Fast Performance" },
  { icon: Crown, label: "Premium Development" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
      />
      <Particles count={50} />

      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-secondary/30 blur-[120px] glow-pulse" />
      <div className="absolute bottom-1/4 -right-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[140px] glow-pulse" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for Premium Projects · 2026
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight max-w-5xl"
          >
            Your business deserves a{" "}
            <span className="text-gradient-gold italic font-medium">better</span> website
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Beautiful interfaces, modern development, and strategic SEO that delivers
            measurable growth - built for founders who refuse to settle for ordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-enquiry"));
              }}
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-all hover:scale-105"
            >
              <Calendar size={16} />
              Book a Call
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full glass-strong px-7 py-3.5 text-sm font-medium text-foreground hover:border-primary/40 border border-white/10 transition-all"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-20 w-full"
          >
            <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground/70 mb-6">
              Crafted with precision
            </div>
            <div className="relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {badges.map((b) => (
                  <div
                    key={b.label}
                    className="group flex items-center gap-2 rounded-full glass border-gold-gradient px-4 py-2 text-xs md:text-sm text-muted-foreground hover:text-foreground transition-all hover:scale-105"
                  >
                    <b.icon size={14} className="text-primary" />
                    {b.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-3"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">
              WebWeave Studio · Premium Web Design
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/50">
              <Zap size={12} />
              <span className="text-xs">Scroll to explore</span>
            </div>
            <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

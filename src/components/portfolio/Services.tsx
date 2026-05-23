import { motion } from "framer-motion";
import { Code2, Layout, FileCode, User, Briefcase, Search, Palette, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  { icon: Palette, title: "Premium Website Design", desc: "Awwwards - level visual design tailored to your brand's personality and goals." },
  { icon: Code2, title: "Responsive Web Development", desc: "Pixel - perfect, mobile - first builds that perform beautifully on every device." },
  { icon: Layout, title: "Landing Pages", desc: "High - converting landing pages engineered to turn visitors into customers." },
  { icon: User, title: "Portfolio Websites", desc: "Cinematic personal brands that make creators and founders unforgettable." },
  { icon: Briefcase, title: "Business Websites", desc: "Trustworthy, premium presence for startups and growing companies." },
  { icon: Search, title: "SEO Optimization", desc: "Strategic on - page SEO that drives measurable organic traffic and growth." },
  { icon: Sparkles, title: "UI/UX Design", desc: "Thoughtful interfaces that delight users and elevate every interaction." },
  { icon: FileCode, title: "Modern Frontend Development", desc: "React, Next.js, TypeScript - built with the best tools of the modern web." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-secondary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title={<>Everything you need to <span className="text-gradient-gold italic">launch & grow</span></>}
          subtitle="From strategy to launch, a complete suite of premium services crafted for modern businesses."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl glass border-gold-gradient p-6 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-gold shadow-glow mb-5 group-hover:scale-110 transition-transform">
                  <s.icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

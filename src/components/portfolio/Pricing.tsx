import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const plans = [
  {
    name: "Landing Page",
    price: "₹2,499",
    desc: "Perfect single-page presence to launch fast and convert.",
    features: ["1 Page Website", "Contact Form", "Automatic Emails", "Mobile Optimized", "Fast Delivery", "Premium Design"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹4,999",
    desc: "A complete multi-page website built for serious businesses.",
    features: ["3 Pages", "Contact Form", "Automatic Emails", "Mobile Optimized", "Premium UI", "SEO Optimization"],
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Pricing"
          title={<>Premium quality, <span className="text-gradient-gold italic">honest pricing</span></>}
          subtitle="Transparent packages designed for founders ready to launch with confidence."
        />

        <div className="mt-20 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-3xl p-8 md:p-10 overflow-hidden hover-lift ${
                p.popular
                  ? "glass-strong border-gold-gradient shadow-glow"
                  : "glass border-gold-gradient"
              }`}
            >
              {p.popular && (
                <>
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-b-full bg-gradient-gold px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] text-primary-foreground font-medium shadow-glow">
                    <Sparkles size={12} /> Most Popular
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                </>
              )}
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{p.name}</div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-6xl text-gradient-gold">{p.price}</span>
                  <span className="text-sm text-muted-foreground">/ project</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8">{p.desc}</p>

                <ul className="space-y-3 mb-10">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                        <Check size={14} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => { window.dispatchEvent(new Event("open-enquiry")) }}
                  className={`w-full py-4 px-6 rounded-full font-medium transition-all duration-300 ${
                    p.popular
                      ? "bg-gradient-gold text-primary-foreground shadow-glow hover:scale-105"
                      : "glass-strong border border-white/10 hover:border-primary/40 text-foreground"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Need a custom build? <a href="#contact" className="text-primary hover:underline">Let's talk →</a>
        </p>
      </div>
    </section>
  );
}

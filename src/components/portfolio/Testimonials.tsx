import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const testimonials = [
  { name: "Aarav Mehta", role: "Founder, Maharaja Restaurant", quote: "WebWeave Studio delivered a website that genuinely elevated our brand. Bookings went up within the first month — it just feels premium." },
  { name: "Sofia Lindberg", role: "CMO, Nordic Studio", quote: "The attention to detail is unreal. Animations, typography, performance — everything is dialed in. Worth every rupee, and then some." },
  { name: "Daniel Kim", role: "CEO, BrightLayer SaaS", quote: "Working with WebWeave Studio felt like hiring a senior agency without the agency overhead. Communication and craft are top-tier." },
  { name: "Priya Raghavan", role: "Founder, Lume Skincare", quote: "Our new site loads instantly and looks like it costs ten times what we paid. SEO traffic is climbing every week." },
  { name: "Marcus Webb", role: "Director, Atlas Ventures", quote: "He understood our brand in one call. The result was a portfolio site that closed our last two enterprise deals." },
  { name: "Ananya Sharma", role: "Founder, Mosaic Co.", quote: "Cinematic. That's the only word for it. Visitors stay longer, scroll more, and convert better." },
];

const Card = ({ t }: { t: typeof testimonials[number] }) => (
  <div className="relative w-[340px] md:w-[400px] shrink-0 rounded-3xl glass-strong border-gold-gradient p-7 mx-3 hover-lift">
    <Quote className="absolute top-6 right-6 text-primary/30" size={36} />
    <div className="flex gap-1 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="fill-primary text-primary" />
      ))}
    </div>
    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">"{t.quote}"</p>
    <div className="flex items-center gap-3 pt-4 border-t border-white/5">
      <div className="h-10 w-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-semibold">
        {t.name.charAt(0)}
      </div>
      <div>
        <div className="font-medium text-sm">{t.name}</div>
        <div className="text-xs text-muted-foreground">{t.role}</div>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title={<>Trusted by <span className="text-gradient-gold italic">founders worldwide</span></>}
          subtitle="Real reactions from people who shipped premium websites with me."
        />
      </div>

      <div className="mt-20 flex justify-center items-center">
        <p className="text-muted-foreground text-lg italic">Client Reviews Coming Soon!!</p>
      </div>
    </section>
  );
}

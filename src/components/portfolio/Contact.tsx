import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const Instagram = ({ size = 18, ...p }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = ({ size = 18, ...p }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const cards = [
  { icon: Mail, label: "Email", value: "webweavestudio04@gmail.com", href: "mailto:webweavestudio04@gmail.com" },
  { icon: Phone, label: "WhatsApp", value: "+91 6374357533", href: "https://wa.me/916374357533" },
  { icon: Instagram, label: "Instagram", value: "@webweavestudio04", href: "https://www.instagram.com/webweavestudio04/" },
  { icon: Linkedin, label: "LinkedIn", value: "WebWeave Studio", href: "https://www.linkedin.com/in/webweave-studio-b822a9411/?isSelfProfile=true" },
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = `Hi WebWeave Studio, I'd like to discuss a project.\n\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nWhatsApp: ${data.get("whatsapp")}\nProject Type: ${data.get("type")}\nBudget: ${data.get("budget")}\nTimeline: ${data.get("timeline")}\n\n${data.get("details")}`;
    window.open(`https://wa.me/916374357533?text=${encodeURIComponent(text)}`, "_blank");
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Let's Talk"
          title={<>Start your <span className="text-gradient-gold italic">premium project</span></>}
          subtitle="Tell me about your vision. I'll get back to you within 24 hours with a clear next step."
        />

        <div className="mt-20 grid lg:grid-cols-5 gap-8">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 glass-strong border-gold-gradient rounded-3xl p-8 md:p-10 space-y-5 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="name" label="Full Name" placeholder="John Doe" required />
              <Field name="email" label="Email" type="email" placeholder="you@brand.com" required />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="whatsapp" label="WhatsApp Number" placeholder="+91 9876543210" />
              <Field name="type" label="Project Type" placeholder="Landing / Portfolio / SaaS" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <Field name="budget" label="Budget" placeholder="₹5,000+" />
              <Field name="timeline" label="Timeline" placeholder="2 weeks" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project Details</label>
              <textarea
                name="details"
                rows={5}
                required
                placeholder="Tell me about your project, goals, and any references you love..."
                className="mt-2 w-full rounded-2xl glass border border-white/10 px-5 py-4 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-glow transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group w-full flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:scale-[1.01] transition-transform"
            >
              {sent ? "Opening WhatsApp..." : "Send via WhatsApp"}
              <Send size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {cards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass border-gold-gradient p-5 hover-lift"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold shadow-glow shrink-0">
                  <c.icon size={18} className="text-primary-foreground" />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.label}</div>
                  <div className="font-medium truncate">{c.value}</div>
                </div>
                <ArrowRight size={16} className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}

            <a
              href="https://wa.me/916374357533"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-gradient-gold p-6 shadow-glow text-primary-foreground hover-lift"
            >
              <MessageCircle size={24} className="mb-3" />
              <div className="font-display text-xl">Quick WhatsApp Chat</div>
              <p className="text-sm opacity-80 mt-1">Get a reply within minutes during business hours.</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder, required }: {
  name: string; label: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl glass border border-white/10 px-5 py-3.5 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-glow transition-all"
      />
    </div>
  );
}

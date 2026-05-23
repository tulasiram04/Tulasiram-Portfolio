import { Mail, Phone, ArrowUp } from "lucide-react";

const Instagram = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Linkedin = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
  </svg>
);
const Whatsapp = ({ size = 18 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.36-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.24-6.15-3.5-8.45zM12.07 21.6h-.01a9.85 9.85 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.69-.24-.38a9.85 9.85 0 0 1-1.51-5.25c0-5.45 4.44-9.88 9.91-9.88a9.86 9.86 0 0 1 9.9 9.9c0 5.45-4.44 9.9-9.9 9.9zm5.43-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.5-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/>
  </svg>
);

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] bg-gradient-gold opacity-20 blur-[100px] rounded-full" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5 space-y-6">
            <a href="#home" className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-gold text-primary-foreground font-display font-bold shadow-glow">W</span>
              <span className="font-display text-xl">WebWeave<span className="text-primary"> Studio</span></span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Full Stack Developer crafting premium, conversion-focused websites for founders and brands worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Whatsapp, href: "https://wa.me/916374357533", label: "WhatsApp" },
                { icon: Instagram, href: "https://www.instagram.com/webweavestudio04/", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/webweave-studio-b822a9411/?isSelfProfile=true", label: "LinkedIn" },
                { icon: Mail, href: "mailto:webweavestudio04@gmail.com", label: "Email" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                   className="flex h-10 w-10 items-center justify-center rounded-full glass border-gold-gradient text-muted-foreground hover:text-primary hover:scale-110 transition-all">
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Quick Links</div>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              {["Home", "Services", "Portfolio", "Pricing", "Testimonials", "FAQ", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Get in Touch</div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone size={14} className="text-primary" /> +91 6374357533</li>
              <li className="flex items-center gap-2"><Mail size={14} className="text-primary" /> webweavestudio04@gmail.com</li>
            </ul>
            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Start a Project →
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {year} WebWeave Studio. Crafted with obsession in India.</div>
          <a href="#home" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
            Back to top <ArrowUp size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import projectMaharaja from "@/assets/project-maharaja.jpg";
import projectMeenakshi from "@/assets/project-meenakshi.png";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    name: "Maharaja Restaurant",
    category: "Restaurant · Premium Web",
    desc: "An immersive, regal restaurant experience with cinematic visuals, online reservations, and a fully responsive menu.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "SEO"],
    image: projectMaharaja,
    url: "https://maharaja-restaurant.pages.dev/",
    featured: true,
  },
  {
    name: "Meenakshi Cafe",
    category: "Cafe · Premium Web",
    desc: "A beautiful digital experience for a modern cafe.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: projectMeenakshi,
    url: "https://meenakshi-cafe.vercel.app",
    featured: true,
  },
  {
    name: "Project 3",
    category: "Loading · Coming Soon",
    desc: "Currently in development. Stay tuned for another premium project release.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: null,
    url: "#",
    featured: false,
  },
  {
    name: "Your Project Here",
    category: "Let's build something premium",
    desc: "Reserved for the next ambitious founder. Could be yours.",
    tags: ["Strategy", "Design", "Development"],
    image: null,
    url: "#contact",
    featured: false,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Portfolio"
          title={<>Selected <span className="text-gradient-gold italic">work</span></>}
          subtitle="A glimpse of projects built with obsession for craft and conversion."
        />

        <div className="mt-20 space-y-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target={p.url.startsWith("http") ? "_blank" : undefined}
              rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className={`group relative grid lg:grid-cols-2 gap-8 rounded-3xl glass-strong border-gold-gradient p-6 md:p-10 overflow-hidden hover-lift ${p.featured ? "" : "opacity-90"
                }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/20 order-2 lg:order-1">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-center p-8">
                    <div>
                      <div className="font-display text-5xl text-gradient-gold opacity-60">0{i + 1}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Coming soon</div>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative flex flex-col justify-center order-1 lg:order-2">
                <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{p.category}</div>
                <h3 className="font-display text-3xl md:text-4xl font-light mb-4 flex items-center gap-3 group-hover:text-primary transition-colors">
                  {p.name}
                  <ArrowUpRight size={24} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-3 py-1 rounded-full glass text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
                {p.url.startsWith("http") && (
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                    <ExternalLink size={14} /> View Live Site
                  </div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

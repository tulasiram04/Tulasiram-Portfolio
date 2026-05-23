import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Results } from "@/components/portfolio/Results";
import { Portfolio } from "@/components/portfolio/Portfolio";
import { Pricing } from "@/components/portfolio/Pricing";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Faq } from "@/components/portfolio/Faq";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { EnquiryModal } from "@/components/portfolio/EnquiryModal";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "WebWeave Studio - Premium Websites & SEO" },
      { name: "description", content: "Ultra-premium web design, modern full-stack development, and SEO that delivers measurable growth. Built for founders, startups, and global brands." },
      { property: "og:title", content: "WebWeave Studio — Premium Web Design" },
      { property: "og:description", content: "Beautiful interfaces, modern development, and strategic SEO that delivers measurable growth." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Results />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
      <EnquiryModal />
    </main>
  );
}

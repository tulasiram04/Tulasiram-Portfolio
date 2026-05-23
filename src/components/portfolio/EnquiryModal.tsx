import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle, Send, Check } from "lucide-react";
import { useForm } from "react-hook-form";

// Custom event to trigger modal from anywhere
export const openEnquiryModal = () => window.dispatchEvent(new Event("open-enquiry"));

type FormData = {
  name: string;
  businessName: string;
  whatsapp: string;
  businessDesc: string;
  serviceOffered: string;
  mainGoal: string;
  primaryAction: string;
  hasLogo: string;
  referenceUrl: string;
  pages: string[];
  budget: string;
  timeline: string;
  notes: string;
};

const PAGES_OPTIONS = [
  "Home Page",
  "Services Page",
  "Contact Page",
  "About Us",
  "Gallery/Portfolio",
  "Landing Page",
];

export function EnquiryModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, watch, setValue, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      pages: [],
      mainGoal: "",
      primaryAction: "",
      hasLogo: "",
      budget: "",
      timeline: "",
    }
  });

  const selectedPages = watch("pages") || [];

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-enquiry", handleOpen);
    return () => window.removeEventListener("open-enquiry", handleOpen);
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const togglePage = (page: string) => {
    if (selectedPages.includes(page)) {
      setValue("pages", selectedPages.filter((p) => p !== page));
    } else {
      setValue("pages", [...selectedPages, page]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Format message for WhatsApp
    const text = `*New Project Enquiry* 🚀

*Name:* ${data.name}
*WhatsApp:* ${data.whatsapp}
${data.businessName ? `*Business:* ${data.businessName}\n` : ""}
*What we do:* ${data.businessDesc || "Not provided"}
*Main service/product:* ${data.serviceOffered || "Not provided"}
*Main Goal:* ${data.mainGoal || "Not selected"}
*Primary Action:* ${data.primaryAction || "Not selected"}

*Pages needed:*
${data.pages.length > 0 ? data.pages.map(p => `• ${p}`).join('\n') : "Not selected"}

*Logo/Content Ready:* ${data.hasLogo || "Not selected"}
${data.referenceUrl ? `*Reference:* ${data.referenceUrl}\n` : ""}
*Budget:* ${data.budget || "Not selected"}
*Timeline:* ${data.timeline || "Not selected"}

${data.notes ? `*Additional Notes:*\n${data.notes}` : ""}`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/916374357533?text=${encodedText}`;
    
    // Simulate slight loading for UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
      setIsOpen(false);
      reset();
    }, 600);
  };

  const handleCall = () => {
    window.open("tel:+916374357533", "_self");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-full overflow-y-auto glass-strong border-gold-gradient rounded-3xl shadow-glow custom-scrollbar"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-background/95 backdrop-blur-md border-b border-white/10 rounded-t-3xl">
              <h2 className="font-display text-xl md:text-2xl font-bold tracking-tight">
                Let's Build Something <span className="text-gradient-gold italic">Premium</span>
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 space-y-10">
              
              {/* Section: Basic Info */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-primary font-medium">1. The Basics</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-foreground/90">What's your name? <span className="text-red-400">*</span></label>
                    <input
                      {...register("name", { required: true })}
                      placeholder="John Doe"
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.name && <span className="text-xs text-red-400">Name is required</span>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground/90">What's your WhatsApp number? <span className="text-red-400">*</span></label>
                    <input
                      type="text"
                      maxLength={10}
                      {...register("whatsapp", { 
                        required: "WhatsApp number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Must be exactly 10 digits"
                        },
                        onChange: (e) => {
                          e.target.value = e.target.value.replace(/[^0-9]/g, "");
                        }
                      })}
                      placeholder="9876543210"
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                    {errors.whatsapp && <span className="text-xs text-red-400">{errors.whatsapp.message}</span>}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-foreground/90">What's your business name?</label>
                    <input
                      {...register("businessName")}
                      placeholder="e.g. Acme Corp"
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Business Details */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-primary font-medium">2. About the Business</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-foreground/90">What does your business do?</label>
                    <textarea
                      {...register("businessDesc")}
                      rows={3}
                      placeholder="Briefly describe your business..."
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm text-foreground/90">What service or product do you primarily offer?</label>
                    <input
                      {...register("serviceOffered")}
                      placeholder="e.g. Premium web design"
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Goals & Features */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-primary font-medium">3. Goals & Requirements</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Goals */}
                  <div className="space-y-3">
                    <label className="text-sm text-foreground/90 block">What is the main goal of your website?</label>
                    <div className="space-y-2">
                      {["Generate Leads", "Drive Calls", "Direct Sales"].map(opt => (
                        <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${watch("mainGoal") === opt ? "bg-primary/10 border-primary/50" : "bg-secondary/30 border-white/5 hover:border-white/20"}`}>
                          <input type="radio" value={opt} {...register("mainGoal")} className="hidden" />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${watch("mainGoal") === opt ? "border-primary" : "border-muted-foreground"}`}>
                            {watch("mainGoal") === opt && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Primary Action */}
                  <div className="space-y-3">
                    <label className="text-sm text-foreground/90 block">What primary action should users take?</label>
                    <div className="space-y-2">
                      {["WhatsApp Message", "Direct Call", "Fill Contact Form"].map(opt => (
                        <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${watch("primaryAction") === opt ? "bg-primary/10 border-primary/50" : "bg-secondary/30 border-white/5 hover:border-white/20"}`}>
                          <input type="radio" value={opt} {...register("primaryAction")} className="hidden" />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${watch("primaryAction") === opt ? "border-primary" : "border-muted-foreground"}`}>
                            {watch("primaryAction") === opt && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4">
                  <label className="text-sm text-foreground/90 block">Which pages do you need?</label>
                  <div className="flex flex-wrap gap-2">
                    {PAGES_OPTIONS.map(page => (
                      <button
                        key={page}
                        type="button"
                        onClick={() => togglePage(page)}
                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                          selectedPages.includes(page) 
                          ? "bg-primary text-primary-foreground border-primary shadow-glow" 
                          : "bg-secondary/50 border-white/10 text-muted-foreground hover:border-white/30"
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-3">
                    <label className="text-sm text-foreground/90 block">Do you have a logo and content ready?</label>
                    <div className="flex gap-2">
                      {["Yes", "No"].map(opt => (
                        <label key={opt} className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border cursor-pointer transition-colors ${watch("hasLogo") === opt ? "bg-primary/10 border-primary/50 text-primary" : "bg-secondary/30 border-white/5 text-muted-foreground hover:border-white/20"}`}>
                          <input type="radio" value={opt} {...register("hasLogo")} className="hidden" />
                          <span className="text-sm font-medium">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-foreground/90">Any reference websites?</label>
                    <input
                      {...register("referenceUrl")}
                      placeholder="https://example.com"
                      className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section: Timeline & Budget */}
              <div className="space-y-6">
                <h3 className="text-sm uppercase tracking-widest text-primary font-medium">4. Timeline & Budget</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Budget */}
                  <div className="space-y-3">
                    <label className="text-sm text-foreground/90 block">Budget range</label>
                    <div className="space-y-2">
                      {["₹1,500K – ₹2,500K", "₹2,500K – ₹5,000K", "₹5K+"].map(opt => (
                        <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${watch("budget") === opt ? "bg-primary/10 border-primary/50" : "bg-secondary/30 border-white/5 hover:border-white/20"}`}>
                          <input type="radio" value={opt} {...register("budget")} className="hidden" />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${watch("budget") === opt ? "border-primary" : "border-muted-foreground"}`}>
                            {watch("budget") === opt && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-3">
                    <label className="text-sm text-foreground/90 block">Timeline</label>
                    <div className="space-y-2">
                      {["2–3 days", "1 week", "Flexible"].map(opt => (
                        <label key={opt} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${watch("timeline") === opt ? "bg-primary/10 border-primary/50" : "bg-secondary/30 border-white/5 hover:border-white/20"}`}>
                          <input type="radio" value={opt} {...register("timeline")} className="hidden" />
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${watch("timeline") === opt ? "border-primary" : "border-muted-foreground"}`}>
                            {watch("timeline") === opt && <div className="w-2 h-2 rounded-full bg-primary" />}
                          </div>
                          <span className="text-sm">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-sm text-foreground/90">Additional notes</label>
                  <textarea
                    {...register("notes")}
                    rows={3}
                    placeholder="Anything else I should know?"
                    className="w-full bg-secondary/50 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-end">
                <button
                  type="button"
                  onClick={handleCall}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 border border-white/10 transition-all group"
                >
                  <Phone size={16} className="group-hover:text-primary transition-colors" />
                  Direct Call
                </button>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1ebd5b] px-8 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all hover:scale-105 disabled:opacity-70 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Check size={16} />
                    </motion.div>
                  ) : (
                    <>
                      <MessageCircle size={16} />
                      Submit via WhatsApp
                    </>
                  )}
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

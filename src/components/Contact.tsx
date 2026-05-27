import { useState, FormEvent, ChangeEvent } from "react";
import { Mail, ArrowUpRight, Instagram, Youtube, Linkedin, Film, Send, Sparkles, AlertCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import A2Logo from "./A2Logo";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorText) setErrorText("");
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorText("");

    if (!formData.name.trim()) {
      setErrorText("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorText("Please provide a valid email address.");
      return;
    }
    if (!formData.brand.trim()) {
      setErrorText("Please tell us your company/brand name.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorText("Please write a small description of your campaign idea.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this key with your own from web3forms.com to receive emails
          access_key: "2ab85024-3bf0-4cd2-be1d-40eb7cc33d65",
          name: formData.name,
          email: formData.email,
          brand: formData.brand,
          message: formData.message,
          subject: "New Lead from A² Productions Website"
        }),
      });
      const result = await response.json();
      
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", brand: "", message: "" });
      } else {
        setErrorText("Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorText("Something went wrong check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="relative pt-24 pb-12 bg-[#050505] overflow-hidden border-t border-white/[0.03]">
      {/* Visual lighting from bottom right */}
      <div className="absolute bottom-0 right-0 w-[50rem] h-[30rem] rounded-full bg-gold-400/[0.03] filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Main Grid: Left/Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-20 border-b border-white/5">
          
          {/* LEFT COLUMN: Agency pitch messaging and coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
            {/* Branding markup */}
            <div className="flex justify-start select-none mb-4">
              <A2Logo size="lg" className="!items-start cursor-default" />
            </div>

            <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block font-semibold">
              Get in Touch
            </span>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
              Let's Build A Brand People Remember.
            </h2>

            <p className="text-[#a0a0a0] text-sm md:text-base font-light leading-relaxed max-w-md">
              Whether you're launching a product, scaling a startup, or building a modern brand — we'd love to create something impactful together.
            </p>

            {/* Micro details */}
            <div className="flex flex-col gap-3 mt-6 text-xs text-white/60 font-mono">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400" />
                <a href="tel:+917800500571" className="hover:text-gold-400 transition-colors">
                  +91 7800500571
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400" />
                <a href="mailto:contact@asquareproduction.com" className="hover:text-gold-400 transition-colors">
                  contact@asquareproduction.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Film className="w-4 h-4 text-gold-400 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-white/80">Creative Studio</span>
                  <span>Yari Road, Andheri West, Mumbai, Maharashtra – 400061, India</span>
                </div>
              </div>
            </div>

            {/* Social Channels column */}
            <div className="flex items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/a_squareproductions?igsh=OTdjaTNnaXI5enR5&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-sm border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 bg-white/5 hover:bg-gold-400/5 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCs9eGzkCwM0kuOu6UIfbxLw"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-sm border border-white/10 hover:border-gold-400 text-white hover:text-gold-400 bg-white/5 hover:bg-gold-400/5 flex items-center justify-center transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium black & gold interactive form */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/5 p-6 sm:p-8 md:p-10 rounded-sm shadow-2xl relative">
            <div className="absolute top-0 right-10 w-24 h-1 bg-gradient-to-l from-gold-400 via-gold-500 to-transparent" />
            
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFormSubmit}
                  className="flex flex-col gap-6"
                >
                  <div className="border-b border-white/5 pb-4">
                    <h3 className="font-display text-lg font-bold tracking-tight text-white uppercase">
                      Campaign Pitch Desk
                    </h3>
                    <p className="text-white/40 text-xs">
                      Tell us about your brand. Our creative department reviews all briefs within 24hr.
                    </p>
                  </div>

                  {/* Errors block */}
                  {errorText && (
                    <div className="p-3.5 bg-red-950/20 border border-red-500/20 text-red-400 text-xs rounded-sm flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorText}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                        NAME OR CONTACT PERSON
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder=""
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/20 transition-all font-sans"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                        BUSINESS EMAIL
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder=""
                        disabled={isSubmitting}
                        className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/20 transition-all font-sans"
                      />
                    </div>
                  </div>

                  {/* Brand input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="brand" className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                      COMPANY / BRAND NAME
                    </label>
                    <input
                      id="brand"
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder=""
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-sm text-sm text-white focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/20 transition-all font-sans"
                    />
                  </div>

                  {/* Message input */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-[#888888] uppercase">
                      TELL US ABOUT YOUR PROJECT
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Share your campaign vision, estimated timeline, required channels, or showreel vibes..."
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-sm text-sm text-white placeholder-stone-600 focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400/20 transition-all resize-none font-sans leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="mt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full relative px-6 py-4 bg-gradient-to-r from-gold-500 to-gold-400 rounded-sm hover:from-gold-400 hover:to-gold-300 text-neutral-950 text-xs font-mono tracking-[0.25em] font-bold uppercase transition-all duration-300 transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-neutral-950 border-t-transparent rounded-full animate-spin" />
                          SENDING BRIEF...
                        </>
                      ) : (
                        <>
                          SEND MESSAGE <ArrowUpRight className="w-4 h-4 text-neutral-950" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mb-6 shadow-xl gold-glow animate-bounce">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-widest text-white mb-3">
                    Project Scheduled!
                  </h3>
                  <p className="text-[#a0a0a0] text-sm font-light max-w-sm leading-relaxed mb-8">
                    Your campaign brief has been directed straight to the creative desk of <span className="text-gold-400 font-bold">Anmoll Aryan</span>. We'll outline initial concepts and reach back within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-6 py-2.5 border border-gold-400/50 hover:border-gold-400 text-white bg-transparent hover:bg-gold-400/5 text-[10px] font-mono tracking-widest uppercase transition-colors"
                  >
                    SUBMIT ANOTHER BRIEF
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* FOOTER METADATA */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-stone-500 font-mono text-[10px] tracking-wider">
          {/* copyright */}
          <div className="select-none flex items-center gap-1">
            <span>© {currentYear} ASQUARE PRODUCTIONS. ALL RIGHTS RESERVED.</span>
          </div>

          {/* Legal / Policy */}
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gold-400 transition-colors uppercase">
              PRIVACY POLICY
            </a>
            <span className="w-1 h-1 bg-stone-700 rounded-full" />
            <a href="#terms" className="hover:text-gold-400 transition-colors uppercase">
              TERMS & CONDITIONS
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

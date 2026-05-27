import { Play } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onWatchShowreelClicked: () => void;
}

export default function Hero({ onWatchShowreelClicked }: HeroProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-between overflow-hidden bg-[#030303]"
    >
      {/* Background Cinematic Movie Set Backdrop */}
      <div className="absolute inset-0 z-0 bg-[#030303]">
        <img
          src="/hero-background.jpg"
          alt="Cinematic production camera on film set"
          className="absolute inset-0 w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.1] brightness-[0.7] animate-slow-zoom z-0"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1585647347384-2593bc35786b?auto=format&fit=crop&w=1920&q=80";
            e.currentTarget.onerror = null;
          }}
        />
        {/* Subtle gradient overlays so the image is VISIBLE but text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303] via-[#030303]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#030303]/60 via-transparent to-[#030303] z-10" />
        {/* Luxury gold tint */}
        <div className="absolute inset-0 bg-gold-400 mix-blend-overlay opacity-20 z-10 pointer-events-none" />
      </div>

      {/* Decorative Golden Lens Flare Glow */}
      <div className="absolute top-1/4 right-1/3 w-[40rem] h-[40rem] rounded-full bg-gold-400/10 blur-[180px] pointer-events-none z-10 animate-pulse duration-[8000ms]" />

      {/* Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-12 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-3xl">
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="font-serif-logo text-[10px] md:text-xs tracking-[0.3em] text-gold-400 uppercase font-bold premium-text-glow">
              A<sup className="text-[0.75em] relative -top-[0.7em] -ml-[0.4em] mr-[0.1em]">2</sup> PRODUCTIONS
            </span>
          </motion.div>

          {/* Main Cinematic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] tracking-tight text-white leading-[1.05] uppercase mb-6"
          >
            <span className="font-light block">We Create</span>
            <span className="bg-gradient-to-r from-[#DFB76C] via-[#C99C43] to-[#8C6826] text-transparent bg-clip-text font-bold block drop-shadow-[0_0_35px_rgba(201,156,67,0.7)] drop-shadow-[0_0_15px_rgba(201,156,67,0.9)]">Campaigns</span>
            <span className="font-bold block">That Make Brands</span>
            <span className="font-bold block">Look Bigger.</span>
          </motion.h1>

          {/* Core Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            className="text-[#e5e5e5] text-sm md:text-base lg:text-lg max-w-xl leading-relaxed mb-10 font-sans font-light"
          >
            Premium ad films and cinematic storytelling for startups, D2C brands, and modern businesses that want to stand out in a crowded digital world.
          </motion.p>

          {/* Interactive Dynamic CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4"
          >
            {/* Watch Showreel filled gold button */}
            <button
              onClick={onWatchShowreelClicked}
              className="px-8 py-4 bg-[#d8b763] text-neutral-950 text-xs font-mono tracking-[0.2em] font-bold uppercase rounded-sm hover:bg-[#e4c981] premium-gold-glow transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
            >
              <Play className="w-3.5 h-3.5 text-neutral-950 fill-neutral-950" />
              WATCH SHOWREEL
            </button>

            {/* Start a project dark bordered button */}
            <button
              onClick={scrollToContact}
              className="px-8 py-4 border border-white/30 hover:border-gold-400/60 bg-transparent text-white hover:text-gold-400 text-xs font-mono tracking-[0.2em] font-medium uppercase rounded-sm transition-all duration-300 hover:bg-gold-400/5 hover:premium-gold-glow cursor-pointer flex items-center justify-center gap-2"
            >
              START A PROJECT
            </button>
          </motion.div>

          {/* Tagline Below Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mb-14"
          >
            <p className="text-gold-400 font-serif-logo italic text-sm md:text-base tracking-[0.15em] premium-text-glow">
              Premium ad films for growing brands.
            </p>
          </motion.div>

          {/* Small tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col gap-1 text-white/50 font-mono text-[11px] tracking-widest uppercase"
          >
            <span>Big-brand visuals.</span>
            <span>Startup-friendly execution.</span>
          </motion.div>
        </div>
      </div>

      {/* RIGHT VERTICAL TEXT STORYTELLING-VISUALS-IMPACT */}
      <div className="hidden lg:flex absolute right-12 top-1/2 -translate-y-1/2 rotate-180 select-none pointer-events-none items-center [writing-mode:vertical-lr] text-white/30 tracking-[0.5em] font-mono text-xs uppercase z-20">
        <span className="font-bold text-gold-400/50">STORYTELLING</span>
        <span className="h-8 w-[1px] bg-gold-400/30 my-4" />
        <span>VISUALS</span>
        <span className="h-8 w-[1px] bg-gold-400/30 my-4" />
        <span>IMPACT</span>
      </div>

      {/* BOTTOM RIGHT SCROLL POINTER */}
      <div className="absolute right-6 md:right-12 bottom-12 z-20 hidden sm:flex items-center gap-3 font-mono text-[10px] tracking-[0.4em] text-white/40">
        <span className="font-semibold text-gold-400">01</span>
        <span>SCROLL</span>
        <div className="w-12 h-[1px] bg-white/25 relative overflow-hidden">
          <div className="absolute inset-0 bg-gold-400 w-1/2 rounded animate-[slide_2s_infinite]" />
        </div>
      </div>
    </section>
  );
}

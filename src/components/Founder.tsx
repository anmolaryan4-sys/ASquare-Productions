import { Award, CheckCircle2, Film, HeartHandshake, Eye } from "lucide-react";
import { motion } from "motion/react";

export default function Founder() {
  const accolades = [
    {
      title: "AWARD WINNING FILMMAKER",
      desc: "Recognized for high-impact visual direction and narrative pacing.",
      icon: Award
    },
    {
      title: "100+ PROJECTS COMPLETED",
      desc: "Delivered premium commercial films and ad spots globally.",
      icon: CheckCircle2
    },
    {
      title: "5+ YEARS OF EXPERIENCE",
      desc: "Crafting multi-platform brand campaigns and digital-first commercials.",
      icon: Film
    },
    {
      title: "STRATEGIST . STORYTELLER",
      desc: "Merging marketing psychology with world-class cinema standards.",
      icon: Eye
    }
  ];

  return (
    <section id="founder" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden border-t border-white/[0.03]">
      {/* Golden spotlight ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[30rem] rounded-full bg-gold-400/[0.015] filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Premium Black & White Portrait */}
          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[320px] aspect-[3/4] bg-[#111111] border border-white/10 p-3 shadow-2xl overflow-hidden group rounded-sm"
            >
              {/* Gold outer highlight glow */}
              <div className="absolute inset-0 border border-gold-400/10 group-hover:border-gold-400/30 transition-all duration-500 z-10" />

              {/* Portrait image */}
              <div className="w-full h-full overflow-hidden select-none relative bg-zinc-900 border border-white/5">
                <img
                  src="/founder.png"
                  alt="Anmoll Aryan monochrome creative director photo"
                  className="w-full h-full object-cover filter grayscale contrast-125 saturate-0 brightness-90 group-hover:scale-[1.03] transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=800&q=80";
                    e.currentTarget.onerror = null;
                  }}
                  referrerPolicy="no-referrer"
                />
                {/* Subtle dark bottom vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              </div>

              {/* Bottom label overlay inside card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-0.5">
                <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.25em] text-gold-400 font-bold">
                  Founder & Director
                </span>
                <span className="font-display text-sm sm:text-base font-extrabold text-white tracking-widest uppercase">
                  A² PRODUCTIONS
                </span>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE: Founder Story & Signature */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div>
              <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
                Creative Mind
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-none">
                Anmoll Aryan
              </h2>
              <span className="text-white/40 text-xs sm:text-sm font-mono tracking-wider mt-2 block">
                Founder & Creative Director
              </span>
            </div>

            <div className="flex flex-col gap-4 text-white/70 text-sm md:text-base font-light leading-relaxed">
              <p>
                Anmoll Aryan is a passionate filmmaker and creative director known for cinematic storytelling and visually impactful campaigns.
              </p>
              <p>
                Having worked on multiple creative advertising projects and award-recognized short film concepts, his approach combines filmmaking, branding, marketing insight, and audience psychology.
              </p>
              <p>
                His vision for A² Productions is to help growing brands compete visually with bigger companies through smart, research-driven storytelling and premium cinematic execution.
              </p>
              <p>
                With a strong focus on modern advertising aesthetics and emotional storytelling, he believes every ambitious brand deserves a world-class visual identity.
              </p>
            </div>

            {/* Handwritten Golden Signature using La Belle Aurore */}
            <div className="mt-4 flex flex-col">
              <span className="font-signature text-gold-400 text-3xl md:text-4xl select-none gold-text-glow leading-none rotate-[-4deg] self-start ml-2">
                Anmoll Aryan
              </span>
              <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase mt-4 ml-6">
                CREATIVE DESK
              </span>
            </div>
          </div>

          {/* RIGHT: Accolades Column */}
          <div className="lg:col-span-3 flex flex-col gap-6 lg:border-l lg:border-white/5 lg:pl-8">
            <div className="pb-3 border-b border-white/5">
              <span className="font-mono text-[10px] text-gold-400 tracking-wider uppercase font-semibold">
                Credentials & Accolades
              </span>
            </div>

            <div className="flex flex-col gap-5">
              {accolades.map((acc, idx) => {
                const AccIcon = acc.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start group">
                    <div className="p-2 border border-gold-400/20 text-gold-400 bg-gold-400/5 rounded-sm group-hover:bg-gold-400 group-hover:text-black transition-colors shrink-0">
                      <AccIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mb-1">
                        {acc.title}
                      </h4>
                      <p className="text-[#a0a0a0] text-[11px] font-light leading-snug">
                        {acc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* QUOTE BLOCK BANNER */}
        <div className="mt-20 md:mt-24 bg-gradient-to-r from-gold-950/20 via-[#0a0a0a] to-[#030303] border border-gold-400/25 p-8 sm:p-10 text-center rounded-sm relative overflow-hidden">
          <div className="absolute top-0 left-10 text-7xl font-serif font-black text-gold-400/5 select-none pointer-events-none">
            “
          </div>
          <p className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white uppercase max-w-4xl mx-auto leading-normal">
            "EVERY GROWING BRAND DESERVES STORYTELLING THAT FEELS WORLD-CLASS."
          </p>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

      </div>
    </section>
  );
}

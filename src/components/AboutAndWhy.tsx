import { Sparkles, DollarSign, Brain, Smartphone, Zap, Heart } from "lucide-react";
import { motion } from "motion/react";

export default function AboutAndWhy() {
  const cards = [
    {
      title: "Cinematic Quality",
      description: "Premium visuals that elevate brand perception.",
      icon: Sparkles
    },
    {
      title: "Startup-Focused Execution",
      description: "Built for ambitious brands with practical budgets.",
      icon: DollarSign
    },
    {
      title: "Research-Driven Storytelling",
      description: "Campaigns designed with marketing psychology in mind.",
      icon: Brain
    },
    {
      title: "Digital-First Thinking",
      description: "Optimized for Instagram, Meta Ads, and consumer attention spans.",
      icon: Smartphone
    },
    {
      title: "Agile & Efficient Production",
      description: "Fast turnaround with smart planning and creative efficiency.",
      icon: Zap
    },
    {
      title: "Long-Term Brand Impact",
      description: "We create content that builds trust, recall, and brand equity.",
      icon: Heart
    }
  ];

  const handleLearnMore = () => {
    const element = document.getElementById("how-we-work");
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
    <section id="about" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden border-t border-white/[0.03]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: About Agency with huge dimmed "A²" background element */}
          <div className="lg:col-span-5 relative py-2 pr-4 flex flex-col gap-6">
            
            {/* Giant Dimmed "A²" Watermark */}
            <div className="absolute -top-16 -left-10 text-[10rem] md:text-[14rem] font-black font-display text-white/[0.015] select-none pointer-events-none z-0">
              A²
            </div>

            <div className="relative z-10">
              <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
                Overview
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase leading-tight">
                About A² Productions
              </h2>
            </div>

            <div className="relative z-10 flex flex-col gap-5 text-white/70 text-sm md:text-base font-light leading-relaxed">
              <p>
                A² Productions is an independent creative production house focused on premium advertising films, cinematic storytelling, and digital-first brand campaigns.
              </p>
              <p>
                We work closely with startups, D2C companies, and growing brands that want to compete at a higher visual level without spending crores on traditional agencies.
              </p>
              <p>
                Many modern businesses rely only on influencer content and phone-shot promotions. While that creates short-term visibility, it often lacks strong brand identity and memorable impact.
              </p>
              <p>
                At A² Productions, we bridge that gap through cinematic storytelling, smart production strategies, and research-driven execution. 
              </p>
              <p className="font-semibold text-gold-400">
                Because strong branding should not be limited to giant companies.
              </p>
            </div>

            {/* Link button */}
            <div className="relative z-10 mt-6">
              <button
                onClick={handleLearnMore}
                className="group inline-flex items-center gap-3 bg-transparent hover:bg-gold-400/5 text-xs font-mono tracking-[0.2em] text-gold-400 border border-gold-400/30 hover:border-gold-400 px-6 py-3 transition-all duration-300 rounded-sm uppercase font-bold cursor-pointer"
              >
                OUR PROCESS <span className="text-gold-400 font-sans group-hover:translate-x-1.5 transition-transform inline-block">→</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Why Modern Brands Work With Us (Heading + 6 metrics cards) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-2 font-semibold">
                Value Proposition
              </span>
              <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
                Why Modern Brands Work With Us
              </h3>
            </div>

            {/* 6 Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {cards.map((card, idx) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="p-5 rounded-sm bg-[#080808] border border-white/5 flex flex-col gap-4 relative hover:border-gold-400/20 group transition-colors duration-300"
                  >
                    {/* Tiny gold dot in corner */}
                    <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-gold-400/30 group-hover:bg-gold-400 transition-colors" />

                    <div className="text-gold-400 group-hover:scale-110 transition-transform duration-300 w-fit">
                      <CardIcon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider group-hover:text-gold-400 transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-white/50 text-xs font-light leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

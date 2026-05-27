import { Compass, Lightbulb, Video, Send } from "lucide-react";
import { motion } from "motion/react";

export default function HowWeWork() {
  const steps = [
    {
      num: "01",
      title: "DISCOVER",
      description: "Understanding the product, audience, and brand positioning.",
      details: "We map your competitors, analyze visual trends, detect critical consumer friction points, and form a tight creative hypothesis.",
      icon: Compass
    },
    {
      num: "02",
      title: "IDEATE",
      description: "Building concepts that emotionally connect with modern consumers.",
      details: "Our creative writing team formulates authentic storylines, scene boards, and pacing rhythms tailored specifically for luxury hooks.",
      icon: Lightbulb
    },
    {
      num: "03",
      title: "CREATE",
      description: "Executing cinematic campaigns with agile production methods.",
      details: "From high-end lighting directors to cinema camera rigs, we capture breath-taking visual assets and art direction efficiently.",
      icon: Video
    },
    {
      num: "04",
      title: "DELIVER",
      description: "Final content optimized for Instagram, YouTube, Meta Ads, and TVCs.",
      details: "We edit with visual flow, do professional color grading with modern LUT styles, and master audio with crisp sound engineering.",
      icon: Send
    }
  ];

  return (
    <section id="how-we-work" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.03]">
      {/* Absolute Glow Background */}
      <div className="absolute top-1/4 right-10 w-[40rem] h-[40rem] rounded-full bg-gold-400/[0.02] filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
            The Pipeline
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            How We Work
          </h2>
          <p className="text-[#a0a0a0] text-sm md:text-base font-light mt-4">
            A highly optimized, agile production roadmap engineered to deliver cinema quality within smart startup timelines.
          </p>
        </div>

        {/* HORIZONTAL STEPS WITH CONNECTORS */}
        <div className="relative mt-8">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[50px] right-[50px] h-[1px] bg-white/10 z-0">
            {/* Glowing gold traveler line animation */}
            <div className="h-full bg-gradient-to-r from-transparent via-gold-400 to-transparent w-1/3 animate-[slide_4s_infinite_linear]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col gap-5 bg-gradient-to-b from-[#0a0a0a] to-[#030303] border border-white/5 p-6 md:p-8 rounded-sm group hover:border-gold-400/20 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Subtle index glow */}
                  <div className="absolute -top-12 -right-8 text-7xl font-sans font-extrabold text-white/[0.02] select-none group-hover:text-gold-400/[0.04] transition-colors">
                    {step.num}
                  </div>

                  {/* Icon Node wrapper */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-sm bg-neutral-900 border border-white/15 flex items-center justify-center text-gold-400 group-hover:text-white group-hover:bg-gold-400 shadow-md transition-all duration-300">
                      <StepIcon className="w-5 h-5" />
                    </div>
                    <span className="font-display text-xs font-bold tracking-[0.2em] text-gold-400/50 group-hover:text-gold-400 transition-colors">
                      STEP {step.num}
                    </span>
                  </div>

                  {/* Core Information */}
                  <div className="flex flex-col gap-2 mt-2">
                    <h3 className="font-display text-base font-bold tracking-wider text-white uppercase group-hover:text-gold-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/80 text-xs font-medium leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-white/45 text-xs font-light leading-relaxed pt-2 border-t border-white/[0.05] mt-1 group-hover:text-stone-400 transition-colors">
                      {step.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Trust Statement */}
        <div className="mt-16 text-center max-w-3xl mx-auto py-8 px-6 bg-gradient-to-r from-gold-950/10 via-[#0a0703]/25 to-gold-950/10 border border-gold-400/10 rounded-sm">
          <p className="font-serif italic text-white/90 text-sm sm:text-base leading-relaxed">
            "By controlling everything from the discovery desk directly down to the cinema suite, we strip out heavy manager-heavy layer costs and invest 100% of your budget straight into what lands on the screen."
          </p>
          <span className="font-mono text-[10px] text-gold-400 tracking-[0.25em] uppercase block mt-3 font-semibold">
            — THE A² EFFICIENT METHODLIST
          </span>
        </div>

      </div>
    </section>
  );
}

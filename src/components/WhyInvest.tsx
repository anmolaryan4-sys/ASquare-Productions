import { Smartphone, ShieldAlert, TrendingDown, EyeOff, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

export default function WhyInvest() {
  return (
    <section id="why-invest" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.03]">
      {/* Background Decorative glow lines */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-400/5 blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Why Invest in Good Ad Films */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
                Why Invest In
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                Good Ad Films?
              </h2>
            </div>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
              Most brands today depend on influencer videos and phone-shot content. It creates temporary attention, but not lasting impact.
            </p>

            {/* List of Pain Points */}
            <div className="flex flex-col gap-6 mt-2">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-gold-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-1">
                    Low Quality Visuals Reduce Brand Value
                  </h4>
                  <p className="text-white/40 text-xs">
                    Cheaply shot videos degrade premium perception, pushing premium buyers away.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-gold-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-1">
                    Influencer Content Lacks Consistency
                  </h4>
                  <p className="text-white/40 text-xs">
                    Third-party creators dilute your narrative, making the brand identity feel fractured.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-sm border border-white/10 text-gold-400">
                  <TrendingDown className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-1">
                    Short Term Visibility, No Long Term Recall
                  </h4>
                  <p className="text-white/40 text-xs">
                    Quick portrait content gets scrolled away and forgotten within seconds.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Golden Glowing Circle with Silhouette */}
          <div className="flex flex-col items-center justify-center py-6">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Pulsing Backlight */}
              <div className="absolute inset-4 rounded-full bg-gold-400/5 filter blur-[35px] animate-pulse" />

              {/* Text Inside Circle (Middle) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-40 px-4 gap-4 animate-breathe pb-12">
                <div>
                  <span className="font-sans text-sm sm:text-base text-white/95 block font-medium gold-text-glow">
                    Good stories
                  </span>
                  <span className="font-sans text-sm sm:text-base text-white/95 block font-medium gold-text-glow">
                    build strong brands.
                  </span>
                </div>
                <div>
                  <span className="font-sans text-sm sm:text-base text-white/95 block font-medium gold-text-glow">
                    Strong brands
                  </span>
                  <span className="font-sans text-sm sm:text-base text-white/95 block font-medium gold-text-glow">
                    build lasting value.
                  </span>
                </div>
              </div>

              {/* Glowing Circle ring */}
              <div className="absolute inset-0 rounded-full border border-gold-400/50 shadow-[0_0_40px_rgba(216,183,99,0.3)] flex items-center justify-center p-4">
                <div className="absolute inset-[-1px] rounded-full border border-gold-400/40 shadow-[0_0_30px_rgba(216,183,99,0.3)] animate-[spin_20s_infinite_linear]" />
                <div className="absolute inset-[3px] rounded-full border-dashed border-gold-400/30 shadow-[0_0_20px_rgba(216,183,99,0.2)]" />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 z-30 rounded-full overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-gold-400/60 rounded-full filter blur-[1px] animate-particle"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${40 + Math.random() * 40}%`,
                        animationDelay: `${Math.random() * 3}s`,
                        animationDuration: `${2 + Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
                
                {/* Inner Circle Ring with Reflection & Golden Horizon graphics */}
                <div className="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-b from-[#030303]/40 via-[#0a0703]/20 to-[#120e06]/60 border border-gold-400/40 flex flex-col justify-end items-center shadow-[inset_0_0_40px_rgba(216,183,99,0.2)]">
                  
                  {/* Subtle City Skyline/Horizon Silhouette inside Circle */}
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-[#030303] z-10 border-t border-gold-400/20">
                    <div className="absolute -top-12 inset-x-0 h-12 bg-gradient-to-t from-[#030303] to-transparent" />
                    {/* Golden lights dotting the horizon */}
                    <div className="absolute top-2 inset-x-12 flex justify-around opacity-40 animate-pulse">
                      <div className="w-1 h-1 rounded-full bg-gold-400 filter blur-[0.5px]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400/75 filter blur-[0.5px]" />
                      <div className="w-1 h-3 rounded-t-sm bg-gold-400/30" />
                      <div className="w-1 h-1 rounded-full bg-gold-400 filter blur-[0.5px]" />
                      <div className="w-0.5 h-0.5 rounded-full bg-white" />
                      <div className="w-1 h-1 rounded-full bg-gold-400 filter blur-[0.5px]" />
                    </div>
                  </div>

                  {/* Reflection Surface line */}
                  <div className="absolute bottom-12 inset-x-0 h-[1px] bg-gold-400/40 z-20" />

                  {/* Standing Filmmaker Silhouette */}
                  <div className="relative z-30 mb-7 scale-90 sm:scale-100 flex flex-col items-center">
                    {/* Person Body */}
                    <div className="w-3.5 h-10 bg-[#030303] rounded-t-md relative shadow-2xl border border-white/5">
                      {/* Head */}
                      <div className="w-3 h-3 bg-[#030303] rounded-full absolute -top-4 left-0.5 border border-white/5" />
                      {/* Camera/Tripod shape next to him */}
                      <div className="absolute bottom-0 -right-4 flex flex-col items-center">
                        <div className="w-3.5 h-2.5 bg-[#030303] rounded-sm border border-white/5" />
                        <div className="w-[1px] h-9 bg-[#030303] origin-bottom -rotate-12" />
                        <div className="w-[1px] h-9 bg-[#030303] origin-bottom rotate-12 absolute left-1" />
                      </div>
                    </div>
                  </div>

                  {/* Under reflection effect */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-4 h-6 opacity-30 bg-gradient-to-b from-gold-400/40 to-transparent filter blur-[1px] blur-sm z-10" />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: We help growing brands look premium without massive budgets */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
                We Help Growing Brands
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight">
                Look Premium Without Massive Agency Budgets.
              </h2>
            </div>

            <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
              High production value. Smart execution. Efficient budgets. Long term growth. Cinematic advertising builds stronger long-term brand value and premium consumer trust.
            </p>

            {/* Premium Gold Accent Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="mt-4 p-6 rounded-sm bg-gradient-to-br from-gold-950/20 to-neutral-900 border border-gold-400/20 relative overflow-hidden group"
            >
              {/* Backglow element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-gold-400/10 filter blur-2xl group-hover:bg-gold-400/20 transition-all duration-300" />
              
              <div className="flex gap-4">
                <div className="text-gold-400 mt-1 shrink-0">
                  <Lightbulb className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <p className="font-display text-xs uppercase tracking-[0.15em] text-white font-medium mb-1.5 opacity-0 hidden">
                    Agency Insight
                  </p>
                  <p className="text-[#cccccc] text-xs sm:text-sm leading-relaxed font-light">
                    It's not an expense.<br/>It's an investment in your brand's future.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

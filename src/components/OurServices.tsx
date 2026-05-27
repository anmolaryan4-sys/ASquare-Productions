import { Film, Award, Camera, Smartphone, PenTool, Sliders } from "lucide-react";
import { motion } from "motion/react";

export default function OurServices() {
  const services = [
    {
      id: "commercial_ads",
      title: "Commercial Ad Films",
      description: "Premium cinematic ads crafted for Instagram, YouTube, and TV campaigns.",
      icon: Film
    },
    {
      id: "brand_campaigns",
      title: "Brand Campaigns",
      description: "Story-driven campaigns built to elevate brand perception and engagement.",
      icon: Award
    },
    {
      id: "product_shoots",
      title: "Product Shoots",
      description: "High-end product visuals designed for modern digital commerce.",
      icon: Camera
    },
    {
      id: "social_ads",
      title: "Social Media Ads",
      description: "Scroll-stopping short-form content optimized for performance marketing.",
      icon: Smartphone
    },
    {
      id: "creative_direction",
      title: "Creative Direction",
      description: "Research-backed storytelling, branding, and campaign execution.",
      icon: PenTool
    },
    {
      id: "post_production",
      title: "Post Production",
      description: "Editing, color grading, sound design, and cinematic finishing.",
      icon: Sliders
    }
  ];

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#050505] overflow-hidden border-t border-white/[0.03]">
      {/* Absolute Glow */}
      <div className="absolute bottom-10 left-12 w-96 h-96 rounded-full bg-gold-400/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
            Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase">
            Our Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mt-5" />
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-[#0a0a0a] border border-white/5 px-8 py-10 rounded-sm overflow-hidden flex flex-col justify-between min-h-[250px] transition-all duration-300 hover:border-gold-400/20"
              >
                {/* Gold Highlight top-border accent on Hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:via-gold-400 group-hover:to-gold-200 transition-colors duration-300" />
                
                {/* Backglow element on hover */}
                <div className="absolute -bottom-20 -right-20 w-44 h-44 rounded-full bg-gold-400/0 group-hover:bg-gold-400/[0.02] filter blur-3xl transition-all duration-500" />

                {/* Left vertical timeline line on mobile */}
                <div className="flex flex-col gap-6">
                  {/* Icon with circular wrap */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-neutral-900 border border-white/5 text-gold-400 group-hover:text-white group-hover:bg-gold-400 font-bold transition-all duration-300 shadow-md">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Service naming */}
                  <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors duration-300">
                    {srv.title}
                  </h3>
                </div>

                {/* Service narrative */}
                <p className="text-[#a0a0a0] text-sm font-light leading-relaxed mt-4">
                  {srv.description}
                </p>

                {/* Service sequence index indicator */}
                <div className="absolute bottom-4 right-6 font-mono text-[9px] text-white/5 tracking-widest uppercase">
                  ( 0{idx + 1} / A² )
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Decorative citation underneath services */}
        <div className="mt-16 md:mt-24 border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-white/40 uppercase tracking-widest">
            A² DIGITAL PRODUCTION WORKFLOW — SCALE FREELY
          </p>
          <div className="flex gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
          </div>
        </div>

      </div>
    </section>
  );
}

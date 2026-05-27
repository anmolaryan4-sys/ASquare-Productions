import { useState, useRef, useEffect } from "react";
import { Play, Calendar, Video, Award, Clock, Sparkles, Pause, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Campaign } from "../types";

function CampaignVideoPlayer({ src, poster }: { src: string, poster?: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div 
      className="relative w-full h-full group/video cursor-pointer"
      onClick={() => setIsPlaying(!isPlaying)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="none"
        className="w-full h-full object-cover filter group-hover:scale-105 transition-transform duration-700 object-center pointer-events-auto"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <div className="w-16 h-16 rounded-full bg-gold-400/90 backdrop-blur-md flex items-center justify-center text-neutral-950 shadow-xl shadow-gold-400/20">
            <Play className="w-6 h-6 fill-neutral-950 ml-1" />
          </div>
        </div>
      )}
      {/* Controls Overlay */}
      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/video:opacity-100 transition-opacity duration-300 pointer-events-none flex flex-col justify-end p-4 z-30">
        <div className="flex items-center justify-end gap-3 pointer-events-auto z-40 transform translate-y-2 group-hover/video:translate-y-0 transition-transform duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsPlaying(!isPlaying);
            }}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-gold-400 hover:bg-black/80 transition-all cursor-pointer"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsMuted(!isMuted);
            }}
            className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:text-gold-400 hover:bg-black/80 transition-all cursor-pointer"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
}

interface FeaturedCampaignsProps {
  onCampaignSelect: (campaign: Campaign) => void;
}

export default function FeaturedCampaigns({ onCampaignSelect }: FeaturedCampaignsProps) {
  const campaigns: Campaign[] = [
    {
      id: "camfi",
      title: "CAMFI",
      category: "Brand Campaign",
      tagline: "Coconut water based natural energy drink.",
      description: "A visually cinematic lifestyle film shot for CAMFI, focusing on the human connection behind digital technology. Using warm twilight hues, sharp anamorphic lens textures, and a deliberate modern pace to build a deep brand identity.",
      imageUrl: "/camfi-cover.png",
      videoUrl: "/videos/camfi-ad.mp4",
      duration: "00:59 Min",
      client: "Camfi Smart Tech",
      role: "Creative Direction & Video Production"
    },
    {
      id: "angel_one",
      title: "Angel One",
      category: "Brand Campaign",
      tagline: "Smart SIP Investment Campaign.",
      description: "A vertical ad campaign produced for Angel One, targeting modern investors with a relatable narrative about smart SIP investments, emphasizing clarity and zero commission structure.",
      imageUrl: "/angel-one-cover.png",
      videoUrl: "/videos/angel-one-ad.mp4",
      duration: "00:26 Min",
      client: "Angel One",
      role: "Creative Direction & Post-Production"
    }
  ];

  const handleStartProject = () => {
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
    <section id="work" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden border-t border-white/[0.03]">
      {/* Visual accents */}
      <div className="absolute top-10 right-10 w-80 h-80 rounded-full bg-gold-400/5 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-gold-400 tracking-[0.3em] uppercase block mb-3 font-semibold">
              Selected Projects
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase mb-4">
              Featured Campaigns
            </h2>
            <p className="text-[#a3a3a3] text-sm sm:text-base font-light">
              Cinematic campaigns designed for modern brands and growing businesses that want premium perception.
            </p>
          </div>

          <button
            onClick={handleStartProject}
            className="self-start md:self-end group flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] font-medium text-gold-400 hover:text-white transition-colors py-2 border-b border-gold-400/30 hover:border-white cursor-pointer"
          >
            START YOUR CAMPAIGN <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </button>
        </div>

        {/* CAMPAIGNS GRID */}
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-6 sm:gap-10 max-w-4xl mx-auto">
          {campaigns.map((camp, idx) => (
            <motion.div
              key={camp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={camp.videoUrl ? undefined : () => onCampaignSelect(camp)}
              className={`w-full sm:w-[320px] lg:w-[360px] shrink-0 group relative overflow-hidden rounded-sm bg-[#0a0a0a] border border-white/5 shadow-2xl flex flex-col justify-between ${camp.videoUrl ? '' : 'cursor-pointer'}`}
            >
              {/* Image Container with Hover Zoom and Overlays */}
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                {/* Gold Highlight Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-gold-400/30 z-30 transition-all duration-300 pointer-events-none" />
                
                {!camp.videoUrl && (
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none">
                    <div className="transform scale-90 group-hover:scale-100 transition-all duration-300 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gold-400 flex items-center justify-center text-neutral-950 shadow-lg shadow-gold-400/40">
                        <Play className="w-5 h-5 fill-neutral-950 ml-1" />
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold">
                        Launch Film
                      </span>
                    </div>
                  </div>
                )}

                {camp.videoUrl ? (
                  <CampaignVideoPlayer src={camp.videoUrl} poster={camp.imageUrl} />
                ) : (
                  <img
                    src={camp.imageUrl}
                    alt={`${camp.title} Cinematic Campaign Spec Photo`}
                    className="w-full h-full object-cover filter saturate-75 brightness-95 group-hover:scale-105 transition-transform duration-700 object-center"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Left Bottom corner Tag */}
                <div className="absolute bottom-3 left-3 z-20 bg-[#030303]/80 backdrop-blur-md px-2 py-1 border border-white/5 text-[9px] font-mono tracking-wider font-semibold text-gold-400 uppercase">
                  {camp.category}
                </div>
              </div>

              {/* Campaign Meta details */}
              <div className="p-5 flex flex-col gap-2 relative border-t border-white/5">
                <h3 className="font-display text-lg font-bold tracking-tight text-white uppercase group-hover:text-gold-400 transition-colors">
                  {camp.title}
                </h3>
                <p className="text-white/40 text-xs tracking-wider line-clamp-1 font-light">
                  {camp.tagline}
                </p>
                <div className="flex items-center justify-between text-[10px] font-mono text-white/50 pt-2 border-t border-white/[0.03] mt-2">
                  <span className="flex items-center gap-1">
                    <Video className="w-3 h-3 text-gold-400" /> {camp.duration}
                  </span>
                  <span className="uppercase text-[9px] tracking-widest text-[#888888]">
                    A² SPEC
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

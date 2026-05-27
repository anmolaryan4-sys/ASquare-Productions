import { useState, useEffect, useRef } from "react";
import { X, Play, Pause, Volume2, VolumeX, RotateCcw, Monitor, FileText, Info, Award, Compass } from "lucide-react";
import { motion } from "motion/react";
import { Campaign } from "../types";

interface CampaignDetailModalProps {
  campaign: Campaign | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CampaignDetailModal({ campaign, isOpen, onClose }: CampaignDetailModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(105);
  const [audioBars, setAudioBars] = useState<number[]>([15, 30, 45, 10, 25, 40, 50, 35, 12, 18, 42, 22]);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Synchronize playing state with a real video if present
  useEffect(() => {
    if (campaign?.videoUrl && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, campaign?.videoUrl]);

  // Synchronize mute state
  useEffect(() => {
    if (campaign?.videoUrl && videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted, campaign?.videoUrl]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // disable body scrolling
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // restore body scrolling
    };
  }, [isOpen, onClose]);

  // Simulate cinematic playback time increment for mock preview
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen && isPlaying && !campaign?.videoUrl) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) return 0; // Loop after duration
          return prev + 1;
        });

        // Simulate sound levels moving
        setAudioBars((prev) =>
          prev.map(() => Math.floor(Math.random() * 45) + 5)
        );
      }, 1000);
    }
    
    if (isOpen && isPlaying && campaign?.videoUrl) {
       interval = setInterval(() => {
        // Simulate sound levels moving even with real video
        setAudioBars((prev) =>
          prev.map(() => Math.floor(Math.random() * 45) + 5)
        );
      }, 200);
    }

    return () => clearInterval(interval);
  }, [isOpen, isPlaying, campaign?.videoUrl, duration]);

  if (!isOpen || !campaign) return null;

  // Format time (e.g. 01:24)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const currentPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-[#030303]/95 backdrop-blur-xl transition-all duration-300">
      
      {/* Outer Click Backdrop */}
      <div className="absolute inset-0 z-0 cursor-zoom-out" onClick={onClose} />

      <div className="relative w-full max-w-6xl bg-[#080808] border border-white/10 rounded-sm overflow-hidden z-10 shadow-2xl flex flex-col lg:grid lg:grid-cols-12 max-h-[90vh] lg:max-h-[85vh]">
        
        {/* Top absolute header info */}
        <div className="absolute top-4 left-6 z-40 flex items-center gap-2 select-none pointer-events-none">
          <div className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
          <span className="font-mono text-[9px] text-[#ff3b30] tracking-widest uppercase font-bold">
            PLAYBACK ACTIVE · A² STUDIO-MONITOR
          </span>
        </div>

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 text-white/50 hover:text-gold-400 bg-neutral-900 border border-white/5 rounded-full hover:bg-neutral-800 transition-all cursor-pointer focus:outline-none"
          aria-label="Close panel"
        >
          <X className="w-5 h-5" />
        </button>

        {/* LEFT COLUMN (COL-SPAN 8): Cinematic Simulated Video Player Stage */}
        <div className="lg:col-span-8 bg-black aspect-video lg:aspect-auto lg:h-full relative flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-white/5">
          
          {/* Overlay camera boundaries metadata */}
          <div className="absolute inset-x-6 top-10 flex justify-between font-mono text-[9px] text-white/30 tracking-widest select-none pointer-events-none z-10">
            <span>TC 00:02:{currentTime.toString().padStart(2, "0")}:14</span>
            <span>4K DCI UHD · 2.39:1 CINEMATIC</span>
            <span className="hidden sm:inline">ISO 800 · F/2.0 ANAMORPHIC</span>
          </div>

          {/* Core simulated screen image (unfocused and cinematic) */}
          <div className="w-full h-full absolute inset-0 z-0 flex items-center justify-center">
            {/* Ambient vignette background shadow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50 z-10" />

            {/* Simulated grain noise filter overlay */}
            <div className="absolute inset-0 bg-black/5 z-10 opacity-30 select-none pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/[0.03] via-transparent to-transparent" />

            {/* Core active media state */}
            {campaign.videoUrl ? (
               <>
                 {/* Blurred ambient background based on campaign photo */}
                 <div className="absolute inset-0 z-0 overflow-hidden">
                    <img 
                       src={campaign.imageUrl} 
                       className="w-full h-full object-cover filter blur-[80px] opacity-40 saturate-150 transform scale-110" 
                       alt="" 
                       referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                 </div>
                 
                 {/* Elevated vertical video container */}
                 <div className="absolute inset-0 z-10 flex items-center justify-center p-4 sm:p-6 md:p-12 mb-16 md:mb-20">
                   <div className="relative h-full max-h-[85vh] aspect-[9/16] rounded-xl overflow-hidden shadow-[0_0_80px_rgba(251,191,36,0.15)] border border-white/10 bg-black">
                     <video
                       ref={videoRef}
                       src={campaign.videoUrl}
                       autoPlay={isPlaying}
                       loop
                       muted={isMuted}
                       playsInline
                       onTimeUpdate={(e) => {
                         setCurrentTime(e.currentTarget.currentTime);
                       }}
                       onLoadedMetadata={(e) => {
                         setDuration(e.currentTarget.duration);
                       }}
                       className={`w-full h-full object-cover transition-all duration-1000 ${
                         isPlaying ? "scale-100 opacity-100" : "scale-105 filter blur-sm saturate-50 opacity-90"
                       }`}
                     />
                   </div>
                 </div>
               </>
            ) : (
              <img
                src={campaign.imageUrl}
                alt="Film monitor active preview state"
                className={`w-full h-full object-cover select-none filter contrast-110 brightness-75 transition-all duration-1000 ${
                  isPlaying ? "scale-105 saturate-75" : "scale-100 saturate-[0.10] blur-[2px]"
                }`}
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Giant centered play-state trigger */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            {!isPlaying && (
              <button
                onClick={() => setIsPlaying(true)}
                className="w-16 h-16 rounded-full bg-gold-400 text-neutral-950 flex items-center justify-center shadow-2xl gold-glow hover:scale-105 transition-transform duration-300"
              >
                <Play className="w-6 h-6 fill-neutral-950 ml-1.5" />
              </button>
            )}
          </div>

          {/* BOTTOM PLAYER HUD PANEL (METADATA + SCRUBBER CONTROL) */}
          <div className="relative z-20 w-full p-4 sm:p-6 flex flex-col gap-3 mt-auto bg-gradient-to-t from-black via-black/80 to-transparent">
            
            {/* Scrubber timeline */}
            <div className="flex flex-col gap-1.5">
              <div 
                className="h-1 w-full bg-white/20 rounded-full relative overflow-hidden group/track cursor-pointer"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const percentage = (e.clientX - rect.left) / rect.width;
                  const newTime = percentage * duration;
                  setCurrentTime(newTime);
                  if (campaign.videoUrl && videoRef.current) {
                    videoRef.current.currentTime = newTime;
                  }
                }}
              >
                <div 
                  className="h-full bg-gradient-to-r from-gold-500 to-gold-300 rounded-full transition-all"
                  style={{ width: `${Math.min(currentPercentage, 100)}%` }}
                />
              </div>

              <div className="flex justify-between font-mono text-[9px] text-white/50 select-none">
                <span>{formatTime(currentTime)}</span>
                <span>{campaign.duration || "02:00"}</span>
              </div>
            </div>

            {/* Controls panel: Play, Volume, Sound equalizer waveform */}
            <div className="flex items-center justify-between mt-1 gap-4">
              
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-1.5 text-white hover:text-gold-400 transition-colors cursor-pointer"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white ml-0.5" />}
                </button>

                {/* Restart play */}
                <button
                  onClick={() => {
                    setCurrentTime(0);
                    if (campaign.videoUrl && videoRef.current) {
                      videoRef.current.currentTime = 0;
                    }
                  }}
                  className="p-1.5 text-white/70 hover:text-gold-400 transition-colors cursor-pointer"
                  aria-label="Restart film"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>

                {/* Mute toggle */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 text-white/70 hover:text-gold-400 transition-colors cursor-pointer"
                  aria-label="Mute sound"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Dynamic Sound waves */}
              <div className="flex items-end gap-0.5 h-5 px-3 border-l border-white/10">
                {audioBars.map((barHeight, idx) => (
                  <div
                    key={idx}
                    className={`w-0.5 rounded-t-sm transition-all duration-300 ${isMuted || !isPlaying ? "bg-stone-800" : "bg-gold-400"}`}
                    style={{ height: `${isMuted || !isPlaying ? 2 : barHeight}px` }}
                  />
                ))}
              </div>

              {/* Lens info */}
              <div className="hidden sm:inline font-mono text-[8px] text-white/30 tracking-wider">
                CAM_REC_A012_A²
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT COLUMN (COL-SPAN 4): Editorial Concept Deck */}
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between gap-6 overflow-y-auto max-h-[50vh] lg:max-h-full">
          
          {/* Top text content */}
          <div className="flex flex-col gap-6">
            <div className="border-b border-white/5 pb-4">
              <span className="font-mono text-[9px] text-gold-400 tracking-[0.3em] uppercase block mb-1.5 font-bold">
                {campaign.category}
              </span>
              <h3 className="font-display text-2xl font-black text-white uppercase tracking-tight leading-none mb-1">
                {campaign.title}
              </h3>
              <p className="font-serif italic text-white/50 text-xs mt-1.5">
                "{campaign.tagline}"
              </p>
            </div>

            {/* Campaign info details list */}
            <div className="grid grid-cols-2 gap-4 border-b border-white/5 pb-4">
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  CLIENT
                </span>
                <span className="text-white text-xs font-semibold mt-1">
                  {campaign.client || "Emerging D2C"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  RUN-TIME
                </span>
                <span className="text-white text-xs font-semibold mt-1 flex items-center gap-1">
                  {campaign.duration}
                </span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  PRODUCTION ROLE
                </span>
                <span className="text-white text-xs font-semibold mt-1">
                  {campaign.role || "Complete Creative Production"}
                </span>
              </div>
            </div>

            {/* Strategy Concept narrative */}
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest flex items-center gap-1 font-bold">
                <Info className="w-3 h-3 text-gold-400" /> CREATIVE BRIEF & PSYCHOLOGY
              </span>
              <p className="text-white/80 text-xs leading-relaxed font-light font-sans mt-1">
                {campaign.description}
              </p>
            </div>
          </div>

          {/* Bottom Call Action */}
          <div className="pt-6 border-t border-white/5 mt-auto flex flex-col gap-3">
            <p className="text-stone-500 text-[10px] font-mono leading-relaxed">
              *All concepts reviewed are subject to strict copyrights of A² Productions & associates.
            </p>
            <button
              onClick={() => {
                onClose();
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
              }}
              className="w-full py-3 border border-gold-400/30 hover:border-gold-400 bg-gold-400/5 hover:bg-gold-400 hover:text-black font-mono text-[10px] tracking-[0.2em] font-bold text-gold-400 hover:text-neutral-950 uppercase transition-all duration-300 rounded-sm cursor-pointer"
            >
              CO-CREATE WITH US
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

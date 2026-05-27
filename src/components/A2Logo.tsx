import { motion } from "motion/react";

interface A2LogoProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
}

export default function A2Logo({ size = "md", className = "", onClick }: A2LogoProps) {
  // Determine scale classes based on sizing
  const containerClasses = {
    sm: "w-[120px] md:w-[140px]",
    md: "w-[160px] md:w-[180px]",
    lg: "w-[220px] md:w-[260px]",
    xl: "w-[280px] md:w-[320px]",
  }[size];

  const monogramSize = {
    sm: "text-3xl md:text-4xl",
    md: "text-4xl md:text-5xl",
    lg: "text-5xl md:text-6xl",
    xl: "text-6xl md:text-7xl",
  }[size];

  const superscriptSize = {
    sm: "text-base md:text-lg -top-3 md:-top-4 -ml-0.5 md:-ml-1",
    md: "text-xl md:text-2xl -top-4 md:-top-5 -ml-1 md:-ml-1.5",
    lg: "text-2xl md:text-3xl -top-5 md:-top-6 -ml-1.5 md:-ml-2",
    xl: "text-3xl md:text-4xl -top-6 md:-top-8 -ml-2 md:-ml-3",
  }[size];

  const labelSize = {
    sm: "text-[7px] md:text-[8px] tracking-[0.25em]",
    md: "text-[9px] md:text-[10px] tracking-[0.3em]",
    lg: "text-[11px] md:text-[12px] tracking-[0.35em]",
    xl: "text-[13px] md:text-[14px] tracking-[0.4em]",
  }[size];

  const curveHeight = {
    sm: "h-1 md:h-1.5",
    md: "h-1.5 md:h-2",
    lg: "h-2 md:h-2.5",
    xl: "h-2.5 md:h-3",
  }[size];

  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center select-none cursor-pointer group ${containerClasses} ${className}`}
    >
      {/* Monogram A² with rich gold metallic gradient styling */}
      <div className="flex items-start justify-center relative translate-y-1">
        {/* The 'A' (Elegant Serif font matching the image) */}
        <span
          className={`font-serif-logo font-extrabold text-white transition-all duration-500 gold-metallic-text ${monogramSize} tracking-tight select-none`}
        >
          A
        </span>
        {/* The superscript '2' */}
        <span
          className={`relative font-serif-logo font-bold text-white transition-all duration-500 gold-metallic-text ${superscriptSize} select-none`}
        >
          2
        </span>
      </div>

      {/* Elegant curves/separator arc vector with real golden metal gradient */}
      <div className={`w-full ${curveHeight} overflow-visible mb-1 -mt-0.5 relative z-10`}>
        <svg viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="logo-double-curve-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#9e7a2b" />
              <stop offset="18%" stopColor="#d8b763" />
              <stop offset="38%" stopColor="#fef5cc" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="62%" stopColor="#fef5cc" />
              <stop offset="82%" stopColor="#c19a41" />
              <stop offset="100%" stopColor="#87621c" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#d8b763" floodOpacity="0.4"/>
            </filter>
          </defs>
          <path
            d="M 10 10 Q 150 1 290 10 Q 150 3.5 10 10 Z"
            fill="url(#logo-double-curve-grad)"
            filter="url(#glow)"
            className="transition-transform duration-500 group-hover:scale-y-110 origin-center"
          />
        </svg>
      </div>

      {/* Spaced "PRODUCTIONS" underneath */}
      <span
        className={`font-display text-white uppercase font-bold text-center transition-all duration-500 tracking-[0.3em] gold-metallic-text-soft ${labelSize}`}
      >
        productions
      </span>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import GridDistortion from "./GridDistortion";

export default function OfficeTourVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/9s2ydfkRz2E?autoplay=1"
          title="A Glimpse of CodeMoly Office Tour"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-full cursor-pointer group" 
      onClick={() => setIsPlaying(true)} 
      role="button" 
      aria-label="Play Office Tour Video"
    >
      <GridDistortion
        imageSrc="/office-tour-thumbnail.png"
        className="w-full h-full object-cover"
        grid={12}
        mouse={0.18}
        strength={0.15}
        relaxation={0.9}
      />
      <div className="absolute inset-0 bg-[#03232a]/30 group-hover:bg-[#03232a]/15 flex items-center justify-center transition-all duration-300">
        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:border-white/40">
          <div className="w-14 h-14 rounded-full bg-[#ff0000] group-hover:bg-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_15px_rgba(255,0,0,0.4)]">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white group-hover:text-[#ff0000] transition-colors duration-300">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm text-white font-sans text-xs font-semibold py-1 px-2 rounded border border-white/10 tracking-wider">
          4:12
        </div>
      </div>
    </div>
  );
}

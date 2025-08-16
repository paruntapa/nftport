import React from 'react'

const HudOverlay = () => {
  return (
    <div>
         <div className="pointer-events-none absolute inset-0 z-30">
        {/* Top-left */}
        <div className="font-orbitron absolute left-50 top-24 space-y-1">
          <span className="absolute left-[6px] top-[-8px] w-[14px] h-[1px] bg-white"/>
          <span className="absolute left-[6px] top-[-8px] w-[1px] h-[14px] bg-white"/>
          <div className="relative left-4.5">
          <div className="hud-text text-white">OSP: <span className="text-[#21E786]">1920 x 978</span></div>
          <div className="hud-text text-white">FPS: <span className="text-[#21E786]">61.93</span></div>
          </div>
        </div>
        {/* Top-right */}
        <div className="font-orbitron absolute right-50 top-24 text-right space-y-1">
          <span className="absolute right-[6px] top-[-8px] w-[14px] h-[1px] bg-white"/>
          <span className="absolute right-[6px] top-[-8px] w-[1px] h-[14px] bg-white"/>
          <div className="relative right-4.5">
          <div className="hud-text text-white">10-08-2025 <span className="text-[#21E786]">DATE</span></div>
          <div className="hud-text text-white">08:56:02 <span className="text-[#21E786]">TIME</span></div>
          </div>
        </div>
        {/* Bottom-right */}
        <div className="font-orbitron absolute right-50 bottom-28 text-right space-y-1">
          <span className="absolute right-[2px] bottom-[-10px] w-[14px] h-[1px] bg-white"/>
          <span className="absolute right-[2px] bottom-[-10px] w-[1px] h-[14px] bg-white"/>
          <div className="relative right-4">
          <div className="hud-text text-white">74.986 <span className="text-[#21E786]">LOG</span></div>
          <div className="hud-text text-white">With Chrome/126.0.0.0 <span className="text-[#21E786]">SYS</span></div>
          </div>
        </div>
        {/* Bottom-left */}
        <div className="font-orbitron absolute left-50 bottom-28 space-y-1">
          <span className="absolute left-[6px] bottom-[-10px] w-[12px] h-[1px] bg-white"/>
          <span className="absolute left-[6px] bottom-[-10px] w-[1px] h-[14px] bg-white"/>
          <div className="relative left-4.5">
          <div className="hud-text text-white">EVO <span className="text-[#21E786]">Alpha</span></div>
          <div className="hud-text text-white">VERS: <span className="text-[#21E786]">01.08.04</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HudOverlay
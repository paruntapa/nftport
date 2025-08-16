import React from 'react'

const MenuBar = () => {
  return (
    <div>
        <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 pt-6 bg-[#00130A]">
        <div className="font-voltec text-[24px] leading-[24.33px] tracking-[0.08em] capitalize">Exyz</div>
        <div className="font-voltec text-[24px] leading-[24.33px] tracking-[0.08em] capitalize absolute left-1/2 -translate-x-1/2">
          Leaderboard
        </div>
        <button className="relative group inline-flex items-center justify-center px-4 py-2 font-orbitron font-extrabold text-[12px] leading-[1] tracking-[0.6px] uppercase text-[color:var(--foreground)]">
          <span className="pointer-events-none absolute inset-0">
            {/* Top-left with intentional gap */}
            <span className="absolute left-[6px] top-[-8px] w-[14px] h-[1px] bg-white"/>
            <span className="absolute left-[6px] top-[-8px] w-[1px] h-[14px] bg-white"/>
            {/* Top-right */}
            <span className="absolute right-[6px] top-[-8px] w-[14px] h-[1px] bg-white"/>
            <span className="absolute right-[6px] top-[-8px] w-[1px] h-[14px] bg-white"/>
            {/* Bottom-right */}
            <span className="absolute right-[6px] bottom-[-10px] w-[14px] h-[1px] bg-white"/>
            <span className="absolute right-[6px] bottom-[-10px] w-[1px] h-[14px] bg-white"/>
            {/* Bottom-left */}
            <span className="absolute left-[6px] bottom-[-10px] w-[12px] h-[1px] bg-white"/>
            <span className="absolute left-[6px] bottom-[-10px] w-[1px] h-[14px] bg-white"/>
          </span>
          Connect Wallet
        </button>
      </header>
    </div>
  )
}

export default MenuBar
"use client"
import Image from "next/image";

export default function Home() {
  const nftItems = [
    { src: "/nftimg/price-109.gif", price: "109" },
    { src: "/nftimg/price-2.65.png", price: "2" },
    { src: "/nftimg/price-21.93.png", price: "21" },
    { src: "/nftimg/price-3.98.gif", price: "4" },
    { src: "/nftimg/price-31.gif", price: "30" },
    { src: "/nftimg/price-34.73.png", price: "34" },
    { src: "/nftimg/price-7.8.jpeg", price: "7" },
    { src: "/nftimg/47.79.png", price: "47" },
  ];

  const teamSvgs = [
    "/svgs/pyschqazov.svg",
    "/svgs/realtech.svg",
    "/svgs/38thaamr.svg",
    "/svgs/ssts.svg",
  ];
  return (
    <>
    <div className="relative min-h-screen overflow-hidden bg-horizon">
      {/* Header */}
      <header className="relative z-20 flex items-center justify-between px-6 sm:px-10 pt-6">
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

      {/* Center Hero */}
      <main className="relative z-10 flex min-h-[70vh] md:min-h-[75vh] items-center justify-center px-6 text-center">
        <div className="max-w-[1200px]">
          <h1 className="font-atomos text-[48px] leading-[48px] sm:text-[64px] sm:leading-[64px] md:text-[84px] md:leading-[80px] capitalize">
            Explore NFT Collection
          </h1>
          <p className="font-voltec mt-6 text-[18px] leading-[24px] sm:text-[22px] sm:leading-[28px] md:text-[28px] md:leading-[30px] max-w-[940px] mx-auto">
            A collection of 2525 highly-fashionable NFTs on the ETH blockchain. Unique,
            metaverse-ready, and designed to benefit their holders.
          </p>
          <div className="mt-10">
            <button className="btn-start font-orbitron text-[12px] leading-[1] tracking-[0.12em] uppercase">
              <span className="btn-diag-layer" aria-hidden={true}></span>
              Start Game
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Foreground Grid */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5]">
        <Image
          src="/svgs/squareboxlayer.svg"
          alt="Grid foreground"
          width={1440}
          height={239}
          className="w-full h-auto select-none"
          priority
        />
      </div>

      {/* Horizon Ray */}
      <div className="pointer-events-none absolute inset-x-0 z-[6]" style={{ bottom: 264 }}>
        <Image
          src="/svgs/orangeray.svg"
          alt="Horizon ray"
          width={1440}
          height={19}
          className="w-full h-auto select-none"
          priority
        />
      </div>

      {/* HUD Overlay */}
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

    {/* Infinite Scroll New Collections */}
    <div className="mt-10 border-t border-white border-b overflow-hidden">
      <div className="py-4 bg-[#020D19]">
        <div className="animate-scroll flex whitespace-nowrap font-megaton text-[24px]">
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
          <span className="text-lg text-white mx-8">NEW COLLECTIONS</span>
          <span className="text-lg text-white mx-8">•</span>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>

    {/* NFT Section */}
    <section className="relative bg-[#020D19] z-10 px-6 sm:px-10 py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nftItems.map((item, i) => (
            <div key={item.src} className="nft-card group relative border-2 border-[color:var(--foreground)] rounded-lg">
              <div className="relative aspect-square select-none overflow-hidden rounded-t-md">
                <Image src={item.src} alt={`NFT ${i + 1}`} fill className="nft-image object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="nft-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-t-md">
                  <div className="nft-hover-text press-typo flex items-center gap-3 text-white">
                    <Image src="/svgs/skull.svg" alt="Skull" width={24} height={24} className="drop-shadow-lg" />
                    <span>Buy Mint <span className="sol-shine">{item.price} SOL</span></span>
                  </div>
                </div>
              </div>
              <div className="nft-card-footer flex items-center justify-between px-3 py-3 bg-[rgba(0,19,10,0.8)] rounded-b-md">
                <div className="flex items-center gap-2">
                  <Image src={teamSvgs[Math.floor(i / 2)]} alt="Team" width={24} height={24} />
                  <span className="press-typo">{i + 1}</span>
                </div>
                <div className="press-typo sol-shine">{item.price} SOL</div>
              </div>
            </div>
          ))}
        </div>

        {/* Table */}
        
        <div className="mt-16 border-t-1 border-white max-w-full">
          <h2 className="mt-20 mb-10 font-atomos-regular text-center text-[64px] md:text-[96px] leading-none">THE LEAGUE</h2>

          {/* League Panel */}
          <div className="mt-6 mx-auto w-full max-w-[1100px] rounded-md border border-white bg-[#00130A] px-6 md:px-10 py-8">
            {[
              { icon: "/svgs/realtech.svg", name: "Realtech", score: "17", price: "" },
              { icon: "/svgs/pyschqazov.svg", name: "Psycho A200", score: "15", price: "30" },
              { icon: "/svgs/ssts.svg", name: "SSTS", score: "8", price: "25" },
              { icon: "/svgs/38thaamr.svg", name: "38th Arma", score: "11", price: "25" },
            ].map((row, idx, arr) => (
              <div key={row.name}>
                <div className="grid grid-cols-6 items-center gap-4 py-5">
                  <div className="col-span-2 flex items-center gap-4 min-w-10">
                    <Image src={row.icon} alt={row.name} width={36} height={63} />
                    <span className="font-voltec text-[32.14px] tracking-[0.08em] whitespace-nowrap">{row.name}</span>
                  </div>
                  <div className="col-span-3  flex justify-center items-center gap-3">
                    <span className="press-typo">{row.score}</span>
                    <Image src="/svgs/skull.svg" alt="Skull" width={29.74} height={24.78} />
                  </div>
                  <div className="col-span-1 min-w-[90px] text-right">
                    {row.price && <span className="press-typo">{row.price} SOL</span>}
                  </div>
                </div>
                {idx < arr.length && (
                  <div className="h-[4px] w-full bg-[#D55549]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#020D19]">
      <div className="flex justify-between border-t-1 border-gray-800 font-voltec p-5 pl-20 pr-20">
        <div>
         <span className="text-[#95FF00]">/</span> © WEBTHREE 2024
        </div>
        <div>
        <span className="text-[#95FF00]">/</span> ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
    </>
  );
}

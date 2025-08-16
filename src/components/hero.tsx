import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <main className="relative z-10  flex min-h-[70vh] md:min-h-[75vh] items-center justify-center px-6 text-center">
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
    </div>
  )
}

export default Hero
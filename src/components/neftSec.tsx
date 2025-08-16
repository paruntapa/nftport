import { leaguePanels } from '@/constants/leaguePanels'
import { nftItems } from '@/constants/nftItems'
import { teamSvgs } from '@/constants/teamSvgs'
import Image from 'next/image'
import React from 'react'


const NeftSec = () => {
  return (
    <div>
        <section className="relative bg-[#020D19] z-10 px-6 sm:px-10 py-16 md:py-24">
      <div className="max-w-[1800px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nftItems.map((item, i) => (
            <div key={item.src} className="nft-card group relative border-2 border-[color:var(--foreground)] rounded-lg">
              <div className="relative aspect-square select-none overflow-hidden rounded-t-md">
                <Image src={item.src} alt={`NFT ${i + 1}`} unoptimized fill className="nft-image object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                <div className="nft-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center rounded-t-md">
                  <div className="nft-hover-text press-typo flex items-center gap-3 text-white">
                    <Image src="/svgs/skull.svg" alt="Skull" unoptimized width={24} height={24} className="drop-shadow-lg" />
                    <span>Buy Mint <span className="sol-shine">{item.price} SOL</span></span>
                  </div>
                </div>
              </div>
              <div className="nft-card-footer flex items-center justify-between px-3 py-3 bg-[rgba(0,19,10,0.8)] rounded-b-md">
                <div className="flex items-center gap-2">
                  <Image src={teamSvgs[Math.floor(i / 2)]} unoptimized alt="Team" width={24} height={24} />
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
            {leaguePanels.map((row, idx, arr) => (
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
    </div>
  )
}

export default NeftSec
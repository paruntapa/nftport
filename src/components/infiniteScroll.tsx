"use client"

import React from 'react'

export const InfiniteScroll = () => {
  return (
    <div className="border-t  border-white border-b overflow-hidden">
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
  )
}

export default InfiniteScroll
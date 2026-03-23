'use client'

import { ArrowLeft, Coins, Zap, User, Brain } from 'lucide-react'
import { useAnalytics } from '@/context/AnalyticsContext'

export default function AnalyticsOverlay() {
  const { isOpen, assetName, overlayStyle, closeAnalytics } = useAnalytics()

  return (
    <div
      id="analytics-overlay"
      className={`fixed inset-0 bg-background overflow-y-auto transition-all duration-700 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        clipPath: isOpen
          ? `circle(150% at ${overlayStyle.x} ${overlayStyle.y})`
          : `circle(0% at ${overlayStyle.x} ${overlayStyle.y})`,
        transition: 'clip-path 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 100,
      }}
    >
      <div className="absolute inset-0 z-0 radar-sweep opacity-50" />

      <header className="sticky top-0 z-50 bg-[#0B0E14]/80 backdrop-blur-lg flex justify-between items-center px-4 py-4 border-b border-outline-variant/10">
        <button
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors"
          onClick={closeAnalytics}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-label text-xs uppercase tracking-widest font-bold">Dashboard</span>
        </button>
        <div className="text-center flex-1 pr-8">
          <h1 className="font-headline font-bold text-xl tracking-tight">{assetName}</h1>
          <p className="text-[8px] font-label text-secondary uppercase tracking-[0.3em] font-bold">
            DEEP ANALYTICS LIVE
          </p>
        </div>
      </header>

      <main className="relative z-10 p-4 space-y-6 pb-24">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-surface-container-high border border-primary/20 rounded-lg flex items-center justify-center">
              <Coins className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface">
                {assetName?.replace('$', '')}COIN
              </h2>
              <p className="text-secondary font-label text-[10px] tracking-[0.2em] font-bold">
                HYPER-GROWTH / VOLATILE
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[40px] font-headline font-extrabold text-primary leading-none">98.4</div>
            <div className="text-[10px] font-label text-on-surface-variant uppercase tracking-widest">Hype Score</div>
          </div>
        </div>

        <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline text-sm font-bold uppercase tracking-wider">Kinetic Overlay</h3>
            <span className="text-[10px] text-secondary font-label font-bold">Correlation: 0.89</span>
          </div>
          <div className="h-48 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
              <path d="M0 180 Q 50 140, 100 160 T 200 100 T 300 140 T 400 40" fill="none" stroke="#5EB4FF" strokeWidth="2" />
              <path d="M0 200 Q 50 120, 100 170 T 200 130 T 300 100 T 400 20 V 200 H 0 Z" fill="rgba(0, 255, 163, 0.1)" stroke="#00FFA3" strokeWidth="1.5" />
            </svg>
          </div>
          <div className="flex justify-between mt-2 text-[8px] font-label text-on-surface-variant uppercase">
            <span>-6h</span><span>-4h</span><span>-2h</span><span>Live</span>
          </div>
        </div>

        <div className="bg-surface-container-high rounded-xl p-4 flex flex-col justify-between h-32 border-l-2 border-secondary">
          <div className="flex justify-between">
            <span className="font-label text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">
              Mention Velocity
            </span>
            <Zap className="w-4 h-4 text-secondary" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-headline font-bold">14.2K</span>
            <span className="text-secondary text-xs font-bold">+342%</span>
          </div>
          <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-secondary w-[90%]" />
          </div>
        </div>

        <div className="bg-surface-container border border-outline-variant/10 rounded-xl p-4">
          <h3 className="font-headline text-sm font-bold uppercase tracking-wider mb-4">Influencer Impact</h3>
          <div className="flex justify-around items-center">
            {['@AlphaWhale', '@CryptoNerd'].map((handle, i) => (
              <div key={i} className="text-center">
                <div className={`w-12 h-12 rounded-full border-2 ${i === 0 ? 'border-primary-fixed' : 'border-secondary'} p-0.5 mx-auto`}>
                  <div className="w-full h-full rounded-full bg-surface-container-highest flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <span className="text-[8px] block mt-1 font-label">{handle}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="bg-surface-container-highest p-2 rounded">
              <div className="text-[8px] uppercase text-on-surface-variant font-bold">Reach</div>
              <div className="text-lg font-headline font-bold">18.4M</div>
            </div>
            <div className="bg-surface-container-highest p-2 rounded">
              <div className="text-[8px] uppercase text-on-surface-variant font-bold">Depth</div>
              <div className="text-lg font-headline font-bold">Lvl 5</div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5 relative">
          <div className="flex items-center gap-2 mb-3">
            <Brain className="w-5 h-5 text-primary" />
            <h3 className="font-headline font-bold text-sm tracking-widest uppercase">AI Status Report</h3>
          </div>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Pattern detected:{' '}
            <span className="text-primary font-bold">Hyper-Kinetic Decoupling</span>. Massive
            liquidity migration observed from mid-caps. Expect continued volatility expansion.
          </p>
          <div className="mt-4 pt-4 border-t border-primary/20 flex justify-between items-center">
            <div>
              <span className="text-[8px] block font-label uppercase font-bold text-primary">6hr prediction</span>
              <span className="text-2xl font-headline font-extrabold">+18.5%</span>
            </div>
            <div className="h-10 w-px bg-primary/20" />
            <div>
              <span className="text-[8px] block font-label uppercase font-bold text-on-surface-variant text-right">Confidence</span>
              <div className="flex gap-0.5 mt-1">
                {[true, true, true, false].map((filled, i) => (
                  <div key={i} className={`w-1.5 h-3 ${filled ? 'bg-primary' : 'bg-surface-container-highest'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface-container rounded-xl p-6 border border-tertiary/20 glow-tertiary">
          <h3 className="font-headline text-center text-sm font-bold uppercase tracking-[0.2em] text-tertiary mb-4">
            Risk Exposure
          </h3>
          <div className="flex justify-center mb-4">
            <div className="relative w-32 h-16 overflow-hidden">
              <div className="absolute top-0 w-32 h-32 border-8 border-surface-container-highest rounded-full" />
              <div className="absolute top-0 w-32 h-32 border-8 border-transparent border-t-tertiary border-r-tertiary rounded-full rotate-[15deg]" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
                <span className="text-2xl font-headline font-bold text-tertiary">84%</span>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold uppercase text-on-surface-variant">
              <span>Sentiment Uniformity</span>
              <span className="text-tertiary">Critical</span>
            </div>
            <div className="w-full h-1 bg-surface-container-highest rounded-full">
              <div className="h-full bg-tertiary w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

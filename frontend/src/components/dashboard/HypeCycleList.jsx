'use client'

import { Coins, Brain } from 'lucide-react'
import { useAnalytics } from '@/context/AnalyticsContext'

const phaseStyles = {
  primary: "text-primary bg-primary/10",
  secondary: "text-secondary bg-secondary/10",
  tertiary: "text-tertiary bg-tertiary/10",
}

export default function HypeCycleList({ coins = [] }) {
  const { openAnalytics } = useAnalytics()

  if (!coins.length) {
    return <p className="text-sm text-gray-400">No data yet...</p>
  }

  return (
    <section className="space-y-4">
      <div className="flex justify-between items-end">
        <h2 className="font-headline text-xl font-bold tracking-tight">
          Hype Cycle Classifier
        </h2>
        <span className="font-label text-[10px] text-secondary-dim border border-secondary-dim/30 px-2 py-0.5 rounded uppercase">
          Live Feed
        </span>
      </div>

      <div className="space-y-3">
        {coins.map((coin) => {
          const Icon = coin.icon === 'brain' ? Brain : Coins

          return (
            <div
              key={coin.id || coin.ticker}
              onClick={(e) => openAnalytics(e, coin.ticker)}
              className={`bg-surface-container p-4 rounded-lg transition-all active:scale-[0.98] cursor-pointer group ${
                coin.glow ? 'glow-secondary' : 'border border-outline-variant/5'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3 items-center">
                  <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border border-outline-variant/20 group-hover:border-primary transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-headline font-bold text-lg leading-none">
                      {coin.ticker}
                    </h3>
                    <p className="font-label text-[10px] text-on-surface-variant mt-1 uppercase">
                      {coin.name}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`font-label text-[10px] font-bold uppercase block px-2 py-1 rounded ${
                      phaseStyles[coin.phaseColor] || ""
                    }`}
                  >
                    Phase {coin.phase}
                  </span>

                  <span className="text-[10px] text-on-surface-variant mt-1 block">
                    {coin.phaseLabel}
                  </span>
                </div>
              </div>

              <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${coin.barColor || 'bg-primary'}`}
                  style={{ width: coin.progress || "50%" }}
                />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
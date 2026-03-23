'use client'

import { Brain } from 'lucide-react'
import { useAnalytics } from '@/context/AnalyticsContext'

export default function AIAnalystCard() {
  const { openAnalytics } = useAnalytics()

  return (
    <section className="space-y-4">
      <h2 className="font-headline text-xl font-bold tracking-tight">AI Analyst Narrative</h2>
      <div className="bg-surface-container-low rounded-lg p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Brain className="w-24 h-24" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-secondary" />
            <span className="font-label text-[10px] font-bold tracking-[0.2em] uppercase">
              Bullish Sentiment Alpha
            </span>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed font-body">
            <span className="text-on-surface font-bold">$PEPE</span> is currently dominating the
            Retail FOMO phase. Our high-frequency monitoring shows extremely bullish social
            sentiment combined with a{' '}
            <span className="text-secondary">3.8x velocity spike</span>.
          </p>
          <button
            className="mt-6 w-full py-3 bg-primary text-on-primary font-label text-xs font-bold uppercase tracking-widest rounded transition-all active:scale-95"
            onClick={(e) => openAnalytics(e, '$PEPE')}
          >
            Deep Divergence Report
          </button>
        </div>
      </div>
    </section>
  )
}

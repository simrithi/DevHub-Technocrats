'use client'

import { useEffect, useState } from "react";
import { getCoins } from "@/lib/api";

import Header from '@/components/dashboard/Header'
import Ticker from '@/components/dashboard/Ticker'
import MarketStats from '@/components/dashboard/MarketStats'
import HypeCycleList from '@/components/dashboard/HypeCycleList'
import AIAnalystCard from '@/components/dashboard/AIAnalyst'
import BottomNav from '@/components/dashboard/BottomNav'
import AnalyticsOverlay from '@/components/dashboard/AnalyticsOverlay'

const PHASE_COLOR = ['tertiary', 'secondary', 'secondary', 'primary', 'primary']
const BAR_COLOR   = ['bg-tertiary', 'bg-secondary', 'bg-secondary', 'bg-primary', 'bg-primary']

function normalise(raw) {
  return raw.map(c => ({
    id:         c.coin,
    ticker:     c.coin,
    name:       c.name,
    hype_score: c.hype_score,
    sentiment:  c.sentiment,
    phase:      c.phase,
    phaseLabel: c.phase_label,
    phaseColor: PHASE_COLOR[c.phase] ?? 'secondary',
    barColor:   BAR_COLOR[c.phase]   ?? 'bg-secondary',
    progress:   `${c.hype_score}%`,
  }))
}

export default function Dashboard() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    getCoins().then(data => setCoins(normalise(data))).catch(console.error);
  }, []);

  return (
    <>
      <div className="min-h-screen relative">
        <Header />
        <Ticker />

        <main className="p-4 space-y-6 pb-32">
          <MarketStats coins={coins} />
          <HypeCycleList coins={coins} />
          <AIAnalystCard />
        </main>

        <BottomNav />
      </div>

      <AnalyticsOverlay />
    </>
  );
}

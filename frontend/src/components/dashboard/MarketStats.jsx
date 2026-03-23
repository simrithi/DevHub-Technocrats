export default function MarketStats({ coins = [] }) {
  const avgHype = coins.length
    ? Math.round(coins.reduce((s, c) => s + c.hype_score, 0) / coins.length)
    : 0
  const pumpAlerts = coins.filter(c => c.hype_score >= 70).length

  return (
    <section className="grid grid-cols-2 gap-3">
      <div className="col-span-2 bg-surface-container-low p-4 rounded-lg border border-outline-variant/10 flex flex-col justify-between">
        <span className="font-label text-[10px] text-on-surface-variant tracking-[0.2em] uppercase">
          Market Coverage
        </span>
        <div className="flex items-baseline gap-2 mt-2">
          <span className="font-headline text-4xl font-bold text-primary">
            {String(coins.length).padStart(2, '0')}
          </span>
          <span className="text-on-surface-variant font-medium">COINS TRACKED</span>
        </div>
      </div>
      <div className="bg-surface-container p-4 rounded-lg flex flex-col gap-1">
        <span className="font-label text-[10px] text-on-surface-variant tracking-wider uppercase">
          Avg Hype Score
        </span>
        <span className="font-headline text-2xl font-bold text-secondary">{avgHype}</span>
      </div>
      <div className="bg-surface-container p-4 rounded-lg flex flex-col gap-1">
        <span className="font-label text-[10px] text-on-surface-variant tracking-wider uppercase">
          Pump Alerts
        </span>
        <span className="font-headline text-2xl font-bold text-secondary">
          {String(pumpAlerts).padStart(2, '0')}
        </span>
      </div>
    </section>
  )
}
